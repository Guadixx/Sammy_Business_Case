import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { likeImage } from '../query/query/imageClient';
import { ActionButtons } from './ActionButtons';
import { ImageType } from '../query/types/image';

export type ImageCardProps = ImageType;

export function ImageCard(props: Readonly<ImageCardProps>) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLiked, setIsLiked] = useState(props.liked);
  const [likesCount, setLikesCount] = useState(props.likesCount);

  const shareLink = `https://github.com/Guadixx`;

  const likeMutation = useMutation({
    mutationFn: () => likeImage(props.id),
    onSuccess: (updateImage) => {
      setIsLiked(updateImage.liked);
      setLikesCount(updateImage.likesCount);
    },
    onError: () => {
      alert('Error al dar like a la imagen');
    },
  });

  const handleLikeClick = () => {
    likeMutation.mutate();
  };

  const formatPrice = (price: string): string => {
    const numericPrice = parseFloat(price) / 10;
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(numericPrice);
  };

  return (
    <div
      key={props.id}
      className="bg-[var(--white)] overflow-hidden my-4 min-h-[350px] max-w-[400px] w-full sm:max-h-[460px] !important"
    >
      <div className="relative max-w-[400px] max-h-[460px] ">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
        )}
        <img
          className={`w-full h-full object-cover transition-opacity duration-300 max-w-[400px] max-h-[360px] ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={props.picture}
          alt={props.alt || props.title}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-l-white border-b-[100px] border-b-transparent ">
          <p className="absolute top-6 right-13 text-[var(--black)] text-xs ">
            {formatPrice(props.price)}
          </p>
        </div>

        <ActionButtons
          isLiked={isLiked}
          onLikeClick={handleLikeClick}
          shareLink={shareLink}
          likesCount={likesCount}
          isMobile={false}
          imageId={props.id}
        />
      </div>

      <div className="p-4 flex justify-center flex-col items-center border-[var(--grey-4-border)] border-1 bg-[var(--grey-1-background)]">
        <p className="font-inter font-normal text-xl text-[var(--black)] text-[28px] truncate max-w-[250px] sm:max-w-[350px]">
          {props.title.toUpperCase()}
        </p>
        <p className="font-light">
          <span className="text-[var(--grey-3-subtitle)] font-light">by</span>{' '}
          {props.author}
        </p>
      </div>

      <div className="p-4 flex justify-evenly items-center border-l border-r border-b border-[var(--grey-4-border)] bg-[var(--grey-1-background)] sm:hidden">
        <ActionButtons
          isLiked={isLiked}
          onLikeClick={handleLikeClick}
          shareLink={shareLink}
          likesCount={likesCount}
          isMobile={true}
          imageId={props.id}
        />
      </div>
    </div>
  );
}

export default ImageCard;
