import { Download } from "lucide-react"

export const AnimatedBorderButton = () => {
    return (
        <button className="relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animate-border">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <line class="top" x1="0" y1="0" x2="900" y2="0"></line>
                <line class="left" x1="0" y1="460" x2="0" y2="-920"></line>
                <line class="bottom" x1="300" y1="460" x2="-600" y2="460"></line>
                <line class="right" x1="300" y1="0" x2="300" y2="1380"></line>
            </svg>
            <span>
                <Download />
                Download CV
            </span>
        </button>
    )
}