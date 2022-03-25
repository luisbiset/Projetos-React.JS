import "./Button.css";

export default function Button(props) {
  let classes = "button";
  classes += props.double ? "double" : "";
  classes += props.triple ? "triple" : "";

  return (
    <button
      className={classes}
      onClick={(e) => props.click && props.click(props.label)}
    >
      {props.label}
    </button>
  );
}
