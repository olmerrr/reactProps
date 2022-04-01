export const Post = (props) => {
  const {title, clickOnPost} = props;
  return <div className="post-item">
    <h2>{title}</h2>
    <button onClick={clickOnPost}>Click on me</button>
  </div>
}