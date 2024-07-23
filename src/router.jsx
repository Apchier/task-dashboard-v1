import DashboardMainLayout from "./components/layouts/DashboardMainLayout";
import Dashboard from "./pages/Dashboard";
import DashboardElement from "./pages/DashboardElement";
import DashboardTable from "./pages/DashboardTables";
import DashboardForm from "./pages/DashboardForm";

import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="elements" element={<DashboardElement />} />
            <Route path="tables" element={<DashboardTable />} />
            <Route path="form" element={<DashboardForm />} />
        </Route>
    )
)

