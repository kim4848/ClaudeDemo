import './Hero.css'

interface HeroProps {
  selectedStart: string | null
  selectedEnd: string | null
  onDateChange: (start: string | null, end: string | null) => void
  guestCount: number
  onGuestCountChange: (count: number) => void
}

function Hero({ selectedStart, selectedEnd, onDateChange, guestCount, onGuestCountChange }: HeroProps) {
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStart = e.target.value || null
    onDateChange(newStart, selectedEnd)
  }

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEnd = e.target.value || null
    onDateChange(selectedStart, newEnd)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="huset" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Din drømmeferie i <span className="text-highlight">Spanien</span>
            <br />venter på dig
          </h1>
          <p className="hero-subtitle">
            Moderne feriehus i Mil Palmeras ved Middelhavet.
            300 meter til stranden, privat terrasse og fælles pool.
          </p>
        </div>

        <div className="search-widget-container">
          <div className="search-widget">
            <div className="search-widget-header">
              <h2>Book dit ophold</h2>
              <p>Find ledige datoer og book direkte</p>
            </div>

            <div className="search-fields">
              <div className="search-field">
                <label>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Ankomst
                </label>
                <input
                  type="date"
                  value={selectedStart || ''}
                  onChange={handleStartDateChange}
                  onKeyDown={(e) => e.preventDefault()}
                  onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                  data-has-value={selectedStart ? 'true' : undefined}
                  min={today}
                />
              </div>

              <div className="search-field">
                <label>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Afrejse
                </label>
                <input
                  type="date"
                  value={selectedEnd || ''}
                  onChange={handleEndDateChange}
                  onKeyDown={(e) => e.preventDefault()}
                  onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                  data-has-value={selectedEnd ? 'true' : undefined}
                  min={selectedStart || today}
                />
              </div>

              <div className="search-field">
                <label>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  Gæster
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => onGuestCountChange(parseInt(e.target.value))}
                >
                  <option value="1">1 gæst</option>
                  <option value="2">2 gæster</option>
                  <option value="3">3 gæster</option>
                  <option value="4">4 gæster</option>
                  <option value="5">5 gæster</option>
                  <option value="6">6 gæster</option>
                  <option value="7">7 gæster</option>
                  <option value="8">8 gæster</option>
                  <option value="9">9 gæster</option>
                  <option value="10">10 gæster</option>
                </select>
              </div>
            </div>

            <a href="#kontakt" className="search-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              Se priser og book
            </a>

            <div className="search-widget-footer">
              <span className="availability-badge">
                <span className="availability-dot"></span>
                Ledige datoer tilgængelige
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-features">
        <div className="hero-features-container">
          <div className="hero-feature">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <div className="feature-text">
              <span className="feature-value">3</span>
              <span className="feature-label">Soveværelser</span>
            </div>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <path d="M12 18v-6"/>
                <path d="M9 15l3 3 3-3"/>
              </svg>
            </div>
            <div className="feature-text">
              <span className="feature-value">300m</span>
              <span className="feature-label">Til stranden</span>
            </div>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            </div>
            <div className="feature-text">
              <span className="feature-value">320+</span>
              <span className="feature-label">Soldage årligt</span>
            </div>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
                <path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
                <circle cx="12" cy="7" r="3"/>
              </svg>
            </div>
            <div className="feature-text">
              <span className="feature-value">Pool</span>
              <span className="feature-label">Fælles pool</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
