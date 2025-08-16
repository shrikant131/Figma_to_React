import React from 'react'

export default function FigmaCard() {
  return (
    <article className="card">
      <img
        className="card-image"
        src="https://picsum.photos/640/360"
        alt="Placeholder"
      />
      <div className="card-body">
        <h2 className="card-title">Product Title</h2>
        <p className="card-desc">Short description that came from a Figma design. Clean, concise, and responsive.</p>
        <div className="card-meta">
          <span className="price">$29</span>
          <button className="btn">Buy</button>
        </div>
      </div>
    </article>
  )
}
