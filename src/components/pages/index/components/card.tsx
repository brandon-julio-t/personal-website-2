import "twin.macro"

interface CardProps {}

export default (props: CardProps) => (
  <div
    tw="border transition duration-300 shadow hover:shadow-md p-5"
    {...props}
  />
)
