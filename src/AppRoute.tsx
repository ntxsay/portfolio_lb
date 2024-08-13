import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import SlideshowPage from "./pages/SlideshowPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Layout from "./layouts/Layout.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/project/slide-show/:id" element={<SlideshowPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
};

export default AppRoutes;