import Image from 'next/image';

import { IMAGE_URL } from '@/api/api';

const CoverImage = (props) => {
  const { url, alt } = props;

  const imageUrl = `${IMAGE_URL}${url}`;

  return (
    <div className="flex-1 flex justify-center">
      {url && <Image src={imageUrl} alt={alt} width={292} height={454} />}
    </div>
  );
};

export default CoverImage;
