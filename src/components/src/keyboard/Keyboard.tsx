import React from 'react'
import { CharButton } from './CharButton'
import { Pad } from './Pad'

export interface KeyboardProps {
  highlightKeyName: string
}

export const Keyboard: React.FC<KeyboardProps> = ({ highlightKeyName }) => {
  return (
    <div
      className="flex flex-col space-y-2 select-none border p-2 rounded-lg bg-gray-300 font-m-plus-rounded"
      style={{ maxWidth: '41rem' }}>
      <div className="flex space-x-2 w-full">
        <Pad size="2.5rem" />
        <CharButton keyName="1" isHighlight={highlightKeyName === '1'} />
        <CharButton keyName="2" isHighlight={highlightKeyName === '2'} />
        <CharButton keyName="3" isHighlight={highlightKeyName === '3'} />
        <CharButton keyName="4" isHighlight={highlightKeyName === '4'} />
        <CharButton keyName="5" isHighlight={highlightKeyName === '5'} />
        <CharButton keyName="6" isHighlight={highlightKeyName === '6'} />
        <CharButton keyName="7" isHighlight={highlightKeyName === '7'} />
        <CharButton keyName="8" isHighlight={highlightKeyName === '8'} />
        <CharButton keyName="9" isHighlight={highlightKeyName === '9'} />
        <CharButton keyName="0" isHighlight={highlightKeyName === '0'} />
        <CharButton keyName="-" isHighlight={highlightKeyName === '-'} />
        <Pad size="100%" />
      </div>
      <div className="flex space-x-2 w-full">
        <Pad size="4rem" />
        <CharButton keyName="q" isHighlight={highlightKeyName === 'q'} />
        <CharButton keyName="w" isHighlight={highlightKeyName === 'w'} />
        <CharButton keyName="e" isHighlight={highlightKeyName === 'e'} />
        <CharButton keyName="r" isHighlight={highlightKeyName === 'r'} />
        <CharButton keyName="t" isHighlight={highlightKeyName === 't'} />
        <CharButton keyName="y" isHighlight={highlightKeyName === 'y'} />
        <CharButton keyName="u" isHighlight={highlightKeyName === 'u'} />
        <CharButton keyName="i" isHighlight={highlightKeyName === 'i'} />
        <CharButton keyName="o" isHighlight={highlightKeyName === 'o'} />
        <CharButton keyName="p" isHighlight={highlightKeyName === 'p'} />
        <Pad size="100%" />
      </div>
      <div className="flex space-x-2 w-full">
        <Pad size="5.5rem" />
        <CharButton keyName="a" isHighlight={highlightKeyName === 'a'} />
        <CharButton keyName="s" isHighlight={highlightKeyName === 's'} />
        <CharButton keyName="d" isHighlight={highlightKeyName === 'd'} />
        <CharButton keyName="f" isHighlight={highlightKeyName === 'f'} />
        <CharButton keyName="g" isHighlight={highlightKeyName === 'g'} />
        <CharButton keyName="h" isHighlight={highlightKeyName === 'h'} />
        <CharButton keyName="j" isHighlight={highlightKeyName === 'j'} />
        <CharButton keyName="k" isHighlight={highlightKeyName === 'k'} />
        <CharButton keyName="l" isHighlight={highlightKeyName === 'l'} />
        <Pad size="100%" />
      </div>
      <div className="flex space-x-2 w-full">
        <Pad size="7rem" />
        <CharButton keyName="z" isHighlight={highlightKeyName === 'z'} />
        <CharButton keyName="x" isHighlight={highlightKeyName === 'x'} />
        <CharButton keyName="c" isHighlight={highlightKeyName === 'c'} />
        <CharButton keyName="v" isHighlight={highlightKeyName === 'v'} />
        <CharButton keyName="b" isHighlight={highlightKeyName === 'b'} />
        <CharButton keyName="n" isHighlight={highlightKeyName === 'n'} />
        <CharButton keyName="m" isHighlight={highlightKeyName === 'm'} />
        <CharButton keyName="," isHighlight={highlightKeyName === ','} />
        <Pad size="100%" />
      </div>
    </div>
  )
}
