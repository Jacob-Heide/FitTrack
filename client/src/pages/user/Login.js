import React from "react";
import { Form, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ProFormText } from "@ant-design/pro-form";
import "./LoginStyles.css";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from 'react-icons/ai'


export default function Login() {
  return (
    <div className="login-container">
      
          
      <AiOutlineLeft className="return-icon" /><div className="return-button"><Link className="return-button" to="/">Return</Link></div>
        
      <div className="login-outer-wrapper">
        
        <div className="login-form">
          <Form
            title="Login"
            name="login"
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
  
  
  
  
  // return (
  //   <div className="form-wrapper">
      
  //     <div  className="login-form">
  //       {/* {" "} */}
  //       <LoginForm title="Welcome to FitTrack" subTitle=" ">
  //         <ProFormText
  //           name="username"
  //           fieldProps={{
  //             size: "large",
  //             prefix: <UserOutlined className={"prefixIcon"} />,
  //           }}
  //           placeholder={"Enter Username"}
  //           rules={[
  //             {
  //               required: true,
  //               message: "Username required!",
  //             },
  //           ]}
  //         />
  //         <ProFormText.Password
  //           name="password"
  //           fieldProps={{
  //             size: "large",
  //             prefix: <LockOutlined className={"prefixIcon"} />,
  //           }}
  //           placeholder={"Enter Password"}
  //           rules={[
  //             {
  //               required: true,
  //               message: "Password is required",
  //             },
  //           ]}
  //         />
  //       </LoginForm>
        
  //     </div>
      
  //   </div>
  // );
}
