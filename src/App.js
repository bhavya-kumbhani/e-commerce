import Header from "./components/Layout/Header";
import router from "./routes/routeWrappers";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Layout/Footer";
function App() {
  return (
    <div className="h-full">
      <Toaster />
      <Header />
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
