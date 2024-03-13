import { getAllProducts } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export function useGetAllProducts() {
   return useQuery({
      queryKey: ['get-all-products'],
      queryFn: getAllProducts,
   })
}
