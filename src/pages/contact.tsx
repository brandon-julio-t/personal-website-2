import React, { useContext, useEffect } from "react"
import loadable from "@loadable/component"

import PageContext from "../context/page"
import ThemeContext from "../context/theme"

const Button = loadable(() => import("../components/common/button"))

export default () => {
  const { setTitle } = useContext(PageContext)
  const { mode } = useContext(ThemeContext)
  const isLight = mode === "light"

  useEffect(() => {
    setTitle("Contact")
  }, [])

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="flex flex-col mx-auto max-w-lg"
    >
      <label style={{ display: "none" }}>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>

      <input type="hidden" name="form-name" value="contact" />

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

      <textarea
        name="Message"
        placeholder="Message (Required)"
        rows={10}
        className={`border rounded shadow hover:shadow-md focus:shadow-lg focus:border-gray-500 transition duration-300 outline-none p-4 my-5 ${
          isLight ? "bg-white" : "bg-black"
        }`}
        required
      />

      <Button type="submit" isIcon={false}>
        Submit
      </Button>
    </form>
  )
}
