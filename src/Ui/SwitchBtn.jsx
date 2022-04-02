import classes from "./SwitchBtn.module.scss";

const SwitchBtn = ({ switchTheme }) => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" onChange={switchTheme} />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
};

export default SwitchBtn;
