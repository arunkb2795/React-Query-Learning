import React from "react";
import { useQuery } from "react-query";
import { getPostDetails } from "./api/posts";
export default function PostDetails({ postId }) {
  const { data, isLoading, isError } = useQuery(
    ["post", postId],
    () => getPostDetails(postId),
    { enabled: Boolean(postId) }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      <h3>Post Details</h3>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  );
}
