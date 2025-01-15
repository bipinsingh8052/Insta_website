import './Status_show.css'
import  { useRef, useState } from "react";

export default function Status_show() {
    // const videoRef = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [volume, setVolume] = useState(1);

    // const handlePlayPause = () => {
    //     if (isPlaying) {
    //         videoRef.current.pause();
    //     } else {
    //         videoRef.current.play();
    //     }
    //     setIsPlaying(!isPlaying);
    // };

    // const handleVolumeChange = (event) => {
    //     const newVolume = event.target.value;
    //     videoRef.current.volume = newVolume;
    //     setVolume(newVolume);
    // };

    // const handleFullScreen = () => {
    //     if (videoRef.current.requestFullscreen) {
    //         videoRef.current.requestFullscreen();
    //     }
    // };

    return (
        <>
       
        {/* <div className="video-player">
            <video
                ref={videoRef}
                width="100%"
                src=" https://www.instagram.com/reel/DEzir4qCiMf/?utm_source=ig_web_copy_link"
                // controls={false}
                // poster="https://via.placeholder.com/600x400" // Add your poster image
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
        </div> */}
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4mVhw-LP_bw?si=QuM6WeEy2goyeX3l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </>
    );
}
