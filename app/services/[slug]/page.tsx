
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;

  const services: Record<string, string> = {
    website: "Pembuatan Website",
    design: "Desain UI/UX",
  };

  const title = services[slug];

  if (!title) {
    return (
      <main>
        <h1>Layanan tidak ditemukan</h1>
        <p>Silakan pilih layanan yang tersedia.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>{title}</h1>
      <p>
        Kami menyediakan layanan {title} untuk membantu
        mengembangkan bisnis Anda.
      </p>
    </main>
  );
}
