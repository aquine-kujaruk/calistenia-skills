export const SETS_PER_SKILL = 4;
export const REST_TIME = 45;

export const SKILLS_DATA = {
    handstand: {
        id: 'handstand',
        name: "Hito A: Handstand",
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        levels: [
            { id: 'hs_1', name: "Wall Plank", desc: "Cara a la pared. Mantén la línea recta.", target: 60, unit: 's', img: "https://placehold.co/600x400/1e293b/fb7185?text=Wall+Plank" },
            { id: 'hs_2', name: "Chest-to-Wall", desc: "Pecho a pared, retroversión pélvica.", target: 45, unit: 's', img: "https://placehold.co/600x400/1e293b/fb7185?text=Chest+To+Wall" },
            { id: 'hs_3', name: "Wall Taps", desc: "Sepárate y toca hombros.", target: 15, unit: 'reps', img: "https://placehold.co/600x400/1e293b/fb7185?text=Wall+Taps" },
            { id: 'hs_4', name: "Kick-up Controlado", desc: "Intentos de subida.", target: 5, unit: 'reps', img: "https://placehold.co/600x400/1e293b/fb7185?text=Kick+Up" },
            { id: 'hs_5', name: "Freestanding HS", desc: "Equilibrio libre.", target: 30, unit: 's', img: "https://placehold.co/600x400/1e293b/fb7185?text=Freestanding" }
        ]
    },
    planche: {
        id: 'planche',
        name: "Hito B: Planche",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        levels: [
            { id: 'p_1', name: "Planche Lean", desc: "Inclinación máxima, codos bloqueados.", target: 30, unit: 's', img: "https://placehold.co/600x400/1e293b/60a5fa?text=Planche+Lean" },
            { id: 'p_2', name: "Tuck Planche", desc: "Rodillas al pecho.", target: 20, unit: 's', img: "https://placehold.co/600x400/1e293b/60a5fa?text=Tuck+Planche" },
            { id: 'p_3_b', name: "Adv. Tuck (Banda)", desc: "Espalda plana con banda.", target: 20, unit: 's', img: "https://placehold.co/600x400/1e293b/60a5fa?text=Adv+Tuck+(Banda)" },
            { id: 'p_3', name: "Adv. Tuck", desc: "Espalda plana sin banda.", target: 15, unit: 's', img: "https://placehold.co/600x400/1e293b/60a5fa?text=Adv+Tuck" },
            { id: 'p_4_b', name: "Straddle (Banda)", desc: "Piernas abiertas con banda.", target: 15, unit: 's', img: "https://placehold.co/600x400/1e293b/60a5fa?text=Straddle+(Banda)" },
            { id: 'p_4', name: "Straddle Planche", desc: "Piernas abiertas libre.", target: 10, unit: 's', img: "https://placehold.co/600x400/1e293b/60a5fa?text=Straddle+Planche" },
            { id: 'p_5', name: "Full Planche", desc: "Cuerpo recto.", target: 10, unit: 's', img: "https://placehold.co/600x400/1e293b/60a5fa?text=Full+Planche" }
        ]
    },
    frontLever: {
        id: 'frontLever',
        name: "Hito C: Front Lever",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        levels: [
            { id: 'fl_1', name: "Tuck Lever", desc: "Agrupamiento máximo.", target: 30, unit: 's', img: "https://placehold.co/600x400/1e293b/34d399?text=Tuck+Lever" },
            { id: 'fl_2_b', name: "Adv. Tuck (Banda)", desc: "Espalda plana con banda.", target: 25, unit: 's', img: "https://placehold.co/600x400/1e293b/34d399?text=Adv+Tuck+(Banda)" },
            { id: 'fl_2', name: "Adv. Tuck", desc: "Rodillas a 90°.", target: 20, unit: 's', img: "https://placehold.co/600x400/1e293b/34d399?text=Adv+Tuck" },
            { id: 'fl_3_b', name: "Single Leg (Banda)", desc: "Una pierna con banda.", target: 15, unit: 's', img: "https://placehold.co/600x400/1e293b/34d399?text=Single+Leg+(Banda)" },
            { id: 'fl_3', name: "Single Leg", desc: "Una pierna libre.", target: 15, unit: 's', img: "https://placehold.co/600x400/1e293b/34d399?text=Single+Leg" },
            { id: 'fl_4', name: "Full Front Lever", desc: "Cuerpo recto.", target: 10, unit: 's', img: "https://placehold.co/600x400/1e293b/34d399?text=Full+Front+Lever" }
        ]
    },
    vSit: {
        id: 'vSit',
        name: "Hito D: V-Sit",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        levels: [
            { id: 'vs_1', name: "L-Sit Sólido", desc: "Piernas a 90°.", target: 30, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=L-Sit" },
            { id: 'vs_2', name: "Tucked V-Sit", desc: "Rodillas arriba.", target: 20, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=Tucked+V-Sit" },
            { id: 'vs_3', name: "One-Legged V-Sit", desc: "Una pierna arriba.", target: 15, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=One-Leg+V-Sit" },
            { id: 'vs_4', name: "Straddle V-Sit", desc: "Piernas abiertas.", target: 15, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=Straddle+V-Sit" },
            { id: 'vs_5', name: "Full V-Sit", desc: "Cierre total.", target: 10, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=Full+V-Sit" }
        ]
    }
};
