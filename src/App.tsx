import styled from '@emotion/styled/macro'
import { useState } from 'react'
import tw from 'twin.macro'

export default function App() {
  const [state, setState] = useState(false)

  return (
    <div>
      TWIN STATE
      <button onClick={() => setState(!state)}>Toggle</button>
      {[...new Array(50000)].map((_, i) => (
        <Hard key={i} state={state} />
      ))}
    </div>
  )
}

function Hard({ state }: { state: boolean }) {
  return <StyledHard state={state}>Ez</StyledHard>
}

const StyledHard = styled.div(({ state }: { state: boolean }) => [state ? tw`bg-red-500` : tw`bg-blue-500`])
