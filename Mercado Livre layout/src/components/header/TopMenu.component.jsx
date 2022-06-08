import styles from "./topMenu.module.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/logo2.webp";
import img2 from "../../assets/logo-large1.png";
const TopMenu = () => {
  return (
    <header className={styles.menuPrincipal}>
      <div className={styles.container}>
        <img className={styles.logoLarge} src={img2} alt="" />
        <input
          type="search"
          className={styles.searchProducts}
          placeholder="Buscar produtos,marcas e muito mais!"
        />
        <img
          className={styles.logoDisney}
          src={img1}
          width="340px"
          height="40px"
        />
      </div>
      <div className={styles.container}>
        <a href="#" className={styles.sendCep}>
          <span className={styles.spanSend}>Enviar para</span> <br />
          <span> Salvador 40255265</span>
        </a>

        <nav className={styles.navMenu1}>
          <a href="#">categorias</a>
          <a href="#">Ofertas do dia</a>
          <a href="#">Supermercado</a>
          <a href="#">Moda</a>
          <a href="#">live</a>
          <a href="#">Vender</a>
          <a href="#">Contato</a>
        </nav>
        <nav className={styles.navMenu2}>
          <a href="#">Crie a sua conta </a>
          <Link to="/login">entrar</Link>
          <a href="#">Compras</a>
        </nav>
      </div>
    </header>
  );
};

export default TopMenu;
