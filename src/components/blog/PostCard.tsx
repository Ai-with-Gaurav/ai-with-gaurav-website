import Link from "next/link";
import { Calendar, Clock, ArrowRight, Mic, Workflow, Database, FileText } from "lucide-react";
import { format } from "date-fns";
import Badge from "@/components/ui/Badge";
import type { BlogPost } from "@/types";

interface PostCardProps {
  post: BlogPost;
}

const tagIconMap: Record<string, React.ElementType> = {
  "voice-ai": Mic,
  vapi: Mic,
  automation: Workflow,
  n8n: Workflow,
  workflow: Workflow,
  rag: Database,
  langchain: Database,
  ai: Database,
};

function getPostIcon(tags: string[]): React.ElementType {
  for (const tag of tags) {
    if (tagIconMap[tag]) return tagIconMap[tag];
  }
  return FileText;
}

export default function PostCard({ post }: PostCardProps) {
  const Icon = getPostIcon(post.tags);

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="relative h-full rounded-2xl border border-dark-600 bg-dark-800 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 flex flex-col overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Header: Icon + reading time */}
        <div className="relative flex items-start justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            <Icon className="h-6 w-6" />
          </div>
          {post.readingTime && (
            <span className="flex items-center gap-1 rounded-full bg-dark-700 px-3 py-1 text-xs text-text-muted">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="relative mb-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="primary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="relative mb-2 text-xl font-bold text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="relative mb-5 flex-1 text-sm text-text-muted leading-relaxed line-clamp-3">
          {post.description}
        </p>

        {/* Divider + Footer */}
        <div className="relative border-t border-dark-600 pt-4 mt-auto">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs text-text-muted">
              <Calendar className="h-3.5 w-3.5" />
              {post.date ? format(new Date(post.date), "MMM d, yyyy") : ""}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
