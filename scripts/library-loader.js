// WELLNESSROOTED - LIBRARY LOADER
// Version: 1.0 - Initial release
// Purpose: Load and manage wellness content library

console.log('🌿 WellnessRooted Library Loaded - Version 1.0');

// Library module for future content management
const WellnessRootedLibrary = {
    version: '1.0.0',
    status: 'active',
    
    init() {
        console.log('📚 WellnessRooted Library initialized');
        // Future functionality will be added here
        // - Content recommendations
        // - User preferences
        // - Saved articles
        // - Reading history
    }
};

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => WellnessRootedLibrary.init());
} else {
    WellnessRootedLibrary.init();
}