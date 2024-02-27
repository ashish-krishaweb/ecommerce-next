import { cnMerge } from '@/lib/cn-merge'
import { ComponentProps } from 'react'

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type Text = 'p'

export function AppHeading(props: ComponentProps<Heading> & { as?: Heading }) {
   const { as = 'h3', className, children, ...rest } = props

   const Tag = as

   return (
      <Tag
         className={cnMerge(
            'text-black font-integral',
            as == 'h1' && 'text-[48px] leading-[1.2] xl:text-[42px] lg:text-4xl sm:text-2xl',
            as == 'h2' && 'text-[40px] leading-[1.125] md:text-[32px]',
            as == 'h3' && 'text-4xl leading-[1.33]',
            as == 'h4' && 'text-[32px] leading-[1.31]',
            as == 'h5' && 'text-2xl leading-snug',
            as == 'h6' && 'text-lg leading-snug',
            className
         )}
         {...rest}>
         {children}
      </Tag>
   )
}

export function AppText(props: ComponentProps<Text> & { as?: 'p' | 'caption' }) {
   const { as = 'p', className, children, ...rest } = props
   const Tag = as

   return (
      <Tag className={cnMerge('font-normal text-base leading-[22px] font-body text-[#00000099]', className)} {...rest}>
         {children}
      </Tag>
   )
}
