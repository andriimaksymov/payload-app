'use client'

import { useState } from 'react'
import Modal from 'react-modal'
import gsap from 'gsap'
import Image from 'next/image'

import CloseIcon from '../../_assets/icons/CloseIcon'
import InfoIcon from '../../_assets/icons/InfoIcon'
import { Button } from '../../_components/Button'
import IconButton from '../../_components/IconButton'

import styles from './SizeGuideButton.module.scss'

const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    inset: '50% auto auto 50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 1050,
    borderRadius: 8,
    padding: 'var(--modal-padding)',
    maxHeight: '90dvh',
    overflow: 'auto',
    backgroundColor: '#fff',
    border: 'none',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    opacity: 0,

    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0,
  },
}

const sizes = [
  { label: 'XL', value: '26-32" neck' },
  { label: 'L', value: '18 to 26" neck' },
  { label: 'S', value: '11 to 16" neck' },
  { label: 'M', value: '14 to 20" neck' },
  { label: 'XS', value: '18 to 12" neck' },
]

export default function SizeGuideButton() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(true)
  }

  const afterOpenModal = () => {
    gsap.to('.ReactModal__Content', { opacity: 1, duration: 0.5, ease: 'power3.out' })
    gsap.to('.ReactModal__Overlay', { opacity: 1, duration: 0.5, zIndex: 1, ease: 'power3.out' })
  }

  const handleClose = () => {
    gsap.to('.ReactModal__Content', {
      opacity: 0,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => setIsOpen(false),
    })
    gsap.to('.ReactModal__Overlay', { opacity: 0, duration: 0.5, ease: 'power3.in' })
  }

  return (
    <>
      <Button label="Size guide" className={styles.button} onClick={handleOpen} />
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        className={styles.modal}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleClose}
      >
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Size giude</h2>
            <IconButton className={styles.closeButton} icon={CloseIcon} onClick={handleClose} />
          </div>
          <div className={styles.sizes}>
            <div className={styles.imageWrapper}>
              <Image width={380} height={360} src="/images/sizes-image.png" alt="" />
              <p className={styles.imageFootnote}>
                <InfoIcon />A brief description of how to measure your pet's neck
              </p>
            </div>
            <div>
              {sizes.map(size => (
                <div key={size.label} className={styles.sizeItem}>
                  <div className={styles.sizeLabel}>{size.label}</div>
                  <div className={styles.sizeValue}>{size.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
