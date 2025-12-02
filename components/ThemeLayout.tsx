import React, { useState, PropsWithChildren } from 'react';
import Modal from './Modal';

type ModalType = 'About' | 'Contact' | 'Guide' | 'Privacy' | 'Terms' | 'DMCA' | null;

const ThemeLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);
  
  const navLinks: { name: ModalType; label: string }[] = [
    { name: 'About', label: 'About' },
    { name: 'Contact', label: 'Contact' },
    { name: 'Guide', label: 'Guide' },
    { name: 'Privacy', label: 'Privacy Policy' },
    { name: 'Terms', label: 'Terms of Service' },
    { name: 'DMCA', label: 'DMCA' },
  ];

  // Content for modals to satisfy informational requirements
  const getModalContent = (type: ModalType) => {
    switch (type) {
      case 'About':
        return (
          <div className="space-y-4 text-gray-300">
            <h3 className="text-xl font-bold text-white mb-2">About Doodax</h3>
            <p><strong>Doodax World Clock</strong> is a premier time-tracking utility developed by <strong>HSINI MOHAMED</strong>. Our mission is to provide accurate, real-time global synchronization data in a visually immersive environment.</p>
            <p>Designed for professionals working across time zones, digital nomads, and enthusiasts of precision timekeeping, this application leverages the latest in web technologies to ensure millisecond accuracy without relying on external, latency-prone APIs.</p>
            <p>We believe that utility software should be beautiful. The "Doodax" theme represents the universality of time—a constant that binds us all, regardless of our location on this planet.</p>
          </div>
        );
      case 'Contact':
        return (
          <div className="space-y-4 text-gray-300">
             <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
            <p>We value your feedback and inquiries. Whether you have a technical question, a partnership proposal, or simply want to say hello, please reach out.</p>
            <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600 shadow-inner">
              <p className="mb-3 text-lg"><span className="text-pink-400 font-bold">Developer:</span> HSINI MOHAMED</p>
              <p className="mb-3 text-lg"><span className="text-pink-400 font-bold">Website:</span> <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">doodax.com</a></p>
              <p className="text-lg"><span className="text-pink-400 font-bold">Email:</span> <a href="mailto:hsini.web@gmail.com" className="underline hover:text-white transition-colors">hsini.web@gmail.com</a></p>
            </div>
            <div className="bg-yellow-900/30 border border-yellow-700 p-3 rounded mt-4">
                 <p className="text-sm text-yellow-200">⚠️ <strong>Note:</strong> We aim to respond to all legitimate inquiries within 24-48 business hours.</p>
            </div>
          </div>
        );
      case 'Guide':
        return (
          <div className="space-y-4 text-gray-300">
            <h3 className="text-xl font-bold text-white">How to Use Doodax Dashboard</h3>
            <ul className="list-disc pl-5 space-y-3 marker:text-pink-500">
              <li><strong>Real-Time Tracking:</strong> The clocks update automatically every second. No manual refresh is required.</li>
              <li><strong>Time Zones:</strong> We currently feature major economic hubs including New York, London, Tokyo, and Dubai.</li>
              <li><strong>DST Awareness:</strong> The application automatically adjusts for Daylight Saving Time based on your browser's sophisticated localization definitions.</li>
              <li><strong>Cross-Platform:</strong> Access this dashboard on your mobile, tablet, or desktop. The layout adapts to your screen size.</li>
            </ul>
          </div>
        );
      case 'Privacy':
        return (
          <div className="space-y-4 text-gray-300 text-sm">
            <h3 className="text-xl font-bold text-white mb-2">Privacy Policy</h3>
            <div className="bg-red-900/20 border border-red-500/50 p-3 rounded mb-4">
                <p className="text-red-200 font-semibold">Important Notice for Google Policy Compliance</p>
            </div>
            <p><strong>Last Updated: October 2023</strong></p>
            <p>Your privacy is critically important to us. This Privacy Policy explains how <strong>doodax.com</strong> ("we", "us", or "our") collects, uses, and protects your information.</p>
            
            <h4 className="font-bold text-white mt-4 text-lg">1. Information Collection</h4>
            <p>We do not require user registration to use the World Clock. We do not collect personally identifiable information (PII) such as names, addresses, or phone numbers. We may collect anonymous usage data (e.g., browser type, screen resolution) to improve user experience.</p>
            
            <h4 className="font-bold text-white mt-4 text-lg">2. Cookies</h4>
            <p>We may use local storage or cookies solely to remember your user preferences (such as theme settings) or for analytical purposes to understand site traffic. You can disable cookies in your browser settings.</p>
            
            <h4 className="font-bold text-white mt-4 text-lg">3. Data Security</h4>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you access our site.</p>
            
             <h4 className="font-bold text-white mt-4 text-lg">4. Third-Party Links</h4>
            <p>Our site may contain links to external sites (e.g., GitHub). We are not responsible for the privacy practices of these external sites.</p>
          </div>
        );
      case 'Terms':
        return (
          <div className="space-y-4 text-gray-300 text-sm">
            <h3 className="text-xl font-bold text-white mb-2">Terms of Service</h3>
            <p>By accessing <strong>doodax.com</strong>, you agree to be bound by these Terms of Service.</p>
            
            <h4 className="font-bold text-white mt-4 text-lg">1. Use License</h4>
            <p>Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only.</p>
            
            <h4 className="font-bold text-white mt-4 text-lg">2. Disclaimer</h4>
            <p>The materials on this website are provided on an "as is" basis. While we strive for accuracy, time zone rules change frequently politically. We do not warrant that the time data is 100% error-free for mission-critical synchronization.</p>
            
            <h4 className="font-bold text-white mt-4 text-lg">3. Limitations</h4>
            <p>In no event shall HSINI MOHAMED or doodax.com be liable for any damages arising out of the use or inability to use the materials on this website.</p>
          </div>
        );
      case 'DMCA':
        return (
          <div className="space-y-4 text-gray-300 text-sm">
            <h3 className="text-xl font-bold text-white mb-2">DMCA Policy</h3>
            <p><strong>Digital Millennium Copyright Act (DMCA) Policy</strong></p>
            <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights of any person or entity.</p>
            <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to <strong>hsini.web@gmail.com</strong>.</p>
            <p>Please include in your claim a detailed description of the alleged infringement as detailed under 17 U.S.C. 512(c)(3).</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden flex flex-col font-sans">
      {/* 
        Multi-colored Galaxy Background 
        Enhanced with more layers and colors for an immersive experience
      */}
      <div className="fixed inset-0 -z-10 bg-[#080516]">
        {/* Base Deep Space Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#080516] via-[#1a103c] to-[#0f0c29]"></div>
        
        {/* Animated Nebula Layers - Pink/Purple */}
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-purple-600/20 blur-[100px] animate-pulse-slow mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-pink-600/20 blur-[100px] animate-pulse-slower mix-blend-screen"></div>
        
        {/* Animated Nebula Layers - Cyan/Blue */}
        <div className="absolute top-[40%] left-[30%] w-[60%] h-[60%] rounded-full bg-cyan-600/10 blur-[80px] animate-blob mix-blend-screen"></div>

        {/* Moving Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-spin-very-slow opacity-30">
                <div className="absolute top-[50%] left-[50%] w-[50%] h-[50%] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-[50%] left-[50%] w-[50%] h-[50%] bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
            </div>
        </div>
        
        {/* Starfield Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-twinkle"></div>
      </div>
      
      <header className="py-4 px-6 md:px-8 bg-black/20 backdrop-blur-lg sticky top-0 z-40 border-b border-white/5 shadow-2xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
             <div className="relative w-10 h-10">
                 <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
                 <div className="absolute inset-0.5 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-xl">🪐</span>
                 </div>
             </div>
             <h1 className="text-3xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-300 drop-shadow-sm">
              Doodax
            </h1>
           </div>
          
          <nav className="flex flex-wrap justify-center gap-3 md:gap-5">
            {navLinks.map(link => (
              <button 
                key={link.name} 
                onClick={() => openModal(link.name)} 
                className="text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 px-3 py-1.5 rounded-full border border-transparent hover:border-white/20"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-6 md:py-12 flex-grow flex flex-col items-center">
        <div className="w-full max-w-7xl">
          {children}
        </div>
      </main>

      <footer className="py-10 px-4 bg-black/60 backdrop-blur-xl mt-16 border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex flex-col gap-2">
                <p className="font-bold text-lg text-gray-100 flex items-center justify-center md:justify-start gap-2">
                  <span>⚡</span> Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 font-extrabold hover:underline decoration-yellow-500/50 underline-offset-4">HSINI MOHAMED</a>
                </p>
                <p className="text-xs text-gray-500">
                    Built with React, TypeScript & Cosmic Energy.
                </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-3 text-sm font-medium">
               <div className="flex gap-6">
                  <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:scale-110 transition-transform duration-300">🌐</span> doodax.com
                  </a>
                  <a href="mailto:hsini.web@gmail.com" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:scale-110 transition-transform duration-300">📧</span> hsini.web@gmail.com
                  </a>
               </div>
               <p className="text-xs text-gray-600">© {new Date().getFullYear()} Doodax Inc. All rights reserved.</p>
            </div>
        </div>
      </footer>

      <Modal isOpen={activeModal !== null} onClose={closeModal} title={activeModal || ''}>
        {activeModal && getModalContent(activeModal)}
      </Modal>

      <style>{`
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
         @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 120s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }
        .animate-blob {
            animation: blob 20s infinite;
        }
        .animate-twinkle {
             animation: pulse 4s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default ThemeLayout;
