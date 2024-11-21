import React, { useEffect } from 'react'
import SupplierDetails from '../../pages/user/supplier_details';
import { Link } from 'react-router-dom';
import supplierMethods from '../../services';

function ManageCard({ id, companyName, contactName, contactTitle, address }) {

    
    return (
        <div className='w12/12 p-3'>
            <div className='flex flex-col gap-2 border-2 border-blue-400 rounded-md p-2'>
                <h3> <span className='font-bold'>Company:</span> {companyName}</h3>
                <p> <span className='font-bold'>Contact:</span> {contactName}</p>
                <p> <span className='font-bold'>Contact:</span> Title: {contactTitle}</p>
                <p> <span className='font-bold'>Street:</span>  {address?.street}</p>
                <p> <span className='font-bold'>City:</span>  {address?.city}</p>
                <p> <span className='font-bold'>Region:</span>  {address?.region}</p>
                <p> <span className='font-bold'>PostalCode:</span>  {address?.postalCode}</p>
                <p> <span className='font-bold'>Country:</span>  {address?.country}</p>
                <p> <span className='font-bold'>Phone:</span>  {address?.phone}</p>
                <button onClick={ async ()=>{
                    await supplierMethods.deleteSuppliers(id)
                    window.location.reload()
                }} className='bg-red-600 text-white py-2'>Delete</button>
            </div>
        </div>
    )
}

export default ManageCard