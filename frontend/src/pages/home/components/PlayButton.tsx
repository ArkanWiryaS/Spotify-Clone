import { Button } from "@/components/ui/button";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Song } from "@/types";
import { Pause, Play } from "lucide-react";

const PlayButton = ({ song }: { song: Song }) => {
  const { currentSong, isPlaying, setCurrentSong, togglePlay } =
    usePlayerStore();
  const isCurrentSong = currentSong?._id === song._id;

  const handlePlay = () => {
    if (isCurrentSong) togglePlay();
    else setCurrentSong(song);
  };

  return (
    <Button
      size={"icon"}
      onClick={handlePlay}
      className={`absolute bottom-5 right-2 bg-[#5038a0]/80 hover:bg-blue/80 hover:scale-105 transition-all 
				 text-white opacity-0 translate-y-2 group-hover:translate-y-0 rounded-[5.2px] ${
           isCurrentSong ? "opacity-100" : "opacity-0 group-hover:opacity-100"
         }`}
    >
      {isCurrentSong && isPlaying ? (
        <Pause className="size-5 text-black fill-white" />
      ) : (
        <Play className="size-5 text-white fill-white" />
      )}
    </Button>
  );
};
export default PlayButton;
