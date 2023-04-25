import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/kasa',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: 'about',
        element: <About />,
    },
    {
        path: 'housing',
        element: <Housing />,
    },
])

export default router
