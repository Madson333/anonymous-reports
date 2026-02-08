import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import apiClient from '@/services/api';
import { handleResponseError } from '@/utils/handleResponseError';

interface Comment {
  id: string;
  username: string;
  content: string;
  createdAt: string;
}

interface ReportDetails {
  id: string;
  description: string;
  imageUrl: string;
  likes: number;
  comments: Comment[];
}

export const GET_REPORT_DETAILS = 'GET_REPORT_DETAILS';

const getReportDetails = (id: string) => {
  return apiClient
    .get<ReportDetails>(`/reports/${id}`)
    .then((response) => response.data)
    .catch(
      handleResponseError({
        methodPath: 'getReportDetails'
      })
    );
};

export const useGetReportDetails = (
  id: string,
  options: Omit<
    UseQueryOptions<
      ReportDetails,
      AxiosError,
      ReportDetails,
      (string | string)[]
    >,
    'queryKey' | 'queryFn'
  > = {}
) => {
  return useQuery({
    queryFn: () => getReportDetails(id),
    queryKey: [GET_REPORT_DETAILS, id],
    ...options
  });
};
