import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { useHistory } from 'react-router-dom'
const Login = () => {
    const history = useHistory()
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })

    const updateUserInfo = e => {
        const {id, value} = e.target
        setUserInfo(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const submitHandler = e => {
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify(userInfo));
        history.push('/home')
    }


  return (
    <div className="container">
      <div className="login-container">
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={updateUserInfo} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={updateUserInfo} type="password" placeholder="Password" />
          </Form.Group>
          <Button onClick={submitHandler} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
