import Section from "@/components/Section";
import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-background">
            <div className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="flex items-center justify-center gap-x-4 text-xs mb-8">
                            <time dateTime={post.date} className="text-muted-foreground">
                                {post.date}
                            </time>
                            <span className="relative z-10 rounded-full bg-secondary/50 px-3 py-1.5 font-medium text-secondary-foreground border border-secondary">
                                {post.category.title}
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif mb-8 leading-tight">
                            {post.title}
                        </h1>
                        {post.author && (
                            <div className="flex items-center justify-center gap-x-4">
                                <div className="relative h-10 w-10">
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div className="text-sm text-left">
                                    <p className="font-semibold text-foreground">{post.author.name}</p>
                                    <p className="text-muted-foreground">{post.author.role}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Section background="default" className="!pt-0">
                <div className="mx-auto max-w-4xl">
                    {post.imageUrl && (
                        <div className="relative w-full aspect-[21/9] mb-12 rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                    <div className="mx-auto max-w-3xl prose prose-neutral prose-lg !text-muted-foreground whitespace-pre-wrap leading-relaxed">
                        {post.content}
                    </div>

                    <div className="mt-24 pt-12 border-t border-border/50 text-center">
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors"
                        >
                            <span aria-hidden="true">←</span>
                            お知らせ一覧に戻る
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
