export const Post = (props) => {
  const {title, id, removePost} = props;
  return <div className="post-item">
    <h2>{title}</h2>
    <button 
      className="btn"
      onClick= {() => removePost(id) }
      >remove</button>
  </div>
}