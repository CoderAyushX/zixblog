import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Blog, Contact, Blogpost, About } from "./pages/index";
import { Navbar } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/:blogpost" element={<Blogpost/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
