import  React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import TambahDataPasien from "./scenes/tambahdatapasien";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import DataPasien from "./scenes/DataPasien/datapasien";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import DataObat from "./scenes/resepdokter/dataobat";
import EditPasien from "./scenes/Edit/editpasien";
import EditObat from "./scenes/resepdokter/editobat";
import TambahResep from "./scenes/resepdokter/tambahresep";
import EditInvoice from "./scenes/invoices/editinvoice";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/team" element={<Team />} />
              <Route path="/tambahdatapasien" element={<TambahDataPasien />} />
              <Route path="/datapasien" element={<DataPasien />} />
              <Route path="/editpasien" element={<EditPasien />} />
              <Route path="/resepdokter" element={<DataObat />} />
              <Route path="/editinvoice" element={<EditInvoice />} />
              <Route path="/editobat" element={<EditObat />} />
              <Route path="/tambahresep" element={<TambahResep />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
