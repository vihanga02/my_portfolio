// import './Footer.css';
import { motion } from 'framer-motion';

const svgDropdown = {
    hover: {
      scale: 1.1
    },
  };
  
const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center text-[rgba(240,248,255,0.815)] bg-[#0d091d] relative top-[30vw] gap-[2vw] pt-[1vw] pb-[2vw]">
            <h3 className="text-[rgba(255,255,255,0.733)] bg-transparent">Contact Me</h3>
            <div className="social-links flex flex-row justify-center gap-[2vw] bg-transparent">
                <a href="mailto:vihagamuthumala@gmail.com" className='email-link'>
                    <motion.svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"   xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke=""  data-darkreader-inline-fill=""
                        className="fill-[aliceblue] h-[3vw] w-auto hover:fill-lime-400 active:fill-lime-400 transition-colors"
                        variants={svgDropdown}
                        whileHover='hover'
                        whileTap='hover'
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path></motion.svg>
                </a>
                <a href="https://www.instagram.com/__vihanga__m__">
                    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="instagram-logo"
                        className="fill-[aliceblue] h-[3vw] w-auto hover:fill-lime-400 active:fill-lime-400 transition-colors"
                        variants={svgDropdown}
                        whileHover='hover'
                        whileTap='hover'
                    ><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="32">
                        </circle><path d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48.05436,48.05436,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"></path></motion.svg> 
                </a>
                <a href="https://www.facebook.com/vihanga.muthumala.1/">
                    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="facebook-logo"
                        className="fill-[aliceblue] h-[3vw] w-auto hover:fill-lime-400 active:fill-lime-400 transition-colors"
                        variants={svgDropdown}
                        whileHover='hover'
                        whileTap='hover'
                    >
                        <path d="M24 0H2C.9 0 0 .9 0 2v22c0 1.1.9 2 2 2h11.823V15.936h-3.145v-3.984h3.145V8.807c0-3.853 3.145-4.823 3.984-4.823h4.194v3.774h-2.936c-.979 0-1.048 1.048-1.048 1.048v3.145h3.774l-.419 3.984h-3.355V26H24c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"></path></motion.svg>
                </a>
                <a href="https://www.linkedin.com/in/vihanga-muthumala-678451277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgHGe0WQMR%2BW4wMCqaBcRpQ%3D%3D">
                    <motion.svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 26 26" id="linkedin-logo"
                        className="fill-[aliceblue] h-[3vw] w-auto hover:fill-lime-400 active:fill-lime-400 transition-colors"
                        variants={svgDropdown}
                        whileHover='hover'
                        whileTap='hover'
                    >
                        <path d="M24,0H2C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2V2C26,0.9,25.1,0,24,0z M7.816,22H4V9.725h3.816V22z M5.878,8.219c-1.349,0-2.25-0.956-2.222-2.138C3.628,4.844,4.529,3.915,5.906,3.915c1.379,0,2.251,0.929,2.279,2.166C8.186,7.263,7.286,8.219,5.878,8.219z M22,22h-3.815v-6.802c0-1.582-0.553-2.661-1.934-2.661c-1.053,0-1.681,0.728-1.932,1.431c-0.1,0.226-0.15,0.603-0.15,0.953V22h-3.816v-8.358c0-1.532-0.05-2.837-0.1-3.916h3.313l0.176,1.682h0.076c0.502-0.779,1.757-1.958,3.79-1.958c2.51,0,4.392,1.656,4.392,5.271V22z"></path></motion.svg>
                </a>
                <a href="http://github.com/vihanga02">
                    <motion.svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 28 27.311" viewBox="0 0 28 27.311" id="github-logo"
                        className="fill-[aliceblue] h-[3vw] w-auto hover:fill-lime-400 active:fill-lime-400 transition-colors"
                        variants={svgDropdown}
                        whileHover='hover'
                        whileTap='hover'
                    >
                        <path d="M28,14c0-7.732-6.268-14-14-14S0,6.268,0,14c0,6.221,4.061,11.488,9.674,13.311c0.767-0.235,0.803-0.702,0.803-0.702s0-1.383,0-2.661c-0.843,0.155-1.89,0.157-2.271,0.157c-0.464,0-2.009-0.386-2.689-2.132c-0.68-1.746-1.947-1.916-1.947-2.225s0.278-0.371,0.278-0.371s0.17,0,0.927,0c0.757,0,1.514,1.267,2.04,2.04s1.792,0.927,2.411,0.927c0.347,0,0.885-0.175,1.294-0.329c0.167-1.082,0.792-1.896,0.792-1.896c-6.243-0.556-6.397-5.223-6.397-7.046c0-1.823,1.484-3.616,1.484-3.616s-0.719-2.04,0.185-3.709c1.947,0.015,3.894,1.483,3.894,1.483S12.238,6.676,14,6.676s3.523,0.556,3.523,0.556s1.947-1.468,3.894-1.483c0.904,1.669,0.185,3.709,0.185,3.709s1.484,1.792,1.484,3.616c0,1.823-0.155,6.49-6.397,7.046c0,0,0.834,1.082,0.834,2.411s0,4.08,0,4.08s0.035,0.466,0.803,0.702C23.939,25.488,28,20.221,28,14z"></path></motion.svg>
                </a>
            </div>
            <p className="bg-transparent">Copyright © 2024, All rights reserved</p>
        </footer>
    )
}

export default Footer;
