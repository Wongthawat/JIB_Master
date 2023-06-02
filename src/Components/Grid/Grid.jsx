import React from "react";
import { Table } from 'antd';
// import ReactDataGrid from "@inovua/reactdatagrid-community";
// import "@inovua/reactdatagrid-community/index.css";

const Grid = (props) => {
  const ItemData = props.Items;
  const Columns = props.Columns;

  return (
    <>
      <div className="w-100 p-2">
        <Table
          columns={Columns}
          pagination={props.pagination}
          dataSource={ItemData}
          scroll={props.scroll}
          bordered
        />
      </div>
    </>
  );
};

export default Grid;
