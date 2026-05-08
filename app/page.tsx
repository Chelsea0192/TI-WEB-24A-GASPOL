import Overview from '@/components/Overview'

export default function Home() {

  const overviewText =
    "Selamat datang di website wisata Gunung Bromo!"

  return (
    <>
      <div className="hero">
         <h1>🌄 Pesona Gunung Bromo</h1>
           <p>Keindahan Alam yang Tak Terlupakan di Jawa Timur</p>
      </div>
      <Overview title="Selamat Datang di Wisata Bromo" content={overviewText} />
    
       <Overview
        title="Selamat Datang di Wisata Bromo"
        content={overviewText}
      />

      <div className="cards-container">
        <div className="card">
          <div className="card-image"></div>
          <h3 className="card-title">Panorama Sunrise</h3>
           <p className="card-text">
              Nikmati keindahan matahari terbit dari puncak Gunung Penanjakan. 
              Pemandangan golden hour yang memukau dengan latar Gunung Bromo dan Semeru.
            </p>
        </div>
      </div>
       <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
          </div>
        </div>
    </>
  )
}