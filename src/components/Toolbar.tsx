import {ReactNode} from 'react'
import {useSlots} from '../hooks/useSlots'

function LeadingContent({children}: {children?: ReactNode}) {
  return <div>{children}</div>
}

function TitleContent({children}: {children?: ReactNode}) {
  return <div>{children}</div>
}

function TrailingContent({children}: {children?: ReactNode}) {
  return <div>{children}</div>
}

function Toolbar({children}: {children?: ReactNode}) {
  const [slots] = useSlots(children, {
    leftContent: LeadingContent,
    centerContent: TitleContent,
    rightContent: TrailingContent
  })

  return (
    <div className="flex justify-between px-4 py-3 text-sm text-gray-500">
      <div className="flex-none">{slots.leftContent}</div>

      <div className="flex-1 text-center">{slots.centerContent}</div>

      <div className="flex-none">{slots.rightContent}</div>
    </div>
  )
}

Toolbar.LeadingContent = LeadingContent
Toolbar.TitleContent = TitleContent
Toolbar.TrailingContent = TrailingContent

export default Toolbar
