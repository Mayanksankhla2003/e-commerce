import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import MyState from "./context/data/myState";

import Home from "./pages/Home";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Dashboard from "./pages/admin/Dashboard";
import NoPage from "./pages/NoPage";
import Login from "./pages/Registration/Login";
import Signup from "./pages/Registration/Signup";
import ProductInfo from "./pages/ProductInfo";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import AddProduct from "./pages/admin/pages/AddProduct";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Allproducts from "./pages/AllProducts";

function App() {
    return (
        <MyState>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/order"
                        element={
                            <ProtectedRoute>
                                <Order />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRouteForAdmin>
                                <Dashboard />
                            </ProtectedRouteForAdmin>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/add-product"
                        element={
                            <ProtectedRouteForAdmin>
                                <AddProduct />
                            </ProtectedRouteForAdmin>
                        }
                    />
                    <Route
                        path="/update-product"
                        element={
                            <ProtectedRouteForAdmin>
                                <UpdateProduct />
                            </ProtectedRouteForAdmin>
                        }
                    />
                    <Route path="/productInfo/:id" element={<ProductInfo />} />
                    <Route path="/*" element={<NoPage />} />
                    <Route path="/allproducts" element={<Allproducts />} />
                </Routes>
                <ToastContainer />
            </Router>
        </MyState>
    );
}

export default App;

export const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("user");
    if (user) {
        return children;
    } else {
        return <Navigate to={"/login"} />;
    }
};

const ProtectedRouteForAdmin = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem("user"));
    if (admin.user.email === "sankhlamayank2003@gmail.com") {
        return children;
    } else {
        <Navigate to={"/login"} />;
    }
};
