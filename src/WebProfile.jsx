import LogoAR from './assets/inilogo.png';
import HeroImage from './assets/heroo.png';
import HoneyImg from './assets/honey_company.png';
import RekberImg from './assets/rekber.png';
import AlkafImg from './assets/alkaf.png';
import StudentImg from './assets/student_leader.png';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { supabase } from './supabaseClient';

export default function WebProfile() {
  // --- 1. LOGIKA DATABASE SUPABASE & ADMIN ---
  const queryParams = new URLSearchParams(window.location.search);
  const isAdmin = queryParams.get("admin") === "true";

  // State ulasan sekarang dimulai dari array kosong karena data akan diambil dari database
  const [reviews, setReviews] = useState([]);
  const [newName, setNewName] = useState("");
  const [newQuote, setNewQuote] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [showAllPortfolio, setShowAllPortfolio] = useState(false);

  // Fungsi untuk mengambil data dari Supabase
  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('id', { ascending: false }); // Ulasan terbaru muncul di atas
    
    if (error) {
      console.error("Gagal ambil ulasan:", error);
    } else {
      setReviews(data);
    }
  };

  useEffect(() => {
    // Jalankan AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    
    // Jalankan pengambilan ulasan saat web pertama kali dibuka
    fetchReviews();
  }, []);

  // Fungsi Tambah Ulasan ke Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newName && newQuote) {
      const { error } = await supabase
        .from('reviews')
        .insert([{ name: newName, quote: newQuote }]);

      if (error) {
        alert("Gagal kirim ulasan: " + error.message);
      } else {
        setNewName("");
        setNewQuote("");
        fetchReviews(); // Refresh daftar ulasan agar yang baru muncul
      }
    }
  };

  // Fungsi Hapus Ulasan dari Supabase
  const deleteReview = async (idToDelete) => {
    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', idToDelete); // Hapus berdasarkan ID unik di database

    if (error) {
      alert("Gagal hapus ulasan");
    } else {
      fetchReviews(); // Refresh daftar ulasan setelah dihapus
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f2eb] text-[#5c4633] font-sans" style={{ scrollBehavior: 'smooth' }}>
      
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-20 py-6 bg-[#f7f2eb] sticky top-0 z-50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#a37c55] to-[#c8a27a] flex items-center justify-center shadow-lg overflow-hidden">
            <img src={LogoAR} alt="Logo" className="w-full h-full object-cover p-1" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-serif text-[#3d2e24]">AR Studio</h2>
            <p className="text-sm text-[#7a614b]">Premium Web Design Service</p>
          </div>
        </div>
      </header>

      {/* Hero - Tanpa AOS agar langsung terlihat */}
      <section className="px-6 md:px-20 pt-8 pb-20 text-center bg-gradient-to-b from-[#f7f2eb] to-[#efe4d6]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 flex justify-center">
            <img src={HeroImage} alt="Ilustrasi Desain Web" className="-full h-full object-cover rounded-2xl shadow-xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-[#3d2e24]">
            Jasa Pembuatan <br /> Landing Page & Web Profile
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-32 text-[#7a614b]">
            Website profesional, modern, dan responsif untuk membantu bisnis Anda tampil lebih terpercaya dan menarik lebih banyak pelanggan.
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#pricing" className="bg-white text-[#3d2e24] px-8 py-3 rounded-full font-bold shadow hover:bg-[#f7f2eb] transition border border-[#ead8c0] mt-4">
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
          <div 
            key={idx} 
            data-aos="fade-up" 
            data-aos-delay={idx * 150}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-[#7a614b]">{desc}</p>
          </div>
        ))}
      </section>

      {/* Section Edukasi */}
      <section data-aos="fade-up" className="px-6 md:px-20 py-20 bg-[#efe4d6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d2e24] mb-4">Kenali Kebutuhan Bisnis Anda</h2>
            <p className="text-[#7a614b]">Pilih jenis website yang paling tepat untuk strategi pertumbuhan bisnis Anda.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#ead8c0]">
              <div className="w-14 h-14 bg-[#8b6b4a] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3d2e24] mb-4">Web Profile</h3>
              <p className="text-[#7a614b] leading-relaxed mb-6">
                Ibarat "kantor digital" 24 jam. Fokusnya adalah membangun <strong>Brand Authority</strong> dan kepercayaan klien melalui informasi lengkap tentang perusahaan.
              </p>
              <ul className="space-y-3 text-sm text-[#5c4633]">
                <li>✅ Menjelaskan Visi, Misi, dan Tim.</li>
                <li>✅ Menampilkan sejarah & nilai perusahaan.</li>
                <li>✅ Portofolio lengkap & kontak resmi.</li>
              </ul>
              <div className="mt-6 p-4 bg-[#f7f2eb] rounded-xl italic text-sm border-l-4 border-[#8b6b4a]">
                "Cocok untuk: Perusahaan, UMKM yang ingin terlihat bonafide, atau Personal Brand."
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#ead8c0]">
              <div className="w-14 h-14 bg-[#3d2e24] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3d2e24] mb-4">Landing Page</h3>
              <p className="text-[#7a614b] leading-relaxed mb-6">
                Ibarat "salesman digital". Website satu halaman ini dirancang khusus untuk satu tujuan: <strong>Konversi</strong> atau mengajak orang segera membeli/mendaftar.
              </p>
              <ul className="space-y-3 text-sm text-[#5c4633]">
                <li>✅ Fokus pada satu produk atau promo.</li>
                <li>✅ Struktur teks persuasif (Copywriting).</li>
                <li>✅ Tombol aksi (CTA) yang menonjol.</li>
              </ul>
              <div className="mt-6 p-4 bg-[#f7f2eb] rounded-xl italic text-sm border-l-4 border-[#3d2e24]">
                "Cocok untuk: Jualan produk spesifik, promosi event, atau iklan Google/FB Ads."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="px-6 md:px-20 py-16 text-center bg-white">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[#3d2e24]">Portfolio Kami</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {[
            { title: "Honey Company Website", img: HoneyImg, link: "https://honey-company.vercel.app/" },
            { title: "Sistem Rekber Profesional", img: RekberImg, link: "https://rekber-psi.vercel.app" },
            { title: "Alkaf Corporate Web", img: AlkafImg, link: "http://alkaf.netlify.app/" },
            { title: "Student Leader Portal", img: StudentImg, link: "https://student-leader-summit.netlify.app/" }
          ].slice(0, showAllPortfolio ? undefined : 3).map((item, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150} className="rounded-2xl shadow-md p-6 bg-[#f7f2eb] hover:shadow-xl transition flex flex-col h-full">
              <div className="h-40 rounded-xl mb-4 w-full bg-[#e8d8c3] flex items-center justify-center shadow-sm overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-lg font-semibold text-[#3d2e24] mb-6 flex-grow">{item.title}</h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full py-2 px-4 bg-[#8b6b4a] text-white rounded-xl font-bold text-sm hover:bg-[#3d2e24] transition-colors text-center">
                Lihat Project →
              </a>
            </div>
          ))}
        </div>
        <button onClick={() => setShowAllPortfolio(!showAllPortfolio)} className="text-[#8b6b4a] font-bold hover:underline transition">
          {showAllPortfolio ? "↑ Sembunyikan Portfolio" : "Tampilkan Lebih Banyak Portfolio →"}
        </button>
      </section>

      {/* Pricing */}
      <section id="pricing" data-aos="fade-up" className="px-6 md:px-20 py-16 bg-[#efe4d6] text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[#3d2e24]">Paket Harga Promo Terbatas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Basic", "Rp799k", "Rp499k", "1 halaman, desain responsive"],
            ["Standard", "Rp1.299k", "Rp999k", "3 halaman, desain custom"],
            ["Premium", "Rp1.999k", "Rp1.499k", "Full custom + prioritas support"],
          ].map(([title, oldPrice, price, desc], idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 200} className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition border border-[#ead8c0] relative overflow-hidden">
              {idx > 0 && <div className="absolute top-0 right-0 bg-[#8b6b4a] text-white text-xs px-4 py-1 rounded-bl-2xl">Best Offer</div>}
              <h3 className="text-2xl font-bold mb-3 text-[#3d2e24]">{title}</h3>
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Start from</p>
                <p className="text-lg line-through text-gray-400">{oldPrice}</p>
                <p className="text-3xl text-[#8b6b4a] font-bold">{price}</p>
                <span className="inline-block mt-2 bg-red-100 text-red-500 text-sm px-3 py-1 rounded-full">Promo</span>
              </div>
              <p className="text-[#7a614b]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section data-aos="fade-up" className="px-6 md:px-20 py-16 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[#3d2e24]">Apa Kata Client?</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {(showAll ? reviews : reviews.slice(0, 3)).map((item, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150} className="bg-[#f7f2eb] rounded-2xl shadow-md p-6 italic text-[#7a614b] border border-[#ead8c0] relative group">
              {isAdmin && (
                <button onClick={() => deleteReview(item.id)} className="absolute top-2 right-2 p-1 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
              <p className="mb-3">"{item.quote}"</p>
              <p className="font-semibold not-italic text-[#5c4633]">— {item.name}</p>
            </div>
          ))}
        </div>
        {reviews.length > 3 && (
          <button onClick={() => setShowAll(!showAll)} className="mb-16 text-[#8b6b4a] font-bold hover:underline transition">
            {showAll ? "↑ Tampilkan Lebih Sedikit" : "Lihat Semua Ulasan →"}
          </button>
        )}
        <div data-aos="fade-up" className="max-w-2xl mx-auto bg-[#f7f2eb] p-8 rounded-[2rem] border-2 border-dashed border-[#ead8c0]">
          <h3 className="text-xl font-bold mb-4 text-[#3d2e24]">Tulis Ulasan Anda</h3>
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input type="text" placeholder="Nama Anda / Perusahaan" value={newName} onChange={(e) => setNewName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#ead8c0] outline-none focus:ring-2 focus:ring-[#8b6b4a]" required />
            <textarea placeholder="Bagaimana pengalaman Anda bekerja sama?" value={newQuote} onChange={(e) => setNewQuote(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#ead8c0] outline-none h-24 focus:ring-2 focus:ring-[#8b6b4a]" required></textarea>
            <button type="submit" className="w-full bg-[#3d2e24] text-white py-3 rounded-xl font-bold hover:bg-[#8b6b4a] transition shadow-lg">Kirim Ulasan</button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section data-aos="fade-up" className="px-6 md:px-20 py-20 text-center bg-gradient-to-r from-[#a9815a] to-[#c1a890] text-white rounded-t-[3rem]">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Siap Membuat Website Bisnis Anda Lebih Profesional?</h2>
        <p className="text-lg text-white/90 mb-8">Hubungi kami sekarang dan dapatkan konsultasi gratis untuk website impian Anda.</p>
        <a href="https://wa.me/628976066903" className="inline-block px-8 py-4 rounded-2xl bg-[#8b6b4a] text-white text-lg shadow-lg hover:scale-105 transition mt-6">Hubungi via WhatsApp</a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-[#7a614b] bg-[#f1e7da]">© 2026 AR Studio</footer>
    </div>
  );
}