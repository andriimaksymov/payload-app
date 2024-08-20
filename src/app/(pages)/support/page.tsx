'use client'

import { useForm } from 'react-hook-form'

import { Button } from '../../_components/Button'
import Container from '../../_components/Container'
import { Input } from '../../_components/Input'

import styles from './Support.module.scss'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export default function Support() {
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>()

  return (
    <Container className={styles.wrapper}>
      <div>
        <h1>We are here for you!</h1>
        <p className={styles.description}>We are happy to answer any questions</p>
      </div>
      <div>
        <form action="">
          <Input
            name="name"
            label="Name"
            placeholder="What should we call you?"
            register={register}
            error={errors.name}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="hero@shazam.ai"
            register={register}
            error={errors.email}
          />
          <Input
            name="subject"
            label="Subject"
            placeholder="What do you want to talk about?"
            register={register}
            error={errors.subject}
          />
          <Input
            rows={5}
            multiline
            name="message"
            label="Message"
            placeholder="Tell me everything"
            register={register}
            error={errors.subject}
          />
          <div className={styles.submitButton}>
            <Button appearance="secondary" label="Submit" type="submit" />
          </div>
        </form>
      </div>
    </Container>
  )
}
