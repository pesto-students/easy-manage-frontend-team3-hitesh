import {React,useEffect,useState} from 'react'
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {Link, useNavigate} from 'react-router-dom';


  const cardStyle = {
    height: "400px",
    borderRadius: "16px",
    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
  };

  
const Login = () => {
  const navigate = new useNavigate()
    const [credentials, setcredentials] = useState([]);
    useEffect(()=>{
        console.log("use effect called")
    },[credentials])
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        setcredentials(values);
        navigate('/home/summary')
      };
    
    
  return (
        <div className="container-fluid" style={{backgroundColor:'#D7ECD9'}}>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <Card
                className="d-flex flex-column justify-content-center"
                style={cardStyle}
                title={"Easy Manage"}
              >
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <div className="d-flex justify-content-center">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      // onClick={login}
                    >
                      Log in
                    </Button>
                    {/* <a className="login-form-forgot ml-2" href="">
                      Forgot password
                    </a> */}
                    <Link to={'/auth/forgot-password'} className="ml-3">
                    ForgotPassword 
                    </Link>
                  </Form.Item>
                  </div>
                  
                </Form>
              </Card>
            </div>
          </div>
        </div>
  )
}

export default Login