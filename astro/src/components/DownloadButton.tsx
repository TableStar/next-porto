import React from 'react';
import { useStore } from '@nanostores/react';
import { isDownloading } from '../stores/downloadStore';

const DownloadButton: React.FC = () => {
  const $isDownloading = useStore(isDownloading);
  const fileId = import.meta.env.PUBLIC_CV_DRIVE_ID;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if ($isDownloading) {
      event.preventDefault();
      return;
    }
    isDownloading.set(true);
    setTimeout(() => {
      isDownloading.set(false);
    }, 6000);
  };

  return (
    <a
      href={downloadUrl}
      onClick={handleClick}
      className={`inline-block mt-8 px-6 py-3 bg-accent text-bg font-medium rounded transition-colors ${
        $isDownloading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent-hover'
      }`}
    >
      {$isDownloading ? 'Downloading...' : 'Download My Resume'}
    </a>
  );
};

export default DownloadButton;