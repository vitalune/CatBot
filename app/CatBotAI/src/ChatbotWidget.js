import React, { useState, useEffect } from 'react';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Listen for the custom event from the landing page CTA button
  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChatbot', handleOpenChatbot);

    return () => {
      window.removeEventListener('openChatbot', handleOpenChatbot);
    };
  }, []);

  return (
    <>
      <button
        id="chatbot-toggle"
        className="chatbot-toggle"
        onClick={toggleChatbot}
        aria-label={isOpen ? 'Close CatBot Chatbot' : 'Open CatBot Chatbot'}
      >
        {isOpen ? '✕' : '😺'}
      </button>

      <div
        id="chatbot-container"
        className={`chatbot-widget-container ${isOpen ? '' : 'hidden'}`}
      >
        <iframe
          id="chatbot-iframe"
          className="chatbot-iframe"
          src="https://vitalune-catbot.hf.space"
          frameBorder="0"
          title="CatBot AI Tutor"
          allow="accelerometer; ambient-light-sensor; autoplay; battery; camera; clipboard-write; encrypted-media; geolocation; gyroscope; layout-animations; magnetometer; microphone; midi; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; web-share; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
        />
      </div>
    </>
  );
};

export default ChatbotWidget;
