import React from 'react';
import { Posts } from './components/Posts'
import './App.css';

export default class App extends React.Component {
  state = {
    posts: [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        version: [
          1, 2, 3, 4
        ]
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        version: [
          [1, 2]
        ]
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        version: [
          [1, 2, 3]
        ]
      },
    ]
  };

  handleClickPost() {
    console.log('click on post')
  }

  render() {
    // хороший пример дестркуторизации
    const { posts } = this.state;
    // хороший пример дестркуторизации
    return (
      <div className="App">
        <Posts posts={posts} clickOnPost={this.handleClickPost} />
      </div>
    );
  }
}
