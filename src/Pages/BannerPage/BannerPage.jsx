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
    { name: "id", header: "No", defaultWidth: 100 },
    { name: "fname", header: "Name", defaultWidth: 200, editable: true },
    { name: "lname", header: "Lastname", defaultWidth: 200, editable: true },
    { name: "username", header: "Email", defaultWidth: 300, editable: true },
  ];

  const filterValue = [
    { name: "fname", operator: "contains", type: "string" },
    { name: "lname", operator: "contains", type: "string" },
    { name: "runtime", operator: "contains", type: "string" },
    { name: "username", operator: "contains", type: "string" },
  ];

  const gridStyle = { minHeight: 600 };

  return (
    <>
      <div>
        <div className="w-100 p-3">
          <Form.Control onChange={searchText} placeholder="Search" />
        </div>
        <Card className="w-100 shadow">
        {/* <Grid
            Items={dataSearch}
            Columns={columns}
            defaultLimit={25}
            gridStyle={gridStyle}
            defaultFilterValue={filterValue}
            editable={false}
          /> */}
        </Card>
      </div>
    </>
  );
};

export default BannerPage;
