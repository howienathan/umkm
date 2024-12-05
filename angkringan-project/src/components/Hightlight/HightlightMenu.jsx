import React, { useState } from "react";

const HighlightMenu = () => {
  // State untuk menyimpan indeks card yang terbuka
  const [openCardIndex, setOpenCardIndex] = useState(null);

  // Fungsi untuk toggle card berdasarkan indeks
  const toggleContent = (index) => {
    setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-md"
        >
          {/* Header Card */}
          <div className="cursor-pointer" onClick={() => toggleContent(index)}>
            <h2 className="text-lg font-semibold">Card {index + 1}</h2>
            <p className="text-gray-500">
              Klik untuk {openCardIndex === index ? "menutup" : "membuka"}.
            </p>
          </div>

          {/* Konten dengan animasi */}
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              openCardIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="mt-4">
              <p className="text-gray-700">
                Ini adalah konten dari Card {index + 1}. Anda dapat menambahkan
                informasi lainnya di sini.
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HighlightMenu;
