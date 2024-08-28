import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from "./conponents/board/Board.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
      {<Board/>}
  </StrictMode>,
)
