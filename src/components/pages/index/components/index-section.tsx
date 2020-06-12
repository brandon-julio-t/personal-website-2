import "twin.macro"

interface IndexSectionProps {
  children: React.ReactNode,
  title: string
}

export default (props: IndexSectionProps) => (
  <section tw="my-5">
    <h2 tw="text-center text-4xl my-4">
      {props.title}
    </h2>

    {props.children}
  </section>
)
