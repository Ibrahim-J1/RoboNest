import Image from "next/image";

export default function Home() {
  return (
    <>
      {/*  TopNavBar  */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant shadow-[0_0_15px_rgba(42,229,0,0.1)]">
        <nav className="flex justify-between items-center w-full px-margin py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-8">
            <a
              href="/"
              className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(42,229,0,0.8)]"
            >
              ROBONEST
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a
                className="font-headline-sm text-headline-sm text-primary border-b-2 border-primary pb-1"
                href="/"
              >
                Home
              </a>
              <a
                className="font-headline-sm text-headline-sm text-on-surface-variant hover:text-primary transition-colors"
                href="/robos"
              >
                Robos
              </a>
              <a
                className="font-headline-sm text-headline-sm text-on-surface-variant hover:text-primary transition-colors"
                href="/shop"
              >
                Shop
              </a>
              <a
                className="font-headline-sm text-headline-sm text-on-surface-variant hover:text-primary transition-colors"
                href="/build"
              >
                Tutorials
              </a>
              <a
                className="font-headline-sm text-headline-sm text-on-surface-variant hover:text-primary transition-colors"
                href="/events"
              >
                Events
              </a>
            </div>
          </div>
          <a href="/build" className="block">
            <button className="bg-primary-container text-on-primary-container px-6 py-2 font-label-caps rounded-sm active:scale-95 transition-transform pulse-button">
              Build Now
            </button>
          </a>
        </nav>
      </header>
      <main className="pt-24">
        {/*  Hero Section  */}
        <section className="relative min-h-[921px] flex items-center px-margin py-12 max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 space-y-8 z-10">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
                <span className="font-label-caps text-primary text-[10px] tracking-widest uppercase">
                  System Status: Online
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg lg:text-7xl leading-[1.05] text-primary">
                CONSTRUCT THE <br />{" "}
                <span className="text-on-background">NEXT EVOLUTION</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Master the art of robotics from schematics to autonomous
                execution. Join the elite network of engineers building the Line
                Follower, Soccer Bot, and Micro Maze legends.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-container text-on-primary-container px-8 py-4 font-label-caps text-sm rounded-sm pulse-button">
                  Initialize Protocol
                </button>
                <button className="border border-primary text-primary px-8 py-4 font-label-caps text-sm rounded-sm hover:bg-primary/10 transition-all">
                  View Schematics
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 relative h-[600px]">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px]"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  alt="A high-tech, cinematic group shot of three advanced robots: a Line Following robot, a Robo Soccer Bot, and a compact Micro Maze Solver robot in a futuristic tactical style."
                  className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(42,229,0,0.4)]"
                  data-alt="A high-tech, cinematic group shot of three advanced robots: a Line Following robot with visible infrared sensors, a Robo Soccer Bot with an omni-directional wheel base and a kicking mechanism, and a compact Micro Maze Solver robot with dual distance sensors. The style is futuristic and tactical, with deep black backgrounds and vibrant neon green glowing accents and highlights. Professional studio lighting, 8k resolution, photorealistic."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDclWZ1reJaNmX8RSMIM_3L9CSLTa6Vlt4M6lS3KRf8ubuh-Od6x7XcnZpGdJLkFc-Af7cLdb_JHoKA2m5bcnwZUoH7mYh5w07i4xgEJZhFfbYVML71-aQ56Ad_R_BwMcU8yUvX2gO-Tg8LSvhRJavUP1C-mQvpyhfwLbz_GI1BrN3DmSzjwzlC_PvkP_qnxseSkpr8ZbEl7kLEXxRMaq_AMTO1LWGz9fWevR2R2d_-xche-qGjV_mqiTDuOoOm8ANbdXreIIbHg0E"
                />
              </div>
            </div>
          </div>
        </section>
        {/*  How it Works  */}
        <section className="py-24 bg-surface-container-low relative">
          <div className="max-w-container-max mx-auto px-margin">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-headline-md text-headline-md text-primary">
                DEPLOYMENT PHASE
              </h2>
              <div className="circuit-line mx-auto max-w-[200px]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/*  Step 1  */}
              <div className="glass-panel p-8 relative overflow-hidden group">
                <div className="scanline group-hover:top-full transition-all duration-1000"></div>
                <span className="font-label-caps text-primary/40 text-4xl block mb-6">
                  01
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 uppercase">
                  Learn
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  Access encrypted neural-link tutorials covering PID control,
                  sensor fusion, and mechanical torque optimization.
                </p>
                <div className="mt-8 flex items-center gap-2 text-primary font-label-caps text-xs">
                  <span className="material-symbols-outlined text-sm">
                    terminal
                  </span>
                  Root access granted
                </div>
              </div>
              {/*  Step 2  */}
              <div className="glass-panel p-8 relative overflow-hidden group border-primary/50">
                <div className="scanline group-hover:top-full transition-all duration-1000"></div>
                <span className="font-label-caps text-primary/40 text-4xl block mb-6">
                  02
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 uppercase">
                  Build
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  Solder your path to glory with our modular kits.
                  Precision-engineered components for maximum reliability.
                </p>
                <div className="mt-8 flex items-center gap-2 text-primary font-label-caps text-xs">
                  <span className="material-symbols-outlined text-sm">
                    precision_manufacturing
                  </span>
                  Assembly active
                </div>
              </div>
              {/*  Step 3  */}
              <div className="glass-panel p-8 relative overflow-hidden group">
                <div className="scanline group-hover:top-full transition-all duration-1000"></div>
                <span className="font-label-caps text-primary/40 text-4xl block mb-6">
                  03
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 uppercase">
                  Run
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  Execute autonomous missions in global arenas. Test your code
                  against the world's most optimized algorithms.
                </p>
                <div className="mt-8 flex items-center gap-2 text-primary font-label-caps text-xs">
                  <span className="material-symbols-outlined text-sm">
                    bolt
                  </span>
                  Mission ready
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Line Follower Path Animation Section  */}
        <section className="py-32 overflow-hidden bg-black relative">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1440 800">
              <path
                d="M-50,400 C200,400 400,100 700,400 S1200,700 1500,400"
                fill="none"
                stroke="#2ae500"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div className="max-w-container-max mx-auto px-margin relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                <h2 className="font-headline-md text-headline-md text-primary">
                  PRECISION PATHING
                </h2>
                <p className="text-on-surface-variant font-body-lg">
                  Observe the Track Master X1 as it calculates infrared
                  reflectance 1000 times per second. Our PID algorithms ensure
                  zero-drift navigation on high-speed circuits.
                </p>
                <div className="bg-surface-container-high p-4 rounded-sm border border-outline-variant font-label-caps text-primary text-sm">
                  <code className="block text-primary/70">
                    // PID CALCULATION
                  </code>
                  <code className="block">
                    error = setpoint - sensor_input;
                  </code>
                  <code className="block">
                    output = (Kp * error) + (Ki * integral) + (Kd * derivative);
                  </code>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="w-full aspect-square glass-panel rounded-full flex items-center justify-center p-12 border-2 border-primary/20">
                  <img
                    alt="Line Follower Robot"
                    className="w-full h-auto rounded-lg rotate-12"
                    data-alt="A top-down photographic view of a high-tech line follower robot with visible green PCBs and exposed wiring, navigating a complex white circuit line on a black ground. The robot has bright neon LED indicators and dual motors. The aesthetic is tactical and technical, with a focus on precision electronics and mechanical movement under cool digital lighting."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0uPdXSt125J-P0Cic5sCW3rmOpD-GiVNW53snB0GHedG5LIeXv2N0i6HEwbR6aKUlnCkNjNjWOTLgYcajeepuFr2w8vwtmCT20AT6JAylW7wTu9muUlPQ4ejOO5gU2JsXc2a5sNoXiSCLtDfV8iZwqUH3pjT-KS6XHC-kOVaAT67dMbAQB6jt1UesetG_mgZlR6r9TDcrv8oECD64DVuo4xbtWd3dsmqCMg4uP1y8-F0b_kMEVzHSUJ3Sv33qMqgJXQMt2H447tI"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Featured Robots  */}
        <section className="py-24 px-margin max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-2">
              <span className="font-label-caps text-primary">
                ACTIVE INVENTORY
              </span>
              <h2 className="font-headline-md text-headline-md uppercase">
                Top Performing Units
              </h2>
            </div>
            <a
              className="text-primary font-label-caps hover:underline flex items-center gap-2"
              href="#"
            >
              View Complete Catalog{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/*  Robot 1  */}
            <div className="glass-panel group cursor-pointer overflow-hidden">
              <div className="h-64 overflow-hidden relative">
                <img
                  alt="Track Master X1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="A high-tech, cinematic group shot of three advanced robots: a Line Following robot, a Robo Soccer Bot, and a compact Micro Maze Solver robot in a futuristic tactical style."
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujCHu7s-B6xYAqbOvtqQwexpmgJhfPQfkOKWM0I-0_ZZBRr45bJ6kQnoCEc8nJ6dQwjjgpa_D4HzZrO0KIiSS7IaJ9u1QxnlOiyOUvZ7LsH3sjBLvovKaNxhQ-QZsZsVoUCwzab1jfmz_jqWFYkzbC0jW3SSwxdvj-ScZk3SGLYrarGJnXwFAJ42q--j3thEzjRH6g6gwodWKSIvkqwg2XdWtF3ljCswzRpP68saqcc78sVPFVqBsIxgM86dK30jrck3j1k4wjKDA"
                />
                <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 font-label-caps text-[10px] text-primary border border-primary">
                  SERIES X
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Track Master X1
                  </h3>
                  <span className="font-label-caps text-primary">TK. 2959</span>
                </div>
                <p className="text-on-surface-variant text-sm font-body-md line-clamp-2">
                  High-speed PID optimized line follower with dual 3000RPM
                  coreless motors and magnetic encoders.
                </p>
                <div className="flex gap-2">
                  <span className="bg-surface-container-highest px-2 py-1 text-[10px] font-label-caps rounded">
                    SENSORS x8
                  </span>
                  <span className="bg-surface-container-highest px-2 py-1 text-[10px] font-label-caps rounded">
                    PID TUNED
                  </span>
                </div>
              </div>
            </div>
            {/*  Robot 2  */}
            <div className="glass-panel group cursor-pointer overflow-hidden border-primary/40 neon-glow">
              <div className="h-64 overflow-hidden relative">
                <img
                  alt="Striker-Bot MK II"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Striker-Bot MK II, a competitive soccer robot with a powerful pneumatic kicker mechanism and omnidirectional wheels. Its chassis is constructed from anodized aircraft-grade aluminum with glowing green accents. The scene is high-energy, showing the bot poised on a green synthetic turf pitch under bright stadium-style studio lights."
                  src="https://lh3.googleusercontent.com/aida/ADBb0ug3F46QTSjfCMtCoqR9HoIew9TnmURYAloL7zJ-Cg05wzE6GUbvSJ-7gGcQdGxh7wgazAir_CMv247X323BLjsW--kG-eWBDFSU3AyQnYJ7bqO0IAHhsJCq3_eoOH-reCqbyjfYsTOsQfdFySwt1969wpYWIlxDJ9kq1GysuMOvydMmZR4lOZk3mayFDyaU_rIDTcHoMoENtgxPFh-iW4hfSukyTw4f_85omoXZ4yLa9WeMGTkZ864QrOiRSnNjad_JYUxDNZDb"
                />
                <div className="absolute top-4 right-4 bg-primary text-on-primary-fixed px-3 py-1 font-label-caps text-[10px] border border-primary">
                  BEST SELLER
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Striker-Bot MK II
                  </h3>
                  <span className="font-label-caps text-primary">
                    TK. 3559&nbsp;
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-body-md line-clamp-2">
                  The ultimate soccer bot with omnidirectional movement and a
                  high-force solenoid kicker system.
                </p>
                <div className="flex gap-2">
                  <span className="bg-surface-container-highest px-2 py-1 text-[10px] font-label-caps rounded">
                    OMNI-WHEELS
                  </span>
                  <span className="bg-surface-container-highest px-2 py-1 text-[10px] font-label-caps rounded">
                    SOLENOID
                  </span>
                </div>
              </div>
            </div>
            {/*  Robot 3  */}
            <div className="glass-panel group cursor-pointer overflow-hidden">
              <div className="h-64 overflow-hidden relative">
                <img
                  alt="Maze Runner 09"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="A high-tech, tactical robotic unit designed for micro-maze solving, following a dark green and black color scheme with neon green glow accents. Professional 3D render, dark background, industrial aesthetic, matching the RoboNest brand."
                  src="https://lh3.googleusercontent.com/aida/ADBb0ug6yJWlDxApfwiiLLEOapudhT_qgIAeDj0ch6VBfxkl3kw6-B9GZGRLkPlr6wDrPK1oU2XbBhId0A6gSOjbF4KJfUeotAEZqzQNZdAj18ikp32s-xK3t-JAG3QuLofk4qSQr785QMriZM2yGlosqEQH_xzV_MZrJV7DFTlrD4vJnaSPiAt6mZOlFavPfmNWPMWL5UDEnW7odGgTzkS6EpaqY62KV26roZNBjDkIFtQt4SrRdPy1nIdZh54xBrxeGC-d6jxKLmBPZw"
                />
                <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 font-label-caps text-[10px] text-primary border border-primary">
                  COMPETITION
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Maze Runner 09
                  </h3>
                  <span className="font-label-caps text-primary">TK. 3999</span>
                </div>
                <p className="text-on-surface-variant text-sm font-body-md line-clamp-2">
                  Optimized for micromouse competitions with ultra-responsive
                  LiDAR mapping and pathfinding AI.
                </p>
                <div className="flex gap-2">
                  <span className="bg-surface-container-highest px-2 py-1 text-[10px] font-label-caps rounded">
                    LiDAR
                  </span>
                  <span className="bg-surface-container-highest px-2 py-1 text-[10px] font-label-caps rounded">
                    AI PATHFINDING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Testimonials  */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-4 space-y-6">
                <h2 className="font-headline-md text-headline-md text-primary uppercase">
                  Field Reports
                </h2>
                <p className="text-on-surface-variant font-body-lg italic">
                  "ROBONEST didn't just give me a kit; they gave me the
                  blueprint to think like an engineer."
                </p>
                <div className="circuit-line"></div>
                <button className="text-primary font-label-caps text-xs flex items-center gap-2">
                  READ ALL REPORTS{" "}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </button>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-8 space-y-4 border-l-4 border-l-primary">
                  <div className="flex gap-1 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                  </div>
                  <p className="font-body-md text-on-surface italic">
                    "The Striker-Bot MK II dominated the regional tournament.
                    The build quality is unmatched and the technical support is
                    truly expert-level."
                  </p>
                  <div>
                    <p className="font-label-caps text-primary">SUMAN CHOW.</p>
                    <p className="text-[10px] text-on-surface-variant">
                      IIUX Robotics Team
                    </p>
                  </div>
                </div>
                <div className="glass-panel p-8 space-y-4 border-l-4 border-l-primary/30">
                  <div className="flex gap-1 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                  </div>
                  <p className="font-body-md text-on-surface italic">
                    "Maze Runner 09's mapping algorithm is a masterpiece. I went
                    from novice to finalist in three months using their
                    tutorials."
                  </p>
                  <div>
                    <p className="font-label-caps text-primary">SARAH K.</p>
                    <p className="text-[10px] text-on-surface-variant">
                      Lead Developer, Cyber BD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  Footer  */}
      <footer className="border-t border-outline-variant bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin py-12 max-w-container-max mx-auto">
          <div className="space-y-6">
            <span className="font-label-caps text-label-caps text-primary">
              ROBONEST
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Forging the next generation of autonomous robotic systems.
              Precision engineering for the technical vanguard.
            </p>
          </div>
          <div className="">
            <h4 className="font-label-caps text-primary mb-2">RESOURCES</h4>
            <ul className="space-y-2">
              <li className="">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="/build"
                >
                  Schematics
                </a>
              </li>
              <li className="">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  API Docs
                </a>
              </li>
              <li className="">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy
                </a>
              </li>
              <li className="">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Neural Link Support
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-caps text-primary">OUR OFFICE</h4>

            <p className="font-body-md text-body-md text-on-surface-variant">
              Boro Kumirah, Sitakunda, Chattogram.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-label-caps text-primary">JOIN THE NETWORK</h4>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 glass-panel flex items-center justify-center text-primary hover:neon-glow transition-all"
                href="#"
              >
                <img
                  alt="Facebook"
                  className="w-6 h-6 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp8U_KStH1pGzFTxaqM0V4OWFHSSilD2JMmrseZiOrtQozQVr78Kr2Ftgju1uKZq9VJ597r4Ir9jIdjkwsD6FhsV-kLV4d0Kms28QpvD3RSRWBy1gqSNQfBWN8aTTTxXpyKqHaj0tMCae0P9CrXhIdxUCLS2-Ty7EIzHgOonc6QBXYgWkfazDR5Ep5KSimuxg2efODUWK2vJLyA5AF5TFhc2Z4rFzul6KAOB2vrgBZEpAJDFkM_kgPz18PU_GmEOvGOawVkslfemc"
                />
              </a>
              <a
                className="w-10 h-10 glass-panel flex items-center justify-center text-primary hover:neon-glow transition-all"
                href="#"
              >
                <img
                  alt="Instagram"
                  className="w-6 h-6 object-contain"
                  src="https://placeholder.pics/svg/300"
                />
              </a>
              <a
                className="w-10 h-10 glass-panel flex items-center justify-center text-primary hover:neon-glow transition-all"
                href="#"
              >
                <img
                  alt="GitHub"
                  className="w-6 h-6 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBflDyPUEVQC3Idosp3GBSmtl0ROW4gJK4P7s6LVXzv39E0tXv4M1SBLWCNX7U5GWgF6qIrf89wGSMhZGlOFFwXdCDp1t1DTsGu5ev73YVFpSEuL67ZacI7g8f36LecuP34Z0ma1L7Zy-h8Pm_9sKovVzMHbRdqJkk7XKzlpe6bn5FXHTFJL4_vhQWaaLCzDp7hA6Xon5ud5wx1W8XwLQD3EJNV3UxNtFDI6jsXDth8jyA-ee0PP3E_jaVFFvT8eXfsskODvKNuHTs"
                />
              </a>
              <a
                className="w-10 h-10 glass-panel flex items-center justify-center text-primary hover:neon-glow transition-all"
                href="#"
              >
                <img
                  alt="Discord"
                  className="w-6 h-6 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvnQDAWw1_4QcHj0vrm6MaJdxD1cFST4RUIXfEflShDPmbBUAviBkny3lxdvIfvh9EfrQ7tVXT9n9xtg9WNDWQR9ge8lIJdLUsn2p6wqoQa71zt_K9IbAnRhXemL8F_L5Lc5T08nf_OUSUefBY8auAi9CBHScK47DHTj3ivvxXmh1GZpRS9bZYB9u2b6nbGWYU2g0dpBTclDFknKP6bnUkVokVnpHXbQJc0595wvL_JsC7yjsHJcFq4nxmd4a_SK9vosgghWQir3c"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant/10 py-6 text-center">
          <span className="font-label-caps text-label-caps text-on-surface-variant/50">
            © 2026&nbsp;ROBONEST SYSTEMS. ALL RIGHTS RESERVED.
          </span>
        </div>
      </footer>
    </>
  );
}
