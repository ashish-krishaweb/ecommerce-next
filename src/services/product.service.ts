import axios from 'axios'

const BASE_URL = 'https://dummyjson.com'

export async function getAllProducts() {
   return fetch(`${BASE_URL}/products`).then((res) => res.json())
   // return axios.get(`${BASE_URL}/products`).then((res) => {
   //     // console.log(res.data)
   //     return res
   // })
}
