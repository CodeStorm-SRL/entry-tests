import { FC, Suspense, lazy } from "react";
import AppLayout from "./components/layout/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomToaster from "./components/molecules/CustomToaster";
import ResultPage from "./components/page/ResultPage";
import { Loader } from "./components/molecules/Loader";

const MainPage = lazy(() => import("./components/page/MainPage"));
const EndPage = lazy(() => import("./components/page/EndPage"));
const QuizPage = lazy(() => import("./components/page/QuizPage"));

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/end" element={<EndPage />} />
              <Route path="/result" element={<ResultPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>

      <CustomToaster />
    </>
  );
};

export default App;
