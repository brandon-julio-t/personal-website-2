import { COLORS, LINKED_LINE_RANGE, MAX_RADIUS } from "./constants"
import { Color } from "./classes"

const pythagoras = (a: number, b: number): number => Math.sqrt(a ** 2 + b ** 2)

const randomRadius = (): number => Math.floor(Math.random() * MAX_RADIUS) + 1
const randomSpeed = (): number => Math.random()

const randomX = (): number => Math.random() * window.innerWidth + 1
const randomY = (): number => Math.random() * window.innerHeight + 1

const randomColor = (): Color => {
  const idx = Math.floor(Math.random() * COLORS.length)
  return new Color(COLORS[idx])
}

const calculateOpacity = (distance: number): string =>
  Number(Math.abs(distance - LINKED_LINE_RANGE) / 100).toPrecision(1)

const toRGBAString = (
  r: number,
  g: number,
  b: number,
  opacity: string
): string => `rgba(${r}, ${g}, ${b}, ${opacity})`

export {
  calculateOpacity,
  pythagoras,
  randomRadius,
  randomSpeed,
  randomX,
  randomY,
  randomColor,
  toRGBAString,
}
