import React from "react";
import { Table } from 'antd';
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

const Grid = (props) => {
  const ItemData = props.Items;
  const Columns = props.Columns;

  return (
    <>
      <div className="w-100 p-2">
        <Table
          key={props.Id}
          columns={Columns}
          pagination={props.pagination}
          dataSource={ItemData}
        />
        {/* <ReactDataGrid
          idProperty="id"
          columns={Columns}
          dataSource={ItemData}
          pagination
          defaultLimit={props.defaultLimit}
          style={props.gridStyle}
          defaultFilterValue={props.defaultFilterValue}
          editable={props.editable}
          checkboxColumn={props.checkboxColumn}
          selected={props.selected}
          onSelectionChange={props.onSelectionChange}
        /> */}
      </div>
    </>
  );
};

export default Grid;
