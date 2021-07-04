import {Keyboard} from 'components'
import { GetServerSideProps } from 'next'
import React from 'react'

interface AppProps {
  keys: string[]
}

function getKey(keys: string[]): string {
  const index = Math.floor(keys.length * Math.random())

  return keys[index]
}

const contentOnStart = <span>SPACE</span>

const App: React.FC<AppProps> = ({ keys }) => {
  const [processed, setProcessed] = React.useState(false)
  const [currentKey, setCurrentKey] = React.useState(() => getKey(keys))

  React.useEffect(() => {
    const handler = function (this: Document, event: KeyboardEvent): any {
      event.preventDefault()

      if (!processed) {
        if (event.key === ' ') {
          setProcessed(true)
          document.removeEventListener('keypress', handler)
          return
        }
      }

      const handleKeypress = (pressedKey: string): void => {
      if (pressedKey === currentKey) {
        const nextKey = getKey([...keys].filter((key) => key !== currentKey))
        setCurrentKey(() => nextKey)
        document.removeEventListener('keypress', handler)
      }
    }

      handleKeypress(event.key) 
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
    
  }, [processed, currentKey])

  const contentOnProcessing = <span>{currentKey}</span>
  const contents = processed ? contentOnProcessing : contentOnStart

  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-10">
      <div className="flex items-center justify-center text-bold font-m-plus-rounded" style={{fontSize: '20vw'}}>{contents}</div>
      <Keyboard highlightKeyName={processed ? currentKey : ''} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<AppProps> = async (
  context
) => {
  return {
    props: { keys: [...new Set(context.query.keys as string)] }
  }
}

export default App
