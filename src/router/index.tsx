import { Navigate } from "react-router-dom";
import Home from "@/pages/Home.tsx";
import Activity from "@/pages/Activity";
import Competition from "@/pages/Competition";
import Research from "@/pages/Research";
import Team from "@/pages/Team";
import Honor from "@/pages/Honor";
import Index from "@/pages/Index";
const routes = [
  {
    path: "/index",
    element: <Index />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "activity",
        element: <Activity />,
      },
      {
        path: "competition",
        element: <Competition />,
      },
      {
        path: "research",
        element: <Research />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "honor",
        element: <Honor />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/index/home" />,
  },
];

export default routes;
