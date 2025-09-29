/**
 * Claude Artifact Share Configuration
 * This file enables a single hard-coded Claude artifact to learn its own URLs from within the iframe environment,
 * by loading this script.
 * 
 * ARTIFACT_URL will be updated with the specific artifact's URL when deploying
 */

(function() {
    // Configuration object with artifact details
    const artifactConfig = {
        url: "https://claude.ai/public/artifacts/54c8f88e-d9b6-402c-8530-845511766974",  // UPDATE THIS!
        title: "My Awesome Claude Creation",
        description: "Created with Claude AI",
        version: "1.5",
        timestamp: "2025-01-01",  // UPDATE THIS!
        creator: "Claude.ai Max Plan Subscriber"
    };

    // Set global variable for artifact to access
    window.CLAUDE_ARTIFACT_CONFIG = artifactConfig;

    // Also support callback pattern if artifact defines one
    if (typeof window.onArtifactConfigLoaded === 'function') {
        window.onArtifactConfigLoaded(artifactConfig);
    }

})();