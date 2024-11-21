import React, { useState } from 'react'
import supplierMethods from '../../../services'

function Dashboard() {
  const [formData, setFormdData] = useState({
    
  })

  const updateFormData = (e) => {
    setFormdData({...formData, [e.target.name]: e.target.value })
    console.log(formData);
  }

  const addData = (e) => {
    e.preventDefault();
    supplierMethods.addSuppliers(formData)
  }

  return (
    <>
      <h2 className='font-bold text-2xl my-5'>Company</h2>
      <form onSubmit={addData} className='flex flex-col' action="">
        <input onChange={updateFormData} name='companyName' type="text" placeholder='Company Name' />
        <input onChange={updateFormData} name='contactName' type="text" placeholder='Contact Name' />
        <input onChange={updateFormData} name='contactName' type="text" placeholder='Contact Title' />
        <h2 className='font-bold text-2xl my-5'>Address</h2>
        <input onChange={updateFormData} name='street' type="text" placeholder='Street' />
        <input onChange={updateFormData} name='city' type="text" placeholder='City' />
        <input onChange={updateFormData} name='region' type="text" placeholder='Region' />
        <input onChange={updateFormData} name='postalCode' type="number" placeholder='Postal Code' />
        <input onChange={updateFormData} name='country' type="text" placeholder='Country' />
        <input onChange={updateFormData} name='phone' type="tel" placeholder='Phone' />

        <div className='w-12/12 flex justify-center'>
          <input onClick={() => {
          }} className='w-6/12 bg-blue-500 text-white rounded-md border-none' type="submit" value="submit" />
        </div>
      </form>

    </>
  )
}

export default Dashboard