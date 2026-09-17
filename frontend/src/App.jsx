import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoutePage from "./pages/RoutePage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost5Reasons from "./pages/BlogPost5Reasons";
import BlogPostKolhapurGoa from "./pages/BlogPostKolhapurGoa";
import BlogPostPuneMumbai from "./pages/BlogPostPuneMumbai";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/5-reasons-professional-cabs" element={<BlogPost5Reasons />} />
        <Route path="/blog/kolhapur-to-goa-road-trip" element={<BlogPostKolhapurGoa />} />
        <Route path="/blog/pune-to-mumbai-business-travel" element={<BlogPostPuneMumbai />} />
        <Route path="/:slug" element={<RoutePage />} />
      </Routes>
    </BrowserRouter>
  );
}
