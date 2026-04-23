import { clsx } from "clsx";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    background?: "default" | "muted" | "accent";
}

export default function Section({ id, className, children, title, subtitle, background = "default" }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx("relative py-16 sm:py-32", className)}
        >
            {background !== "default" && (
                <div
                    className={clsx("absolute inset-0 -z-10", {
                        "bg-muted/50": background === "muted",
                        "bg-accent/20": background === "accent",
                    })}
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                    }}
                />
            )}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="mx-auto text-center mb-10 sm:mb-16">
                        {title && <h2 className="text-2xl font-bold tracking-widest text-foreground sm:text-4xl font-serif">{title}</h2>}
                        {subtitle && <p className="mt-3 text-base leading-relaxed text-muted-foreground/80 font-light sm:text-lg sm:mt-4">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
