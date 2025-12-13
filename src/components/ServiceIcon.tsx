import Image from "next/image";

interface ServiceIconProps {
    src: string;
    alt: string;
    size?: number;
    className?: string;
}

export default function ServiceIcon({ src, alt, size = 48, className = "" }: ServiceIconProps) {
    // Check if it's an external URL (devicons) or local
    const isExternal = src.startsWith("http");

    if (isExternal) {
        return (
            <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
                className={className}
                unoptimized // Required for external SVGs
            />
        );
    }

    // Fallback for local images or emojis
    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={className}
        />
    );
}
