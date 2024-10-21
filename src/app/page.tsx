import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-8 max-w-screen-xl">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 border-b border-gray-300 sticky top-0 bg-white z-50 shadow-sm">
        <h1 className="text-4xl font-bold text-primary">My Website</h1>
        <nav className="space-x-6">
          <a
            href="#about"
            className="text-lg text-foreground hover:text-secondary transition"
          >
            About
          </a>
          <a
            href="#features"
            className="text-lg text-foreground hover:text-secondary transition"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-lg text-foreground hover:text-secondary transition"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center py-20 mt-8 rounded-lg shadow-md relative">
      <h2 className="text-6xl font-bold text-red-500 mb-4">Welcome to My Website</h2>
        <p className="text-xl text-white mb-8">
          Discover more about my project and services!
        </p>
        <Image
          src="/shawty.JPG"
          alt="JPG of my gf"
          className="mx-auto rounded-md shadow-lg"
          width={1104}
          height={621}
          style={{ width: "100%", height: "auto" }}
        />

        <a
          href="#about"
          className="mt-8 inline-block bg-white text-primary px-6 py-3 rounded-full shadow hover:bg-secondary transition-transform transform hover:scale-105"
        >
          Learn More
        </a>
        {/* Adding a subtle pattern to the hero */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">About Us</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Here you can describe your website or personal project. Share your
          story, mission, and goals.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="feature-card p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-secondary">Feature 1</h3>
            <p className="text-gray-600 mt-4">
              Description of the first feature.
            </p>
          </div>
          <div className="feature-card p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-secondary">Feature 2</h3>
            <p className="text-gray-600 mt-4">
              Description of the second feature.
            </p>
          </div>
          <div className="feature-card p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-secondary">Feature 3</h3>
            <p className="text-gray-600 mt-4">
              Description of the third feature.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-primary text-white">
        <div className="container mx-auto">
          <p className="mb-4">&copy; 2024 My Website. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-secondary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
