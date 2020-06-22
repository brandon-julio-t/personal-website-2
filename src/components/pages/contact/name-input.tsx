import React, { useContext } from "react"

import ThemeContext from "../../../context/theme"

export default () => {
  const isLight = useContext(ThemeContext).theme === "light"

  return (
    <input
      autoCapitalize="on"
      autoComplete="name"
      autoFocus={true}
      name="Name"
      placeholder="Name (Optional)"
      className={`
        ${isLight ? "bg-white" : "bg-black"}
        border
        border-gray-500
        duration-300
        focus:border-current
        focus:shadow-lg
        hover:shadow-md
        outline-none
        p-4
        rounded
        shadow
        transition-border
        transition-shadow
      `}
      type="text"
    />
  )
}
