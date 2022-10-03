import React, { useEffect, useState } from 'react'

function ProductList() {

    const [products, setproducts] = useState([]);
// Data çekiyoruz:
    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })
            
    }, [])



   //Ürünleri çekip sıralama:
    return (<>
        <ul>
            {
                products && products.map((item,key) => {
                    return <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
        </>
        )
    }
    
    export default ProductList