import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useAppData } from '../context/AppDataContext';
import { SKILLS_DATA } from '../data/skills';
import { SkillCard } from '../components/SkillCard';

export const Dashboard = () => {
    const { progress, updateLevel, history, isLoading } = useAppData();
    const navigate = useNavigate();

    if (isLoading) return <div className="p-6 text-center text-slate-500 animate-pulse">Cargando perfil G-FORCE...</div>;

    const lastWorkout = history[0];

    const handleLevelChange = (skillId, direction) => {
        const current = progress[skillId];
        if (direction === 'up') updateLevel(skillId, current + 1);
        if (direction === 'down') updateLevel(skillId, current - 1);
    };

    return (
        <div className="p-6 space-y-8 animate-in fade-in duration-500">
            <div className="space-y-1">
                <h2 className="text-2xl font-bold text-white">Hola, Atleta.</h2>
                <p className="text-slate-400 text-sm">
                    {lastWorkout
                        ? `Última sesión: ${new Date(lastWorkout.date).toLocaleDateString('es-ES')}`
                        : "Comencemos tu viaje."}
                </p>
            </div>

            <button
                onClick={() => navigate('/workout')}
                className="w-full group relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-lg shadow-emerald-900/20 active:scale-[0.98] transition-all"
            >
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
                <div className="relative flex flex-col items-center gap-3">
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                        <Play size={32} fill="currentColor" className="text-white ml-1" />
                    </div>
                    <span className="font-bold text-lg tracking-wide uppercase">Comenzar Rutina (20')</span>
                </div>
            </button>

            <div className="space-y-4">
                <div className="flex justify-between items-end">
                    <h3 className="font-bold text-slate-300 uppercase tracking-wider text-xs">Mis Hitos Actuales</h3>
                    <span className="text-[10px] text-slate-500">Gestiona tu nivel aquí</span>
                </div>

                {Object.values(SKILLS_DATA).map((skill) => (
                    <SkillCard
                        key={skill.id}
                        skill={skill}
                        progress={progress}
                        onUnlock={() => handleLevelChange(skill.id, 'up')}
                        onDowngrade={() => handleLevelChange(skill.id, 'down')}
                    />
                ))}
            </div>
        </div>
    );
};
