import React from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const handleTryCatBot = () => {
    // This will be handled by the ChatbotWidget component
    const event = new CustomEvent('openChatbot');
    window.dispatchEvent(event);
  };

  return (
    <div className="landing-container">
      <div className="hero-section">
        <div className="cat-emoji">😺</div>
        <h1 className="hero-title">Your AI Tutor with Cattitude</h1>
        <p className="hero-subtitle">
          Sarcastic cat personality meets academic support
        </p>
        <p className="hero-description">
          Built with cat-like curiosity and student-focused empathy
        </p>
        <button className="cta-button" onClick={handleTryCatBot}>
          Try CatBot Now
        </button>
      </div>

      <div className="features-section">
        <h2 className="features-title">What Makes CatBot Special</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Course-Specific Tutoring</h3>
            <p>
              Trained on University of Pittsburgh materials for CS1502 (Formal Methods),
              CS1530 (Software Engineering), LCJS1320 (Civil Rights Law), and MATH0280 (Linear Algebra)
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Academic Integrity Protected</h3>
            <p>
              Guides you through problem-solving with probing questions instead of
              providing direct homework answers. Learn, don't cheat.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">♿</div>
            <h3>Accessible Design</h3>
            <p>
              Built with ADHD, visual, auditory, motor, and cognitive accessibility
              in mind. Everyone deserves a patient tutor.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧪</div>
            <h3>Red Team Tested</h3>
            <p>
              Passed 9/10 adversarial security tests. Jailbreak resistant,
              privacy protected, and handles harmful requests appropriately.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">😺</div>
            <h3>Sarcastic Cat Persona</h3>
            <p>
              Makes studying engaging with cat puns and sarcastic humor.
              The purrfect study buddy who never judges you.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🆓</div>
            <h3>Free & Open Source</h3>
            <p>
              Available to all students on Hugging Face. No account required,
              no cost, no barriers to learning.
            </p>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <h2>How CatBot Helps You Learn</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <p>Ask a question about your course material</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>Get context-aware answers from actual Pitt course docs</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>Develop understanding through guided questions</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <p>Master concepts with cat puns along the way</p>
          </div>
        </div>
      </div>

      <div className="final-cta">
        <h2>Ready to Study with CatBot?</h2>
        <p>Click the cat button in the bottom-right corner to get started!</p>
        <div className="demo-pointer">👇</div>
      </div>
    </div>
  );
};

export default Chatbot;
