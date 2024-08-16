import React from 'react'
import Link from 'next/link'

import LogoFooterIcon from '../../_assets/icons/LogoFooterIcon'
import Container from '../../_components/Container'

import styles from './index.module.scss'

export async function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <Link href="/">
          <LogoFooterIcon />
        </Link>
        <nav className={styles.nav}>
          <div className={styles.copyright}>Copyright © 2024 Shazam! Inc. All rights reserved.</div>
          <Link href="/" className={styles.innerLink}>
            Privacy Policy
          </Link>
          <Link href="/" className={styles.innerLink}>
            Terms of Use
          </Link>
        </nav>
      </Container>
    </footer>
  )
}
