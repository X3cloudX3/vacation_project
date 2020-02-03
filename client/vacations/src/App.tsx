import React from 'react';
import { AppRoutes } from "./components/appRouter/appRouter"
import { routes } from "./components/appRouter/route.config"
import ButtonAppBar from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ButtonAppBar />
        <Switch>
          <AppRoutes routes={routes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
