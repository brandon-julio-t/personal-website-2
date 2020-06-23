import React from "react"

export default () => (
  <textarea
    className="
      bg-transparent
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
      "
    name="Message"
    placeholder="Message (Required)"
    required
    rows={10}
  />
)
