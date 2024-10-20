import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to My Website</h1>
        <p>This is the homepage of my Next.js app</p>
      </header>
      <main>
        <Image
          src="shawty.JPG" // assuming you've added this image to your public folder
          alt="JPG of my gf"
          width={200}
          height={200}
        />
        <section>
          <h2>About Us</h2>
          <p>Here you can describe your website or personal project.</p>
        </section>
      </main>
    </div>
  );
}
