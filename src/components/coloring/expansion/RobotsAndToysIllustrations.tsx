import React from "react";

export function renderRobotsAndToys(slug: string): React.ReactNode | null {
  switch (slug) {
    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 15: ROBOTS & FUTURE TECHNOLOGY
    // ══════════════════════════════════════════════════════════════════
    case "friendly-helper-bot-waving-coloring-page":
    case "friendly-humanoid-companion-robot-coloring-page":
      return (
        <g>
          {/* Boxy robot torso */}
          <rect x="130" y="170" width="140" height="110" rx="20" fill="#fff" strokeWidth={4} />
          {/* Heart gauge / battery level meter on chest */}
          <rect x="160" y="200" width="80" height="40" rx="8" fill="#fff" strokeWidth={2.5} />
          <path d="M190 220 L195 210 L200 230 L205 215 L210 220" fill="none" strokeWidth={3} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" />
          {/* Screen head with rounded corners */}
          <rect x="140" y="80" width="120" height="80" rx="20" fill="#fff" strokeWidth={4} />
          {/* Antenna with ball tip */}
          <line x1="200" y1="80" x2="200" y2="45" strokeWidth={3.5} stroke="#111827" />
          <circle cx="200" cy="40" r="10" fill="#fff" strokeWidth={3} />
          {/* Friendly LED digital eyes & smile */}
          <rect x="165" y="105" width="20" height="20" rx="4" fill="#111827" />
          <rect x="215" y="105" width="20" height="20" rx="4" fill="#111827" />
          <path d="M180 140 Q200 152 220 140" fill="none" strokeWidth={3} strokeLinecap="round" />
          {/* Ear bolts */}
          <rect x="125" y="105" width="15" height="25" rx="3" fill="#111827" />
          <rect x="260" y="105" width="15" height="25" rx="3" fill="#111827" />
          {/* Waving right arm with clamp hand */}
          <path d="M130 190 L80 160 L60 120" fill="none" strokeWidth={10} stroke="#fff" />
          <path d="M130 190 L80 160 L60 120" fill="none" strokeWidth={3.5} stroke="#111827" />
          <path d="M50 110 C40 125, 75 125, 65 110" fill="none" strokeWidth={4} />
          {/* Left arm with clamp hand */}
          <path d="M270 190 L310 220 L300 250" fill="none" strokeWidth={10} stroke="#fff" />
          <path d="M270 190 L310 220 L300 250" fill="none" strokeWidth={3.5} stroke="#111827" />
          <path d="M310 250 C320 265, 285 265, 295 250" fill="none" strokeWidth={4} />
          {/* Sturdy robot legs */}
          <rect x="155" y="280" width="35" height="60" rx="8" fill="#fff" strokeWidth={3.5} />
          <rect x="210" y="280" width="35" height="60" rx="8" fill="#fff" strokeWidth={3.5} />
          <rect x="145" y="335" width="55" height="20" rx="5" fill="#111827" />
          <rect x="200" y="335" width="55" height="20" rx="5" fill="#111827" />
        </g>
      );

    case "planetary-rover-on-alien-soil-coloring-page":
    case "mars-exploration-rover-on-red-planet-coloring-page":
      return (
        <g>
          {/* Rocky Martian terrain and crater horizon */}
          <path d="M30 340 Q160 310 370 340" fill="none" strokeWidth={3.5} />
          <circle cx="80" cy="350" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="310" cy="350" r="10" fill="#fff" strokeWidth={2.5} />
          {/* Rover rectangular body chassis */}
          <rect x="110" y="190" width="180" height="65" rx="10" fill="#fff" strokeWidth={4} />
          {/* High camera mast head */}
          <line x1="160" y1="190" x2="160" y2="100" strokeWidth={6} stroke="#111827" />
          <rect x="140" y="70" width="40" height="30" rx="6" fill="#fff" strokeWidth={3.5} />
          <circle cx="152" cy="85" r="7" fill="#111827" />
          <circle cx="168" cy="85" r="7" fill="#111827" />
          {/* Robotic sample collection arm */}
          <line x1="280" y1="210" x2="330" y2="250" strokeWidth={6} stroke="#111827" />
          <circle cx="335" cy="255" r="12" fill="#fff" strokeWidth={3} />
          {/* Rocker-bogie 6 rover wheels */}
          <circle cx="100" cy="295" r="24" fill="#fff" strokeWidth={3.5} />
          <circle cx="100" cy="295" r="8" fill="#111827" />
          <circle cx="190" cy="295" r="24" fill="#fff" strokeWidth={3.5} />
          <circle cx="190" cy="295" r="8" fill="#111827" />
          <circle cx="280" cy="295" r="24" fill="#fff" strokeWidth={3.5} />
          <circle cx="280" cy="295" r="8" fill="#111827" />
          {/* Wheel suspension rockers */}
          <line x1="100" y1="295" x2="150" y2="240" strokeWidth={4} stroke="#111827" />
          <line x1="190" y1="295" x2="150" y2="240" strokeWidth={4} stroke="#111827" />
          <line x1="280" y1="295" x2="240" y2="240" strokeWidth={4} stroke="#111827" />
        </g>
      );

    case "cute-drone-delivering-package-coloring-page":
    case "flying-quadcopter-drone-with-camera-coloring-page":
      return (
        <g>
          {/* Central aerodynamic drone pod */}
          <ellipse cx="200" cy="180" rx="55" ry="35" fill="#fff" strokeWidth={4} />
          {/* Center gimbal camera / cute eye visor */}
          <circle cx="200" cy="180" r="16" fill="#111827" />
          <circle cx="196" cy="176" r="4" fill="#fff" stroke="none" />
          {/* Four angled carbon motor arms */}
          <line x1="165" y1="160" x2="80" y2="100" strokeWidth={8} stroke="#111827" strokeLinecap="round" />
          <line x1="235" y1="160" x2="320" y2="100" strokeWidth={8} stroke="#111827" strokeLinecap="round" />
          <line x1="165" y1="195" x2="90" y2="250" strokeWidth={8} stroke="#111827" strokeLinecap="round" />
          <line x1="235" y1="195" x2="310" y2="250" strokeWidth={8} stroke="#111827" strokeLinecap="round" />
          {/* Four propeller rotors */}
          <ellipse cx="80" cy="95" rx="45" ry="10" fill="#fff" strokeWidth={3} transform="rotate(-15 80 95)" />
          <circle cx="80" cy="95" r="6" fill="#111827" />
          <ellipse cx="320" cy="95" rx="45" ry="10" fill="#fff" strokeWidth={3} transform="rotate(15 320 95)" />
          <circle cx="320" cy="95" r="6" fill="#111827" />
          <ellipse cx="90" cy="255" rx="45" ry="10" fill="#fff" strokeWidth={3} transform="rotate(15 90 255)" />
          <circle cx="90" cy="255" r="6" fill="#111827" />
          <ellipse cx="310" cy="255" rx="45" ry="10" fill="#fff" strokeWidth={3} transform="rotate(-15 310 255)" />
          <circle cx="310" cy="255" r="6" fill="#111827" />
          {/* Delivery parcel suspended beneath */}
          <line x1="180" y1="210" x2="180" y2="260" strokeWidth={2.5} stroke="#111827" />
          <line x1="220" y1="210" x2="220" y2="260" strokeWidth={2.5} stroke="#111827" />
          <rect x="165" y="260" width="70" height="60" rx="5" fill="#fff" strokeWidth={3.5} />
          <line x1="200" y1="260" x2="200" y2="320" strokeWidth={2} />
          <line x1="165" y1="290" x2="235" y2="290" strokeWidth={2} />
        </g>
      );

    case "factory-robotic-arm-assembling-coloring-page":
    case "robotic-mechanical-arm-assembling-gadget-coloring-page":
      return (
        <g>
          {/* Industrial robotic base turntable */}
          <ellipse cx="100" cy="330" rx="60" ry="20" fill="#fff" strokeWidth={4} />
          <rect x="75" y="270" width="50" height="60" rx="5" fill="#fff" strokeWidth={3.5} />
          {/* First articulated arm boom */}
          <line x1="100" y1="270" x2="160" y2="150" strokeWidth={18} stroke="#fff" />
          <line x1="100" y1="270" x2="160" y2="150" strokeWidth={4} stroke="#111827" />
          <circle cx="100" cy="270" r="14" fill="#111827" />
          {/* Pivot elbow joint */}
          <circle cx="160" cy="150" r="18" fill="#fff" strokeWidth={3.5} />
          <circle cx="160" cy="150" r="8" fill="#111827" />
          {/* Second articulated forearm reaching down */}
          <line x1="160" y1="150" x2="270" y2="220" strokeWidth={16} stroke="#fff" />
          <line x1="160" y1="150" x2="270" y2="220" strokeWidth={4} stroke="#111827" />
          {/* Wrist joint and precision dual gripper pincer */}
          <circle cx="270" cy="220" r="12" fill="#111827" />
          <path d="M260 230 L250 260 L270 265" fill="none" strokeWidth={3.5} />
          <path d="M280 230 L290 260 L270 265" fill="none" strokeWidth={3.5} />
          {/* Microchip / gadget being assembled */}
          <rect x="255" y="270" width="30" height="30" rx="3" fill="#fff" strokeWidth={2.5} />
          <line x1="260" y1="285" x2="280" y2="285" strokeWidth={1.5} />
        </g>
      );

    case "underwater-submersible-drone-coloring-page":
      return (
        <g>
          {/* Water bubbles */}
          <circle cx="70" cy="100" r="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="110" cy="70" r="8" fill="#fff" strokeWidth={2} />
          <circle cx="330" cy="90" r="10" fill="#fff" strokeWidth={2} />
          {/* Submarine drone oval body */}
          <ellipse cx="200" cy="210" rx="100" ry="60" fill="#fff" strokeWidth={4} />
          {/* Forward glass observation dome */}
          <path d="M120 180 C95 190 95 230 120 240 Z" fill="#fff" strokeWidth={3.5} />
          <circle cx="110" cy="210" r="6" fill="#111827" />
          {/* Heavy twin thrusters on rear */}
          <rect x="280" y="175" width="40" height="25" rx="5" fill="#fff" strokeWidth={3} />
          <rect x="280" y="220" width="40" height="25" rx="5" fill="#fff" strokeWidth={3} />
          <line x1="320" y1="175" x2="335" y2="187" strokeWidth={3} />
          <line x1="320" y1="200" x2="335" y2="187" strokeWidth={3} />
          <line x1="320" y1="220" x2="335" y2="232" strokeWidth={3} />
          <line x1="320" y1="245" x2="335" y2="232" strokeWidth={3} />
          {/* Headlight beams */}
          <polygon points="100,195 40,160 40,260 100,225" fill="#fff" strokeWidth={2} strokeDasharray="6 4" />
          {/* Articulated claw arm beneath */}
          <path d="M160 260 L140 310 L160 330" fill="none" strokeWidth={4} stroke="#111827" />
          <path d="M150 330 C155 345 170 340 165 330" fill="none" strokeWidth={3} />
          {/* Sea floor coral */}
          <path d="M30 350 Q100 330 200 350 T370 350" fill="none" strokeWidth={3} />
          <path d="M280 350 Q290 310 310 320 Q330 310 340 350" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "robotic-pet-puppy-sitting-coloring-page":
    case "robotic-pet-dog-with-wagging-antenna-tail-coloring-page":
      return (
        <g>
          {/* Metallic cyber-puppy body */}
          <rect x="140" y="180" width="150" height="90" rx="25" fill="#fff" strokeWidth={4} />
          {/* Digital screen collar */}
          <rect x="140" y="175" width="25" height="40" rx="5" fill="#111827" />
          {/* Robot head */}
          <rect x="80" y="110" width="90" height="75" rx="18" fill="#fff" strokeWidth={4} />
          {/* Floppy metallic ears */}
          <rect x="70" y="110" width="18" height="45" rx="8" fill="#111827" />
          {/* Glowing LED visor eyes */}
          <ellipse cx="115" cy="140" rx="10" ry="12" fill="#111827" />
          <circle cx="113" cy="137" r="3" fill="#fff" stroke="none" />
          {/* Small audio speaker nose */}
          <circle cx="85" cy="155" r="6" fill="#111827" />
          {/* Spring antenna tail with glowing tip wagging */}
          <path d="M290 190 Q330 160 340 110" fill="none" strokeWidth={4} stroke="#111827" strokeLinecap="round" />
          <circle cx="340" cy="105" r="10" fill="#fff" strokeWidth={3} />
          {/* Segmented legs with wheel-padded paws */}
          <rect x="150" y="270" width="22" height="55" rx="6" fill="#fff" strokeWidth={3} />
          <circle cx="161" cy="330" r="12" fill="#111827" />
          <rect x="250" y="270" width="22" height="55" rx="6" fill="#fff" strokeWidth={3} />
          <circle cx="261" cy="330" r="12" fill="#111827" />
        </g>
      );

    case "dancing-humanoid-robot-coloring-page":
      return (
        <g>
          {/* Cheerful dancing humanoid robot in fun pose */}
          {/* Musical sound wave notes floating around */}
          <circle cx="80" cy="80" r="7" fill="#111827" />
          <line x1="87" y1="80" x2="87" y2="55" strokeWidth={3} />
          <line x1="87" y1="55" x2="105" y2="50" strokeWidth={3} />
          <circle cx="105" cy="75" r="7" fill="#111827" />
          <line x1="112" y1="75" x2="112" y2="50" strokeWidth={3} />
          {/* Rounded robot head tilted */}
          <ellipse cx="190" cy="95" rx="45" ry="38" fill="#fff" strokeWidth={4} transform="rotate(-10 190 95)" />
          {/* Visor glasses eyes */}
          <rect x="165" y="85" width="55" height="18" rx="8" fill="#111827" transform="rotate(-10 190 95)" />
          <circle cx="178" cy="92" r="3" fill="#fff" stroke="none" />
          <circle cx="205" cy="88" r="3" fill="#fff" stroke="none" />
          {/* Head antenna with music pulse */}
          <line x1="185" y1="58" x2="180" y2="35" strokeWidth={3} stroke="#111827" />
          <circle cx="180" cy="32" r="6" fill="#111827" />
          {/* Torso */}
          <rect x="145" y="145" width="90" height="90" rx="18" fill="#fff" strokeWidth={4} />
          <circle cx="190" cy="190" r="24" fill="#fff" strokeWidth={3} />
          <polygon points="185,180 200,190 185,200" fill="#111827" />
          {/* Left arm raised high in dance move */}
          <path d="M145 160 L100 130 L80 90" fill="none" strokeWidth={10} stroke="#fff" />
          <path d="M145 160 L100 130 L80 90" fill="none" strokeWidth={3.5} stroke="#111827" />
          <circle cx="80" cy="90" r="10" fill="#111827" />
          {/* Right arm bent on hip */}
          <path d="M235 160 L280 180 L260 215" fill="none" strokeWidth={10} stroke="#fff" />
          <path d="M235 160 L280 180 L260 215" fill="none" strokeWidth={3.5} stroke="#111827" />
          <circle cx="260" cy="215" r="10" fill="#111827" />
          {/* Groovy dancing legs */}
          <path d="M165 235 L150 290 L130 330" fill="none" strokeWidth={12} stroke="#fff" />
          <path d="M165 235 L150 290 L130 330" fill="none" strokeWidth={3.5} stroke="#111827" />
          <ellipse cx="125" cy="335" rx="20" ry="12" fill="#111827" />
          <path d="M215 235 L235 285 L260 325" fill="none" strokeWidth={12} stroke="#fff" />
          <path d="M215 235 L235 285 L260 325" fill="none" strokeWidth={3.5} stroke="#111827" />
          <ellipse cx="265" cy="330" rx="20" ry="12" fill="#111827" />
        </g>
      );

    case "eco-gardening-bot-with-plant-coloring-page":
      return (
        <g>
          {/* Greenhouse dome robot head with sprout antenna */}
          <path d="M140 140 C140 90 260 90 260 140 Z" fill="#fff" strokeWidth={4} />
          {/* Sprout antenna */}
          <path d="M200 90 Q200 65 190 55 M190 55 Q205 50 210 65" fill="none" strokeWidth={3} stroke="#111827" strokeLinecap="round" />
          {/* Friendly big round robot eyes */}
          <circle cx="175" cy="120" r="12" fill="#111827" />
          <circle cx="172" cy="116" r="3.5" fill="#fff" stroke="none" />
          <circle cx="225" cy="120" r="12" fill="#111827" />
          <circle cx="222" cy="116" r="3.5" fill="#fff" stroke="none" />
          {/* Torso chassis */}
          <rect x="140" y="145" width="120" height="90" rx="15" fill="#fff" strokeWidth={4} />
          {/* Leaf emblem on chest */}
          <path d="M190 200 C190 175 215 175 215 200 C215 215 190 215 190 200 Z" fill="#111827" />
          {/* Watering can spout arm */}
          <path d="M140 170 L95 190 L85 220" fill="none" strokeWidth={4} stroke="#111827" />
          <ellipse cx="85" cy="225" rx="14" ry="7" fill="#fff" strokeWidth={3} />
          {/* Water droplets */}
          <circle cx="85" cy="250" r="3" fill="#111827" />
          <circle cx="90" cy="265" r="3" fill="#111827" />
          {/* Other arm carrying trowel */}
          <path d="M260 170 L295 195 L290 230" fill="none" strokeWidth={4} stroke="#111827" />
          <polygon points="285,230 295,230 290,250" fill="#111827" />
          {/* Tank tread base */}
          <rect x="120" y="245" width="160" height="35" rx="17" fill="#fff" strokeWidth={4} />
          <circle cx="145" cy="262" r="10" fill="#111827" />
          <circle cx="180" cy="262" r="10" fill="#111827" />
          <circle cx="215" cy="262" r="10" fill="#111827" />
          <circle cx="250" cy="262" r="10" fill="#111827" />
          {/* Sprouting potted plant being nurtured */}
          <polygon points="60,335 110,335 102,280 68,280" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="85" cy="280" rx="20" ry="7" fill="#fff" strokeWidth={2.5} />
          <path d="M85 280 Q85 250 85 240 Q75 235 70 245" fill="none" strokeWidth={3} stroke="#111827" />
          <path d="M85 250 Q95 240 100 248" fill="none" strokeWidth={3} stroke="#111827" />
        </g>
      );

    case "smart-disc-robotic-vacuum-coloring-page":
      return (
        <g>
          {/* Floorboard perspective lines */}
          <line x1="30" y1="340" x2="370" y2="340" strokeWidth={3} stroke="#111827" />
          <line x1="120" y1="340" x2="90" y2="380" strokeWidth={2} />
          <line x1="280" y1="340" x2="310" y2="380" strokeWidth={2} />
          {/* Round robotic vacuum disc body */}
          <ellipse cx="200" cy="230" rx="130" ry="75" fill="#fff" strokeWidth={4.5} />
          {/* Front bumper shadow line */}
          <path d="M80 230 C90 290 310 290 320 230" fill="none" strokeWidth={3} />
          {/* Raised LIDAR navigation turret in center */}
          <ellipse cx="200" cy="195" rx="40" ry="22" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="200" cy="190" rx="28" ry="14" fill="#111827" />
          {/* Power button icon */}
          <circle cx="200" cy="245" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="200" cy="245" r="5" fill="#111827" />
          {/* Whirling edge sweeper brushes */}
          <path d="M90 270 Q60 290 80 310" fill="none" strokeWidth={2.5} strokeLinecap="round" />
          <path d="M85 270 Q50 280 70 300" fill="none" strokeWidth={2.5} strokeLinecap="round" />
          <path d="M310 270 Q340 290 320 310" fill="none" strokeWidth={2.5} strokeLinecap="round" />
          <path d="M315 270 Q350 280 330 300" fill="none" strokeWidth={2.5} strokeLinecap="round" />
          {/* Charging dock against the wall */}
          <rect x="290" y="110" width="70" height="60" rx="8" fill="#fff" strokeWidth={3.5} />
          <circle cx="325" cy="135" r="6" fill="#111827" />
        </g>
      );

    case "space-station-repair-drone-coloring-page":
    case "solar-powered-satellite-in-earth-orbit-coloring-page":
      return (
        <g>
          {/* Earth curve in bottom corner */}
          <path d="M20 380 C80 260, 260 260, 380 380" fill="#fff" strokeWidth={4} />
          <path d="M120 320 Q160 300 200 320" fill="none" strokeWidth={2.5} />
          {/* Central gold foil satellite bus */}
          <rect x="170" y="140" width="60" height="70" rx="8" fill="#fff" strokeWidth={4} />
          {/* Dish antenna pointing to Earth */}
          <path d="M180 210 C180 240, 220 240, 220 210 Z" fill="#fff" strokeWidth={3} />
          <line x1="200" y1="225" x2="200" y2="250" strokeWidth={3} stroke="#111827" />
          <circle cx="200" cy="250" r="4" fill="#111827" />
          {/* Left solar panel wing array */}
          <rect x="30" y="150" width="120" height="50" rx="3" fill="#fff" strokeWidth={3.5} />
          <line x1="70" y1="150" x2="70" y2="200" strokeWidth={2} />
          <line x1="110" y1="150" x2="110" y2="200" strokeWidth={2} />
          <line x1="30" y1="175" x2="150" y2="175" strokeWidth={2} />
          <line x1="150" y1="175" x2="170" y2="175" strokeWidth={4} stroke="#111827" />
          {/* Right solar panel wing array */}
          <rect x="250" y="150" width="120" height="50" rx="3" fill="#fff" strokeWidth={3.5} />
          <line x1="290" y1="150" x2="290" y2="200" strokeWidth={2} />
          <line x1="330" y1="150" x2="330" y2="200" strokeWidth={2} />
          <line x1="250" y1="175" x2="370" y2="175" strokeWidth={2} />
          <line x1="230" y1="175" x2="250" y2="175" strokeWidth={4} stroke="#111827" />
        </g>
      );

    case "retro-tin-toy-clockwork-wind-up-robot-coloring-page":
      return (
        <g>
          {/* Boxy tin body */}
          <rect x="130" y="160" width="140" height="120" rx="10" fill="#fff" strokeWidth={4} />
          {/* Chest analog meters & dial needles */}
          <circle cx="170" cy="200" r="22" fill="#fff" strokeWidth={2.5} />
          <line x1="170" y1="200" x2="180" y2="190" strokeWidth={2.5} stroke="#111827" />
          <circle cx="230" cy="200" r="22" fill="#fff" strokeWidth={2.5} />
          <line x1="230" y1="200" x2="222" y2="190" strokeWidth={2.5} stroke="#111827" />
          <rect x="160" y="240" width="80" height="20" rx="4" fill="#111827" />
          {/* Boxy head */}
          <rect x="145" y="70" width="110" height="80" rx="8" fill="#fff" strokeWidth={4} />
          {/* Antenna */}
          <line x1="200" y1="70" x2="200" y2="35" strokeWidth={3} stroke="#111827" />
          <circle cx="200" cy="30" r="8" fill="#111827" />
          {/* Slit visor eyes & grill mouth */}
          <circle cx="175" cy="100" r="8" fill="#111827" />
          <circle cx="225" cy="100" r="8" fill="#111827" />
          <rect x="170" y="120" width="60" height="15" rx="2" fill="#fff" strokeWidth={2} />
          <line x1="185" y1="120" x2="185" y2="135" strokeWidth={1.5} />
          <line x1="200" y1="120" x2="200" y2="135" strokeWidth={1.5} />
          <line x1="215" y1="120" x2="215" y2="135" strokeWidth={1.5} />
          {/* Iconic brass wind-up key protruding from side */}
          <rect x="270" y="210" width="25" height="10" fill="#111827" />
          <circle cx="310" cy="215" r="18" fill="#fff" strokeWidth={3.5} />
          <circle cx="310" cy="215" r="8" fill="#111827" />
          {/* Corrugated accordion legs and tin boots */}
          <rect x="150" y="280" width="35" height="50" fill="#fff" strokeWidth={3} />
          <rect x="215" y="280" width="35" height="50" fill="#fff" strokeWidth={3} />
          <rect x="140" y="330" width="55" height="25" rx="5" fill="#111827" />
          <rect x="205" y="330" width="55" height="25" rx="5" fill="#111827" />
        </g>
      );

    case "futuristic-flying-sky-car-over-cityscape-coloring-page":
      return (
        <g>
          {/* Cityscape skyline spires in background */}
          <polygon points="50,350 50,220 90,200 90,350" fill="#fff" strokeWidth={2.5} />
          <polygon points="110,350 110,160 150,130 150,350" fill="#fff" strokeWidth={2.5} />
          <polygon points="260,350 260,180 300,150 300,350" fill="#fff" strokeWidth={2.5} />
          <polygon points="320,350 320,240 360,220 360,350" fill="#fff" strokeWidth={2.5} />
          {/* Sleek aerodynamic hover sky-car */}
          <path d="M70 200 C110 130, 270 130, 330 200 C350 220, 310 240, 260 250 C180 255, 100 245, 70 200 Z" fill="#fff" strokeWidth={4} />
          {/* Panoramic glass bubble cockpit canopy */}
          <path d="M130 180 C150 140, 240 140, 270 180 Z" fill="#fff" strokeWidth={3} />
          <ellipse cx="200" cy="180" rx="60" ry="15" fill="none" strokeWidth={1.5} />
          {/* Repulsor thruster hover rings glowing beneath */}
          <ellipse cx="120" cy="245" rx="30" ry="12" fill="#fff" strokeWidth={3} />
          <ellipse cx="120" cy="245" rx="16" ry="6" fill="#111827" />
          <ellipse cx="280" cy="245" rx="30" ry="12" fill="#fff" strokeWidth={3} />
          <ellipse cx="280" cy="245" rx="16" ry="6" fill="#111827" />
        </g>
      );

    case "friendly-ai-smart-home-assistant-robot-coloring-page":
      return (
        <g>
          {/* Sleek cylindrical domestic assistant bot */}
          <rect x="140" y="120" width="120" height="180" rx="60" fill="#fff" strokeWidth={4} />
          {/* Digital emotive face screen */}
          <ellipse cx="200" cy="180" rx="45" ry="35" fill="#111827" />
          {/* Cute glowing eyes & smile */}
          <circle cx="185" cy="175" r="7" fill="#fff" stroke="none" />
          <circle cx="215" cy="175" r="7" fill="#fff" stroke="none" />
          <path d="M190 195 Q200 205 210 195" stroke="#fff" strokeWidth={3} strokeLinecap="round" fill="none" />
          {/* Rolling caster wheel base */}
          <rect x="160" y="295" width="80" height="20" rx="10" fill="#fff" strokeWidth={3.5} />
          <circle cx="175" cy="320" r="10" fill="#111827" />
          <circle cx="225" cy="320" r="10" fill="#111827" />
          {/* Serving tray holding a glass of juice */}
          <ellipse cx="100" cy="220" rx="35" ry="12" fill="#fff" strokeWidth={3} />
          <rect x="90" y="180" width="20" height="35" rx="3" fill="#fff" strokeWidth={2.5} />
          <line x1="100" y1="175" x2="105" y2="200" strokeWidth={2} stroke="#111827" />
        </g>
      );

    case "virtual-reality-kid-exploring-cyber-world-coloring-page":
      return (
        <g>
          {/* Sleek VR Headset covering eyes */}
          <rect x="140" y="130" width="120" height="55" rx="15" fill="#111827" />
          <rect x="150" y="140" width="100" height="35" rx="8" fill="#fff" strokeWidth={2} />
          {/* Headset head strap */}
          <path d="M140 155 Q120 160 110 180" fill="none" strokeWidth={8} stroke="#111827" />
          {/* Child smiling mouth and chin */}
          <circle cx="200" cy="170" r="50" fill="none" strokeWidth={3.5} />
          <path d="M185 200 Q200 215 215 200" fill="none" strokeWidth={3} strokeLinecap="round" />
          {/* Child shoulders */}
          <path d="M130 250 L110 350 L290 350 L270 250 Z" fill="#fff" strokeWidth={4} />
          {/* Floating holographic virtual cubes & wireframe stars */}
          <rect x="70" y="70" width="35" height="35" fill="none" strokeWidth={2.5} stroke="#111827" />
          <rect x="290" y="60" width="40" height="40" fill="none" strokeWidth={2.5} stroke="#111827" />
          <polygon points="90,180 95,190 105,190 98,198 100,210 90,202 80,210 82,198 75,190 85,190" fill="#111827" />
          <polygon points="310,190 315,200 325,200 318,208 320,220 310,212 300,220 302,208 295,200 305,200" fill="#111827" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 16: TOYS & CHILDHOOD PLAYTIME
    // ══════════════════════════════════════════════════════════════════
    case "classic-wooden-rocking-horse-coloring-page":
      return (
        <g>
          {/* Curved wooden rocking rails on floor */}
          <path d="M40 330 Q200 380 360 330" fill="none" strokeWidth={6} stroke="#111827" strokeLinecap="round" />
          <path d="M40 345 Q200 395 360 345" fill="none" strokeWidth={4} stroke="#111827" strokeLinecap="round" />
          {/* Rocker frame legs */}
          <line x1="120" y1="270" x2="80" y2="340" strokeWidth={5} stroke="#111827" />
          <line x1="280" y1="270" x2="320" y2="340" strokeWidth={5} stroke="#111827" />
          {/* Wooden horse body */}
          <ellipse cx="200" cy="220" rx="80" ry="50" fill="#fff" strokeWidth={4} />
          {/* Saddle */}
          <path d="M180 185 C180 215, 220 215, 220 185 Z" fill="#111827" />
          {/* Arched wooden horse neck & head */}
          <path d="M130 200 C110 150, 130 90, 160 70 L115 100 L110 130 L150 140 Z" fill="#fff" strokeWidth={3.5} />
          {/* Yarn mane & ears */}
          <polygon points="155,70 160,45 170,68" fill="#fff" strokeWidth={2.5} />
          <circle cx="140" cy="95" r="5" fill="#111827" />
          {/* Flowing yarn tail */}
          <path d="M280 200 C320 200, 340 240, 310 270" fill="none" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
        </g>
      );

    case "wooden-castle-building-blocks-coloring-page":
    case "wooden-building-blocks-castle-tower-coloring-page":
      return (
        <g>
          {/* Base foundation rectangular blocks */}
          <rect x="90" y="270" width="220" height="40" rx="3" fill="#fff" strokeWidth={4} />
          <line x1="200" y1="270" x2="200" y2="310" strokeWidth={3} />
          {/* Second level arch block */}
          <rect x="130" y="210" width="140" height="60" rx="3" fill="#fff" strokeWidth={3.5} />
          <path d="M170 270 L170 240 Q200 220 230 240 L230 270 Z" fill="#111827" />
          {/* Cylinder side columns */}
          <rect x="100" y="190" width="30" height="80" rx="4" fill="#fff" strokeWidth={3.5} />
          <rect x="270" y="190" width="30" height="80" rx="4" fill="#fff" strokeWidth={3.5} />
          {/* Triangle pediment roof block */}
          <polygon points="200,110 130,170 270,170" fill="#fff" strokeWidth={4} />
          {/* Tower flag on top */}
          <line x1="200" y1="110" x2="200" y2="60" strokeWidth={3} stroke="#111827" />
          <polygon points="200,60 235,72 200,85" fill="#111827" />
        </g>
      );

    case "toy-train-on-wooden-tracks-coloring-page":
      return (
        <g>
          {/* Wooden tracks on floor */}
          <path d="M30 330 Q200 320 370 330" fill="none" strokeWidth={5} stroke="#111827" />
          <path d="M30 350 Q200 340 370 350" fill="none" strokeWidth={5} stroke="#111827" />
          {/* Track sleepers */}
          <line x1="70" y1="325" x2="70" y2="355" strokeWidth={4} stroke="#111827" />
          <line x1="130" y1="323" x2="130" y2="353" strokeWidth={4} stroke="#111827" />
          <line x1="190" y1="322" x2="190" y2="352" strokeWidth={4} stroke="#111827" />
          <line x1="250" y1="323" x2="250" y2="353" strokeWidth={4} stroke="#111827" />
          <line x1="310" y1="325" x2="310" y2="355" strokeWidth={4} stroke="#111827" />
          {/* Train locomotive boiler body */}
          <rect x="140" y="180" width="130" height="90" rx="10" fill="#fff" strokeWidth={4} />
          {/* Engineer cabin */}
          <rect x="70" y="130" width="80" height="140" rx="8" fill="#fff" strokeWidth={4} />
          <rect x="85" y="150" width="40" height="40" rx="5" fill="#fff" strokeWidth={3} />
          {/* Smokestack on front */}
          <polygon points="230,180 220,120 250,120 240,180" fill="#fff" strokeWidth={3.5} />
          {/* Puffs of steam smoke */}
          <circle cx="235" cy="95" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="215" cy="70" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="180" cy="50" r="22" fill="#fff" strokeWidth={2.5} />
          {/* Front cowcatcher grill */}
          <polygon points="270,230 310,270 270,270" fill="#fff" strokeWidth={3.5} />
          <line x1="280" y1="245" x2="295" y2="270" strokeWidth={2.5} />
          {/* Big wooden train wheels with spokes */}
          <circle cx="110" cy="285" r="32" fill="#fff" strokeWidth={4} />
          <circle cx="110" cy="285" r="10" fill="#111827" />
          <circle cx="180" cy="295" r="22" fill="#fff" strokeWidth={3.5} />
          <circle cx="180" cy="295" r="7" fill="#111827" />
          <circle cx="240" cy="295" r="22" fill="#fff" strokeWidth={3.5} />
          <circle cx="240" cy="295" r="7" fill="#111827" />
          {/* Wheel connector rod */}
          <line x1="180" y1="295" x2="240" y2="295" strokeWidth={4} stroke="#111827" />
        </g>
      );

    case "stacking-rainbow-rings-cone-coloring-page":
    case "stacking-rainbow-nesting-rings-tower-coloring-page":
      return (
        <g>
          {/* Rounded wooden pedestal base */}
          <ellipse cx="200" cy="330" rx="90" ry="25" fill="#fff" strokeWidth={4} />
          {/* Vertical center spindle rod */}
          <line x1="200" y1="100" x2="200" y2="330" strokeWidth={6} stroke="#111827" />
          {/* Graduated stacking donut rings from largest to smallest */}
          {/* Bottom Ring 1 (largest) */}
          <rect x="110" y="280" width="180" height="35" rx="17" fill="#fff" strokeWidth={4} />
          {/* Ring 2 */}
          <rect x="125" y="240" width="150" height="35" rx="17" fill="#fff" strokeWidth={4} />
          {/* Ring 3 */}
          <rect x="140" y="200" width="120" height="35" rx="17" fill="#fff" strokeWidth={4} />
          {/* Ring 4 */}
          <rect x="155" y="160" width="90" height="35" rx="17" fill="#fff" strokeWidth={4} />
          {/* Ring 5 (smallest) */}
          <rect x="170" y="120" width="60" height="35" rx="17" fill="#fff" strokeWidth={4} />
          {/* Topper ball cap */}
          <circle cx="200" cy="90" r="26" fill="#fff" strokeWidth={4} />
        </g>
      );

    case "pull-along-wooden-duck-family-coloring-page":
    case "pull-along-wooden-duck-on-wheels-coloring-page":
      return (
        <g>
          {/* Wooden toy mother duck body */}
          <ellipse cx="220" cy="210" rx="65" ry="45" fill="#fff" strokeWidth={4} />
          {/* Duck tail */}
          <path d="M275 200 C300 185, 310 210, 290 225 Z" fill="#fff" strokeWidth={3} />
          {/* Duck head */}
          <circle cx="160" cy="150" r="32" fill="#fff" strokeWidth={3.5} />
          <circle cx="152" cy="142" r="5" fill="#111827" />
          <circle cx="150" cy="140" r="1.5" fill="#fff" stroke="none" />
          {/* Duck bill */}
          <path d="M135 155 Q110 155 118 165 Q135 165 140 158 Z" fill="#fff" strokeWidth={3} />
          {/* Wheels */}
          <circle cx="180" cy="275" r="26" fill="#fff" strokeWidth={3.5} />
          <circle cx="180" cy="275" r="9" fill="#111827" />
          <circle cx="260" cy="275" r="26" fill="#fff" strokeWidth={3.5} />
          <circle cx="260" cy="275" r="9" fill="#111827" />
          {/* Baby duckling following behind */}
          <ellipse cx="340" cy="255" rx="25" ry="18" fill="#fff" strokeWidth={3} />
          <circle cx="320" cy="235" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="316" cy="232" r="3" fill="#111827" />
          <polygon points="310,237 300,239 310,242" fill="#111827" />
          <circle cx="330" cy="285" r="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="355" cy="285" r="12" fill="#fff" strokeWidth={2.5} />
          <line x1="285" y1="260" x2="315" y2="260" strokeWidth={2} stroke="#111827" />
          {/* Pull string with wooden bead handle */}
          <path d="M125 170 Q80 190 35 220" fill="none" strokeWidth={3} stroke="#111827" />
          <circle cx="30" cy="225" r="8" fill="#111827" />
        </g>
      );

    case "remote-control-buggy-car-coloring-page":
      return (
        <g>
          {/* Ground dirt line */}
          <path d="M20 340 Q180 330 380 340" fill="none" strokeWidth={3} />
          {/* RC Buggy chassis body */}
          <path d="M90 230 L130 170 L230 170 L270 230 L280 260 L80 260 Z" fill="#fff" strokeWidth={4} />
          {/* Windshield and roof roll cage bars */}
          <polygon points="135,175 160,185 160,225 105,225" fill="#fff" strokeWidth={2.5} />
          <line x1="160" y1="170" x2="160" y2="230" strokeWidth={3} />
          <line x1="200" y1="170" x2="200" y2="230" strokeWidth={3} />
          {/* Big rear aerodynamic spoiler wing */}
          <polygon points="65,150 115,150 100,165 50,165" fill="#fff" strokeWidth={3.5} />
          <line x1="85" y1="165" x2="85" y2="230" strokeWidth={3} />
          {/* RC flexible wire antenna with flag tip */}
          <path d="M120 170 Q110 100 95 60" fill="none" strokeWidth={3} stroke="#111827" />
          <polygon points="95,60 70,68 95,78" fill="#111827" />
          {/* Huge knobby all-terrain tires with rims */}
          <circle cx="115" cy="275" r="42" fill="#fff" strokeWidth={4} />
          <circle cx="115" cy="275" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="115" cy="275" r="8" fill="#111827" />
          <circle cx="245" cy="275" r="42" fill="#fff" strokeWidth={4} />
          <circle cx="245" cy="275" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="245" cy="275" r="8" fill="#111827" />
          {/* Handheld pistol-grip transmitter in corner */}
          <rect x="315" y="190" width="30" height="70" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="300" y="225" width="20" height="40" rx="4" fill="#fff" strokeWidth={2.5} />
          <circle cx="340" cy="210" r="14" fill="#fff" strokeWidth={2.5} />
          <line x1="330" y1="190" x2="330" y2="120" strokeWidth={2.5} stroke="#111827" />
        </g>
      );

    case "multi-story-wooden-dollhouse-coloring-page":
      return (
        <g>
          {/* Foundation */}
          <rect x="80" y="120" width="240" height="220" rx="4" fill="#fff" strokeWidth={4} />
          {/* Steep pitched gabled roof */}
          <polygon points="200,40 60,120 340,120" fill="#fff" strokeWidth={4} />
          {/* Chimney on roof */}
          <rect x="250" y="55" width="30" height="50" fill="#fff" strokeWidth={3} />
          <line x1="245" y1="55" x2="285" y2="55" strokeWidth={3} />
          {/* Attic round dormer window */}
          <circle cx="200" cy="88" r="18" fill="#fff" strokeWidth={3} />
          <line x1="200" y1="70" x2="200" y2="106" strokeWidth={2} />
          <line x1="182" y1="88" x2="218" y2="88" strokeWidth={2} />
          {/* Floor divider */}
          <line x1="80" y1="230" x2="320" y2="230" strokeWidth={3.5} />
          {/* Top Floor Room 1 (Bedroom) */}
          <line x1="200" y1="120" x2="200" y2="230" strokeWidth={3} />
          <rect x="100" y="180" width="45" height="35" rx="3" fill="#fff" strokeWidth={2.5} />
          <rect x="105" y="170" width="20" height="12" rx="2" fill="#fff" strokeWidth={2} />
          {/* Top Floor Room 2 (Window) */}
          <rect x="235" y="145" width="45" height="55" rx="3" fill="#fff" strokeWidth={3} />
          <line x1="257" y1="145" x2="257" y2="200" strokeWidth={2} />
          <line x1="235" y1="172" x2="280" y2="172" strokeWidth={2} />
          {/* Ground Floor Room 1 (Living Room with lamp) */}
          <line x1="200" y1="230" x2="200" y2="340" strokeWidth={3} />
          <line x1="120" y1="330" x2="120" y2="270" strokeWidth={3} stroke="#111827" />
          <polygon points="105,270 135,270 130,250 110,250" fill="#fff" strokeWidth={2.5} />
          {/* Ground Floor Front Door */}
          <rect x="230" y="250" width="55" height="90" rx="3" fill="#fff" strokeWidth={3.5} />
          <circle cx="240" cy="295" r="4" fill="#111827" />
          <rect x="242" y="260" width="30" height="25" rx="2" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "spinning-gyro-top-and-yoyo-coloring-page":
    case "spinning-wooden-top-with-spiral-grooves-coloring-page":
      return (
        <g>
          {/* Teardrop / diamond spinning top body */}
          <polygon points="170,80 250,180 170,280 90,180" fill="#fff" strokeWidth={4} />
          {/* Center spindle axis handle and metal tip */}
          <rect x="165" y="45" width="10" height="40" rx="3" fill="#111827" />
          <polygon points="167,280 173,280 170,305" fill="#111827" />
          {/* Dynamic revolving striped spiral grooves */}
          <path d="M90 180 Q170 150 250 180" fill="none" strokeWidth={3.5} />
          <path d="M110 145 Q170 120 230 145" fill="none" strokeWidth={3} />
          <path d="M120 215 Q170 190 220 215" fill="none" strokeWidth={3} />
          {/* Whirling motion lines around top */}
          <path d="M65 180 A110 45 0 0 1 275 180" fill="none" strokeWidth={2.5} strokeDasharray="10 8" />
          {/* Wooden Yo-yo beside */}
          <circle cx="310" cy="270" r="32" fill="#fff" strokeWidth={3.5} />
          <circle cx="310" cy="270" r="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="310" cy="270" r="5" fill="#111827" />
          {/* Yo-yo string loop winding upward */}
          <path d="M310 238 C310 200 330 160 300 130 C290 120 270 140 280 150" fill="none" strokeWidth={2.5} stroke="#111827" />
        </g>
      );

    case "marble-run-raceway-maze-coloring-page":
      return (
        <g>
          {/* Sturdy tower pillars */}
          <rect x="70" y="80" width="18" height="260" rx="3" fill="#fff" strokeWidth={3.5} />
          <rect x="312" y="80" width="18" height="260" rx="3" fill="#fff" strokeWidth={3.5} />
          {/* Base catch tray at bottom */}
          <rect x="60" y="320" width="280" height="25" rx="5" fill="#fff" strokeWidth={4} />
          {/* Top funnel entry */}
          <polygon points="160,50 240,50 215,85 185,85" fill="#fff" strokeWidth={3.5} />
          {/* Track Chute 1 sloping down-right */}
          <path d="M88 100 L280 140 L280 150 L88 110 Z" fill="#fff" strokeWidth={3} />
          <line x1="88" y1="102" x2="280" y2="142" strokeWidth={2} />
          {/* Track Chute 2 sloping down-left */}
          <path d="M312 165 L120 205 L120 215 L312 175 Z" fill="#fff" strokeWidth={3} />
          <line x1="312" y1="167" x2="120" y2="207" strokeWidth={2} />
          {/* Track Chute 3 sloping down-right */}
          <path d="M88 230 L280 270 L280 280 L88 240 Z" fill="#fff" strokeWidth={3} />
          <line x1="88" y1="232" x2="280" y2="272" strokeWidth={2} />
          {/* Marble balls in motion */}
          <circle cx="200" cy="42" r="8" fill="#111827" />
          <circle cx="180" cy="112" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="180" cy="112" r="3" fill="#111827" />
          <circle cx="210" cy="178" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="210" cy="178" r="3" fill="#111827" />
          <circle cx="190" cy="242" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="190" cy="242" r="3" fill="#111827" />
          {/* Marbles in bottom tray */}
          <circle cx="120" cy="332" r="8" fill="#111827" />
          <circle cx="140" cy="332" r="8" fill="#fff" strokeWidth={2} />
          <circle cx="160" cy="332" r="8" fill="#111827" />
        </g>
      );

    case "teddy-bear-tea-party-coloring-page":
    case "cuddly-teddy-bear-with-plaid-bowtie-coloring-page":
      return (
        <g>
          {/* Plump teddy bear belly */}
          <circle cx="200" cy="240" r="75" fill="#fff" strokeWidth={4} />
          <ellipse cx="200" cy="245" rx="45" ry="48" fill="#fff" strokeWidth={2} strokeDasharray="5 5" />
          {/* Big round teddy head */}
          <circle cx="200" cy="130" r="55" fill="#fff" strokeWidth={4} />
          {/* Round ears */}
          <circle cx="150" cy="85" r="22" fill="#fff" strokeWidth={3.5} />
          <circle cx="150" cy="85" r="10" fill="#111827" />
          <circle cx="250" cy="85" r="22" fill="#fff" strokeWidth={3.5} />
          <circle cx="250" cy="85" r="10" fill="#111827" />
          {/* Cute muzzle & stitched triangle nose */}
          <ellipse cx="200" cy="145" rx="25" ry="18" fill="#fff" strokeWidth={2.5} />
          <polygon points="192,138 208,138 200,148" fill="#111827" />
          <path d="M192 152 Q200 160 208 152" fill="none" strokeWidth={2.5} />
          {/* Button eyes */}
          <circle cx="180" cy="120" r="7" fill="#111827" />
          <circle cx="178" cy="117" r="2.5" fill="#fff" stroke="none" />
          <circle cx="220" cy="120" r="7" fill="#111827" />
          <circle cx="218" cy="117" r="2.5" fill="#fff" stroke="none" />
          {/* Plaid bowtie */}
          <polygon points="200,185 170,170 170,200" fill="#fff" strokeWidth={2.5} />
          <polygon points="200,185 230,170 230,200" fill="#fff" strokeWidth={2.5} />
          <circle cx="200" cy="185" r="6" fill="#111827" />
          {/* Paws */}
          <ellipse cx="140" cy="305" rx="26" ry="18" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="260" cy="305" rx="26" ry="18" fill="#fff" strokeWidth={3.5} />
          {/* Little tea cup on saucer beside */}
          <ellipse cx="80" cy="320" rx="24" ry="8" fill="#fff" strokeWidth={2.5} />
          <path d="M68 318 C68 295 92 295 92 318 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M92 305 Q102 308 92 314" fill="none" strokeWidth={2} />
        </g>
      );

    case "flying-diamond-kite-with-ribbon-tail-coloring-page":
      return (
        <g>
          {/* Fluffy clouds */}
          <path d="M50 120 C30 120, 30 90, 60 90 C60 70, 90 70, 100 85 C110 70, 130 70, 130 90 C150 90, 150 120, 120 120 Z" fill="#fff" strokeWidth={2.5} />
          {/* Diamond kite geometry */}
          <polygon points="200,40 290,170 200,260 110,170" fill="#fff" strokeWidth={4} />
          {/* Cross spars */}
          <line x1="200" y1="40" x2="200" y2="260" strokeWidth={3} stroke="#111827" />
          <line x1="110" y1="170" x2="290" y2="170" strokeWidth={3} stroke="#111827" />
          {/* Flying string */}
          <line x1="200" y1="170" x2="150" y2="340" strokeWidth={2} />
          {/* Long winding tail with bow ribbons */}
          <path d="M200 260 Q240 290 220 330 Q200 370 240 390" fill="none" strokeWidth={3} stroke="#111827" />
          {/* Bow 1 */}
          <polygon points="225,285 215,280 215,290 235,280 235,290" fill="#111827" />
          {/* Bow 2 */}
          <polygon points="215,335 205,330 205,340 225,330 225,340" fill="#111827" />
          {/* Bow 3 */}
          <polygon points="230,375 220,370 220,380 240,370 240,380" fill="#111827" />
        </g>
      );

    case "colorful-pinwheel-spinning-in-wind-coloring-page":
      return (
        <g>
          {/* Wooden dowel stick handle */}
          <line x1="200" y1="200" x2="200" y2="370" strokeWidth={8} stroke="#111827" strokeLinecap="round" />
          {/* Four folded origami pinwheel sails */}
          {/* Sail 1 (Top) */}
          <polygon points="200,200 200,70 140,130" fill="#fff" strokeWidth={3.5} />
          {/* Sail 2 (Right) */}
          <polygon points="200,200 330,200 270,140" fill="#fff" strokeWidth={3.5} />
          {/* Sail 3 (Bottom) */}
          <polygon points="200,200 200,330 260,270" fill="#fff" strokeWidth={3.5} />
          {/* Sail 4 (Left) */}
          <polygon points="200,200 70,200 130,260" fill="#fff" strokeWidth={3.5} />
          {/* Center fastening pin button */}
          <circle cx="200" cy="200" r="14" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="200" r="6" fill="#111827" />
          {/* Swirling wind breeze gust */}
          <path d="M60 80 Q100 60 140 80 Q150 90 140 100" fill="none" strokeWidth={2.5} strokeLinecap="round" />
        </g>
      );

    case "jack-in-the-box-popping-out-of-cube-coloring-page":
      return (
        <g>
          {/* Square tin box container */}
          <rect x="130" y="210" width="140" height="130" rx="8" fill="#fff" strokeWidth={4} />
          {/* Open popped box lid */}
          <polygon points="130,210 90,160 150,140 170,210" fill="#fff" strokeWidth={3.5} />
          {/* Turn crank handle on side of box */}
          <line x1="270" y1="270" x2="310" y2="270" strokeWidth={5} stroke="#111827" />
          <line x1="310" y1="270" x2="310" y2="295" strokeWidth={5} stroke="#111827" />
          <circle cx="310" cy="298" r="8" fill="#111827" />
          {/* Accordion spring popping out */}
          <path d="M200 210 L180 195 L220 180 L180 165 L220 150 L190 140" fill="none" strokeWidth={5} stroke="#111827" />
          {/* Smiling jester / clown head */}
          <circle cx="200" cy="100" r="38" fill="#fff" strokeWidth={3.5} />
          <circle cx="188" cy="95" r="5" fill="#111827" />
          <circle cx="212" cy="95" r="5" fill="#111827" />
          <circle cx="200" cy="104" r="6" fill="#111827" />
          <path d="M188 116 Q200 126 212 116" fill="none" strokeWidth={2.5} />
          {/* Two-horned jester hat with bells */}
          <path d="M170 80 Q130 50 140 30 Q165 50 185 70" fill="#fff" strokeWidth={3} />
          <circle cx="138" cy="28" r="7" fill="#111827" />
          <path d="M230 80 Q270 50 260 30 Q235 50 215 70" fill="#fff" strokeWidth={3} />
          <circle cx="262" cy="28" r="7" fill="#111827" />
        </g>
      );

    case "play-dough-modeling-clay-sculpting-set-coloring-page":
      return (
        <g>
          {/* Wooden rolling pin */}
          <rect x="70" y="160" width="260" height="28" rx="8" fill="#fff" strokeWidth={3.5} transform="rotate(-20 200 174)" />
          <rect x="40" y="166" width="40" height="15" rx="5" fill="#111827" transform="rotate(-20 60 173)" />
          <rect x="320" y="166" width="40" height="15" rx="5" fill="#111827" transform="rotate(-20 340 173)" />
          {/* Flattened pancake of modeling dough */}
          <ellipse cx="200" cy="260" rx="110" ry="50" fill="#fff" strokeWidth={4} />
          {/* Star cookie cutter cutout in clay */}
          <polygon points="160,230 165,245 180,245 168,255 172,270 160,260 148,270 152,255 140,245 155,245" fill="#fff" strokeWidth={2.5} />
          {/* Sculpted little clay teddy bear beside */}
          <circle cx="240" cy="245" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="240" cy="220" r="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="232" cy="212" r="4" fill="#111827" />
          <circle cx="248" cy="212" r="4" fill="#111827" />
        </g>
      );

    default:
      return null;
  }
}
