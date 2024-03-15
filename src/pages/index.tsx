import { AppButton, Heading, ProductCard } from '@/components/ui'
import { AppHeading, AppText } from '@comp/ui/heading'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
   return (
      <main className={`flex min-h-screen flex-col items-center justify-between`}>
         <Head>
            <title>{'SHOP.CO'}</title>
            <meta name='title' content={'SHOP.CO'} />
            <meta name='og:title' content={'SHOP.CO'} />
            <meta name='description' content={'SHOP.CO is awesome ecommerce website'} />
            <meta name='og:description' content={'SHOP.CO is awesome ecommerce website'} />
            <meta name='og:image' content={'https://ecommerce-next-teal.vercel.app/home-banner.png'} />
         </Head>

         {/* banner */}
         <section className='w-full h-[660px] relative bg-primary-light'>
            <div className='container'>
               <img className='absolute h-[660px] w-full z-10 max-lg:hidden' src='/home-banner.png' />
               <div className='flex flex-col gap-8 w-full lg:w-1/2 bg-transparent p-4 py-24 lg:p-24'>
                  <Heading type='banner' className='font-bold z-10 font-integral'>
                     FIND CLOTHES THAT MATCHES YOUR STYLE
                  </Heading>
                  <AppText className='z-10 text-[#00000099]'>
                     Browse through our diverse range of meticulously crafted garments, designed to bring out your
                     individuality and cater to your sense of style.
                  </AppText>
                  <AppButton variant='filled' className='rounded-full px-16 py-4 lg:max-w-60 z-10'>
                     Shop Now
                  </AppButton>
               </div>
            </div>
         </section>

         <div className='divide-y-2'>
            <NewArrivals />
            <TopArrivals />
         </div>
      </main>
   )
}

export const getServerSideProps = (async () => {
   return {
      props: {
         dehydratedState: {},
      },
   }
}) satisfies GetServerSideProps<{}>

function NewArrivals() {
   return (
      <div className='py-16 px-24'>
         <div className='text-center pb-14'>
            <AppHeading as='h1' className='font-bold '>
               NEW ARRIVALS
            </AppHeading>
         </div>

         {/* product card */}
         <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            {NewArrivalsProducts.products.slice(0, 4).map((product) => {
               return (
                  <ProductCard key={product.id} src={product.images[0]} id={product.id}>
                     <div className='flex flex-col gap-2 mt-4'>
                        <AppHeading as='h6' className='font-body font-bold'>
                           {product.title}
                        </AppHeading>
                        <AppText className='font-bold text-lg leading-7 lg:text-6 lg:leading-8 text-black'>
                           ${product.price}
                        </AppText>
                     </div>
                  </ProductCard>
               )
            })}
         </div>
         <div className=' mt-9 flex justify-center'>
            <AppButton className='rounded-full px-20 py-4'>View All</AppButton>
         </div>
      </div>
   )
}

function TopArrivals() {
   return (
      <div className='py-16 px-24'>
         <div className='text-center pb-14'>
            <AppHeading as='h1' className='font-bold '>
               TOP ARRIVALS
            </AppHeading>
         </div>

         {/* product card */}
         <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            {NewArrivalsProducts.products.slice(1, 5).map((product) => {
               return (
                  <ProductCard key={product.id} src={product.images[0]} id={product.id}>
                     <div className='flex flex-col gap-2 mt-4'>
                        <AppHeading as='h6' className='font-body font-bold'>
                           {product.title}
                        </AppHeading>
                        <AppText className='font-bold text-lg leading-7 lg:text-6 lg:leading-8 text-black'>
                           ${product.price}
                        </AppText>
                     </div>
                  </ProductCard>
               )
            })}
         </div>
         <div className=' mt-9 flex justify-center'>
            <AppButton className='rounded-full px-20 py-4'>View All</AppButton>
         </div>
      </div>
   )
}

export const NewArrivalsProducts = {
   products: [
      {
         id: 51,
         title: 'half sleeves T shirts',
         description:
            'Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands',
         price: 23,
         discountPercentage: 12.76,
         rating: 4.26,
         stock: 132,
         brand: 'Vintage Apparel',
         category: 'mens-shirts',
         thumbnail: 'https://cdn.dummyjson.com/product-images/51/thumbnail.jpg',
         images: [
            'https://cdn.dummyjson.com/product-images/51/1.png',
            'https://cdn.dummyjson.com/product-images/51/2.jpg',
            'https://cdn.dummyjson.com/product-images/51/3.jpg',
            'https://cdn.dummyjson.com/product-images/51/thumbnail.jpg',
         ],
      },
      {
         id: 52,
         title: 'FREE FIRE T Shirt',
         description: "quality and professional print - It doesn't just look high quality, it is high quality.",
         price: 10,
         discountPercentage: 14.72,
         rating: 4.52,
         stock: 128,
         brand: 'FREE FIRE',
         category: 'mens-shirts',
         thumbnail: 'https://cdn.dummyjson.com/product-images/52/thumbnail.jpg',
         images: [
            'https://cdn.dummyjson.com/product-images/52/1.png',
            'https://cdn.dummyjson.com/product-images/52/2.png',
            'https://cdn.dummyjson.com/product-images/52/3.jpg',
            'https://cdn.dummyjson.com/product-images/52/4.jpg',
            'https://cdn.dummyjson.com/product-images/52/thumbnail.jpg',
         ],
      },
      {
         id: 53,
         title: 'printed high quality T shirts',
         description: 'Brand: vintage Apparel ,Export quality',
         price: 35,
         discountPercentage: 7.54,
         rating: 4.89,
         stock: 6,
         brand: 'Vintage Apparel',
         category: 'mens-shirts',
         thumbnail: 'https://cdn.dummyjson.com/product-images/53/thumbnail.jpg',
         images: [
            'https://cdn.dummyjson.com/product-images/53/1.webp',
            'https://cdn.dummyjson.com/product-images/53/2.jpg',
            'https://cdn.dummyjson.com/product-images/53/3.jpg',
            'https://cdn.dummyjson.com/product-images/53/4.jpg',
            'https://cdn.dummyjson.com/product-images/53/thumbnail.jpg',
         ],
      },
      {
         id: 54,
         title: 'Pubg Printed Graphic T-Shirt',
         description:
            'Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking',
         price: 46,
         discountPercentage: 16.44,
         rating: 4.62,
         stock: 136,
         brand: 'The Warehouse',
         category: 'mens-shirts',
         thumbnail: 'https://cdn.dummyjson.com/product-images/54/thumbnail.jpg',
         images: [
            'https://cdn.dummyjson.com/product-images/54/1.jpg',
            'https://cdn.dummyjson.com/product-images/54/2.jpg',
            'https://cdn.dummyjson.com/product-images/54/3.jpg',
            'https://cdn.dummyjson.com/product-images/54/4.jpg',
            'https://cdn.dummyjson.com/product-images/54/thumbnail.jpg',
         ],
      },
      {
         id: 55,
         title: 'Money Heist Printed Summer T Shirts',
         description: 'Fabric Jercy, Size: M & L Wear Stylish Dual Stiched',
         price: 66,
         discountPercentage: 15.97,
         rating: 4.9,
         stock: 122,
         brand: 'The Warehouse',
         category: 'mens-shirts',
         thumbnail: 'https://cdn.dummyjson.com/product-images/55/thumbnail.jpg',
         images: [
            'https://cdn.dummyjson.com/product-images/55/1.jpg',
            'https://cdn.dummyjson.com/product-images/55/2.webp',
            'https://cdn.dummyjson.com/product-images/55/3.jpg',
            'https://cdn.dummyjson.com/product-images/55/4.jpg',
            'https://cdn.dummyjson.com/product-images/55/thumbnail.jpg',
         ],
      },
   ],
   total: 5,
   skip: 0,
   limit: 5,
}
