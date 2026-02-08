import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import apiClient from '@/services/api';
import { handleResponseError } from '@/utils/handleResponseError';

interface Report {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
  commentsCount: number;
}

export const GET_REPORTS = 'GET_REPORTS';

const getReports = () => {
  return apiClient
    .get<Report[]>('/reports')
    .then((response) => response.data)
    .catch(
      handleResponseError({
        methodPath: 'getReports'
      })
    );
};

export const useGetReports = (
  options: Omit<
    UseQueryOptions<Report[], AxiosError, Report[], string[]>,
    'queryKey' | 'queryFn'
  > = {}
) => {
  return useQuery({
    queryFn: getReports,
    queryKey: [GET_REPORTS],
    ...options
  });
};
