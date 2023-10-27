import PropTypes from "prop-types";

import styles from './ProgressBar.module.scss';

const ProgressBar = ({value}) => {
  return (
    <div className={styles.container}>
      <progress value={value} max="100">{value}%</progress>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {
  value: 30,
};

export default ProgressBar;
