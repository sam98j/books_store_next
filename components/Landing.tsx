import styles from "../styles/landing.module.scss";
import {
  IoIosSearch,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io";
import LpBook from "./LpBook";
import { useEffect, useRef, useState } from "react";

interface State {
  current: number;
  imgsLinks: string[];
}

export default function Landing() {
  const sliderNumber = useRef<HTMLHeadingElement>(null);
  const sliderindecator = useRef<HTMLUListElement>(null);
  const booknavRef = useRef<HTMLDivElement>(null);
  const [state, setstate] = useState<State>({
    current: 0,
    imgsLinks: ["./bg1.jpg", "./bg2.jpg", "./bg3.jpg", "./bg4.jpg"],
  });
  let current = 0;
  // get slider's numbers
  const getNumbers = () => {
    const numbersContainer = sliderNumber.current!;
    const indecatorsContainer = sliderindecator.current!;
    for (let i = 1; i <= state.imgsLinks.length; i++) {
      const span = document.createElement("span");
      const li = document.createElement("li");
      span.innerText = String(i);
      numbersContainer?.appendChild(span);
      indecatorsContainer.appendChild(li);
    }
  };
  // add classes to numbers
  const sliderNumbersFun = () => {
    const ele = sliderNumber.current!;
    const indecators = sliderindecator.current!;
    const booknav = booknavRef.current!;
    for (let i = 0; i < ele?.children.length; i++) {
      if (i !== current) {
        ele?.children[i].setAttribute("style", "top:100%");
        indecators?.children[i].setAttribute("style", "opacity: .48");
      } else {
        ele?.children[i].setAttribute("style", "top:0");
        indecators?.children[i].setAttribute("style", "opacity: 1");
      }
    }
    booknav.setAttribute(
      "style",
      `background-image: url(${state.imgsLinks[current]})`
    );
  };
  // on click
  const sliderFunctioality = () => {
    console.log("run");
    const ele = sliderNumber.current!;
    const indecators = sliderindecator.current!;
    const booknav = booknavRef.current!;
    for (let i = 0; i < ele.children.length; i++) {
      indecators.children[i].setAttribute("style", "opacity: .48");
      ele.children[i].setAttribute("style", "top:-100%");
      if (i !== current + 1) {
        ele.children[i].setAttribute("style", "top:100%");
      }
    }
    ele.children[current].setAttribute("style", "top:100%; opacity:0");
    current++;
    if (current === ele.children.length) {
      current = 0;
    }
    ele.children[current].setAttribute("style", "top:0");
    indecators.children[current].setAttribute("style", "opacity: 1");
    booknav.setAttribute(
      "style",
      `background-image: url(${state.imgsLinks[current]})`
    );
  };
  // component did mount
  useEffect(() => {
    console.log("mount");
    getNumbers();
    // add classes to numbers
    sliderNumbersFun();
    setInterval(sliderFunctioality, 3000);
  }, []);
  return (
    <div className={styles.booknav} ref={booknavRef}>
      <nav className={styles.nav}>
        <span className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 480 480"
            version="1.1"
            viewBox="0 0 480 480"
            xmlSpace="preserve"
          >
            <path d="M472 88.014h-32v-40a8 8 0 00-8.672-8l-20.872 1.76a485.342 485.342 0 00-147.12 35.872L240 87.35l-23.312-9.672a485.454 485.454 0 00-147.136-35.88l-20.88-1.784a8 8 0 00-8.672 8v40H8a8 8 0 00-8 8v336a8 8 0 008 8h464a8 8 0 008-8v-336a8 8 0 00-8-8zM16 424.03V104.014h24v280a8 8 0 007.32 8l21.528 1.84a458.15 458.15 0 0117.6 1.816c1.96.232 3.904.544 5.864.8 3.88.52 7.76 1.04 11.624 1.656 2.304.368 4.6.8 6.896 1.208 3.504.616 7.008 1.232 10.496 1.92 2.4.48 4.8 1.008 7.2 1.528a436.72 436.72 0 0110.088 2.256c2.4.576 4.84 1.192 7.256 1.808 3.304.848 6.6 1.712 9.888 2.624 2.4.672 4.8 1.376 7.2 2.08 3.264.965 6.52 1.968 9.768 3.008 2.379.757 4.752 1.536 7.12 2.336a428.042 428.042 0 019.768 3.424c2.304.8 4.616 1.672 6.904 2.544.992.376 1.976.8 2.96 1.168H16zm216-4.016l-14.752-6.16a485.196 485.196 0 00-147.048-36L56 376.67V56.718l12.208 1.024a469.456 469.456 0 01142.328 34.696L232 101.35v318.664zm16 0V101.35l21.488-8.92a469.383 469.383 0 01142.304-34.688L424 56.718v319.928l-13.144 1.072a488.463 488.463 0 00-147.2 35.792L248 420.014zm216 4H280.64c1.096-.424 2.184-.872 3.28-1.288 2.4-.92 4.8-1.792 7.256-2.664a451.006 451.006 0 019.448-3.304c2.464-.8 4.944-1.6 7.416-2.4a500.709 500.709 0 019.512-2.912c2.496-.736 5-1.464 7.504-2.152 3.2-.896 6.4-1.736 9.68-2.56 2.48-.632 4.968-1.264 7.464-1.856 3.328-.8 6.68-1.52 10.032-2.232 2.4-.52 4.8-1.056 7.248-1.536 3.52-.696 7.056-1.312 10.584-1.928 2.288-.4 4.568-.8 6.864-1.2 3.944-.624 7.896-1.16 11.856-1.688 1.896-.248 3.792-.552 5.696-.8a495.198 495.198 0 0117.688-1.816l20.488-1.664a8 8 0 007.344-8v-280h24v320z"></path>
          </svg>
        </span>
        <ul className={styles.links}>
          <li className={styles.link}>home</li>
          <li className={styles.link}>books</li>
          <li className={styles.link}>news</li>
          <li className={styles.link}>sale</li>
          <li className={styles.link}>subscibe</li>
          <li className={styles.link}>contact</li>
        </ul>
        <span className={styles.search}>
          <IoIosSearch />
        </span>
      </nav>
      <div className={styles.hero}>
        <ul className={styles.sliderindecator} ref={sliderindecator}></ul>
        <span className={styles.text}>
          <h2 className={styles.number} ref={sliderNumber}></h2>
          <p className={styles.dis}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id?
          </p>
          <p className={styles.detail}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde iste
            provident perspiciatis fugit sint repudiandae voluptatibus
            consequatur dolorem excepturi natus?
          </p>
          <button className={styles.button}>shop now</button>
          <div className={styles.menu}>
            <LpBook />
            <LpBook />
            <LpBook />
            <LpBook />
          </div>
        </span>
        <ul className={styles.social}>
          <li>
            <IoLogoFacebook />
          </li>
          <li>
            <IoLogoInstagram />
          </li>
          <li>
            <IoLogoTwitter />
          </li>
        </ul>
      </div>
    </div>
  );
}
