import { useState, type MouseEvent } from 'react';
import { useStore } from '@nanostores/react';

const DownloadButton = () => {
  const [isDownloading,setIsDownloading] = useState<boolean>(false);
  const fileId = import.meta.env.PUBLIC_CV_DRIVE_ID;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isDownloading) {
      event.preventDefault();
      return;
    }
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 6000);
  };

  return (
    <a
      href={downloadUrl}
      onClick={handleClick}
      className={`inline-block mt-8 px-6 py-3 bg-accent text-bg font-medium rounded transition-colors ${
        isDownloading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent-hover'
      }`}
    >
      {isDownloading ? 'Downloading...' : 'Download My Resume'}
    </a>
  );
};

export default DownloadButton;