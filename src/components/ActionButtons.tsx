import { IconHeartFilled, IconHeartPlus, IconSend2 } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { SharePopup } from './SharePopUp';

interface ActionButtonsProps {
  isLiked: boolean;
  onLikeClick: () => void;
  shareLink: string;
  imageId: string;
  likesCount: number;
  isMobile?: boolean;
}

export function ActionButtons(props: Readonly<ActionButtonsProps>) {
  const getShareCountFromLocalStorage = (link: string) => {
    const savedCount = localStorage.getItem(link);
    return savedCount ? parseInt(savedCount) : 0;
  };
  const [shareCount, setShareCount] = useState(
    getShareCountFromLocalStorage(props.imageId),
  );

  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  const handleShareClick = () => {
    setIsSharePopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsSharePopupOpen(false);
  };

  const incrementShareCount = () => {
    const currentCount = localStorage.getItem(props.imageId);
    const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
    localStorage.setItem(props.imageId, newCount.toString());
    setShareCount(newCount);
  };

  useEffect(() => {
    const savedShareCount = getShareCountFromLocalStorage(props.imageId);
    setShareCount(savedShareCount);
  }, [props.imageId]);

  return (
    <>
      {props.isMobile ? (
        <div className="flex items-center justify-between w-full h-2">
          <div className="flex flex-1 justify-center content-center items-center">
            <button
              className="p-2 mr-5 rounded-full flex items-center content-center justify-center hover:bg-gray-100 transition-colors"
              aria-label={props.isLiked ? 'Unlike' : 'Like'}
              onClick={props.onLikeClick}
            >
              <span className="text-sm text-[var(--black)] p-1">
                {props.likesCount}
              </span>
              {props.isLiked ? (
                <IconHeartFilled className="w-6 h-6 text-red-600" />
              ) : (
                <IconHeartPlus className="w-6 h-6 text-[var(--black)]" />
              )}
            </button>
          </div>

          <div className="h-10 border-r border-gray-400"></div>

          <div className="flex flex-1 justify-center content-center items-center">
            <button
              className="p-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={handleShareClick}
              aria-label="Share"
            >
              <span className="text-sm text-[var(--black)]">{shareCount}</span>
              <IconSend2 className="w-6 h-6 text-[var(--black)]" />
            </button>
          </div>
        </div>
      ) : (
        // Desktop
        <div className="absolute bottom-6 right-6 flex flex-col text-center space-y-1 hidden sm:block">
          <button
            className="p-2 bg-[var(--white)] rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label={props.isLiked ? 'Unlike' : 'Like'}
            onClick={props.onLikeClick}
          >
            {props.isLiked ? (
              <IconHeartFilled className="w-6 h-6 text-red-600" />
            ) : (
              <IconHeartPlus className="w-6 h-6 text-gray-500" />
            )}
          </button>
          <p className="text-sm p-0 mb-2 text-[var(--white)]">
            {props.likesCount}
          </p>
          <button
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={handleShareClick}
            aria-label="Share"
          >
            <IconSend2 className="w-6 h-6 text-zinc-500" />
          </button>
          <p className="text-xs text-[var(--white)] font-bold">{shareCount}</p>
        </div>
      )}
      {isSharePopupOpen && (
        <SharePopup
          link={props.shareLink}
          onClose={handleClosePopup}
          incrementShareCount={incrementShareCount}
        />
      )}
    </>
  );
}
