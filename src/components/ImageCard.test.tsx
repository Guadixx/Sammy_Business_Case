// src/components/ImageCard.test.tsx

import { render, screen } from '@testing-library/react';
import ImageCard from './ImageCard';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@tanstack/react-query', () => ({
  useMutation: () => ({
    mutate: vi.fn(),
  }),
}));

describe('ImageCard', () => {
  const mockImageData = {
    id: '1',
    title: 'Test Image',
    picture: 'test-image.jpg',
    liked: false,
    likesCount: 490,
    createdAt: '2023-03-01',
    price: '100',
    author: 'Author Name',
  };

  it('should render the ImageCard component with image and title', () => {
    render(<ImageCard {...mockImageData} />);

    const image = screen.getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');

    const title = screen.getByText('TEST IMAGE');
    expect(title).toBeInTheDocument();
  });
});
