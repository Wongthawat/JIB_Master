import React, { useEffect, useState } from "react";
import Grid from "../../Components/Grid/Grid";
import Card from "@mui/material/Card";
import axios from "axios";

const BannerPage = () => {
  const URL = "https://www.melivecode.com/api";
  const [items, setItems] = useState([]);

  const GetData = async () => {
    try {
      const res = await axios.get(`${URL}` + "/users");
      if (res.status === 200) {
        setItems(res?.data);
        console.log(res?.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    GetData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "fname", headerName: "Username", width: 200, editable: true },
    { field: "lname", headerName: "Lastname", width: 200, editable: true },
    { field: "username", headerName: "Email", width: 200, editable: true },
    {
      field: "avatar",
      headerName: "Profile",
      width: 100,
      renderCell: (params) => <img src={params.value} alt="" className="w-100" />,
    },
  ];

  return (
    <>
      <div>
        <Card>
          <Grid Items={items} Columns={columns} />
        </Card>
      </div>
    </>
  );
};

export default BannerPage;
