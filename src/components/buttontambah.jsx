import React from 'react';
import { Button as MuiButton } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };

  return (
    <MuiButton
      onClick={handleClick}
      variant="contained"
      color="primary"
      style={{ marginBottom: '20px' }}
    >
      Tambah Data Pasien
    </MuiButton>
  );
}

export default Button;

