import { ROUTE_CONSTANTS } from "../utils";

import Home from '../containers/homepage';

const routes = [
  {
    path: ROUTE_CONSTANTS.BASE,
    exact: false,
    element: <Home/>,
    view: "Base",
  },
//   {
//     path: ROUTE_CONSTANTS.ANY,
//     exact: false,
//     component: Error,
//     view: "*",
//   },
];
export default routes;
