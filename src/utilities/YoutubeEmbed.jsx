export default function YoutubeEmbed() {
    return (
        <div className="video-responsive">
            <iframe
                width="200"
                height="200"
                src="https://www.youtube.com/embed/lpvT-Fciu-4?si=w9nhNzNmDWtikFqd"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
        </div>
    );
}
