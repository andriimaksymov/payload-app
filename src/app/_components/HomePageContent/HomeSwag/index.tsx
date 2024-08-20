import Image from 'next/image'

import { Button } from '../../../_components/Button'
import Container from '../../../_components/Container'
import ScrollAnimated from '../../../_components/ScrollAnimated'

import styles from './HomeSwag.module.scss'

export default function HomeSwag() {
  return (
    <div className={styles.wrapper}>
      <ScrollAnimated>
        <Container className={styles.card}>
          <div className={styles.cardInfo}>
            <h2>Shazam Swag</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </p>
            <Button appearance="secondary" href="/shop" label="Explore our Shop" />
          </div>
          <div className={styles.cardImageWrapper}>
            <Image fill src="/images/swag.png" alt="" />
          </div>
        </Container>
      </ScrollAnimated>
    </div>
  )
}
