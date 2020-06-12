import "twin.macro"

interface H3Props {
  children: React.ReactNode
}

export default (props: H3Props) => (
  <h3 tw="text-2xl" {...props}>
    {props.children}
  </h3>
)
