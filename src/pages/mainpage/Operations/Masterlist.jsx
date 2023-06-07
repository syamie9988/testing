import { Box, useTheme, Breadcrumbs, Link, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../components/theme";
import { mockDataAttendance } from "../../../data/mockData";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const Masterlist = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "no", headerName: "NO" , headerAlign: "center",
    align: "center",},
    {
      field: "EmployeeId",
      headerName: "Employee ID",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "WorkPlace",
      headerName: "Workplace",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Outlet",
      headerName: "Outlet",
      headerAlign: "center",
      align: "center",

    },
    {
      field: "Sector",
      headerName: "Sector",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Marketer",
      headerName: "Marketer",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Gender",
      headerName: "Gender",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Permit",
      headerName: "Permit",
      headerAlign: "center",
      align: "center",    },
    {
      field: "Nationality",
      headerName: "Nationality",
      headerAlign: "center",
      align: "center",    },
    {
      field: "PassportNo",
      headerName: "Passport No",
      headerAlign: "center",
      align: "center",    },
    {
      field: "DOB",
      headerName: "D.O.B",
      headerAlign: "center",
      align: "center",    },
    {
      field: "PPExp",
      headerName: "PP Exp",
      headerAlign: "center",
      align: "center",    },
    {
      field: "PMTExp",
      headerName: "PMT Exp",
      headerAlign: "center",
      align: "center",    },
    {
      field: "TyphoidDueDate",
      headerName: "Typhoid Due Date",
      headerAlign: "center",
      align: "center",    },
    {
      field: "FluJab",
      headerName: "FluJab",
      headerAlign: "center",
      align: "center",    },
    {
      field: "1st Dose",
      headerName: "1st Dose",
      headerAlign: "center",
      align: "center",    },
    {
      field: "2nd Dose",
      headerName: "2nd Dose",
      headerAlign: "center",
      align: "center",    },
    {
      field: "Booster Dose",
      headerName: "Booster Dose",
      headerAlign: "center",
      align: "center",    },
    {
      field: "Location",
      headerName: "Location",
      headerAlign: "center",
      align: "center",    },
    {
      field: "RenewalStatus",
      headerName: "Renewal Status",
      headerAlign: "center",
      align: "center",    },
    {
      field: "YearsOfService",
      headerName: "Years of Service",
      headerAlign: "center",
      align: "center",    },
    {
      field: "PPWithReturnDate",
      headerName: "PP With/Return Date",
      headerAlign: "center",
      align: "center",    },
    {
      field: "Supplier",
      headerName: "Supplier",
      headerAlign: "center",
      align: "center",    },
    {
      field: "D.O.A",
      headerName: "D.O.A",
      headerAlign: "center",
      align: "center",    },
    {
      field: "LocationFrom",
      headerName: "Location From",
      headerAlign: "center",
      align: "center",    },
    {
      field: "CallBackBy",
      headerName: "Call Back By",
      headerAlign: "center",
      align: "center",    },
    {
      field: "BankAccount",
      headerName: "Bank Account",
      headerAlign: "center",
      align: "center",    },
    {
      field: "BankType",
      headerName: "Bank Type",
      headerAlign: "center",
      align: "center",    },
    {
      field: "WorkerContactNo",
      headerName: "Worker's Contact No",
      headerAlign: "center",
      align: "center",    },
    {
      field: "Status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",    },
    {
      field: "Company",
      headerName: "Company",
      headerAlign: "center",
      align: "center",    },
    {
      field: "edit",
      headerName: "Edit",
      headerAlign: "center",
      align: "center",
            renderCell: () => (
        <IconButton color="primary" aria-label="edit">
          <EditIcon />
        </IconButton>
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
        />
      </Box>
      <Box
        m="40px 0 0 0"
        height="70vh"
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

export default Masterlist;
