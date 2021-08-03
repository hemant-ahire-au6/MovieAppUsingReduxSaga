import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Componets/HomePage/HomePage";
import MovieDetails from "../Componets/MovieDetails/MovieDetails";

const ROUTES = [
  { path: "/", 
  key: "ROOT", 
  exact: true, 
  component: () =><HomePage/> },
  {
    path: "/movie/:id",
    key: "MOVIE",
    component: RenderRoutes,
    routes: [
      {
        path: "/movie/:id",
        key: "MOVIE_ROOT",
        exact: true,
        component: () => <MovieDetails/>,
      },
      {
        path: "/movie/:id/reviews",
        key: "APP_PAGE",
        exact: true,
        component: () => <h1>Detailed review Page</h1>,
      },
      {
        path: "/movie/:id/cast",
        key: "APP_PAGE",
        exact: true,
        component: () => <h1>Detailed cast Page</h1>,
      }
    ],
  },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
  }

  export function RenderRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    );
  }