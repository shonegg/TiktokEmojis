// Complete TikTok emoji data with meanings and real images
const emojiData = [
    { code: 'smile', category: 'happy', meaning: 'A small, round, pink smiling face used to show happiness or appreciation.', image: 'https://em-content.zobj.net/content/2020/07/27/smile.png' },
    { code: 'happy', category: 'happy', meaning: 'A peach-colored face with squinty eyes and a big open mouth, expressing extreme excitement.', image: 'https://em-content.zobj.net/content/2020/07/27/happy.png' },
    { code: 'angry', category: 'angry', meaning: 'A red face with furrowed brows, used to convey anger or displeasure.', image: 'https://em-content.zobj.net/content/2020/07/27/angry.png' },
    { code: 'cry', category: 'sad', meaning: 'A blue face with tears streaming down, representing sadness or emotional overwhelm.', image: 'https://em-content.zobj.net/content/2020/07/27/cry.png' },
    { code: 'embarrassed', category: 'other', meaning: 'A face with rosy cheeks and a shy smile, indicating embarrassment or shyness.', image: 'https://em-content.zobj.net/content/2020/07/27/embarrassed.png' },
    { code: 'surprised', category: 'surprised', meaning: 'A face with wide eyes and an open mouth, expressing shock or surprise.', image: 'https://em-content.zobj.net/content/2020/07/27/surprised.png' },
    { code: 'wronged', category: 'sad', meaning: 'A yellow face with sad eyes and two fingers pointing at each other, indicating shyness or embarrassment.', image: 'https://em-content.zobj.net/content/2020/07/27/wronged.png' },
    { code: 'shout', category: 'other', meaning: 'A face with an open mouth, often used to express excitement or yelling.', image: 'https://em-content.zobj.net/content/2020/07/27/shout.png' },
    { code: 'flushed', category: 'other', meaning: 'A face with red cheeks, indicating embarrassment or shyness.', image: 'https://em-content.zobj.net/content/2020/07/27/flushed.png' },
    { code: 'yummy', category: 'happy', meaning: 'A face licking its lips, expressing deliciousness or craving for food.', image: 'https://em-content.zobj.net/content/2020/07/27/yummy.png' },
    { code: 'complacent', category: 'other', meaning: 'A smug face with a self-satisfied smile, indicating complacency.', image: 'https://em-content.zobj.net/content/2020/07/27/complacent.png' },
    { code: 'drool', category: 'other', meaning: 'A face with drool coming out of its mouth, indicating hunger or desire.', image: 'https://em-content.zobj.net/content/2020/07/27/drool.png' },
    { code: 'scream', category: 'surprised', meaning: 'A face with wide eyes and an open mouth, expressing fear or shock.', image: 'https://em-content.zobj.net/content/2020/07/27/scream.png' },
    { code: 'weep', category: 'sad', meaning: 'A face with tears, indicating deep sadness or sorrow.', image: 'https://em-content.zobj.net/content/2020/07/27/weep.png' },
    { code: 'speechless', category: 'surprised', meaning: 'A face with a hand over its mouth, indicating shock or being speechless.', image: 'https://em-content.zobj.net/content/2020/07/27/speechless.png' },
    { code: 'funnyface', category: 'happy', meaning: 'A silly face with exaggerated features, used to indicate humor.', image: 'https://em-content.zobj.net/content/2020/07/27/funnyface.png' },
    { code: 'laughwithtears', category: 'happy', meaning: 'A face laughing with tears streaming down, indicating extreme laughter.', image: 'https://em-content.zobj.net/content/2020/07/27/laughwithtears.png' },
    { code: 'wicked', category: 'mischief', meaning: 'A mischievous face with a sly smile, indicating wickedness or playfulness.', image: 'https://em-content.zobj.net/content/2020/07/27/wicked.png' },
    { code: 'facewithrollingeyes', category: 'other', meaning: 'A face rolling its eyes, indicating annoyance or disbelief.', image: 'https://em-content.zobj.net/content/2020/07/27/facewithrollingeyes.png' },
    { code: 'sulk', category: 'sad', meaning: 'A face with a frown, indicating sulking or disappointment.', image: 'https://em-content.zobj.net/content/2020/07/27/sulk.png' },
    { code: 'thinking', category: 'other', meaning: 'A face with a hand on its chin, indicating deep thought or contemplation.', image: 'https://em-content.zobj.net/content/2020/07/27/thinking.png' },
    { code: 'lovely', category: 'cute', meaning: 'A face with hearts in its eyes, indicating love or admiration.', image: 'https://em-content.zobj.net/content/2020/07/27/lovely.png' },
    { code: 'greedy', category: 'other', meaning: 'A face with a greedy smile, indicating greed or desire for more.', image: 'https://em-content.zobj.net/content/2020/07/27/greedy.png' },
    { code: 'wow', category: 'surprised', meaning: 'A face with wide eyes and an open mouth, expressing amazement or wonder.', image: 'https://em-content.zobj.net/content/2020/07/27/wow.png' },
    { code: 'joyful', category: 'happy', meaning: 'A face with a big smile and sparkling eyes, indicating joy or happiness.', image: 'https://em-content.zobj.net/content/2020/07/27/joyful.png' },
    { code: 'hehe', category: 'mischief', meaning: 'A face with a mischievous grin, indicating a light-hearted or playful mood.', image: 'https://em-content.zobj.net/content/2020/07/27/hehe.png' },
    { code: 'slap', category: 'angry', meaning: 'A face with a hand raised, indicating a slap or playful hit.', image: 'https://em-content.zobj.net/content/2020/07/27/slap.png' },
    { code: 'tears', category: 'sad', meaning: 'A face with tears, indicating sadness or emotional release.', image: 'https://em-content.zobj.net/content/2020/07/27/tears.png' },
    { code: 'stun', category: 'surprised', meaning: 'A face with a shocked expression, indicating surprise or disbelief.', image: 'https://em-content.zobj.net/content/2020/07/27/stun.png' },
    { code: 'cute', category: 'cute', meaning: 'A face with a sweet smile, indicating cuteness or affection.', image: 'https://em-content.zobj.net/content/2020/07/27/cute.png' },
    { code: 'blink', category: 'mischief', meaning: 'A face with one eye closed, indicating a wink or playful gesture.', image: 'https://em-content.zobj.net/content/2020/07/27/blink.png' },
    { code: 'disdain', category: 'other', meaning: 'A face with a raised eyebrow, indicating disdain or disapproval.', image: 'https://em-content.zobj.net/content/2020/07/27/disdain.png' },
    { code: 'astonish', category: 'surprised', meaning: 'A face with wide eyes and raised eyebrows, indicating astonishment.', image: 'https://em-content.zobj.net/content/2020/07/27/astonish.png' },
    { code: 'rage', category: 'angry', meaning: 'A face with a furious expression, indicating intense anger.', image: 'https://em-content.zobj.net/content/2020/07/27/rage.png' },
    { code: 'cool', category: 'other', meaning: 'A face with sunglasses, indicating coolness or confidence.', image: 'https://em-content.zobj.net/content/2020/07/27/cool.png' },
    { code: 'excited', category: 'happy', meaning: 'A face with sparkling eyes and a big smile, indicating excitement.', image: 'https://em-content.zobj.net/content/2020/07/27/excited.png' },
    { code: 'proud', category: 'other', meaning: 'A face with a smug smile, indicating pride or satisfaction.', image: 'https://em-content.zobj.net/content/2020/07/27/proud.png' },
    { code: 'smileface', category: 'happy', meaning: 'A face with a big smile, indicating happiness or friendliness.', image: 'https://em-content.zobj.net/content/2020/07/27/smileface.png' },
    { code: 'evil', category: 'mischief', meaning: 'A face with a devilish grin, indicating mischief or evil intent.', image: 'https://em-content.zobj.net/content/2020/07/27/evil.png' },
    { code: 'angel', category: 'cute', meaning: 'A face with a halo, indicating innocence or goodness.', image: 'https://em-content.zobj.net/content/2020/07/27/angel.png' },
    { code: 'laugh', category: 'happy', meaning: 'A face laughing, indicating joy or amusement.', image: 'https://em-content.zobj.net/content/2020/07/27/laugh.png' },
    { code: 'pride', category: 'other', meaning: 'A face with a proud expression, indicating self-satisfaction.', image: 'https://em-content.zobj.net/content/2020/07/27/pride.png' },
    { code: 'nap', category: 'other', meaning: 'A face with closed eyes, indicating sleepiness or a desire to nap.', image: 'https://em-content.zobj.net/content/2020/07/27/nap.png' },
    { code: 'loveface', category: 'cute', meaning: 'A face with heart-shaped eyes, indicating love or infatuation.', image: 'https://em-content.zobj.net/content/2020/07/27/loveface.png' },
    { code: 'awkward', category: 'other', meaning: 'A face with a nervous smile, indicating awkwardness or discomfort.', image: 'https://em-content.zobj.net/content/2020/07/27/awkward.png' },
    { code: 'shock', category: 'surprised', meaning: 'A face with a shocked expression, indicating surprise or disbelief.', image: 'https://em-content.zobj.net/content/2020/07/27/shock.png' }
];

// Copy emoji code to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`✅ Copied!`);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification(`✅ Copied!`);
    });
}

// Download emoji as PNG
async function downloadEmoji(code) {
    const emoji = emojiData.find(e => e.code === code);
    if (!emoji) {
        showNotification(`❌ Emoji not found`);
        return;
    }
    
    showNotification(`📥 Downloading...`);
    
    // Check if browser supports canvas downloads
    const supportsCanvas = typeof HTMLCanvasElement !== 'undefined' && 
                          typeof HTMLCanvasElement.prototype.toBlob === 'function';
    
    if (!supportsCanvas) {
        showUserInstructions();
        return;
    }
    
    // Method 1: Try canvas-based download (best for CORS issues)
    try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = function() {
            try {
                // Create canvas and draw image
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                
                // Convert to blob and download
                canvas.toBlob(function(blob) {
                    if (!blob) {
                        showUserInstructions();
                        return;
                    }
                    
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `tiktok-${code}-emoji.png`;
                    link.style.display = 'none';
                    
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    URL.revokeObjectURL(url);
                    showNotification(`✅ Downloaded!`);
                }, 'image/png');
                
            } catch (canvasError) {
                console.log('Canvas method failed:', canvasError);
                showUserInstructions();
            }
        };
        
        img.onerror = function() {
            console.log('Image loading failed, showing user instructions');
            showUserInstructions();
        };
        
        img.src = emoji.image;
        
    } catch (error) {
        console.log('Canvas download failed:', error);
        showUserInstructions();
    }
    
    // User instruction method (no automatic download attempts)
    function showUserInstructions() {
        showNotification(`💡 Right-click the image above and select "Save image as..."`);
    }
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('copyNotification');
    if (notification) {
        // Clear any existing timeout
        if (notification.timeoutId) {
            clearTimeout(notification.timeoutId);
        }
        
        // Force hide first (ensure clean state)
        notification.classList.remove('show');
        
        // Small delay before showing to ensure CSS transition works
        setTimeout(() => {
            notification.textContent = message;
            notification.classList.add('show');
            
            // Calculate timeout based on message length (minimum 4s, max 7s)
            const baseTime = 4000; // Changed from 3000 to 4000 (4 seconds)
            const extraTime = Math.min(message.length * 40, 3000); // Increased back to 40ms per character
            const totalTime = baseTime + extraTime;
            
            notification.timeoutId = setTimeout(() => {
                notification.classList.remove('show');
                notification.timeoutId = null;
                
                // Ensure element is completely hidden after transition
                setTimeout(() => {
                    if (!notification.classList.contains('show')) {
                        notification.style.display = 'none';
                        setTimeout(() => {
                            notification.style.display = '';
                        }, 50);
                    }
                }, 300);
            }, totalTime);
        }, 50);
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    const emojiList = document.querySelector('.emoji-list');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Setup navigation toggle for mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Render emoji list on main page
    if (emojiList) {
        renderEmojiList();
    }
    
    // Render emoji meanings
    renderEmojiMeanings();
    
    // Initialize detail page if needed
    const urlParams = new URLSearchParams(window.location.search);
    const emojiCode = urlParams.get('emoji');
    if (emojiCode) {
        loadEmojiDetail(emojiCode);
        loadRelatedEmojis(emojiCode);
    }
});

// Render emoji list
function renderEmojiList() {
    const emojiList = document.querySelector('.emoji-list');
    if (!emojiList) return;

    emojiList.innerHTML = emojiData.map(emoji => `
        <div class="emoji-list-item" onclick="navigateToEmoji('${emoji.code}')" style="cursor: pointer;">
            <span class="emoji-code-clickable" onclick="event.stopPropagation(); copyToClipboard('[${emoji.code}]')" title="Click to copy [${emoji.code}]">
                [${emoji.code}]
            </span>
            <div class="emoji-icon-simple" title="Click to view details: ${emoji.meaning}">
                <img src="${emoji.image}" alt="TikTok ${emoji.code} emoji" loading="lazy">
            </div>
        </div>
    `).join('');
}

// Navigate to emoji detail page
function navigateToEmoji(emojiCode) {
    window.location.href = `emoji-detail.html?emoji=${emojiCode}`;
}

// Functions for detail page
function loadEmojiDetail(emojiCode) {
    const emoji = emojiData.find(e => e.code === emojiCode);
    if (!emoji) return;
    
    const capitalizedName = capitalizeFirst(emoji.code);
    
    // Update page content
    document.getElementById('pageTitle').textContent = `TikTok ${capitalizedName} Emoji - [${emoji.code}] Code & PNG Download | tiktokemojis.wiki`;
    document.getElementById('emojiTitle').textContent = `TikTok ${capitalizedName} Emoji`;
    
    // Update subtitle if exists
    const subtitle = document.getElementById('emojiSubtitle');
    if (subtitle) {
        const subtitleTexts = {
            'happy': 'Spread joy and positive vibes with this cheerful emoji',
            'sad': 'Express your emotions with this touching emoji',
            'angry': 'Show your strong feelings with this powerful emoji',
            'surprised': 'Perfect for moments of shock and amazement',
            'cute': 'Add sweetness and charm to your messages',
            'mischief': 'Bring playful energy to your conversations',
            'other': 'A versatile emoji for various expressions'
        };
        subtitle.textContent = subtitleTexts[emoji.category] || `Express yourself with this unique TikTok emoji`;
    }
    
    // Update emoji image
    document.getElementById('emojiImage').src = emoji.image;
    document.getElementById('emojiImage').alt = `TikTok ${capitalizedName} Emoji`;
    
    // Update emoji code displays
    document.getElementById('emojiCode').textContent = `[${emoji.code}]`;
    const inlineCode = document.getElementById('emojiCodeInline');
    if (inlineCode) {
        inlineCode.textContent = `[${emoji.code}]`;
    }
    
    // Update emoji meaning
    document.getElementById('emojiMeaning').textContent = emoji.meaning;
    
    // Update emoji name references
    document.getElementById('emojiName').textContent = emoji.code;
    
    // Setup buttons
    setupDetailPageButtons(emoji);
}

function setupDetailPageButtons(emoji) {
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    
    if (copyBtn) {
        copyBtn.addEventListener('click', () => copyToClipboard(`[${emoji.code}]`));
    }
    
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => copyToClipboard(`[${emoji.code}]`));
    }
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => downloadEmoji(emoji.code));
    }
}

function loadRelatedEmojis(currentEmojiCode) {
    const relatedGrid = document.getElementById('relatedGrid');
    if (!relatedGrid) return;
    
    const currentEmoji = emojiData.find(e => e.code === currentEmojiCode);
    if (!currentEmoji) return;
    
    // Get emojis from the same category first, then fill with random ones
    const sameCategory = emojiData.filter(e => 
        e.code !== currentEmojiCode && e.category === currentEmoji.category
    );
    const otherEmojis = emojiData.filter(e => 
        e.code !== currentEmojiCode && e.category !== currentEmoji.category
    );
    
    // Shuffle both arrays
    const shuffledSameCategory = shuffleArray(sameCategory);
    const shuffledOthers = shuffleArray(otherEmojis);
    
    // Take up to 4 from same category, then fill up to 8 total with others
    const relatedEmojis = [
        ...shuffledSameCategory.slice(0, 4),
        ...shuffledOthers.slice(0, 4)
    ].slice(0, 8);
    
    relatedGrid.innerHTML = relatedEmojis.map(emoji => `
        <a href="emoji-detail.html?emoji=${emoji.code}" class="related-item" title="${emoji.meaning}">
            <img src="${emoji.image}" alt="${emoji.code}" loading="lazy">
            <span>${capitalizeFirst(emoji.code)}</span>
        </a>
    `).join('');
}

// Utility functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showSuccessState(button, text) {
    const originalText = button.textContent;
    button.textContent = text;
    button.style.background = '#28a745';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);
}

// Render emoji meanings
function renderEmojiMeanings() {
    const meaningsList = document.querySelector('.meanings-list');
    if (!meaningsList) return;

    meaningsList.innerHTML = emojiData.map(emoji => `
        <div class="meaning-item">
            <span class="meaning-code">[${emoji.code}]</span>: 
            <span class="meaning-description">${emoji.meaning}</span>
        </div>
    `).join('');
}

// ... existing code ...

// ... existing code ... 