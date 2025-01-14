import './Status_show.css'
import  { useRef, useState } from "react";

export default function Status_show() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        videoRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    const handleFullScreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <div className="video-player">
            <video
                ref={videoRef}
                width="100%"
                src="https://www.youtube.com/embed/IyOv7Yhxaaw?si=MWhs1Nj47Fj7x-jV"
                controls={false}
                poster="https://via.placeholder.com/600x400" // Add your poster image
            ></video>
            <div className="controls">
                <button onClick={handlePlayPause}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                />
                <button onClick={handleFullScreen}>Full Screen</button>
            </div>
        </div>
    );
}
