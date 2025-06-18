import { HashRouter, Routes, Route } from "react-router-dom";
import { PlanetProvider } from "./context/PlanetContext";
import Layout from "./Layout";

const App = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  );
};

export default App;
