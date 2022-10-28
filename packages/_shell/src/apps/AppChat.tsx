import React, { useEffect, useRef } from 'react'
/* eslint-disable-next-line import/no-unresolved */
import { mount, unmount } from 'chat/app'

export const AppChat: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mount(wrapperRef.current)

    return () => {
      unmount()
    }
  }, [])

  return (
    <div style={{ background: 'lightgray', border: 'solid 1px red', margin: '2px' }}>
      <div ref={wrapperRef} />
    </div>
  )
}
