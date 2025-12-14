// import logo from './logo.svg';
// import SearchData from "./api_fetch/SearchData";
import "./App.css";
import { React, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./lazy loading/pages/NavBar";
function App() {
  const Home = lazy(() => import("./lazy loading/pages/Home"));
  const About = lazy(() => import("./lazy loading/pages/About"));
  const PageNotFound = lazy(() => import("./lazy loading/pages/PageNotFound"));
  return (
    <>
      <h1>Lazy Loading</h1>
      <NavBar />
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
