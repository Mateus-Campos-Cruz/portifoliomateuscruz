import React, { useState, useEffect, useRef } from 'react';

const BackgroundMusic = () => {
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        // Attempt to play on first interaction due to browser policies
        const playOnInteraction = () => {
            if (audioRef.current && isMuted) {
                // We keep it muted by default to respect user/browser policies
                // but we start the playback
                audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
                window.removeEventListener('click', playOnInteraction);
                window.removeEventListener('scroll', playOnInteraction);
            }
        };

        window.addEventListener('click', playOnInteraction);
        window.addEventListener('scroll', playOnInteraction);

        return () => {
            window.removeEventListener('click', playOnInteraction);
            window.removeEventListener('scroll', playOnInteraction);
        };
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            const newMutedState = !isMuted;
            audioRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
            
            // If unmuting for the first time and not playing, play it
            if (!newMutedState && audioRef.current.paused) {
                audioRef.current.play();
            }
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/audio/bg-music.mp3"
                loop
                muted={isMuted}
            />
            <button
                id="music-toggle"
                className={isMuted ? 'muted' : ''}
                onClick={toggleMute}
                title={isMuted ? "Unmute Background Music" : "Mute Background Music"}
            >
                <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
            </button>
        </>
    );
};

export default BackgroundMusic;
