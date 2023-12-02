import styles from "./Navbar.module.scss";
import Logo from "@assets/logo.png";
import { BRAND_NAME } from "@config/public";

const items: { label: string; href: string }[] = [
  {
    label: "Developer",
    href: "https://github.com/gitananun",
  },
  {
    label: "Repository",
    href: "https://github.com/gitananun/textai",
  },
  {
    label: "API Docs",
    href: "https://docs.runpod.io/reference/stable-diffusion-v1",
  },
];

const LayoutNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leading}>
        <img src={Logo} alt={BRAND_NAME} />
      </div>
      <div className={styles.trailing}>
        {items.map((item) => (
          <a
            key={item.label}
            target="_blank"
            href={item.href}
            className={styles.item}
            rel="noreferrer"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default LayoutNavbar;
