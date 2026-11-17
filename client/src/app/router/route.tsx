import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivitiesDashboard from "../../features/Activities/dashboard/ActivitiesDashboard";
import ActivityForm from "../../features/Activities/form/ActivityForm";
import ActivityDetail from "../../features/Activities/details/ActivityDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivitiesDashboard /> },
            { path: 'activities/:id', element: <ActivityDetail /> },
            { path: 'manage/:id', element: <ActivityForm /> },
            { path: 'createActivity', element: <ActivityForm key={'create'} /> }
        ]
    }
])