import React, { useState, ReactNode } from 'react';
import Modal from './Modal';

interface ThemeLayoutProps {
  children: ReactNode;
}

const MODAL_CONTENT = {
    ABOUT: {
        title: "About World Clock Dashboard",
        content: <div className="space-y-4">
            <p>Welcome to the World Clock Dashboard, a premier digital utility designed for professionals, travelers, and developers who require precise, synchronized global time data.</p>
            <p>Built by <strong>HSINI MOHAMED</strong>, this application leverages the power of the WorldTimeAPI to fetch atomic-clock-synchronized data. It serves as both a functional tool and a demonstration of modern web capabilities, utilizing React 18, TypeScript, and advanced CSS animations to create an immersive user experience.</p>
            <p>Our mission is to provide a seamless, aesthetically pleasing interface for tracking time across the confusing landscape of global time zones.</p>
        </div>
    },
    CONTACT: {
        title: "Contact & Support",
        content: <div className="space-y-4">
            <p>We value your feedback and are available for collaboration, support, or general inquiries. Please verify your identity when contacting support for faster resolution.</p>
            <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                <h4 className="text-purple-400 font-bold mb-2">Primary Contact</h4>
                <ul className="space-y-2">
                    <li className="flex items-center"><span className="w-20 text-gray-500">Developer:</span> <span className="text-white">HSINI MOHAMED</span></li>
                    <li className="flex items-center"><span className="w-20 text-gray-500">Email:</span> <a href="mailto:hsini.web@gmail.com" className="text-purple-400 hover:text-purple-300 underline">hsini.web@gmail.com</a></li>
                    <li className="flex items-center"><span className="w-20 text-gray-500">Website:</span> <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">doodax.com</a></li>
                </ul>
            </div>
        </div>
    },
    GUIDE: {
        title: "User Guide & Documentation",
        content: <div className="space-y-4">
            <p><strong>Dashboard Overview:</strong> The main screen presents a grid of "Clock Cards." Each card represents a distinct time zone. The time is synchronized with the server's atomic time.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong>Live Updates:</strong> Clocks update every second. While the initial data is fetched via API, an internal high-precision timer maintains accuracy between syncs.</li>
                <li><strong>API Configuration:</strong> Advanced users can modify the API endpoint to test different time servers or custom proxies.</li>
                <li><strong>Mobile View:</strong> The application is fully responsive. On mobile devices, cards stack vertically for better readability.</li>
            </ul>
        </div>
    },
    PRIVACY: {
        title: "Privacy Policy",
        content: <div className="space-y-4 text-sm">
            <p><strong>Last Updated: October 27, 2023</strong></p>
            <p>Your privacy is of paramount importance to us. This Privacy Policy outlines the types of information we do not collect and how we safeguard your experience.</p>
            <h4 className="font-bold text-white mt-4">1. Data Collection</h4>
            <p>This application operates as a client-side tool. We do not store, collect, or transmit any personal identifiable information (PII) to our servers. All time data is fetched directly from the WorldTimeAPI public endpoints.</p>
            <h4 className="font-bold text-white mt-4">2. Cookies and Local Storage</h4>
            <p>We do not use tracking cookies. Local storage may be used solely to save your user preferences (such as your last configured API URL) locally on your device.</p>
            <h4 className="font-bold text-white mt-4">3. Third-Party Links</h4>
            <p>This site may contain links to external websites (e.g., GitHub, Doodax.com). We are not responsible for the privacy practices of these external sites.</p>
        </div>
    },
    TERMS: {
        title: "Terms of Service",
        content: <div className="space-y-4 text-sm">
            <p>By accessing or using the World Clock Dashboard, you agree to be bound by these Terms of Service.</p>
            <h4 className="font-bold text-white mt-4">1. Disclaimer of Warranties</h4>
            <p>The service is provided on an "AS IS" and "AS AVAILABLE" basis. While we strive for high accuracy utilizing atomic time standards, we make no warranties regarding the absolute reliability of the time data for critical life-safety or financial trading applications.</p>
            <h4 className="font-bold text-white mt-4">2. Usage Rights</h4>
            <p>You may use this application for personal, educational, and commercial purposes. You agree not to misuse the API endpoints or attempt to disrupt the service.</p>
            <h4 className="font-bold text-white mt-4">3. Limitation of Liability</h4>
            <p>In no event shall HSINI MOHAMED or associated entities be liable for any indirect, incidental, or consequential damages arising from the use of this service.</p>
        </div>
    },
    DMCA: {
        title: "DMCA Compliance",
        content: <div className="space-y-4">
            <p>We respect the intellectual property rights of others. All code, design assets, and content within this application are either original works by HSINI MOHAMED or used under appropriate open-source licenses.</p>
            <p>If you believe that material available on this website infringes on your copyright(s), please notify us by providing a DMCA notice. Upon receipt of a valid and complete notice, we will remove the material and make a good faith attempt to contact the user who uploaded the material by email.</p>
            <div className="bg-red-900/20 border border-red-500/50 p-4 rounded text-red-200">
                <strong>Designated Agent for DMCA Notices:</strong><br/>
                Email: <a href="mailto:hsini.web@gmail.com" className="underline">hsini.web@gmail.com</a><br/>
                Subject Line: DMCA Takedown Request
            </div>
        </div>
    }
};

type ModalType = keyof typeof MODAL_CONTENT | null;

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  const NavLink: React.FC<{ modal: ModalType, text: string }> = ({ modal, text }) => (
    <button onClick={() => openModal(modal)} className="px-3 py-2 text-sm md:text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-md transition-colors duration-200">
      {text}
    </button>
  );

  return (
    <div className="relative min-h-screen bg-[#050510] text-white font-sans overflow-x-hidden flex flex-col">
      {/* Immersive Multi-Colored Galaxy Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <style>{`
          @keyframes twinkle {
            0% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(0.8); }
          }
          @keyframes drift {
            from { background-position: 0 0; }
            to { background-position: 1000px 500px; }
          }
          @keyframes nebula-pulse {
            0% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
            100% { opacity: 0.3; transform: scale(1); }
          }
          .star-field {
            background: #000 url(https://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
            z-index: 0;
            opacity: 0.6;
          }
          .nebula-layer {
            background: 
              radial-gradient(circle at 20% 30%, rgba(76, 29, 149, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(219, 39, 119, 0.3) 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 40%);
            filter: blur(40px);
            animation: nebula-pulse 10s infinite ease-in-out;
            z-index: 1;
          }
          .twinkling-stars {
            background: transparent url(https://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
            z-index: 2;
            opacity: 0.4;
            animation: drift 100s linear infinite;
          }
        `}</style>
        <div className="absolute inset-0 star-field"></div>
        <div className="absolute inset-0 nebula-layer"></div>
        <div className="absolute inset-0 twinkling-stars"></div>
        
        {/* Additional accent lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 rounded-[100%] blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <header className="py-4 px-6 bg-black/30 backdrop-blur-md sticky top-0 z-30 border-b border-white/5">
          <nav className="container mx-auto flex justify-center items-center flex-wrap gap-2 md:gap-6">
            <NavLink modal="ABOUT" text="About" />
            <NavLink modal="CONTACT" text="Contact" />
            <NavLink modal="GUIDE" text="Guide" />
            <NavLink modal="PRIVACY" text="Privacy Policy" />
            <NavLink modal="TERMS" text="Terms of Service" />
            <NavLink modal="DMCA" text="DMCA" />
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="py-8 px-4 bg-black/40 backdrop-blur-md text-center border-t border-white/5 mt-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-gray-300 text-lg">
              Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all">HSINI MOHAMED</a>
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
               <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
               <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
               <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
               <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
               <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            </div>
            <p className="text-xs text-gray-600 mt-4">
              © {new Date().getFullYear()} World Clock Dashboard. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {activeModal && (
        <Modal 
          isOpen={!!activeModal} 
          onClose={closeModal}
          title={MODAL_CONTENT[activeModal].title}
        >
          {MODAL_CONTENT[activeModal].content}
        </Modal>
      )}
    </div>
  );
};

export default ThemeLayout;