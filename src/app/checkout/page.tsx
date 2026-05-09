import React from "react";

export default function CheckoutPage() {
  return (
    <>
      {/*  TopNavBar  */}
      <header className="docked full-width top-0 sticky z-50 bg-surface/80 backdrop-blur-xl dark:bg-surface/80 border-b border-outline-variant/30 bg-surface-container/50 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between items-center w-full px-margin py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <a
              className="font-display-lg text-display-lg font-bold tracking-tighter text-primary drop-shadow-[0_0_10px_rgba(42,229,0,0.5)] text-3xl"
              href="/"
            >
              ROBONEST
            </a>
            <nav className="hidden md:flex gap-6">
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-md text-label-md"
                href="#"
              >
                Tutorials
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-md text-label-md"
                href="/robos"
              >
                Our Robos
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-md text-label-md"
                href="#"
              >
                Shop &amp; Track
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-md text-label-md"
                href="/build"
              >
                Build your Robo
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-md text-label-md"
                href="#"
              >
                Events &amp; Ranking
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-surface-container-high rounded-lg px-3 py-1 border border-outline-variant/30">
              <span className="material-symbols-outlined text-sm text-on-surface-variant mr-2">
                search
              </span>
              <span className="text-on-surface-variant text-sm">
                Search systems...
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <button className="material-symbols-outlined p-2 hover:bg-primary/10 rounded-lg transition-all text-on-surface-variant">
                shopping_cart
              </button>
              <button className="material-symbols-outlined p-2 hover:bg-primary/10 rounded-lg transition-all text-on-surface-variant">
                account_circle
              </button>
              <a
                className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold scale-95 active:scale-90 transition-transform duration-200 glow-primary"
                href="/build"
              >
                Build your Robo
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow max-w-screen-2xl mx-auto w-full px-margin py-10">
        {/*  Active Order Tracking  */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <span className="font-label-caps text-label-caps text-primary">
                SYSTEM_STATUS:
              </span>
              <span className="text-primary text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                SECURE_CHECKOUT_PROTOCOL_ACTIVE
              </span>
            </div>
            <span className="font-label-caps text-label-caps text-outline">
              STEP 02 OF 03
            </span>
          </div>
          <div className="relative h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-primary glow-primary w-2/3 transition-all duration-1000"></div>
          </div>
          <div className="grid grid-cols-3 mt-4">
            <div className="text-left text-primary font-bold text-xs font-label-caps">
              01. CART_VERIFIED
            </div>
            <div className="text-center text-primary font-bold text-xs font-label-caps">
              02. DEPLOYMENT_DATA
            </div>
            <div className="text-right text-outline font-bold text-xs font-label-caps">
              03. TRANSACTION_FINAL
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/*  Left Column: Checkout Forms  */}
          <div className="lg:col-span-8 space-y-8">
            {/*  Deployment Address Section  */}
            <section className="glass-panel p-8 rounded-xl relative overflow-hidden">
              <div className="scanline"></div>
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">
                  location_on
                </span>
                <h2 className="font-headline-md text-headline-md">
                  Deployment Address
                </h2>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block font-label-caps text-label-caps text-outline mb-2">
                    FULL NAME / OPERATOR ID
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="John Connor"
                    type="text"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-label-caps text-label-caps text-outline mb-2">
                    STREET ADDRESS
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="734 Sky Net Blvd, Sector 7G"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps text-outline mb-2">
                    CITY
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="San Francisco"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps text-outline mb-2">
                    POSTAL CODE
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="94101"
                    type="text"
                  />
                </div>
              </form>
            </section>
            {/*  Payment Gateway Section  */}
            <section className="glass-panel p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">
                  account_balance_wallet
                </span>
                <h2 className="font-headline-md text-headline-md">
                  Payment Protocol
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {/*  Card Option  */}
                <div className="border-2 border-primary bg-primary/5 p-4 rounded-xl cursor-pointer flex flex-col items-center justify-center gap-3 transition-all glow-primary">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    credit_card
                  </span>
                  <span className="font-label-caps text-label-caps text-primary">
                    CREDIT CARD
                  </span>
                </div>
                {/*  bKash Option  */}
                <div className="border border-outline-variant/30 bg-surface-container-low p-4 rounded-xl cursor-pointer flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-all">
                  <span className="material-symbols-outlined text-on-surface-variant text-2xl">
                    account_balance
                  </span>
                  <span className="font-label-caps text-label-caps text-outline">
                    BKASH
                  </span>
                </div>
                {/*  Nagad Option  */}
                <div className="border border-outline-variant/30 bg-surface-container-low p-4 rounded-xl cursor-pointer flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-all">
                  <span className="material-symbols-outlined text-on-surface-variant text-2xl">
                    shield_moon
                  </span>
                  <span className="font-label-caps text-label-caps text-outline">
                    NAGAD
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block font-label-caps text-label-caps text-outline mb-2">
                    CARD NUMBER
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono"
                      placeholder="XXXX XXXX XXXX XXXX"
                      type="text"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
                      lock
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-caps text-label-caps text-outline mb-2">
                      EXPIRY DATE
                    </label>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono"
                      placeholder="MM / YY"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-label-caps text-outline mb-2">
                      CVV
                    </label>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono"
                      placeholder="***"
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/*  Right Column: Order Summary  */}
          <aside className="lg:col-span-4 sticky top-28">
            <div className="glass-panel p-8 rounded-xl border-l-4 border-l-primary">
              <a
                className="flex items-center gap-2 text-xs font-label-caps text-outline hover:text-primary transition-colors mb-4"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">
                  arrow_back
                </span>{" "}
                BACK TO SHOP
              </a>
              <h3 className="font-headline-sm text-headline-sm mb-6 flex justify-between items-center">
                Order Summary
                <span className="text-xs font-label-caps text-outline">
                  ID: RN-4902
                </span>
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">
                    Micro Maze Solver
                  </span>
                  <span className="font-mono text-primary">৳3,800</span>
                </div>
              </div>
              <div className="border-t border-outline-variant/20 pt-6 space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-outline">Micro Maze Solver</span>
                  <span className="font-mono">৳3,800</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-outline">ESTIMATED TAX</span>
                  <span className="font-mono">৳150</span>
                </div>
              </div>
              <div className="border-t border-primary/30 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-label-caps text-label-caps text-primary">
                      TOTAL_PAYABLE
                    </p>
                    <p className="text-xs text-outline">
                      QUANTUM ENCRYPTED TRANSACTION
                    </p>
                  </div>
                  <p className="text-3xl font-bold font-mono text-primary">
                    ৳4,140
                  </p>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold text-lg pulse-primary transition-all duration-300 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">encrypted</span>
                Complete Transaction
              </button>
              <div className="mt-6 p-4 rounded bg-surface-container-low border border-outline-variant/10 text-xs text-outline space-y-2">
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary">
                    verified_user
                  </span>
                  End-to-end 256-bit AES Encryption
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary">
                    local_shipping
                  </span>
                  Estimated Deployment: 48-72 Hours
                </p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl h-48 relative border border-outline-variant/30">
              <img
                className="w-full h-full object-cover grayscale opacity-50"
                data-alt="A macro photograph of a high-tech circuit board with glowing blue microchips and intricate copper pathways. The image has a deep techno-noir aesthetic with soft neon luminescence against a dark, metallic background. The focus is sharp on a central processing unit, symbolizing advanced robotics and secure data processing within a futuristic command center atmosphere."
                src="https://lh3.googleusercontent.com/aida/ADBb0ugohlm06F5N5SP2v5HpNYgOQg8McPIT-ju8PWqff2b-qK9Mm1FPw2BP9IqTgDn1xljrgMM8GQiz6PFwmPl-EHK6q0GEBwzozimGqa6LPHK_NWM4jbhf7AJYpKyoP07iwMbD856ARq6u2tHIS6L8YeW7K2050CdwUa2sZx-pwMtufr-8A51WIsjBKDq9bGHFQazT1kQH8kw51Va_vucMA4v62WLg_-USXNjWi4DlxHpE2up3rPSZBbo5IAz-DRxGoJvJPXpuk83XDwQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="font-label-caps text-label-caps text-primary text-[10px]">
                  PRODUCTION_LEVEL: ALPHA
                </p>
                <p className="font-headline-sm text-sm text-white">
                  RoboNest R&amp;D Facility
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      {/*  Footer  */}
      <footer className="full-width bottom-0 relative mt-xl bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin py-xl max-w-screen-2xl mx-auto">
          <div className="md:col-span-1">
            <span className="font-headline-md text-headline-md text-primary block mb-4">
              ROBONEST
            </span>
            <p className="font-body-sm text-sm text-on-surface-variant max-w-xs">
              Forging the next generation of autonomous defenders. All robotic
              systems are bound by the prime directives of the Nest.
            </p>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-primary mb-6">
              RESOURCES
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary underline transition-all"
                href="#"
              >
                Schematics
              </a>
              <a
                className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary underline transition-all"
                href="#"
              >
                API Docs
              </a>
              <a
                className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary underline transition-all"
                href="#"
              >
                Neural Link Support
              </a>
              <a
                className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary underline transition-all"
                href="#"
              >
                Firmware Updates
              </a>
            </nav>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-primary mb-6">
              PROTOCOLS
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary underline transition-all"
                href="#"
              >
                Privacy Protocol
              </a>
              <a
                className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary underline transition-all"
                href="#"
              >
                Security Terms
              </a>
              <a
                className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary underline transition-all"
                href="#"
              >
                Refund Logic
              </a>
            </nav>
          </div>
          <div className="">
            <h4 className="font-label-caps text-label-caps text-primary mb-6">
              SYSTEM_LOG
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-4 opacity-80 hover:opacity-100">
              © 2026 ROBONEST COMMAND CENTER. ALL SYSTEMS OPERATIONAL.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-outline hover:text-primary cursor-pointer">
                rss_feed
              </span>
              <span className="material-symbols-outlined text-outline hover:text-primary cursor-pointer">
                terminal
              </span>
              <span className="material-symbols-outlined text-outline hover:text-primary cursor-pointer">
                memory
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
