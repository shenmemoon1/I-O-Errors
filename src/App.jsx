import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, FrontEnd, Flutter, DotNet, Login, SignUp } from "./pages";
import { NavBar } from "./components";
function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <div className="relative top-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/frontend" element={<FrontEnd />} />
            <Route path="/flutter" element={<Flutter />} />
            <Route path="/dotnet" element={<DotNet />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
