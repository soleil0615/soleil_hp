import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";

export default function NewsSection() {
    // Show only the latest 3 posts
    const latestPosts = posts.slice(0, 3);

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto text-center mb-10 sm:mb-16">
                <h2 className="text-2xl font-bold tracking-widest text-foreground sm:text-4xl font-serif">What&apos;s New</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground/80 font-light sm:text-lg sm:mt-4">最新のお知らせ</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {latestPosts.map((post) => (
                    <article key={post.id} className="flex flex-col items-start justify-between">
                        <div className="relative w-full aspect-[16/10] mb-8 overflow-hidden rounded-[2rem] bg-muted/50 group shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)]">
                            {post.imageUrl && (
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            )}
                            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-foreground/5" />
                        </div>
                        <div className="flex items-center gap-x-4 text-[10px] tracking-widest uppercase font-bold">
                            <time dateTime={post.date} className="text-muted-foreground/70">
                                {post.date}
                            </time>
                            <span className="relative z-10 rounded-full bg-secondary/50 px-3 py-1 text-secondary-foreground font-medium">
                                {post.category.title}
                            </span>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-4 text-xl font-bold leading-relaxed text-foreground group-hover:text-primary transition-colors font-serif">
                                <Link href={`/news/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground/80 font-light">{post.description}</p>
                        </div>
                    </article>
                ))}
            </div>
            <div className="mt-20 text-center">
                <Link
                    href="/news"
                    className="rounded-full bg-primary/80 px-10 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                    お知らせ一覧を見る
                </Link>
            </div>
        </div>
    );
}
