import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AdminLayout
            header={
                <h2 className="text-2xl font-bold text-gray-800">
                    Dashboard Overview
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-10">
                <div className="mx-auto max-w-7xl px-6 space-y-8">

                    {/* STAT CARDS */}
                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-white p-6 rounded-2xl shadow">
                            <p>Total Vehicles</p>
                            <h3 className="text-3xl font-bold">24</h3>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow">
                            <p>Bookings</p>
                            <h3 className="text-3xl font-bold">12</h3>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow">
                            <p>Revenue</p>
                            <h3 className="text-3xl font-bold">LKR 450,000</h3>
                        </div>

                    </div>

                    {/* QUICK ACTIONS */}
                    <div className="bg-white rounded-2xl shadow p-8">

                        <h3 className="text-xl font-semibold mb-6">
                            Quick Actions
                        </h3>

                        <div className="flex flex-wrap gap-4">

                            {/* ✅ NORMAL LINKS */}
                            <a
                                href={route('cars.create')}
                                className="px-6 py-3 bg-indigo-600 text-white rounded-xl"
                            >
                                + Add Vehicle
                            </a>

                            <a
                                href={route('cars.index')}
                                className="px-6 py-3 bg-gray-100 rounded-xl"
                            >
                                View Cars
                            </a>

                            <a
                                href={route('bookings.index')}
                                className="px-6 py-3 bg-gray-100 rounded-xl"
                            >
                                Manage Bookings
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}