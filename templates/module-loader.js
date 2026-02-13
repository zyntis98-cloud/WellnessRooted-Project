// WELLNESSROOTED - MODULE LOADER
// FIXED: Removed invalid :contains() selector
// FIXED: Using content-card span for read times
// Version: 3.3 - Updated ALL topics with engaging descriptions

const WellnessRootedLoader = {
    // Content for each topic
    content: {
        'stress-management': {
            titles: ['Find Calm in 3 Minutes', 'Rewire Your Stress Response', 'The 60-Second Reset Button'],
            times: ['3 min read', '5 min read', '2 min read'],
            descriptions: [
                'Learn practical techniques for your wellness journey...',
                'Simple daily practices that actually change how your brain handles stress',
                'An ancient breathing method that works in the time it takes to wash your hands'
            ],
            cta: {
                headline: 'Ready for More Peace?',
                description: 'Join thousands who\'ve found calm with this 7-minute practice',
                buttonText: 'Learn About Mindfulness',
                link: 'https://66758wz8452oer1zv4xl08swem.hop.clickbank.net?tid=zyntis_fb_main'
            }
        },
        'health-optimization': {
            titles: ['Morning Metabolism', 'Coffee Benefits', 'Healthy Routines'],
            times: ['3 min read', '4 min read', '5 min read'],
            descriptions: [
                'Wake up your metabolism with this 2-minute morning ritual used by biohackers',
                'Why drinking coffee at this specific time maximizes energy without the jitters',
                'The 5 habits that add 10 years to your lifespan (backed by Harvard research)'
            ],
            cta: {
                headline: 'Ready to Transform Your Health?',
                description: 'Discover how morning rituals can optimize your metabolism',
                buttonText: 'Learn About Java Burn',
                link: 'https://d8f50l6f175q3o48cke47dwu2s.hop.clickbank.net?tid=zyntis_fb_main'
            }
        },
        'personal-growth': {
            titles: ['Abundance Mindset', 'Goal Setting', 'Morning Success'],
            times: ['3 min read', '4 min read', '5 min read'],
            descriptions: [
                'How wealthy people think differently about money (and how you can too)',
                'The science-backed method that makes you 42% more likely to achieve your goals',
                'What billionaires do in the first 60 minutes after waking up'
            ],
            cta: {
                headline: 'Ready to Unlock Your Potential?',
                description: 'Join thousands who\'ve transformed their mindset',
                buttonText: 'Learn About Wealth DNA',
                link: 'https://f14dfo0k43wockbujhj2itbyf3.hop.clickbank.net?tid=zyntis_fb_main'
            }
        }
    },

    // Update the page content
    updateContent(topic) {
        console.log('🔄 Updating to:', topic);
        const data = this.content[topic];
        if (!data) {
            console.error('❌ Topic not found:', topic);
            return;
        }
        
        // Update article titles
        const titles = document.querySelectorAll('.content-card h3');
        if (titles.length >= 3) {
            titles[0].textContent = data.titles[0];
            titles[1].textContent = data.titles[1];
            titles[2].textContent = data.titles[2];
            console.log('✅ Titles updated');
        } else {
            console.warn('❌ Titles not found - check selector: .content-card h3');
        }

        // Update article descriptions
        const descriptions = document.querySelectorAll('.content-card p');
        if (descriptions.length >= 3) {
            descriptions[0].textContent = data.descriptions[0];
            descriptions[1].textContent = data.descriptions[1];
            descriptions[2].textContent = data.descriptions[2];
            console.log('✅ Descriptions updated');
        } else {
            console.warn('❌ Descriptions not found - check selector: .content-card p');
        }

        // Update read times
        const times = document.querySelectorAll('.content-card .read-time, .content-card span:last-child');
        if (times.length >= 3) {
            times[0].textContent = data.times[0];
            times[1].textContent = data.times[1];
            times[2].textContent = data.times[2];
            console.log('✅ Read times updated');
        } else {
            // FALLBACK: Try to find any spans in the cards
            const allSpans = document.querySelectorAll('.content-card span');
            if (allSpans.length >= 3) {
                allSpans[0].textContent = data.times[0];
                allSpans[1].textContent = data.times[1];
                allSpans[2].textContent = data.times[2];
                console.log('✅ Read times updated via fallback');
            }
        }

        // Update CTA section
        const ctaHeadline = document.querySelector('#cta-section h2, .cta-content h2');
        if (ctaHeadline) {
            ctaHeadline.textContent = data.cta.headline;
            console.log('✅ CTA headline updated');
        }

        const ctaDesc = document.querySelector('#cta-section p, .cta-content p');
        if (ctaDesc) {
            ctaDesc.textContent = data.cta.description;
        }

        const ctaBtn = document.querySelector('#affiliate-link, .cta-button');
        if (ctaBtn) {
            ctaBtn.textContent = data.cta.buttonText;
            ctaBtn.href = data.cta.link;
            console.log('✅ CTA button updated');
        }

        // Update active button state
        this.setActiveButton(topic);
        
        // Track for Facebook Pixel if available
        if (typeof fbq === 'function') {
            fbq('track', 'ViewContent', {
                content_name: topic,
                content_category: 'wellness'
            });
        }
    },

    // Set active button
    setActiveButton(topic) {
        // Remove active class from all buttons
        document.querySelectorAll('#btn-stress, #btn-health, #btn-growth, .topic-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.style.borderBottom = 'none';
            btn.style.color = '#666';
        });
        
        // Add active class to the clicked button
        let activeBtn = null;
        if (topic === 'stress-management') {
            activeBtn = document.getElementById('btn-stress') || document.querySelector('[data-topic="stress-management"]');
        } else if (topic === 'health-optimization') {
            activeBtn = document.getElementById('btn-health') || document.querySelector('[data-topic="health-optimization"]');
        } else if (topic === 'personal-growth') {
            activeBtn = document.getElementById('btn-growth') || document.querySelector('[data-topic="personal-growth"]');
        }
        
        if (activeBtn) {
            activeBtn.classList.add('active');
            activeBtn.style.borderBottom = '2px solid #2e7d73';
            activeBtn.style.color = '#2e7d73';
            console.log('✅ Active button set for:', topic);
        }
    },

    // Initialize event listeners
    init() {
        console.log('🚀 WellnessRooted Loader Initialized - Version 3.3');
        
        // Get buttons by their IDs
        const btnStress = document.getElementById('btn-stress') || document.querySelector('[data-topic="stress-management"]');
        const btnHealth = document.getElementById('btn-health') || document.querySelector('[data-topic="health-optimization"]');
        const btnGrowth = document.getElementById('btn-growth') || document.querySelector('[data-topic="personal-growth"]');
        
        // Log if buttons are found
        console.log('Button Stress:', btnStress ? '✅ Found' : '❌ Not found');
        console.log('Button Health:', btnHealth ? '✅ Found' : '❌ Not found');
        console.log('Button Growth:', btnGrowth ? '✅ Found' : '❌ Not found');
        
        // Add click listeners to Stress button
        if (btnStress) {
            btnStress.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('👆 Stress Relief clicked');
                this.updateContent('stress-management');
                
                // Update URL without page reload
                const url = new URL(window.location);
                url.searchParams.set('topic', 'stress-management');
                window.history.pushState({}, '', url);
            });
        }
        
        // Add click listeners to Health button
        if (btnHealth) {
            btnHealth.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('👆 Health Tips clicked');
                this.updateContent('health-optimization');
                
                const url = new URL(window.location);
                url.searchParams.set('topic', 'health-optimization');
                window.history.pushState({}, '', url);
            });
        }
        
        // Add click listeners to Growth button
        if (btnGrowth) {
            btnGrowth.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('👆 Personal Growth clicked');
                this.updateContent('personal-growth');
                
                const url = new URL(window.location);
                url.searchParams.set('topic', 'personal-growth');
                window.history.pushState({}, '', url);
            });
        }
        
        // Check URL on load
        const urlParams = new URLSearchParams(window.location.search);
        const topic = urlParams.get('topic') || 'stress-management';
        console.log('📌 Initial topic from URL:', topic);
        
        // Set active button and load content
        setTimeout(() => {
            this.setActiveButton(topic);
            this.updateContent(topic);
        }, 100); // Small delay to ensure DOM is ready
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => WellnessRootedLoader.init());
} else {
    WellnessRootedLoader.init();
}

// Handle back/forward browser buttons
window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic') || 'stress-management';
    WellnessRootedLoader.updateContent(topic);
    WellnessRootedLoader.setActiveButton(topic);
});