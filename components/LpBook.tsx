import styles from "../styles/lpbook.module.scss";
import Image from "next/image";
import img from "../assets/books/1001004000772645.jpg";

export default function LpBook() {
  return (
    <span className={styles.container}>
      <div className={styles.img}>
        <Image src={img} alt="" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>ego is a anemy</h3>
        <p className={styles.author}>rayn dahl</p>
      </div>
    </span>
  );
}
