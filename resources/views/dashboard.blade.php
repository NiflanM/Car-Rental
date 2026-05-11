<!DOCTYPE html>
<html lang="en">
<head>
    <title>@yield('title','Enterprise Dashboard')</title>

    @vite(['resources/css/app.css','resources/js/app.js'])

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <style>
        body{
            font-family: 'Inter', sans-serif;
            background: #f6f7fb;
        }

        /* TOPBAR */
        .topbar{
            background: white;
            border-bottom: 1px solid #e5e7eb;
            position: sticky;
            top: 0;
            z-index: 50;
        }

        /* MAIN CARDS */
        .card{
            background: white;
            border-radius: 18px;
            padding: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            transition: .3s;
        }

        .card:hover{
            transform: translateY(-4px);
            box-shadow: 0 18px 40px rgba(0,0,0,0.08);
        }

        /* SIDEBAR BASE (from partial) */
        .sidebar{
            width: 280px;
            background: #0b1220;
            color: #94a3b8;
            transition: .3s;
        }

        .sidebar.collapsed{
            width: 80px;
        }

        .nav-item{
            display:flex;
            align-items:center;
            gap:12px;
            padding:12px 14px;
            border-radius:12px;
            transition:.2s;
            font-size:14px;
        }

        .nav-item:hover{
            background:#111a2e;
            color:white;
        }

        .active{
            background: linear-gradient(90deg,#6366f1,#8b5cf6);
            color:white;
            box-shadow: 0 10px 25px rgba(99,102,241,.25);
        }

        .icon{
            width:20px;
            text-align:center;
        }
    </style>
</head>

<body>

<div class="flex min-h-screen">

    {{-- ================= SIDEBAR ================= --}}
    @include('layouts.partials.sidebar')

    {{-- ================= MAIN ================= --}}
    <div class="flex-1 flex flex-col">

        {{-- TOPBAR --}}
        <header class="topbar flex items-center justify-between px-6 py-4">

            <div>
                <h2 class="text-lg font-semibold text-gray-800">
                    Dashboard Overview
                </h2>
                <p class="text-sm text-gray-500">
                    Welcome back, {{ auth()->user()->name }}
                </p>
            </div>

            <div class="flex items-center gap-4">

                {{-- SEARCH --}}
                <input
                    placeholder="Search cars, bookings..."
                    class="px-4 py-2 border rounded-xl text-sm w-72 focus:ring-2 focus:ring-indigo-500"
                >

                {{-- NOTIFICATION --}}
                <button class="text-xl">🔔</button>

                {{-- PROFILE --}}
                <div class="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    {{ strtoupper(substr(auth()->user()->name,0,1)) }}
                </div>

            </div>

        </header>

        {{-- CONTENT --}}
        <main class="p-8 space-y-8">

            {{-- STATS GRID --}}
            <div class="grid md:grid-cols-3 gap-6">

                <div class="card">
                    <p class="text-gray-500 text-sm">Total Vehicles</p>
                    <h3 class="text-3xl font-bold mt-2 text-gray-900">24</h3>
                </div>

                <div class="card">
                    <p class="text-gray-500 text-sm">Bookings</p>
                    <h3 class="text-3xl font-bold mt-2 text-gray-900">12</h3>
                </div>

                <div class="card">
                    <p class="text-gray-500 text-sm">Revenue</p>
                    <h3 class="text-3xl font-bold mt-2 text-gray-900">LKR 450,000</h3>
                </div>

            </div>

            {{-- QUICK ACTIONS --}}
            <div class="card">

                <h3 class="text-xl font-semibold mb-5">
                    Quick Actions
                </h3>

                <div class="flex flex-wrap gap-4">

                    <a href="{{ route('cars.create') }}"
                       class="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                        + Add Vehicle
                    </a>

                    <a href="{{ route('cars.index') }}"
                       class="px-6 py-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
                        View Cars
                    </a>

                    <a href="{{ route('bookings.index') }}"
                       class="px-6 py-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
                        Manage Bookings
                    </a>

                </div>

            </div>

            {{-- ACTIVITY SECTION (optional future expansion) --}}
            <div class="grid md:grid-cols-2 gap-6">

                <div class="card">
                    <h3 class="font-semibold mb-3">Recent Bookings</h3>
                    <p class="text-sm text-gray-500">Coming from database...</p>
                </div>

                <div class="card">
                    <h3 class="font-semibold mb-3">System Status</h3>
                    <p class="text-sm text-green-600">All systems operational</p>
                </div>

            </div>

        </main>

    </div>

</div>

{{-- SIDEBAR TOGGLE --}}
<script>
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');

    document.querySelectorAll('.sidebar-text').forEach(el => {
        el.classList.toggle('hidden');
    });
}
</script>

</body>
</html>