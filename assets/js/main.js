function togglePhase(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.expand-icon');
    
    // Toggle active class
    header.classList.toggle('active');
    content.classList.toggle('active');
}

function toggleFileContent(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    // Toggle active class
    header.classList.toggle('active');
    content.classList.toggle('active');
}

async function copyFileContent(button) {
    const fileContent = button.parentElement;
    const codeElement = fileContent.querySelector('code');
    const feedback = fileContent.querySelector('.copy-feedback');
    
    if (!codeElement) return;
    
    const textToCopy = codeElement.textContent;
    
    try {
        // Modern clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(textToCopy);
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
        
        // Show success feedback
        button.textContent = 'Copied!';
        button.classList.add('copied');
        feedback.classList.add('show');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.textContent = 'Copy';
            button.classList.remove('copied');
            feedback.classList.remove('show');
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy text: ', err);
        button.textContent = 'Error';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    }
}

// Initialize with first phase open
document.addEventListener('DOMContentLoaded', function() {
    const firstPhase = document.querySelector('.phase-header');
    if (firstPhase) {
        togglePhase(firstPhase);
    }
});

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const nav = document.querySelector('.nav-container');
    nav.classList.toggle('mobile-open');
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add search functionality for commands and agents
function initializeSearch() {
    const searchInput = document.getElementById('search');
    if (!searchInput) return;
    
    const searchableItems = document.querySelectorAll('.file-item, .phase');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        searchableItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const shouldShow = text.includes(searchTerm) || searchTerm === '';
            
            item.style.display = shouldShow ? 'block' : 'none';
        });
    });
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSearch);