import Section from "@/components/Section";
import Link from "next/link";
import { posts } from "@/lib/posts";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "お知らせ",
    description: "株式会社ル・ソレイユからの最新情報や、日々の活動の様子、イベント情報をお届けします。",
    alternates: {
        canonical: "/news",
    },
    openGraph: {
        title: "お知らせ | 株式会社ル・ソレイユ",
        description: "最新情報や日々の活動の様子をお届けします。",
    },
};

export default function NewsPage() {
    return (
        <div className="bg-background">
            <div className="relative isolate overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-6xl font-serif">
                            お知らせ
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            ル・ソレイユからの最新情報や、日々の活動の様子をお届けします。
                        </p>
                    </div>
                </div>
            </div>

            <Section background="default">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {posts.map((post) => (
                        <article key={post.id} className="group relative flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-border/40">
                            {post.imageUrl && (
                                <div className="relative w-full aspect-[16/9] overflow-hidden">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
                                            {post.category.title}
                                        </span>
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-col flex-1 p-6">
                                <div className="flex items-center gap-x-4 text-xs mb-3">
                                    <time dateTime={post.date} className="text-muted-foreground">
                                        {post.date}
                                    </time>
                                </div>
                                <div className="group relative flex-1">
                                    <h3 className="text-lg font-semibold leading-7 text-foreground group-hover:text-primary transition-colors duration-200">
                                        <Link href={`/news/${post.slug}`}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                                        {post.description}
                                    </p>
                                </div>
                                {post.author && (
                                    <div className="mt-6 flex items-center gap-x-3 pt-6 border-t border-border/50">
                                        <div className="relative h-8 w-8 flex-shrink-0">
                                            <Image
                                                src={post.author.avatar}
                                                alt={post.author.name}
                                                fill
                                                className="rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="text-xs leading-5">
                                            <p className="font-semibold text-foreground">
                                                {post.author.name}
                                            </p>
                                            <p className="text-muted-foreground">{post.author.role}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </Section>
        </div>
    );
}
