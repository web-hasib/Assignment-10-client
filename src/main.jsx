import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ThemeProvider } from "./Theme/ThemeProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <ThemeProvider>
            <QueryClientProvider client={queryClient}>
     
        <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>

      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
