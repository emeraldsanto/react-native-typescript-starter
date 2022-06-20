import useSWR, { useSWRConfig } from 'swr';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function usePost(id: Post['id']) {
  return useSWR<Post, Error>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    (url: string) => fetch(url).then((res) => res.json()),
  );
}

export function usePosts() {
  const { cache } = useSWRConfig();

  return useSWR<Post[], Error>(
    'https://jsonplaceholder.typicode.com/posts',
    (url: string) => fetch(url).then((res) => res.json()),
    {
      onSuccess(data, key) {
        data.forEach((post) => cache.set(`${key}/${post.id}`, { data: post }));
      },
    },
  );
}
