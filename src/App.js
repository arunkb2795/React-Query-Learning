import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getPosts } from "./api/posts";
import PostDetails from "./postDetails";
function App() {
  const [postId, setPostId] = useState(null);
  const { data, isLoading, isError } = useQuery("posts", () => getPosts());

  const handleView = (id) => {
    console.log(id);
    setPostId(id);
  };

  if (isLoading) return <div>Loading..</div>;

  if (isError) return <div>Something went wrong...</div>;

  const renderPostDetails = () => {
    return <PostDetails postId={postId} />;
  };

  return (
    <div>
      {postId && renderPostDetails()}
      {data.data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => handleView(post.id)}>View</button>
        </div>
      ))}
    </div>
  );
}

export default App;
