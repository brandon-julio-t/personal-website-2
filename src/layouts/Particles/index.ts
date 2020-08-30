import { canvas, ctx } from "./constants"
import { Circle } from "./classes"

const circles: [Circle?] = []

let stats: Stats = null
let mouseX: number = -1
let mouseY: number = -1

export default class Particles {
  static async init({ showFPS }) {
    if (showFPS) {
      const { default: Stats } = await import("stats.js")
      stats = new Stats()
      stats.showPanel(0)
      document.body.appendChild(stats.dom)
    }

    prepareHTML()
    prepareCircles()
    prepareEventListeners()
    animate()

    function prepareHTML() {
      const id = "particles"

      const div = document.createElement("div")
      div.id = id
      div.style.height = "100vh"
      div.style.position = "fixed"
      div.style.top = "0px"
      div.style.width = "100vw"
      div.style.zIndex = "-1"

      document.body.appendChild(div)
      document.querySelector("#particles").appendChild(canvas)
    }

    function prepareCircles() {
      const particlesCount =
        window.innerWidth >= 1280
          ? 64
          : window.innerWidth >= 1024
          ? 32
          : window.innerWidth >= 768
          ? 16
          : 8

      for (let i = 0; i < particlesCount; i++) circles.push(new Circle())
    }

    function prepareEventListeners() {
      window.onmousemove = (e: MouseEvent) => {
        const { x, y } = e
        mouseX = x
        mouseY = y
      }

      window.onresize = () => {
        canvas.height = window.innerHeight
        canvas.width = window.innerWidth
      }
    }

    function animate() {
      if (showFPS) stats.begin()

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < circles.length - 1; i++) {
        const circle = circles[i]

        circle.accelerate()
        circle.drawCircle()
        circle.linkToCoordinate(mouseX, mouseY)

        if (circle.isOutOfView()) circle.wrapCircle()

        for (let j = i + 1; j < circles.length; j++) circle.linkTo(circles[j])
      }

      if (showFPS) stats.end()

      window.requestAnimationFrame(animate)
    }
  }
}
