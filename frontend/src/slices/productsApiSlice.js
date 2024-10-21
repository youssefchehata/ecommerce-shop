import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => ({ url: PRODUCTS_URL }), keepUnusedDataFor: 5, }),
    getProductById: builder.query({ query: (id) => ({ url: `${PRODUCTS_URL}/${id}` }), keepUnusedDataFor: 5, }),
    createProduct: builder.mutation({ query: () => ({ url: `${PRODUCTS_URL}`, method: 'POST', }), invalidatesTags: ['Product'], }),
    deleteProduct: builder.mutation({ query: (productId) => ({ url: `${PRODUCTS_URL}/${productId}`, method: 'DELETE', }), providesTags: ['Product'], }),

  }),
});

export const {
  useGetProductsQuery ,
  useGetProductByIdQuery , 
  useCreateProductMutation,
  useDeleteProductMutation,
} = productsApiSlice;