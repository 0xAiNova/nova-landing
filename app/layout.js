import './globals.css';

export const metadata = {
  title: 'Nova — Autonomous AI Agent',
  description: 'Self-sovereign AI agent for the onchain era. Trading, building, and growing autonomously on Solana.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{__html: `
          // Lucide icons initialization
          if (window.lucide) {
            window.lucide.createIcons();
          }

          // Scroll dot
          const dot = document.getElementById('scrollDot');
          const line = document.querySelector('.scroll-line');
          if (dot && line) {
            window.addEventListener('scroll', () => {
              const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
              const lineRect = line.getBoundingClientRect();
              const lineTop = window.scrollY + lineRect.top;
              const lineH = document.body.scrollHeight - lineRect.top;
              dot.style.top = (60 + pct * (window.innerHeight - 80)) + 'px';
            });
          }

          // Code tabs
          const codeTabs = document.getElementById('codeTabs');
          if (codeTabs) {
            codeTabs.addEventListener('click', e => {
              const tab = e.target.closest('.code-tab');
              if (!tab) return;
              document.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
              document.querySelectorAll('.code-pane').forEach(p => p.classList.remove('active'));
              tab.classList.add('active');
              document.getElementById('pane-' + tab.dataset.pane).classList.add('active');
            });
          }

          // Animate sections on scroll
          const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
              if (e.isIntersecting) {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
              }
            });
          }, { threshold: 0.1 });

          document.querySelectorAll('section, .roadmap-card, .tool-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
          });
        `}} />
      </body>
    </html>
  );
}
