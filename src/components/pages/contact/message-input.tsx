import React, { useContext } from "react"

import ThemeContext from "../../../context/theme"

export default () => {
  const isLight = useContext(ThemeContext).theme === "light"

  return (
    <textarea
      name="Message"
      placeholder="Message (Required)"
      rows={10}
      className={`border rounded shadow hover:shadow-md focus:shadow-lg focus:border-gray-500 transition duration-300 outline-none p-4 my-5 ${
        isLight ? "bg-white" : "bg-black"
      }`}
      required
    />
  )
}
