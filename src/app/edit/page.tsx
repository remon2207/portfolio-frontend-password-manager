'use client'

import type { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import { EditForm } from '@/components/templates/EditForm'

const Edit: NextPage = () => {
  const params = useSearchParams()
  const id = Number(params.get('id'))

  return (
    <>
      <EditForm id={id} />
    </>
  )
}

export default Edit
