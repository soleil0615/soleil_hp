import { clsx } from "clsx";

interface DecorativeBlobProps {
    className?: string;
    variant?: "primary" | "secondary" | "accent";
    delay?: number;
}

export default function DecorativeBlob({ className, variant = "primary", delay = 0 }: DecorativeBlobProps) {
    const colors = {
        primary: "from-[#dfb799] to-[#faedcd]",
        secondary: "from-[#faedcd] to-[#e3d5ca]",
        accent: "from-[#e3d5ca] to-[#d8e2dc]",
    };

    return (
        <div
            className={clsx(
                "absolute -z-10 transform-gpu overflow-hidden blur-3xl opacity-40 pointer-events-none",
                className
            )}
            aria-hidden="true"
        >
            <div
                className={clsx(
                    "relative aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr",
                    colors[variant]
                )}
                style={{
                    clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    animationDelay: `${delay}s`,
                }}
            />
        </div>
    );
}
