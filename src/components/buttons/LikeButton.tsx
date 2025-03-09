import { IconHeartFilled, IconHeartPlus } from '@tabler/icons-react';

interface LikeButtonProps {
  isLiked: boolean;
  onLikeClick: () => void;
  likesCount: number;
  textColor: string;
  padding: string;
  backgroundColor: string;
  shadow: string;
}

export function LikeButton(props: Readonly<LikeButtonProps>) {
  return (
    <>
      <button
        className={`rounded-full ${props.shadow}  hover:bg-gray-100 transition-colors ${props.padding} ${props.backgroundColor}`}
        aria-label={props.isLiked ? 'Unlike' : 'Like'}
        onClick={props.onLikeClick}
      >
        {props.isLiked ? (
          <IconHeartFilled className="w-6 h-6 text-red-600" />
        ) : (
          <IconHeartPlus className="w-6 h-6 text-gray-500" />
        )}
      </button>
      <p className={`text-sm p-0 mb-2 text-${props.textColor}`}>
        {props.likesCount}
      </p>
    </>
  );
}
