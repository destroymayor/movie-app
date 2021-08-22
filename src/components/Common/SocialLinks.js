import { Fragment } from 'react';

import { facebookUrl, instagramUrl, twitterUrl } from '@/constants/links';

import { LinkIcon } from '@heroicons/react/solid';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/components/Common/Icons';

const SocialLinks = (props) => {
  const { data } = props;

  const linkTypes = [
    {
      id: data?.facebook_id,
      url: facebookUrl,
      icon: (
        <FacebookIcon className="w-8 h-8 text-gray-600 fill-current stroke-current dark:text-gray-200" />
      ),
    },
    {
      id: data?.instagram_id,
      url: instagramUrl,
      icon: <InstagramIcon className="w-8 h-8 text-gray-600 fill-current stroke-current" />,
    },
    {
      id: data?.twitter_id,
      url: twitterUrl,
      icon: <TwitterIcon className="w-8 h-8 text-gray-600 fill-current stroke-current" />,
    },
  ];

  return (
    <div className="flex items-center py-2 gap-x-3">
      {data?.homepage && (
        <a href={data?.homepage} target="_blank" rel="noopener noreferrer">
          <LinkIcon className="w-7 h-7" />
        </a>
      )}

      {linkTypes.map((item, index) => (
        <Fragment key={`${item.id} - ${index}`}>
          {item.id && (
            <a href={`${item.url}/${item.id}`} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default SocialLinks;
