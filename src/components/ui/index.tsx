import { cnMerge } from '@/lib/cn-merge'
import Link from 'next/link'
import { ComponentProps, ElementRef, ReactNode, RefObject, useRef } from 'react'

export function Heading(
   props: ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption'> & {
      as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption'
   } & {
      type?: 'primary' | 'secondary' | 'default' | 'banner'
   } & {
      elementRef?: RefObject<ElementRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption'>>
   }
) {
   // const Tag = props.as ?? "p"
   // const type = props.type ?? "default"
   // as : React.ElementType

   const { as = 'p', type = 'default', className, children, elementRef, ...rest } = props
   const Tag = as

   if (type == 'banner') {
      return (
         <Tag
            className={cnMerge(
               'font-bold text-[38px] leading-[34px] lg:text-[64px] lg:leading-[64px] text-[#000000]',
               className
            )}
            ref={elementRef as any}
            {...rest}>
            {children}
         </Tag>
      )
   }

   if (type == 'primary') {
      return (
         <Tag
            className={cnMerge(
               'font-bold text-[32px] leading-[32px] lg:text-[48px] lg:leading-[57.6px] text-[#000000]',
               className
            )}
            ref={elementRef as any}
            {...rest}>
            {children}
         </Tag>
      )
   }

   if (type == 'secondary') {
      return (
         <Tag className={cnMerge(className)} ref={elementRef as any} {...rest}>
            {children}
         </Tag>
      )
   }

   return (
      <Tag
         className={cnMerge(className, 'text-[14px] lg:text-base leading-[22px] font-body')}
         ref={elementRef as any}
         {...rest}>
         {props.children}
      </Tag>
   )
}

export function AppButton(
   props: ComponentProps<'button'> & {
      variant?: 'filled' | 'outlined'
      color?: 'success' | 'failed' | 'black' | 'disabled'
   }
) {
   const { children, className, variant = 'outlined', color = 'black', ...rest } = props

   return (
      <button
         className={cnMerge(
            variant == 'filled' &&
               ((color == 'black' && 'bg-black text-white') || (color == 'success' && 'bg-green-700 text-white')),
            variant == 'outlined' &&
               ((color == 'black' && 'text-black bg-white border border-[#0000001A]') ||
                  (color == 'success' && 'text-green-700 bg-white')),
            'font-body',
            className
         )}
         {...rest}>
         {children}
      </button>
   )
}

export function ProductCard({ src, children, id }: { src: string; id: number; children?: ReactNode }) {
   return (
      <Link href={`/product/${id}`}>
         <ProductImgCard src={src} />
         {children}
      </Link>
   )
}
function ProductImgCard({ src }: { src: string }) {
   return (
      <div className='bg-[#F0EEED] rounded-lg p-5 flex items-center justify-center'>
         <img src={src} width={250} height={250} />
      </div>
   )
}
function RatingStar() {
   return <div></div>
}
function ProductReviewCard() {
   return <div></div>
}

function AppInput() {
   return <input type='text' />
}
