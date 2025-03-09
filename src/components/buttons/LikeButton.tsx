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
    <div className="flex items-center sm:flex-col">
      <button
        className={`rounded-full ${props.shadow}  hover:bg-gray-100 transition-colors ${props.padding} ${props.backgroundColor}`}
        aria-label={props.isLiked ? 'Unlike' : 'Like'}
        onClick={props.onLikeClick}
      >
        {props.isLiked ? (
          <IconHeartFilled className="w-6 h-6 text-red-600" />
        ) : (
          <IconHeartPlus className="w-6 h-6 text-[var(--black)]" />
        )}
      </button>
      <p className={`text-sm m-1 content-center text-${props.textColor}`}>
        {props.likesCount}
      </p>
    </div>
  );
}
