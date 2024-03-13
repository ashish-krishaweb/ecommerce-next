import { ProductCard } from '@/components/ui'
import { AppHeading, AppText } from '@/components/ui/heading'
import PCard, { TProduct } from '@/components/ui/product.card'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { NewArrivalsProducts } from '..'

export default function ProductListPage() {
   const [products, setProducts] = useState<Array<TProduct>>([])

   useEffect(() => {
      async function fetchDetails() {
         try {
            const res = await fetch(`https://dummyjson.com/products`)
            const data = await res.json()
            // setProducts(data.products)
            setProducts(NewArrivalsProducts.products)
         } catch (err) {}
      }
      fetchDetails()
   }, [])

   return (
      <main className={`flex min-h-screen flex-col items-center justify-between`}>
         <Head>
            <title>{'Products'}</title>
            <meta name='title' content={'Products'} />
         </Head>

         <section className='px-4 lg:px-16 w-full'>
            {/* product card */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
               {products?.map((product) => {
                  // @ts-ignore
                  return <PCard key={product.id} {...product} img={product.images[0]} />
               })}
            </div>
         </section>
      </main>
   )
}
