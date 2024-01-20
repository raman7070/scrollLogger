let lastScrollY = window.scrollY;

const getUsername = () => {
    const firstTweet = document.querySelector('[data-testid="tweet"]');
    if (firstTweet) {
        const usernameElement = firstTweet.querySelector('[data-testid="User-Name"]');
        if (usernameElement) {
            const username = usernameElement.textContent.trim();
            console.log(`Usernames: ${username}`);
        }
    }
};

const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';

    if (scrollDirection === 'up' && lastScrollY !== 0) {
        console.log('User has scrolled up');
    } else if (scrollDirection === 'down') {
        console.log('User has scrolled down');
    }
    getUsername();

    lastScrollY = currentScrollY;
};

window.addEventListener('scroll', handleScroll);


handleScroll();
