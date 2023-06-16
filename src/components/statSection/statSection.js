import propTypes from "prop-types";
import css from "./statSection.module.css";

function Statistic({ stats, title }) {
  return (
    <section className={css["statistics"]}>
      {title ? (
        <h2 className={css["title"]}>{title}</h2>
      ) : (
        <h2 className={css["title"]}>There is no title</h2>
      )}

      <ul className="stat-list">
        {stats.map((stat) => (
          <li key={stat.id} className="item">
            <span className={css["label"]}>{stat.label}</span>
            <span className={css["percentage"]}> {stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
  title: propTypes.string,
};

export { Statistic };
