import "./photos.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
const PhotosWrapper = () => {
  const photos = useSelector((state: RootState) => state.photos.photos);
  const loading = useSelector((state: RootState) => state.photos.loading);
  return (
    <div className="wrapper">
      {photos.map((photo, index) => (
        <div key={photo.id} className="photo">
          <div
            className={`loader ${loading === "pending" ? "show" : ""}`}
          ></div>
          <img src={photo.urls.regular} alt="regular" className="img" />
          <div className="details">
            <p className="white">{photo.user.name || "NA"}</p>
            <p>{photo.user.location || "NA"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotosWrapper;
