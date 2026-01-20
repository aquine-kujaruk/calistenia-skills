import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, ChevronRight, Info } from 'lucide-react';
import { useAppData } from '../context/AppDataContext';
import { SKILLS_DATA, SETS_PER_SKILL, REST_TIME } from '../data/skills';
import { formatTime } from '../lib/utils';
import { RestOverlay } from '../components/RestOverlay';

export const WorkoutSession = () => {
    const { progress, history, addWorkoutLog } = useAppData();
    const navigate = useNavigate();

    const [elapsedTime, setElapsedTime] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [sessionResults, setSessionResults] = useState({});
    const [restMode, setRestMode] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const skillsOrder = ['handstand', 'planche', 'frontLever', 'vSit'];
    const currentSkillId = skillsOrder[currentStep];
    const skillData = SKILLS_DATA[currentSkillId];
    const levelIdx = progress[currentSkillId];
    const currentLevel = skillData.levels[levelIdx];

    // Timer
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => setElapsedTime(prev => prev + 1), 1000);
        return () => clearInterval(timer);
    }, [isPaused]);

    // Init results for skill
    useEffect(() => {
        if (!sessionResults[currentSkillId]) {
            setSessionResults(prev => ({
                ...prev,
                [currentSkillId]: Array(SETS_PER_SKILL).fill('')
            }));
        }
    }, [currentSkillId]);

    // History lookup
    const previousSetData = useMemo(() => {
        for (let log of history) {
            const exerciseLog = log.exercises?.[currentSkillId];
            // Check if it's the same level
            if (exerciseLog && exerciseLog.levelId === currentLevel.id && Array.isArray(exerciseLog.sets)) {
                return exerciseLog.sets;
            }
        }
        return Array(SETS_PER_SKILL).fill('-');
    }, [history, currentSkillId, currentLevel.id]);

    const handleSetUpdate = (index, value) => {
        const newSets = [...(sessionResults[currentSkillId] || [])];
        newSets[index] = value;
        setSessionResults(prev => ({
            ...prev,
            [currentSkillId]: newSets
        }));
    };

    const completeSet = (index) => {
        if (index < SETS_PER_SKILL - 1) {
            setRestMode(true);
        }
    };

    const handleNextSkill = () => {
        if (currentStep < skillsOrder.length - 1) {
            setCurrentStep(prev => prev + 1);
            // Scroll to top
            document.querySelector('main')?.scrollTo(0, 0);
        } else {
            finishWorkout();
        }
    };

    const finishWorkout = () => {
        const finalData = {
            duration: elapsedTime,
            exercises: {}
        };

        skillsOrder.forEach(skillId => {
            const lIdx = progress[skillId];
            finalData.exercises[skillId] = {
                levelId: SKILLS_DATA[skillId].levels[lIdx].id,
                levelName: SKILLS_DATA[skillId].levels[lIdx].name,
                sets: sessionResults[skillId] || []
            };
        });

        const newLog = {
            id: Date.now(),
            date: new Date().toISOString(),
            ...finalData
        };

        addWorkoutLog(newLog);
        navigate('/');
    };

    const handleCancel = () => {
        if (window.confirm("¿Cancelar entrenamiento? Perderás el progreso de esta sesión.")) {
            navigate('/');
        }
    };

    if (restMode) {
        return <RestOverlay onComplete={() => setRestMode(false)} duration={REST_TIME} />;
    }

    return (
        <div className="h-full flex flex-col bg-slate-950 isolate">
            {/* Top Bar */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center sticky top-0 z-30">
                <div className="flex items-center gap-2 font-mono text-emerald-400 text-xl font-bold">
                    <Clock size={20} />
                    {formatTime(elapsedTime)}
                </div>
                <div className="flex gap-1">
                    {skillsOrder.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 w-8 rounded-full ${idx <= currentStep ? (idx === currentStep ? 'bg-emerald-500' : 'bg-emerald-900') : 'bg-slate-800'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto pb-24">

                {/* Banner */}
                <div className="w-full h-40 bg-slate-900 relative border-b border-slate-800/50">
                    <img
                        src={currentLevel.img}
                        alt={currentLevel.name}
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950 to-transparent p-4">
                        <h3 className={`text-xs font-bold uppercase tracking-widest mb-1 ${skillData.color}`}>
                            {skillData.name}
                        </h3>
                        <h2 className="text-2xl font-black text-white">{currentLevel.name}</h2>
                    </div>
                </div>

                <div className="p-4 space-y-6">

                    {/* Instructions */}
                    <div className="flex gap-3 text-sm text-slate-400 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                        <Info size={16} className="shrink-0 mt-0.5" />
                        <p>{currentLevel.desc} Meta: <span className="text-emerald-400 font-bold">{currentLevel.target}{currentLevel.unit}</span></p>
                    </div>

                    {/* Sets Table */}
                    <div className="space-y-2">
                        <div className="grid grid-cols-12 gap-2 text-xs font-bold text-slate-500 uppercase px-2 mb-2">
                            <div className="col-span-2 text-center">#</div>
                            <div className="col-span-4 text-center">Anterior</div>
                            <div className="col-span-4 text-center">Actual ({currentLevel.unit})</div>
                            <div className="col-span-2"></div>
                        </div>

                        {Array.from({ length: SETS_PER_SKILL }).map((_, index) => {
                            const prevVal = previousSetData[index];
                            const currentVal = sessionResults[currentSkillId]?.[index] || '';
                            // Lock if previous set is empty (except first)
                            const isLocked = index > 0 && (sessionResults[currentSkillId]?.[index - 1] === '' || sessionResults[currentSkillId]?.[index - 1] === undefined);

                            return (
                                <div key={index} className={`grid grid-cols-12 gap-2 items-center bg-slate-900 p-2 rounded-xl border ${isLocked ? 'opacity-40 border-slate-800' : 'border-slate-700'}`}>

                                    {/* # */}
                                    <div className="col-span-2 flex justify-center">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-slate-400 text-xs font-bold">
                                            {index + 1}
                                        </span>
                                    </div>

                                    {/* Previous */}
                                    <div className="col-span-4 text-center font-mono text-slate-400">
                                        {prevVal !== '-' ? `${prevVal}${currentLevel.unit}` : '-'}
                                    </div>

                                    {/* Input */}
                                    <div className="col-span-4">
                                        <input
                                            type="number"
                                            disabled={isLocked}
                                            className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-lg py-2 text-center font-mono text-white text-lg outline-none transition-colors disabled:bg-slate-900"
                                            placeholder="-"
                                            value={currentVal}
                                            onChange={(e) => handleSetUpdate(index, e.target.value)}
                                        />
                                    </div>

                                    {/* Check action */}
                                    <div className="col-span-2 flex justify-center">
                                        <button
                                            disabled={!currentVal || isLocked}
                                            onClick={() => completeSet(index)}
                                            className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white disabled:opacity-0 transition-all"
                                        >
                                            <CheckCircle size={20} />
                                        </button>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Footer Controls */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 fixed bottom-0 w-full max-w-md z-30">
                <div className="flex gap-4">
                    <button
                        onClick={handleCancel}
                        className="px-6 py-4 rounded-xl bg-slate-800 text-slate-400 font-bold hover:bg-slate-700"
                    >
                        X
                    </button>
                    <button
                        onClick={handleNextSkill}
                        className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-lg rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
                    >
                        {currentStep === skillsOrder.length - 1 ? 'FINALIZAR' : 'SIGUIENTE'}
                        <ChevronRight size={24} strokeWidth={3} />
                    </button>
                </div>
            </div>

        </div>
    );
};
