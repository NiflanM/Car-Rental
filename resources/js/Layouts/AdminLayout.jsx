import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import {
    LayoutDashboard,
    Car,
    CalendarCheck,
    User,
    Menu,
    X
} from 'lucide-react';

export default function AdminLayout({ children }) {

    const { url } = usePage();
    const user = usePage().props.auth.user;

    const [open, setOpen] = useState(false);

    const NavItem = ({ href, icon: Icon, title }) => (
        <Link
            href={href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
            ${url.startsWith(href)
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
            <Icon size={20}/>
            {title}
        </Link>
    );

    return (
        <div className="flex min-h-screen bg-gray-50">

            {/* SIDEBAR */}
            <aside className={`fixed lg:static z-50 w-64 bg-white shadow-lg h-full transition
                ${open ? 'left-0' : '-left-64'} lg:left-0`}>

                <div className="p-6 border-b">
                    <h1 className="text-2xl font-bold text-indigo-600">
                        CarRental Admin
                    </h1>
                </div>

                <nav className="p-4 space-y-2">

                    <NavItem
                        href={route('dashboard')}
                        icon={LayoutDashboard}
                        title="Dashboard"
                    />

                    <NavItem
                        href={route('cars.index')}
                        icon={Car}
                        title="Cars"
                    />

                    <NavItem
                        href={route('bookings.index')}
                        icon={CalendarCheck}
                        title="Bookings"
                    />

                    <NavItem
                        href={route('profile.edit')}
                        icon={User}
                        title="Profile"
                    />

                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t text-sm text-gray-500">
                    Logged in as <b>{user.name}</b>
                </div>
            </aside>

            {/* MAIN AREA */}
            <div className="flex-1 flex flex-col">

                {/* TOPBAR */}
                <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">

                    <button
                        className="lg:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X/> : <Menu/>}
                    </button>

                    <h2 className="font-semibold text-lg">
                        Admin Panel
                    </h2>

                    <Link
                        method="post"
                        href={route('logout')}
                        as="button"
                        className="text-sm text-red-500"
                    >
                        Logout
                    </Link>

                </header>

                {/* PAGE CONTENT */}
                <main className="p-8">
                    {children}
                </main>

            </div>
        </div>
    );
}