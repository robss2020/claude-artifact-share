# Claude Artifact Share Configuration 🚀

This repository contains a JavaScript configuration file that enables a hard-coded Claude AI artifact (games, applications, and interactive content) to share its URLs from within Claude's iframe hosting environment. Other methods of hard-coding the URL did not work, which makes it difficult to add a share button.

## Purpose

When you create amazing interactive content with Claude AI, it's hosted in an iframe that (for security reasons) cannot directly access its parent URL. This repository provides a workaround by hosting a configuration file that your Claude artifacts can load via jsDelivr CDN, allowing them to:

- 📋 Copy their share URL to the clipboard
- 🔗 Display their shareable link
- 🎮 Enable easy sharing of games and applications created with Claude

etc.

## How It Works

1. The `artifact-share-config.js` file contains the artifact's hard-coded URL
2. Your Claude artifact loads this file via jsDelivr CDN
3. The artifact reads the URL and enables sharing functionality

## About Claude & Anthropic 💙

**Anthropic and Claude are absolutely awesome!** 🎉

As a happy Claude Max Plan subscriber, I'm continually impressed by:
- Claude's incredible ability to create complex, interactive applications
- The thoughtful design of the artifact system for sharing creations
- Claude's helpful, intelligent, and ethical approach to AI assistance
- Anthropic's commitment to AI safety and beneficial AI development

The Max Plan has been worth every penny, providing unlimited access to create amazing projects like this one. Thank you, Anthropic team, for building such an incredible AI assistant!

## Usage

### For Artifact Creators

1. Fork or copy this repository on Github
2. Update `artifact-share-config.js` with your artifact's URL
3. Your artifact can then load the config via:
   ```
   https://cdn.jsdelivr.net/gh/[your-username]/[repo-name]@main/artifact-share-config.js
   ```

### Configuration File

The configuration file sets a global variable `window.CLAUDE_ARTIFACT_CONFIG` containing:
- `url`: The shareable Claude artifact URL
- `title`: Your artifact's title
- `description`: Brief description
- `version`: Version number
- `timestamp`: Last updated date
- `creator`: Attribution

## Technical Details

- **CDN**: Uses jsDelivr for reliable, fast content delivery
- **Compatibility**: Works within Claude's artifact iframe environment
- **Security**: Read-only configuration, no sensitive data

## Using this script from the artifact

For example, you can instruct Claude to add this to the artifact:

I need to add a share button to this artifact that allows users to copy the artifact's URL to their clipboard. The artifact is hosted in an iframe and cannot directly access its parent URL, but I have a solution.

I've created a GitHub repository with a configuration file that can be loaded via jsDelivr CDN. Here's how to implement the sharing functionality:

Add this share functionality to the artifact:

### Add the HTML for the share button (style it to match your application):
```html
<button id="shareButton" style="
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    z-index: 9999;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
">
    📤 Share This Game
</button>

```

### 2. Add this JavaScript to load the configuration and enable sharing :

```javascript

// Share functionality
function initializeSharing() {
    const shareButton = document.getElementById('shareButton');
    
    // Load the configuration from GitHub via jsDelivr
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME@main/artifact-share-config.js';
    
    script.onload = function() {
        if (window.CLAUDE_ARTIFACT_CONFIG && window.CLAUDE_ARTIFACT_CONFIG.url) {
            const artifactUrl = window.CLAUDE_ARTIFACT_CONFIG.url;
            
            shareButton.onclick = async function() {
                try {
                    await navigator.clipboard.writeText(artifactUrl);
                    
                    // Visual feedback
                    const originalText = shareButton.innerHTML;
                    shareButton.innerHTML = '✅ Copied!';
                    shareButton.style.background = '#10b981';
                    
                    setTimeout(() => {
                        shareButton.innerHTML = originalText;
                        shareButton.style.background = '#3b82f6';
                    }, 2000);
                    
                } catch (err) {
                    // Fallback: show the URL in an alert if clipboard fails
                    alert('Copy this URL to share:\n' + artifactUrl);
                }
            };
            
            // Add hover effect
            shareButton.onmouseover = () => shareButton.style.background = '#2563eb';
            shareButton.onmouseout = () => shareButton.style.background = '#3b82f6';
            
        } else {
            console.error('Failed to load artifact configuration');
            shareButton.style.display = 'none';
        }
    };
    
    script.onerror = function() {
        console.error('Failed to load share configuration');
        shareButton.style.display = 'none';
    };
    
    document.head.appendChild(script);
}

// Initialize when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSharing);
} else {
    initializeSharing();
}
```

## IMPORTANT: Replace these placeholders in the code:

* YOUR_GITHUB_USERNAME - Your GitHub username
* YOUR_REPO_NAME - The name of your GitHub repository (e.g., "claude-artifact-share")

After you create this artifact, you'll need to:

* Get the artifact ID from the URL (it's the part after /artifacts/)
* Update the artifact-share-config.js file in your GitHub repo with this ID
* Push the update to GitHub

## License

This configuration is provided as-is for the Claude AI community. Feel free to use and modify for your own Claude artifacts!

## Created With

Made with ❤️ using Claude AI (Claude Sonnet 4.1) on the Max Plan

---

*Note: This is an independent project created by a Claude user and is not officially affiliated with Anthropic.*