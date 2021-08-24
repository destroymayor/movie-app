import { useRouter } from 'next/router';

import useMovie from '@/hooks/useMovie';

import Movie from '@/components/Movie/Movie';

export default function MoviePage() {
  const router = useRouter();
  const { loading, data } = useMovie(router?.query?.id);

  return <Movie data={data} loading={loading}></Movie>;
}
