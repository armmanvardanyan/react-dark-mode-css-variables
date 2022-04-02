import classes from "./SwitchBtn.module.scss";

const SwitchBtn = ({ switchTheme, checked }) => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" onChange={switchTheme} checked = {checked} />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
};

export default SwitchBtn;
