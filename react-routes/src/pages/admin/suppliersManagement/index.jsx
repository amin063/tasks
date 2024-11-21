import React, { useEffect, useState } from 'react'
import ManageCard from '../../../components/manageCard'
import supplierMethods from '../../../services'

function Managment() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await supplierMethods.getSuppliers()
      setSuppliers(data);
    })()
  }, [])
console.log(suppliers);

  return (
    suppliers.map((supplier) =>{
      return <ManageCard {...supplier} key={supplier.id}/>
    })
  )
}

export default Managment