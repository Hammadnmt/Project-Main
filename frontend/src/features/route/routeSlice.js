/* eslint-disable no-unused-vars */
import { baseApi } from "../baseApi";

export const routeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllroutes: builder.query({
      query: () => ({
        url: "/route/",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.data,
    }),
    deleteRoute: builder.mutation({
      query: (id) => ({
        url: `/route/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.data,
    }),
    getRouteById: builder.query({
      query: (id) => ({
        url: `/route/${id}`,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.data,
    }),
    updateRoute: builder.mutation({
      query: ({ id, data }) => ({
        url: `/route/${id}`,
        method: "PATCH",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.data,
    }),
  }),
});

export const {
  useGetAllroutesQuery,
  useGetRouteByIdQuery,
  useDeleteRouteMutation,
  useUpdateRouteMutation,
} = routeApi;
