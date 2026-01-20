import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { History, BarChart2 } from 'lucide-react';

export const MainLayout = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30">
            <div className="max-w-md mx-auto min-h-screen flex flex-col border-x border-slate-900 shadow-2xl relative">

                {/* HEADER */}
                <header className="px-6 py-4 bg-slate-900/80 backdrop-blur-md sticky top-0 z-20 border-b border-slate-800 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic tracking-tighter">
                            G-FORCE
                        </h1>
                        <p className="text-xs text-slate-400 font-medium">Protocolo Matutino</p>
                    </div>
                    <div className="flex gap-2">
                        <Link
                            to="/history"
                            className={`p-2 rounded-lg transition-colors ${currentPath === '/history' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'}`}
                        >
                            <History size={20} />
                        </Link>
                        <Link
                            to="/"
                            className={`p-2 rounded-lg transition-colors ${currentPath === '/' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'}`}
                        >
                            <BarChart2 size={20} />
                        </Link>
                    </div>
                </header>

                {/* CONTENT */}
                <main className="flex-1 flex flex-col relative">
                    <Outlet />
                </main>

            </div>
        </div>
    );
};
