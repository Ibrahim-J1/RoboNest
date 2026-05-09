import React from "react";

export default function EventsPage() {
  return (
    <>
      {/*  TopNavBar  */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant shadow-[0_0_15px_rgba(42,229,0,0.1)]">
        <nav className="flex justify-between items-center w-full px-margin py-4 max-w-container-max mx-auto">
          <a
            href="/"
            className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(42,229,0,0.8)]"
          >
            ROBONEST
          </a>
          <div className="hidden md:flex items-center gap-8">
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
              className="font-headline-sm text-headline-sm text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Tutorials
            </a>
            <a
              className="font-headline-sm text-headline-sm text-primary border-b-2 border-primary pb-1"
              href="/events"
            >
              Events
            </a>
          </div>
          <a
            href="/build"
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold active:scale-95 transition-all shadow-[0_0_10px_rgba(42,229,0,0.4)] hover:shadow-[0_0_20px_rgba(42,229,0,0.6)] flex items-center"
          >
            Build Now
          </a>
        </nav>
      </header>
      <main className="pt-24 pb-20 px-margin max-w-container-max mx-auto space-y-16">
        {/*  Hero Title Section  */}
        <section className="flex flex-col md:flex-row justify-between items-end gap-6 border-l-4 border-primary pl-6 py-4">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] block mb-2">
              NEURAL_ARENA_v4.02
            </span>
            <h1 className="font-headline-lg text-headline-lg">
              Active Missions &amp; Rankings
            </h1>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-primary font-label-caps text-label-caps">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              LIVE_CONNECTION_STABLE
            </div>
            <p className="text-on-surface-variant text-sm mt-1">
              LATENCY: 14MS | LOC: GLOBAL_SERVER_01
            </p>
          </div>
        </section>
        {/*  Upcoming Missions (Bento Grid)  */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 group">
            <div className="glass-panel relative rounded-xl overflow-hidden h-[400px] glow-hover transition-all duration-500">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                data-alt="A cinematic, high-detail view of advanced bipedal robots competing in a neon-lit futuristic soccer stadium. The robots are sleek with carbon fiber bodies and glowing green accents, sliding across a synthetic turf under intense stadium floodlights. The atmosphere is energetic and tactical, with digital overlays showing movement vectors in a dark neo-cyber aesthetic dominated by black and emerald tones."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWxHqoo7tLzWRdzQTkpNm2tjVaoNpLeJt8LXQtkH095Uvl5alpiG0KDOTyt1DxDBWg3LaqSez8I0gME8EbezsNOIbcU8OdfljmQks2KiX7ZTvWaZ8rHSPU-D0xhIVb4BV5qi6C16gWLZU5XWfPbXzf0HSwbxjJSC5ZRuQWPAkl4AwNYkRj9RykpNAMjzgJxEfY_SDmtsvgqMFjtkmtmf-3AZchXg5_CBwlUht5ErsNShtVJNsaj01hIu6RFlfv9bADiSqypFeqNxQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="font-label-caps text-label-caps bg-primary text-on-primary px-3 py-1 rounded mb-4 inline-block">
                  MAJOR_EVENT
                </span>
                <h2 className="font-headline-md text-headline-md text-white mb-2">
                  Robo Soccer Tournament
                </h2>
                <p className="text-on-surface-variant max-w-xl mb-6">
                  Coordinate your swarm in the most intense high-speed physical
                  logic challenge of the season. 32 neural teams qualified.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary text-on-primary-fixed font-bold px-8 py-3 rounded hover:brightness-110 active:scale-95 transition-all">
                    ENTER ARENA
                  </button>
                  <div className="flex items-center gap-2 text-on-surface glass-panel px-4 py-2 rounded">
                    <span className="material-symbols-outlined text-primary">
                      schedule
                    </span>
                    <span className="font-label-caps">T-MINUS 14:02:11</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-xs font-mono text-primary/50">
                SEC_ID: 882-SOC
              </div>
            </div>
          </div>
          <div className="md:col-span-4 group">
            <div className="glass-panel relative rounded-xl overflow-hidden h-[400px] glow-hover transition-all duration-500 border-primary/20">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                data-alt="A top-down perspective of a glowing green labyrinthine maze with a small micro-robot navigating through complex geometric puzzles. The lighting is low-key, with the maze walls emitting a sharp neon green glow against a pitch-black floor. The visual style is technical and crisp, resembling a high-resolution terminal interface or a schematic diagram brought to life."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2UeWm7bj_FObqO3jw-ci0M670_5X6T_12jfPX5enjhXr8T8LEA8dqqqfHmcGegzJj2IUKV-XwiEZ3pFtU4Eb-ZHnCS7ND0zRuDPNF3ZBQFpbWzLt79QZLznOGm4ZP-rQRmaW_jgsy9RBQNjAFNaTD5-psAzwJWFr-VObFlhVa0x_DMMt1AfRzAh2fQ5Ye4ZOlZwpsgCF07RaKCREs6bCJF4Tvi6MOqJltpWuvS59ZKtlYdtBOkGhxCig_OXXkeKs0psBvvojSbR8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="font-label-caps text-label-caps border border-primary text-primary px-3 py-1 rounded mb-4 inline-block">
                  CHALLENGE
                </span>
                <h2 className="font-headline-sm text-headline-sm text-white mb-2">
                  Maze Championship
                </h2>
                <p className="text-on-surface-variant text-sm mb-6">
                  Pathfinding optimization in shifting dynamic environments.
                  Real-time neural reconfiguration required.
                </p>
                <button className="w-full border border-primary text-primary font-bold py-3 rounded hover:bg-primary/10 transition-colors">
                  REGISTER DRONE
                </button>
              </div>
            </div>
          </div>
        </section>
        {/*  Rankings Table  */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="font-headline-md text-headline-md">
              Global Rankings
            </h2>
            <div className="h-px flex-1 bg-outline-variant"></div>
          </div>
          <div className="glass-panel rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="px-8 py-4 font-label-caps text-on-surface-variant">
                    RANK
                  </th>
                  <th className="px-8 py-4 font-label-caps text-on-surface-variant">
                    TEAM_ID
                  </th>
                  <th className="px-8 py-4 font-label-caps text-on-surface-variant text-center">
                    WINS
                  </th>
                  <th className="px-8 py-4 font-label-caps text-on-surface-variant text-center">
                    NEURAL_SYNC
                  </th>
                  <th className="px-8 py-4 font-label-caps text-on-surface-variant text-right">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {/*  Rank 1  */}
                <tr className="hover:bg-primary/5 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-headline-sm">01</span>
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        workspace_premium
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-primary/20 border border-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">
                          bolt
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-primary">
                          Cyber_Strike
                        </div>
                        <div className="text-xs font-mono text-on-surface-variant">
                          CORE_V7.2
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center font-bold">1,248</td>
                  <td className="px-8 py-6 text-center">
                    <div className="w-24 h-2 bg-surface-container-highest rounded-full mx-auto overflow-hidden">
                      <div className="w-[98%] h-full bg-primary shadow-[0_0_10px_#2ae500]"></div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-bold border border-primary/20">
                      DOMINATING
                    </span>
                  </td>
                </tr>
                {/*  Rank 2  */}
                <tr className="hover:bg-primary/5 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <span className="text-on-surface font-headline-sm">
                        02
                      </span>
                      <span className="material-symbols-outlined text-on-surface-variant">
                        workspace_premium
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-surface-variant border border-outline-variant flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface-variant">
                          psychology
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-white">
                          Neural_Ninjas
                        </div>
                        <div className="text-xs font-mono text-on-surface-variant">
                          CORE_V6.9
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center font-bold">1,192</td>
                  <td className="px-8 py-6 text-center">
                    <div className="w-24 h-2 bg-surface-container-highest rounded-full mx-auto overflow-hidden">
                      <div className="w-[94%] h-full bg-primary/70"></div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-on-surface-variant px-3 py-1 rounded text-xs font-bold border border-outline-variant">
                      CHALLENGER
                    </span>
                  </td>
                </tr>
                {/*  Rank 3  */}
                <tr className="hover:bg-primary/5 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <span className="text-on-surface font-headline-sm">
                        03
                      </span>
                      <span className="material-symbols-outlined text-on-surface-variant">
                        workspace_premium
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-surface-variant border border-outline-variant flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface-variant">
                          blur_on
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-white">
                          Void_Walkers
                        </div>
                        <div className="text-xs font-mono text-on-surface-variant">
                          CORE_V7.0
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center font-bold">1,055</td>
                  <td className="px-8 py-6 text-center">
                    <div className="w-24 h-2 bg-surface-container-highest rounded-full mx-auto overflow-hidden">
                      <div className="w-[88%] h-full bg-primary/50"></div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-on-surface-variant px-3 py-1 rounded text-xs font-bold border border-outline-variant">
                      STABLE
                    </span>
                  </td>
                </tr>
                {/*  Rank 4  */}
                <tr className="hover:bg-primary/5 transition-colors group">
                  <td className="px-8 py-6 text-on-surface-variant font-mono">
                    04
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-surface-variant border border-outline-variant flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface-variant">
                          memory
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-white">
                          Silicon_Sentinels
                        </div>
                        <div className="text-xs font-mono text-on-surface-variant">
                          CORE_V4.1
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center font-bold">982</td>
                  <td className="px-8 py-6 text-center">
                    <div className="w-24 h-2 bg-surface-container-highest rounded-full mx-auto overflow-hidden">
                      <div className="w-[82%] h-full bg-primary/40"></div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-on-surface-variant px-3 py-1 rounded text-xs font-bold border border-outline-variant">
                      STABLE
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/*  Past Events Gallery Grid  */}
        <section className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-md text-headline-md">
              Historical Archives
            </h2>
            <button className="text-primary font-label-caps text-label-caps flex items-center gap-2 hover:underline">
              VIEW_ALL_LOGS{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <div className="space-y-4 group cursor-pointer">
              <div className="aspect-square glass-panel rounded-lg overflow-hidden border border-outline-variant group-hover:border-primary transition-colors">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  data-alt="A portrait of a humanoid robot head with exposed electronic circuits and glowing fiber optics. The style is industrial and dark, with a sharp focus on the complex mechanical components and the subtle green light emanating from its sensors. The image captures a sense of machine evolution and cold, calculated intelligence."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVmsZdQT5bsccBLDgD_55OYlCmMkqbEbQY3voZCsyn-PG5koRQULMdYIdXCw5rDCtXekhbqwpxSw6sdVv7cMco50rsGTrAtyOCFwOpmq90jacLCrE7r3sqvBMUhTABUVHhJM0waUEyvLRXWQWmQB71CUTUxPhn3NaASFLq9_MLsdsWNsAIyxJQM9Hasw0Xiiq78QsSgEybUDrwU69ts0-b-BNgd41LZg7rzAOJ2YgXsKTP-N1G98qnLlK3RNX9bY2ERj4zL8KYe8I"
                />
              </div>
              <div>
                <div className="text-xs font-mono text-primary">
                  ARCHIVE_2076
                </div>
                <div className="font-bold group-hover:text-primary transition-colors">
                  The Great Recalibration
                </div>
              </div>
            </div>
            <div className="space-y-4 group cursor-pointer">
              <div className="aspect-square glass-panel rounded-lg overflow-hidden border border-outline-variant group-hover:border-primary transition-colors">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  data-alt="A futuristic assembly line where mechanical arms are meticulously constructing a complex robotic core. The scene is lit with clinical blue and sharp green lights, highlighting the metallic surfaces and the intricate wiring. The mood is one of extreme precision and mass-scale technological production."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAuXB4PjAnZwfRK9WHEHyFhxIia-nDQS2i9eYwie4K975uuKP2s_Y-VWks3IT36S9la8_aSyXkouP1KY_AgMFwyi-j1AlRSBnaRcWXeicEt6UQWwCfHndhbx7vr2u6sh-4dfXCERlZ0j6Sd0KrGZno0_-Qr5VwkJNcyh2tx3dEW43XwxJbb1R5mofW_Jo15gM9QgGuy0TZEa2nAIKDiwZ-Rn3rgk24AEgAMxdbPIjTGcLeQCJNfLzvNPlv_YWfKOHQP39hN5nucYw"
                />
              </div>
              <div>
                <div className="text-xs font-mono text-primary">
                  ARCHIVE_2076
                </div>
                <div className="font-bold group-hover:text-primary transition-colors">
                  Titan Protocol v1.0
                </div>
              </div>
            </div>
            <div className="space-y-4 group cursor-pointer">
              <div className="aspect-square glass-panel rounded-lg overflow-hidden border border-outline-variant group-hover:border-primary transition-colors">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  data-alt="A deep-sea exploration drone with glowing green searchlights illuminating an underwater volcanic vent. The water is dark and murky, creating a high-contrast environment where only the mechanical explorer and the jagged rocks are visible. The aesthetic is tactical and specialized for extreme environments."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnuacYyionTyMnOmoJcVodPD___SuNMNJ95dmqnCVzlvIfq5V6xt9kWijDg2VJUm66ZVcLS5lFgFMaaYqqGg6o544fufNygnfA20HTQ_wFmbgYqqzCI5ND7N21a2Mefq-NzaxmyaLjS9l35mqYlmVbqeyzeyib0a72lMFrU4lOxR-tLzZcKX27y_s0IYdzQq-w6D1K4ueoPy-grVCzk9S08ruJ1br45UfXs6_dzmPXIHmb12pgJSjD4D5AfEN1Bj2fUw76_j1NCGg"
                />
              </div>
              <div>
                <div className="text-xs font-mono text-primary">
                  ARCHIVE_2075
                </div>
                <div className="font-bold group-hover:text-primary transition-colors">
                  Abyssal Grid Sweep
                </div>
              </div>
            </div>
            <div className="space-y-4 group cursor-pointer">
              <div className="aspect-square glass-panel rounded-lg overflow-hidden border border-outline-variant group-hover:border-primary transition-colors">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  data-alt="A sprawling data center with endless racks of servers, pulsing with rhythmic green status lights and cooling fans spinning in the darkness. The perspective is a long, symmetrical hallway that vanishes into a glowing green vanishing point, suggesting infinite computational power and data storage."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdm_47XJ61gVriqcpJgp90Yq2oGubsIdRwACYlcIpkKcnaCotnjuStdo-eGPkEprFWPpV71LYgVNveyNenhvDxDyiSGc05JBswIQU_T697lH4kmlq684ksZ6Yi9w-Rwdmo8qj0vEiD6Sd-CnIk2ZGNoesGqReG0F9TPpoVPZgX3LNd1GFossayhqOldqndMxIzlH_H_NFlEKpnKUew1lf9wmcEr5JcNDwwnll6CaehDCPXZuFpA9TO_3loL-atPvB5nPi1nmrDSgs"
                />
              </div>
              <div>
                <div className="text-xs font-mono text-primary">
                  ARCHIVE_2075
                </div>
                <div className="font-bold group-hover:text-primary transition-colors">
                  Nexus Link Genesis
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  Footer  */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin py-12 max-w-container-max mx-auto">
          <div className="space-y-4">
            <div className="font-label-caps text-label-caps text-primary">
              ROBONEST_SYSTEMS
            </div>
            <p className="text-on-surface-variant text-sm">
              Building the future of autonomous intelligence since 2072. Secure,
              decentralized, and highly tactical robotics infrastructure.
            </p>
            <div className="flex gap-4">
              <a className="transition-opacity hover:opacity-80" href="#">
                <img
                  alt="Facebook"
                  className="h-6 w-6 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp8U_KStH1pGzFTxaqM0V4OWFHSSilD2JMmrseZiOrtQozQVr78Kr2Ftgju1uKZq9VJ597r4Ir9jIdjkwsD6FhsV-kLV4d0Kms28QpvD3RSRWBy1gqSNQfBWN8aTTTxXpyKqHaj0tMCae0P9CrXhIdxUCLS2-Ty7EIzHgOonc6QBXYgWkfazDR5Ep5KSimuxg2efODUWK2vJLyA5AF5TFhc2Z4rFzul6KAOB2vrgBZEpAJDFkM_kgPz18PU_GmEOvGOawVkslfemc"
                />
              </a>
              <a className="transition-opacity hover:opacity-80" href="#">
                <img
                  alt="Instagram"
                  className="h-6 w-6 object-contain"
                  src="https://placeholder.pics/svg/300"
                />
              </a>
              <a className="transition-opacity hover:opacity-80" href="#">
                <img
                  alt="GitHub"
                  className="h-6 w-6 object-contain invert"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBflDyPUEVQC3Idosp3GBSmtl0ROW4gJK4P7s6LVXzv39E0tXv4M1SBLWCNX7U5GWgF6qIrf89wGSMhZGlOFFwXdCDp1t1DTsGu5ev73YVFpSEuL67ZacI7g8f36LecuP34Z0ma1L7Zy-h8Pm_9sKovVzMHbRdqJkk7XKzlpe6bn5FXHTFJL4_vhQWaaLCzDp7hA6Xon5ud5wx1W8XwLQD3EJNV3UxNtFDI6jsXDth8jyA-ee0PP3E_jaVFFvT8eXfsskODvKNuHTs"
                />
              </a>
              <a className="transition-opacity hover:opacity-80" href="#">
                <img
                  alt="Discord"
                  className="h-6 w-6 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvnQDAWw1_4QcHj0vrm6MaJdxD1cFST4RUIXfEflShDPmbBUAviBkny3lxdvIfvh9EfrQ7tVXT9n9xtg9WNDWQR9ge8lIJdLUsn2p6wqoQa71zt_K9IbAnRhXemL8F_L5Lc5T08nf_OUSUefBY8auAi9CBHScK47DHTj3ivvxXmh1GZpRS9bZYB9u2b6nbGWYU2g0dpBTclDFknKP6bnUkVokVnpHXbQJc0595wvL_JsC7yjsHJcFq4nxmd4a_SK9vosgghWQir3c"
                />
              </a>
            </div>
          </div>
          <div className="">
            <h4 className="font-label-caps text-label-caps text-on-surface mb-1">
              RESOURCES
            </h4>
            <ul className="text-on-surface-variant text-sm">
              <li className="mb-1">
                <a className="hover:text-primary transition-colors" href="#">
                  Schematics
                </a>
              </li>
              <li className="mb-1">
                <a className="hover:text-primary transition-colors" href="#">
                  API Docs
                </a>
              </li>
              <li className="mb-1">
                <a className="hover:text-primary transition-colors" href="#">
                  Neural Link Support
                </a>
              </li>
              <li className="mb-1">
                <a className="hover:text-primary transition-colors" href="#">
                  Hardware Whitelist
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-caps text-label-caps text-on-surface">
              LEGAL
            </h4>
            <ul className="space-y-2 text-on-surface-variant text-sm">
              <li className="">
                <a className="hover:text-primary transition-colors" href="#">
                  Privacy
                </a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" href="#">
                  Terms of Engagement
                </a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" href="#">
                  AI Ethics Protocol
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-caps text-label-caps text-on-surface">
              NEWSLETTER
            </h4>
            <div className="relative">
              <input
                className="w-full bg-surface-container-low border border-outline-variant rounded p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="OPERATOR@SYSTEM.COM"
                type="email"
              />
              <button className="absolute right-2 top-2 text-primary material-symbols-outlined">
                send
              </button>
            </div>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
              Enabling quantum-encrypted communications.
            </p>
          </div>
        </div>
        <div className="border-t border-outline-variant/30 py-6 px-margin text-center">
          <p className="font-body-md text-body-md text-on-surface-variant opacity-60">
            © 2026
            <span style={{ letterSpacing: "0.01em" }}>
              &nbsp;ROBONEST SYSTEMS. ALL RIGHTS RESERVED.
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
