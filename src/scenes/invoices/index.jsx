import React from 'react';
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Nama",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Telp",
      flex: 1,
    },
    {
      field: "resep",
      headerName: "Resep Obat",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Harga",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.blueAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Tanggal",
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
              onClick={() => navigate("/EditInvoice", { state: { data: params.row}})}
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
          title="Daftar Invoice"
          subtitle="Data Lengkap Invoice"
        />
        <Button
          onClick={() => navigate("/TambahInvoice")}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          Tambah Data Invoice
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
          rows={mockDataInvoices}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;