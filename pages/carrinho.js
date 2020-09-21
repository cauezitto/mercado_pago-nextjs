import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Carrinho() {
    const [products, setProducts] = useState(Array)
    const [payment, setPayment] = useState(Object)

    const loadPayment = async () =>{
        const response = await axios.post('/api/payment', {
            items: JSON.parse(localStorage.getItem('cart'))
        })

        console.log(response)

        setPayment(response.data)
    }

    useEffect(()=>{
        loadPayment()
        setProducts(JSON.parse(localStorage.getItem('cart')))
    },[])

    return (
        <div>
            {
                products[0] && products.map(product => (
                    <h1>
                        {`${product.title}, ${product.unit_price}`}
                    </h1>
                ))
            }

            <a href = {payment.sandbox_init_point} target = '_blank' >
                <button>
                  Pagar
                </button>
            </a>
        </div>
    )
}
