import React from "react";
import "./App.css";
import axios from "axios";


class App extends React.Component {
  state = {
    user: {},
    userFollowers: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/Robdowski`)
    .then(res => {
      this.setState({
        user: res.data
      })
      console.log(res)
    })
    .catch(err =>{
      console.log(err)
    })

    axios.get(`https://api.github.com/users/Robdowski/followers`)
    .then(res => {
      console.log(res)
      this.setState({
        userFollowers: res.data
      })
      console.log(this.state.userFollowers)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="user-card">
          <h2>{this.state.user.name}</h2>
          <p>Bio: {this.state.user.bio}</p>
          <p>Following: {this.state.user.following}</p>
          <p>Followers: {this.state.user.followers}</p>
        </div>
        <h2>{this.state.user.name}'s Followers</h2>
        <div className="follower-list">
          {this.state.userFollowers.map(item => 
            <div className='follower-card'>
              <h4>{item.login}</h4>
              <p>{item.html_url}</p>
              <img src={item.avatar_url} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App;
