import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Ambientes from "../pages/Ambientes";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import AmbientesDetalhe from "../pages/AmbientesDetalhe";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/ambientes" exact component={Ambientes} />
      <Route path="/ambientes-detalhe" exact component={AmbientesDetalhe} />
      <Route path="/sobre" exact component={Sobre} />
      <Route path="/contato" exact component={Contato} />
    </Switch>
  );
}
