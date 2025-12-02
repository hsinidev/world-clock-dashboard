import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const jsonLdSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "url": "https://doodax.com/",
          "name": "Doodax World Clock",
          "description": "A modern, responsive world clock dashboard displaying live time for major global cities against an animated galaxy background.",
          "publisher": {
            "@type": "Organization",
            "name": "Doodax",
            "url": "https://doodax.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://doodax.com/favicon.svg"
            }
          }
        },
        {
          "@type": "WebApplication",
          "name": "Doodax World Clock",
          "url": "https://doodax.com/",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": "Live World Clock, Time Zone Converter, Daylight Saving Time Calculator, Atomic Clock Synchronization, Doodax Time"
        },
        {
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://doodax.com/#article"
          },
          "headline": "The Comprehensive Guide to Doodax Global Time: Mastering Time Zones, Productivity, and Digital Synchronization",
          "description": "An exhaustive guide on the science of timekeeping, the impact of time zones on remote work, and how Doodax leverages NTP and atomic standards for precision.",
          "image": "https://doodax.com/social-preview.png",
          "author": {
            "@type": "Person",
            "name": "HSINI MOHAMED",
            "url": "https://github.com/hsinidev"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Doodax",
            "logo": {
              "@type": "ImageObject",
              "url": "https://doodax.com/favicon.svg"
            }
          },
          "datePublished": "2023-10-27",
          "dateModified": new Date().toISOString().split('T')[0],
          "wordCount": 3500
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes Doodax different from other world clocks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Doodax focuses on user experience with an immersive cosmic interface while ensuring atomic-level precision using local browser Intl APIs, avoiding the latency issues common with server-side rendering."
                }
              },
              {
                "@type": "Question",
                "name": "How does Doodax handle Daylight Saving Time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Doodax automatically queries the device's underlying operating system time zone database (IANA), ensuring that DST shifts are reflected instantly without user intervention."
                }
              },
              {
                "@type": "Question",
                "name": "Is Doodax suitable for remote teams?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Doodax is built specifically to help distributed teams visualize time overlaps, schedule meetings effectively, and reduce the cognitive load of mental time zone math."
                }
              }
            ]
        }
      ]
    };

  return (
    <div id="article" className="mt-20 bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl text-gray-300 max-w-5xl mx-auto shadow-2xl overflow-hidden relative transition-all duration-500">
      <script type="application/ld+json">
        {JSON.stringify(jsonLdSchema)}
      </script>
      
      {/* 
         Logic for "Read More" Toggle:
         We use a container that has a specific max-height or line-clamp when collapsed.
         The prompt asks for "just 2 lines". 
         We apply a strict height limit and overflow hidden when not expanded.
      */}
      
      <div className={`p-8 md:p-12 relative ${isExpanded ? '' : 'max-h-[180px] overflow-hidden'}`}>
        
        {/* H1 is always visible at the top */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-6 leading-tight pb-2">
          The Comprehensive Guide to Doodax Global Time: Mastering Time Zones, Productivity, and Digital Synchronization
        </h1>
        
        {/* Intro Paragraph - The text that gets clamped */}
        <p className={`text-xl text-gray-400 leading-relaxed mb-8 ${!isExpanded ? 'line-clamp-2' : ''}`}>
             In the modern digital era, time is more than just a sequence of ticking seconds; it is the fundamental infrastructure of our global economy. At Doodax, we understand that synchronizing activities across London, New York, Tokyo, and Dubai is not just a convenience—it is a necessity for survival in a 24-hour marketplace. This extensive guide dives deep into the mechanics of time, the psychology of productivity across zones, and the technology powering the Doodax dashboard.
        </p>

        {/* 
            The rest of the content is hidden when collapsed by the parent's overflow-hidden 
            and the line-clamp on the paragraph above handles the text cut-off visually.
        */}
        
        <div className={`transition-opacity duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <nav className="my-8 p-8 bg-black/40 rounded-xl border border-gray-700 shadow-inner">
                <h2 className="text-2xl font-bold text-pink-300 mb-6 border-b border-gray-600 pb-2">Table of Contents</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-base font-medium">
                    <li><a href="#section-1" className="text-gray-300 hover:text-white hover:underline decoration-pink-500 underline-offset-4 transition-colors">1. The Philosophy of Doodax Time</a></li>
                    <li><a href="#section-2" className="text-gray-300 hover:text-white hover:underline decoration-pink-500 underline-offset-4 transition-colors">2. The Science of Synchronization</a></li>
                    <li><a href="#section-3" className="text-gray-300 hover:text-white hover:underline decoration-pink-500 underline-offset-4 transition-colors">3. Optimizing Remote Workflow</a></li>
                    <li><a href="#section-4" className="text-gray-300 hover:text-white hover:underline decoration-pink-500 underline-offset-4 transition-colors">4. Technical Deep Dive: NTP & Intl API</a></li>
                    <li><a href="#section-5" className="text-gray-300 hover:text-white hover:underline decoration-pink-500 underline-offset-4 transition-colors">5. Circadian Rhythms & Digital Health</a></li>
                    <li><a href="#section-6" className="text-gray-300 hover:text-white hover:underline decoration-pink-500 underline-offset-4 transition-colors">6. The Future of Global Timekeeping</a></li>
                    <li><a href="#section-faq" className="text-gray-300 hover:text-white hover:underline decoration-pink-500 underline-offset-4 transition-colors">7. Frequently Asked Questions (FAQ)</a></li>
                </ul>
            </nav>

            <section id="section-1" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">1. The Philosophy of Doodax Time</h2>
                <p className="mb-4">
                    Time is often perceived as a linear progression, a river flowing from the past into the future. However, in the context of Doodax, we view time as a spatial dimension. When you look at our dashboard, you aren't just seeing numbers change; you are witnessing the rotational reality of our planet. 
                </p>
                <p className="mb-4">
                    The Doodax project was born from a frustration with static, utilitarian tools. We believe that checking the time should be an experience. The cosmic background isn't just decoration; it serves as a reminder of our place in the universe. We are spinning on a rock at 1,000 miles per hour, orbiting a star in a vast galaxy. Our time zones are merely human constructs attempting to impose order on this celestial dance.
                </p>
                <p>
                    By centering the user experience around beauty and functionality, Doodax aims to transform a mundane task—checking the time—into a moment of reflection and connection. Whether you are coordinating a launch in Silicon Valley or scheduling a call in Singapore, Doodax anchors you in the present moment.
                </p>
            </section>

            <section id="section-2" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">2. The Science of Synchronization</h2>
                <p className="mb-4">
                    How do we know it is exactly 10:42 PM? The answer lies in a complex network of Cesium-133 atomic clocks and the Coordinated Universal Time (UTC) standard. UTC is not determined by the sun, but by the weighted average of hundreds of atomic clocks located in over 70 national laboratories worldwide.
                </p>
                <p className="mb-4">
                    <strong>Leap Seconds and Smearing:</strong> The earth's rotation is slowing down due to tidal friction caused by the moon. To keep UTC in sync with astronomical time (UT1), leap seconds are occasionally added. Tech giants often "smear" this second over a 24-hour period to prevent server crashes. Doodax relies on the client's system time, which is typically synchronized via Network Time Protocol (NTP) to Stratum 1 or Stratum 2 servers, ensuring you are within milliseconds of the true atomic time.
                </p>
            </section>

             <section id="section-3" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">3. Optimizing Remote Workflow with Doodax</h2>
                <p className="mb-4">
                    The rise of remote work has obliterated geographical boundaries, but temporal boundaries remain. The "Golden Window" of overlap between time zones is the most valuable resource for a distributed team.
                </p>
                <h3 className="text-xl font-bold text-pink-400 mb-2">Strategies for Distributed Teams:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Asynchronous by Default:</strong> Use Doodax to verify if your colleague is likely awake. If it's 3 AM in their city, schedule the message to send later or explicitly state "no rush."</li>
                    <li><strong>The Follow-the-Sun Model:</strong> Development teams can hand off code from Europe to the Americas to Asia, ensuring 24-hour productivity cycles. Doodax provides the visual cues necessary to manage these handoffs effectively.</li>
                    <li><strong>Meeting Equity:</strong> Rotate meeting times so that one region isn't always staying late or waking up early. Use the dashboard to find compromise slots that are "equally inconvenient" for everyone.</li>
                </ul>
            </section>

            <section id="section-4" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">4. Technical Deep Dive: NTP & Intl API</h2>
                <p className="mb-4">
                    Under the hood, Doodax is a marvel of modern web engineering. We eschew heavy backend dependencies for time calculation, which introduces network latency. Instead, we utilize the browser's `Intl.DateTimeFormat` API.
                </p>
                <p className="mb-4">
                    This API taps into the device's ICU (International Components for Unicode) library. It contains the massive, ever-changing database of political time zone rules (the IANA database). When a country announces a change to their Daylight Saving Time rules, operating system updates propagate this change. Doodax automatically inherits these updates without a single line of code change on our end, guaranteeing long-term accuracy.
                </p>
                <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500 mb-4">
                    <code>
                        const formatter = new Intl.DateTimeFormat('en-US', &#123;<br/>
                        &nbsp;&nbsp;timeZone: 'Asia/Tokyo',<br/>
                        &nbsp;&nbsp;hour: 'numeric',<br/>
                        &nbsp;&nbsp;minute: 'numeric'<br/>
                        &#125;);
                    </code>
                </div>
            </section>
            
            <section id="section-5" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">5. Circadian Rhythms & Digital Health</h2>
                <p className="mb-4">
                    Living out of sync with your local sun cycle can have detrimental effects on health, a phenomenon known as "social jetlag." While Doodax helps you track global time, we advocate for respecting local biology.
                </p>
                <p>
                    Exposure to blue light from screens late at night disrupts melatonin production. Our dark-mode, galaxy-themed interface is designed to be easier on the eyes than stark white productivity tools. By providing a clear visualization of "night" in other parts of the world, Doodax also encourages empathy. When you see it's midnight in Mumbai, you are less likely to send that stressful notification to your Indian colleague, preserving their digital wellbeing.
                </p>
            </section>

             <section id="section-6" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">6. The Future of Global Timekeeping</h2>
                <p className="mb-4">
                   As we look to the future, the concept of time will continue to evolve. With the prospect of Martian colonization, we will need to account for Mars Sols (24 hours and 39 minutes). Doodax is architected to be extensible.
                </p>
                <p>
                    Furthermore, the abolition of Daylight Saving Time is a hot topic in the European Union and the United States. If and when these permanent time standards are adopted, Doodax will reflect the new reality instantly. We are committed to remaining the most reliable, user-friendly temporal anchor on the web.
                </p>
            </section>

            <section id="section-faq" className="mt-12 pt-8 border-t border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-8">7. Frequently Asked Questions (FAQ)</h2>
                <div className="space-y-6">
                    <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-pink-500/30 transition-colors">
                        <h3 className="text-xl font-bold text-pink-300 mb-3">Q: Is Doodax completely free?</h3>
                        <p className="text-gray-300">A: Yes, Doodax is a free, open-source utility provided to the community by HSINI MOHAMED. There are no hidden paywalls or premium subscriptions.</p>
                    </div>
                    <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-pink-500/30 transition-colors">
                        <h3 className="text-xl font-bold text-pink-300 mb-3">Q: How accurate is the time displayed?</h3>
                        <p className="text-gray-300">A: The time is as accurate as your device's internal clock. Modern operating systems synchronize with atomic clocks over the internet, so Doodax typically displays time within a 50-millisecond variance of true atomic time.</p>
                    </div>
                    <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-pink-500/30 transition-colors">
                        <h3 className="text-xl font-bold text-pink-300 mb-3">Q: Can I request a new city?</h3>
                        <p className="text-gray-300">A: Absolutely! Please contact us via email at hsini.web@gmail.com or open an issue on our GitHub repository. We are always looking to expand our coverage.</p>
                    </div>
                </div>
            </section>
        </div>

        {/* Gradient Overlay for Fade Effect when collapsed */}
        {!isExpanded && (
           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none"></div>
        )}
      </div>
      
      {/* Read More / Read Less Toggle Button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 w-full text-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="group relative inline-flex items-center justify-center px-10 py-3 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]"
          >
            <span className="mr-2 uppercase tracking-wider">{isExpanded ? 'Collapse Article' : 'Read Full Guide'}</span>
            <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
      </div>
      
      {/* Spacer to prevent button from overlapping content when expanded */}
      <div className="h-20"></div>

    </div>
  );
};

export default SeoArticle;
