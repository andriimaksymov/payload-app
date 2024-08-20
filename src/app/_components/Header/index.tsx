import Image from 'next/image'
import Link from 'next/link'

import ShoppingBagIcon from '../../_assets/icons/ShoppingBagIcon'
import Container from '../../_components/Container'
import IconButton from '../../_components/IconButton'
import Nav from './Nav'

import styles from './index.module.scss'

export async function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.wrap}>
        <Nav />
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo-sm.png" alt="1" width={48} height={48} />
        </Link>
        <div className={styles.headerRight}>
          <IconButton component={Link} href="/cart" icon={ShoppingBagIcon} />
        </div>
      </Container>
    </header>
  )
}
