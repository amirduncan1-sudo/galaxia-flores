document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);
    const nombreDe = urlParams.get('de') || 'Amir';
    const nombrePara = urlParams.get('para') || 'mi persona favorita';
    const trackName = urlParams.get('track') || 'Anna_Carina_Amandote.mp3#t=30,45';
    
    // --- Limpiar la URL visualmente ---
    window.history.replaceState({}, document.title, window.location.pathname);

    // Inyectamos los nombres en el HTML
    document.getElementById('nombre-de').textContent = nombreDe;
    document.getElementById('nombre-para').textContent = nombrePara;

    const flowersContainer = document.getElementById('flowers-container');
    const modal = document.getElementById('flower-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalPhrase = document.getElementById('modal-phrase');
    const modalIcon = document.getElementById('modal-icon');
    const musicPlayer = document.getElementById('music-player');

    // --- 1. GALAXIA CON PROFUNDIDAD Y NÚCLEO ---
    const galaxyCanvas = document.getElementById('galaxy-canvas');
    const gCtx = galaxyCanvas.getContext('2d');
    
    function drawGalaxy() {
        galaxyCanvas.width = window.innerWidth;
        galaxyCanvas.height = window.innerHeight;
        gCtx.clearRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);
        
        const cx = galaxyCanvas.width / 2;
        const cy = galaxyCanvas.height / 2;
        
        // Núcleo
        let coreGradient = gCtx.createRadialGradient(cx, cy, 0, cx, cy, galaxyCanvas.width * 0.3);
        coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)'); 
        coreGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.03)');
        coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        gCtx.fillStyle = coreGradient;
        gCtx.fillRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);

        // Galaxia principal 
        for (let i = 0; i < 4000; i++) {
            let r = Math.abs(Math.random() - Math.random()) * (galaxyCanvas.width > 600 ? 450 : 300); 
            let angle = Math.random() * Math.PI * 2;
            let x = r * Math.cos(angle);
            let y = r * Math.sin(angle) * 0.35; 

            let rot = 35 * Math.PI / 180;
            let finalX = cx + (x * Math.cos(rot) - y * Math.sin(rot));
            let finalY = cy + (x * Math.sin(rot) + y * Math.cos(rot));

            let zDepth = y / (r * 0.35 + 1); 
            let depthMultiplier = 1 + (zDepth * 0.3);

            let size = Math.random() * 1.5 * depthMultiplier;
            let opacity = (Math.random() * 0.7 + 0.1) * depthMultiplier;

            gCtx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            gCtx.beginPath();
            gCtx.arc(finalX, finalY, size, 0, Math.PI * 2);
            gCtx.fill();
        }

        // ANILLO AMARILLO INTERIOR
        let baseRadius = galaxyCanvas.width > 600 ? 280 : 160; 
        for (let i = 0; i < 1500; i++) {
            let r = baseRadius + (Math.random() - 0.5) * (baseRadius * 0.3); 
            let angle = Math.random() * Math.PI * 2;
            let x = r * Math.cos(angle);
            let y = r * Math.sin(angle) * 0.35;

            let rot = 35 * Math.PI / 180;
            let finalX = cx + (x * Math.cos(rot) - y * Math.sin(rot));
            let finalY = cy + (x * Math.sin(rot) + y * Math.cos(rot));

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

        // ANILLO BLANCO EXTERIOR 
        let outerRadius = baseRadius * 1.85; 
        for (let i = 0; i < 1200; i++) {
            let r = outerRadius + (Math.random() - 0.5) * (outerRadius * 0.15); 
            let angle = Math.random() * Math.PI * 2;
            let x = r * Math.cos(angle);
            let y = r * Math.sin(angle) * 0.35; 

            let rot = 35 * Math.PI / 180;
            let finalX = cx + (x * Math.cos(rot) - y * Math.sin(rot));
            let finalY = cy + (x * Math.sin(rot) + y * Math.cos(rot));

            let zDepth = y / (outerRadius * 0.35); 
            let depthMultiplier = 1 + (zDepth * 0.4);

            let size = (Math.random() * 1.2) * depthMultiplier; 
            let opacity = (Math.random() * 0.3 + 0.1) * depthMultiplier; 

            gCtx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            gCtx.beginPath();
            gCtx.arc(finalX, finalY, size, 0, Math.PI * 2);
            gCtx.fill();
        }

        // Estrellas de fondo 
        for(let i = 0; i < 2000; i++) {
            let opacity = Math.random() > 0.8 ? 0.6 : 0.15;
            let size = Math.random() > 0.8 ? 1.2 : 0.5;
            gCtx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            gCtx.beginPath();
            gCtx.arc(Math.random() * galaxyCanvas.width, Math.random() * galaxyCanvas.height, size, 0, Math.PI * 2);
            gCtx.fill();
        }
    }

    // --- 2. COMETA ---
    const cometCanvas = document.getElementById('comet-canvas');
    const cCtx = cometCanvas.getContext('2d');
    
    let cometDots = []; 
    let totalCometDots = 1000; 
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
        let tailLength = 120; 

        cCtx.clearRect(0, 0, cometCanvas.width, cometCanvas.height);

        for(let i = headIndex - tailLength; i <= headIndex; i++) {
            if (i < 0 || i >= totalCometDots) continue;

            let point = cometDots[i];
            let distanceToHead = headIndex - i; 
            
            let alpha = 1 - (distanceToHead / tailLength);
            
            let r, g, b;
            if (distanceToHead < 5) {
                r = 0; g = 220; b = 255; 
            } else if (distanceToHead < 30) {
                r = 255; g = 255; b = 200; 
            } else {
                r = 255; g = 215; b = 0; 
            }

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
    
    // --- 3. CONSTELACIONES Y LÍNEAS ---
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
        { type: 'phrase', text: "Gracias por ser mi refugio y mi paz todos los días. 💛", icon: "🌼" ,track: "I_Wanna_Be_Yours.mp3#t=32,59"},   
        { type: 'phrase', text: "Eres, sin duda, mi coincidencia favorita. 🥰", icon: "🌻" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Admiro lo maravillosa, fuerte e increíble que eres. 🌟", icon: "🏵️" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Tu sonrisa tiene el poder de iluminar todo mi universo. 🌌", icon: "✨" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Haces que mi mundo sea un lugar infinitamente mejor. 🌻", icon: "💛" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Eres muy importante para mí, más de lo que las palabras pueden expresar. ❤️", icon: "🌷" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Eres mi persona favorita en todo el mundo entero. 👫", icon: "🌺" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Gracias por tu paciencia infinita, tu amor y tu luz. 💖", icon: "🌸" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Aprecio cada pequeño momento y detalle que compartimos. 🕰️", icon: "🌻" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Conocerte fue el mejor regalo que me pudo dar la vida. 💙", icon: "🎁" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Mi corazón sonríe cada vez que pienso en ti. 😊", icon: "💓" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Eres mi lugar seguro y mi aventura más grande. 🚀", icon: "🌠" , track: "Anna_Carina_Amandote.mp3"},
        { type: 'phrase', text: "Me haces sentir que todo es posible. ✨", icon: "💫" , track: "Anna_Carina_Amandote.mp3#t=30,45"},
        { type: 'phrase', text: "Amo la forma en que ves el mundo y cómo me haces parte de él. 🌎", icon: "🌻" , track: "Anna_Carina_Amandote.mp3#t=30,45"},
        { type: 'phrase', text: "No hay momento ordinario si estoy a tu lado. 🌟", icon: "🌼" , track: "Anna_Carina_Amandote.mp3#t=30,45"},
        { type: 'phrase', text: "Llegaste a mi vida para llenarla de colores que no conocía. 🎨", icon: "🌺" , track: "Anna_Carina_Amandote.mp3#t=30,45"},
        { type: 'phrase', text: "Cada día encuentro una nueva razón para amarte más. 💖", icon: "🥰" , track: "Anna_Carina_Amandote.mp3#t=30,45"},
        { type: 'phrase', text: "Tu risa es la melodía que siempre quiero escuchar. 🎵", icon: "💐" , track: "Anna_Carina_Amandote.mp3#t=30,45"},
        { type: 'phrase', text: "Contigo, hasta el infinito y más allá. 🌌", icon: "💙" , track: "Anna_Carina_Amandote.mp3#t=30,45"},
        { type: 'song', text: "¡Encontraste la flor especial! 🎶 Disfruta nuestra canción.", icon: "🎧💛" , track: "Anna_Carina_Amandote.mp3#t=30,45"}
    ];

    // Comentamos la mezcla para poder probar fácilmente
    // flowerData.sort(() => Math.random() - 0.5);

   function abrirModal(data) {
        modalPhrase.textContent = data.text;
        modalIcon.innerHTML = data.icon; 
        
        const audioEl = document.getElementById('love-song');
        
        // Asignamos la ruta directa (sin hacer .load() para no interrumpir al celular)
        audioEl.src = data.track;
        
        // Mostramos el reproductor y el modal
        musicPlayer.classList.remove('hidden'); 
        modal.classList.remove('hidden');

        // Le damos play. Si el celular lo bloquea automáticamente, el usuario podrá darle Play al botón sin que marque 0:00
        audioEl.play().catch(e => console.log("El navegador pide que el usuario le de Play manualmente."));
    }

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

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        const audioEl = document.getElementById('love-song');
        audioEl.pause(); // Pausamos al cerrar
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            const audioEl = document.getElementById('love-song');
            audioEl.pause(); // Pausamos al cerrar
        }
    });

    // Iniciar todo
    renderCanvases();
    requestAnimationFrame(animateComet);

    // --- 5. PANTALLA DE CARGA ---
    const loadingScreen = document.getElementById('loading-screen');
    const text2 = document.getElementById('loading-text-2');
    
    setTimeout(() => { text2.classList.remove('hidden-text'); }, 3000); 
    setTimeout(() => { 
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden'; 
    }, 7000); 

    // --- 6. EFECTO PARALLAX (Giroscopio) ---
    const fContainer = document.getElementById('flowers-container');
    window.addEventListener('deviceorientation', (e) => {
        let x = Math.min(Math.max(e.gamma, -30), 30); 
        let y = Math.min(Math.max(e.beta - 45, -30), 30); 

        galaxyCanvas.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
        cometCanvas.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
        linesCanvas.style.transform = `translate(${x * 0.8}px, ${y * 0.8}px)`;
        fContainer.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
    });

    // --- 7. EASTER EGG (Recompensa Final) ---
    let easterMsg = document.createElement('div');
    easterMsg.id = 'easter-egg-message';
    easterMsg.innerHTML = '¡Has descubierto todo mi universo! ✨<br>Te amo.';
    document.body.appendChild(easterMsg);

    let floresDescubiertas = new Set(); 
    
    const todasLasFlores = document.querySelectorAll('.galaxy-flower');
    todasLasFlores.forEach((flor, index) => {
        flor.addEventListener('click', () => {
            floresDescubiertas.add(index);
            
            if (floresDescubiertas.size === constelaciones.length) {
                setTimeout(() => {
                    document.getElementById('flower-modal').classList.add('hidden');
                    easterMsg.style.opacity = '1';
                    
                    totalCometDots = 5000;
                    initCometPath();
                }, 2000); 
            }
        });
    });

});
