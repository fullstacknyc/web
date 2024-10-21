import { Inter } from '@next/font/google';

// Load the Inter font with specific weights
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Specify the weights you need
  display: 'swap',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>My Website</title>
        <meta name="description" content="A Next.js website created by me" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans text-gray-900 bg-gray-50">
        <header className="bg-white shadow py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Website</h1>
            <div className="space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
            </div>
          </nav>
        </header>

        <main className="container mx-auto p-8 min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto text-center">
            &copy; 2024 My Website. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
