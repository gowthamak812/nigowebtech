import Link from 'next/link';

interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    icon?: React.ReactNode;
    external?: boolean;
    className?: string;
}

export default function CTAButton({
    href,
    children,
    variant = 'primary',
    icon,
    external = false,
    className = '',
}: CTAButtonProps) {
    const buttonClass = `btn btn-${variant} ${className}`.trim();

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
            >
                {children}
                {icon && <span>{icon}</span>}
            </a>
        );
    }

    return (
        <Link href={href} className={buttonClass}>
            {children}
            {icon && <span>{icon}</span>}
        </Link>
    );
}
