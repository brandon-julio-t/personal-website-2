import "twin.macro"

import React from "react"

import Layout from "../components/layout"

import {
  Databases,
  Frameworks,
  Languages,
  Others,
} from "../components/pages/skills"

export default () => (
  <Layout title="Technical Skills">
    <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Languages />
      <Frameworks />
      <Databases />
      <Others />
    </div>
  </Layout>
)
