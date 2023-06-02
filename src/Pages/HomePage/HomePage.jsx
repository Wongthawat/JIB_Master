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
    { dataIndex: "key", title: "No", key: "key" },
    { dataIndex: "title", 
      title: "Name", 
      key: "title", 
      sorter: { compare: (a, b) => a.title - b.title }
    },
    { dataIndex: "actors", title: "Actors", key: "actors" },
    { dataIndex: "year",
      title: "Year",
      key: "year",
      sorter: { compare: (a, b) => a.year - b.year, multiple: 2 },
    },
    { dataIndex: "plot", title: "Plot", key: "plot" },
    { dataIndex: "runtime", title: "Runtime", key: "runtime" },
    { dataIndex: "director", title: "Director", key: "director" },
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
            pagination={{ position: "bottomRight" }}
            Items={dataSearch}
            Columns={columns}
          />
        </Card>
      </div>
    </>
  );
};

export default HomePage;
