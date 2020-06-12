import "twin.macro"

import loadable from "@loadable/component"

const Layout = loadable(() => import("../components/layout"))
const Button = loadable(() => import("../components/common/button"))

export default () => (
  <Layout title="Contact">
    <form
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      tw="flex flex-col mx-auto max-w-lg"
    >
      <label style={{ display: "none" }}>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>

      <input type="hidden" name="form-name" value="contact" />

      <input
        type="text"
        name="Name"
        placeholder="Name (Optional)"
        tw="border rounded shadow hover:shadow-md focus:shadow-lg focus:border-gray-500 transition duration-300 outline-none p-4"
      />

      <textarea
        name="Message"
        placeholder="Message (Required)"
        rows={10}
        tw="border rounded shadow hover:shadow-md focus:shadow-lg focus:border-gray-500 transition duration-300 outline-none p-4 my-5"
        required
      />

      <Button type="submit">Submit</Button>
    </form>
  </Layout>
)
