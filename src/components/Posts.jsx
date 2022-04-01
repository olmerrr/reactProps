import { Post } from "./Post";

export const Posts = (props) => {
  const {posts, removePost} = props
  return <div>
    {
      posts.map(post => (
        <Post  
          key={post.id} 
          title={post.title} 
          id={post.id} 
          removePost={removePost}
        />
      ))
    }
  </div>;
}
