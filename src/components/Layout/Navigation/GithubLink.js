import { githubUrl } from '@/constants/links';
import { GithubIcon } from '@/components/Common/Icons';

const GithubLink = (props) => {
  return (
    <a {...props} href={githubUrl} target="_blank" rel="noopener noreferrer">
      <GithubIcon className="w-6 h-6" />
    </a>
  );
};

export default GithubLink;
