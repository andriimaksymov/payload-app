import clsx from 'clsx'
import Image from 'next/image'

import image1 from '../../_assets/images/brand-image-1.png'
import { Button } from '../../_components/Button'
import Container from '../../_components/Container'

import styles from './Brand.module.scss'

export default function Brand() {
  return (
    <>
      <Container className={styles.container}>
        <h1>We Love Pets. Period.</h1>
        <div className={styles.heroInner}>
          <p className={styles.subtitle}>
            We know that pet's feel more, love more, and think more than they can express and
            believe you deserve to share more deeply with your pet's inner self. We believe that
            technology should be used for good and hope that Shazam engenders love and fun for the
            entire world. Be a hero. Shazam your pet.
          </p>
          <Button appearance="primary" label="Buy now" />
        </div>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={image1} alt="123" />
        </div>
      </Container>
      <div className={styles.outValuesSection}>
        <Container className={styles.container}>
          <div className={styles.header}>
            <h2>Our Values</h2>
            <p className={styles.subtitle}>Using technology for the sake of wellbeing</p>
          </div>
          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <div className={styles.valueItemContent}>
                <h3 className={styles.valueItemTitle}>Value</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueItemContent}>
                <h3 className={styles.valueItemTitle}>Value</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueItemContent}>
                <h3 className={styles.valueItemTitle}>Value</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.gallery}>
            <div>
              <h2>Our Inspiration</h2>
              <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamc.
              </p>
            </div>
            <div className={styles.videoWrapperImage}>
              <Image fill src={image1} alt="" />
            </div>
          </div>
        </div>
      </Container>
      <Container className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.galleryReversed}>
            <div>
              <h2>Roscoe Connected to Life Support</h2>
              <p className={styles.subtitle}>
                It has a very happy ending! He was bitten by a rattlesnake and this event was our
                inspiration. Shazam prevents Rattlesnake Attacks!
              </p>
            </div>
            <div className={styles.videoWrapperImage}>
              <Image fill src={image1} alt="" />
            </div>
          </div>
        </div>
      </Container>
      <Container className={styles.container}>
        <div className={styles.inner}>
          <h2>Shazam Your Pet, They Will Love You For It</h2>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamc.
          </p>
          <div className={clsx(styles.imageWrapper, styles.imageWrapperLast)}>
            <Image className={styles.image} src={image1} alt="123" />
          </div>
        </div>
      </Container>
    </>
  )
}
