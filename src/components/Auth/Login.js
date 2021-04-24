import React from "react";
import firebase from "../../firebase";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
      loading: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = ({ email, password }) => {
    return email.length && password.length;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.isFormValid(this.state)) {
      let error = { message: "Fill in all the fields" };
      this.setState({ errors: [error] });
    } else {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((signedInUser) => {
          console.log(signedInUser);
          this.setState({
            loading: false,
          });
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            loading: false,
            errors: [...this.state.errors, err],
          });
        });
    }
  };

  handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  render() {
    const { email, password, errors, loading } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="violet" textAlign="center">
            <Icon name="code branch" color="violet" />
            Login to DevChat
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                value={email}
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                type="text"
                className={this.handleInputError(errors, "email")}
              />
              <Form.Input
                fluid
                name="password"
                value={password}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                type="password"
                className={this.handleInputError(errors, "password")}
              />
              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="violet"
                fluid
                size="large"
                onSubmit={() => this.handleSubmit()}
              >
                Login
              </Button>
            </Segment>
          </Form>
          {errors.length ? (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          ) : null}
          <Message>
            Don't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
