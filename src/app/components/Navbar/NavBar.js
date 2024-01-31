import styles from "./NavBar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <input
          type="text"
          placeholder="Προορισμός Ελλάδα"
          className="input destination"
        />
        <input type="date" className="input date" />
        <input type="date" className="input date" />
        <input
          type="text"
          placeholder="Αριθμός ατόμων"
          className="input guests"
        />
        <button className="search-button">Αναζήτηση</button>
      </div>
    </div>
  );
};

export default Navbar;
