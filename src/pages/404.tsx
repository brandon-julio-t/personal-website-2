import React from "react"

import Button from "../components/common/button"
import Layout from "../layouts"

export default () => (
  <Layout title="404 Not Found">
    <div className="flex flex-row justify-center">
      <Button className="text-4xl" isIcon={false} to="/">
        Return to Home
      </Button>
    </div>
  </Layout>
)
