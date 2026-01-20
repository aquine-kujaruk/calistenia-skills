import React from 'react';
import { History, Clock } from 'lucide-react';
import { useAppData } from '../context/AppDataContext';
import { formatTime } from '../lib/utils';

export const HistoryView = () => {
    const { history } = useAppData();

    return (
        <div className="p-6 space-y-6 h-full overflow-y-auto pb-24 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-bold text-white mb-6">Historial de Sesiones</h2>

            {history.length === 0 ? (
                <div className="text-center py-20 opacity-50">
                    <History size={48} className="mx-auto mb-4" />
                    <p>Aún no hay registros.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {history.map((log) => (
                        <div key={log.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                            <div className="flex justify-between items-start mb-4 border-b border-slate-800 pb-3">
                                <div>
                                    <h3 className="font-bold text-white text-lg">
                                        {new Date(log.date).toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'long' })}
                                    </h3>
                                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                        <Clock size={12} /> {formatTime(log.duration)} de sesión
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                {Object.values(log.exercises).map((ex, idx) => {
                                    // Basic rendering of sets
                                    const validSets = ex.sets.filter(v => v !== '' && v !== undefined);
                                    const displayValue = validSets.length > 0 ? validSets.join(' - ') : 'Sin datos';

                                    return (
                                        <div key={idx} className="bg-slate-950/50 p-3 rounded-lg border border-slate-800/50 flex justify-between items-center">
                                            <p className="text-xs uppercase text-slate-500 font-bold truncate w-1/3">{ex.levelName}</p>
                                            <div className="text-right">
                                                <p className="text-sm font-mono text-emerald-400 break-all">{displayValue}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
