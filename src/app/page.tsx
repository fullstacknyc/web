export default function Home() {
  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <header className="header flex justify-between items-center py-4">
        <h1 className="text-4xl font-bold">My Website</h1>
        <nav className="nav flex gap-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero bg-gray-100 text-center py-16">
        <h2 className="text-5xl font-semibold mb-4">Welcome to My Website</h2>
        <p className="text-lg mb-8">Discover more about my project and services!</p>
        <img
          src="/shawty.JPG"
          alt="JPG of my gf"
          className="mx-auto w-96 h-auto"
        />
      </section>

      {/* About Section */}
      <section id="about" className="about py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-center max-w-2xl mx-auto">
          Here you can describe your website or personal project. Share your story, mission, and goals.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer py-8 text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
