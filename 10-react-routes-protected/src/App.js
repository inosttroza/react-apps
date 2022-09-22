import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Reporte1 from './pages/Reporte1';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import { ProtectedRoute } from "./helpers/ProtectedRoute";

function App() {

  const [user, setUser] = useState(null);

  const login = () =>
    setUser(
      {
        id: 1,
        name: "pablo",
        roles: ["admin"],
        permisos: ["reportes"]
      },
      // {
      //   id: 2,
      //   name: "andres",
      //   roles: ["operador"],
      //   permisos: ["reportes"]
      // },
      // {
      //   id: 3,
      //   name: "Inostroza",
      //   roles: ["operador"],
      //   permisos: ["visita"]
      // },
    );

  const logout = () => {
    setUser(null);
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        {
          user ?
            (<Button variant="danger" onClick={logout}>Logout</Button>)
            :
            (<Button variant="success" onClick={login}>Login</Button>)
        }
        <br />
        <br />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route element={<ProtectedRoute isAllowed={!!user} msje={"about-contact"}/>}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route element={<ProtectedRoute isAllowed={!!user && user.permisos.includes("reportes")} msje={"reporte"}/>}>
            <Route path="/reporte1" element={<Reporte1 />} />
          </Route>

          <Route element={<ProtectedRoute isAllowed={!!user && user.roles.includes("admin")}  msje={"admin"}/>}>
            <Route path="/admin" element={<Admin />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>


        {
          user ?
            (<Badge bg="success">{JSON.stringify(user)}</Badge>)
            :
            (<Badge bg="danger">Sin iniciar sesión</Badge>)
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
