import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend-chatmaster-3.onrender.com/api/v1/',
    prepareHeaders: (headers) => {
      // Add default headers if needed
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user) => {
        console.log("User: ", user);
        return {
          url: 'register',
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    verifyEmail: builder.mutation({
      query: (user) => {
        return {
          url: 'verify-email',
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    login: builder.mutation({
      query: (user) => {
        return {
          url: 'login',
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    forgotPass: builder.mutation({
      query: (user) => {
        return {
          url: 'forgotPass',
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: 'logout/',
          method: 'POST',
          body: {},
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    resetPass: builder.mutation({
      query: (data) => {
        const { token, formData } = data;
        return {
          url: `resetPass/${token.token}`,
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    loadProf: builder.query({
      query: () => {
        return {
          url: `me`,
          method: 'GET',
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    searchUsers: builder.query({
      query: (search) => ({
        url: `users`,
        method: 'GET',
        params: { search },
        credentials: 'include',
        mode: 'no-cors', // Set mode to no-cors
      }),
    }),
    accessChat: builder.mutation({
      query: (data) => {
        return {
          url: `chat/accessChat`,
          method: `POST`,
          body: data,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    myChats: builder.query({
      query: (data) => {
        return {
          url: `chat/connectedChats`,
          method: `GET`,
          credentials: `include`,
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    createGC: builder.mutation({
      query: (data) => {
        return {
          url: `chat/createGC`,
          method: `POST`,
          body: data,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    renameGC: builder.mutation({
      query: (data) => {
        return {
          url: `chat/renameGC`,
          method: `PUT`,
          body: data,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    addToGC: builder.mutation({
      query: (data) => {
        return {
          url: `chat/addtoGC`,
          method: `PUT`,
          body: data,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    removeFromGC: builder.mutation({
      query: (data) => {
        return {
          url: `chat/removefromGC`,
          method: `DELETE`,
          body: data,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    sendMessage: builder.mutation({
      query: (data) => {
        return {
          url: `message/`,
          method: `POST`,
          body: data,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
    fetchMessage: builder.query({
      query: (data) => {
        return {
          url: `message/${data.userId}`,
          method: `GET`,
          credentials: 'include',
          mode: 'no-cors', // Set mode to no-cors
        }
      }
    }),
  }),
})

// Export hooks
export const { 
  useCreateUserMutation, 
  useVerifyEmailMutation, 
  useLoginMutation, 
  useForgotPassMutation, 
  useLogoutMutation, 
  useResetPassMutation, 
  useLoadProfQuery, 
  useSearchUsersQuery, 
  useAccessChatMutation, 
  useMyChatsQuery, 
  useCreateGCMutation, 
  useRenameGCMutation, 
  useAddToGCMutation,
  useRemoveFromGCMutation, 
  useSendMessageMutation, 
  useFetchMessageQuery 
} = authApi;
