import React, { useState, useEffect } from "react";
import "./github.css";

function GitHub() {
    const [pinnedRepos, setPinnedRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // GitHub username
    const GITHUB_USERNAME = "joeykokinda";

    const fetchGitHubData = async () => {
        try {
            setLoading(true);

            // Fetch the three specific repositories
            const targetRepos = ['MetaGlassesAnswerer', 'JavaAuctionHouse', 'scout'];
            const repoPromises = targetRepos.map(repoName =>
                fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`)
            );

            const responses = await Promise.all(repoPromises);

            // Check for rate limiting
            if (responses.some(response => response.status === 403)) {
                const rateLimitData = responses[0].headers.get('x-ratelimit-reset');
                const resetTime = rateLimitData ? new Date(parseInt(rateLimitData) * 1000) : null;
                const resetTimeString = resetTime ? resetTime.toLocaleTimeString() : 'shortly';

                throw new Error(`RATE_LIMIT:GitHub API rate limit exceeded (60 requests/hour). Please try again after ${resetTimeString}.`);
            }

            const repos = [];
            for (let i = 0; i < responses.length; i++) {
                if (responses[i].ok) {
                    const repoData = await responses[i].json();
                    repos.push(repoData);
                }
            }

            setPinnedRepos(repos);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGitHubData();
    }, []);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
        });
    };

    if (loading) {
        return (
            <div className="githubBox">
                <div className="githubHeader">
                    <span className="terminalTitle">C:\Users\GitHub&gt;</span>
                    <div className="terminalControls">
                        <span className="terminalControl">−</span>
                        <span className="terminalControl">□</span>
                        <span className="terminalControl">×</span>
                    </div>
                </div>
                <div className="githubContent">
                    <div className="loading">Loading GitHub data...</div>
                </div>
            </div>
        );
    }

    if (error) {
        const isRateLimit = error.startsWith('RATE_LIMIT:');
        const errorMessage = isRateLimit ? error.replace('RATE_LIMIT:', '') : error;

        return (
            <div className="githubBox">
                <div className="githubHeader">
                    <span className="terminalTitle">C:\Users\GitHub&gt;</span>
                    <div className="terminalControls">
                        <span className="terminalControl">−</span>
                        <span className="terminalControl">□</span>
                        <span className="terminalControl">×</span>
                    </div>
                </div>
                <div className="githubContent">
                    {isRateLimit ? (
                        <div className="rate-limit-error">
                            <div className="rate-limit-message">
                                <p> {errorMessage}</p>
                                <p className="rate-limit-info">
                                    GitHub allows 60 requests per hour for public data.
                                    This limit resets every hour.
                                </p>
                                <p className="rate-limit-suggestion">
                                    <strong>In the meantime:</strong> Check out my repositories directly at{" "}
                                    <a
                                        href={`https://github.com/${GITHUB_USERNAME}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link"
                                    >
                                        github.com/{GITHUB_USERNAME}
                                    </a>
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="retry-button"
                                >
                                    Retry
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="error">Error: {error}</div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="githubBox">
            <div className="githubHeader">
                <span className="terminalTitle">C:\Users\GitHub&gt;</span>
                <div className="terminalControls">
                    <span className="terminalControl">−</span>
                    <span className="terminalControl">□</span>
                    <span className="terminalControl">×</span>
                </div>
            </div>

            <div className="githubContent">
                {/* Contribution Graph */}
                <div className="github-contribution-section">
                    <h3 className="github-section-title">Contribution Activity</h3>
                    <div className="contribution-graph">
                        <img
                            src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=github-dark&bg_color=00000000&color=00ff00&line=00ff00&point=ffffff&area=true&hide_border=false&border_color=00ff00`}
                            alt="GitHub Activity Graph"
                            className="contribution-activity"
                        />
                        <img
                            src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}&theme=dark&background=00000000&border=00ff00&stroke=00ff00&ring=00ff00&fire=ffffff&currStreakNum=ffffff&sideNums=00ff00&currStreakLabel=00ff00&sideLabels=00ff00&dates=00ff00`}
                            alt="GitHub Streak"
                            className="contribution-streak"
                        />
                    </div>
                </div>

                {/* Pinned Repositories */}
                <div className="github-repos-section">
                    <h3 className="github-section-title">Pinned Repositories</h3>
                    <div className="repos-grid">
                        {pinnedRepos.map((repo) => (
                            <div key={repo.id} className="repo-card">
                                <div className="repo-header">
                                    <h4 className="repo-name">
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="repo-link"
                                        >
                                            {repo.name}
                                        </a>
                                    </h4>
                                    <span className="repo-visibility">{repo.private ? 'Private' : 'Public'}</span>
                                </div>

                                <p className="repo-description">
                                    {repo.description || 'No description available'}
                                </p>

                                <div className="repo-stats">
                                    <div className="repo-stat">
                                        <span className="repo-stat-icon">*</span>
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                    <div className="repo-stat">
                                        <span className="repo-stat-icon">#</span>
                                        <span>{repo.forks_count}</span>
                                    </div>
                                    {repo.language && (
                                        <div className="repo-stat">
                                            <span className="language-dot" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                                            <span>{repo.language}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="repo-updated">
                                    Updated {formatDate(repo.updated_at)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="githubFooter">
                <p className="github-footer-text">
                    View my full GitHub profile{" "}
                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        here
                    </a>
                </p>
            </div>
        </div>
    );
}

// Helper function to get language colors
const getLanguageColor = (language) => {
    const colors = {
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        TypeScript: '#2b7489',
        Java: '#b07219',
        C: '#555555',
        'C++': '#f34b7d',
        HTML: '#e34c26',
        CSS: '#1572B6',
        React: '#61dafb',
        Vue: '#4FC08D',
        Go: '#00ADD8',
        Rust: '#dea584',
        PHP: '#4F5D95',
        Ruby: '#701516',
        Swift: '#ffac45',
        Kotlin: '#F18E33',
        Dart: '#00B4AB',
        Shell: '#89e051',
        Dockerfile: '#384d54',
        default: '#00ff00'
    };

    return colors[language] || colors.default;
};

export default GitHub;