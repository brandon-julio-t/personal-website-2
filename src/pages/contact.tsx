import React, { useContext, useEffect } from "react"
import loadable from "@loadable/component"

import PageContext from "../context/page"

const Button = loadable(() => import("../components/common/button"))

export default () => {
  const { setTitle } = useContext(PageContext)

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
        className="border rounded shadow hover:shadow-md focus:shadow-lg focus:border-gray-500 transition duration-300 outline-none p-4"
        type="text"
      />

      <textarea
        name="Message"
        placeholder="Message (Required)"
        rows={10}
        className="border rounded shadow hover:shadow-md focus:shadow-lg focus:border-gray-500 transition duration-300 outline-none p-4 my-5"
        required
      />

      <Button type="submit" isIcon={false}>
        Submit
      </Button>
    </form>
  )
}
