import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  username = React.createRef(); // ref를 많이 사용하면 좋지않음.

  state = {
    account: { username: "", password: "" },
  };

  componentDidMount() {
    //   this.username.current.focus();
  }

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const username = this.username.current.value;
    // 왠만하면 아래처럼 사용하면 좋지 않음. dom을 사용하는것이 유지/테스트에 유리.
    //  const username = document.getElementById("username").value;
    console.log("submit", username);
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
