import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="h-20 w-full mt-14 bg-slate-900 flex flex-col items-center justify-center gap-2 text-slate-50">
      <p>&copy; 2023 WibDev</p>
      <div className="flex gap-5 flex-wrap">
        <a
          href="https://x.com/ariwibi267271?t=GPaMXeyWiKx5YeOrSLpt_Q&s=09"
          target="_black">
          <FaTwitter />
        </a>
        <a href="https://github.com/ariwibi" target="_black">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_ariwibi/" target="_black">
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/ari-wibowo-7417b6294"
          target="_black">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
