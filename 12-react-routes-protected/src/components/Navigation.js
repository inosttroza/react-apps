import React from 'react'
import {  Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/home">HOME (publico)</Link>
      </li>
      <li>
        <Link to="/about">ABOUT (solo usuarios logeados)</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT (solo usuarios logeados)</Link>
      </li>
      <li>
        <Link to="/reporte1">REPORTE (solo usuarios logeados y que tengan permiso "reportes")</Link>
      </li>
      <li>
        <Link to="/admin">ADMIN(solo usuarios logeados y con rol de admin)</Link>
      </li>     
    </ul>
  </nav>
  )
}

export default Navigation