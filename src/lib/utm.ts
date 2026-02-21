"use client";

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const STORAGE_KEY = "ops_utm";

export type UTMData = Partial<Record<(typeof UTM_PARAMS)[number], string>>;

/** Capture UTM params from URL and store in sessionStorage. Call on app mount. */
export function captureUTM(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const utm: UTMData = {};
  let found = false;

  for (const key of UTM_PARAMS) {
    const val = params.get(key);
    if (val) {
      utm[key] = val;
      found = true;
    }
  }

  if (found) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  }
}

/** Retrieve stored UTM data (returns empty object if none). */
export function getUTM(): UTMData {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Append stored UTM params to any form submission payload. */
export function appendUTM<T extends Record<string, unknown>>(data: T): T & UTMData {
  return { ...data, ...getUTM() };
}
