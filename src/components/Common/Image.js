import NextImage from 'next/image';

import blurDataUrl from 'src/helpers/blur-data-url';

const Image = (props) => {
  const { width, height } = props;

  return (
    <NextImage
      unoptimized
      {...props}
      placeholder="blur"
      blurDataURL={blurDataUrl({ width, height })}
      width={width}
      height={height}
    />
  );
};

export default Image;
