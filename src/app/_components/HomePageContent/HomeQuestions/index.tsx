'use client'

import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import gsap from 'gsap'

import MinusIcon from '../../../_assets/icons/MinusIcon'
import PlusIcon from '../../../_assets/icons/PlusIcon'
import { Button } from '../../../_components/Button'
import Container from '../../../_components/Container'
import ScrollAnimated from '../../../_components/ScrollAnimated'

import styles from './HomeQuestions.module.scss'

const questions = [
  {
    question: 'Questions?',
    answer:
      'Answer lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
  },
  {
    question: 'Questions?',
    answer:
      'Answer lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
  },
  {
    question: 'Questions?',
    answer:
      'Answer lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
  },
  {
    question: 'Questions?',
    answer:
      'Answer lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
  },
  {
    question: 'Questions?',
    answer:
      'Answer lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
  },
]

type QuestionProps = {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const Question: React.FC<QuestionProps> = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline | null>(null)

  useEffect(() => {
    if (contentRef.current) {
      if (tl.current) {
        tl.current.kill()
      }
      tl.current = gsap.timeline()

      if (isOpen) {
        tl.current.fromTo(
          contentRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.1, ease: 'power3.out' },
        )
      } else {
        tl.current.fromTo(
          contentRef.current,
          { height: contentRef.current.scrollHeight, opacity: 1 },
          { height: 0, opacity: 0, duration: 0.25, ease: 'power3.in' },
        )
      }
    }
  }, [isOpen])

  return (
    <div className={clsx(styles.item, isOpen && styles.itemOpen)}>
      <div className={styles.itemHeader} onClick={onClick}>
        <h3 className={styles.itemTitle}>{question}</h3>
        <span className={styles.itemIcon}>{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
      </div>
      <div
        ref={contentRef}
        className={styles.questionAnswer}
        style={{ overflow: 'hidden', height: isOpen ? 'auto' : 0 }}
      >
        {answer}
      </div>
    </div>
  )
}

export default function HomeQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles.wrapper}>
      <Container className={styles.inner}>
        <div>
          <ScrollAnimated>
            <h2>Have Questions?</h2>
          </ScrollAnimated>
          <ScrollAnimated delay={0.1}>
            <p className={styles.description}>We are happy to answer them</p>
          </ScrollAnimated>
          <ScrollAnimated delay={0.2}>
            <Button label="Support" href="/support" appearance="primary" />
          </ScrollAnimated>
        </div>
        <ScrollAnimated>
          <div className={styles.list}>
            {questions.map((q, index) => (
              <Question
                key={index}
                question={q.question}
                answer={q.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </ScrollAnimated>
      </Container>
    </div>
  )
}
