import React from "react"

interface IndexSectionProps {
  children: React.ReactNode,
  title: string
}

export default (props: IndexSectionProps) => (
  <section className="my-5">
    <h2 className="text-center text-4xl my-4">
      {props.title}
    </h2>

    {props.children}
  </section>
)
