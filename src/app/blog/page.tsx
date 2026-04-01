import { getAllPosts, getAllTags } from "@/lib/blog/mdx";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PostCard from "@/components/blog/PostCard";
import BlogFilter from "./BlogFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on AI, chatbots, voice assistants, RAG systems, and workflow automation.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="pt-24 pb-20">
      <Container>
        <SectionHeading
          label="Blog"
          title="Insights & Tutorials"
          subtitle="Deep dives into AI, automation, and building production systems"
        />

        <BlogFilter posts={posts} tags={tags} />
      </Container>
    </div>
  );
}
