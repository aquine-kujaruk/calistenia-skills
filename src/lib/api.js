const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const API = {
    async fetchState() {
        if (!SCRIPT_URL) return null;
        try {
            // GAS Web Apps return 302 redirect. Fetch follows it automatically.
            const res = await fetch(SCRIPT_URL);
            if (!res.ok) throw new Error('Network response was not ok');
            return await res.json();
        } catch (e) {
            console.warn("API Fetch Error (using offline mode):", e);
            return null;
        }
    },

    async saveProgress(progress) {
        if (!SCRIPT_URL) return;
        try {
            // mode: 'no-cors' is often needed for GAS POSTs if not strictly handled, 
            // but 'cors' is better if API supports it. 
            // GAS `doPost` is tricky with CORS. 
            // Standard practice: use `no-cors` and assume success, or use a proxy.
            // We'll try standard fetch first; if it fails due to CORS, user might need to adjust script, 
            // but usually `no-cors` is the safe bet for "fire and forget" on GAS.
            await fetch(SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8', // GAS requires text/plain to avoid preflight usually
                },
                body: JSON.stringify({ progress }),
            });
        } catch (e) {
            console.error("API Save Progress Error", e);
        }
    },

    async saveLog(historyLog) {
        if (!SCRIPT_URL) return;
        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({ historyLog }),
            });
        } catch (e) {
            console.error("API Save Log Error", e);
        }
    }
};
