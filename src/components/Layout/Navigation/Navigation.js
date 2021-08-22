import GithubLink from '@/components/Layout/Navigation/GithubLink';
import ThemeToggle from '@/components/Layout/Navigation/ThemeToggle';

import SegmentedControl from '@/components/Common/SegmentedControl';

const Navigation = () => {
  const list = [<GithubLink key={0} />, <ThemeToggle key={1} />];

  return (
    <nav>
      <SegmentedControl components={list} width={40} height={40} />
    </nav>
  );
};

export default Navigation;
