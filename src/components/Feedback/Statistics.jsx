import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li className={css.statistic_item}>Good: {good}</li>
      <li className={css.statistic_item}>Neutral: {neutral}</li>
      <li className={css.statistic_item}>Bad: {bad}</li>
      <li className={css.statistic_item}>Total: {total}</li>
      <li className={css.statistic_item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};
