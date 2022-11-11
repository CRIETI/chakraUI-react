import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { SidebarDrawerProvider } from "./components/contexts/SidebarDrawerContext";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SidebarDrawerProvider>
        <ToastContainer />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
