import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import Grid from "../../Components/Grid/Grid";

import Data from "./HomeData.json";
import "./HomePage.css";

const HomePage = () => {
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = Data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const columns = [
    { dataIndex: "id", title: "No", key: "id"},
    { dataIndex: "title", title: "Name", key: "title" },
    { dataIndex: "actors", title: "Actors", key: "id" },
    { dataIndex: "year", title: "Year", key: "id" },
    { dataIndex: "plot", title: "Plot", key: "id" },
    { dataIndex: "runtime", title: "Runtime", key: "id" },
    { dataIndex: "director", title: "Director", key: "id" },
    // {
    //   name: "status",
    //   header: "Status",
    //   render: ({ value }) => {
    //     return (
    //       <Form.Check
    //         type="switch"
    //         defaultChecked={value}
    //         className="text-center"
    //       />
    //     );
    //   },
    // },
  ];

  return (
    <>
      <div className="HomeBody">
        <div className="w-100 p-3 row mx-0">
          <span className="col-lg-10 px-1">
            <Form.Control onChange={searchText} placeholder="Search Text" />
          </span>
          <span className="col-lg-2 px-1">
            <Button className="w-100" variant="success">
              เพิ่มรายการ
            </Button>
          </span>
        </div>
        <Card className="w-100 shadow">
          <Grid
            pagination={{ position: 'bottomRight' }}
            Items={dataSearch}
            Columns={columns}
          />
        </Card>
      </div>
    </>
  );
};

export default HomePage;
