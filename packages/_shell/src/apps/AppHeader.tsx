import React, { useEffect, useRef } from 'react'
/* eslint-disable-next-line import/no-unresolved */
import { mount, unmount } from 'header/app'

export const AppHeader: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mount(wrapperRef.current)

    return () => {
      unmount()
    }
  }, [])

  return <div ref={wrapperRef} />
}
