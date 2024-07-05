import React from 'react'

const BlackBackdrop = ({className,children,onCloseBlackBackDrop,...others}) => {
  return (
    <div
        {...others}
        onClick={onCloseBlackBackDrop}
        className={`fixed top-0 left-0 w-full h-full bg-black/60 z-[5] ${className}`}
    >
        {children}
    </div>
  )
}

export default BlackBackdrop