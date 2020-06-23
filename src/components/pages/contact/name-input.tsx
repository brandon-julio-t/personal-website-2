import React from "react"

export default () => (
  <input
    autoCapitalize="on"
    autoComplete="name"
    autoFocus={true}
    className="
      bg-transparent
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
      "
    name="Name"
    placeholder="Name (Optional)"
    type="text"
  />
)
