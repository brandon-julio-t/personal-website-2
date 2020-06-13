import React from "react"
import loadable from "@loadable/component"

const Layout = loadable(() => import("../components/layout"))
const Button = loadable(() => import("../components/common/button"))

export default () => (
  <Layout title="Contact">
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

      <Button type="submit" isIcon={false}>Submit</Button>
    </form>
  </Layout>
)
