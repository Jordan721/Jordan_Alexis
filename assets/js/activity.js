// GitHub Activity Feed
async function fetchGitHubActivity() {
    const username = 'Jordan721';

    try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
        const reposData = await reposResponse.json();

        // Display GitHub stats
        displayGitHubStats(userData);

        // Display recent repositories
        displayRecentRepos(reposData);

        // Fetch and display recent commits from the user's repositories
        await fetchRecentCommits(username, reposData);

    } catch (error) {
        console.error('Error fetching GitHub activity:', error);
        showError();
    }
}

function displayGitHubStats(userData) {
    const statsContainer = document.getElementById('githubStats');

    statsContainer.innerHTML = `
        <div class="stat-item">
            <span class="stat-item-number">${userData.public_repos || 0}</span>
            <span class="stat-item-label">Repositories</span>
        </div>
        <div class="stat-item">
            <span class="stat-item-number">${userData.followers || 0}</span>
            <span class="stat-item-label">Followers</span>
        </div>
        <div class="stat-item">
            <span class="stat-item-number">${userData.following || 0}</span>
            <span class="stat-item-label">Following</span>
        </div>
        <div class="stat-item">
            <span class="stat-item-number">${userData.public_gists || 0}</span>
            <span class="stat-item-label">Gists</span>
        </div>
    `;
}

function displayRecentRepos(repos) {
    const reposContainer = document.getElementById('recentRepos');

    if (!repos || repos.length === 0) {
        reposContainer.innerHTML = '<p style="text-align: center; color: var(--color-gray-light);">No repositories found</p>';
        return;
    }

    reposContainer.innerHTML = repos.slice(0, 5).map(repo => `
        <div class="activity-item">
            <div class="activity-item-title">
                <a href="${repo.html_url}" target="_blank" class="repo-link">${repo.name}</a>
            </div>
            <div class="activity-item-desc">${repo.description || 'No description'}</div>
            <div class="activity-item-time">
                ${repo.language ? `<i class="fas fa-circle" style="color: ${getLanguageColor(repo.language)}; font-size: 0.5rem;"></i> ${repo.language} • ` : ''}
                ⭐ ${repo.stargazers_count} • Updated ${getTimeAgo(repo.updated_at)}
            </div>
        </div>
    `).join('');
}

async function fetchRecentCommits(username, repos) {
    const commitsContainer = document.getElementById('recentCommits');

    try {
        const allCommits = [];

        // Fetch commits from the most recently updated repositories
        for (const repo of repos.slice(0, 3)) {
            try {
                const commitsResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=5`);
                const commitsData = await commitsResponse.json();

                if (Array.isArray(commitsData)) {
                    commitsData.forEach(commitData => {
                        allCommits.push({
                            message: commitData.commit.message,
                            repo: repo.name,
                            time: commitData.commit.author.date,
                            url: commitData.html_url,
                            sha: commitData.sha.substring(0, 7)
                        });
                    });
                }
            } catch (error) {
                console.error(`Error fetching commits for ${repo.name}:`, error);
            }
        }

        // Sort commits by date (most recent first)
        allCommits.sort((a, b) => new Date(b.time) - new Date(a.time));

        if (allCommits.length === 0) {
            commitsContainer.innerHTML = '<p style="text-align: center; color: var(--color-gray-light);">No recent commits found</p>';
            return;
        }

        // Display the 5 most recent commits
        commitsContainer.innerHTML = allCommits.slice(0, 5).map(commit => `
            <div class="activity-item">
                <div class="activity-item-title">${truncateText(commit.message.split('\n')[0], 50)}</div>
                <div class="activity-item-desc">
                    <a href="${commit.url}" target="_blank" class="repo-link">${commit.repo}</a>
                    <span style="color: var(--color-gray-light); margin-left: 8px;">@${commit.sha}</span>
                </div>
                <div class="activity-item-time">${getTimeAgo(commit.time)}</div>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error displaying commits:', error);
        commitsContainer.innerHTML = '<p style="text-align: center; color: var(--color-gray-light);">Failed to load commits</p>';
    }
}

function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function getLanguageColor(language) {
    const colors = {
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        Java: '#b07219',
        HTML: '#e34c26',
        CSS: '#563d7c',
        TypeScript: '#2b7489',
        PHP: '#4F5D95',
        Ruby: '#701516',
        Go: '#00ADD8',
        Rust: '#dea584',
        C: '#555555',
        'C++': '#f34b7d',
        'C#': '#178600',
        Shell: '#89e051'
    };
    return colors[language] || '#8b8b8b';
}

function showError() {
    const containers = ['recentCommits', 'recentRepos', 'githubStats'];
    containers.forEach(id => {
        const container = document.getElementById(id);
        container.innerHTML = `
            <div class="activity-error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Failed to load GitHub activity</p>
                <small>API rate limit may have been reached</small>
            </div>
        `;
    });
}

// Initialize GitHub activity feed
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchGitHubActivity);
} else {
    fetchGitHubActivity();
}

