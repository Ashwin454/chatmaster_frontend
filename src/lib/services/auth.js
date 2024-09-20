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
          body: user, // Ensure user is formatted correctly (JSON or FormData)
          headers: {
            'Content-Type': 'multipart/form-data', // Adjust this based on your data type
          },
          credentials: 'include',
        }
      }
    }),
    verifyEmail: builder.mutation({
      query: (user) => {
        console.log(user);
        return {
          url: 'verify-email',
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json', // Use JSON if sending JSON
          },
          credentials: 'include',
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
            'Content-Type': 'application/json',
          },
          credentials: 'include',
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
            'Content-Type': 'application/json',
          },
          credentials: 'include',
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
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        }
      }
    }),
    resetPass: builder.mutation({
      query: (data) => {
        const { token, formData } = data;
        return {
          url: `resetPass/${token.token}`,
          method: 'POST',
          body: formData, // Adjust based on the type of data
          headers: {
            // Do not set Content-Type for FormData, let the browser handle it
          },
          credentials: 'include',
        }
      }
    }),
    loadProf: builder.query({
      query: () => {
        return {
          url: `me`,
          method: 'GET',
          credentials: 'include',
        }
      }
    }),
    searchUsers: builder.query({
      query: (search) => ({
        url: `users`,
        method: 'GET',
        params: { search },
        credentials: 'include',
      }),
    }),
    accessChat: builder.mutation({
      query: (data) => {
        return {
          url: `chat/accessChat`,
          method: `POST`,
          body: data,
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        }
      }
    }),
    myChats: builder.query({
      query: () => {
        return {
          url: `chat/connectedChats`,
          method: `GET`,
          credentials: `include`,
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
            'Content-Type': 'application/json',
          },
          credentials: 'include',
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
            'Content-Type': 'application/json',
          },
          credentials: 'include',
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
            'Content-Type': 'application/json',
          },
          credentials: 'include',
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
            'Content-Type': 'application/json',
          },
          credentials: 'include',
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
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        }
      }
    }),
    fetchMessage: builder.query({
      query: (data) => {
        return {
          url: `message/${data.userId}`,
          method: `GET`,
          credentials: 'include',
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
