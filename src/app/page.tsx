import Image from 'next/image'; // Place the import here

export default function Home() {
  return (
    <div className="container mx-auto p-8 max-w-screen-xl">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 border-b border-gray-300">
        <h1 className="text-4xl font-bold text-primary">My Website</h1>
        <nav className="space-x-6">
          <a href="#about" className="text-lg text-foreground hover:text-secondary transition">About</a>
          <a href="#features" className="text-lg text-foreground hover:text-secondary transition">Features</a>
          <a href="#contact" className="text-lg text-foreground hover:text-secondary transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 text-center py-20 mt-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-semibold text-primary mb-4">Welcome to My Website</h2>
        <p className="text-lg text-gray-600 mb-8">Discover more about my project and services!</p>
        <Image
          src="/shawty.JPG"
          alt="JPG of my gf"
          className="mx-auto rounded-md shadow-lg"
          width={384} // Adjust width according to your needs
          height={auto} // Use a specific height or calculate it based on the image aspect ratio
          layout="responsive" // Optional: This will make the image responsive
        />
        <a href="#about" className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition">
          Learn More
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">About Us</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600">
          Here you can describe your website or personal project. Share your story, mission, and goals.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="feature-card p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-secondary">Feature 1</h3>
            <p className="text-gray-600 mt-4">Description of the first feature.</p>
          </div>
          <div className="feature-card p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-secondary">Feature 2</h3>
            <p className="text-gray-600 mt-4">Description of the second feature.</p>
          </div>
          <div className="feature-card p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-secondary">Feature 3</h3>
            <p className="text-gray-600 mt-4">Description of the third feature.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-primary text-white">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
