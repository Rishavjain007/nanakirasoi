import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { galleryImages } from "../data/mock";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(null);

  const imagesPerPage = 10;

  // Pagination
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = galleryImages.slice(
    startIndex,
    startIndex + imagesPerPage,
  );

  // 🔥 Next / Prev logic
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  // 🔥 Keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Snapshots of Our Journey</h1>
        <p className="text-gray-600 text-lg">
          What began as simple feeding drives for workers and underserved
          communities has grown into a larger vision — permanent community
          kitchens where no one has to choose between hunger and dignity.
        </p>
      </section>

      {/* Gallery */}
      <section className="pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentIndex(startIndex + index);
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="font-bold">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 bg-white/20 w-12 h-12 rounded-full flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <X className="text-white" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-h-[80vh] rounded-lg"
            />

            <div className="text-center text-white mt-4">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <p className="text-sm text-gray-300 mt-2">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
