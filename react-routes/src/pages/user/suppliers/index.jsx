import React, { useEffect, useState } from 'react'
import SupplierCard from '../../../components/suppliersCard'
import supplierMethods from '../../../services'

function Suppliers() {
    const [suppliers, setSuppliers] = useState([])



    useEffect(() => {
        (async () => {
            try {
                const data = await supplierMethods.getSuppliers();
                setSuppliers(data)
            } catch (error) {
                console.error()
            }
        })()
    }, [])

    console.log(suppliers);
    return (
        <div className='flex flex-wrap'>
            {
                suppliers.map((supplier) => <SupplierCard key={supplier.id} {...supplier} />)
            }
        </div>
    )
}

export default Suppliers