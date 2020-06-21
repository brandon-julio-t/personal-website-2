import React, { useContext } from "react"

import ThemeContext from "../../../context/theme"

export default () => {
  const isLight = useContext(ThemeContext).theme === "light"

  return (
    <input
      autoCapitalize="words"
      autoComplete="name"
      autoFocus={true}
      name="Name"
      placeholder="Name (Optional)"
      className={`border rounded shadow hover:shadow-md focus:shadow-lg focus:border-gray-500 transition duration-300 outline-none p-4 ${
        isLight ? "bg-white" : "bg-black"
      }`}
      type="text"
    />
  )
}
