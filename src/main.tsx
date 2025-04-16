import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routers/AppRouter.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-gray-200 min-h-screen dark:bg-gray-900'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
