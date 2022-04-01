import { Post } from "./Post";

export const Posts = (props) => {
  const {posts} = props
  return <div>
    {
      posts.map(post => (
        <Post  key={post.id} title={post.title} clickOnPost={props.clickOnPost}/>
      ))
    }
  </div>;
}
