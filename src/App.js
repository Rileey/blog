// import './components/blogVideos/blogvideos.modules.css'
import { useState, useEffect } from "react";
import LandingPage from "./pages/landingPage.js";
import SinglePost from "./pages/singlePost.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    const res = await axios.get(
      `https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/`
    );
    setPost(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage post={post} />} />
        <Route exact path="/post/:id" element={<SinglePost post={post} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
