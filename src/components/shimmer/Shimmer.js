import "./Shimmer.scss";

export const Shimmer = ({ type, width, height }) => {
  const styles = {
    width,
    height,
  };
  console.log(styles);
  if (type == "BOX") {
    return <div className="shine box" style={styles}></div>;
  }

  if (type == "LINE") {
    return <div className="shine line" style={styles}></div>;
  }

  if (type == "PHOTO") {
    <div className="shine photo" style={styles}></div>;
  }
};
