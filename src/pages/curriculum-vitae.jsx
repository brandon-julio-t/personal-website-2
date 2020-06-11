import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

const Layout = loadable(() => import("../components/layout"))

export default () => (
  <Layout title="Curriculum Vitae">
    <iframe
      frameBorder="0"
      scrolling="no"
      src="https://onedrive.live.com/embed?cid=D5A3B6C8950A0143&resid=D5A3B6C8950A0143%219596&authkey=AMRg4MEOP4uG04M&em=2"
      title="curriculum-vitae"
      tw="bg-gray-300 w-full h-screen hover:shadow transition duration-300"
    />
  </Layout>
)
