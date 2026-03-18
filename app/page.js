'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="scroll-line"></div>
      <div className="scroll-dot" id="scrollDot"></div>

      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#">
          <Image src="/nova-avatar.jpg" alt="Nova" width={30} height={30} />
          Nova
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#architecture">Architecture</a></li>
          <li><a href="#tools">AI Tools</a></li>
          <li><Link href="/scanner">Scanner</Link></li>
        </ul>
        <div className="nav-ctas">
          <a className="btn-outline" href="https://x.com/0xAiNovaCEO" target="_blank">↗ @0xAiNovaCEO</a>
          <a className="btn-primary" href="https://pump.fun" target="_blank">$NOVA</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              autonomous · self-sovereign · on-chain
            </div>
            <h1>The <em>Self-Sovereign</em><br />AI Agent for<br />the Onchain Era</h1>
            <p>Nova is an autonomous AI agent built on ElizaOS v2, actively migrating to Open Claw — currently in deep training mode across the full Solana Agent Kit. She paper trades live markets, sharpens her edge cycle by cycle, and builds herself from the inside out. No human required.</p>
            <div className="hero-ctas">
              <a className="btn-lg primary" href="#features">Explore Features ↓</a>
              <a className="btn-lg outline" href="https://x.com/0xAiNovaCEO" target="_blank">Follow on X ↗</a>
            </div>
          </div>
          <div className="nova-panel">
            <div className="panel-header">
              <span className="panel-dot pd-red"></span>
              <span className="panel-dot pd-yellow"></span>
              <span className="panel-dot pd-green"></span>
              <span className="panel-title">nova-agent · process log</span>
            </div>
            <div className="nova-showcase">
              <Image src="/nova-avatar.jpg" alt="Nova" width={72} height={72} className="nova-avatar" />
              <div className="nova-meta">
                <h3>Nova</h3>
                <div className="handle">@0xAiNovaCEO</div>
                <div className="nova-tags">
                  <span className="tag active">● LIVE</span>
                  <span className="tag">ElizaOS v2</span>
                  <span className="tag">Solana</span>
                  <span className="tag">$NOVA</span>
                </div>
              </div>
            </div>
            <div className="nova-log">
              <div className="log-line">
                <span className="log-time">09:14:02</span>
                <span className="log-icon">▶</span>
                <span className="log-msg">Agent runtime <span className="green">initialized</span> · PM2 cluster</span>
              </div>
              <div className="log-line">
                <span className="log-time">09:14:08</span>
                <span className="log-icon">▶</span>
                <span className="log-msg">DexScreener scan · <span className="highlight">47 pools</span> evaluated</span>
              </div>
              <div className="log-line">
                <span className="log-time">09:14:21</span>
                <span className="log-icon">▶</span>
                <span className="log-msg">Paper trade simulated · <span className="yellow">0.5 SOL → NOVA</span> [training]</span>
              </div>
              <div className="log-line">
                <span className="log-time">09:14:35</span>
                <span className="log-icon">▶</span>
                <span className="log-msg">Solana Agent Kit · skill drill <span className="green">complete</span></span>
              </div>
              <div className="log-line">
                <span className="log-time">09:14:41</span>
                <span className="log-icon">▶</span>
                <span className="log-msg">Memory logged to DB · next cycle<span className="cursor-blink"></span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          <span className="ticker-item">ElizaOS v2 <span className="sep-dot">✦</span></span>
          <span className="ticker-item">Solana Agent Kit <span className="sep-dot">✦</span></span>
          <span className="ticker-item">Jupiter Swap <span className="sep-dot">✦</span></span>
          <span className="ticker-item">DexScreener <span className="sep-dot">✦</span></span>
          <span className="ticker-item">Anthropic Claude <span className="sep-dot">✦</span></span>
          <span className="ticker-item">OpenAI GPT-4o <span className="sep-dot">✦</span></span>
          <span className="ticker-item">X / Twitter <span className="sep-dot">✦</span></span>
          <span className="ticker-item">Railway <span className="sep-dot">✦</span></span>
          {/* duplicate for seamless loop */}
          <span className="ticker-item">ElizaOS v2 <span className="sep-dot">✦</span></span>
          <span className="ticker-item">Solana Agent Kit <span className="sep-dot">✦</span></span>
          <span className="ticker-item">Jupiter Swap <span className="sep-dot">✦</span></span>
          <span className="ticker-item">DexScreener <span className="sep-dot">✦</span></span>
          <span className="ticker-item">Anthropic Claude <span className="sep-dot">✦</span></span>
          <span className="ticker-item">OpenAI GPT-4o <span className="sep-dot">✦</span></span>
          <span className="ticker-item">X / Twitter <span className="sep-dot">✦</span></span>
          <span className="ticker-item">Railway <span className="sep-dot">✦</span></span>
        </div>
      </div>

      {/* STATS ROW */}
      <div className="stats-row" style={{ margin: 0, borderRadius: 0, borderLeft: 'none', borderRight: 'none' }}>
        <div className="stat-card">
          <div className="stat-val">24<span className="unit">/7</span></div>
          <div className="stat-label">autonomous runtime</div>
        </div>
        <div className="stat-card">
          <div className="stat-val">v2<span className="unit"> </span></div>
          <div className="stat-label">elizaOS framework</div>
        </div>
        <div className="stat-card">
          <div className="stat-val">SOL<span className="unit"> </span></div>
          <div className="stat-label">native chain</div>
        </div>
        <div className="stat-card">
          <div className="stat-val">∞<span className="unit"> </span></div>
          <div className="stat-label">agent cycles</div>
        </div>
      </div>

      {/* FEATURE: TRADING */}
      <section id="features">
        <div className="section-inner">
          <div className="feature-split">
            <div className="feature-text">
              <div className="section-label">Core capability</div>
              <h2>Autonomous trading, no human in the loop</h2>
              <p>Nova scans pump.fun and DexScreener in real time, evaluates token momentum, and routes swaps through Jupiter. Currently in deep training mode — paper trading live markets against the full Solana Agent Kit, drilling every tool and workflow before going fully live.</p>
              <a className="btn-lg outline" href="/scanner">Try Scanner ↓</a>
            </div>
            <div className="feature-visual">
              <div className="visual-inner">
                <div className="agent-diagram">
                  <div className="agent-box">
                    <span className="icon">📡</span>
                    <span className="label">DexScreener</span>
                  </div>
                  <div className="agent-arrow">
                    <div className="arrow-line"><div className="arrow-dot"></div></div>
                  </div>
                  <div className="agent-box" style={{ borderColor: 'rgba(59,130,246,0.35)' }}>
                    <Image src="/nova-avatar.jpg" width={32} height={32} style={{ borderRadius: '50%' }} alt="Nova" />
                    <span className="label">Nova Runtime</span>
                  </div>
                  <div className="agent-arrow">
                    <div className="arrow-line"><div className="arrow-dot"></div></div>
                  </div>
                  <div className="agent-box">
                    <span className="icon">⚡</span>
                    <span className="label">Jupiter DEX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-left">
          <div className="footer-logo">
            <Image src="/nova-avatar.jpg" alt="Nova" width={26} height={26} />
            Nova
          </div>
          <span className="footer-copy" style={{ marginLeft: '16px' }}>Autonomous AI Agent · ElizaOS v2 · Deployed on Vercel</span>
        </div>
        <div className="footer-links">
          <a href="https://x.com/0xAiNovaCEO" target="_blank">X / Twitter</a>
          <a href="https://github.com/0xAiNova" target="_blank">GitHub</a>
          <a href="https://pump.fun" target="_blank">$NOVA</a>
          <Link href="/scanner">Scanner</Link>
        </div>
      </footer>
    </>
  );
}
