import { useInfiniteQuery } from '@tanstack/react-query'
import useAxios from './useAxios'

const useData = () => {
  const { axiosUrl } = useAxios()

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['data'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await axiosUrl.get(`/project?p=${pageParam}`, {
        headers: {
          'x-private-key': import.meta.env.VITE_PRIVATE,
        },
      })

      return response.data // don't do setState here
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextCursor || undefined,
  })

  // 👇 Flatten all pages into a single array — safely
  const project = data?.pages?.flat() || []

  return {
    data,
    project,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  }
}

export default useData
