import { githubUrl } from '@/constants/common';

import { GitHubIcon } from '@/components/Common/Icons/Icons';

const GithubLink = () => {
  return (
    <a
      className="p-2 rounded-full transition duration-200 ease-in-out cursor-pointer hover:text-yellow-500 hover:bg-gray-100"
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon />
    </a>
  );
};

export default GithubLink;
