import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './components/queen/queen.css'
import './components/general/general.css'
import './components/pink floyd/pinkfloyd.css'
import GeneralLayout from './layouts/GeneralLayout.tsx'
import HomeGeneral from './pages/HomeGeneral.tsx'
import QueenLayout from './layouts/QueenLayout.tsx'
import BandHome from './pages/BandHome.tsx'
import AlbumDetails from './pages/AlbumDetails.tsx'
import PinkFloydLayout from './layouts/PinkFloydLayout.tsx'


const router = createHashRouter(
  [
    {
      path: "/",
      element: <GeneralLayout />,
      children: [
        {
          index: true,
          element: <HomeGeneral />
        }
      ]
    },
    {
      path: "/queen",
      element: <QueenLayout />,
      children: [
        {
          index: true,
          element: <BandHome />
        },
        {
          path: "album/:id",
          element: <AlbumDetails />
        },
      ]
    },
    {
      path: "/pink-floyd",
      element: <PinkFloydLayout />,
      children: [
        {
          index: true,
          element: <BandHome />
        },
        {
          path: "album/:id",
          element: <AlbumDetails />
        },
      ]
    }
  ]
)
createRoot(document.getElementById('root')!).render(
  // <App />
  <RouterProvider router={router} />
)
