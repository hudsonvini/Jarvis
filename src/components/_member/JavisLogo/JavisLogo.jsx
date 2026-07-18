export default function JavisLogo({ className, size = "sm" }) {
    const width = size === "lg" ? 220 : 120;
    const height = size === "lg" ? 62 : 34;
    const fontSize = size === "lg" ? 50 : 28;

    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Javis Game Academy"
        >
            <text
                x="50%"
                y={size === "lg" ? 44 : 24}
                textAnchor="middle"
                fill="currentColor"
                fontFamily="Syne, Helvetica, sans-serif"
                fontSize={fontSize}
                fontWeight="800"
                letterSpacing="-0.03em"
            >
                JAVIS
            </text>
            <rect x="0" y={height - 4} width={width} height="3" rx="1.5" fill="currentColor" opacity="0.6" />
        </svg>
    );
}
