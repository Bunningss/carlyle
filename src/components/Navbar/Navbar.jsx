"use client";
import styles from "./Navbar.module.css";
import Container from "@/components/Container/Container";
import Logo from "@/components/Navbar/Logo/Logo";
import Button from "@/components/Button/Button";
import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(false);

  const handleButtonAction = () => {
    setUser(!user);
  };

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navContent}>
          <Logo />
          <Button
            label={!user ? "login" : "logout"}
            action={handleButtonAction}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
