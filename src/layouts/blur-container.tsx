import * as React from "react"
import { ReactNode, useEffect, useRef } from "react"

import Particles from "../core/particles"

interface BlurContainerProps {
  children: ReactNode
}

export default (props: BlurContainerProps) => {
  const particleCanvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    new Particles(particleCanvas.current.transferControlToOffscreen())
  }, [])

  return (
    <>
      <div className="container mx-auto px-4 bg-blur rounded-lg">
        {props.children}
      </div>

      <canvas
        ref={particleCanvas}
        className="w-screen h-screen fixed top-0 z-none"
      />
    </>
  )
}
