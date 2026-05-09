import React from "react";

export default function RobosPage() {
  return (
    <>
      {/*  Top Navigation  */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant shadow-[0_0_15px_rgba(42,229,0,0.1)]">
        <div className="flex justify-between items-center w-full px-margin py-4 max-w-container-max mx-auto">
          <a
            href="/"
            className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(42,229,0,0.8)] hover:brightness-110 transition-all"
          >
            ROBONEST
          </a>
          <nav className="hidden md:flex items-center gap-8 font-headline-sm text-headline-sm">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="/"
            >
              Home
            </a>
            <a className="text-primary border-b-2 border-primary pb-1" href="/robos">
              Robos
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="/shop"
            >
              Shop
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Tutorials
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="/events"
            >
              Events
            </a>
          </nav>
          <a
            href="/build"
            className="bg-primary-container text-on-primary-container px-6 py-2 font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all neon-glow flex items-center justify-center"
          >
            Build Now
          </a>
        </div>
      </header>
      <main className="relative overflow-hidden">
        {/*  Hero Background Decorative Elements  */}
        <div className="absolute inset-0 scanline opacity-20 pointer-events-none"></div>
        <div className="absolute -top-[500px] -left-[200px] w-[800px] h-[800px] bg-primary-fixed-dim/10 rounded-full blur-[150px] pointer-events-none"></div>
        {/*  Carousel Section  */}
        <section className="relative pt-12 pb-24 px-margin max-w-container-max mx-auto">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <p className="font-label-caps text-label-caps text-primary tracking-[0.3em] mb-2">
                SYSTEM://COLLECTION_V4.0
              </p>
              <h1 className="font-headline-lg text-headline-lg">
                ACTIVE SCHEMATICS
              </h1>
            </div>
            <div className="flex gap-4">
              <button
                className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:bg-primary/10 transition-all active:scale-90"
                id="prev-slide"
              >
                <span className="material-symbols-outlined text-primary">
                  arrow_back
                </span>
              </button>
              <button
                className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:bg-primary/10 transition-all active:scale-90"
                id="next-slide"
              >
                <span className="material-symbols-outlined text-primary">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/*  Horizontal Scroll Container  */}
          <div
            className="flex gap-gutter overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            id="robot-carousel"
          >
            {/*  Slide 1: Line Following Robot  */}
            <div className="min-w-[85vw] md:min-w-[800px] snap-center glass-card relative group">
              <div className="absolute top-4 left-4 font-label-caps text-label-caps text-on-surface-variant/50">
                SN: LF-992-ALPHA
              </div>
              <div className="grid md:grid-cols-2">
                <div className="h-[300px] md:h-[500px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    data-alt="A highly detailed close-up of a sleek line-following robot chassis on a clean laboratory surface. The robot features exposed green circuitry, high-precision optical sensors, and micro-stepper motors. The lighting is cold and clinical, with bright neon green accents glowing from the internal components. The background is a dark, high-tech industrial workshop with a cinematic bokeh effect."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANqXsx3G2z7ID7pUy6PP8gCWD0pA78ShCc9U91l0J9zrxf6eFjCCd4hWhqfcaWLsOtEBO_Ix5fLDz4fmuGXHKqNg1kOAwD60JKX0k5M4vNZ3eHYjdlucxyFYUZ5gSw0N70vd2OV8K4ofeU71997X0bRA6NE4K3Dtk9jp45dNaRoMW1mtenREVKJnJMkPIyd4rnPSaEA-YJdZ-hhT8k387FXSDw5OlD9uCuy5h1L4OPgKCV2iCBPcYjhxG45gNJ3lAzLsO7ORBD_Ko"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div className="">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-fixed-dim/40 bg-primary-fixed-dim/10 mb-6">
                      <span className="w-2 h-2 rounded-full bg-primary-fixed-dim shadow-[0_0_5px_#2ae500]"></span>
                      <span className="font-label-caps text-label-caps text-primary">
                        LEVEL: INITIATE
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                      Line Following Robot
                    </h2>
                    <p className="text-on-surface-variant mb-8 line-clamp-3">
                      Master the fundamentals of infrared sensor arrays and PID
                      control loops. Designed for precision tracking on complex
                      high-contrast surfaces.
                    </p>
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="font-label-caps text-label-caps text-on-surface-variant">
                        EST. CORE COST:
                      </span>
                      <span className="font-headline-sm text-headline-sm text-primary tracking-tighter">
                        TK. 2999
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      className="flex-1 bg-primary text-on-primary-fixed text-center py-4 font-bold uppercase tracking-widest hover:neon-glow-primary transition-all"
                      href="#"
                    >
                      VIEW SPECS
                    </a>
                    <button
                      className="w-16 border border-outline-variant flex items-center justify-center hover:bg-primary/10 transition-all"
                      id="prev-slide"
                    >
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*  Slide 2: Robo Soccer Bot  */}
            <div className="min-w-[85vw] md:min-w-[800px] snap-center glass-card relative group">
              <div className="absolute top-4 left-4 font-label-caps text-label-caps text-on-surface-variant/50">
                SN: SB-104-OMEGA
              </div>
              <div className="grid md:grid-cols-2">
                <div className="h-[300px] md:h-[500px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    data-alt="A specialized soccer robot with a rugged, reinforced titanium-style exterior shell and omni-directional wheels. The robot is positioned on a futuristic synthetic turf field under dramatic arena spotlights. Neon orange and green status lights flicker along its frame. The atmosphere is intense and competitive, captured with a professional sports photography angle and high-contrast digital tones."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmVOrjCpGpj4ZsqIBz072BmItTknBXujT5Ymb1iEQ6zSyOahLF9q5Oc0zp5Nd6TRHYQ9Th8Ddu2FBd2FBG6ptDn6p6wPcnkWPprfDiQLCU2zS7nC9SCHRLVWNyKKObPZgGwq8MZVitUwoZhZagy4ZI6XdBTP04RbQxDsAb-TFysDpkIJUovsGtQUMPr5cZ7-UHuu2qZAUo8-6cUuz4UtjRwL8oePqBJPf0K-2yYvRomclVIu7a26wKwva0FVWYMZOp3g0uQgMgi80"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div className="">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#ffb400]/40 bg-[#ffb400]/10 mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#ffb400] shadow-[0_0_5px_#ffb400]"></span>
                      <span className="font-label-caps text-label-caps text-[#ffb400]">
                        LEVEL: OPERATOR
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                      Robo Soccer Bot
                    </h2>
                    <p className="text-on-surface-variant mb-8 line-clamp-3">
                      Equipped with omnidirectional drive systems and
                      high-torque solenoid strikers. Engineered for the RoboCup
                      Junior competitive standards.
                    </p>
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="font-label-caps text-label-caps text-on-surface-variant">
                        EST. CORE COST:
                      </span>
                      <span className="font-headline-sm text-headline-sm text-primary tracking-tighter">
                        TK. 3999
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      className="flex-1 bg-primary text-on-primary-fixed text-center py-4 font-bold uppercase tracking-widest hover:neon-glow-primary transition-all"
                      href="#"
                    >
                      VIEW SPECS
                    </a>
                    <button
                      className="w-16 border border-outline-variant flex items-center justify-center hover:bg-primary/10 transition-all"
                      id="prev-slide"
                    >
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*  Slide 3: Micro Maze Robot  */}
            <div className="min-w-[85vw] md:min-w-[800px] snap-center glass-card relative group">
              <div className="absolute top-4 left-4 font-label-caps text-label-caps text-on-surface-variant/50">
                SN: MZ-512-DELTA
              </div>
              <div className="grid md:grid-cols-2">
                <div className="h-[300px] md:h-[500px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    data-alt="A miniaturized maze-solving robot with ultra-lightweight carbon fiber components and rapid-response LiDAR sensors. The robot is navigating a dark, complex grid-like maze with illuminated laser paths. The lighting is moody and tactical, emphasizing the technological precision of the machine. The color palette is dominated by deep blacks and intense neon green laser lines cutting through the dark."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd7ryOriDeMVWCJLQstDt7EWMz8-BzaGJ6WjK5l6QTDMuRQ46awYDmcrbJgDY-_ELTTnVul0AMlyCnimFAMr7U-FU5YYmacqAXdr0vR2gCsRt00eGOp4W4mi8JpocivFXdpGqNuJS9neYRVkKDTDifWwv--DoW8ayb7toLgqdzGcZ7jXN-Nwk3EeeGn4tYiMe5p22Cfb4JB_m2g9tdXQVPZC0sovdyzx_Z4ZXPwjrvhxU3Cg4Mp2F8u71tPpN2XHS5du8c9epAJbQ"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div className="">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#ff3d00]/40 bg-[#ff3d00]/10 mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#ff3d00] shadow-[0_0_5px_#ff3d00]"></span>
                      <span className="font-label-caps text-label-caps text-[#ff3d00]">
                        LEVEL: ARCHITECT
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                      Micro Maze Robot
                    </h2>
                    <p className="text-on-surface-variant mb-8 line-clamp-3">
                      Advanced Micromouse algorithms including flood-fill and A*
                      pathfinding. Features ultra-fast acceleration and mapping
                      capabilities.
                    </p>
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="font-label-caps text-label-caps text-on-surface-variant">
                        EST. CORE COST:
                      </span>
                      <span className="font-headline-sm text-headline-sm text-primary tracking-tighter">
                        TK. 4999
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      className="flex-1 bg-primary text-on-primary-fixed text-center py-4 font-bold uppercase tracking-widest hover:neon-glow-primary transition-all"
                      href="#"
                    >
                      VIEW SPECS
                    </a>
                    <button
                      className="w-16 border border-outline-variant flex items-center justify-center hover:bg-primary/10 transition-all"
                      id="prev-slide"
                    >
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Secondary Content: Technical Categories (Bento)  */}
        <section className="px-margin py-24 max-w-container-max mx-auto">
          <div className="mb-12">
            <h2 className="font-headline-md text-headline-md mb-2">
              SUBSYSTEM DIRECTORY
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card p-8 border-l-4 border-l-primary hover:bg-primary/5 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                memory
              </span>
              <h3 className="font-headline-sm text-headline-sm mb-2">
                Neural Controllers
              </h3>
              <p className="text-on-surface-variant">
                ESP32 and Raspberry Pi based processing units for complex
                autonomy.
              </p>
            </div>
            <div className="glass-card p-8 border-l-4 border-l-primary hover:bg-primary/5 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                precision_manufacturing
              </span>
              <h3 className="font-headline-sm text-headline-sm mb-2">
                Kinematic Kits
              </h3>
              <p className="text-on-surface-variant">
                Bespoke chassis, mecanum wheels, and robotic arm mounting
                systems.
              </p>
            </div>
            <div className="glass-card p-8 border-l-4 border-l-primary hover:bg-primary/5 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                radar
              </span>
              <h3 className="font-headline-sm text-headline-sm mb-2">
                Sensor Suites
              </h3>
              <p className="text-on-surface-variant">
                LiDAR, Ultrasonic, and Optical modules for environmental
                awareness.
              </p>
            </div>
          </div>
        </section>
        {/*  Telemetry List Style Component  */}
        <section className="px-margin py-24 bg-surface-container-lowest border-y border-outline-variant">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <p className="font-label-caps text-label-caps text-primary mb-4">
                LIVE FEED [O1]
              </p>
              <h2 className="font-headline-md text-headline-md mb-6">
                Component Availability
              </h2>
              <p className="text-on-surface-variant mb-8">
                Real-time inventory levels synced from the main Nest
                manufacturing hub. Parts are restocked every 24 standard cycles.
              </p>
              <button className="border border-primary text-primary px-8 py-3 font-bold uppercase tracking-widest hover:bg-primary/10 transition-all">
                VIEW FULL LEDGER
              </button>
            </div>
            <div className="md:w-2/3 w-full">
              <div className="relative pl-8 border-l border-outline-variant">
                <div className="space-y-4">
                  {/*  Telemetry Item  */}
                  <div className="flex items-center justify-between p-4 glass-card hover:bg-primary/10 transition-all">
                    <div className="flex items-center gap-6">
                      <div className="w-3 h-3 rounded-full bg-primary-fixed-dim neon-glow"></div>
                      <span className="font-label-caps text-label-caps">
                        ARM-CORE V3
                      </span>
                    </div>
                    <span className="font-label-caps text-label-caps text-primary">
                      OPERATIONAL / 82 IN STOCK
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 glass-card hover:bg-primary/10 transition-all">
                    <div className="flex items-center gap-6">
                      <div className="w-3 h-3 rounded-full bg-[#ffb400] shadow-[0_0_8px_#ffb400]"></div>
                      <span className="font-label-caps text-label-caps">
                        OMNI-DRIVE 440
                      </span>
                    </div>
                    <span className="font-label-caps text-label-caps text-[#ffb400]">
                      LOW STOCK / 4 IN STOCK
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 glass-card hover:bg-primary/10 transition-all">
                    <div className="flex items-center gap-6">
                      <div className="w-3 h-3 rounded-full bg-primary-fixed-dim neon-glow"></div>
                      <span className="font-label-caps text-label-caps">
                        LI-POLY 5000MAH
                      </span>
                    </div>
                    <span className="font-label-caps text-label-caps text-primary">
                      OPERATIONAL / 129 IN STOCK
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 glass-card hover:bg-primary/10 transition-all opacity-50">
                    <div className="flex items-center gap-6">
                      <div className="w-3 h-3 rounded-full bg-[#ff3d00] shadow-[0_0_8px_#ff3d00]"></div>
                      <span className="font-label-caps text-label-caps">
                        TITAN CHASSIS
                      </span>
                    </div>
                    <span className="font-label-caps text-label-caps text-[#ff3d00]">
                      DEPLETED / NEXT RESTOCK 04D
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  Footer  */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin py-12 max-w-container-max mx-auto">
          <div className="">
            <div className="font-label-caps text-label-caps text-primary mb-6">
              ROBONEST SYSTEMS
            </div>
            <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
              Pioneering the next era of personal robotics. Build, code, and
              deploy with the industry's most advanced open-source platform.
            </p>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-on-surface mb-2">
              RESOURCE_LINKS
            </h4>
            <nav className="flex flex-col font-body-md text-body-md gap-1">
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Schematics
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="/events"
              >
                Events
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                API Docs
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Privacy
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Neural Link Support
              </a>
            </nav>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-on-surface mb-6">
              NETWORK_STATUS
            </h4>
            <div className="flex items-center gap-2 font-body-md text-body-md text-primary">
              <span className="w-2 h-2 rounded-full bg-primary neon-glow"></span>
              ALL SYSTEMS NOMINAL
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-on-surface mb-6">
              NEURAL_NEWSLETTER
            </h4>
            <div className="flex border border-outline-variant overflow-hidden">
              <input
                className="bg-surface-container-high border-none text-on-surface placeholder:text-on-surface-variant/30 flex-1 focus:ring-0"
                placeholder="INPUT EMAIL"
                type="email"
              />
              <button className="bg-primary px-4 hover:brightness-110 transition-all">
                <span className="material-symbols-outlined text-on-primary-fixed">
                  send
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant/30 py-6 px-margin">
          <div className="max-w-container-max mx-auto flex flex-col items-center gap-4 justify-center text-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant/50">
              © 2026 ROBONEST SYSTEMS. ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </footer>

      <script
        dangerouslySetInnerHTML={{
          __html: `
  (function() {
    const container = document.getElementById('robot-carousel');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    if (container && prevBtn && nextBtn) {
      const getScrollAmount = () => {
        const firstItem = container.querySelector('.snap-center');
        return firstItem ? firstItem.offsetWidth + 24 : 800; // card width + gutter
      };

      prevBtn.addEventListener('click', () => {
        container.scrollLeft -= getScrollAmount();
      });

      nextBtn.addEventListener('click', () => {
        container.scrollLeft += getScrollAmount();
      });
    }
  })();
`,
        }}
      />
    </>
  );
}
