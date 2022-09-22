import React from 'react'

function NotFound() {
  return (
    <>
      <h1>NotFound PAGE</h1>
      <h3>Para acceder a paginas about y contact, debe estar logeado</h3>
      <br />
      <h3>Para acceder a pagina de reportes, debe estar logeado y tener el permiso de "reportes"</h3>
      <br />
      <h3>Para acceder a pagina de admin, debe estar logeado y tener el rol de "admin"</h3>
      <br />
      <br />
    </>
  )
}

export default NotFound