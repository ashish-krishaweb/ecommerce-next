import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export default function Category(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
   console.log({ props })
   return <main className={`flex min-h-screen flex-col items-center justify-between`}></main>
}

export const getServerSideProps = (async () => {
   const res = await fetch('https://dummyjson.com/products/categories')
   const data = await res.json()

   return {
      props: { categories: data },
   }
}) satisfies GetServerSideProps<{ categories: string[] }>
