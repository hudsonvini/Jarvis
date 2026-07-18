import styles from "./video-player.module.scss";

function getEmbedUrl(videoUrl) {
    const youtubeMatch = String(videoUrl ?? "").match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/
    );
    if (youtubeMatch) {
        return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }

    const vimeoMatch = String(videoUrl ?? "").match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    return null;
}

export default function VideoPlayer({ videoUrl, title }) {
    const embedUrl = getEmbedUrl(videoUrl);

    return (
        <div className={styles.container}>
            {embedUrl ? (
                <iframe
                    className={styles.iframe}
                    src={embedUrl}
                    title={`Video de apresentacao - ${title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                />
            ) : (
                <div className={styles.placeholder}>
                    <svg
                        className={styles.playIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span>Video em breve</span>
                </div>
            )}
        </div>
    );
}
