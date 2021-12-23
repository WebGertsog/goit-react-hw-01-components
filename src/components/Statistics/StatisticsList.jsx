import PropTypes from "prop-types";

function StatisticsList({ obj }) {
  const { label, percentage } = obj;
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

StatisticsList.propTypes = {
  obj: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticsList;
