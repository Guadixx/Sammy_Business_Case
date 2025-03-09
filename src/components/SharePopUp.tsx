import { useState } from 'react';

interface SharePopupProps {
  link: string;
  onClose: () => void;
  incrementShareCount: () => void;
}

export function SharePopup(props: Readonly<SharePopupProps>) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(props.link).then(() => {
      setIsCopied(true);
      props.incrementShareCount();
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)' }}
        onClick={props.onClose}
      ></div>

      <div className="bg-white p-4 rounded-lg shadow-lg z-50 w-80">
        <div className="relative flex flex-row justify-between items-center content-center w-full  mb-5">
          <h2 className="text-lg font-bold ">Share link</h2>
          <button
            onClick={props.onClose}
            className=" text-gray-500 hover:text-gray-700"
          >
            <span className="text-lg">×</span>
          </button>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            value={props.link}
            readOnly
            className="border border-gray-300 p-2 rounded-l-lg flex-1"
          />
          <button
            onClick={handleCopyLink}
            className="bg-[var(--grey-1-background)] border-[var(--grey-4-border)] border-1 text-neutral-600 p-2 rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}
