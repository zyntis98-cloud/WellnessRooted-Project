// WELLNESSROOTED - LIBRARY LOADER
// Version: 1.2 - Updated ALL sections with engaging descriptions
// Console shows "WellnessRooted Library Loaded" on initialization

const WellnessRootedLibrary = {
    // Complete content library with all articles
    articles: {
        // Stress Relief Section
        'stress-management': {
            sectionTitle: 'Stress Relief',
            articles: [
                {
                    title: 'Find Calm in 3 Minutes',
                    description: 'Learn practical techniques for your wellness journey...',
                    readTime: '3 min read',
                    link: '#'
                },
                {
                    title: 'Rewire Your Stress Response',
                    description: 'Simple daily practices that actually change how your brain handles stress',
                    readTime: '5 min read',
                    link: '#'
                },
                {
                    title: 'The 60-Second Reset Button',
                    description: 'An ancient breathing method that works in the time it takes to wash your hands',
                    readTime: '2 min read',
                    link: '#'
                }
            ]
        },
        
        // Health Tips Section
        'health-optimization': {
            sectionTitle: 'Health Tips',
            articles: [
                {
                    title: 'Morning Metabolism',
                    description: 'Wake up your metabolism with this 2-minute morning ritual used by biohackers',
                    readTime: '3 min read',
                    link: '#'
                },
                {
                    title: 'Coffee Benefits',
                    description: 'Why drinking coffee at this specific time maximizes energy without the jitters',
                    readTime: '4 min read',
                    link: '#'
                },
                {
                    title: 'Healthy Routines',
                    description: 'The 5 habits that add 10 years to your lifespan (backed by Harvard research)',
                    readTime: '5 min read',
                    link: '#'
                }
            ]
        },
        
        // Personal Growth Section
        'personal-growth': {
            sectionTitle: 'Personal Growth',
            articles: [
                {
                    title: 'Abundance Mindset',
                    description: 'How wealthy people think differently about money (and how you can too)',
                    readTime: '3 min read',
                    link: '#'
                },
                {
                    title: 'Goal Setting',
                    description: 'The science-backed method that makes you 42% more likely to achieve your goals',
                    readTime: '4 min read',
                    link: '#'
                },
                {
                    title: 'Morning Success',
                    description: 'What billionaires do in the first 60 minutes after waking up',
                    readTime: '5 min read',
                    link: '#'
                }
            ]
        }
    },

    // Initialize the library page
    init() {
        console.log('📚 WellnessRooted Library Loaded - Version 1.2');
        
        // Check if we're on the library page
        if (window.location.pathname.includes('library') || 
            document.querySelector('.library-container')) {
            this.renderLibrary();
        }
    },

    // Render the complete library
    renderLibrary() {
        const container = document.querySelector('.library-container');
        if (!container) {
            console.log('ℹ️ Not on library page - skipping render');
            return;
        }

        console.log('🔄 Rendering library content');
        
        // Clear container
        container.innerHTML = '';
        
        // Add back button
        const backButton = document.createElement('a');
        backButton.href = '/';
        backButton.className = 'back-button';
        backButton.innerHTML = '← Back to Home';
        container.appendChild(backButton);
        
        // Render each section
        for (const [key, section] of Object.entries(this.articles)) {
            this.renderSection(container, section);
        }
        
        // Add footer
        this.renderFooter(container);
        
        console.log('✅ Library rendered successfully');
    },

    // Render a single section
    renderSection(container, section) {
        // Section title
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.sectionTitle;
        container.appendChild(sectionTitle);
        
        // Articles grid
        const grid = document.createElement('div');
        grid.className = 'library-grid';
        
        section.articles.forEach(article => {
            const card = this.createArticleCard(article);
            grid.appendChild(card);
        });
        
        container.appendChild(grid);
    },

    // Create an article card
    createArticleCard(article) {
        const card = document.createElement('div');
        card.className = 'library-card';
        
        card.innerHTML = `
            <h3>${article.title}</h3>
            <div class="read-time">${article.readTime}</div>
            <p>${article.description}</p>
            <a href="${article.link}" class="read-more">Read Article →</a>
        `;
        
        return card;
    },

    // Render footer
    renderFooter(container) {
        const footer = document.createElement('footer');
        footer.className = 'library-footer';
        footer.innerHTML = '© 2026 WellnessRooted. All content for educational purposes.';
        container.appendChild(footer);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => WellnessRootedLibrary.init());
} else {
    WellnessRootedLibrary.init();
}

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WellnessRootedLibrary;
}