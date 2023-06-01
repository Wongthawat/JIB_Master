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

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "fname", headerName: "Username", width: 200, editable: true },
    { field: "lname", headerName: "Lastname", width: 200, editable: true },
    { field: "username", headerName: "Email", width: 250, editable: true },
    {
      field: "avatar",
      headerName: "Profile",
      width: 100,
      renderCell: (params) => (
        <img src={params.value} alt="" className="img-fluid" />
      ),
    },
  ];

  return (
    <>
      <div>
        <div className="w-100 p-3">
          <Form.Control onChange={searchText} placeholder="Search" />
        </div>
        <Card className="w-100 shadow">
          <Grid
            Items={dataSearch}
            Columns={columns}
            rowHeight={100}
            HeightTable={650}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </div>
    </>
  );
};

export default BannerPage;
