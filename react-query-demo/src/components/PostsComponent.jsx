import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
};

const PostsComponent = () => {
    const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // Keep data in cache for 5 minutes
    staleTime: 1000 * 60 * 1, // Consider data fresh for 1 minute
    refetchOnWindowFocus: true, // Refetch data when window gains focus
    keepPreviousData: true, // Show previous data while fetching new data
    });

    if (isLoading) {
    return <p>Loading...</p>;
    }

    if (isError) {
    return <p>Error: {error.message}</p>;
    }

    return (
    <div>
        <h2>Posts</h2>
        <button onClick={refetch}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
        </button>
        <ul>
        {data.map(post => (
            <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </li>
        ))}
        </ul>
    </div>
    );
};

export default PostsComponent;
