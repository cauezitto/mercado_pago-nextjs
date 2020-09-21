import Head from 'next/head'
import styles from '../styles/Home.module.css'
import productCard from '../styles/products.module.css'
import Link from 'next/link'

import {useEffect, useState} from 'react'

export default function Home() {
  const[products, setProducts] = useState([
    {
      title: 'Camiseta preta',
      unit_price: 25.00,
      image: 'camisetaPreta.webp',
    },
    {
      title: 'Camiseta azul',
      unit_price: 25.50,
      image: 'camisetaAzul.webp',
    },
    {
      title: 'Camiseta legal',
      unit_price: 30.00,
      image: 'camisetaLegal.jpg',
    },
    {
      title: 'Camiseta feia',
      unit_price: 10.00,
      image: 'camisaFeia.jpg',
    },
  ]) 

  const [cart, setCart] = useState(Array)

  const total = () =>{
    const preços = cart.map(product => product.unit_price)

    let montante = 0

    preços.map(preço => montante = montante + preço)

    return montante
  }


  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          products.map(product =>(
            <div className = {productCard.container} key = {product.title} >
              <img src = {product.image}/>

              <strong>
                {product.title}
              </strong>

              <span>
                {`Apenas R$${Number(product.unit_price).toFixed(2)}`}
              </span>

              <button onClick = {()=>{
                setCart([...cart, product])
              }} >
                Adicionar ao carrinho
              </button>
            </div>
          ))
        }
      </main>

      <div>
        {`Produtos no carrinho: ${cart.length}`}
      </div>

      <div>
        {`Total: ${total()}`}
      </div>

      <Link href = '/carrinho' >
        <a>
          <button>
            Fechar carrinho
          </button>
        </a>
      </Link>

    </div>
  )
}
