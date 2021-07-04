import React from 'react'

export interface CharButtonProps {
  keyName: string
  isHighlight: boolean
}

export const CharButton: React.FC<CharButtonProps> = ({keyName, isHighlight}) => {
  return <div className={`${isHighlight ? 'bg-green-200 font-bold border-green-400' : ''} flex items-center justify-center border rounded-md w-10 h-10 shadow bg-white transition-75`}>
    <span>{keyName}</span>
  </div>
}