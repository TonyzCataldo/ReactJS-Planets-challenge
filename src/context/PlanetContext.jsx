import { createContext, useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import planetas from "../data/planetas.json";

const PlanetContext = createContext();
export const usePlanet = () => useContext(PlanetContext);

export const PlanetProvider = ({ children }) => {
  const location = useLocation();

  const rawPath = location.pathname.replace("/", "").toLowerCase();
  const path = rawPath === "" ? "earth" : rawPath;

  const planeta = planetas.find((p) => p.name.toLowerCase() === path);

  // ✅ redireciona apenas se o planeta não for encontrado E não estiver na home
  if (!planeta) return <Navigate to="/" replace />;

  return (
    <PlanetContext.Provider value={{ planeta }}>
      {children}
    </PlanetContext.Provider>
  );
};
