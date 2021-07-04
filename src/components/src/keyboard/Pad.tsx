import React from 'react'

export interface PadProps {
  size: number | string
}

export const Pad: React.FC<PadProps> = ({ size }) => {
  return (
    <div
      className="flex items-center flex-auto justify-center rounded-md bg-gray-200"
      style={{ maxWidth: size, minWidth: '2.5rem' }}>
      <span />
    </div>
  )
}
