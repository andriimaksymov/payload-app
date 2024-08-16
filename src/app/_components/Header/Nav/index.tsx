'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

import MenuIcon from '../../../_assets/icons/MenuIcon'
import IconButton from '../../../_components/IconButton'

import styles from './index.module.scss'

const navItems = [
  { label: 'Home Page', href: '/' },
  { label: 'Buy', href: '/' },
  { label: 'Band', href: '/' },
  { label: 'Brand', href: '/' },
  { label: 'Shop', href: '/' },
  { label: 'Support', href: '/' },
]

export default function Nav() {
  const menuRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (window.innerWidth < 768) {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
        gsap.to(menuRef.current, {
          height: 'calc(100dvh - 2.5rem)',
          duration: 0.5,
          ease: 'power3.out',
          overflow: 'visible',
        })
      } else {
        document.body.style.overflow = ''
        gsap.to(menuRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power3.in',
          overflow: 'hidden',
        })
      }
    }
  }, [isOpen])

  return (
    <>
      <IconButton icon={MenuIcon} onClick={handleToggle} className={styles.menuButton} />
      <div ref={menuRef} className={styles.menu}>
        <nav className={styles.nav}>
          {navItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.navItem}
              onClick={handleToggle}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
