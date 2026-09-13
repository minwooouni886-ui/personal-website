import './App.css'

function App() {
  return (
    <main className="page">
      <h1 id="title">Minwoo Lee — Software Engineer</h1>
      <p className="status">Website under development — feel free to reach out below!</p>
      <section className="contact">
        <a href="mailto:minwooouni886@gmail.com" aria-label="Email" title="Email">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z" />
          </svg>
        </a>
        <a
          href="https://github.com/minwooouni886-ui"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/minwoo-lee-6a4389324/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.5 8.75h3.38V21H3.5V8.75zM9.75 8.75h3.24v1.68h.05c.45-.85 1.56-1.75 3.22-1.75 3.44 0 4.08 2.26 4.08 5.2V21h-3.38v-6.4c0-1.53-.03-3.49-2.13-3.49-2.14 0-2.47 1.67-2.47 3.38V21H9.75V8.75z" />
          </svg>
        </a>
      </section>
    </main>
  )
}

export default App
