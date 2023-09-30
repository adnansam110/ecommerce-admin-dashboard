"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const Table = () => {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
  const [loading, setLoading] = useState(true);

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { sortable: true, field: "name", filter: true },
    { sortable: true, field: "description" },
    { sortable: true, field: "price", filter: true },
    { sortable: true, field: "category", filter: true },
    { sortable: true, field: "stock", filter: true, editable: true },
    { sortable: true, field: "status", filter: true },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  // Example load data from server
  useEffect(() => {
    let rowData = JSON.parse(localStorage.getItem("products")) || [];
    rowData = rowData.map((row) => {
      return {
        ...row,
        status: row?.stock < 5 ? "Low Inventory" : "In Stock",
      };
    });
    setRowData(rowData);
    setLoading(false);
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);
  const updateStockLevel = (e) => {
    const updatedData = e.data;
    const updatedRowData = rowData.map((data) => {
      if (data.id === updatedData.id) {
        return {
          ...updatedData,
          status: updatedData.stock < 5 ? "Low Inventory" : "In Stock",
        };
      }
      return data;
    });
    setRowData(updatedRowData);
    localStorage.setItem("products", JSON.stringify(updatedRowData));
  };

  return (
    <div className="w-full h-screen p-10">
      <input
        className="mb-3 border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-auto"
        type="text"
        id="filter-text-box"
        placeholder="Search Product..."
        onInput={onFilterTextBoxChanged}
      />
      <div className="ag-theme-alpine w-full h-[500px] flex flex-col justify-center items-center">
        {loading ? (
          <div class="lds-dual-ring"></div>
        ) : (
          <div className="w-full h-full">
            <AgGridReact
              ref={gridRef} // Ref for accessing Grid's API
              rowData={rowData} // Row Data for Rows
              columnDefs={columnDefs} // Column Defs for Columns
              defaultColDef={defaultColDef} // Default Column Properties
              animateRows={true} // Optional - set to 'true' to have rows animate when sorted
              rowSelection="multiple" // Options - allows click selection of rows
              onCellEditingStopped={updateStockLevel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
