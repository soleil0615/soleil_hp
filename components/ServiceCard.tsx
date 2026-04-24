import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

import { StaticImageData } from "next/image";

interface ServiceCardProps {
    title: ReactNode;
    description: string;
    href: string;
    imageSrc?: string | StaticImageData;
    imagePosition?: string;
    altText?: string;
}

export default function ServiceCard({ title, description, href, imageSrc, imagePosition = "object-center", altText }: ServiceCardProps) {
    return (
        <div className="flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-border/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1.5">
            {imageSrc && (
                <Link href={href} className="relative aspect-[16/10] w-full overflow-hidden block">
                    {imageSrc === "placeholder" ? (
                        <div className="h-full w-full flex items-center justify-center text-muted-foreground bg-secondary/20">
                            {typeof title === 'string' ? title : "Service Image"} Image
                        </div>
                    ) : (
                        <Image
                            src={imageSrc}
                            alt={altText || (typeof title === 'string' ? title : "Service Image")}
                            fill
                            className={`object-cover ${imagePosition} transition-transform duration-700 hover:scale-105`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    )}
                </Link>
            )}
            <div className="flex flex-1 flex-col p-6 sm:p-10">
                <h3 className="text-xl font-bold leading-relaxed text-foreground font-serif tracking-wide sm:text-2xl text-balance">{title}</h3>
                <p className="mt-3 flex-auto text-sm leading-relaxed text-muted-foreground/90 font-light sm:text-base sm:mt-4">{description}</p>
                <div className="mt-10">
                    <Link
                        href={href}
                        className="inline-flex items-center text-sm font-semibold leading-6 text-primary hover:opacity-80 transition-opacity"
                    >
                        詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
