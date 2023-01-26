import React from 'react'

export default function footer() {
  return (
    <div className="card">
      <div className="card-header">
        Quote of the Day
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>One life just live it...</p>
          <footer className="blockquote-footer">Yours only <cite title="Source Title">RK</cite></footer>
        </blockquote>
      </div>
    </div>
  )
}
