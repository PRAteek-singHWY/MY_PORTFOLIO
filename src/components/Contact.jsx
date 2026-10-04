import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { github, twit, email } from "../assets";

const links = [
  { label: "Email", shown: "prateek23022004@gmail.com", href: "mailto:prateek23022004@gmail.com", icon: email },
  { label: "GitHub", shown: "PRAteek-singHWY", href: "https://github.com/PRAteek-singHWY", icon: github },
  { label: "LinkedIn", shown: "prateekswyelv1", href: "https://www.linkedin.com/in/prateekswyelv1/" },
  { label: "Twitter", shown: "PRATEEK_SWY", href: "https://twitter.com/PRATEEK_SWY", icon: twit },
];

const Contact = () => (
  <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10">
    <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>
      <p className="mt-4 text-secondary text-[17px]">Email is the best way to reach me.</p>
      <ul className="mt-8 flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 min-h-[52px] px-4 rounded-xl bg-tertiary border border-white/5 hover:border-accent transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                {l.icon ? <img src={l.icon} alt="" className="w-6 h-6 object-contain" /> : <span className="text-black font-bold">in</span>}
              </span>
              <span className="min-w-0">
                <span className="block text-white font-semibold">{l.label}</span>
                <span className="block text-secondary text-[14px] truncate">{l.shown}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/Prateek_s_Resume.pdf"
        download="Prateek_Singh_Resume.pdf"
        className="mt-6 inline-flex items-center min-h-[48px] px-6 rounded-xl bg-accent hover:bg-accent-dim text-on-accent font-bold"
      >
        Download CV
      </a>
    </div>

    <div className="relative xl:flex-1 xl:h-auto xl:min-h-[460px] md:h-[550px] h-[350px]">
      <EarthCanvas className="absolute inset-0" />
    </div>
  </div>
);

export default SectionWrapper(Contact, "contact");
