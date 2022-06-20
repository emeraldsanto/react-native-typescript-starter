import useSWR from 'swr';

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
  return useSWR<Post[], Error>(
    'https://jsonplaceholder.typicode.com/posts',
    (url: string) => fetch(url).then((res) => res.json()),
  );
}
