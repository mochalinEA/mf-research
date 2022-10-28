import React, { useEffect, useRef } from 'react'
/* eslint-disable-next-line import/no-unresolved */
import { mount, unmount } from 'sidebar/app'

export const AppSidebar: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mount(wrapperRef.current)

    return () => {
      unmount()
    }
  }, [])

  return <div ref={wrapperRef} />
}
