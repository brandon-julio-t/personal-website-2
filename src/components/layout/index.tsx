import React from "react"
import loadable from "@loadable/component"

const Footer = loadable(() => import("./footer"))
const SEO = loadable(() => import("./seo"))
const Navbar = loadable(() => import("./navbar"))

interface LayoutProps {
  title: string
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <SEO title={props.title} />

      <Navbar />

      <header>
        <h1 className="font-hairline tracking-wide text-6xl text-center my-5">
          {props.title}
        </h1>
      </header>

      <main className="container mx-auto px-4">
        <hr className="my-4" />
        {props.children}
        <hr className="my-4" />
      </main>

      <Footer />
    </>
  )
}
