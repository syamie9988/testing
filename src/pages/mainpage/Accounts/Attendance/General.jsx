import { Box, useTheme, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../../components/theme";
import { mockDataAttendance } from "../../../../data/mockData";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";


const General = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "no", headerName: "NO" , headerAlign: "center",
    align: "center",},
    
    
    {
      field: "EmployeeId",
      headerName: "Employee ID",
      type: "number",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Link to={`/daily`}>{params.value}</Link>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "left",
      align: "left",

    },
    {
      field: "PassportNo",
      headerName: "Passport NO",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "WorkPermit",
      headerName: "Work Permit",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Dept",
      headerName: "Dept",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Wh",
      headerName: "Wh",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Nationality",
      headerName: "Nationality",
      headerAlign: "center",
      align: "center",    },
    {
      field: "DOJ",
      headerName: "D.O.J",
      headerAlign: "center",
      align: "center",    },
    {
      field: "Resign",
      headerName: "Resign",
      headerAlign: "center",
      align: "center",    },
    {
      field: "edit",
      headerName: "Edit",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box>
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

  const handleEdit = (id) => {
    // Logic for handling edit action
    console.log("Edit clicked for row with id:", id);
    // Perform necessary operations for editing the row
  };

  const handleDelete = (id) => {
    // Logic for handling delete action
    console.log("Delete clicked for row with id:", id);
    // Perform necessary operations for deleting the row
  };

  const handleCellClick = (params, event) => {
    const isEditIcon = event.target.closest("[aria-label='edit']");
    const isDeleteIcon = event.target.closest("[aria-label='delete']");

    if (isEditIcon) {
      handleEdit(params.id);
    } else if (isDeleteIcon) {
      handleDelete(params.id);
    }
  };

  return (
    
    <Box m="9px">
      
      <Box display="flex" alignItems="center">
        
        <TextField
          id="search-bar"
          label="Search"
          variant="outlined"
          size="small"
          sx={{ ml: "auto", width: 300 }}
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
        <DataGrid
        rows={mockDataAttendance}
        columns={columns}
        onCellClick={handleCellClick}
        />
      </Box>
    </Box>
  );
};

export default General;
