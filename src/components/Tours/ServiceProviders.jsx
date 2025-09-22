import React, { useState } from 'react';
import { Star, MapPin, Phone, Mail, Globe, Award, Users, Car, Calendar, CheckCircle } from 'lucide-react';
import { serviceProviders, serviceCategories, priceRanges } from './serviceProvidersData';

const ServiceProviderCard = ({ provider }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="service-provider-card">
      <div className="provider-header">
        <div className="provider-image-container">
          <img 
            src={provider.image} 
            alt={provider.name}
            className="provider-image"
          />
          <div className="provider-type-badge">
            {provider.type}
          </div>
        </div>
        
        <div className="provider-info">
          <h3 className="provider-name">{provider.name}</h3>
          <p className="provider-specialization">{provider.specialization}</p>
          
          <div className="provider-location">
            <MapPin size={14} className="location-icon" />
            {provider.location}
          </div>
          
          <div className="provider-rating">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`rating-star ${i < Math.floor(provider.rating) ? 'filled' : ''}`}
                  size={16} 
                />
              ))}
            </div>
            <span className="rating-text">
              {provider.rating} ({provider.reviewsCount} reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="provider-content">
        <p className="provider-description">{provider.description}</p>
        
        <div className="provider-expertise">
          <h4 className="expertise-title">Expertise Areas</h4>
          <div className="expertise-tags">
            {provider.expertise.map((skill, index) => (
              <span key={index} className="expertise-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="provider-pricing">
          <div className="pricing-category">{provider.pricing.category}</div>
          <div className="pricing-amount">{provider.pricing.startingPrice}</div>
        </div>

        <div className="provider-actions">
          <button 
            className="details-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <button className="contact-btn">
            Contact Provider
          </button>
        </div>

        {showDetails && (
          <div className="provider-details">
            <div className="details-grid">
              {/* Services */}
              <div className="detail-section">
                <h5 className="detail-title">
                  <CheckCircle size={16} />
                  Services Offered
                </h5>
                <ul className="service-list">
                  {provider.services.map((service, index) => (
                    <li key={index} className="service-item">{service}</li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="detail-section">
                <h5 className="detail-title">
                  <Award size={16} />
                  Certifications
                </h5>
                <div className="certification-tags">
                  {provider.certifications.map((cert, index) => (
                    <span key={index} className="certification-tag">{cert}</span>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="detail-section">
                <h5 className="detail-title">Contact Information</h5>
                <div className="contact-info">
                  <div className="contact-item">
                    <Phone size={14} />
                    <span>{provider.contact.phone}</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={14} />
                    <span>{provider.contact.email}</span>
                  </div>
                  <div className="contact-item">
                    <Globe size={14} />
                    <span>{provider.contact.website}</span>
                  </div>
                </div>
              </div>

              {/* Additional Details based on provider type */}
              {provider.vehicles && (
                <div className="detail-section">
                  <h5 className="detail-title">
                    <Car size={16} />
                    Vehicle Fleet
                  </h5>
                  {provider.vehicles.map((vehicle, index) => (
                    <div key={index} className="vehicle-info">
                      <h6 className="vehicle-model">{vehicle.model}</h6>
                      <div className="vehicle-details">
                        <span className="vehicle-capacity">
                          <Users size={12} /> {vehicle.capacity}
                        </span>
                        <span className="vehicle-rate">
                          <Calendar size={12} /> {vehicle.dailyRate}
                        </span>
                      </div>
                      <div className="vehicle-features">
                        {vehicle.features.map((feature, i) => (
                          <span key={i} className="feature-tag">{feature}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {provider.guides && (
                <div className="detail-section">
                  <h5 className="detail-title">
                    <Users size={16} />
                    Professional Guides
                  </h5>
                  {provider.guides.map((guide, index) => (
                    <div key={index} className="guide-info">
                      <h6 className="guide-name">{guide.name}</h6>
                      <p className="guide-experience">{guide.experience} experience</p>
                      <div className="guide-languages">
                        Languages: {guide.languages.join(', ')}
                      </div>
                      <div className="guide-specialties">
                        {guide.specialties.map((specialty, i) => (
                          <span key={i} className="specialty-tag">{specialty}</span>
                        ))}
                      </div>
                      <div className="guide-rate">{guide.rate}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FilterPanel = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-panel">
      <h3 className="filter-title">Filter Providers</h3>
      
      {/* Service Type Filter */}
      <div className="filter-group">
        <h4 className="filter-group-title">Service Type</h4>
        {serviceCategories.map((category, index) => (
          <label key={index} className="filter-option">
            <input
              type="checkbox"
              checked={filters.categories.includes(category.category)}
              onChange={(e) => onFilterChange('categories', category.category, e.target.checked)}
            />
            <span className="filter-label">
              {category.category} ({category.count})
            </span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <h4 className="filter-group-title">Price Range</h4>
        {priceRanges.map((range, index) => (
          <label key={index} className="filter-option">
            <input
              type="radio"
              name="priceRange"
              checked={filters.priceRange === range.label}
              onChange={(e) => onFilterChange('priceRange', range.label, e.target.checked)}
            />
            <span className="filter-label">{range.label}</span>
          </label>
        ))}
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <h4 className="filter-group-title">Minimum Rating</h4>
        {[4.5, 4.0, 3.5, 3.0].map((rating, index) => (
          <label key={index} className="filter-option">
            <input
              type="radio"
              name="minRating"
              checked={filters.minRating === rating}
              onChange={(e) => onFilterChange('minRating', rating, e.target.checked)}
            />
            <span className="filter-label">
              {rating}+ <Star size={12} className="inline-star" />
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

const ServiceProviders = () => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: '',
    minRating: 0,
    searchQuery: ''
  });

  const [filteredProviders, setFilteredProviders] = useState(serviceProviders);

  const handleFilterChange = (filterType, value, checked) => {
    let newFilters = { ...filters };
    
    if (filterType === 'categories') {
      if (checked) {
        newFilters.categories = [...filters.categories, value];
      } else {
        newFilters.categories = filters.categories.filter(cat => cat !== value);
      }
    } else {
      newFilters[filterType] = checked ? value : (filterType === 'minRating' ? 0 : '');
    }
    
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filterState) => {
    let filtered = serviceProviders;

    // Filter by categories
    if (filterState.categories.length > 0) {
      filtered = filtered.filter(provider => 
        filterState.categories.includes(provider.type)
      );
    }

    // Filter by rating
    if (filterState.minRating > 0) {
      filtered = filtered.filter(provider => provider.rating >= filterState.minRating);
    }

    // Filter by search query
    if (filterState.searchQuery) {
      const query = filterState.searchQuery.toLowerCase();
      filtered = filtered.filter(provider =>
        provider.name.toLowerCase().includes(query) ||
        provider.specialization.toLowerCase().includes(query) ||
        provider.description.toLowerCase().includes(query)
      );
    }

    setFilteredProviders(filtered);
  };

  const handleSearchChange = (e) => {
    const searchQuery = e.target.value;
    const newFilters = { ...filters, searchQuery };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  return (
    <section className="service-providers-section">
      <div className="service-providers-container">
        <div className="section-header">
          <h2 className="section-title">Trusted Service Providers</h2>
          <p className="section-description">
            Connect with verified safari operators, land cruiser specialists, and professional guides 
            who bring expertise and local knowledge to your African adventure.
          </p>
        </div>

        <div className="providers-content">
          <aside className="filters-sidebar">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search providers..."
                value={filters.searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          <main className="providers-grid">
            {filteredProviders.length > 0 ? (
              filteredProviders.map(provider => (
                <ServiceProviderCard key={provider.id} provider={provider} />
              ))
            ) : (
              <div className="no-results">
                <h3>No providers found</h3>
                <p>Try adjusting your filters or search terms</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;