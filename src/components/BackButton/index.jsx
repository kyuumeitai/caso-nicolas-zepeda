import React from 'react'
import { Link } from 'gatsby'
import Flecha from './Flecha'
const BackButton = () => (
  <div>
    <Link
      to="/"
      className="z-10 flex flex-col items-center justify-end mb-6 -mt-20">
      <Flecha />
      <span>Volver</span>
    </Link>
  </div>
)

export default BackButton
