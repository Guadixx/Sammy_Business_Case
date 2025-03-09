import { useEffect, useRef } from 'react';
import { useImages } from '../hooks/useImage';
import ImageCard from './ImageCard';
import { ImageType } from '../query/types/image';

interface ImageGridProps {
  filteredImages: ImageType[];
  searchTerm: string;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
}

export function ImageGallery(props: Readonly<ImageGridProps>) {
  const { isLoading, hasNextPage, fetchNextPage, isFetchingNextPage, isError } =
    useImages();

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!hasNextPage || isLoading) return;

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 1.0,
    });

    if (loadMoreRef.current && observer.current) {
      observerRef.current?.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current && loadMoreRef.current) {
        observerRef.current.unobserve(loadMoreRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-lg w-full">
          <p className="font-bold">Error al cargar las imágenes</p>
          <p className="mt-2">
            No se pudieron cargar las imágenes. Por favor, inténtalo de nuevo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 w-full">
        {props.filteredImages?.map((image) => (
          <ImageCard
            key={image.id}
            id={image.id}
            title={image.title}
            picture={image.picture}
            liked={image.liked}
            likesCount={image.likesCount}
            createdAt={image.createdAt}
            author={image.author}
            price={image.price}
            alt={image.title}
          />
        ))}
      </div>
      <div
        ref={loadMoreRef}
        className="text-center py-4"
      >
        {isFetchingNextPage ? (
          <div className="w-10 h-10 border-4 border-blue-500 rounded-full border-t-transparent animate-spin mx-auto"></div>
        ) : (
          hasNextPage && <p>Cargando más imágenes...</p>
        )}
      </div>
    </div>
  );
}
