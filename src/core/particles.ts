import Circle from "./circle"

export default class Particles {
  private readonly FPS: number = 60
  private readonly ctx: OffscreenCanvasRenderingContext2D

  private mouseX: number = -1
  private mouseY: number = -1
  private circles: Circle[] = []

  private previousFrameTime: number = Date.now()
  private previousMouseMoveTime: number = Date.now()
  private previousResizeTime: number = Date.now()

  public constructor(private readonly canvas: OffscreenCanvas) {
    canvas.width = innerWidth
    canvas.height = innerHeight

    this.ctx = canvas.getContext("2d")

    this.prepareCircles()
    this.prepareEventListeners()
    this.animate()
  }

  private prepareCircles() {
    const particlesCount = innerWidth / 25

    for (let i = 0; i < particlesCount; i++) {
      this.circles.push(new Circle(this.ctx))
    }
  }

  private prepareEventListeners() {
    onmousemove = (e: MouseEvent) => {
      const interval = 1000 / this.FPS
      const now = Date.now()

      const delta = now - this.previousMouseMoveTime
      if (delta <= interval) {
        return
      }

      this.previousMouseMoveTime = now - (delta % interval)

      const { x, y } = e
      this.mouseX = x
      this.mouseY = y
    }

    onresize = () => {
      const interval = 1000 / this.FPS
      const now = Date.now()

      const delta = now - this.previousResizeTime
      if (delta <= interval) {
        return
      }

      this.previousResizeTime = now - (delta % interval)

      this.canvas.height = innerHeight
      this.canvas.width = innerWidth
    }
  }

  private animate() {
    const interval = 1000 / this.FPS
    const now = Date.now()

    const delta = now - this.previousFrameTime
    if (delta <= interval) {
      requestAnimationFrame(() => this.animate())
      return
    }

    this.previousFrameTime = now - (delta % interval)

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    for (let i = 0; i < this.circles.length - 1; i++) {
      const circle = this.circles[i]

      circle.accelerate()
      circle.drawCircle()
      circle.linkToCoordinate(this.mouseX, this.mouseY)

      if (circle.isOutOfView) {
        circle.wrapCircle()
      }

      for (let j = i + 1; j < this.circles.length; j++) {
        circle.linkTo(this.circles[j])
      }
    }

    requestAnimationFrame(() => this.animate())
  }
}
