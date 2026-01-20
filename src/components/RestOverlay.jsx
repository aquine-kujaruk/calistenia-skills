import React, { useState, useEffect } from 'react';
import { SkipForward } from 'lucide-react';

export const RestOverlay = ({ onComplete, duration = 45 }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft <= 0) {
            onComplete();
            return;
        }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="text-center space-y-6">
                <h3 className="text-slate-400 text-xl font-medium uppercase tracking-widest">Descanso</h3>
                <div className="text-8xl font-black font-mono text-emerald-400 tabular-nums">
                    {timeLeft}
                </div>
                <button
                    onClick={onComplete}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors"
                >
                    <SkipForward size={20} /> Saltar descanso
                </button>
            </div>
        </div>
    );
};
