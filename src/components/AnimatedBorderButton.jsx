import { Download } from "lucide-react"

export const AnimatedBorderButton = () => {
    return (
        <button
            className="relative px-8 py-4 text-lg font-medium rounded-full overflow-hidden border border-border bg-transparent text-foreground group"
        >
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
            >
                <rect
                    x="1"
                    y="1"
                    width="98"
                    height="38"
                    rx="20"
                    ry="20"
                    className="animated-border-path"
                />
            </svg>

            <span className="relative z-10 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
            </span>
        </button>
    )
}