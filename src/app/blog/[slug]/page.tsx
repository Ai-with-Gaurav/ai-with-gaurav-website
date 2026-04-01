import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { getAllSlugs, getPostBySlug } from "@/lib/blog/mdx";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import mdxComponents from "@/components/blog/MDXComponents";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <div className="pt-24 pb-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Back link */}
          <a
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </a>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="primary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl leading-tight">
              {frontmatter.title}
            </h1>

            {frontmatter.description && (
              <p className="mt-4 text-lg text-text-muted">
                {frontmatter.description}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {frontmatter.author}
              </span>
              {frontmatter.date && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {format(new Date(frontmatter.date), "MMMM d, yyyy")}
                </span>
              )}
              {frontmatter.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {frontmatter.readingTime}
                </span>
              )}
            </div>

            <div className="mt-6">
              <ShareButtons title={frontmatter.title} slug={slug} />
            </div>
          </header>

          {/* Content with TOC */}
          <div className="relative grid gap-12 xl:grid-cols-[1fr_200px]">
            <article className="prose-custom">
              <MDXRemote
                source={content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    rehypePlugins: [rehypeHighlight, rehypeSlug],
                  },
                }}
              />
            </article>

            <TableOfContents />
          </div>
        </div>
      </Container>
    </div>
  );
}
