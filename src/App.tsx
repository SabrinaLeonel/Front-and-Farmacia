import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import NavBar from "./components/navbar/NavBar"
import Home from "./pages/home/Home"
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import FormularioCategoria from "./components/categoria/formCategoria/FormCategoria"
import ListarCategorias from "./components/categoria/listarCategoria/ListarCategoria"
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
    <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
    <BrowserRouter>
      <NavBar />
      <div className="min-h-[80vh] bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormularioCategoria />} 
          />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} 
          />  
        </Routes>
      </div>
      
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App