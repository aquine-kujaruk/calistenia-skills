import React, { createContext, useContext, useState, useEffect } from 'react';
import { API } from '../lib/api';

const AppDataContext = createContext();

export const useAppData = () => useContext(AppDataContext);

export const AppDataProvider = ({ children }) => {
    const [progress, setProgress] = useState({
        handstand: 0,
        planche: 0,
        frontLever: 0,
        vSit: 0
    });
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load initial data
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);

            // 1. Load Local
            const savedProgress = localStorage.getItem('cali_progress');
            const savedHistory = localStorage.getItem('cali_history');

            let initialProgress = savedProgress ? JSON.parse(savedProgress) : null;
            let initialHistory = savedHistory ? JSON.parse(savedHistory) : [];

            if (initialProgress) setProgress(initialProgress);
            if (initialHistory) setHistory(initialHistory);

            // 2. Load Cloud (Background sync)
            try {
                const cloudData = await API.fetchState();
                if (cloudData) {
                    if (cloudData.progress) {
                        setProgress(cloudData.progress);
                        // Update local cache
                        localStorage.setItem('cali_progress', JSON.stringify(cloudData.progress));
                    }
                    if (cloudData.history && Array.isArray(cloudData.history)) {
                        setHistory(cloudData.history);
                        localStorage.setItem('cali_history', JSON.stringify(cloudData.history));
                    }
                }
            } catch (e) {
                console.log("Offline mode or sync failed", e);
            }

            setIsLoading(false);
        };
        loadData();
    }, []);

    // Save to LocalStorage always
    useEffect(() => {
        localStorage.setItem('cali_progress', JSON.stringify(progress));
        localStorage.setItem('cali_history', JSON.stringify(history));
    }, [progress, history]);

    const addWorkoutLog = (log) => {
        setHistory(prev => [log, ...prev]);
        // Fire and forget cloud save
        API.saveLog(log);
    };

    const updateLevel = (skillId, levelIdx) => {
        const newProgress = {
            ...progress,
            [skillId]: levelIdx
        };
        setProgress(newProgress);
        // Fire and forget cloud save
        API.saveProgress(newProgress);
    };

    const getBestRecord = (skillId, levelId) => {
        let max = 0;
        history.forEach(log => {
            const exercise = log.exercises?.[skillId];
            // Match by levelId (standard) or fallback to levelName if levelId is missing (from old GAS versions)
            const isMatch = exercise && (exercise.levelId === levelId || (!exercise.levelId && exercise.levelName === levelId));

            if (isMatch) {
                const sets = Array.isArray(exercise.sets)
                    ? exercise.sets.map(s => parseInt(s)).filter(s => !isNaN(s))
                    : [];
                if (sets.length > 0) {
                    const sessionMax = Math.max(...sets);
                    if (sessionMax > max) max = sessionMax;
                }
            }
        });
        return max;
    };

    return (
        <AppDataContext.Provider value={{
            progress,
            history,
            isLoading,
            addWorkoutLog,
            updateLevel,
            getBestRecord
        }}>
            {children}
        </AppDataContext.Provider>
    );
};
