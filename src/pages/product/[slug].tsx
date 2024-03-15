import { AppButton } from '@/components/ui'
import { AppHeading } from '@/components/ui/heading'
import { cnMerge } from '@/lib/cn-merge'
import useProductStore, { Product } from '@/stores/product.store'
import { For } from 'classic-react-components'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ProductDetailPage(props: Product) {
   const router = useRouter()
   const productIdSlug = +router.query.slug!
   const [productDetails, setProductDetails] = useState<Product>({} as Product)
   const [active, setActive] = useState(0)
   const [activeSize, setActiveSize] = useState(2)
   const count = useProductStore((state) => state.itemsId.get(+router.query?.slug!)) ?? 0
   const increment = useProductStore((state) => state.increment)
   const decrement = useProductStore((state) => state.decrement)
   const removeItem = useProductStore((state) => state.removeItem)

   useEffect(() => {
      if (props.id) {
         setProductDetails(props)
         return
      }
      async function fetchDetails() {
         if (productIdSlug) {
            try {
               const res = await fetch(`https://dummyjson.com/products/${productIdSlug}`)
               const data = await res.json()
               setProductDetails(data)
            } catch (err) {}
         }
      }
      fetchDetails()
   }, [productIdSlug])

   return (
      <main className={`flex min-h-screen flex-col items-center justify-between`}>
         <Head>
            <title>{props.title}</title>
            <meta name='title' content={props.title} />
            <meta name='og:title' content={props.title} />
            <meta name='description' content={props.description} />
            <meta name='og:description' content={props.description} />
            <meta name='og:image' content={props.images[0]} />
         </Head>

         {Object.keys(productDetails).length == 0 && (
            <>
               <div className='h-full flex flex-col items-center justify-center'>
                  <div className='loader'></div>
                  <p className='mt-2'>Loading...</p>
               </div>
            </>
         )}

         {Object.keys(productDetails).length > 0 && (
            <div className='w-full grid lg:grid-cols-8 gap-4 px-4 lg:px-16'>
               <div className='flex flex-row lg:flex-col gap-[14px] lg:col-span-1 max-lg:row-start-2'>
                  <For data={productDetails.images?.slice(0, 3)}>
                     {(img, idx) => {
                        return (
                           <div
                              key={img}
                              className={`${active == idx ? 'border-black' : ''} flex items-center w-[152px] h-[167px] bg-gray-100 p-4 border  rounded-lg cursor-pointer`}
                              onClick={() => setActive(idx)}>
                              <img src={img} alt='image' />
                           </div>
                        )
                     }}
                  </For>
               </div>

               <div
                  className={` lg:col-span-3 flex items-center justify-center h-[290px] lg:h-[530px] bg-gray-100 p-4 border  rounded-lg`}>
                  <img src={productDetails.images?.[active]} style={{ height: '100%' }} />
               </div>

               <div className=' lg:col-span-4 flex flex-col gap-5 lg:gap-[24px] flex-1'>
                  <div className='flex flex-col gap-[16px] pb-[24px] border-b-[1px]'>
                     <AppHeading
                        as='h2'
                        className='font-extrabold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[48px]'>
                        {productDetails.title}
                     </AppHeading>
                     <h3 className='font-extrabold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[43px] flex gap-3 items-center'>
                        <span className='current-price'>${productDetails.price} </span>
                        <span className='text-[#0000004D] line-through'>${(+productDetails.price * 20) / 100}</span>
                        <span>
                           <svg
                              width='72'
                              height='34'
                              viewBox='0 0 72 34'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <rect width='72' height='34' rx='17' fill='#FF3333' fill-opacity='0.1' />
                              <path
                                 d='M15.008 19.432V18.088H19.888V19.432H15.008ZM30.2986 20.664H28.9226V23H27.4186V20.664H21.4346V19.272L26.8906 11.432H28.9226V19.272H30.2986V20.664ZM23.1306 19.272H27.4186V13.096L23.1306 19.272ZM31.8465 17.224C31.8465 13.64 33.7025 11.208 36.6145 11.208C39.5105 11.208 41.3665 13.64 41.3665 17.224C41.3665 20.824 39.5905 23.208 36.6145 23.208C33.6225 23.208 31.8465 20.824 31.8465 17.224ZM33.3985 17.224C33.3985 20.072 34.5825 21.8 36.6145 21.8C38.6465 21.8 39.8145 20.072 39.8145 17.224C39.8145 14.344 38.6465 12.616 36.6145 12.616C34.5825 12.616 33.3985 14.344 33.3985 17.224ZM48.6683 14.168C48.6683 15.88 47.4523 17.112 45.7403 17.112C44.0443 17.112 42.8283 15.88 42.8283 14.168C42.8283 12.44 44.0443 11.208 45.7403 11.208C47.4523 11.208 48.6683 12.44 48.6683 14.168ZM54.7643 11.448L45.9803 23H44.4443L53.2283 11.448H54.7643ZM47.4363 14.168C47.4363 13.128 46.7483 12.408 45.7403 12.408C44.7483 12.408 44.0603 13.128 44.0603 14.168C44.0603 15.192 44.7483 15.912 45.7403 15.912C46.7323 15.912 47.4363 15.192 47.4363 14.168ZM56.4123 20.264C56.4123 21.976 55.1803 23.208 53.4843 23.208C51.7883 23.208 50.5563 21.976 50.5563 20.264C50.5563 18.536 51.7883 17.32 53.4843 17.32C55.1803 17.32 56.4123 18.536 56.4123 20.264ZM55.1643 20.264C55.1643 19.224 54.4923 18.504 53.4843 18.504C52.4923 18.504 51.8043 19.224 51.8043 20.264C51.8043 21.288 52.4923 22.008 53.4843 22.008C54.4763 22.008 55.1643 21.288 55.1643 20.264Z'
                                 fill='#FF3333'
                              />
                           </svg>
                        </span>
                     </h3>
                     <h3 className='font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#00000099]'>
                        {productDetails.description}
                     </h3>
                  </div>

                  <div className='flex flex-col gap-[16px] pb-[24px] border-b-[1px]'>
                     <h3 className='font-normal text-[14px] lg:text-[16px] leading-[21px] text-[#00000099]'>
                        Choose Size
                     </h3>
                     <div className='flex gap-4'>
                        <For data={['small', 'medium', 'large', 'x-large']}>
                           {(tag, idx) => {
                              return (
                                 <AppButton
                                    key={tag}
                                    className={`text-[#00000099] px-6 py-3 border-0  rounded-full capitalize text-[14px] lg:text-[16px]  ${idx == activeSize ? 'bg-[#000000] text-[#FFFFFF]' : 'bg-[#F0F0F0]'}`}
                                    onClick={() => setActiveSize(idx)}>
                                    {tag}
                                 </AppButton>
                              )
                           }}
                        </For>
                     </div>
                  </div>

                  <div className='flex flex-row gap-[16px] pb-[24px] border-b-[1px]'>
                     <div className='flex rounded-full bg-[#F0F0F0]'>
                        <button
                           className='px-4 py-2 lg:py-[14px] lg:px-[20px] text-[14px] lg:text-4'
                           onClick={() => decrement(productIdSlug)}>
                           <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                 d='M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z'
                                 fill='black'
                              />
                           </svg>
                        </button>
                        <button className='px-4 py-2 lg:py-[14px] lg:px-[20px] text-[14px] lg:text-[16px] font-medium'>
                           {count}
                        </button>
                        <button
                           className='px-4 py-2 lg:py-[14px] lg:px-[20px] text-[14px] lg:text-4'
                           onClick={() => increment(productIdSlug)}>
                           <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                 d='M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z'
                                 fill='black'
                              />
                           </svg>
                        </button>
                     </div>

                     <AppButton
                        variant='filled'
                        className={cnMerge(
                           'py-[14px] px-[20px] bg-black rounded-full text-white flex-1 text-[14px] lg:text-4',
                           count > 0 && 'bg-red-100 text-black'
                        )}
                        onClick={() => (count == 0 ? increment(productIdSlug) : removeItem(productIdSlug))}>
                        {count == 0 ? 'Add to Cart' : 'Remove from Cart'}
                     </AppButton>
                  </div>
               </div>
            </div>
         )}
      </main>
   )
}

export const getServerSideProps = (async (props) => {
   try {
      // @ts-ignore
      const res = await fetch(`https://dummyjson.com/products/${props.params.slug}`)
      const data = await res.json()
      return {
         props: data,
      }
   } catch {
      return {
         props: {},
      }
   }
}) satisfies GetServerSideProps<{}>
