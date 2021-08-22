import { useRouter } from 'next/router';

import useMovie from '@/hooks/useMovie';

export default function MoviePage() {
  const router = useRouter();
  const { loading, data } = useMovie(router?.query?.id);

  console.log(data);

  if (loading) return <div>loading...</div>;

  return <div>{data.title}</div>;
}
