import clsx from 'clsx'

import styles from './Divider.module.scss'

type DividerProps = {
  className?: string
  space?: 1 | 2 | 3 | 4 | 5
}

export default function Divider({ className, space }: DividerProps) {
  return <div className={clsx(styles.root, className, space && [styles[`space${space}`]])} />
}
