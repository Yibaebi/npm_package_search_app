import React from 'react'
import './Tag.css'

interface TagProps {
  label: string
}

const Tag: React.FC<TagProps> = ({ label }) => {
  const selectedStyles = selectRandomColor()
  console.log(selectedStyles)
  return (
    <span className="nps-tag" style={{ ...selectedStyles }}>
      {label}
    </span>
  )
}

// Helper Function
const tagStyles: { color: string; background: string }[] = [
  { color: ' #D0678A', background: '#FFEDF3' },
  { color: ' #805BBC', background: ' #F4EDFF' },
  { color: ' #51933E', background: '#DFF4D7' },
  { color: ' #E27F23', background: '#FFECDA' },
]

const selectRandomColor = () => tagStyles[Math.round(Math.random() * (tagStyles.length - 1))]

export { Tag }
