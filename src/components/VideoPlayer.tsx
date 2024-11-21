import React, { useState } from 'react';
import { Play } from 'lucide-react';
import ReactPlayer from 'react-player/youtube';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Mapping des IDs de cours vers les URLs YouTube
  const videoUrls: Record<string, string> = {
    'brain-10min': 'https://www.youtube-nocookie.com/watch?v=wX8WzwG_k4k',
    'gen-ai-explained': 'https://www.youtube-nocookie.com/watch?v=ZH5GRzqVxgE',
    'llm-rag': 'https://www.youtube-nocookie.com/watch?v=wX8WzwG_k4k',
    'ai-datacenter': 'https://www.youtube-nocookie.com/watch?v=wX8WzwG_k4k',
    'data-science-workflows': 'https://www.youtube-nocookie.com/watch?v=wX8WzwG_k4k',
    'cuda-intro': 'https://www.youtube-nocookie.com/watch?v=wX8WzwG_k4k',
    'physics-ml': 'https://www.youtube-nocookie.com/watch?v=wX8WzwG_k4k'
  };

  const actualVideoUrl = videoUrls[videoUrl] || videoUrl;

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleError = () => {
    setHasError(true);
    console.error('Error loading video:', actualVideoUrl);
  };

  const handleReady = () => {
    setHasError(false);
  };

  if (hasError) {
    return (
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-gray-600">Impossible de charger la vidéo</p>
          <button 
            onClick={() => setHasError(false)}
            className="mt-2 text-primary hover:text-primary/90"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
      <ReactPlayer
        url={actualVideoUrl}
        width="100%"
        height="100%"
        playing={playing}
        controls={playing}
        light={true}
        onError={handleError}
        onReady={handleReady}
        fallback={
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        }
        playIcon={
          <button 
            onClick={handlePlayPause}
            className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors group"
            aria-label="Lire la vidéo"
          >
            <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
          </button>
        }
        config={{
          youtube: {
            playerVars: {
              showinfo: 1,
              origin: window.location.origin,
              modestbranding: 1,
              rel: 0,
              hl: 'fr',
              cc_lang_pref: 'fr',
              host: 'https://www.youtube-nocookie.com'
            }
          }
        }}
      />
    </div>
  );
}