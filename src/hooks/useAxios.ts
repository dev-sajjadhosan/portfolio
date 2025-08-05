import axios from 'axios'

const axiosUrl = axios.create({
  baseURL: import.meta.env.VITE_WEBURL, // Replace with your API base URL
})

const useAxios = () => {
  const get = async (url: string) => {
    try {
      const response = await axiosUrl.get(url)
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  }

  const post = async (url: string, data: string[]) => {
    try {
      const response = await axiosUrl.post(url, data)
      return response.data
    } catch (error) {
      console.error('Error posting data:', error)
      throw error
    }
  }

  return { get, post, axiosUrl }
}

export default useAxios
