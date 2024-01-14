import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import MainPage from "./components/page/MainPage";
import AppContextProvider from "./context/appContext";
import PhotoPage from "./components/page/PhotoPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<Navigate to="/photo" />} />
              <Route path="/photo" element={<MainPage />} />
              <Route path="/pic" element={<PhotoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
