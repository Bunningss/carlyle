"use client";
import { useRouter } from "next/navigation";
import styles from "./Logo.module.css";

const Logo = () => {
  const router = useRouter();

  return (
    <h2 className={styles.logo} onClick={() => router.push("/")}>
      carlyle
    </h2>
  );
};

export default Logo;
