interface ContactButtonProps {
  href?: string
  label?: string
  className?: string
}

export default function ContactButton({
  href = '#contact',
  label = 'Contact Me',
  className = '',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`hero-connect-button ${className}`}
      aria-label={label}
    >
      <span className="dots_border" aria-hidden="true" />
      <svg className="sparkle" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path className="path" d="M12 2.5L13.8 8.2L19.5 10L13.8 11.8L12 17.5L10.2 11.8L4.5 10L10.2 8.2L12 2.5Z" />
        <path className="path" d="M18.5 14.5L19.1 16.9L21.5 17.5L19.1 18.1L18.5 20.5L17.9 18.1L15.5 17.5L17.9 16.9L18.5 14.5Z" />
        <path className="path" d="M5.5 14.5L6.1 16.9L8.5 17.5L6.1 18.1L5.5 20.5L4.9 18.1L2.5 17.5L4.9 16.9L5.5 14.5Z" />
      </svg>
      <span className="text_button">{label}</span>
    </a>
  )
}
