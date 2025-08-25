import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, MapPin, Calendar, Users, Camera, Heart, TreePine, Binoculars } from 'lucide-react';
import './AdventurePlanningModal.css';

const AdventurePlanningModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Adventure Basics
    tripType: '',
    duration: '',
    groupSize: '',
    groupType: '',
    preferredSeason: '',
    
    // Step 2: Destinations & Experiences
    destinations: [],
    interests: [],
    accommodationType: '',
    activities: [],
    
    // Step 3: Contact & Finalize
    name: '',
    email: '',
    phone: '',
    specialRequirements: '',
    additionalComments: '',
    preferredContact: 'email',
    preferredTime: ''
  });

  const totalSteps = 3;

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateArrayField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Adventure planning form submitted:', formData);
    alert('Thank you! Our travel experts will contact you within 24 hours.');
    onClose();
    // Reset form
    setCurrentStep(1);
    setFormData({
      tripType: '', duration: '', groupSize: '', groupType: '', preferredSeason: '',
      destinations: [], interests: [], accommodationType: '', activities: [],
      name: '', email: '', phone: '', specialRequirements: '', additionalComments: '', preferredContact: 'email', preferredTime: ''
    });
  };

  const getAccommodationOptions = () => {
    return [
      'Luxury Safari Lodges',
      'Premium Tented Camps', 
      'Mid-range Safari Camps',
      'Boutique Lodges',
      'Budget Safari Camps',
      'Guesthouses',
      '3-5 Star Hotels'
    ];
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="adventure-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h2>Plan Your Perfect Adventure</h2>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="progress-indicator">
          {[1, 2, 3].map(step => (
            <div key={step} className={`progress-step ${step <= currentStep ? 'active' : ''} ${step < currentStep ? 'completed' : ''}`}>
              <div className="step-number">{step}</div>
              <span className="step-label">
                {step === 1 ? 'Basics' : step === 2 ? 'Preferences' : 'Contact'}
              </span>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="modal-form">
          {currentStep === 1 && (
            <div className="form-step">
              <h3>Tell us about your adventure</h3>
              
              {/* Trip Type */}
              <div className="form-group">
                <label>What type of adventure interests you?</label>
                <div className="option-cards">
                  {['Safari', 'Cultural', 'Adventure', 'Combination'].map(type => (
                    <div 
                      key={type} 
                      className={`option-card ${formData.tripType === type ? 'selected' : ''}`}
                      onClick={() => updateFormData('tripType', type)}
                    >
                      <MapPin size={20} />
                      <span>{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="form-group">
                <label>How long would you like your trip to be?</label>
                <div className="option-buttons">
                  {['3-5 days', '1 week', '2 weeks', '3+ weeks'].map(duration => (
                    <button
                      key={duration}
                      type="button"
                      className={`option-btn ${formData.duration === duration ? 'selected' : ''}`}
                      onClick={() => updateFormData('duration', duration)}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              </div>

              {/* Group Details */}
              <div className="form-row">
                <div className="form-group">
                  <label>Group size</label>
                  <select 
                    value={formData.groupSize} 
                    onChange={e => updateFormData('groupSize', e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select size</option>
                    <option value="1">Solo (1 person)</option>
                    <option value="2">Couple (2 people)</option>
                    <option value="3-5">Small group (3-5)</option>
                    <option value="6-10">Medium group (6-10)</option>
                    <option value="10+">Large group (10+)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Group type</label>
                  <select 
                    value={formData.groupType} 
                    onChange={e => updateFormData('groupType', e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select type</option>
                    <option value="Family">Family</option>
                    <option value="Friends">Friends</option>
                    <option value="Couple">Couple</option>
                    <option value="Solo">Solo</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </div>
              </div>


              {/* Preferred Season */}
              <div className="form-group">
                <label>When would you like to travel?</label>
                <div className="season-options">
                  {[
                    { season: 'Peak Season (July-Oct)', desc: 'Great Migration & dry weather' },
                    { season: 'Shoulder Season (Jan-Mar, Nov-Dec)', desc: 'Good weather, fewer crowds' },
                    { season: 'Green Season (Apr-Jun)', desc: 'Lush landscapes, best prices' },
                    { season: 'I\'m flexible', desc: 'Show me the best options' }
                  ].map(option => (
                    <div 
                      key={option.season} 
                      className={`season-card ${formData.preferredSeason === option.season ? 'selected' : ''}`}
                      onClick={() => updateFormData('preferredSeason', option.season)}
                    >
                      <Calendar size={20} />
                      <div>
                        <span className="season-name">{option.season}</span>
                        <small className="season-desc">{option.desc}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="form-step">
              <h3>Customize your experience</h3>

              {/* Destinations */}
              <div className="form-group">
                <label>Which destinations would you like to visit? (Select all that interest you)</label>
                <div className="checkbox-grid">
                  {[
                    'Maasai Mara National Reserve',
                    'Amboseli National Park',
                    'Tsavo National Parks',
                    'Lake Nakuru National Park',
                    'Samburu National Reserve',
                    'Mount Kenya',
                    'Coastal Regions (Mombasa/Diani)',
                    'Cultural Villages',
                    'Lake Naivasha',
                    'Hell\'s Gate National Park'
                  ].map(destination => (
                    <label key={destination} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        checked={formData.destinations.includes(destination)}
                        onChange={() => updateArrayField('destinations', destination)}
                      />
                      <span className="checkmark"></span>
                      {destination}
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Interests */}
              <div className="form-group">
                <label>What are your special interests?</label>
                <div className="interest-cards">
                  {[
                    { interest: 'Big Five', icon: Heart },
                    { interest: 'Photography', icon: Camera },
                    { interest: 'Bird Watching', icon: Binoculars },
                    { interest: 'Cultural Experiences', icon: Users },
                    { interest: 'Adventure Activities', icon: TreePine },
                    { interest: 'Relaxation & Wellness', icon: Heart }
                  ].map(({ interest, icon: Icon }) => (
                    <div 
                      key={interest}
                      className={`interest-card ${formData.interests.includes(interest) ? 'selected' : ''}`}
                      onClick={() => updateArrayField('interests', interest)}
                    >
                      <Icon size={24} />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accommodation Type */}
              <div className="form-group">
                <label>Preferred accommodation style</label>
                <div className="option-buttons">
                  {getAccommodationOptions().map(accommodation => (
                    <button
                      key={accommodation}
                      type="button"
                      className={`option-btn ${formData.accommodationType === accommodation ? 'selected' : ''}`}
                      onClick={() => updateFormData('accommodationType', accommodation)}
                    >
                      {accommodation}
                    </button>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="form-group">
                <label>Which activities interest you most?</label>
                <div className="checkbox-grid">
                  {[
                    'Game Drives',
                    'Walking Safaris',
                    'Night Safaris',
                    'Cultural Village Visits',
                    'Hot Air Balloon',
                    'Bush Breakfast/Dinner',
                    'Photography Workshops',
                    'Conservation Experiences',
                    'Beach Extensions',
                    'Mountain Trekking'
                  ].map(activity => (
                    <label key={activity} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        checked={formData.activities.includes(activity)}
                        onChange={() => updateArrayField('activities', activity)}
                      />
                      <span className="checkmark"></span>
                      {activity}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="form-step">
              <h3>Let's connect with you</h3>

              {/* Contact Information */}
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => updateFormData('name', e.target.value)}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => updateFormData('email', e.target.value)}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={e => updateFormData('phone', e.target.value)}
                    className="form-input"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <select 
                    value={formData.preferredContact} 
                    onChange={e => updateFormData('preferredContact', e.target.value)}
                    className="form-select"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>

              {/* Special Requirements */}
              <div className="form-group">
                <label>Special Requirements</label>
                <input 
                  type="text" 
                  value={formData.specialRequirements}
                  onChange={e => updateFormData('specialRequirements', e.target.value)}
                  className="form-input"
                  placeholder="Dietary restrictions, accessibility needs, etc."
                />
              </div>

              {/* Additional Comments */}
              <div className="form-group">
                <label>Additional Comments</label>
                <textarea 
                  value={formData.additionalComments}
                  onChange={e => updateFormData('additionalComments', e.target.value)}
                  className="form-textarea"
                  placeholder="Anything else you'd like us to know about your dream adventure..."
                  rows={4}
                />
              </div>

              {/* Preferred Contact Time */}
              <div className="form-group">
                <label>Best time to contact you</label>
                <select 
                  value={formData.preferredTime} 
                  onChange={e => updateFormData('preferredTime', e.target.value)}
                  className="form-select"
                >
                  <option value="">Select time preference</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="modal-footer">
            {/* Back Button - Shows on step 2 and 3 */}
            {(currentStep === 2 || currentStep === 3) && (
              <button 
                type="button" 
                onClick={prevStep}
                className="btn-primary"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem'
                }}
              >
                <ChevronLeft size={20} />
                Previous
              </button>
            )}
            
            
            <div className="footer-spacer"></div>
            
            {/* Next/Submit Button */}
            {currentStep < totalSteps ? (
              <button 
                type="button" 
                onClick={nextStep}
                className="btn-primary"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem'
                }}
              >
                Next
                <ChevronRight size={20} />
              </button>
            ) : (
              <button 
                type="submit"
                className="btn-submit"
              >
                Get My Custom Itinerary
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdventurePlanningModal;
