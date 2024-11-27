import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const EditPasien = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Edit Invoice" subtitle="Edit Data Invoice" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nama"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="firstName"
                error={!!touched.name&& !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Telp"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.telp}
                name="lastName"
                error={!!touched.telp && !!errors.telp}
                helperText={touched.telp && errors.telp}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Resep Obat"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.resep}
                name="rekamMedis"
                error={!!touched.resep && !!errors.resep}
                helperText={touched.resep && errors.resep}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Harga"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cost}
                name="contact"
                error={!!touched.cost && !!errors.cost}
                helperText={touched.cost && errors.cost}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="date"
                label="Tanggal"
                type="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                InputLabelProps={{ shrink: true }}
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Edit Data
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  telp: yup.string().required("required"),
  resep: yup.string().required("required"),
  const: yup.string().required("required"),
  address1: yup.string().required("required"),
});

const initialValues = {
  name: "",
  telp: "",
  resep: "",
  cost: "",
  address1: "",
};

export default EditPasien;

