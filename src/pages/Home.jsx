import React, { useContext } from "react";
import Layout from "../components/Layout";
import myContext from "../context/data/myContext";
import HeroSection from "../components/HeroSection";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import Track from "../components/Track";
import Testimonial from "../components/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Layout>
                <HeroSection />
                <Filter />
                <ProductCard />
                <div className="flex justify-center -mt-10 mb-4">
                    <Link to={"/allproducts"}>
                        <button className=" bg-gray-300 px-5 py-2 rounded-xl">
                            See more
                        </button>
                    </Link>
                </div>
                <Track />
                <Testimonial />
            </Layout>
        </div>
    );
};

export default Home;
