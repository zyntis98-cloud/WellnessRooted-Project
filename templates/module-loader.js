// WELLNESSROOTED - MODULE LOADER
// FIXED: Removed invalid :contains() selector
// FIXED: Using content-card span for read times
// Version: 3.9 - Complete blog post theming to match WellnessRooted brand

const WellnessRootedLoader = {
    // Content for each topic
    content: {
        'stress-management': {
            titles: ['Find Calm in 3 Minutes', 'Rewire Your Stress Response', 'The 60-Second Reset Button'],
            times: ['3 min read', '5 min read', '2 min read'],
            descriptions: [
                'Practical techniques that work anywhere, anytime—no meditation experience required.',
                'Simple daily practices that actually change how your brain handles stress.',
                'An ancient breathing method that works in the time it takes to wash your hands.'
            ],
            // WordPress article links
            links: [
                'https://zyntis.com/wellness/find-calm-in-3-minutes/',
                'https://zyntis.com/wellness/rewire-your-stress-response/',
                'https://zyntis.com/wellness/the-60-second-reset-button/'
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
                'Wake up your metabolism with this 2-minute morning ritual used by biohackers.',
                'Why drinking coffee at this specific time maximizes energy without the jitters.',
                'The 5 habits that add 10 years to your lifespan (backed by Harvard research).'
            ],
            // WordPress article links
            links: [
                'https://zyntis.com/wellness/morning-metabolism/',
                'https://zyntis.com/wellness/coffee-benefits/',
                'https://zyntis.com/wellness/healthy-routines/'
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
                'How wealthy people think differently about money (and how you can too).',
                'The science-backed method that makes you 42% more likely to achieve your goals.',
                'What billionaires do in the first 60 minutes after waking up.'
            ],
            // WordPress article links
            links: [
                'https://zyntis.com/wellness/abundance-mindset/',
                'https://zyntis.com/wellness/goal-setting/',
                'https://zyntis.com/wellness/morning-success/'
            ],
            cta: {
                headline: 'Ready to Unlock Your Potential?',
                description: 'Join thousands who\'ve transformed their mindset',
                buttonText: 'Learn About Wealth DNA',
                link: 'https://f14dfo0k43wockbujhj2itbyf3.hop.clickbank.net?tid=zyntis_fb_main'
            }
        },
        // Nutrition Fundamentals Topic with WordPress Links
        'nutrition-fundamentals': {
            titles: [
                'The 5-Minute Meal Prep Rule That Actually Works',
                'The 3 Food Combinations That Kill the Afternoon Slump',
                '3 Signs Your Gut is Trying to Tell You Something'
            ],
            times: ['2 min read', '4 min read', '3 min read'],
            descriptions: [
                'Stop prepping meals. Start prepping ingredients. This one rule saves time and sanity.',
                'Eat for energy, not just fullness. These combos keep your blood sugar steady all afternoon.',
                'Bloating, cravings, skin issues—your gut communicates. Here\'s what to listen for.'
            ],
            // WordPress article links
            links: [
                'https://zyntis.com/wellness/the-5-minute-meal-prep-rule-that-actually-works/',
                'https://zyntis.com/wellness/the-3-food-combinations-that-kill-the-afternoon-slump/',
                'https://zyntis.com/wellness/3-signs-your-gut-is-trying-to-tell-you-something/'
            ],
            cta: {
                headline: 'Ready to Transform Your Nutrition?',
                description: 'Simple, practical advice that fits your real life—no complicated diets required.',
                buttonText: 'Learn More About Nutrition',
                link: '#'  // Update this with your affiliate link when ready
            }
        }
    },

    // Make cards clickable with article links
    makeCardsClickable(links) {
        const cards = document.querySelectorAll('.content-card');
        if (cards.length >= 3 && links && links.length >= 3) {
            // First, remove any existing click listeners to prevent duplicates
            cards.forEach(card => {
                card.style.cursor = 'default';
                card.removeEventListener('click', this.cardClickHandler);
            });
            
            // Add new click listeners
            cards.forEach((card, index) => {
                // Store the link as a property on the card
                card.dataset.link = links[index];
                
                // Make entire card clickable
                card.style.cursor = 'pointer';
                card.addEventListener('click', this.cardClickHandler);
                
                // Add subtle hover effect
                card.addEventListener('mouseenter', this.cardMouseEnter);
                card.addEventListener('mouseleave', this.cardMouseLeave);
            });
            console.log('✅ Cards made clickable for', links.length, 'articles');
        }
    },

    // Card click handler
    cardClickHandler(e) {
        const link = e.currentTarget.dataset.link;
        if (link) {
            window.open(link, '_blank'); // Opens in new tab
        }
    },

    // Card mouse enter handler
    cardMouseEnter(e) {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.transition = 'transform 0.2s, box-shadow 0.2s';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
    },

    // Card mouse leave handler
    cardMouseLeave(e) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.03)';
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

        // Make cards clickable if links exist
        if (data.links && data.links.length >= 3) {
            this.makeCardsClickable(data.links);
        } else {
            // If no links, remove clickability
            const cards = document.querySelectorAll('.content-card');
            cards.forEach(card => {
                card.style.cursor = 'default';
                card.removeEventListener('click', this.cardClickHandler);
                card.removeEventListener('mouseenter', this.cardMouseEnter);
                card.removeEventListener('mouseleave', this.cardMouseLeave);
                // Reset styles
                card.style.transform = '';
                card.style.transition = '';
                card.style.boxShadow = '';
            });
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
        document.querySelectorAll('#btn-stress, #btn-health, #btn-growth, #btn-nutrition, .topic-btn').forEach(btn => {
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
        } else if (topic === 'nutrition-fundamentals') {
            activeBtn = document.getElementById('btn-nutrition') || document.querySelector('[data-topic="nutrition-fundamentals"]');
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
        console.log('🚀 WellnessRooted Loader Initialized - Version 3.9');
        
        // Get buttons by their IDs
        const btnStress = document.getElementById('btn-stress') || document.querySelector('[data-topic="stress-management"]');
        const btnHealth = document.getElementById('btn-health') || document.querySelector('[data-topic="health-optimization"]');
        const btnGrowth = document.getElementById('btn-growth') || document.querySelector('[data-topic="personal-growth"]');
        const btnNutrition = document.getElementById('btn-nutrition') || document.querySelector('[data-topic="nutrition-fundamentals"]');
        
        // Log if buttons are found
        console.log('Button Stress:', btnStress ? '✅ Found' : '❌ Not found');
        console.log('Button Health:', btnHealth ? '✅ Found' : '❌ Not found');
        console.log('Button Growth:', btnGrowth ? '✅ Found' : '❌ Not found');
        console.log('Button Nutrition:', btnNutrition ? '✅ Found' : '❌ Not found');
        
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
        
        // Add click listeners to Nutrition button
        if (btnNutrition) {
            btnNutrition.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('👆 Nutrition Fundamentals clicked');
                this.updateContent('nutrition-fundamentals');
                
                const url = new URL(window.location);
                url.searchParams.set('topic', 'nutrition-fundamentals');
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
    },

    // NEW: Complete blog post theming to match WellnessRooted brand
    themeBlogPost() {
        // Check if we're on a blog post
        const isBlogPost = window.location.pathname.includes('/wellness/') || 
                          document.querySelector('article.post, .post-content, .entry-content, .blog-post');
        
        if (isBlogPost) {
            console.log('🎨 Applying WellnessRooted theme to blog post');
            
            // Add WellnessRooted styles to the page
            this.addWellnessStyles();
            
            // Transform the header/navigation
            this.transformHeader();
            
            // Transform the main content area
            this.transformContent();
            
            // Transform the sidebar if it exists
            this.transformSidebar();
            
            // Replace the footer
            this.replaceFooter();
            
            // Add a "Back to Home" button
            this.addBackToHomeButton();
            
            // Add related articles section
            this.addRelatedArticles();
        }
    },

    // Add global WellnessRooted styles
    addWellnessStyles() {
        const styleId = 'wellness-rooted-blog-styles';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                /* WellnessRooted Blog Theme */
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                    color: #2d3748;
                    line-height: 1.6;
                    background-color: #ffffff;
                }
                
                /* Header styling */
                .wellness-header {
                    background: white;
                    border-bottom: 1px solid #e2e8f0;
                    padding: 1rem 0;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                }
                
                .wellness-header h1, .wellness-header .site-title {
                    color: #2e7d73 !important;
                    font-size: 1.8rem !important;
                    font-weight: 600 !important;
                }
                
                /* Content styling */
                .wellness-content {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 2rem 20px;
                }
                
                .wellness-content h1 {
                    color: #2d3748;
                    font-size: 2.5rem;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 1.5rem;
                }
                
                .wellness-content h2 {
                    color: #2d3748;
                    font-size: 1.8rem;
                    font-weight: 600;
                    margin: 2rem 0 1rem;
                }
                
                .wellness-content h3 {
                    color: #2d3748;
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin: 1.5rem 0 1rem;
                }
                
                .wellness-content p {
                    color: #4a5568;
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                }
                
                .wellness-content a {
                    color: #2e7d73;
                    text-decoration: none;
                    border-bottom: 1px solid transparent;
                    transition: border-color 0.2s;
                }
                
                .wellness-content a:hover {
                    border-bottom-color: #2e7d73;
                }
                
                /* Blog meta information */
                .wellness-meta {
                    color: #718096;
                    font-size: 0.95rem;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid #e2e8f0;
                }
                
                /* Featured image */
                .wellness-featured-image {
                    margin: 2rem 0;
                    border-radius: 8px;
                    overflow: hidden;
                }
                
                .wellness-featured-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                
                /* Back to home button */
                .wellness-back-home {
                    display: inline-block;
                    background: #2e7d73;
                    color: white !important;
                    padding: 0.75rem 1.5rem;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 500;
                    margin: 2rem 0;
                    transition: background-color 0.2s;
                    border: none !important;
                }
                
                .wellness-back-home:hover {
                    background: #1f5a52;
                    color: white !important;
                }
                
                /* Related articles section */
                .wellness-related {
                    background: #f8fafc;
                    padding: 3rem 0;
                    margin: 3rem 0 0;
                    border-top: 1px solid #e2e8f0;
                }
                
                .wellness-related h2 {
                    text-align: center;
                    color: #2d3748;
                    font-size: 2rem;
                    margin-bottom: 2rem;
                }
                
                .wellness-related-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                .wellness-related-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                
                .wellness-related-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                
                .wellness-related-card h3 {
                    color: #2d3748;
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }
                
                .wellness-related-card p {
                    color: #718096;
                    font-size: 0.95rem;
                    margin-bottom: 1rem;
                }
                
                .wellness-related-card .read-more {
                    color: #2e7d73;
                    font-weight: 500;
                    text-decoration: none;
                }
                
                /* Wellness footer */
                .wellness-footer {
                    background: #f8fafc;
                    border-top: 1px solid #e2e8f0;
                    padding: 3rem 0;
                }
                
                .wellness-footer a {
                    color: #2e7d73;
                    text-decoration: none;
                }
                
                .wellness-footer a:hover {
                    text-decoration: underline;
                }
            `;
            document.head.appendChild(style);
        }
    },

    // Transform the header/navigation
    transformHeader() {
        const header = document.querySelector('header, .site-header, [class*="header"]');
        if (header) {
            header.classList.add('wellness-header');
            
            // Replace logo/branding if it contains Zyntis
            const siteTitle = header.querySelector('.site-title, .logo, [class*="brand"]');
            if (siteTitle && siteTitle.textContent.includes('Zyntis')) {
                siteTitle.innerHTML = '<a href="/" style="color: #2e7d73; text-decoration: none;">WellnessRooted</a>';
            }
            
            // Transform navigation links
            const nav = header.querySelector('nav, [class*="nav"]');
            if (nav) {
                const links = nav.querySelectorAll('a');
                links.forEach(link => {
                    if (link.textContent.includes('Financial') || link.textContent.includes('HSA') || 
                        link.textContent.includes('Credit') || link.textContent.includes('Salary')) {
                        link.style.display = 'none';
                    }
                });
            }
        }
    },

    // Transform the main content area
    transformContent() {
        // Find the main content container
        const mainContent = document.querySelector('main, article, .content, .post, .entry-content');
        if (mainContent) {
            mainContent.classList.add('wellness-content');
            
            // Style the post title
            const title = mainContent.querySelector('h1, .entry-title, .post-title');
            if (title) {
                title.classList.add('wellness-post-title');
            }
            
            // Style the post meta
            const meta = mainContent.querySelector('.entry-meta, .post-meta, .byline, .posted-on');
            if (meta) {
                meta.classList.add('wellness-meta');
            }
            
            // Style the featured image
            const featuredImage = mainContent.querySelector('.wp-post-image, .post-thumbnail, img');
            if (featuredImage && featuredImage.closest('figure, div')) {
                featuredImage.closest('figure, div').classList.add('wellness-featured-image');
            }
            
            // Remove any Zyntis Financial related content
            const allElements = mainContent.querySelectorAll('*');
            allElements.forEach(el => {
                if (el.textContent && (
                    el.textContent.includes('Zyntis Financial') ||
                    el.textContent.includes('Salary Saving') ||
                    el.textContent.includes('HSA Optimization') ||
                    el.textContent.includes('Credit Building')
                )) {
                    el.style.display = 'none';
                }
            });
        }
    },

    // Transform the sidebar
    transformSidebar() {
        const sidebar = document.querySelector('aside, .sidebar, [class*="sidebar"]');
        if (sidebar) {
            // Remove financial-related widgets
            const widgets = sidebar.querySelectorAll('.widget, [class*="widget"]');
            widgets.forEach(widget => {
                if (widget.textContent.includes('Financial') || 
                    widget.textContent.includes('HSA') ||
                    widget.textContent.includes('Credit') ||
                    widget.textContent.includes('Salary')) {
                    widget.style.display = 'none';
                }
            });
            
            // Add a wellness-related widget
            const wellnessWidget = document.createElement('div');
            wellnessWidget.className = 'widget wellness-widget';
            wellnessWidget.innerHTML = `
                <h3 style="color: #2e7d73; margin-bottom: 1rem;">Popular Topics</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.5rem;"><a href="/?topic=stress-management" style="color: #2e7d73;">Stress Relief</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="/?topic=health-optimization" style="color: #2e7d73;">Health Tips</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="/?topic=personal-growth" style="color: #2e7d73;">Personal Growth</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="/?topic=nutrition-fundamentals" style="color: #2e7d73;">Nutrition</a></li>
                </ul>
            `;
            
            if (sidebar.firstChild) {
                sidebar.insertBefore(wellnessWidget, sidebar.firstChild);
            } else {
                sidebar.appendChild(wellnessWidget);
            }
        }
    },

    // Replace footer with WellnessRooted version
    replaceFooter() {
        const footers = document.querySelectorAll('footer');
        footers.forEach(footer => {
            const footerHtml = footer.innerHTML;
            
            if (footerHtml.includes('Zyntis Financial') || 
                footerHtml.includes('Salary Saving') ||
                footerHtml.includes('HSA Optimization') ||
                footerHtml.includes('Research Hubs')) {
                
                console.log('🔄 Replacing footer with WellnessRooted version');
                
                const wellnessFooter = document.createElement('footer');
                wellnessFooter.className = 'wellness-footer';
                wellnessFooter.innerHTML = `
                    <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
                        <div style="text-align: center; color: #4a5568;">
                            <div style="margin-bottom: 2rem;">
                                <h3 style="color: #2e7d73; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">WellnessRooted</h3>
                                <p style="color: #718096; max-width: 400px; margin: 0 auto;">Practical wellness for real life—simple, science-backed, sustainable.</p>
                            </div>
                            
                            <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
                                <a href="/" style="color: #2e7d73; text-decoration: none;">Home</a>
                                <a href="/?topic=stress-management" style="color: #2e7d73; text-decoration: none;">Stress Relief</a>
                                <a href="/?topic=health-optimization" style="color: #2e7d73; text-decoration: none;">Health Tips</a>
                                <a href="/?topic=personal-growth" style="color: #2e7d73; text-decoration: none;">Personal Growth</a>
                                <a href="/?topic=nutrition-fundamentals" style="color: #2e7d73; text-decoration: none;">Nutrition</a>
                            </div>
                            
                            <div style="display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 2rem; flex-wrap: wrap;">
                                <a href="/about" style="color: #718096; text-decoration: none;">About</a>
                                <a href="/contact" style="color: #718096; text-decoration: none;">Contact</a>
                                <a href="/privacy" style="color: #718096; text-decoration: none;">Privacy</a>
                                <a href="/terms" style="color: #718096; text-decoration: none;">Terms</a>
                            </div>
                            
                            <div style="border-top: 1px solid #e2e8f0; padding-top: 2rem;">
                                <p style="color: #a0aec0; font-size: 0.875rem;">© 2026 WellnessRooted. All rights reserved.</p>
                                <p style="color: #cbd5e0; font-size: 0.75rem; margin-top: 0.5rem;">WellnessRooted is a Zyntis company. Information provided for educational purposes only.</p>
                            </div>
                        </div>
                    </div>
                `;
                
                if (footer.parentNode) {
                    footer.parentNode.replaceChild(wellnessFooter, footer);
                }
            }
        });
    },

    // Add a "Back to Home" button
    addBackToHomeButton() {
        const mainContent = document.querySelector('main, article, .content, .post, .entry-content');
        if (mainContent && !document.querySelector('.wellness-back-home')) {
            const backButton = document.createElement('div');
            backButton.style.textAlign = 'center';
            backButton.innerHTML = '<a href="/" class="wellness-back-home">← Back to WellnessRooted Home</a>';
            
            // Insert after the content
            if (mainContent.nextSibling) {
                mainContent.parentNode.insertBefore(backButton, mainContent.nextSibling);
            } else {
                mainContent.parentNode.appendChild(backButton);
            }
        }
    },

    // Add related articles section
    addRelatedArticles() {
        if (!document.querySelector('.wellness-related')) {
            const relatedSection = document.createElement('div');
            relatedSection.className = 'wellness-related';
            relatedSection.innerHTML = `
                <h2>You Might Also Enjoy</h2>
                <div class="wellness-related-grid">
                    <div class="wellness-related-card">
                        <h3>Find Calm in 3 Minutes</h3>
                        <p>Practical techniques that work anywhere, anytime—no meditation experience required.</p>
                        <a href="/wellness/find-calm-in-3-minutes/" class="read-more">Read More →</a>
                    </div>
                    <div class="wellness-related-card">
                        <h3>Morning Metabolism</h3>
                        <p>Wake up your metabolism with this 2-minute morning ritual used by biohackers.</p>
                        <a href="/wellness/morning-metabolism/" class="read-more">Read More →</a>
                    </div>
                    <div class="wellness-related-card">
                        <h3>Abundance Mindset</h3>
                        <p>How wealthy people think differently about money (and how you can too).</p>
                        <a href="/wellness/abundance-mindset/" class="read-more">Read More →</a>
                    </div>
                </div>
            `;
            
            document.body.appendChild(relatedSection);
        }
    },

    // Remove any Zyntis Financial branding
    cleanupZyntisBranding() {
        const isBlogPost = window.location.pathname.includes('/wellness/');
        if (isBlogPost) {
            const allElements = document.querySelectorAll('*');
            allElements.forEach(el => {
                if (el.textContent && (
                    el.textContent.includes('Zyntis Financial') ||
                    el.textContent.includes('Salary Saving') ||
                    el.textContent.includes('HSA Optimization') ||
                    el.textContent.includes('Credit Building') ||
                    el.textContent.includes('Research Hubs')
                )) {
                    if (!el.closest('.wellness-footer') && !el.closest('.wellness-header')) {
                        el.style.display = 'none';
                    }
                }
            });
        }
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        WellnessRootedLoader.init();
        WellnessRootedLoader.themeBlogPost();
        WellnessRootedLoader.cleanupZyntisBranding();
    });
} else {
    WellnessRootedLoader.init();
    WellnessRootedLoader.themeBlogPost();
    WellnessRootedLoader.cleanupZyntisBranding();
}

// Handle back/forward browser buttons
window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic') || 'stress-management';
    WellnessRootedLoader.updateContent(topic);
    WellnessRootedLoader.setActiveButton(topic);
});

// Run theming on every page load
window.addEventListener('load', () => {
    WellnessRootedLoader.themeBlogPost();
    WellnessRootedLoader.cleanupZyntisBranding();
});

// Watch for dynamic content changes
if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
        WellnessRootedLoader.themeBlogPost();
        WellnessRootedLoader.cleanupZyntisBranding();
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
