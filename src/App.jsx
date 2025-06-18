import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlanetProvider } from "./context/PlanetContext";
import Layout from "./Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* :nomePlaneta? → opcional, cobre "/" e "/mars", "/venus" etc */}
        <Route
          path="/:nomePlaneta?"
          element={
            <PlanetProvider>
              <Layout />
            </PlanetProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
