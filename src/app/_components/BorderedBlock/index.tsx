import styles from './BorderedBlock.module.scss'

type BorderedBlockProps = {
  leftLabel: string
  leftLabelFootnote?: string
  rightLabel: string
}

export default function BorderedBlock({
  leftLabel,
  leftLabelFootnote,
  rightLabel,
}: BorderedBlockProps) {
  return (
    <div className={styles.root}>
      <div className={styles.leftLabel}>
        {leftLabel} <span className={styles.footnote}>{leftLabelFootnote}</span>
      </div>
      <div className={styles.rightLabel}>{rightLabel}</div>
    </div>
  )
}
