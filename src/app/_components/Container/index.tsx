import React from 'react'
import clsx from 'clsx'

import styles from './Container.module.scss'

type ContainerProps = {
  className?: string
  children?: React.ReactNode
}

export default function Container({ className, children }: ContainerProps) {
  return <div className={clsx(styles.root, className)}>{children}</div>
}
