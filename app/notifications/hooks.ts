'use client';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import type { Notification } from '@/types/notification';
import { NOTIFICATION_TYPES } from '@/types/notification';

const NOTIFICATIONS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const NOTIFICATION_QUERY_KEY = ['notifications'] as const;

type ApiNotification = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const transformNotification = (item: ApiNotification): Notification => ({
  id: item.id,
  title: item.title,
  message: item.body,
  type: NOTIFICATION_TYPES[item.id % NOTIFICATION_TYPES.length],
  isRead: false,
  createdAt: new Date(1700000000000 + item.id * 1000000).toISOString(),
  userId: item.userId,
});


const fetchNotifications = async (): Promise<Notification[]> => {
  const { data } = await axios.get<ApiNotification[]>(NOTIFICATIONS_ENDPOINT);

  return data.map(transformNotification);
};


export const useNotificationsQuery = () =>
  useQuery({
    queryKey: NOTIFICATION_QUERY_KEY,
    queryFn: fetchNotifications,
    refetchInterval: 30_000,
  });

export const useMarkAsReadMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => id,
    onMutate: (id: number) => {
      queryClient.setQueryData<Notification[]>(NOTIFICATION_QUERY_KEY, (old = []) =>
        old.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
      );
    },
  });
};

export const useMarkAllAsReadMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => true,
    onMutate: () => {
      queryClient.setQueryData<Notification[]>(NOTIFICATION_QUERY_KEY, (old = []) =>
        old.map((n) => ({ ...n, isRead: true }))
      );
    },
  });
};


export { NOTIFICATION_QUERY_KEY };

