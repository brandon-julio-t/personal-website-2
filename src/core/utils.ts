import { COLORS, LINKED_LINE_RANGE, MAX_RADIUS } from "./constants"
import Color from "./color"

const pythagoras = (a: number, b: number): number => Math.sqrt(a ** 2 + b ** 2)

const randomRadius = (): number => Math.floor(Math.random() * MAX_RADIUS) + 1
const randomSpeed = (): number => Math.random() // Don't know why this works well ¯\_(ツ)_/¯

const randomX = (): number => Math.random() * window.innerWidth
const randomY = (): number => Math.random() * window.innerHeight

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
