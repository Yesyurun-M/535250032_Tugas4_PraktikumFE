
import Link from "next/link";

export default function Services() {
  return (
    <main>
      <h1>Layanan Kami</h1>

      <ul>
        <li>
          <Link href="/services/website">
            Pembuatan Website
          </Link>
        </li>

        <li>
          <Link href="/services/design">
            Desain UI/UX
          </Link>
        </li>
      </ul>
    </main>
  );
}
