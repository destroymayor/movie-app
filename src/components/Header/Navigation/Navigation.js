import GithubLink from '@/components/Common/GithubLink';
import SearchButton from '@/components/Header/Navigation/SearchButton';
import ThemeToggle from '@/components/Header/Navigation/ThemeToggle';

const Navigation = () => {
  return (
    <nav className="flex items-center gap-x-1">
      <SearchButton />
      <GithubLink />
      <ThemeToggle />
    </nav>
  );
};

export default Navigation;
