import type { ReactNode } from "react"

interface SkillBadgeProps {
  children: ReactNode
}

export function SkillBadge({ children }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
      {children}
    </div>
  )
}

