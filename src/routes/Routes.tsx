import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home";
import AiModal from "@/components/AiModal";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/aimodal",
            element: <AiModal/>
          }
        ]
      },
    
    ]
  }
]);

export default routes;
