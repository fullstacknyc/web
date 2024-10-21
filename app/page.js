import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I’m Juan C Gomez. I&apos;m a Web Developer.</p>
      <Link href="/about">Learn more about me</Link>
      <Link href="/projects">View my projects</Link>
      <Link href="/blog">Read my blog</Link>
      <Link href="/contact">Get in touch</Link>
    </div>
  );
}