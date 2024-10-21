import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
      {/* Header Section */}
      <header className="flex justify-between items-center py-6 border-b border-gray-300">
        <h1 className="text-4xl font-extrabold text-primary">My Website</h1>
        <nav className="space-x-6">
          <a href="#about" className="text-lg font-medium text-foreground hover:text-secondary transition">About</a>
          <a href="#features" className="text-lg font-medium text-foreground hover:text-secondary transition">Features</a>
          <a href="#contact" className="text-lg font-medium text-foreground hover:text-secondary transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 text-center py-20 mt-8 rounded-lg shadow-lg">
        <h2 className="text-5xl font-semibold text-primary mb-6">Welcome to My Website</h2>
        <p className="text-lg text-gray-600 mb-8">Discover more about my project and services!</p>
        <div className="relative max-w-4xl mx-auto">
          <Image
            src="/shawty.JPG"
            alt="JPG of my gf"
            className="rounded-md shadow-lg object-cover"
            width={1104}
            height={621}
            layout="responsive"
          />
        </div>
        <a href="#about" className="mt-10 inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition duration-300">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-secondary">Feature 1</h3>
            <p className="text-gray-600 mt-4">Description of the first feature.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-secondary">Feature 2</h3>
            <p className="text-gray-600 mt-4">Description of the second feature.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
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
