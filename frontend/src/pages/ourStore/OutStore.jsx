import React from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import Filter from '../../components/ourstore/Filter'
import Sort from '../../components/ourstore/Sort'

const OutStore = () => {
  return (
    <div>
      <BreadCrumbs title={"Our Store"}/>
    <div className='w-12/12 pt-8   px-4
    lg:px-16 md:px-14 sm:px-8 min-h-screen bg-gray-100'>
     <div className='flex gap-8'>
     <Filter/>
      <Sort/>
     </div>
    </div>
    </div>
  )
}

export default OutStore