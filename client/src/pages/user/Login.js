import React from "react";
import { message, Form, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ProFormText } from "@ant-design/pro-form";
import "./LoginStyles.css";
import { login } from "../../services/api.service";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLeft } from 'react-icons/ai'


export default function Login() {
  
  
  const navigate = useNavigate()


  async function handleSubmit(values) {
    try {
      //
      const res = await login({
        username: values.username,
        password: values.password,
      });
      
      localStorage.setItem('userinfo', JSON.stringify(res));
      message.success("Login succsessful");
      setTimeout(() => {
        navigate('/landing')
    }, 1500)
    } catch (err) {
      console.log("err", err);
      message.error(err.data?.message || "Login failed, please try again");
    }
  }
  return (

    
    <div className="login-container">
      
          
      <AiOutlineLeft className="return-icon" /><div className="return-button"><Link className="return-button" to="/">Return</Link></div>
        
      <div className="login-outer-wrapper">
        
        <div className="login-form">
          <Form
            title="Login"
            name="login"
            onFinish={handleSubmit}
            scrollToFirstError
          >
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
                className="login-button"
                type="primary"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
            <span className="login-form-footer">
              <h4>Dont't have an account?</h4>
              <Link className="link-to-register" to="/register">
                Register
              </Link>
            </span>
          </Form>
        </div>
      </div>
      </div>
    );
}
