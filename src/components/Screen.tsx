import {cx} from 'class-variance-authority'
import {ClassValue} from 'class-variance-authority/types'
import {ReactNode} from 'react'

function Screen({
  children,
  className
}: {
  children?: ReactNode
  className?: ClassValue
}) {
  return <div className={cx('absolute inset-0', className)}>{children}</div>
}

export default Screen
