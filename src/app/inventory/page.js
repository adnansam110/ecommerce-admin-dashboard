import { Layout } from '@/components/Layout/Layout'
import Table from '@/components/Table/Table'
import React from 'react'

const Inventory = () => {
  return (
    <div className='flex bg-white'>
      <Layout />
      <section className='flex-1'>
        <Table />
      </section>
    </div>
  )
}

export default Inventory