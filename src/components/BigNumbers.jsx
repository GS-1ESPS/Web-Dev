import { stats } from "../js";

const BigNumbers = () => (
  <section className="bigNumbers-section">
    {stats.map((stat) => (
      <div key={stat.id} className="bigNumbers-card">
        <h4 className="bigNumbers-value">{stat.value}</h4>
        <p className="bigNumbers-title">{stat.title}</p>
      </div>
    ))}
  </section>
);

export default BigNumbers;
