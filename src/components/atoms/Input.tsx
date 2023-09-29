'use client'

import { forwardRef } from 'react'

type Props = React.ComponentPropsWithoutRef<'input'> & {
  testId?: string
}

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ testId, ...props }, ref) => {
  return <input ref={ref} data-testid={testId} {...props} />
})
