import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ActionButtons } from './ActionButtons';

describe('ActionButtons', async () => {
  it('should increase likes count when heart button is clicked', async () => {
    const mockOnLikeClick = vi.fn();

    const { rerender } = render(
      <ActionButtons
        isLiked={false}
        onLikeClick={mockOnLikeClick}
        shareLink="https://github.com/GuadalupeDoudchitzky"
        imageId="1"
        likesCount={10}
        isMobile={false}
      />,
    );

    expect(screen.getByText('10')).toBeInTheDocument();

    const heartButton = screen.getByRole('button', { name: /like/i });
    expect(heartButton).toBeInTheDocument();

    fireEvent.click(heartButton);

    rerender(
      <ActionButtons
        isLiked={true}
        onLikeClick={mockOnLikeClick}
        shareLink="https://github.com/GuadalupeDoudchitzky"
        imageId="1"
        likesCount={11}
        isMobile={false}
      />,
    );

    await waitFor(() => {
      expect(screen.getByText('11')).toBeInTheDocument();
    });

    expect(mockOnLikeClick).toHaveBeenCalled();
  });
});
