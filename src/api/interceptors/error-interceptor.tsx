// // src/api/interceptors/error-interceptor.js
// // import { store } from '@/store'; // Your global state (Zustand/Redux/etc.)
// import axiosInstance from "../base-api";

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const { status, data } = error.response;
//     let errorMessage = data?.message || "An unexpected error occurred";

//     // Handle specific error codes
//     switch (status) {
//       case 400:
//         errorMessage = data?.message || "Bad request";
//         break;
//       case 401:
//         // (Auth interceptor will handle this separately)
//         break;
//       case 403:
//         errorMessage = "You don’t have permission to access this resource";
//         break;
//       case 404:
//         errorMessage = "Resource not found";
//         break;
//       case 500:
//         errorMessage = "Server error: Please try again later";
//         break;
//       default:
//         errorMessage = `Error ${status}: ${data?.message || "Unknown error"}`;
//     }

//     // Update global state & trigger toast
//     if (status !== 401) {
//       // Skip 401 (handled by auth interceptor)
//       // Dispatch action to Zustand to show general error toast
//       // store.dispatch(addToastError(errorMessage));
//     }

//     return Promise.reject(error);
//   }
// );
