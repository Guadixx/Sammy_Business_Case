import { IconSend2 } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { SharePopup } from '../SharePopUp';

interface ShareButtonProps {
  shareLink: string;
  imageId: string;
  textColor: string;
  padding: string;
  backgroundColor: string;
  shadow: string;
}

export function ShareButton(props: Readonly<ShareButtonProps>) {
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
      <button
        className={`${props.padding} ${props.backgroundColor} ${props.shadow} rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors`}
        onClick={handleShareClick}
        aria-label="Share"
      >
        <IconSend2 className="w-6 h-6 text-[var(--black)]" />
      </button>
      <p className={`text-sm text-${props.textColor}`}>{shareCount}</p>
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
