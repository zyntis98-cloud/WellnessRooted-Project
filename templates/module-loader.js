// templates/module-loader.js
// WELLNESSROOTED - FIXED FOR YOUR HTML IDs
// This version works with id="btn-stress", id="btn-health", id="btn-growth"

const WellnessRootedLoader = {
    // Content for each topic
    content: {
        'stress-management': {
            titles: ['Mindfulness Basics', 'Stress Science', 'Breathing Techniques'],
            times: ['3 min read', '4 min read', '5 min read'],
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
        
        // Update article titles - using the correct selectors
        const titles = document.querySelectorAll('.content-card h3');
        if (titles.length >= 3) {
            titles[0].textContent = data.titles[0];
            titles[1].textContent = data.titles[1];
            titles[2].textContent = data.titles[2];
            console.log('✅ Titles updated');
        } else {
            console.log('❌ Titles not found');
        }

        // Update read times
        const times = document.querySelectorAll('.content-card span');
        if (times.length >= 3) {
            times[0].innerHTML = data.times[0];
            times[1].innerHTML = data.times[1];
            times[2].innerHTML = data.times[2];
            console.log('✅ Read times updated');
        }

        // Update CTA section
        const ctaHeadline = document.querySelector('#cta-section h2');
        if (ctaHeadline) {
            ctaHeadline.textContent = data.cta.headline;
            console.log('✅ CTA headline updated');
        }

        const ctaDesc = document.querySelector('#cta-section p');
        if (ctaDesc) {
            ctaDesc.textContent = data.cta.description;
        }

        const ctaBtn = document.querySelector('#affiliate-link');
        if (ctaBtn) {
            ctaBtn.textContent = data.cta.buttonText;
            ctaBtn.href = data.cta.link;
            console.log('✅ CTA button updated');
        }

        // Update active button state
        this.setActiveButton(topic);
    },

    // Set active button
    setActiveButton(topic) {
        // Remove active class from all buttons
        document.querySelectorAll('#btn-stress, #btn-health, #btn-growth').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to the clicked button
        if (topic === 'stress-management') {
            const btn = document.getElementById('btn-stress');
            if (btn) btn.classList.add('active');
        } else if (topic === 'health-optimization') {
            const btn = document.getElementById('btn-health');
            if (btn) btn.classList.add('active');
        } else if (topic === 'personal-growth') {
            const btn = document.getElementById('btn-growth');
            if (btn) btn.classList.add('active');
        }
        console.log('✅ Active button set for:', topic);
    },

    // Initialize event listeners
    init() {
        console.log('🚀 WellnessRooted Loader Initialized');
        
        // Get buttons by their IDs
        const btnStress = document.getElementById('btn-stress');
        const btnHealth = document.getElementById('btn-health');
        const btnGrowth = document.getElementById('btn-growth');
        
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
                
                // Update URL
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
        console.log('📌 Initial topic:', topic);
        
        // Set active button and load content
        this.setActiveButton(topic);
        this.updateContent(topic);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => WellnessRootedLoader.init());
} else {
    WellnessRootedLoader.init();
}