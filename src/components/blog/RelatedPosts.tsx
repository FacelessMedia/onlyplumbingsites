import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedPost = {
  slug: string;
  title: string;
  category: string;
};

export default function RelatedPosts({
  posts,
}: {
  posts: RelatedPost[];
}) {
  if (posts.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
        Related Articles
      </h3>
      <ul className="mt-3 space-y-2.5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-2 text-sm text-navy transition-colors hover:text-orange"
            >
              <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="font-medium">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
