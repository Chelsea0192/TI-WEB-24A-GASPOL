interface OverviewProps {
  title: string
  content: string
}

export default function Overview({ title, content }: OverviewProps) {
  return (
    <div className="overview">
      <h2 className="overview-title">{title}</h2>
      <div className="overview-content">
        <p>{content}</p>
      </div>
    </div>
  )
}