import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Grid = (props) => {
  const ItemData = props.Items;
  const Columns = props.Columns;

  return (
    <>
      <div className="w-100 p-2" style={{ height: props.HeightTable }}>
        <DataGrid
          rows={ItemData}
          columns={Columns}
          paginationModel={props.paginationModel}
          onPaginationModelChange={props.onPaginationModelChange}
          rowHeight={props.rowHeight}
          
        />
      </div>
    </>
  );
};

export default Grid;
