import styled from '@emotion/styled/macro'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import tw from 'twin.macro'

export default function App() {
  const [state, setState] = useState(false)
  const [time, setTime] = useState(0)

  return (
    <div>
      TWIN STATE - {time < 10000 && time} -{' '}
      <button
        onClick={() => {
          setState(!state)
          setTime(Date.now())
        }}
      >
        Toggle
      </button>
      {[...new Array(50000)].map((_, i) => (
        <Hard key={i} state={state} setTime={setTime} last={i === 50000 - 1} />
      ))}
    </div>
  )
}

function Hard({ state, last, setTime }: { state: boolean; last: boolean; setTime: Dispatch<SetStateAction<number>> }) {
  useEffect(() => {
    if (!last) return
    setTime(c => Date.now() - c)
  }, [state, last, setTime])
  return <StyledHard state={state}>Ez</StyledHard>
}

const StyledHard = styled.div(({ state }: { state: boolean }) => [state ? tw`bg-red-500` : tw`bg-blue-500`])
