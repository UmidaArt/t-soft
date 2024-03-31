import {baseApi} from "./baseApi";
import {IProduct} from "../models/models";

export const productsApi = baseApi.injectEndpoints({
    endpoints: build => ({
        searchProducts: build.query<IProduct[], string>({
            query: (title:string) => ({
                url: `products`,
                params: {
                    q: title
                }
            })
        })
    })
})

export const {useSearchProductsQuery} = productsApi