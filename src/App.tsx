import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
