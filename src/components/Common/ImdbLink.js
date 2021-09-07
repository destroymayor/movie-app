import { imdbUrl } from '@/constants/common';

import { ImdbIcon } from '@/components/Common/Icons/Icons';

const ImdbLink = (props) => {
  const { id } = props;
  const url = `${imdbUrl}/title/${id}`;

  if (!id) return <div />;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <ImdbIcon />
    </a>
  );
};

export default ImdbLink;
