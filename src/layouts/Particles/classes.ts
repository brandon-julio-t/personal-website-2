import {
  calculateOpacity,
  pythagoras,
  randomColor,
  randomRadius,
  randomSpeed,
  randomX,
  randomY,
  toRGBAString,
} from "./utils"

import { LINKED_LINE_RANGE, canvas, ctx } from "./constants"

interface RGB {
  r: number
  g: number
  b: number
}

export class Color {
  hex: string

  constructor(hex: string) {
    this.hex = hex
  }

  /**
   * https://stackoverflow.com/a/5624139/10644595
   */
  getRGB(): RGB {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex)
    const base16 = 16
    return result
      ? {
          r: parseInt(result[1], base16),
          g: parseInt(result[2], base16),
          b: parseInt(result[3], base16),
        }
      : null
  }
}

export class Circle {
  x: number
  y: number

  radius: number
  color: Color

  horizontalSpeed: number
  verticalSpeed: number

  left: boolean
  up: boolean

  constructor() {
    this.x = randomX()
    this.y = randomY()

    this.radius = randomRadius()
    this.color = randomColor()

    this.horizontalSpeed = randomSpeed()
    this.verticalSpeed = randomSpeed()

    this.left = Math.random() >= 0.5
    this.up = Math.random() >= 0.5
  }

  accelerate() {
    this.x += this.left ? -this.horizontalSpeed : this.horizontalSpeed
    this.y += this.up ? -this.verticalSpeed : this.verticalSpeed
  }

  drawCircle() {
    ctx.fillStyle = this.color.hex
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.fill()
  }

  isOutOfView = (): boolean =>
    this.x <= 0 ||
    this.x >= window.innerWidth ||
    this.y <= 0 ||
    this.y >= window.innerHeight

  linkTo(another: Circle) {
    const x1 = this.x
    const y1 = this.y

    const x2 = another.x
    const y2 = another.y

    const a = Math.abs(x1 - x2)
    const b = Math.abs(y1 - y2)
    const distance = pythagoras(a, b)

    if (distance <= LINKED_LINE_RANGE) {
      const color1 = this.color.getRGB()
      const color2 = another.color.getRGB()

      const opacity = calculateOpacity(distance)
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
      gradient.addColorStop(
        0,
        toRGBAString(color1.r, color1.g, color1.b, opacity)
      )
      gradient.addColorStop(
        1,
        toRGBAString(color2.r, color2.g, color2.b, opacity)
      )

      ctx.strokeStyle = gradient
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }
  }

  linkToCoordinate(x: number, y: number) {
    if (x > -1 && y > -1) {
      const a = Math.abs(this.x - x)
      const b = Math.abs(this.y - y)
      const distance = pythagoras(a, b)

      if (distance <= LINKED_LINE_RANGE) {
        const { r, g, b } = this.color.getRGB()
        const opacity = calculateOpacity(distance)

        ctx.strokeStyle = toRGBAString(r, g, b, opacity)
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(x, y)
        ctx.stroke()
      }
    }
  }

  wrapCircle() {
    if (this.left && this.x <= 0) this.x = canvas.width
    if (!this.left && this.x >= canvas.width) this.x = 0

    if (this.up && this.y <= 0) this.y = canvas.height
    if (!this.up && this.y >= canvas.height) this.y = 0
  }
}
