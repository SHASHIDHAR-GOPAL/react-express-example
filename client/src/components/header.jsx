import React from 'react';
import Logo from "./logo";
import Authenticate from "./authenticate"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: !!localStorage.getItem('access_token'),
      userName: localStorage.getItem('user_name'),
      profilePic: localStorage.getItem('profile_pic'),
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(response) {
    alert("Login via Google was successful!");
    localStorage.setItem('access_token', response.accessToken);
    localStorage.setItem('user_name', response.profileObj.name);
    localStorage.setItem('profile_pic', response.profileObj.imageUrl);
    this.setState({
      isUserLoggedIn: true,
      userName: response.profileObj.name,
      profilePic: response.profileObj.imageUrl
    });
  }

  handleLogout() {
    alert("Logout was successful");
    localStorage.clear();
    this.setState({ isUserLoggedIn: false });
  }

  render() {
    return (
        <div>
          <div className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <Logo name="chirp"/>
            <Authenticate handleLogin={this.handleLogin}
                          handleLogout={this.handleLogout}
                          isUserLoggedIn={this.state.isUserLoggedIn}
                          userName={this.state.userName}
                          profilePic={this.state.profilePic}
            />
          </div>
        </div>
    );
  };
}

export default Header;