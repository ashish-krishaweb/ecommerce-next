import { ProductCard } from '@/components/ui'
import { AppHeading, AppText } from '@/components/ui/heading'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { NewArrivalsProducts } from '..'
import { Product } from '@/stores/product.store'

export default function ProductListPage() {
   const [products, setProducts] = useState<Array<Product>>([])

   useEffect(() => {
      async function fetchDetails() {
         try {
            const res = await fetch(`https://dummyjson.com/products`)
            const data = await res.json()
            setProducts(data.products)
         } catch (err) {}
      }
      fetchDetails()
   }, [])

   return (
      <main className={`flex min-h-screen flex-col items-center justify-between py-4`}>
         <Head>
            <title>{'Products'}</title>
            <meta name='title' content={'Products'} />
         </Head>

         <section className='px-4 lg:px-16 w-full'>
            {/* product card */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
               {products?.map((product) => {
                  // @ts-ignore
                  return <ProductCard key={product.id} src={product.images[0]} id={product.id}>
                  <div className='flex flex-col gap-2 mt-4'>
                     <AppHeading as='h6' className='font-body font-bold'>
                        {product.title}
                     </AppHeading>
                     <AppText className='font-bold text-lg leading-7 lg:text-6 lg:leading-8 text-black'>
                        ${product.price}
                     </AppText>
                  </div>
               </ProductCard>
               })}
            </div>
         </section>
      </main>
   )
}
