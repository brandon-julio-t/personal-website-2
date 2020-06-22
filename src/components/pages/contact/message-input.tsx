import React, { useContext } from "react"

import ThemeContext from "../../../context/theme"

export default () => {
  const isLight = useContext(ThemeContext).theme === "light"

  return (
    <textarea
      name="Message"
      placeholder="Message (Required)"
      rows={10}
      className={`
        ${isLight ? "bg-white" : "bg-black"}
        border
        border-gray-500
        duration-300
        focus:border-current
        focus:shadow-lg
        hover:shadow-md
        my-5
        outline-none
        p-4
        rounded
        shadow
        transition-border
        transition-shadow
      `}
      required
    />
  )
}
