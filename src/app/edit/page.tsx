'use client'

import { useSearchParams } from 'next/navigation'

import { EditForm } from '@/components/templates/EditForm'

import type { NextPage } from 'next'

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
