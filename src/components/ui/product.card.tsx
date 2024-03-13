import { If } from 'classic-react-components'
import Image from 'next/image'
import { AppHeading, AppText } from './heading'
import { ProductImgCard } from '.'

export type TProduct = {
   id: number
   img?: string
   title: string
   description: string
   price: number
}

export default function PCard({ img, title, description, price }: TProduct) {
   return (
      <div className='product-card flex gap-4 flex-col'>
         <If condition={img}>
            <ProductImgCard src={img!} />
         </If>
         <AppHeading as='h6' className='font-body font-bold'>
            {title}
         </AppHeading>
         <AppText className='font-bold text-lg leading-7 lg:text-6 lg:leading-8 text-black'>{price}</AppText>
      </div>
   )
}
