import React from "react";

export default function ShopPage() {
  return (
    <>
      {/*  TopNavBar  */}
      <header className="bg-surface/80 backdrop-blur-xl dark:bg-surface/80 border-b border-primary/20 bg-surface-container/50 docked full-width top-0 sticky z-50 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
        <nav className="flex justify-between items-center w-full px-margin py-md max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-gutter">
            <a
              className="font-display-lg text-display-lg font-bold tracking-tighter text-primary drop-shadow-[0_0_10px_rgba(42,229,0,0.5)] text-[32px]"
              href="/"
            >
              ROBONEST
            </a>
            <div className="hidden md:flex gap-6">
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                href="#"
              >
                Tutorials
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                href="/robos"
              >
                Our Robos
              </a>
              <a
                className="font-label-md text-label-md text-primary-fixed border-b-2 border-primary-fixed pb-1"
                href="#"
              >
                Shop &amp; Track
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                href="/build"
              >
                Build your Robo
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                href="#"
              >
                Events &amp; Ranking
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-surface-container-high px-4 py-2 rounded-lg border border-primary/20">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface"
                placeholder="Search components..."
                type="text"
              />
            </div>
            <button className="material-symbols-outlined text-primary hover:bg-primary/10 p-2 rounded-lg transition-all">
              shopping_cart
            </button>
            <button className="material-symbols-outlined text-primary hover:bg-primary/10 p-2 rounded-lg transition-all">
              account_circle
            </button>
            <a
              className="bg-primary text-on-primary font-bold px-6 py-2 rounded-lg scale-95 active:scale-90 transition-transform duration-200 shadow-[0_0_15px_rgba(42,229,0,0.4)]"
              href="/build"
            >
              Build your Robo
            </a>
          </div>
        </nav>
      </header>
      <main className="max-w-screen-2xl mx-auto px-margin py-12">
        {/*  Order Tracking Bar  */}
        <section className="mb-16">
          <div className="glass-card p-8 rounded-xl border-l-4 border-primary shadow-2xl">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest">
                  TRACKING ID: RN-9942-XJ
                </span>
                <h2 className="font-headline-md text-headline-md matrix-glow text-primary">
                  Active Order Status
                </h2>
              </div>
              <div className="text-right">
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Estimated Arrival
                </span>
                <p className="font-headline-sm text-headline-sm text-primary">
                  OCT 24, 2024
                </p>
              </div>
            </div>
            <div className="relative pt-8">
              {/*  Progress Line  */}
              <div className="absolute top-[52px] left-0 w-full h-1 bg-surface-container-highest"></div>
              <div className="absolute top-[52px] left-0 w-2/3 h-1 bg-primary pulse-glow"></div>
              <div className="relative flex justify-between">
                {/*  Step 1  */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-[0_0_10px_#2ae500]">
                    <span
                      className="material-symbols-outlined text-on-primary"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      check_circle
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps text-primary">
                    Processing
                  </span>
                </div>
                {/*  Step 2  */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(42,229,0,0.6)]">
                    <span
                      className="material-symbols-outlined text-on-primary"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      precision_manufacturing
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps text-primary">
                    Assembly
                  </span>
                </div>
                {/*  Step 3  */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(42,229,0,0.6)]">
                    <span
                      className="material-symbols-outlined text-on-primary"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      local_shipping
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps text-primary">
                    In Transit
                  </span>
                </div>
                {/*  Step 4  */}
                <div className="flex flex-col items-center gap-3 opacity-40">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline flex items-center justify-center z-10">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      home_pin
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    Arrival
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col md:flex-row gap-gutter">
          {/*  Side Filter  */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="glass-card p-6 rounded-xl sticky top-28">
              <h3 className="font-headline-sm text-headline-sm mb-6 border-b border-primary/20 pb-4 text-primary">
                Filters
              </h3>
              <nav className="space-y-4">
                <label className="flex items-center gap-3 group cursor-pointer">
                  <input
                    defaultChecked
                    className="rounded border-primary/30 bg-surface-container text-primary focus:ring-primary focus:ring-offset-background"
                    type="checkbox"
                  />
                  <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                    All Hardware
                  </span>
                </label>
                <label className="flex items-center gap-3 group cursor-pointer">
                  <input
                    className="rounded border-primary/30 bg-surface-container text-primary focus:ring-primary focus:ring-offset-background"
                    type="checkbox"
                  />
                  <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                    Kits
                  </span>
                </label>
                <label className="flex items-center gap-3 group cursor-pointer">
                  <input
                    className="rounded border-primary/30 bg-surface-container text-primary focus:ring-primary focus:ring-offset-background"
                    type="checkbox"
                  />
                  <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                    Individual Parts
                  </span>
                </label>
                <label className="flex items-center gap-3 group cursor-pointer">
                  <input
                    className="rounded border-primary/30 bg-surface-container text-primary focus:ring-primary focus:ring-offset-background"
                    type="checkbox"
                  />
                  <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                    Fields &amp; Arenas
                  </span>
                </label>
              </nav>
              <div className="mt-8 pt-8 border-t border-primary/20">
                <span className="font-label-caps text-label-caps text-on-surface-variant mb-4 block">
                  SYSTEM STATUS
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_5px_#2ae500]"></span>
                  <span className="text-xs text-primary">Warehouse Active</span>
                </div>
              </div>
            </div>
          </aside>
          {/*  Hardware Catalog  */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-gutter">
              {/*  Item 1  */}
              <div className="glass-card rounded-xl overflow-hidden flex flex-col group hover:border-primary/50 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A high-precision robotics kit featuring green circuit boards, metallic gears, and sophisticated sensors laid out on a dark, reflective technical surface. The image has a futuristic vibe with neon blue and green glowing accents, shallow depth of field, and industrial aesthetic consistent with a dark hardware portal. The lighting is focused and clinical, emphasizing mechanical quality."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmlk0CjRDkeIBBKll2-5d_HNg756GjhM5LV5kfamL6tKeOXu4W1suU7caJ9k68HelhP_SIJLOkL5SdpyJ67FqrZ-_GhC-uaUNMx0P5-LjTeWQDXCbKwrrd_JttDiyJayusTUvJCAD4bzc8bil3KFI9GI3DBfeZBZllxY2HJdj7XJFT9t8HnQIzk-4_17DBDt7W8TBiS73lQSHkd10_wMdfEA-Tgm8NY8X_UENRX83vnWAf8XOgeup69KLc4jZPUznmXKmQ5DKTYauw"
                  />
                  <span className="absolute top-4 left-4 font-label-caps text-[10px] bg-primary/80 text-on-primary px-2 py-1 rounded">
                    KIT-001
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">
                    Line Follower Pro Kit
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Industrial-grade PID controlled robot with dual IR sensors
                    and precision motors.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      ৳4,500
                    </span>
                    <button className="bg-primary text-on-primary font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_10px_rgba(42,229,0,0.3)]">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>{" "}
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/*  Item 2  */}
              <div className="glass-card rounded-xl overflow-hidden flex flex-col group hover:border-primary/50 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A sleek soccer-playing robot with a polished black and chrome chassis, illuminated by internal deep cyan LEDs. The robot is positioned on a dark green textured field, designed to reflect a high-stakes competitive atmosphere. The visual style is cyber-industrial with high contrast, sharp edges, and a sense of controlled mechanical power in a dark-mode environment."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMI4zVq1gyqpr3YC-bUPllITe4GN9rYgPKkuEwitnrYcVof3I-J8-Nd08Syp0L6WtGTnPHUEiFEVAy37KmftDB4At67fqeRlasNw7vZ1lGKM6m60T4haK-mq2d_uWJ6xmtAw7i0gHV4EKhM3kKwPbsQlJ117vTgweuruF6a5s9TCP1fUFzUzTHO1tagXxv6PGk0aKe_V4cjC2dbPLY-qjmpqp-14HbVQ7ndkW-36aBXsx5fVE8YIOWjoh-r0rBUSaT8Yyhvpz_Ixe-"
                  />
                  <span className="absolute top-4 left-4 font-label-caps text-[10px] bg-primary/80 text-on-primary px-2 py-1 rounded">
                    STRKR-02
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">
                    Soccer Striker Mk.II
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Advanced omni-directional drive with high-torque solenoids
                    for powerful strikes.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      ৳8,200
                    </span>
                    <button className="bg-primary text-on-primary font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_10px_rgba(42,229,0,0.3)]">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>{" "}
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/*  Item 3  */}
              <div className="glass-card rounded-xl overflow-hidden flex flex-col group hover:border-primary/50 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Macro photography of a sophisticated micro-robot processor and sensor array, glowing with tactical deep blue light. The background is a dark, complex network of circuitry that suggests a labyrinth or maze solver architecture. The mood is highly technical and precise, utilizing a dark color palette with vivid circuitry highlights to emphasize advanced navigation capabilities."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqC43Rj-1as7D-UhNy__sZo3CdcMEsK_AUD2XrayCyw7ID7ijlizobiAaheCdTihJfvE4kLPkqXFp_9J9VmKTKdpTa1OG5TUwEN0KWzmf4I0v5b42iTxmqP89Y2nSzToHoE2wCij0BijE5mpkruBf8hrIh4-F7v1ckL2jgPt5QrK6sgNSm7ox8LVnfDZSu4iWWCt0nyG1aLx8M7PQOszfZOss8qOMpa1mCVsXqUY5kYmXzZhB0ig8NFN71ZbNZ7OCB_jNQp8fN-9Vm"
                  />
                  <span className="absolute top-4 left-4 font-label-caps text-[10px] bg-primary/80 text-on-primary px-2 py-1 rounded">
                    MAZE-S
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">
                    Micro Maze Solver
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Ultra-compact ultrasonic mapping kit designed for rapid
                    wall-solving algorithms.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      ৳3,800
                    </span>
                    <button className="bg-primary text-on-primary font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_10px_rgba(42,229,0,0.3)]">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>{" "}
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/*  Item 4  */}
              <div className="glass-card rounded-xl overflow-hidden flex flex-col group hover:border-primary/50 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A professional competition line follower field, consisting of a matte black surface with brilliant neon white and cyan geometric tracks. The lighting creates a high-contrast environment with a subtle digital grid overlay. This arena is depicted as a high-tech training ground for robotics, featuring a clean, futuristic, and clinical visual style suitable for elite engineering competitions."
                    src="https://lh3.googleusercontent.com/aida/ADBb0ujliqErPuixEnhO4FgoqhE6MM-UYaT8OZm-zDqaI8V32rufMBQ00V9yiupxsThVYWVlNbuZ5q6lWundFDz50lMuqIzNqrw_Ik8Hq3x7qRYMtFrREvbaim7RjRQY92uR8x9lmc0zBookKiFz3_KhnVNlpdZLVhcnVq8SZxdS15QnJ5N8vhWvMITJclNKsgzie0B4a49DrsnPbeM5dHe_SnCjiztyCdHFzl5nevzXMdfEtcKimOnefxkq1cv5-uLW0e0FAe39yh-RG6k"
                  />
                  <span className="absolute top-4 left-4 font-label-caps text-[10px] bg-primary/80 text-on-primary px-2 py-1 rounded">
                    FIELD-LF
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">
                    Tactical Line Field
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    High-contrast competition surface with modular track
                    segments for various difficulty levels.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      ৳2,500
                    </span>
                    <button className="bg-primary text-on-primary font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_10px_rgba(42,229,0,0.3)]">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>{" "}
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/*  Item 5  */}
              <div className="glass-card rounded-xl overflow-hidden flex flex-col group hover:border-primary/50 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A complex 3D micro-maze championship arena featuring vertical translucent panels and integrated LED tracking strips. The setting is a dark tech laboratory with ambient cyan and deep green lighting. The architecture of the maze is intricate and professional, embodying a sense of high-stakes engineering challenge within a neo-cyber aesthetic. The image focuses on the structural complexity and digital integration."
                    src="https://lh3.googleusercontent.com/aida/ADBb0ujc1YjkZ-pLIZA0QF6ynNmcm3oXVGhL-zUFy1Pn6P0hk_e-611K0OopOchbFVnyDfGsxcWGWs_aUW-1oL1HAsxEGBJV5NAb84RowcxNb7wQVD9oNnGV5-4Ev-HaCX4hlGERy88FNdDCUAwUq0yNyQaowHm2PZAWqRXZUN2jHyRiFDnMXMCg10zRQuKYZtYAhWTcC6rBlnu8c7PJ68AoOQC9qULUeHPUDzxXkkUZeiV0s-2OcvEaeGgYC4YuGxDKiUlTSh8VvguVyw4"
                  />
                  <span className="absolute top-4 left-4 font-label-caps text-[10px] bg-primary/80 text-on-primary px-2 py-1 rounded">
                    ARENA-MX
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">
                    Maze Championship Arena
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Official WRO regulation maze arena with magnetic base and
                    transparent obstacle modules.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      ৳12,000
                    </span>
                    <button className="bg-primary text-on-primary font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_10px_rgba(42,229,0,0.3)]">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>{" "}
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/*  Item 6  */}
              <div className="glass-card rounded-xl overflow-hidden flex flex-col group hover:border-primary/50 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A massive, futuristic robosoccer stadium platform with glowing boundary lines and integrated digital scoreboards. The environment is vast and cinematic, featuring a dark industrial floor and atmospheric green glowing lights. The design feels like a tactical command center for robotic sports, emphasizing scale, precision, and high-tech infrastructure with a sophisticated dark-mode digitalism aesthetic."
                    src="https://lh3.googleusercontent.com/aida/ADBb0uit9c2OGVi99mD2AwMG3hd8b3oS-OiD6DTGIRIufyyieWDqc_B1rHzEazyC02nO07_jIzzpbg92AijRwvrGcnTN7fW9ZRtN-_4PgqU0OI6yi-QQIRNa70c2eyyuK2hlFrrsP-VBgHXFUxmZuZ-NKawOWjZ1Ii9xyF66xKGz15hxE-wdJ9dhJtjdKes968i98WPtSbrM7ZFar_8s_4eG8WuwKRW66sPqCJWUPIsv9OMQUPYg_2uNOOtE-IaFxBq-2r9xGkXdj9DYYIA"
                  />
                  <span className="absolute top-4 left-4 font-label-caps text-[10px] bg-primary/80 text-on-primary px-2 py-1 rounded">
                    STDM-SOC
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">
                    RoboSoccer Stadium
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Full-scale RoboCup Junior compliant field with electronic
                    goals and IR beacons.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      ৳15,500
                    </span>
                    <button className="bg-primary text-on-primary font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_10px_rgba(42,229,0,0.3)]">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>{" "}
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/*  Footer  */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest full-width bottom-0 relative mt-xl border-t border-primary/20 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin py-xl max-w-screen-2xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <span className="font-headline-md text-headline-md text-primary block mb-4">
              ROBONEST
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Forging the future of modular robotics through advanced
              engineering and neural architectures.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-label-caps text-primary tracking-widest">
              RESOURCES
            </h4>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline transition-all"
              href="#"
            >
              Schematics
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline transition-all"
              href="#"
            >
              API Docs
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-label-caps text-primary tracking-widest">
              LEGAL
            </h4>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline transition-all"
              href="#"
            >
              Privacy Protocol
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline transition-all"
              href="#"
            >
              Neural Link Support
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-label-caps text-primary tracking-widest">
              SYSTEM STATUS
            </h4>
            <div className="p-4 bg-surface-container rounded-lg border border-primary/20">
              <p className="font-label-sm text-label-sm text-on-surface-variant opacity-80 hover:opacity-100">
                © 2026 ROBONEST COMMAND CENTER. ALL SYSTEMS OPERATIONAL.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
