import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"

import PageContext from "../context/page"

export default () => {
   useContext(PageContext).setTitle("404 Not Found")

  return (
    <div className="flex flex-row justify-center">
      <Link
        to="/"
        className="text-4xl border border-gray-500 hover:border-black transition duration-300 rounded px-5 py-3"
      >
        Return to Home
      </Link>
    </div>
  )
}
