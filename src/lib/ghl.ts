/**
 * GHL v2 API Helper
 * Centralizes all Go High Level API calls using the v2 REST API.
 * Uses the pit- (Private Integration Token) for auth.
 *
 * v2 base: https://services.leadconnectorhq.com
 * Auth:    Authorization: Bearer <pit-token>
 * Header:  Version: 2021-07-28
 */

const GHL_BASE_URL =
  (process.env.GHL_BASE_URL || "https://services.leadconnectorhq.com").trim();
const GHL_API_KEY = (process.env.GHL_API_KEY || "").trim();
const GHL_LOCATION_ID = (process.env.GHL_LOCATION_ID || "").trim();

/** Quick check — logs a warning if credentials look missing. */
function assertCredentials() {
  if (!GHL_API_KEY) console.error("[GHL] ⚠️  GHL_API_KEY is empty — all API calls will fail.");
  if (!GHL_LOCATION_ID) console.error("[GHL] ⚠️  GHL_LOCATION_ID is empty — all API calls will fail.");
}

/* ─── Low-level helpers ─── */

function headers(): Record<string, string> {
  return {
    Authorization: `Bearer ${GHL_API_KEY}`,
    "Content-Type": "application/json",
    Version: "2021-07-28",
  };
}

export async function ghlGet(path: string) {
  const url = `${GHL_BASE_URL}${path}`;
  console.log(`[GHL GET] ${url}`);
  const res = await fetch(url, { method: "GET", headers: headers() });
  if (!res.ok) {
    const text = await res.text();
    console.error(`[GHL GET ${path}] ${res.status}: ${text}`);
    throw new Error(`GHL GET ${path} failed: ${res.status} — ${text}`);
  }
  return res.json();
}

export async function ghlPost(path: string, body: unknown) {
  const url = `${GHL_BASE_URL}${path}`;
  console.log(`[GHL POST] ${url}`, JSON.stringify(body).slice(0, 500));
  const res = await fetch(url, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error(`[GHL POST ${path}] ${res.status}: ${text}`);
    throw new Error(`GHL POST ${path} failed: ${res.status} — ${text}`);
  }
  return res.json();
}

export async function ghlPut(path: string, body: unknown) {
  const url = `${GHL_BASE_URL}${path}`;
  console.log(`[GHL PUT] ${url}`);
  const res = await fetch(url, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error(`[GHL PUT ${path}] ${res.status}: ${text}`);
    throw new Error(`GHL PUT ${path} failed: ${res.status} — ${text}`);
  }
  return res.json();
}

/* ─── Custom Field ID Discovery ─── */

// Maps GHL custom field *name* → field *id*
let fieldMapCache: Record<string, string> | null = null;

/**
 * Fetches all custom fields for the location and returns a
 * name→id lookup map. Cached after first call.
 * v2 endpoint: GET /locations/{locationId}/customFields
 */
export async function getCustomFieldMap(): Promise<Record<string, string>> {
  if (fieldMapCache) return fieldMapCache;

  try {
    const data = await ghlGet(
      `/locations/${GHL_LOCATION_ID}/customFields`
    );
    const fields: { id: string; name: string }[] = data.customFields || [];
    const map: Record<string, string> = {};
    for (const f of fields) {
      map[f.name] = f.id;
    }
    fieldMapCache = map;
    console.log(
      `[GHL] Loaded ${Object.keys(map).length} custom fields:`,
      JSON.stringify(map, null, 2)
    );
    return map;
  } catch (err) {
    console.error("[GHL] Failed to load custom fields:", err);
    return {};
  }
}

/**
 * Given a map of { "Field Name": "value" }, resolves names to IDs
 * and returns an array in v2 format: { id, field_value }.
 */
export async function resolveCustomFields(
  namedFields: Record<string, string | undefined>
): Promise<{ id: string; field_value: string }[]> {
  const map = await getCustomFieldMap();
  const result: { id: string; field_value: string }[] = [];

  for (const [name, value] of Object.entries(namedFields)) {
    if (!value) continue;
    const id = map[name];
    if (id) {
      result.push({ id, field_value: value });
    } else {
      console.warn(
        `[GHL] Custom field "${name}" not found in location. Available: ${Object.keys(map).join(", ")}`
      );
    }
  }

  return result;
}

/* ─── Contact helpers ─── */

export interface CreateContactPayload {
  locationId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  source?: string;
  tags?: string[];
  customFields?: { id: string; field_value: string }[];
}

/**
 * Create or update a contact via v2 upsert endpoint.
 * If a contact with the same email already exists in the location,
 * it UPDATES that contact (merges tags, sets custom fields).
 * If not, it creates a new one.
 * Returns { contact: { id, ... }, new: boolean }.
 */
export async function createOrUpdateContact(
  payload: Omit<CreateContactPayload, "locationId">
) {
  assertCredentials();
  return ghlPost("/contacts/upsert", {
    locationId: GHL_LOCATION_ID,
    ...payload,
  });
}

/**
 * Update an existing contact by ID.
 * Use this when you already have the contactId and want to
 * add/change fields without risking a duplicate.
 */
export async function updateContactById(
  contactId: string,
  payload: Partial<Omit<CreateContactPayload, "locationId">>
) {
  assertCredentials();
  return ghlPut(`/contacts/${contactId}`, payload);
}

/**
 * Create a pipeline opportunity for a contact via v2 API.
 */
export async function createOpportunity(opts: {
  pipelineId: string;
  stageId?: string;
  contactId: string;
  title: string;
  status?: string;
}) {
  return ghlPost("/opportunities/", {
    pipelineId: opts.pipelineId,
    locationId: GHL_LOCATION_ID,
    name: opts.title,
    stageId: opts.stageId,
    contactId: opts.contactId,
    status: opts.status || "open",
  });
}

/* ─── Exports for convenience ─── */
export { GHL_LOCATION_ID, GHL_BASE_URL };
