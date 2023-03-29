import React from "react";
import { Form, message, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ProFormText } from "@ant-design/pro-form";
import { register } from "../../services/api.service";
import "./RegisterStyles.css";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from 'react-icons/ai'

export default function Register() {
  async function handleSubmit(values) {
    try {
      const res = await register({
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        password: values.password,
      });
      console.log("res", res);
      message.success("Registerd succsessfully");
    } catch (err) {
      console.log("err", err);
      message.error(err.data?.message || "Register failed, please try again");
    }
  }

  return (
  <div className="register-container">
    
        
    <AiOutlineLeft className="return-icon" /><div className="return-button"><Link className="return-button" to="/">Return</Link></div>
      
    <div className="register-outer-wrapper">
      
      <div className="register-form">
        <Form
          title="Register"
          name="register"
          onFinish={handleSubmit}
          scrollToFirstError
        >
          <ProFormText
            name="firstName"
            fieldProps={{
              size: "large",
              prefix: <UserOutlined />,
            }}
            placeholder="First Name"
            rules={[
              {
                required: true,
                message: "Please enter your first name",
              },
            ]}
          />
          <ProFormText
            name="lastName"
            fieldProps={{
              size: "large",
              prefix: <UserOutlined />,
            }}
            placeholder="Last Name"
            rules={[
              {
                required: true,
                message: "Please enter your last name",
              },
            ]}
          />
          <ProFormText
            name="username"
            fieldProps={{
              size: "large",
              prefix: <UserOutlined />,
            }}
            placeholder="Username"
            rules={[
              {
                required: true,
                message: "Please enter your username",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: "large",
              prefix: <LockOutlined />,
            }}
            placeholder="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          />
          <Form.Item>
            <Button
              className="register-button"
              type="primary"
              htmlType="submit"
            >
              Register
            </Button>
          </Form.Item>
          <span className="register-form-footer">
            <h4>Already have an account?</h4>
            <Link className="link-to-login" to="/login">
              Login
            </Link>
          </span>
        </Form>
      </div>
    </div>
    </div>
  );
}
