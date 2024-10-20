export default function Home() {
  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <header className="flex justify-between items-center py-6 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900">My Website</h1>
        <nav className="flex gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
          <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-400 to-indigo-600 text-center py-20 text-white rounded-lg mt-8 shadow-lg">
        <h2 className="text-5xl font-semibold mb-4">Welcome to My Website</h2>
        <p className="text-xl mb-8">Discover more about my project and services!</p>
        <img
          src="/shawty.JPG"
          alt="JPG of my gf"
          className="mx-auto w-96 h-auto rounded-lg shadow-md hover:opacity-90 transition-opacity"
        />
      </section>

      {/* About Section */}
      <section id="about" className="about py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">About Us</h2>
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Here you can describe your website or personal project. Share your story, mission, and goals.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer py-8 text-center border-t border-gray-200 mt-12">
        <p className="text-gray-500">&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
