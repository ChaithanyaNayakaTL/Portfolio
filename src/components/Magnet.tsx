import { useEffect, useRef, useState, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)')
  const [transition, setTransition] = useState(inactiveTransition)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Distance from cursor to the nearest edge of the element's padded box
      const dx = Math.max(rect.left - padding - e.clientX, 0, e.clientX - (rect.right + padding))
      const dy = Math.max(rect.top - padding - e.clientY, 0, e.clientY - (rect.bottom + padding))
      const edgeDist = Math.sqrt(dx * dx + dy * dy)

      if (edgeDist === 0) {
        const distX = e.clientX - centerX
        const distY = e.clientY - centerY
        setTransition(activeTransition)
        setTransform(`translate3d(${distX / strength}px, ${distY / strength}px, 0px)`)
      } else {
        setTransition(inactiveTransition)
        setTransform('translate3d(0px, 0px, 0px)')
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [padding, strength, activeTransition, inactiveTransition])

  return (
    <div className={className} style={{ transform, transition, willChange: 'transform' }}>
      <div ref={ref}>{children}</div>
    </div>
  )
}
