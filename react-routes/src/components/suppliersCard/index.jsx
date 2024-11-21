import React from 'react'
import SupplierDetails from '../../pages/user/supplier_details';
import { Link } from 'react-router-dom';

function SupplierCard({id, companyName, contactName, contactTitle }) {

    return (
        <div className='w-4/12 p-3'>
            <div className='flex flex-col gap-2 border-2 border-blue-400 rounded-md p-2'>
                <h3> <span className='font-bold'>Company:</span> {companyName}</h3>
                <p> <span className='font-bold'>Contact:</span> {contactName}</p>
                <p> <span className='font-bold'>Contact:</span> Title: {contactTitle}</p>
                <Link to={`/suppliers/${id}`}>
                    <p className='bg-blue-700 w-12/12 text-white rounded py-0.5 px-5'>Details</p>
                </Link>
            </div>

        </div>
    )
}

export default SupplierCard