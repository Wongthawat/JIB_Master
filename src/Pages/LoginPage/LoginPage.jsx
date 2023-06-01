import React, { useState } from "react";
import { Form, Button } from "react-bootstrap/";
import axios from "axios";
import { BASE_URL } from "../../Services/apiURL"
import ImgBG from "../../assets/bg_login.jpg";
import "./LoginPage.css";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(BASE_URL+"api/auth/signin", {
        username: username,
        password: password
      })
      if(response.status === 200){
        // console.log(response?.data)
        localStorage.setItem("dataUser", JSON.stringify(response?.data))
        localStorage.setItem("accessToken", response?.data?.accessToken);
        localStorage.setItem("roles", JSON.stringify(response?.data?.roles))
        location.href = "/homepage"
      }
    } catch (error) {
      
    }
  }

  return (
    <div className="row">
      <div className="col-lg-8 col-md-6 ">
        <img src={ImgBG} alt="ImgLogin" className="ImgBox" />
      </div>
      <div className="col-lg-4 col-md-6 BoxLogin">
        <div className="mx-5 StyBoxLogin">
          <h4 className="text-center">เข้าสู่ระบบ</h4>
          <Form className="px-5">
            <Form.Group className="my-2">
              <Form.Label className=""> Username : </Form.Label>
              <Form.Control type="text" placeholder="ป้อนชื่อเข้าสู่ระบบ" onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label className=""> Password : </Form.Label>
              <Form.Control type="password" placeholder="ป้อนรหัสเข้าสู่ระบบ" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="my-2 text-center">
              <Button className="btnSuccess mx-1" variant="secondary" onClick={handleSubmit}> เข้าสู่ระบบ </Button>
              <Button className="btnCancel mx-1" variant="outline-secondary" type="reset"> ยกเลิก </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
