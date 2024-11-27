import { Box, Button, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DataObat = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  
  const columns = [
    { field: "id", headerName: "No", flex: 0.17 },
    { field: "registrarId", headerName: "Rekam Medis", flex: 0.5 },
    {
      field: "name",
      headerName: "Nama",
      flex: 0.75,
      cellClassName: "name-column--cell",
    },
    {
      field: "ID",
      headerName: "ID Pasien",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "nameobat",
      headerName: "Nama Obat",
      flex: 0.5,
    },
    {
      field: "dosage",
      headerName: "Dosis",
      flex: 1,
    },
    {
      field: "frecuency",
      headerName: "Setelah/Sebelum",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Edit",
      flex: 0.5,
        renderCell: (params) => (
          <Box display="flex" gap="10px">
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate("/EditObat", { state: { data: params.row}})}
            >
              <EditIcon />
            </Button>
            </Box>
        ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.5,
      renderCell: (params) => (
        <Box display="flex" gap="10px">
        <Button
          varian="text"
          color="error"
          onClick={() =>
            window.confirm(`Hapus data dengan ID: ${params.row.id}?`) &&
            console.log("Deleterow: ", params.row)
          }
          >
            <DeleteIcon />
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Daftar Obat"
          subtitle="Data Lengkap Obat"
        />
        <Button
          onClick={() => navigate("/TambahResep")}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          Tambah Data Obat
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default DataObat;

