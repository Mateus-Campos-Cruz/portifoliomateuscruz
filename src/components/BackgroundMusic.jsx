import React, { useState, useEffect, useRef } from 'react';

const BackgroundMusic = () => {
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);

    // Get the base URL from Vite (handles /portifoliomateuscruz/ vs /)
    const baseUrl = import.meta.env.BASE_URL || '/';
    const audioSrc = `${baseUrl}audio/bg-music.mp3`.replace(/\/+/g, '/');

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Attempt to play on first interaction due to browser policies
        const playOnInteraction = () => {
            if (audio.paused) {
                audio.play()
                    .then(() => {
                        console.log("Background music started (muted)");
                        window.removeEventListener('click', playOnInteraction);
                        window.removeEventListener('scroll', playOnInteraction);
                    })
                    .catch(err => {
                        console.log("Autoplay still blocked:", err);
                    });
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
            
            // Explicitly call play if unmuting, in case it was paused or failed to start
            if (!newMutedState) {
                audioRef.current.play().catch(err => {
                    console.error("Error playing audio on unmute:", err);
                });
            }
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={audioSrc}
                loop
                muted={isMuted}
                preload="auto"
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
