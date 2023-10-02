import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import RecentVideo from "../pages/RecentVideo";
import VideoPage from "../pages/VideoPage";
import LayoutPage from "../pages/LayoutPage";
import ErrorPageDisplay from "../pages/ErrorPageDisplay";


export const LAYOUT = "/";
export const ERROR = "*";
export const HOME = "/";
export const LOGIN = "/login";
export const RECENT = "/files";
export const VIDEOPAGE = "/files/:title";

export const router = createBrowserRouter([
  {
    path: LAYOUT,
    element: <LayoutPage />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: RECENT,
        element: <RecentVideo />,
      },
      {
        path: VIDEOPAGE,
        element: <VideoPage />,
      },
    ]
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: ERROR,
    element: <ErrorPageDisplay />,
  },
]);