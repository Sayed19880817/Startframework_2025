import React, { useState, useEffect, useCallback } from 'react';
import HeaderDivider from '../Component/header';
import port1 from '../assets/sec1.png';
import port2 from '../assets/sec2.png';
import port3 from '../assets/sec3.png';

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  const arrPort = [port1, port2, port3, port1, port2, port3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? arrPort.length - 1 : prevIndex - 1
    );
  }, [arrPort.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === arrPort.length - 1 ? 0 : prevIndex + 1
    );
  }, [arrPort.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, goToPrev, goToNext, closeLightbox]);

  return (
    <div
      id="portfolio"
      className="d-flex flex-column justify-content-center align-items-center text-navy py-5 mt-5 min-vh-100 bg-white"
    >
      <h2 className="heading text-uppercase pt-5 mt-5">PORTFOLIO COMPONENT</h2>

      <HeaderDivider />

      <div className="portfolioGallery w-100">
        <div className="container mt-3">
          <div className="row align-items-start g-5">
            {arrPort.map((el, i) => {
              return (
                <div
                  onClick={() => openLightbox(i)}
                  key={i}
                  className="col-md-4 porfolioCard"
                >
                  <div className="rounded-3 overflow-hidden position-relative">
                    <img className="w-100 rounded-3" src={el} alt={`Portfolio item ${i + 1}`} />
                    <div className="portfolioOverlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="position-fixed start-0 w-100 top-0 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
          onClick={closeLightbox}
        >
          <div className="lightbox-content position-relative" onClick={e => e.stopPropagation()}>
            <button 
              className="position-absolute top-0 end-0 btn btn-lg text-white fs-1 border-0 bg-transparent"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            
            <img 
              src={arrPort[currentIndex]} 
              alt={`Portfolio image ${currentIndex + 1}`} 
              className="img-fluid max-vh-85 max-vw-90"
              style={{ maxHeight: '85vh', maxWidth: '90vw' }}
            />
            
            <button 
              className="position-absolute top-50 start-0 translate-middle-y btn btn-lg text-white fs-1 border-0 bg-transparent"
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              aria-label="Previous image"
            >
              &#10094;
            </button>
            <button 
              className="position-absolute top-50 end-0 translate-middle-y btn btn-lg text-white fs-1 border-0 bg-transparent"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              aria-label="Next image"
            >
              &#10095;
            </button>
            
            <div className="text-center text-white mt-3">
              Image {currentIndex + 1} of {arrPort.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}