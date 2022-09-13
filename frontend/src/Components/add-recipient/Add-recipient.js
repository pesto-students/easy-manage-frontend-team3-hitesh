import { React, useState } from "react";
import { Form, Input, Button, Card, Row, Col, Upload,Select } from "antd";
import { HomeTwoTone,UserOutlined,MailOutlined,PhoneOutlined,NumberOutlined} from "@ant-design/icons";
const AddRecipient = () => {
  const [loading, setloading] = useState(false);
  const [fileList, setfileList] = useState([]);
  const [proof, setproof] = useState("");
  const [values,setValues] = useState({
    proof:null,
    accType:null
  })
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const rooms = ["Single","Double"];
  const idProof = ["Aadhar","Pan-card","Driving Licence"]
  const {Option} = Select
  const handleUpload = ({ fileList }) => {
    setfileList(fileList);
  };
  const accTypeChange = (e)=>{
    setValues({
      ...values,
      accType:e
    })
  }
  const proofChange = (e)=>{
        setproof(e)
  }
  const cardstyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <>
      <Row style={{ marginTop: "6rem" }} justify="center">
        <Col lg={16} xs={24}>
          <Card
            className="d-flex flex-column justify-content-center"
            title={"Add Recipient "}
            style={cardstyle}
            justify={"center"}
          >
            <Form
              name="add_recipient"
              className="recipient-form"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Name!",
                  },
                ]}
              >
                <Input
                  suffix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Name"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Email",
                  },
                ]}
                label="Email"
              >
                <Input
                  suffix={<MailOutlined  className="site-form-item-icon" />}
                  type="email"
                  placeholder="example@gmail.com"
                />
              </Form.Item>
              <Form.Item
                name="phone-number"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Phone Number",
                  },
                ]}
                label="Phone Number"
              >
                <Input
                  suffix={<PhoneOutlined className="site-form-item-icon" />}
                  type="number"
                  placeholder="Ex:1234567890"
                />
              </Form.Item>
              <Form.Item
                name="id-proof"
                rules={[
                  {
                    required: true,
                    message: "Please Select Your Id Proof",
                  },
                ]}
                label="Id Proof"
              >
                <Select
                  mode="single"
                  size="middle"
                  placeholder="Please Select Accomidation type"
                  onChange={proofChange}
                  style={{
                    width: "100%",
                  }}
                >
                  {idProof.map((proof)=>{
                    return <Option key={proof}>{proof}</Option>
                  })}
                </Select>
              </Form.Item>

              {proof && <Form.Item
                name="id-proof-num"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Valid Number",
                  },
                ]}
                label={`${proof} Number`}
              >
                <Input
                  suffix={<NumberOutlined className="site-form-item-icon" />}
                  placeholder={`Enter Your ${proof} Number`}
                />
              </Form.Item> }
              
                    
              <Form.Item
                name="acc-type"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Location",
                  },
                ]}
                label="Accomitation Type"
              >
                <Select
                  mode="single"
                  size="middle"
                  placeholder="Please Select Accomidation type"
                  onChange={accTypeChange}
                  style={{
                    width: "100%",
                  }}
                >
                  {rooms.map((room)=>{
                    return <Option key={room}>{room}</Option>
                  })}
                </Select>
              </Form.Item>
              {
                values.accType && 
                <Form.Item 
                name={"rooms"}
                required= {true}
                label={`please select ${values.accType} room`}
                >
                  <Select
                  mode="single"
                  size="middle"
                  placeholder="Please Select Accomidation type"
                  onChange={accTypeChange}
                  style={{
                    width: "100%",
                  }}
                >
                  {rooms.map((room)=>{
                    return <Option key={room}>{room}</Option>
                  })}
                </Select>
                </Form.Item>
              }

              <div className="d-flex justify-content-center">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                  >
                    Add User
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AddRecipient;
