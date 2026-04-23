import { Star, Car, Rocket } from "lucide-react";
import { clsx } from "clsx";

export function FloatingStar({ className, size = 24, delay = 0 }: { className?: string; size?: number; delay?: number }) {
    return (
        <div
            className={clsx("absolute animate-pulse text-yellow-400 opacity-60", className)}
            style={{ animationDelay: `${delay}s`, animationDuration: "3s" }}
        >
            <Star size={size} fill="currentColor" />
        </div>
    );
}

export function FloatingCar({ className, size = 32, delay = 0 }: { className?: string; size?: number; delay?: number }) {
    return (
        <div
            className={clsx("absolute animate-bounce text-blue-500 opacity-40", className)}
            style={{ animationDelay: `${delay}s`, animationDuration: "4s" }}
        >
            <Car size={size} fill="currentColor" />
        </div>
    );
}

export function FloatingRocket({ className, size = 40, delay = 0 }: { className?: string; size?: number; delay?: number }) {
    return (
        <div
            className={clsx("absolute animate-pulse text-blue-300 opacity-30", className)}
            style={{ animationDelay: `${delay}s`, animationDuration: "5s" }}
        >
            <Rocket size={size} fill="currentColor" />
        </div>
    );
}
