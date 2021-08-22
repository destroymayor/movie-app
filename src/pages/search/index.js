import useMovies from '@/hooks/useMovies';

import Search from '@/components/Search/Search';

export default function SearchPage() {
  useMovies();

  return <Search />;
}
