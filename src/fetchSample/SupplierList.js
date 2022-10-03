import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SupplierList() {


     //Benzer işin axios ile yapımı: 

    const [suppliers, setsuppliers] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => setsuppliers(res.data));

    }, [])


    //supliear var ise (&&)
    return (<>
        <ul>
            {
                suppliers && suppliers.map((item,key) => {
                    return <li>{item.companyName}</li>
                })
            }
        </ul>
    </>
    )
}

export default SupplierList