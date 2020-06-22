import React, { useEffect } from "react"

import Layout from "../layouts"

export default () => {
  useEffect(() => {
    document.querySelector("iframe").scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <Layout title="Curriculum Vitae">
      <iframe
        frameBorder="0"
        scrolling="no"
        src="https://onedrive.live.com/embed?cid=D5A3B6C8950A0143&resid=D5A3B6C8950A0143%219596&authkey=AMRg4MEOP4uG04M&em=2"
        title="curriculum-vitae"
        className="bg-gray-300 rounded w-full h-screen hover:shadow transition duration-300"
      />
    </Layout>
  )
}
