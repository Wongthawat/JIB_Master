import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Grid from "../../Components/Grid/Grid";
import Card from "@mui/material/Card";
import axios from "axios";

const BannerPage = () => {
  const URL = "https://www.melivecode.com/api";
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  const GetData = async () => {
    try {
      const res = await axios.get(`${URL}` + "/users");
      if (res.status === 200) {
        setItems(res?.data);
        // console.log(res?.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    GetData();
  }, []);

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = items.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const columns = [
    { dataIndex: "id", title: "No", key: "id" },
    { dataIndex: "fname", title: "Name", key: "name", sorter: { compare: (a, b) => a.title - b.title }},
    { dataIndex: "lname", title: "Lastname", key: "lastname" },
    { dataIndex: "username", title: "Email", key: "email" },
  ];

  return (
    <>
      <div>
        <div className="w-100 p-3">
          <Form.Control onChange={searchText} placeholder="Search" />
        </div>
        <Card className="w-100 shadow">
          {/* <Grid
            pagination={{ position: "bottomRight" }}
            Items={dataSearch}
            Columns={columns}
          /> */}
        </Card>
      </div>
    </>
  );
};

export default BannerPage;
