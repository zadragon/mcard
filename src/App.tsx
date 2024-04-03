import { css } from '@emotion/react'
import './App.css'

const containerStyles = css`
  background: hotpink;
`

function App() {
  console.log(process.env)
  return (
    <div className="App" css={containerStyles}>
      asdf
    </div>
  )
}

export default App
