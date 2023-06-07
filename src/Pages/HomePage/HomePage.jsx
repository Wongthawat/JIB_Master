import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import Grid from "../../Components/Grid/Grid";
import Data from "./HomeData.json";


const HomePage = () => {
  const [filter, setFilter] = useState("");


  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = Data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()));
  });

  const columns = [
    { dataIndex: "key", title: "No", key: "key" },
    { dataIndex: "title", title: "Name", key: "title", sorter: { compare: (a, b) => a.title - b.title }},
    { dataIndex: "actors", title: "Actors", key: "actors" },
    { dataIndex: "year", title: "Year", key: "year", sorter: { compare: (a, b) => a.year - b.year, multiple: 2 }},
    { dataIndex: "plot", title: "Plot", key: "plot" },
    { dataIndex: "runtime", title: "Runtime", key: "runtime" },
    { dataIndex: "director", title: "Director", key: "director" },
  ];

  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full p-3 row mx-0 items-center">
          <div className="col-lg-10 px-1 py-1">
            <Form.Control onChange={searchText} placeholder="Search Text" className="hover:shadow-sm border-2 border-sky-200 focus:border-sky-500"/>
          </div>
          <div className="col-lg-1 px-1 py-1 ">
            <Button className="w-full border-none bg-lime-500 hover:bg-lime-600 hover:shadow-lg">
              ค้นหารายการ
            </Button>
          </div>
          <div className="col-lg-1 px-1 py-1">
            <Button className="w-100 border-none bg-sky-500 hover:bg-sky-600 hover:shadow-lg">
              เพิ่มรายการ
            </Button>
          </div>
        </div>
        <Card className="w-full shadow col-12">
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
