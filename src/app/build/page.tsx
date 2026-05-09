import React from "react";

export default function BuildPage() {
  return (
    <>
      {/*  TopNavBar Shell  */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant shadow-[0_0_15px_rgba(42,229,0,0.1)]">
        <nav className="flex justify-between items-center w-full px-margin py-4 max-w-container-max mx-auto">
          <a
            className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(42,229,0,0.8)] cursor-pointer"
            href="/"
          >
            ROBONEST
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="font-headline-sm text-headline-sm text-on-surface-variant hover:text-primary transition-colors"
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
              className="font-headline-sm text-headline-sm text-primary border-b-2 border-primary pb-1"
              href="#"
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
          <a
            href="/build"
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold active:scale-95 transition-transform neon-glow hover:brightness-110 flex items-center justify-center"
          >
            Build Now
          </a>
        </nav>
      </header>
      <main className="pt-32 pb-20 px-margin max-w-container-max mx-auto">
        {/*  Hero Section  */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-gutter">
            <div>
              <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-[0.3em]">
                RESOURCE_HUB_V4.0
              </span>
              <h1 className="font-headline-lg text-headline-lg text-primary mb-4">
                Tactical Build Manuals
              </h1>
              <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Access high-precision schematics and neural-link connection
                diagrams for the latest ROBONEST operational units. Follow our
                step-by-step telemetry-aligned video modules for 100%
                calibration accuracy.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  sensors
                </span>
                <span className="font-label-caps text-label-caps">
                  LIVE_FEED: ACTIVE
                </span>
              </div>
            </div>
          </div>
        </section>
        {/*  Build Cards Bento Grid  */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-24">
          {/*  Card 1: Aero-Nest V1  */}
          <div className="glass-card rounded-xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-2 border border-outline-variant/30">
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="A high-tech cinematic shot of a sleek, aerodynamic white drone with glowing green neon accents sitting on a dark carbon fiber laboratory table. The lighting is moody and technical, with lens flares from cold blue light sources in the background. The drone features intricate mechanical details and exposed circuitry, emphasizing its advanced robotic engineering. The overall atmosphere is futuristic, precise, and sophisticated."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDULAV3uGYkUTvaioI5Sst6uvaH88C01EBtYrp4Oxa90Aovvq2GK-FR_Pydil6awgMgM7fJIFfC84lIgSjMswkw304O9bVLGky-3Zuv0RQwFn5M9xksqs75zpwdcMFr2aQUYDNnHDD2-dwWZw2lebs8l3MG1pmnyHeSN-txozxSnxNa_79x_xTQWJZStPXclt6CpRR1ZgD1YRUyNl67GAZaYM4I9ddNEpI_hLRwaZHzwJ_2T2HGGROsyv-mLuhX7wBbZ2qgS14b-b8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 font-label-caps text-[10px] bg-primary/20 backdrop-blur-md text-primary px-2 py-1 border border-primary/30">
                ID: AN-V1-77
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-headline-md text-headline-md text-white">
                  Aero-Nest V1
                </h3>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col gap-4">
              <div className="flex justify-between items-center text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span className="font-label-caps">12.5 HOURS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    precision_manufacturing
                  </span>
                  <span className="font-label-caps">ADVANCED</span>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md line-clamp-2">
                High-altitude surveillance drone with proprietary stabilization
                arrays and night-vision optical sensors.
              </p>
              <div className="mt-auto space-y-3">
                <button className="w-full bg-primary-container text-on-primary-container py-3 rounded font-bold font-label-caps flex items-center justify-center gap-2 neon-glow-hover transition-all">
                  <span className="material-symbols-outlined">
                    account_tree
                  </span>
                  VIEW CIRCUIT DIAGRAM
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button className="border border-outline-variant hover:bg-surface-variant py-2 font-label-caps text-[11px] flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      hub
                    </span>{" "}
                    CONNECTION
                  </button>
                  <button className="border border-outline-variant hover:bg-surface-variant py-2 font-label-caps text-[11px] flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      download
                    </span>{" "}
                    PDF DOCS
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  Card 2: Stride-X Unit  */}
          <div className="glass-card rounded-xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-2 border border-outline-variant/30">
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="A detailed close-up of a bipedal robotic leg featuring exposed hydraulics and matte black carbon fiber plating, glowing with vibrant neon green status indicators. The setting is a dim, industrial assembly floor with sparks flying in the blurred background. Strong high-contrast lighting highlights the textures of the mechanical components and wires. The aesthetic is gritty, neo-cyberpunk, and high-performance."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqaMOkCcE-colr0Jwej7k_dPP_1EiahAjUt8HcH4dGG5wLl1L_eTW-UMDDPIs4l6rKnxx5CoUIzAPP0-zf9lCyWNZ9pIWDEV6GniOBeoMBrvqEuy9tOhFRFZmFgwgbfJsC50ojb4CM9aTjI7v2hs6CYn0axm7VW5mbo68ROJ9hTgmJfOhywADnPiGTLtRabcI7DJ0d6SJK9qhE0OH16fQP-od9VcYmtRzOJPBVAn84eBivxz7aCPPV9vxqsiOFuhnGlK6M3Qs_J-Q"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 font-label-caps text-[10px] bg-primary/20 backdrop-blur-md text-primary px-2 py-1 border border-primary/30">
                ID: SX-U-92
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-headline-md text-headline-md text-white">
                  Stride-X Unit
                </h3>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col gap-4">
              <div className="flex justify-between items-center text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span className="font-label-caps">28.0 HOURS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    precision_manufacturing
                  </span>
                  <span className="font-label-caps">EXPERT</span>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md line-clamp-2">
                Autonomous bipedal walker capable of navigating extreme terrain
                with 40kg payload capacity.
              </p>
              <div className="mt-auto space-y-3">
                <button className="w-full bg-primary-container text-on-primary-container py-3 rounded font-bold font-label-caps flex items-center justify-center gap-2 neon-glow-hover transition-all">
                  <span className="material-symbols-outlined">
                    account_tree
                  </span>
                  VIEW CIRCUIT DIAGRAM
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button className="border border-outline-variant hover:bg-surface-variant py-2 font-label-caps text-[11px] flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      hub
                    </span>{" "}
                    CONNECTION
                  </button>
                  <button className="border border-outline-variant hover:bg-surface-variant py-2 font-label-caps text-[11px] flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      download
                    </span>{" "}
                    PDF DOCS
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  Card 3: Crawler Titan  */}
          <div className="glass-card rounded-xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-2 border border-outline-variant/30">
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="A heavy-duty hexapod robot with thick metallic legs and industrial yellow and black warning stripes, navigating a simulated rocky Mars-like environment under artificial studio lights. The robot has a central glowing green eye lens that illuminates the rugged terrain ahead. The visual style is realistic, emphasizing mechanical power and durability through sharp textures and a cinematic shallow depth of field."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfOUZiQDHPrq_RnzQGkem77bEsSYjWB_uZ--Bj5YZV4rMvsHX1KO7oAsM6DdKzaE58sX4cY9wvYfVLZMSlDEjEi2o6iBnJM2zv-xj_K735Iir6waTSDEdbnboU7w-s3tcAjZUfas2qA1xEXFjiQnpSJJ0HVQRXhJQu2nJnP0qC1iSMXhipZL-GGH7f5ZCp9ACpferawDkiaDE7M65j3tOtZXi2yzFmJ2O2Pi-coNr-VpKrbj3RQiMGnLh751Tq0YW5zQCYM4lRdhs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 font-label-caps text-[10px] bg-primary/20 backdrop-blur-md text-primary px-2 py-1 border border-primary/30">
                ID: CT-808
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-headline-md text-headline-md text-white">
                  Crawler Titan
                </h3>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col gap-4">
              <div className="flex justify-between items-center text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span className="font-label-caps">42.5 HOURS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    precision_manufacturing
                  </span>
                  <span className="font-label-caps">MASTER</span>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md line-clamp-2">
                Heavy-duty hexapod platform engineered for geological surveying
                and structural excavation.
              </p>
              <div className="mt-auto space-y-3">
                <button className="w-full bg-primary-container text-on-primary-container py-3 rounded font-bold font-label-caps flex items-center justify-center gap-2 neon-glow-hover transition-all">
                  <span className="material-symbols-outlined">
                    account_tree
                  </span>
                  VIEW CIRCUIT DIAGRAM
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button className="border border-outline-variant hover:bg-surface-variant py-2 font-label-caps text-[11px] flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      hub
                    </span>{" "}
                    CONNECTION
                  </button>
                  <button className="border border-outline-variant hover:bg-surface-variant py-2 font-label-caps text-[11px] flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      download
                    </span>{" "}
                    PDF DOCS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Community Forum Section  */}
        <section className="mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline-md text-headline-md text-primary">
              Neural Network Community
            </h2>
            <div className="flex-grow h-[1px] bg-outline-variant/30"></div>
            <button className="border border-primary text-primary px-6 py-2 font-label-caps text-label-caps hover:bg-primary/10 transition-all">
              POST_INTEL
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/*  Forum Posts  */}
            <div className="md:col-span-8 space-y-4">
              {/*  Post 1  */}
              <div className="glass-card p-6 flex gap-6 group hover:bg-surface-container-low transition-colors border-l-4 border-l-primary">
                <div className="flex flex-col items-center gap-1">
                  <button className="material-symbols-outlined text-primary hover:scale-125 transition-transform">
                    expand_less
                  </button>
                  <span className="font-label-caps text-primary">128</span>
                  <button className="material-symbols-outlined text-on-surface-variant hover:scale-125 transition-transform">
                    expand_more
                  </button>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="A portrait of a male tech enthusiast in a futuristic setting, illuminated by cold green light. He wears sleek, minimalist glasses and a dark tactical shirt. The style is sharp and modern, matching the robotic and terminal-based aesthetic of the overall UI."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyjObjMWWfPpHzrG71VjZYN3_4ZaMmW2GEgF3ORN5uxhTM_dgARHJzz1NpRl9gRRaei8hOopXg5dx0bltJXzC0DyPV_jvA83kGNK6-IigjN6_C4IeP8SFuQPNVD0yz5fzG6JwCrBR05Bt2rPCA4Nmic0XFqDan3ytBPwgzG4ZYSaiCg2QY5QmHi0Dnmp3sOm9BRuy6ZTOeX6nKNZNINVDMfy6yI8C2Jg-Jh1B2x0KzLcX9wfhjRobrEE2dlnQIyrJnYAdVcmRk_UU"
                      />
                    </div>
                    <span className="font-label-caps text-on-surface-variant">
                      @mech_alpha
                    </span>
                    <span className="text-[10px] text-outline">• 2H AGO</span>
                    <span className="font-label-caps text-[10px] bg-outline-variant/40 px-2 py-0.5 rounded text-on-surface-variant">
                      MODIFICATION
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">
                    Aero-Nest V1: Optimizing the ESC cooling for high-temp
                    environments
                  </h4>
                  <p className="text-on-surface-variant text-body-md mb-4">
                    I found that replacing the stock heat sinks with aluminum
                    fins reduced operational temps by 15°C...
                  </p>
                  <div className="flex gap-4 text-on-surface-variant">
                    <button className="flex items-center gap-1 text-[12px] font-label-caps hover:text-primary">
                      <span className="material-symbols-outlined text-sm">
                        chat_bubble
                      </span>{" "}
                      24 COMMENTS
                    </button>
                    <button className="flex items-center gap-1 text-[12px] font-label-caps hover:text-primary">
                      <span className="material-symbols-outlined text-sm">
                        share
                      </span>{" "}
                      TRANSMIT
                    </button>
                  </div>
                </div>
              </div>
              {/*  Post 2  */}
              <div className="glass-card p-6 flex gap-6 group hover:bg-surface-container-low transition-colors border-l-4 border-l-transparent">
                <div className="flex flex-col items-center gap-1">
                  <button className="material-symbols-outlined text-on-surface-variant hover:scale-125 transition-transform">
                    expand_less
                  </button>
                  <span className="font-label-caps text-on-surface-variant">
                    85
                  </span>
                  <button className="material-symbols-outlined text-on-surface-variant hover:scale-125 transition-transform">
                    expand_more
                  </button>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="A female engineer with short dyed hair working in a futuristic laboratory filled with digital displays. Soft green ambient lighting glows against her skin. She is focused and wears a smart headset. The image feels professional, high-tech, and atmospheric."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdxmfnD35Mw-J9rG9VpDQWhkGaL4NGbuQBTdBLVzE73wP7RlA_fqQ8FsolVG-_CClDBeolmuI30ZRBOdTUjEeCtRpvXH_bH2bN9vn7WyFSyLf4C8UcqDvA9yNvBT1HyKqpWMvEu0-hsyCdH7XF4sFSEYgG0z25lJgcsQoCWhlBS12Ui9kAvXhM7v91Mia_dWmsytuuj-Ymwmd2oGFPAm94lBMHzYyx4C7o2V03EBEcM57SCzPK9TP56UwNtfyHW1TlXx1y8tGZY-M"
                      />
                    </div>
                    <span className="font-label-caps text-on-surface-variant">
                      @vector_lynx
                    </span>
                    <span className="text-[10px] text-outline">• 5H AGO</span>
                    <span className="font-label-caps text-[10px] bg-outline-variant/40 px-2 py-0.5 rounded text-on-surface-variant">
                      FIRMWARE
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">
                    Stride-X Neural Link latency issues on Kernel v2.1.4
                  </h4>
                  <p className="text-on-surface-variant text-body-md mb-4">
                    Anyone else noticing a 12ms delay in the balance processor?
                    I've tried recalibrating the gyros twice.
                  </p>
                  <div className="flex gap-4 text-on-surface-variant">
                    <button className="flex items-center gap-1 text-[12px] font-label-caps hover:text-primary">
                      <span className="material-symbols-outlined text-sm">
                        chat_bubble
                      </span>{" "}
                      41 COMMENTS
                    </button>
                    <button className="flex items-center gap-1 text-[12px] font-label-caps hover:text-primary">
                      <span className="material-symbols-outlined text-sm">
                        share
                      </span>{" "}
                      TRANSMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*  Trending Sidepanel  */}
            <div className="md:col-span-4">
              <div className="glass-card p-6 border border-primary/20 relative overflow-hidden">
                <div className="scanline absolute inset-0 pointer-events-none opacity-20"></div>
                <h5 className="font-label-caps text-label-caps text-primary mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  ACTIVE_INTEL_FEEDS
                </h5>
                <ul className="space-y-6">
                  <li className="group cursor-pointer">
                    <span className="font-label-caps text-[10px] text-primary">
                      #CALIBRATION_PROTOCOLS
                    </span>
                    <h6 className="font-headline-sm text-[18px] group-hover:translate-x-2 transition-transform">
                      Leg jitter fix for Titan units
                    </h6>
                    <p className="text-on-surface-variant text-[12px]">
                      142 active operators
                    </p>
                  </li>
                  <li className="group cursor-pointer">
                    <span className="font-label-caps text-[10px] text-primary">
                      #BATTERY_MODS
                    </span>
                    <h6 className="font-headline-sm text-[18px] group-hover:translate-x-2 transition-transform">
                      Graphene cell integration guide
                    </h6>
                    <p className="text-on-surface-variant text-[12px]">
                      89 active operators
                    </p>
                  </li>
                  <li className="group cursor-pointer">
                    <span className="font-label-caps text-[10px] text-primary">
                      #NEURAL_MAPS
                    </span>
                    <h6 className="font-headline-sm text-[18px] group-hover:translate-x-2 transition-transform">
                      Pathfinding AI logic leak
                    </h6>
                    <p className="text-on-surface-variant text-[12px]">
                      215 active operators
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  Footer Shell  */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant bg-surface-container-low mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin py-12 max-w-container-max mx-auto">
          <div className="">
            <a
              className="font-label-caps text-label-caps text-primary mb-6 cursor-pointer block"
              href="/"
            >
              ROBONEST_SYSTEMS
            </a>
            <p className="text-on-surface-variant text-sm mb-4">
              Advancing the horizon of autonomous robotics through
              community-driven engineering and open-link schematics.
            </p>
            <div className="flex gap-4">
              <a className="hover:scale-110 transition-transform" href="#">
                <img
                  alt="Facebook"
                  className="w-6 h-6 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp8U_KStH1pGzFTxaqM0V4OWFHSSilD2JMmrseZiOrtQozQVr78Kr2Ftgju1uKZq9VJ597r4Ir9jIdjkwsD6FhsV-kLV4d0Kms28QpvD3RSRWBy1gqSNQfBWN8aTTTxXpyKqHaj0tMCae0P9CrXhIdxUCLS2-Ty7EIzHgOonc6QBXYgWkfazDR5Ep5KSimuxg2efODUWK2vJLyA5AF5TFhc2Z4rFzul6KAOB2vrgBZEpAJDFkM_kgPz18PU_GmEOvGOawVkslfemc"
                />
              </a>
              <a className="hover:scale-110 transition-transform" href="#">
                <img
                  alt="Instagram"
                  className="w-6 h-6 object-contain"
                  src="https://placeholder.pics/svg/300"
                />
              </a>
              <a className="hover:scale-110 transition-transform" href="#">
                <img
                  alt="GitHub"
                  className="w-6 h-6 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBflDyPUEVQC3Idosp3GBSmtl0ROW4gJK4P7s6LVXzv39E0tXv4M1SBLWCNX7U5GWgF6qIrf89wGSMhZGlOFFwXdCDp1t1DTsGu5ev73YVFpSEuL67ZacI7g8f36LecuP34Z0ma1L7Zy-h8Pm_9sKovVzMHbRdqJkk7XKzlpe6bn5FXHTFJL4_vhQWaaLCzDp7hA6Xon5ud5wx1W8XwLQD3EJNV3UxNtFDI6jsXDth8jyA-ee0PP3E_jaVFFvT8eXfsskODvKNuHTs"
                />
              </a>
              <a className="hover:scale-110 transition-transform" href="#">
                <img
                  alt="Discord"
                  className="w-6 h-6 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvnQDAWw1_4QcHj0vrm6MaJdxD1cFST4RUIXfEflShDPmbBUAviBkny3lxdvIfvh9EfrQ7tVXT9n9xtg9WNDWQR9ge8lIJdLUsn2p6wqoQa71zt_K9IbAnRhXemL8F_L5Lc5T08nf_OUSUefBY8auAi9CBHScK47DHTj3ivvxXmh1GZpRS9bZYB9u2b6nbGWYU2g0dpBTclDFknKP6bnUkVokVnpHXbQJc0595wvL_JsC7yjsHJcFq4nxmd4a_SK9vosgghWQir3c"
                />
              </a>
            </div>
          </div>
          <div>
            <h6
              className="font-label-caps text-on-surface mb-2"
              style={{ opacity: "0" }}
            >
              INTEL_CHANNELS
            </h6>
            <ul className="space-y-1">
              <li className="">
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md"
                  href="#"
                >
                  Schematics
                </a>
              </li>
              <li className="">
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md"
                  href="#"
                >
                  API Docs
                </a>
              </li>
              <li className="">
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md"
                  href="#"
                >
                  Privacy
                </a>
              </li>
              <li className="">
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md"
                  href="#"
                >
                  Neural Link Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-label-caps text-on-surface mb-2">
              UPCOMING_EVENTS
            </h6>
            <ul className="space-y-1">
              <li className="text-on-surface-variant text-sm border-l-2 border-primary pl-3 py-1">
                <span className="block text-primary font-bold">
                  CYBER_MECH_EXPO
                </span>
                <span className="text-[10px]">NOV 14, 2077</span>
              </li>
              <li className="text-on-surface-variant text-sm border-l-2 border-outline-variant pl-3 py-1">
                <span className="block text-on-surface">TITAN_RACE_TRIALS</span>
                <span className="text-[10px]">DEC 02, 2077</span>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-label-caps text-on-surface mb-2">
              ENCRYPTED_SIGNUP
            </h6>
            <div className="flex flex-col gap-3">
              <input
                className="bg-surface-container text-primary border border-outline-variant px-4 py-2 rounded focus:border-primary focus:ring-0 transition-all font-label-caps text-[10px]"
                placeholder="OPERATOR@NEURAL.LINK"
                type="email"
              />
              <button className="bg-primary-container text-on-primary-container py-2 font-bold font-label-caps neon-glow-hover active:scale-95 transition-all">
                ESTABLISH_LINK
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin py-8 border-t border-outline-variant/30 flex justify-between items-center">
          <span className="font-label-caps text-[10px] text-outline">
            © 2026&nbsp;ROBONEST SYSTEMS. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-6">
            <span className="font-label-caps text-[10px] text-primary animate-pulse">
              SYSTEM_STATUS: NOMINAL
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
