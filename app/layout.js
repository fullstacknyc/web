export default function Layout({ children }) {
    return (
      <div>
        <header>
          <h1>[Your Name]&apos;s Portfolio</h1>
          <nav>
            <link href="/">Home</link>
            <link href="/about">About</link>
            <link href="/projects">Projects</link>
            <link href="/blog">Blog</link>
            <link href="/contact">Contact</link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        </footer>
      </div>
    );
  }