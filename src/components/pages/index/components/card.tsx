import "twin.macro"

interface CardProps {}

export default (props: CardProps) => (
  <div
    tw="border transition duration-300 shadow-md hover:shadow-lg p-5"
    {...props}
  />
)
