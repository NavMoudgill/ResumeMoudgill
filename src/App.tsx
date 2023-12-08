import ErrorBoundaryApp from "./errorHandling/ErrorBoundary";
import SomeErrorPage from "./errorHandling/SomeError";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <ErrorBoundaryApp fallback={<SomeErrorPage />}>
      <MainPage />
    </ErrorBoundaryApp>
  );
};

export default App;
