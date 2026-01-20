export const SETS_PER_SKILL = 4;
export const REST_TIME = 45;

export const SKILLS_DATA = {
    handstand: {
        id: 'handstand',
        name: "Hito A: Handstand",
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        levels: [
            { id: 'hs_1', name: "Wall Plank", desc: "Cara a la pared. Mantén la línea recta.", target: 60, unit: 's', img: "https://s3assets.skimble.com/assets/8497/wall-plank_full.jpg" },
            { id: 'hs_2', name: "Chest-to-Wall", desc: "Pecho a pared, retroversión pélvica.", target: 45, unit: 's', img: "https://i.ytimg.com/vi/n9-8hEEfWm4/maxresdefault.jpg" },
            { id: 'hs_3', name: "Wall Taps", desc: "Sepárate y toca hombros.", target: 15, unit: 'reps', img: "https://images.squarespace-cdn.com/content/v1/5008a3c6c4aa6450352d2303/1442956467225-7766FABHOJ7BGSZWU4DH/shoulder-taps.jpg" },
            { id: 'hs_4', name: "Kick-up Controlado", desc: "Intentos de subida.", target: 5, unit: 'reps', img: "https://placehold.co/600x400/1e293b/fb7185?text=Kick+Up" },
            { id: 'hs_5', name: "Freestanding HS", desc: "Equilibrio libre.", target: 30, unit: 's', img: "https://summerfunfitness.com/wp-content/uploads/2022/04/freestanding-handstand-push-up-progressions.jpg" }
        ]
    },
    planche: {
        id: 'planche',
        name: "Hito B: Planche",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        levels: [
            { id: 'p_1', name: "Planche Lean", desc: "Inclinación máxima, codos bloqueados.", target: 30, unit: 's', img: "https://i.ytimg.com/vi/i33vHrgElkE/sddefault.jpg" },
            { id: 'p_2', name: "Tuck Planche", desc: "Rodillas al pecho.", target: 20, unit: 's', img: "https://i.ytimg.com/vi/f30rLg3yBug/maxresdefault.jpg" },
            { id: 'p_3_b', name: "Adv. Tuck (Banda)", desc: "Espalda plana con banda.", target: 20, unit: 's', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZViRGD-Z9OuO81gdV_z2PXTzvQ4W_0sqkQ&s" },
            { id: 'p_3', name: "Adv. Tuck", desc: "Espalda plana sin banda.", target: 15, unit: 's', img: "https://placehold.co/600x400/1e293b/60a5fa?text=Adv+Tuck" },
            { id: 'p_4_b', name: "Straddle (Banda)", desc: "Piernas abiertas con banda.", target: 15, unit: 's', img: "https://i.ytimg.com/vi/MaOqGj30BZo/maxresdefault.jpg" },
            { id: 'p_4', name: "Straddle Planche", desc: "Piernas abiertas libre.", target: 10, unit: 's', img: "https://www.mpcalisthenics.com/wp-content/uploads/2020/04/Full-Straddle-Planche.jpg" },
            { id: 'p_5', name: "Full Planche", desc: "Cuerpo recto.", target: 10, unit: 's', img: "https://calisthenics.com/wp-content/uploads/2025/02/full-planche-exercise.jpg" }
        ]
    },
    frontLever: {
        id: 'frontLever',
        name: "Hito C: Front Lever",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        levels: [
            { id: 'fl_1', name: "Tuck Lever", desc: "Agrupamiento máximo.", target: 30, unit: 's', img: "https://i.ytimg.com/vi/lkGhntOoLNk/hqdefault.jpg" },
            { id: 'fl_2_b', name: "Adv. Tuck (Banda)", desc: "Espalda plana con banda.", target: 25, unit: 's', img: "https://res.cloudinary.com/rubberbanditz/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/wysiwyg/1._frog_1_.jpg?_i=AB" },
            { id: 'fl_2', name: "Adv. Tuck", desc: "Rodillas a 90°.", target: 20, unit: 's', img: "https://i.ytimg.com/vi/D-dOt8Ey5Ig/sddefault.jpg" },
            { id: 'fl_3_b', name: "Single Leg (Banda)", desc: "Una pierna con banda.", target: 15, unit: 's', img: "https://i.ytimg.com/vi/It7LAuTytJ0/maxresdefault.jpg" },
            { id: 'fl_3', name: "Single Leg", desc: "Una pierna libre.", target: 15, unit: 's', img: "https://calisthenics-family.com/wp-content/uploads/2021/03/How-to-Frontlever.png" },
            { id: 'fl_4', name: "Full Front Lever", desc: "Cuerpo recto.", target: 10, unit: 's', img: "https://i.ytimg.com/vi/e_YwP0O34zM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVcQj31WElD_AjxRfHiS98GhW-iw" }
        ]
    },
    vSit: {
        id: 'vSit',
        name: "Hito D: V-Sit",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        levels: [
            { id: 'vs_0a', name: "Tuck L-Sit", desc: "Rodillas al pecho, manos al suelo.", target: 30, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=Tuck+L-Sit" },
            { id: 'vs_0b', name: "One-Leg L-Sit", desc: "Una pierna estirada, otra encogida.", target: 20, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=One-Leg+L-Sit" },
            { id: 'vs_1', name: "L-Sit Sólido", desc: "Piernas a 90°.", target: 30, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=L-Sit" },
            { id: 'vs_2', name: "Tucked V-Sit", desc: "Rodillas arriba.", target: 20, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=Tucked+V-Sit" },
            { id: 'vs_3', name: "One-Legged V-Sit", desc: "Una pierna arriba.", target: 15, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=One-Leg+V-Sit" },
            { id: 'vs_4', name: "Straddle V-Sit", desc: "Piernas abiertas.", target: 15, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=Straddle+V-Sit" },
            { id: 'vs_5', name: "Full V-Sit", desc: "Cierre total.", target: 10, unit: 's', img: "https://placehold.co/600x400/1e293b/fbbf24?text=Full+V-Sit" }
        ]
    }
};
