import ErrorBoundaryApp from "./errorHandling/ErrorBoundary";
import SomeErrorPage from "./errorHandling/SomeError";
import MainPage from "./components/MainPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ErrorBoundaryApp fallback={<SomeErrorPage />}>
      <>
        <ToastContainer />
        <MainPage />
      </>
    </ErrorBoundaryApp>
  );
};

export default App;
