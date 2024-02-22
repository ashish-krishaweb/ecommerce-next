import { AppButton } from "@/components/ui";
import useProductStore, { Product } from "@/stores/product.store";
import { For } from "classic-react-components";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useParams, useSearchParams } from "next/navigation"
import { use, useEffect, useState } from "react"

const inter = Poppins({ subsets: ["latin"], weight: '400' });


export default function ProductDetailPage() {
    const params = useParams()
    const [productDetails, setProductDetails] = useState<Product>({} as Product)
    const [active, setActive] = useState(0)
    const [activeSize, setActiveSize] = useState(2)
    const count = useProductStore((state) => state.itemsId.get(+params?.slug)) ?? 0
    const increment = useProductStore(state => state.increment)
    const decrement = useProductStore(state => state.decrement)



    useEffect(() => {
        async function fetchDetails() {
            if (params?.slug) {
                try {
                    const res = await fetch(`https://dummyjson.com/products/${params?.slug}`)
                    const data = await res.json()
                    setProductDetails(data)
                } catch (err) {

                }
            }
        }
        fetchDetails()
    }, [params?.slug])



    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
        >
            <Head>
                <title>{productDetails.title}</title>
                <meta name='title' content={productDetails.title} />
                <meta name='description' content={productDetails.description} />
            </Head>


            {Object.keys(productDetails).length == 0 && <>
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="loader"></div>
                    <p className='mt-2'>Loading...</p>
                </div>
            </>}


            {Object.keys(productDetails).length > 0 && <div className='w-full grid lg:grid-cols-8 gap-4 px-4 lg:px-16'>
                <div className='flex flex-row lg:flex-col gap-[14px] lg:col-span-1 max-lg:row-start-2'>
                    <For data={productDetails.images?.slice(0, 3)}>
                        {(img, idx) => {
                            return <div key={img} className={`${active == idx ? "border-black" : ""} flex items-center w-[152px] h-[167px] bg-gray-100 p-4 border  rounded-lg cursor-pointer`} onClick={() => setActive(idx)} >
                                <img src={img} />
                            </div>
                        }}
                    </For>
                </div>

                <div className={` lg:col-span-3 flex items-center justify-center h-[290px] lg:h-[530px] bg-gray-100 p-4 border  rounded-lg`}  >
                    <img src={productDetails.images?.[active]} style={{ height: '100%' }} />
                </div>

                <div className=" lg:col-span-4 flex flex-col gap-5 lg:gap-[24px] flex-1">
                    <div className="flex flex-col gap-[16px] pb-[24px] border-b-[1px]">
                        <h3 className='font-extrabold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[48px]'>{productDetails.title}</h3>
                        <h3 className='font-extrabold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[43px]'>${productDetails.price}</h3>
                        <h3 className='font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#00000099]'>{productDetails.description}</h3>
                    </div>

                    <div className="flex flex-col gap-[16px] pb-[24px] border-b-[1px]">
                        <h3 className='font-normal text-[14px] lg:text-[16px] leading-[21px] text-[#00000099]'>Choose Size</h3>
                        <div className="flex gap-4">
                            <For data={["small", "medium", 'large', 'x-large']}>
                                {(tag, idx) => {
                                    console.log({ idx, activeSize })
                                    return <AppButton key={tag} className={`text-[#00000099] px-6 py-3 border-0  rounded-full capitalize text-[14px] lg:text-[16px]  ${idx == activeSize ? "bg-[#000000] text-[#FFFFFF]" : "bg-[#F0F0F0]"}`} onClick={() => setActiveSize(idx)}>{tag}</AppButton>
                                }}
                            </For>
                        </div>
                    </div>

                    <div className="flex flex-row gap-[16px] pb-[24px] border-b-[1px]">
                        <div className="flex rounded-full bg-[#F0F0F0]">
                            <button className='px-4 py-2 lg:py-[14px] lg:px-[20px] text-[14px] lg:text-4' onClick={() => decrement(+params.slug)}>-</button>
                            <button className='px-4 py-2 lg:py-[14px] lg:px-[20px] text-[14px] lg:text-4'>{count}</button>
                            <button className='px-4 py-2 lg:py-[14px] lg:px-[20px] text-[14px] lg:text-4' onClick={() => increment(+params.slug)}>+</button>
                        </div>
                        <AppButton variant="filled" className='py-[14px] px-[20px] bg-black rounded-full text-white flex-1 text-[14px] lg:text-4'>Add to Cart</AppButton>
                    </div>
                </div>
            </div>}

        </main>
    )
}