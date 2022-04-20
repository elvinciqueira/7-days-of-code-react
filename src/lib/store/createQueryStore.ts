import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from 'react-query';

type TResponse = any;
type TError = any;

export const createQueryStore = (
  key,
  promise,
  config = null,
): UseQueryResult<TResponse, TError> => {
  return useQuery(key, promise, getCombinedConfig(config));
};

export const createMutationStore = (
  promise,
  config = null,
): UseMutationResult<TResponse, TError> => {
  return useMutation(promise, getCombinedConfig(config));
};


const getCombinedConfig = (config) => {
  return { ...config };
};