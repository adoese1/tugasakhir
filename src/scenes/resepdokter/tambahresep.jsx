import React from "react";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

const TambahResep = () => {
  const initialValues = {
    patientName: "",
    patientId: "",
    date: new Date().toISOString().split("T")[0],
    nameobat: "",
    dosage: "",
    setelah: "",
  };

  const validationSchema = yup.object().shape({
    patientName: yup.string().required("Nama pasien harus diisi"),
    patientId: yup.string().required("ID pasien harus diisi"),
    date: yup.date().required("Tanggal harus diisi"),
    nameobat: yup.string().required("Nama obat harus diisi"),
    dosage: yup.string().required("Dosis harus diisi"),
    setelah: yup.string().required("Setelah/Sebelum Makan harus diisi"),
   })

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Data yang disubmit:", values);
    setSubmitting(false);
  };

  return (
    <Box m="20px">
      <Header title="Tambah Resep" subtitle="Formulir Resep Dokter" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="grid" gap="20px">
              <TextField
                fullWidth
                variant="filled"
                label="Nama Pasien"
                name="patientName"
                value={values.patientName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.patientName && !!errors.patientName}
                helperText={touched.patientName && errors.patientName}
              />
              <TextField
                fullWidth
                variant="filled"
                label="ID Pasien"
                name="patientId"
                value={values.patientId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.patientId && !!errors.patientId}
                helperText={touched.patientId && errors.patientId}
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
              <TextField
                fullWidth
                variant="filled"
                label="Nama Obat"
                name="nameobat"
                value={values.nameobat}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.nameobat && !!errors.nameobat}
                helperText={touched.nameobat && errors.nameobat}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Dosis"
                name="dosage"
                value={values.dosage}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.dosage && !!errors.dosage}
                helperText={touched.dosage && errors.dosage}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Setelah/Sebelum Makan"
                name="setelah"
                value={values.setelah}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.setelah && !!errors.setelah}
                helperText={touched.setelah && errors.setelah}
              />
              <Box display="flex" justifyContent="flex-end" mt="20px">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Simpan Resep
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default TambahResep;