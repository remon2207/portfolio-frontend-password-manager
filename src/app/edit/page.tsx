'use client'

import { useSearchParams } from 'next/navigation'

import { EditForm } from '@/components/templates/EditForm'

import type { NextPage } from 'next'

const Edit: NextPage = () => {
  const params = useSearchParams()
  const id = params.get('id')

  if (typeof id === 'string') {
    return (
      <>
        <EditForm id={id} />
      </>
    )
  }
  return <>error</>
}

export default Edit
