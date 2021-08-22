import { githubUrl } from '@/constants/common';

import { GitHubIcon } from '@/components/Common/Icons/Icons';

const GithubLink = () => {
  return (
    <a
      className="p-2 rounded-full transition duration-200 ease-in-out cursor-pointer text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500"
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon />
    </a>
  );
};

export default GithubLink;
