import React, { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate, Routes } from 'react-router-dom'

const navigationEventType = 'shared navigation'

interface IProps {
  producer: string
  children: ReactNode
}

export const SharedRoutes: React.FC<IProps> = ({ producer, children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleNavigation = (event) => {
      if (event.detail.producer !== producer) {
        navigate(event.detail.location, { replace: true })
      }
    }

    window.addEventListener(navigationEventType, handleNavigation)

    return () => {
      window.removeEventListener(navigationEventType, handleNavigation)
    }
  }, [producer, navigate])

  useEffect(() => {
    const navigationEvent = new CustomEvent(navigationEventType, {
      detail: { location: location.pathname, producer },
    })

    window.dispatchEvent(navigationEvent)
  }, [producer, location.pathname])

  return <Routes>{children}</Routes>
}
