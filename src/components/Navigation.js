import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
