import useSWR from 'swr';

import {
  MOVIE_DETAILS_API,
  TV_DETAILS_API,
  COLLECTION_DETAILS_API,
  COMPANY_DETAILS_API,
  PERSON_DETAILS_API,
  KEYWORD_DETAILS_API,
} from '@/api/api';
import { dataFields } from '@/constants/fields';

const useMovieDetails = (props) => {
  const { queryType, queryParams, id, fallbackData } = props;
  const { movie, tv, collection, company, person, keyword } = dataFields;

  const queryTypes = {
    [movie.key]: MOVIE_DETAILS_API,
    [tv.key]: TV_DETAILS_API,
    [collection.key]: COLLECTION_DETAILS_API,
    [company.key]: COMPANY_DETAILS_API,
    [person.key]: PERSON_DETAILS_API,
    [keyword.key]: KEYWORD_DETAILS_API,
  };
  const url = `${queryTypes[queryType]}/${id}/${queryParams}`;

  const { data, error } = useSWR(url, { fallbackData });

  const isError = !!error;
  const isLoading = !data && !error;

  return {
    data,
    isError,
    isLoading,
  };
};

export default useMovieDetails;
