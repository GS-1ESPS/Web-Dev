import { clients } from "../js";

const Clients = () => (
  <section className="clients-section">
    <div className="clients-container">
      {clients.map((client) => (
        <div key={client.id} className="client-card">
          <img
            src={client.logo}
            alt="client_logo"
            className="client-logo"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
