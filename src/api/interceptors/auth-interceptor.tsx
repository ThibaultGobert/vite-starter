import axiosInstance from "../base-api";

// Add Auth interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // Attempt silent refresh
        await axiosInstance.post(
          "/auth/refresh",
          {},
          { withCredentials: true }
        );

        // Retry the original request after successful refresh
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Refresh failed – reroute to login
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
