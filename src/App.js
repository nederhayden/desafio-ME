import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

export default function App() {
  return (
    // BrowserRouter: componente responsável por informar pra aplicação que a partir de onde ele é chamado teremos um Roteamento de Componentes
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
