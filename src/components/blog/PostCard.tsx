import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import type { BlogPost } from "@/types";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full flex flex-col">
        {/* Thumbnail placeholder */}
        <div className="mb-4 aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-dark-700 flex items-center justify-center overflow-hidden">
          <span className="text-4xl font-bold text-primary/20">
            {post.title.charAt(0)}
          </span>
        </div>

        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="primary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm text-text-muted leading-relaxed line-clamp-3">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {post.date ? format(new Date(post.date), "MMM d, yyyy") : ""}
          </span>
          {post.readingTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          )}
        </div>
      </Card>
    </Link>
  );
}
