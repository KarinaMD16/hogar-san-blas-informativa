import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";

interface CustomAxiosError extends AxiosError {
  response?: AxiosResponse<{
    message?: string;
    error?: string;
    statusCode?: number;
  }>;
}

const sidnamAPI = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

// Request interceptor
sidnamAPI.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // You can add auth headers here if needed
    return config;
  },
  (error: AxiosError) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
sidnamAPI.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: CustomAxiosError) => {
    console.error('Response error:', error);
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response data:', error.response.data);
      console.error('Error status:', error.response.status);
      
      // Extract error message from response
      const errorMessage = error.response.data?.message || 
                         error.response.data?.error || 
                         'Error en la solicitud';
      
      // Create a new error with the extracted message
      const customError = new Error(errorMessage);
      
      // Add response data to the error object
      Object.assign(customError, {
        response: error.response.data,
        status: error.response.status,
        config: error.config
      });
      
      return Promise.reject(customError);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
      const networkError = new Error('No se pudo conectar al servidor. Por favor, verifica tu conexión a internet.');
      return Promise.reject(networkError);
    }
    
    // Something happened in setting up the request that triggered an Error
    console.error('Error:', error.message);
    return Promise.reject(error);
  }
);

export default sidnamAPI;