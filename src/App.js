// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import Header from "./Header";
// import Main from "./Main";
// import Navbar from "./Navbar";
// import Course from "./Course";
// import Footer from "./footer/Footer";
// // import Basics from "./Basics";
// import { Button, Basics } from "./Basics";
// import ConditionalRendering from "./ConditionalRendering";
// import CondRend2 from "./CondRend2";
// import EventHandling1 from "./EventHandling/EventHandling1";
// import EventHandling2 from "./EventHandling/EventHandling2";
// import Parent from "./ReactProps/Parent";
// import Child1 from "./ReactProps/Child1";
// import StateChange1 from "./useState/StateChange1";
// import StateChange2 from "./useState/StateChange2";
// import ToggleTheme from "./useState/ToggleTheme";
// import RoutingDemo from "./Routing/RoutingDemo";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Form from "./pages/Form";
import Demo from "./pages/Demo";
import PageNotFound from "./pages/PageNotFound";
import BmiCalculator from "./useState/BmiCalculator";
function App() {
  return (
    // <h1>Hello Guhan</h1>
    // <React.Fragment>
    //   {/* <Parent /> */}
    //   {/* <Child1/> */}
    //   {/* <Child2></Child2> */}
    //   {/* <EventHandling2 /> */}
    //   {/* <CondRend2></CondRend2> */}
    //   {/* <ConditionalRendering/> */}
    //   {/* <Basics /> */}
    //   {/* <Header />
    //   <Navbar></Navbar>
    //   <Main></Main>
    //   <Course></Course>
    //   <Footer /> */}
    //   {/* <Button></Button> */}
    //   {/* <StateChange1/> */}
    //   {/* <Stat eChange2 /> */}
    //   {/* <ToggleTheme/> */}

    // </React.Fragment>
    <>
      {/* <NavBar /> */}
      {/* <BrowserRouter> */}
        {/* <NavBar /> */}
        {/* <Form/> */}
        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}>
            <Route path="form" element={<Form />}>
            <Route path="demo" element={<Demo/>}></Route>
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes> */}
      {/* </BrowserRouter> */}
      <BmiCalculator/>
    </>
  );
}

export default App;
