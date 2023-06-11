import { useState } from "react";
import { Box, useTheme, TextField, Tab, Tabs } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../../components/theme";
import { mockDataBilling } from "../../../../data/mockData";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const CustomerBill = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState(mockDataBilling);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleEdit = (id) => {
    // Edit logic here
    console.log(`Editing item with ID: ${id}`);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredData = mockDataBilling.filter((item) =>
      item.C_Name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  const columns = [
    { field: "no", headerName: "NO", headerAlign: "center", align: "center" },
    {
      field: "Date",
      headerName: "Date",
      headerAlign: "Center",
      align: "Center",
    },
    {
      field: "CB_Id",
      headerName: "Customer Billing ID",
      type: "number",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
      renderCell: (params) => (
        <Link to={`/Rest_Day`}>{params.value}</Link>
      ),
    },
    {
      field: "C_Name",
      headerName: "Customer Name",
      flex: 4,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Total",
      headerName: "Total",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "edit",
      headerName: "Edit",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box display="inline">
          <IconButton
            color="primary"
            aria-label="edit"
            onClick={() => handleEdit(params.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            aria-label="delete"
            onClick={() => handleDelete(params.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box m="9px">
      <Box display="flex" alignItems="center">
        <TextField
          id="search-bar"
          label="Search"
          variant="outlined"
          size="small"
          sx={{ ml: "auto", width: 300 }}
          value={searchQuery}
          onChange={handleSearch}
        />
      </Box>
      <Box
        m="45px 0 0 0"
        height="74vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={data} columns={columns} />
      </Box>
    </Box>
  );
};

export default CustomerBill;
