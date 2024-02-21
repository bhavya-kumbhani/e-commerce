import Header from "./components/Layout/Header";
import router from "./routes/routeWrappers";
import { RouterProvider } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="h-full">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;