import { useState, useEffect } from 'react'
import { Viewport } from '../utils'

const useMedia = (): Viewport => {
  const [ViewportSize, setViewportSize] = useState<Viewport>(Viewport.Default)

  const matchSize = () => {
    let portrait = window.matchMedia('(orientation: portrait)')
    let mobileSize = window.matchMedia('(max-width: 767px)')
    let desktopSize = window.matchMedia('(min-width: 768px)')

    if (mobileSize.matches) {
      setViewportSize(Viewport.Mobile)
    }
    if (desktopSize.matches) {
      setViewportSize(Viewport.Desktop)
    }
  }

  useEffect(() => {
    matchSize()
    window.onresize = () => {
      matchSize()
    }
  }, [ViewportSize])

  return ViewportSize
}

export { useMedia }
