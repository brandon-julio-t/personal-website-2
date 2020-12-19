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
import { LINKED_LINE_RANGE } from "./constants"
import Color from "./color"

export default class Circle {
  private readonly radius: number
  private readonly horizontalSpeed: number
  private readonly verticalSpeed: number
  private readonly moveLeft: boolean
  private readonly moveUp: boolean

  private x: number
  private y: number
  private color: Color

  constructor(private readonly ctx: OffscreenCanvasRenderingContext2D) {
    this.x = randomX()
    this.y = randomY()

    this.radius = randomRadius()
    this.color = randomColor()

    this.horizontalSpeed = randomSpeed()
    this.verticalSpeed = randomSpeed()

    this.moveLeft = Math.random() >= 0.5
    this.moveUp = Math.random() >= 0.5
  }

  public get isOutOfView(): boolean {
    return (
      this.x <= 0 ||
      this.x >= window.innerWidth ||
      this.y <= 0 ||
      this.y >= window.innerHeight
    )
  }

  public accelerate() {
    this.x += this.moveLeft ? -this.horizontalSpeed : this.horizontalSpeed
    this.y += this.moveUp ? -this.verticalSpeed : this.verticalSpeed
  }

  public drawCircle() {
    this.ctx.fillStyle = this.color.hex
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    this.ctx.fill()
  }

  public linkTo(another: Circle) {
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
      const gradient = this.ctx.createLinearGradient(x1, y1, x2, y2)
      gradient.addColorStop(
        0,
        toRGBAString(color1.r, color1.g, color1.b, opacity)
      )
      gradient.addColorStop(
        1,
        toRGBAString(color2.r, color2.g, color2.b, opacity)
      )

      this.ctx.strokeStyle = gradient
      this.ctx.beginPath()
      this.ctx.moveTo(x1, y1)
      this.ctx.lineTo(x2, y2)
      this.ctx.stroke()
    }
  }

  public linkToCoordinate(x: number, y: number) {
    if (x > -1 && y > -1) {
      const a = Math.abs(this.x - x)
      const b = Math.abs(this.y - y)
      const distance = pythagoras(a, b)

      if (distance <= LINKED_LINE_RANGE) {
        const { r, g, b } = this.color.getRGB()
        const opacity = calculateOpacity(distance)

        this.ctx.strokeStyle = toRGBAString(r, g, b, opacity)
        this.ctx.beginPath()
        this.ctx.moveTo(this.x, this.y)
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
      }
    }
  }

  public wrapCircle() {
    const outOfLeftBound = this.moveLeft && this.x <= 0
    const outOfRightBound = !this.moveLeft && this.x >= this.ctx.canvas.width
    const outOfTopBound = this.moveUp && this.y <= 0
    const outOfBottomBound = !this.moveUp && this.y >= this.ctx.canvas.height

    if (outOfLeftBound) this.x = this.ctx.canvas.width
    if (outOfRightBound) this.x = 0
    if (outOfTopBound) this.y = this.ctx.canvas.height
    if (outOfBottomBound) this.y = 0
  }
}
