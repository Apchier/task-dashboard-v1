import Card from "../components/fragments/dashboard/Card";
import Table from "../components/fragments/dashboard/Table";

export default function Dashboard() {
    return (
        <>
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div className="container px-6 py-8 mx-auto">
                    <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
                    <div className="mt-4">
                        <Card />
                    </div>
                    <div className="flex flex-col mt-8">
                        <Table />
                    </div>
                </div>
            </main>
        </>
    )
}
