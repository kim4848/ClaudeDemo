import './ScrollingBackground.css'

function ScrollingBackground() {
  return (
    <div className="scrolling-background">
      <div className="parallax-layer parallax-layer-1">
        <div className="parallax-overlay"></div>
      </div>
      <div className="parallax-layer parallax-layer-2">
        <div className="parallax-overlay"></div>
      </div>
      <div className="parallax-layer parallax-layer-3">
        <div className="parallax-overlay"></div>
      </div>
      <div className="parallax-layer parallax-layer-4">
        <div className="parallax-overlay"></div>
      </div>
    </div>
  )
}

export default ScrollingBackground
