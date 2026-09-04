document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nombreDe = urlParams.get('de') || 'Amir';
    const nombrePara = urlParams.get('para') || 'mi persona favorita';
    const trackName = urlParams.get('track') || 'nuestra_cancion.mp3';
    // Inyectamos los nombres en el HTML
    document.getElementById('nombre-de').textContent = nombreDe;
    document.getElementById('nombre-para').textContent = nombrePara;
    const audioSource = document.getElementById('audio-source');
    const audioEl = document.getElementById('love-song');
    audioSource.src = trackName;
    audioEl.load()
    const flowersContainer = document.getElementById('flowers-container');
    const modal = document.getElementById('flower-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalPhrase = document.getElementById('modal-phrase');
    const modalIcon = document.getElementById('modal-icon');
    const musicPlayer = document.getElementById('music-player');

    // --- 1. GALAXIA CON PROFUNDIDAD Y NÚCLEO ---
    const galaxyCanvas = document.getElementById('galaxy-canvas');
    const gCtx = galaxyCanvas.getContext('2d');
    
    // Reemplaza SOLO la función drawGalaxy() dentro de tu script.js

// Reemplaza SOLO esta función dentro de tu script.js

// Reemplaza SOLO esta función dentro de tu script.js

// Reemplaza SOLO esta función dentro de tu script.js

// Reemplaza SOLO esta función dentro de tu script.js

function drawGalaxy() {
    const galaxyCanvas = document.getElementById('galaxy-canvas');
    const gCtx = galaxyCanvas.getContext('2d');
    
    galaxyCanvas.width = window.innerWidth;
    galaxyCanvas.height = window.innerHeight;
    gCtx.clearRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);
    
    const cx = galaxyCanvas.width / 2;
    const cy = galaxyCanvas.height / 2;
    
    // 1. Núcleo de la galaxia (Blanco y sutil)
    let coreGradient = gCtx.createRadialGradient(cx, cy, 0, cx, cy, galaxyCanvas.width * 0.3);
    coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)'); 
    coreGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.03)');
    coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    gCtx.fillStyle = coreGradient;
    gCtx.fillRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);

    // 2. Galaxia principal (Miles de puntos blancos)
    for (let i = 0; i < 4000; i++) {
        let r = Math.abs(Math.random() - Math.random()) * (galaxyCanvas.width > 600 ? 450 : 300); 
        let angle = Math.random() * Math.PI * 2;
        let x = r * Math.cos(angle);
        let y = r * Math.sin(angle) * 0.35; 

        let rot = 35 * Math.PI / 180;
        let finalX = cx + (x * Math.cos(rot) - y * Math.sin(rot));
        let finalY = cy + (x * Math.sin(rot) + y * Math.cos(rot));

        // Simulador de profundidad (Z-Index falso)
        let zDepth = y / (r * 0.35 + 1); 
        let depthMultiplier = 1 + (zDepth * 0.3);

        let size = Math.random() * 1.5 * depthMultiplier;
        let opacity = (Math.random() * 0.7 + 0.1) * depthMultiplier;

        gCtx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        gCtx.beginPath();
        gCtx.arc(finalX, finalY, size, 0, Math.PI * 2);
        gCtx.fill();
    }

    // 3. EL ANILLO AMARILLO INTERIOR
    let baseRadius = galaxyCanvas.width > 600 ? 280 : 160; 
    
    for (let i = 0; i < 1500; i++) {
        let r = baseRadius + (Math.random() - 0.5) * (baseRadius * 0.3); 
        let angle = Math.random() * Math.PI * 2;
        let x = r * Math.cos(angle);
        let y = r * Math.sin(angle) * 0.35;

        let rot = 35 * Math.PI / 180;
        let finalX = cx + (x * Math.cos(rot) - y * Math.sin(rot));
        let finalY = cy + (x * Math.sin(rot) + y * Math.cos(rot));

        // Profundidad para el anillo amarillo (Más brillante al frente)
        let zDepth = y / (baseRadius * 0.35); 
        let depthMultiplier = 1 + (zDepth * 0.4); 

        let size = (Math.random() * 1.8 + 0.5) * depthMultiplier; 
        let opacity = (Math.random() * 0.7 + 0.2) * depthMultiplier;

        let rColor = 255;
        let gColor = 190 + Math.random() * 65; 
        let bColor = Math.random() * 80;

        gCtx.fillStyle = `rgba(${rColor}, ${gColor}, ${bColor}, ${opacity})`;
        gCtx.beginPath();
        gCtx.arc(finalX, finalY, size, 0, Math.PI * 2);
        gCtx.fill();
    }

    // 4. EL ANILLO BLANCO EXTERIOR (Ahora mucho más separado)
    let outerRadius = baseRadius * 1.85; 
    
    for (let i = 0; i < 1200; i++) {
        let r = outerRadius + (Math.random() - 0.5) * (outerRadius * 0.15); 
        let angle = Math.random() * Math.PI * 2;
        let x = r * Math.cos(angle);
        let y = r * Math.sin(angle) * 0.35; 

        let rot = 35 * Math.PI / 180;
        let finalX = cx + (x * Math.cos(rot) - y * Math.sin(rot));
        let finalY = cy + (x * Math.sin(rot) + y * Math.cos(rot));

        // Profundidad para el anillo exterior
        let zDepth = y / (outerRadius * 0.35); 
        let depthMultiplier = 1 + (zDepth * 0.4);

        let size = (Math.random() * 1.2) * depthMultiplier; 
        let opacity = (Math.random() * 0.3 + 0.1) * depthMultiplier; 

        gCtx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        gCtx.beginPath();
        gCtx.arc(finalX, finalY, size, 0, Math.PI * 2);
        gCtx.fill();
    }

    // 5. Estrellas de fondo dispersas
    for(let i = 0; i < 2000; i++) {
        let opacity = Math.random() > 0.8 ? 0.6 : 0.15;
        let size = Math.random() > 0.8 ? 1.2 : 0.5;
        gCtx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        gCtx.beginPath();
        gCtx.arc(Math.random() * galaxyCanvas.width, Math.random() * galaxyCanvas.height, size, 0, Math.PI * 2);
        gCtx.fill();
    }
}

    // --- 2. COMETA: RESOLUCIÓN FINA (Polvo estelar) ---
    const cometCanvas = document.getElementById('comet-canvas');
    const cCtx = cometCanvas.getContext('2d');
    
    let cometDots = []; 
    const totalCometDots = 1000; // Incrementado drásticamente para suavidad
    const cometDuration = 300000; 
    let cometStartTime = null;

    function initCometPath() {
        cometCanvas.width = window.innerWidth;
        cometCanvas.height = window.innerHeight;
        cometDots = [];
        
        let startX = cometCanvas.width + 50;
        let startY = -50;
        let endX = -50;
        let endY = cometCanvas.height + 50;

        for(let i = 0; i < totalCometDots; i++) {
            let progress = i / totalCometDots;
            cometDots.push({
                x: startX + (endX - startX) * progress,
                y: startY + (endY - startY) * progress
            });
        }
    }

    function animateComet(timestamp) {
        if (!cometStartTime) cometStartTime = timestamp;
        let elapsed = timestamp - cometStartTime;
        let progress = (elapsed % cometDuration) / cometDuration;
        
        let headIndex = Math.floor(progress * totalCometDots);
        let tailLength = 120; // Cola más larga y suave

        cCtx.clearRect(0, 0, cometCanvas.width, cometCanvas.height);

        for(let i = headIndex - tailLength; i <= headIndex; i++) {
            if (i < 0 || i >= totalCometDots) continue;

            let point = cometDots[i];
            let distanceToHead = headIndex - i; 
            
            let alpha = 1 - (distanceToHead / tailLength);
            
            let r, g, b;
            if (distanceToHead < 5) {
                r = 0; g = 220; b = 255; // Punta Celeste vibrante
            } else if (distanceToHead < 30) {
                r = 255; g = 255; b = 200; // Transición blanca
            } else {
                r = 255; g = 215; b = 0; // Estela amarilla
            }

            // Tamaños mucho más pequeños para que parezca humo/polvo, no círculos toscos
            let size = distanceToHead === 0 ? 2 : Math.max(0.3, 1.2 - (distanceToHead/100));

            cCtx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            cCtx.beginPath();
            cCtx.arc(point.x, point.y, size, 0, Math.PI * 2);
            cCtx.fill();
            
            if (distanceToHead === 0) {
                cCtx.shadowBlur = 15;
                cCtx.shadowColor = 'rgba(0, 191, 255, 1)';
                cCtx.fill();
                cCtx.shadowBlur = 0; 
            }
        }
        requestAnimationFrame(animateComet);
    }

    function renderCanvases() {
        drawGalaxy();
        initCometPath();
        drawConstellationLines();
    }
    window.addEventListener('resize', renderCanvases);
    
    // --- 3. CONSTELACIONES, FLORES Y LÍNEAS ---
    const constelaciones = [
        { top: 10, left: 15, scale: 0.9 }, { top: 18, left: 35, scale: 1.1 }, { top: 12, left: 55, scale: 0.8 }, { top: 20, left: 75, scale: 1.2 }, { top: 15, left: 90, scale: 0.7 },
        { top: 38, left: 10, scale: 1.0 }, { top: 45, left: 25, scale: 0.9 }, { top: 48, left: 40, scale: 0.8 }, { top: 58, left: 50, scale: 1.2 }, { top: 62, left: 68, scale: 0.9 }, { top: 52, left: 75, scale: 1.1 }, { top: 45, left: 60, scale: 1.3 },
        { top: 75, left: 85, scale: 0.9 }, { top: 78, left: 70, scale: 1.1 }, { top: 76, left: 55, scale: 0.8 }, { top: 82, left: 40, scale: 1.2 }, { top: 88, left: 30, scale: 0.7 }, { top: 95, left: 20, scale: 1.0 }, { top: 92, left: 35, scale: 0.9 }, { top: 96, left: 48, scale: 1.1 }, { top: 92, left: 60, scale: 0.8 }
    ];

    const linesCanvas = document.getElementById('lines-canvas');
    const lCtx = linesCanvas.getContext('2d');
    const lineGroups = [
        [0, 1, 2, 3, 4], 
        [5, 6, 7, 8, 9, 10, 11, 7], 
        [12, 13, 14, 15, 16, 17, 18, 19, 20] 
    ];

    function drawConstellationLines() {
        lCtx.clearRect(0, 0, linesCanvas.width, linesCanvas.height);
        lCtx.strokeStyle = 'rgba(255, 255, 255, 0.4)'; 
        lCtx.lineWidth = 1.5;
        lCtx.setLineDash([5, 5]); 
        lineGroups.forEach(group => {
            lCtx.beginPath();
            for(let i = 0; i < group.length; i++) {
                const index = group[i];
                const x = (constelaciones[index].left / 100) * linesCanvas.width;
                const y = (constelaciones[index].top / 100) * linesCanvas.height;
                if(i === 0) lCtx.moveTo(x, y); else lCtx.lineTo(x, y);
            }
            lCtx.stroke();
        });
    }

    // --- 4. TEXTOS Y FLORES ---
    const flowerData = [
        { type: 'phrase', text: "Gracias por ser mi refugio y mi paz todos los días. 💛", icon: "🌼" },
        { type: 'phrase', text: "Cada día a tu lado es una nueva y hermosa aventura. ✨", icon: "💐" },
        { type: 'phrase', text: "Eres, sin duda, mi coincidencia favorita. 🥰", icon: "🌻" },
        { type: 'phrase', text: "Admiro lo maravillosa, fuerte e increíble que eres. 🌟", icon: "🏵️" },
        { type: 'phrase', text: "Tu sonrisa tiene el poder de iluminar todo mi universo. 🌌", icon: "✨" },
        { type: 'phrase', text: "Haces que mi mundo sea un lugar infinitamente mejor. 🌻", icon: "💛" },
        { type: 'phrase', text: "Te amo muchísimo más de lo que las palabras pueden expresar. ❤️", icon: "🌷" },
        { type: 'phrase', text: "Eres mi persona favorita en todo el mundo entero. 👫", icon: "🌺" },
        { type: 'phrase', text: "Gracias por tu paciencia infinita, tu amor y tu luz. 💖", icon: "🌸" },
        { type: 'phrase', text: "Aprecio cada pequeño momento y detalle que compartimos. 🕰️", icon: "🌻" },
        { type: 'phrase', text: "Conocerte fue el mejor regalo que me pudo dar la vida. 💙", icon: "🎁" },
        { type: 'phrase', text: "Mi corazón sonríe cada vez que pienso en ti. 😊", icon: "💓" },
        { type: 'phrase', text: "Eres mi lugar seguro y mi aventura más grande. 🚀", icon: "🌠" },
        { type: 'phrase', text: "Me haces sentir que todo es posible. ✨", icon: "💫" },
        { type: 'phrase', text: "Amo la forma en que ves el mundo y cómo me haces parte de él. 🌎", icon: "🌻" },
        { type: 'phrase', text: "No hay momento ordinario si estoy a tu lado. 🌟", icon: "🌼" },
        { type: 'phrase', text: "Llegaste a mi vida para llenarla de colores que no conocía. 🎨", icon: "🌺" },
        { type: 'phrase', text: "Cada día encuentro una nueva razón para amarte más. 💖", icon: "🥰" },
        { type: 'phrase', text: "Tu risa es la melodía que siempre quiero escuchar. 🎵", icon: "💐" },
        { type: 'phrase', text: "Contigo, hasta el infinito y más allá. 🌌", icon: "💙" },
        { type: 'song', text: "¡Encontraste la flor especial! 🎶 Disfruta nuestra canción.", icon: "🎧💛" }
    ];

    flowerData.sort(() => Math.random() - 0.5);

    constelaciones.forEach((pos, index) => {
        let flower = document.createElement('div');
        flower.classList.add('galaxy-flower');
        flower.innerHTML = '🌻'; 
        flower.style.top = `${pos.top}vh`;
        flower.style.left = `${pos.left}vw`;
        flower.style.setProperty('--scale', pos.scale); 
        flower.style.animationDelay = `${Math.random() * 2}s`;

        const data = flowerData[index];
        flower.addEventListener('click', () => abrirModal(data));
        flowersContainer.appendChild(flower);
    });

    function abrirModal(data) {
        modalPhrase.textContent = data.text;
        modalIcon.innerHTML = data.icon; 
        if (data.type === 'song') {
            musicPlayer.classList.remove('hidden');
        } else {
            musicPlayer.classList.add('hidden');
            audioEl.pause(); 
        }
        modal.classList.remove('hidden');
    }

    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    // Iniciar todo
    renderCanvases();
    requestAnimationFrame(animateComet);

    // --- 1. PANTALLA DE CARGA ---
    const loadingScreen = document.getElementById('loading-screen');
    const text2 = document.getElementById('loading-text-2');
    
    // Secuencia de tiempos (Timeouts)
    setTimeout(() => { text2.classList.remove('hidden-text'); }, 3000); // Aparece la segunda frase
    setTimeout(() => { 
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden'; 
    }, 7000); // A los 7 segundos se desvanece todo y muestra la galaxia

    // --- 2. EFECTO PARALLAX (Giroscopio) ---
    const gCanvas = document.getElementById('galaxy-canvas');
    const fContainer = document.getElementById('flowers-container');
    const cCanvas = document.getElementById('comet-canvas');
    const lCanvas = document.getElementById('lines-canvas');

    window.addEventListener('deviceorientation', (e) => {
        // Limitamos los grados para que no se salga de la pantalla
        let x = Math.min(Math.max(e.gamma, -30), 30); // Izquierda/Derecha
        let y = Math.min(Math.max(e.beta - 45, -30), 30); // Arriba/Abajo (Asume celular inclinado 45°)

        // Movemos el fondo poco, y las flores mucho (Efecto 3D Real)
        gCanvas.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
        cCanvas.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
        lCanvas.style.transform = `translate(${x * 0.8}px, ${y * 0.8}px)`;
        fContainer.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
    });

    // --- 3. EASTER EGG (Recompensa Final) ---
    // Creamos el contenedor del mensaje final
    let easterMsg = document.createElement('div');
    easterMsg.id = 'easter-egg-message';
    easterMsg.innerHTML = '¡Has descubierto todo mi universo! ✨<br>Te amo.';
    document.body.appendChild(easterMsg);

    // Set para no contar la misma flor dos veces
    let floresDescubiertas = new Set(); 
    
    // Seleccionamos todas las flores creadas
    const todasLasFlores = document.querySelectorAll('.galaxy-flower');
    todasLasFlores.forEach((flor, index) => {
        flor.addEventListener('click', () => {
            floresDescubiertas.add(index);
            
            // Si descubrió las 21 flores... ¡Sorpresa!
            if (floresDescubiertas.size === constelaciones.length) {
                setTimeout(() => {
                    document.getElementById('flower-modal').classList.add('hidden');
                    easterMsg.style.opacity = '1';
                    
                    // Lluvia masiva de estrellas (Agregamos más puntos al cometa temporalmente)
                    totalCometDots = 5000;
                    initCometPath();
                }, 2000); // 2 segundos después de abrir la última flor
            }
        });
    });
}


);