import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <footer className="bg-slate-950 text-white py-6 px-4 text-center text-sm">
                <p>
                    Floor No.: 3rd Floor | Building/Flat No.: 304 | Premises: 56, Nehru Place Market Road, New Delhi, South East Delhi, Delhi, 110019
                </p>
                <p className="mt-2 text-blue-300">© {new Date().getFullYear()} Vistara Networks</p>
            </footer>
        </>
    )
}

export default Layout