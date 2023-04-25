import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/kasaa',
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
