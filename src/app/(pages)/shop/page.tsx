import Container from '../../_components/Container'
import ProductList from '../../_components/ProductList'

import styles from './Shop.module.scss'

export default function Show() {
  return (
    <>
      <div className={styles.header}>
        <Container>
          <h1>Shazam Swag</h1>
        </Container>
      </div>
      <Container className={styles.inner}>
        <h3>T-Shirt</h3>
        <ProductList categoryId="2" />
      </Container>
      <Container className={styles.inner}>
        <h3>Caps</h3>
        <ProductList categoryId="3" />
      </Container>
    </>
  )
}
