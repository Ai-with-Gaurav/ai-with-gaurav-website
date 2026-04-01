"use client";

import { useState, useMemo } from "react";
import PostCard from "@/components/blog/PostCard";
import type { BlogPost } from "@/types";

interface BlogFilterProps {
  posts: BlogPost[];
  tags: string[];
}

export default function BlogFilter({ posts, tags }: BlogFilterProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      const matchesTag = !activeTag || post.tags.includes(activeTag);

      return matchesSearch && matchesTag;
    });
  }, [posts, search, activeTag]);

  return (
    <>
      {/* Search & Filter */}
      <div className="mb-10 space-y-4">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-lg border border-dark-600 bg-dark-700 px-4 py-3 text-text-primary placeholder-dark-500 transition-colors focus:border-primary focus:outline-none"
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all cursor-pointer ${
              !activeTag
                ? "bg-primary text-dark-900"
                : "bg-dark-700 text-text-muted hover:text-text-primary"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all cursor-pointer ${
                activeTag === tag
                  ? "bg-primary text-dark-900"
                  : "bg-dark-700 text-text-muted hover:text-text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-lg text-text-muted">No articles found.</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveTag(null);
            }}
            className="mt-3 text-sm text-primary hover:text-primary-light cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
