import React, { useContext, useLayoutEffect } from "react"

import PageContext from "../context/page"

import Button from "../components/common/button"

export default () => {
  const { theme, setTitle } = useContext(PageContext)
  const isLight = theme === "light"

  useLayoutEffect(() => {
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
