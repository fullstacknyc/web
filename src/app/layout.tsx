export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main> {/* This is where `page.tsx` content will be inserted */}
        <footer>© 2024 My Website</footer>
      </body>
    </html>
  );
}
