import { useSelector } from "react-redux";
import useMovieById from "../hooks/useMovieById";

const VideoBackground = ({movieId, bool}) => {

  const trailerMovie = useSelector(store => store.movie.trailerMovie);
  // console.log("trailerMovie", trailerMovie);
  // console.log("movieId", movieId);

  useMovieById(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=FE_OzLCQ_7FtF1YU&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
