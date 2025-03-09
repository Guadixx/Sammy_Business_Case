import { LikeButton } from './buttons/LikeButton';
import { ShareButton } from './buttons/ShareButton';

interface ActionButtonsProps {
  isLiked: boolean;
  onLikeClick: () => void;
  shareLink: string;
  imageId: string;
  likesCount: number;
  isMobile?: boolean;
}

export function ActionButtons(props: Readonly<ActionButtonsProps>) {
  return (
    <>
      {props.isMobile ? (
        <div className="flex items-center justify-between w-full h-2">
          <div className="flex flex-1 justify-center content-center items-center">
            <LikeButton
              isLiked={props.isLiked}
              onLikeClick={props.onLikeClick}
              likesCount={props.likesCount}
              textColor="[var(--black)]"
              padding="p-0"
              backgroundColor="bg-none"
              shadow=""
            />
          </div>

          <div className="h-10 border-r border-gray-400"></div>

          <div className="flex flex-1 justify-center content-center items-center">
            <ShareButton
              shareLink={props.shareLink}
              imageId={props.imageId}
              textColor="[var(--black)]"
              padding="p-0"
              backgroundColor="bg-none"
              shadow=""
            />
          </div>
        </div>
      ) : (
        // Desktop
        <div className="absolute bottom-6 right-6 flex flex-col text-center space-y-1 hidden sm:block">
          <LikeButton
            isLiked={props.isLiked}
            onLikeClick={props.onLikeClick}
            likesCount={props.likesCount}
            textColor="[var(--white)]"
            padding="p-2"
            backgroundColor="bg-[var(--white)]"
            shadow="shadow-md"
          />
          <ShareButton
            shareLink={props.shareLink}
            imageId={props.imageId}
            textColor="[var(--white)]"
            padding="p-2"
            backgroundColor="bg-[var(--white)]"
            shadow="shadow-md"
          />
        </div>
      )}
    </>
  );
}
