import React from "react";
import { Switch, Route } from "react-router-dom";
import PurchasePage from "../pages/purchase";

export default function Routes() {
  return (
    // Switch: componente que recebe vários componentes Route e dado o caminho que for passado na URL um deles é renderizado.
    // Route: é uma rota do nosso sistema e devemos passar pra ele qual vai ser o caminho da URL por meio de um atributo path="" 
    // e dado esse path, um outro atributo com o nosso componente que for importado chamado component=""
    // o path="/" pode ser combinado com um atributo extra chamado exact para garantir que se a rota tiver somente "/" ele vai ser renderizado 
    // e evitar conflito com as outras rotas que possuam o valor passado no path.
    <Switch>
      <Route exact path="/" component={PurchasePage} />
    </Switch>
  );
}
