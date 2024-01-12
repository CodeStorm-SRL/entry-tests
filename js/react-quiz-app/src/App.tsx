import { FC } from "react";
import AppLayout from "./components/layout/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/page/MainPage";
import EndPage from "./components/page/EndPage";
import QuizPage from "./components/page/QuizPage";
import CustomToaster from "./components/molecules/CustomToaster";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/end" element={<EndPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <CustomToaster />
    </>
  );
};

export default App;
