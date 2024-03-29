import React from "react";
import './App.css';
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";

const App = () => (
  <AuthProvider>
    <RoutesApp />
  </AuthProvider>
);

export default App;
