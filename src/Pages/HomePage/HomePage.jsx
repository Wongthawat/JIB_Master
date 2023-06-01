import React, { useState } from "react";
import { Form } from "react-bootstrap";
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
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'year', headerName: 'Year', type:'number', width: 100 },
    { field: 'actors', headerName: 'Actors', type: 'text', width: 500, editable: true }
  ];

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });

  return (
    <>
      <div className="HomeBody">
        <div className="w-100 p-3">
          <Form.Control onChange={searchText} placeholder="Search" />
        </div>
        <Card className="w-100 shadow">
          <Grid 
          Items={dataSearch} 
          Columns={columns} 
          HeightTable={650}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </div>
    </>
  );
};

export default HomePage;
