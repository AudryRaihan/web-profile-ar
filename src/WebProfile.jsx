import LogoAR from './assets/inilogo.png';
import HeroImage from './assets/heroo.png';
export default function WebProfile() {
  return (
    <div className="min-h-screen bg-[#f7f2eb] text-[#5c4633] font-sans" style={{ scrollBehavior: 'smooth' }}>
      
      
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-20 py-6 bg-[#f7f2eb] sticky top-0 z-50 backdrop-blur-sm">
  <div className="flex items-center gap-4">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#a37c55] to-[#c8a27a] flex items-center justify-center shadow-lg overflow-hidden">
      <img 
        src={LogoAR} 
        alt="Logo" 
        className="w-full h-full object-cover p-1" 
      />
    </div>

    <div>
      <h2 className="text-2xl font-bold font-serif text-[#3d2e24]">AR Studio</h2>
      <p className="text-sm text-[#7a614b]">Premium Web Design Service</p>
    </div>
  </div>
</header>

{/* Hero */}
  <section className="px-6 md:px-20 py-20 text-center bg-gradient-to-b from-[#f7f2eb] to-[#efe4d6]">
  {/* Kotak pembungkus*/}
  <div className="max-w-4xl mx-auto">
    
    {/* TAG FOTO */}
    <div className="mb-10 flex justify-center">
      <img 
        src={HeroImage} 
        alt="Ilustrasi Desain Web" 
        className="-full h-full object-cover rounded-2xl shadow-xl"
      />
    </div>

    {/* Teks Heading */}
    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-[#3d2e24]">
      Jasa Pembuatan <br /> Landing Page & Web Profile
    </h1>

    {/* Paragraf Deskripsi */}
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-32 text-[#7a614b]">
      Website profesional, modern, dan responsif untuk membantu bisnis Anda tampil lebih terpercaya dan menarik lebih banyak pelanggan.
    </p>

    {/* Tombol CTA */}
    <div className="flex gap-6 justify-center">
      <a href="#pricing" 
      className="bg-white text-[#3d2e24] px-8 py-3 rounded-full font-bold shadow hover:bg-[#f7f2eb] transition border border-[#ead8c0] mt-4">
        Konsultasi Gratis
      </a>
      <a href="#portfolio" className="bg-white text-[#3d2e24] px-8 py-3 rounded-full font-bold shadow hover:bg-[#f7f2eb] transition border border-[#ead8c0] mt-4">
        Lihat Portfolio
      </a>
    </div>
  </div>
</section>

      {/* Features */}
      <section className="px-6 md:px-20 py-16 grid md:grid-cols-3 gap-8">
        {[
          ["Desain Elegan", "Tampilan minimalis, modern, dan sesuai identitas brand Anda."],
          ["Responsive", "Website optimal di desktop, tablet, dan smartphone."],
          ["Cepat & Fleksibel", "Pengerjaan cepat dengan revisi sesuai kebutuhan Anda."],
        ].map(([title, desc], idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-[#7a614b]">{desc}</p>
          </div>
        ))}
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="px-6 md:px-20 py-16 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Portfolio Kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Landing Page Produk Modern",
            "Web Profile UMKM Elegan",
            "Website Company Profile Profesional"
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl shadow-md p-8 bg-[#f7f2eb] hover:shadow-xl transition">
              <div className="h-40 rounded-xl mb-4 w-full bg-[#e8d8c3] flex items-center justify-center text-[#8b6b4a] shadow-md">
                Image Portfolio
              </div>
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 md:px-20 py-16 bg-[#efe4d6] text-center">
  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[#3d2e24]">Paket Harga Promo Terbatas</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      ["Basic", "Rp799k", "Rp499k", "1 halaman, desain responsive"],
      ["Standard", "Rp1.299k", "Rp999k", "3 halaman, desain custom"],
      ["Premium", "Rp1.999k", "Rp1.499k", "Full custom + prioritas support"],
    ].map(([title, oldPrice, price, desc], idx) => (
      <div key={idx} className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition border border-[#ead8c0] relative overflow-hidden">
        {idx > 0 && (
          <div className="absolute top-0 right-0 bg-[#8b6b4a] text-white text-xs px-4 py-1 rounded-bl-2xl">
            Best Offer
          </div>
        )}
        <h3 className="text-2xl font-bold mb-3 text-[#3d2e24]">{title}</h3>
        
        <div className="mb-4">
          {/* Tambahan teks 'start from' di sini */}
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Start from</p>
          
          <p className="text-lg line-through text-gray-400">{oldPrice}</p>
          <p className="text-3xl text-[#8b6b4a] font-bold">{price}</p>
          <span className="inline-block mt-2 bg-red-100 text-red-500 text-sm px-3 py-1 rounded-full">
            Promo
          </span>
        </div>
        
        <p className="text-[#7a614b]">{desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* Testimonials */}
      <section className="px-6 md:px-20 py-16 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Apa Kata Client?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {name: "Rina - Owner Skincare", quote: "Hasil web sangat profesional dan pengerjaan cepat."},
            {name: "Andi - UMKM Fashion", quote: "Desain sesuai branding dan mudah diajak revisi."},
            {name: "Dewi - Cafe Lokal", quote: "Website membuat bisnis kami terlihat lebih terpercaya."}
          ].map((item, idx) => (
            <div key={idx} className="bg-[#f7f2eb] rounded-2xl shadow-md p-6 italic text-[#7a614b]">
              <p className="mb-3">"{item.quote}"</p>
              <p className="font-semibold not-italic text-[#5c4633]">— {item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-20 text-center bg-gradient-to-r from-[#a9815a] to-[#c1a890] text-white rounded-t-[3rem]">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Siap Membuat Website Bisnis Anda Lebih Profesional?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Hubungi kami sekarang dan dapatkan konsultasi gratis untuk website impian Anda.
        </p>
        <a
          href="https://wa.me/628976066903"
          className="inline-block px-8 py-4 rounded-2xl bg-[#8b6b4a] text-white text-lg shadow-lg hover:scale-105 transition"
        >
          Hubungi via WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-[#7a614b] bg-[#f1e7da]">
        © 2026 AR Studio | Dibuat dengan desain minimalis elegan
      </footer>
    </div>
  );
}