import Aside from "../fragments/dashboard/Aside";
import Headers from "../fragments/dashboard/Header";
import { Outlet } from "react-router-dom";
// import Card from "../fragments/dashboard/Card";
// import Table from "../fragments/dashboard/Table";

export default function DashboardMainLayout() {
    return (
        <div className="w-full h-full overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
            <div className="flex w-full h-full min-h-[100vh] bg-gray-200">
                <Aside />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Headers />
                    <Outlet />
                    {/* <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container px-6 py-8 mx-auto">
                            <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
                            <div className="mt-4">
                                <Card />
                            </div>
                            <div className="flex flex-col mt-8">
                                <Table />
                            </div>
                        </div>
                    </main> */}
                </div >
            </div >
        </div >
    )
}

