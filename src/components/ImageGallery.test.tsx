import { render, screen, waitFor } from '@testing-library/react';
import { ImageGallery } from './ImageGallery';
import { describe, expect, it, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const filteredImages = [
  {
    id: '1',
    title: 'Imagen A',
    picture: '',
    likesCount: 10,
    createdAt: '',
    author: '',
    price: '',
    liked: false,
  },
  {
    id: '2',
    title: 'Imagen B',
    picture: '',
    likesCount: 20,
    createdAt: '',
    author: '',
    price: '',
    liked: false,
  },
];

vi.mock('../hooks/useImage', () => ({
  useImages: vi.fn(() => ({
    data: { pages: [{ results: filteredImages }] },
    isLoading: false,
    isError: false,
    fetchNextPage: vi.fn(),
    hasNextPage: false,
    isFetchingNextPage: false,
    error: null,
    isFetching: false,
    isSuccess: true,
    status: 'success',
    refetch: vi.fn(),
    remove: vi.fn(),
    isPending: false,
    isLoadingError: false,
    isRefetchError: false,
  })),
}));

const queryClient = new QueryClient();

describe('ImageGallery', () => {
  it('debe mostrar las imágenes filtradas correctamente', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ImageGallery
          filteredImages={filteredImages}
          searchTerm=""
          isFetchingNextPage={false}
          hasNextPage={false}
        />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Imagen A/i)).toBeInTheDocument();
      expect(screen.getByText(/Imagen B/i)).toBeInTheDocument();
    });
  });

  it('no debe mostrar imágenes que no coinciden con el término de búsqueda', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ImageGallery
          filteredImages={filteredImages.filter((image) =>
            image.title.toLowerCase().includes('Imagen A'.toLowerCase()),
          )}
          searchTerm="Imagen A"
          isFetchingNextPage={false}
          hasNextPage={false}
        />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Imagen A/i)).toBeInTheDocument();
      expect(screen.queryByText(/Imagen B/i)).not.toBeInTheDocument();
    });
  });
});
