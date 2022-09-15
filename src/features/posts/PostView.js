import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
	const { isLoading, posts, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, []);
	return (
		<div>
			<h2>Post View</h2>

			{isLoading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			<section>
				{posts &&
					posts.map((post) => (
						<article key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</article>
					))}
			</section>
		</div>
	);
};

export default PostView;
