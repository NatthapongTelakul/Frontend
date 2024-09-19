import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

var md5 = require("md5");

export default function Login() {

  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  
  const onLogin = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
        doLogin();
    }

    setValidated(true);
  }

  const doLogin = async() =>{
    navigate("home", { replace: false });
    // try {
    //   const data1 = await getAuthenToken();
    //   const authToken = data1.data.auth_token;

    //   const data2 = await getAccessToken(authToken);

    //   localStorage.setItem("access_token", data2.data.access_token);
    //   localStorage.setItem("user_id", data2.data.account_info.user_id);
    //   localStorage.setItem("username", username);
    //   localStorage.setItem("first_name", data2.data.account_info.first_name);
    //   localStorage.setItem("last_name", data2.data.account_info.last_name);
    //   localStorage.setItem("email", data2.data.account_info.email);
    //   localStorage.setItem("role_id", data2.data.account_info.role_id);
    //   localStorage.setItem("role_name", data2.data.account_info.role_name);
    
    //   navigate("home", { replace: false });
    // } catch (error) {
    //   console.error("Error during login:", error);
    //   alert("Username หรือ Password ไม่ถูกต้อง");
    // }
  }

  const getAuthenToken = async () => {
    const response = await fetch(
      "http://localhost:3000/api/authen_request",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: md5(username)
        })
      }
    );

    const data = await response.json();
    
    console.log(data);
    return data;
  };

  const getAccessToken = async (authToken) => {
    var baseString = username + "&" + md5(password);
    var authenSignature = md5(baseString);
    
    const response = await fetch(
      "http://localhost:3000/api/access_request",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          auth_signature: authenSignature,
          auth_token: authToken
        })
      }
    );

    const data = await response.json();
    return data;
  };

  return(
    <div className="container m-auto">
      <body>
        <Form noValidate validated={validated} onSubmit={onLogin} className="card">
          <div className="sign-in">Sign in</div>
          <div>
            <Row className="mb-3">
              <Form.Group as = {Col} controlId="validateUsername" className="login-form">
                <Form.Label className="login-label">Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Username"
                  onChange={(e)=> setUsername(e.target.value)}
                  className="input"
                />
                <Form.Control.Feedback type = "invalid" className="login-invalid">
                  กรุณากรอก Username
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as = {Col} controlId="validatePassword" className="login-form">
                <Form.Label className="login-label"> Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  onChange={(e)=> setPassword(e.target.value)}
                  className="input"
                />
                <Form.Control.Feedback type = "invalid" className="login-invalid">
                  กรุณากรอก Password
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Col md={3}>
                <Button type = "submit" className="login-btn"> Login </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </body>
    </div>
  );


}