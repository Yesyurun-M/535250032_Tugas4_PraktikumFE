
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Selamat Datang di NusaTech</h1>
      <p>
        Kami menyediakan solusi teknologi untuk bisnis Anda.
      </p>
      <Link href="/services">Lihat Layanan</Link>
    </main>
  );
}
