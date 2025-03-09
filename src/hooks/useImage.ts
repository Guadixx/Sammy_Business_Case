import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchImages } from '../query/query/imageClient';

export function useImages() {
  return useInfiniteQuery({
    queryKey: ['images'],
    queryFn: ({ pageParam }) => fetchImages(pageParam),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.pageInfo.hasNextPage ? lastPage.pageInfo.endCursor : undefined;
    },
    select: (data) => {
      return data.pages.flatMap((page) => page.edges.map((edge: { node: any; }) => edge.node));
    },
  });
}