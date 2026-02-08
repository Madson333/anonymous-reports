import { useCallback } from 'react';
import api from '../services/api';

export function useApi() {
  const get = useCallback(async (path: string, config?: any) => {
    try {
      const res = await api.get(path, config);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  const post = useCallback(async (path: string, body?: any, config?: any) => {
    try {
      const res = await api.post(path, body, config);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  const put = useCallback(async (path: string, body?: any, config?: any) => {
    try {
      const res = await api.put(path, body, config);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  const del = useCallback(async (path: string, config?: any) => {
    try {
      const res = await api.delete(path, config);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  return { get, post, put, del };
}
