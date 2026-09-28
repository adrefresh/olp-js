export default function Services() {
  return (
  <section id="services">
    <div className="wrap">
      <div className="services-head reveal">
        <div>
          <span className="eyebrow orange">Core services</span>
          <h2>Drag through what we run for you.</h2>
        </div>
        <div className="gallery-nav">
          <button className="gnav-btn" id="galPrev" aria-label="Previous">←</button>
          <button className="gnav-btn" id="galNext" aria-label="Next">→</button>
        </div>
      </div>
    </div>
    <div className="gallery-track" id="galleryTrack" />
  </section>
  );
}
