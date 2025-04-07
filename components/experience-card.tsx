import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

export function ExperienceCard({ title, company, period, responsibilities }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="text-sm text-muted-foreground space-y-1">
            <p className="font-medium text-foreground">{company}</p>
            <p>{period}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {responsibility}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

