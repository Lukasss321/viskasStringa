import { useEffect } from "react";
import { BlogItem } from "./BlogItem";
import { useState } from "react";
import axios from "axios";

export const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        setBlogPosts(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.group("blogPosts", blogPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {blogPosts.map((post) => (
        <BlogItem post={post} />
      ))}
      {/* <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem /> */}
    </ul>
  );
};
