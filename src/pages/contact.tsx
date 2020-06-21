import React from "react"

import Button from "../components/common/button"
import Layout from "../layouts"
import NameInput from "../components/pages/contact/name-input"
import MessageInput from "../components/pages/contact/message-input"

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

      <NameInput />

      <MessageInput />

      <Button type="submit" isIcon={false}>
        Submit
      </Button>
    </form>
  </Layout>
)
