import React from 'react';
import { Award, RotateCcw, Unlock } from 'lucide-react';

export const SkillCard = ({ skill, progress, bestRecord, onUnlock, onDowngrade }) => {
    const currentLevelIdx = progress[skill.id];
    const currentLevel = skill.levels[currentLevelIdx];
    const isMax = currentLevelIdx >= skill.levels.length - 1;
    const canUnlock = bestRecord >= currentLevel.target;

    return (
        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
            <div className={`px-4 py-3 flex justify-between items-center ${skill.bg}`}>
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-slate-950/30 ${skill.color}`}>
                        <Award size={18} />
                    </div>
                    <div>
                        <h4 className={`font-bold text-sm ${skill.color}`}>{skill.name}</h4>
                        <p className="text-xs text-slate-400">Nivel {currentLevelIdx + 1}/{skill.levels.length}</p>
                    </div>
                </div>
                {bestRecord > 0 && (
                    <div className="text-right">
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Mejor Marca</p>
                        <p className="text-sm font-mono text-emerald-400">{bestRecord}{currentLevel.unit}</p>
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <span className="font-medium text-white text-lg">{currentLevel.name}</span>
                    {currentLevel.target && (
                        <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-slate-400">
                            Meta: {currentLevel.target}{currentLevel.unit}
                        </span>
                    )}
                </div>

                <div className="flex gap-2 mt-2 pt-2 border-t border-slate-800/50">
                    <button
                        onClick={() => onDowngrade(skill.id)}
                        disabled={currentLevelIdx === 0}
                        className="flex-1 py-2 text-xs font-medium text-slate-500 hover:bg-slate-800 rounded flex justify-center items-center gap-1 disabled:opacity-30"
                    >
                        <RotateCcw size={14} /> Regresar
                    </button>
                    <button
                        onClick={() => onUnlock(skill.id)}
                        disabled={isMax || !canUnlock}
                        className={`flex-1 py-2 text-xs font-medium rounded flex justify-center items-center gap-1 transition-colors disabled:opacity-30 ${isMax || !canUnlock ? 'text-slate-500' : 'text-emerald-400 hover:bg-emerald-950/30'}`}
                        title={!canUnlock ? `Necesitas alcanzar ${currentLevel.target}${currentLevel.unit} para desbloquear` : ''}
                    >
                        {isMax ? 'Maestría' : 'Desbloquear'} <Unlock size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};
