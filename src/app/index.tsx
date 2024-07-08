import { RouterProvider } from 'react-router-dom'
import { createRouter } from './routes'

const App = () => {
  return (
    <RouterProvider router={createRouter} />
  )
}

export default App