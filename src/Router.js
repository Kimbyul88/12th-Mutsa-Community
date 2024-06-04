import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import WritePost from "./pages/WritePost";
import Login from "./pages/Login";
import Header from "./components/common/Header";
import DdaySection from "./components/common/DdaySection";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <DdaySection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writePost" element={<WritePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:postid" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
