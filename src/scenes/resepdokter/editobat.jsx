import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const EditObat = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Edit Obat" subtitle="Edit Data Obat" />

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
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ID Pasien"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.idpasien}
                name="lastName"
                error={!!touched.idpasien && !!errors.idpasien}
                helperText={touched.idpasien && errors.idpasien}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Rekam Medis"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rekamMedis}
                name="rekamMedis"
                error={!!touched.rekamMedis && !!errors.rekamMedis}
                helperText={touched.rekamMedis && errors.rekamMedis}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nama Obat"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nameobat}
                name="contact"
                error={!!touched.nameobat && !!errors.nameobat}
                helperText={touched.nameobat && errors.nameobat}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Dosis"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dosage}
                name="address1"
                error={!!touched.dosage && !!errors.dosage}
                helperText={touched.dosage && errors.dosage}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Setelah/Sebelum"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.frecuency}
                name="address1"
                error={!!touched.frecuency && !!errors.frecuency}
                helperText={touched.frecuency && errors.frecuency}
                sx={{ gridColumn: "span 4" }}
              />             
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Edit Obat
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  rekamMedis: yup.string().required("required"),
  nameobat: yup.string().required("required"),
  dosage: yup.string().required("required"),
  frecuency: yup.string().required("required"),
});

const initialValues = {
  firstName: "",
  rekamMedis: "",
  nameobat: "",
  dosage: "",
  frecuency: "",
};

export default EditObat;
