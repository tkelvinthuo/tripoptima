import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle, Star, Thermometer, CloudRain } from 'lucide-react';
import { seasonalPackages, seasonalHighlights } from './seasonalPackagesData';

const SeasonalPackageCard = ({ package: pkg }) => {
  return (
    <div className="seasonal-package-card">
      <div className="package-image-container">
        <img 
          src={pkg.image} 
          alt={pkg.title}
          className="package-image"
        />
        <div className="package-season-badge">
          {pkg.season}
        </div>
        <div className="package-period-badge">
          {pkg.period}
        </div>
      </div>

      <div className="package-content">
        <h3 className="package-title">{pkg.title}</h3>
        <p className="package-description">{pkg.description}</p>

        <div className="package-details">
          <div className="package-meta">
            <div className="meta-item">
              <Clock size={16} className="meta-icon" />
              <span>{pkg.duration}</span>
            </div>
            <div className="meta-item">
              <MapPin size={16} className="meta-icon" />
              <span>{pkg.destinations.length} destinations</span>
            </div>
            <div className="meta-item price">
              <span className="price-label">Starting from</span>
              <span className="price-amount">{pkg.price}</span>
            </div>
          </div>

          <div className="package-highlights">
            <h4 className="highlights-title">Safari Highlights</h4>
            <ul className="highlights-list">
              {pkg.highlights.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  <CheckCircle size={14} className="highlight-icon" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="package-destinations">
            <h4 className="destinations-title">Destinations</h4>
            <div className="destinations-tags">
              {pkg.destinations.map((destination, index) => (
                <span key={index} className="destination-tag">
                  {destination}
                </span>
              ))}
            </div>
          </div>

          <div className="package-best-for">
            <h4 className="best-for-title">Perfect For</h4>
            <div className="best-for-tags">
              {pkg.bestFor.map((category, index) => (
                <span key={index} className="best-for-tag">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="package-actions">
          <button className="package-btn primary">
            Book This Package
          </button>
          <button className="package-btn secondary">
            Customize Trip
          </button>
        </div>
      </div>
    </div>
  );
};

const SeasonalHighlightsCard = ({ highlight }) => {
  return (
    <div className="seasonal-highlight-card">
      <div className="highlight-header">
        <h3 className="highlight-season">{highlight.season}</h3>
        <div className="highlight-months">{highlight.months}</div>
      </div>

      <div className="highlight-weather">
        <div className="weather-item">
          <Thermometer size={16} className="weather-icon" />
          <div>
            <span className="weather-label">Temperature</span>
            <span className="weather-value">{highlight.temperature}</span>
          </div>
        </div>
        <div className="weather-item">
          <CloudRain size={16} className="weather-icon" />
          <div>
            <span className="weather-label">Rainfall</span>
            <span className="weather-value">{highlight.rainfall}</span>
          </div>
        </div>
      </div>

      <div className="highlight-wildlife">
        <h4 className="section-subtitle">Wildlife Activity</h4>
        <p className="wildlife-description">{highlight.wildlife}</p>
      </div>

      <div className="highlight-advantages">
        <h4 className="section-subtitle">Key Advantages</h4>
        <ul className="advantages-list">
          {highlight.advantages.map((advantage, index) => (
            <li key={index} className="advantage-item">
              <Star size={12} className="advantage-icon" />
              {advantage}
            </li>
          ))}
        </ul>
      </div>

      <div className="highlight-activities">
        <h4 className="section-subtitle">Recommended Activities</h4>
        <div className="activities-tags">
          {highlight.activities.map((activity, index) => (
            <span key={index} className="activity-tag">
              {activity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SeasonalPackages = () => {
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [filteredPackages, setFilteredPackages] = useState(seasonalPackages);

  const handleSeasonFilter = (season) => {
    setSelectedSeason(season);
    if (season === 'All') {
      setFilteredPackages(seasonalPackages);
    } else {
      setFilteredPackages(seasonalPackages.filter(pkg => pkg.season === season));
    }
  };

  const seasonOptions = ['All', 'Dry Season', 'Wet Season', 'Migration Season', 'Calving Season'];

  return (
    <section className="seasonal-packages-section">
      <div className="seasonal-packages-container">
        <div className="section-header">
          <h2 className="section-title">Safari Packages by Season</h2>
          <p className="section-description">
            Each season in Kenya offers unique wildlife experiences and natural phenomena. 
            Choose the perfect time for your safari adventure based on your interests and preferences.
          </p>
        </div>

        {/* Season Filter Tabs */}
        <div className="season-filter-tabs">
          {seasonOptions.map((season, index) => (
            <button
              key={index}
              className={`season-tab ${selectedSeason === season ? 'active' : ''}`}
              onClick={() => handleSeasonFilter(season)}
            >
              {season}
            </button>
          ))}
        </div>

        {/* Seasonal Highlights Section */}
        <div className="seasonal-highlights">
          <h3 className="highlights-section-title">
            <Calendar size={24} className="title-icon" />
            Seasonal Safari Guide
          </h3>
          <div className="highlights-grid">
            {seasonalHighlights.map((highlight, index) => (
              <SeasonalHighlightsCard key={index} highlight={highlight} />
            ))}
          </div>
        </div>

        {/* Package Cards */}
        <div className="packages-section">
          <h3 className="packages-section-title">
            {selectedSeason === 'All' ? 'All Safari Packages' : `${selectedSeason} Packages`}
          </h3>
          <div className="packages-grid">
            {filteredPackages.map((pkg) => (
              <SeasonalPackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>

        {/* Planning Helper */}
        <div className="planning-helper">
          <div className="planning-content">
            <h3 className="planning-title">Need Help Choosing?</h3>
            <p className="planning-description">
              Our safari experts can help you select the perfect season and package based on your 
              interests, budget, and travel dates. Get personalized recommendations tailored to your dream safari.
            </p>
            <div className="planning-actions">
              <button className="planning-btn primary">
                <Users size={18} />
                Speak with Safari Expert
              </button>
              <button className="planning-btn secondary">
                <Calendar size={18} />
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalPackages;