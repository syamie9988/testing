import { Box, useTheme, Typography, TextField, InputAdornment, MenuItem, FormControl, Tab, Tabs } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../../components/theme";
import { mockDataAttendance } from "../../../../data/mockData";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const NormalRestDay = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "no", headerName: "NO" , headerAlign: "center",
    align: "center",},
    
    
    {
      field: "ND_day",
      headerName: "ND (Day)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ODD_Hr",
      headerName: "ODD (Hr)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ND_Ot",
      headerName: "ND OT (Hr)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "RD_Day",
      headerName: "RD (Day)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "RD_Hr",
      headerName: "RD/Hr",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "RD_OT",
      headerName: "RD OT (Hr)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    
    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: () => (
        <IconButton color="primary" aria-label="edit">
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  const [tabValue, setTabValue] = useState(1);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box m="15px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: "20px" }}
      >

        <Box>
        <Typography variant="h6" sx={{ fontFamily: 'Tahoma', fontSize: '20px' , fontWeight: 'bold' }}>Name</Typography> 
          <Typography variant="h6" sx={{ fontFamily: 'Arial', fontSize: '15px', fontStyle : 'italic' }}>Employee ID</Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Tabs value={tabValue} onChange={handleTabChange} textColor="inherit">
            <Tab label="Daily" component={Link} to="/daily" />
            <Tab label="Normal Day/Rest Day" component={Link} to="/Normal_Rest_Day" />
            <Tab label="Public Day/Lateness" component={Link} to="/Public_Lateness" />
            <Tab label="Additional" component={Link} to="/Additional" />
          </Tabs>

  <TextField
    id="search-bar"
    label="Search"
    variant="outlined"
    size="small"
    sx={{ width: 300 }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
</Box>

      </Box>
      <Box
        m="40px 0 0 0"
        height="72vh"
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
        <DataGrid rows={mockDataAttendance} columns={columns} />
      </Box>
    </Box>
  );
};

export default NormalRestDay;
