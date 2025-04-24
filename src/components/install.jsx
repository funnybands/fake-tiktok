import React, { useEffect, useState } from 'react';

const InstallPage = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if the app is already installed (running in standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsStandalone(true);  // If the app is in standalone mode, it's already installed
    }

    // Listen for the 'beforeinstallprompt' event and store the event to trigger the install prompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent the default browser install prompt
      setDeferredPrompt(e); // Store the event
      setIsInstallable(true); // Set the app as installable
    };

    // Listen to the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Clean up the event listener
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the install prompt to the user
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
        })
        .catch((error) => {
          console.error('Install prompt failed:', error);
        });
    }
  };

  if (isStandalone) {
    return (
      <div>
        <h1>App Installed</h1>
        <p>Your app is already installed as a PWA!</p>
      </div>
    );
  }

  return (
    <div>
      {isInstallable && (
        <button 
        onClick={handleInstallClick} 
        style={{
          backgroundColor: '#007bff',   // Blue background
          color: 'white',               // White text
          padding: '15px 30px',         // Large padding for a bigger button
          borderRadius: '8px',          // Rounded corners
          fontSize: '16px',             // Bigger font size
          fontWeight: 'bold',           // Make text bold
          border: 'none',               // Remove default border
          cursor: 'pointer',           // Pointer cursor on hover
          boxShadow: '0 4px 8px rgba(0, 123, 255, 0.4)', // Shadow for depth effect
          transition: 'all 0.3s ease',  // Smooth transition for hover effect
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} // Darker blue on hover
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}  // Revert to original color on mouse out
      >
        Install App
      </button>
      
      )}

      {!isInstallable && <p>Your browser doesn't support installing this PWA.</p>}
    </div>
  );
};

export default InstallPage;
