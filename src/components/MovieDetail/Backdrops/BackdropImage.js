import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/image-sizes';

import Image from '@/components/Common/Image';

const BackdropImage = (props) => {
  const { alt, src } = props;

  const width = 492;
  const height = 276;

  return (
    <Image
      className="rounded-md"
      alt={alt}
      src={`${IMAGE_URL}/${imageSizes.backdropSizes.w780}/${src}`}
      width={width}
      height={height}
    />
  );
};

export default BackdropImage;
