import React from 'react';
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'
const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const cardStyle = {
    height: "400px",
    borderRadius: "16px",
    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
  };

const ForgotPassword = () => {
  return (
    <div className="container-fluid " style={{backgroundColor:'#D7ECD9'}}>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="col-lg-3 col-sm-12">
              <Card
                className="d-flex flex-column justify-content-center"
                style={cardStyle}
                title={"Easy Manage"}
                extra={<Link to={'/'}>Back</Link>}
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
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input Valid Email ID!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Email ID"
                    />
                  </Form.Item>
                  
                  <div className="d-flex justify-content-center">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                  </div>
                  
                </Form>
              </Card>
            </div>
          </div>
        </div>
  )
}

export default ForgotPassword