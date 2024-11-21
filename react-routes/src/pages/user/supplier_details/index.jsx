import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import supplierMethods from '../../../services';

function SupplierDetails() {
    const { id } = useParams()
    const [details, setDetails] = useState({})
    console.log(id);

    useEffect(() => {
        (async () => {
            const data = await supplierMethods.getDetails(id)
            setDetails(data)
        })()
    }, [])
    console.log(details);

    return (
        <div>
            <h1 className='font-bold text-2xl text-blue-800'>Suppliers Details</h1>
            <p> <span className='font-bold'>Company Name:</span>  {details.companyName}</p>
            <p> <span className='font-bold'>Contact Name:</span>  {details.contactName}</p>
            <p> <span className='font-bold'>Contact Title:</span>  {details.contactTitle}</p>

            <h2 className='font-bold text-2xl text-blue-800'>Adress Details</h2>
            <p> <span className='font-bold'>Street:</span>  {details.address?.street}</p>
            <p> <span className='font-bold'>City:</span>  {details.address?.city}</p>
            <p> <span className='font-bold'>Region:</span>  {details.address?.region}</p>
            <p> <span className='font-bold'>PostalCode:</span>  {details.address?.postalCode}</p>
            <p> <span className='font-bold'>Country:</span>  {details.address?.country}</p>
            <p> <span className='font-bold'>Phone:</span>  {details.address?.phone}</p>
        </div>
    )
}

export default SupplierDetails