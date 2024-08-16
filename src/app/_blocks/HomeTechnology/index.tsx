import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'homeTechnology' }>

export const HomeTechnology: React.FC<
  Props & {
    id?: string
  }
> = props => {
  return (
    <Gutter className={classes.content}>
      <div className={classes.grid}>home technologies slider</div>
    </Gutter>
  )
}
