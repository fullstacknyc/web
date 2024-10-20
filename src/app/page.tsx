import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <header className="header flex justify-between items-center py-4">
        <div className="logo">
          <h1 className="text-4xl font-bold">My Website</h1>
        </div>
        <nav className="nav flex gap-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero bg-gray-100 text-center py-16">
        <h2 className="text-5xl font-semibold mb-4">Welcome to My Website</h2>
        <p className="text-lg mb-8">
          Discover more about my project, services, and what we can do together!
        </p>
        <Image
          src="/shawty.JPG" // Use your image or a banner
          alt="Banner Image"
          width={2208}
          height={1242}
          className="mx-auto"
        />
      </section>

      {/* About Section */}
      <section id="about" className="about py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-center max-w-2xl mx-auto">
          Here you can describe your website or personal project. Share your story, your
          mission, and what you aim to achieve.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="features py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="feature-item text-center p-4 bg-white shadow-md rounded-lg max-w-xs">
            <h3 className="text-xl font-semibold">Feature One</h3>
            <p className="mt-2">
              A brief description of the first feature or service offered by your website.
            </p>
          </div>
          <div className="feature-item text-center p-4 bg-white shadow-md rounded-lg max-w-xs">
            <h3 className="text-xl font-semibold">Feature Two</h3>
            <p className="mt-2">
              A brief description of the second feature or service.
            </p>
          </div>
          <div className="feature-item text-center p-4 bg-white shadow-md rounded-lg max-w-xs">
            <h3 className="text-xl font-semibold">Feature Three</h3>
            <p className="mt-2">
              A brief description of the third feature or service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-center">
          For more information, reach out to us at <a href="mailto:info@mywebsite.com" className="underline">info@mywebsite.com</a>.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer py-8 text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <div className="social-media flex justify-center gap-4 mt-4">
          <a href="https://twitter.com" className="hover:underline">Twitter</a>
          <a href="https://facebook.com" className="hover:underline">Facebook</a>
          <a href="https://instagram.com" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
