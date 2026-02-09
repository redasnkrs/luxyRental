import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import Noise from "@/components/ui/animation/Noise";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-8 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      <Noise />
      <div className="max-w-[1400px] mx-auto flex flex-col justify-between h-full relative z-10">
        
        {/* Top Section: Links & Info */}
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
            
            {/* Brand / Description */}
            <div className="md:w-1/3 space-y-6">
                <Link to="/" className="inline-block text-white hover:text-[#eb3813] transition-colors duration-300">
                  <span className="font-['Boska'] text-3xl tracking-wide">LUXY RENTAL</span>
                </Link>
                <p className="text-white/60 font-['Satoshi-light'] max-w-sm text-lg leading-relaxed">
                    Elevating your journey with the world's most exclusive fleet of luxury and sports vehicles.
                </p>
            </div>

            {/* Navigation Columns */}
            <div className="flex flex-wrap gap-16 md:gap-32">
                <div>
                    <h3 className="font-['Boska'] text-xl mb-6 text-[#eb3813]">Menu</h3>
                    <ul className="space-y-4 font-['Satoshi-light']">
                        <li><Link to="/" className="text-white/70 hover:text-[#eb3813] hover:translate-x-1 transition-all duration-300 inline-block">Home</Link></li>
                        <li><a href="#car" className="text-white/70 hover:text-[#eb3813] hover:translate-x-1 transition-all duration-300 inline-block">Our Fleet</a></li>
                        <li><a href="#news" className="text-white/70 hover:text-[#eb3813] hover:translate-x-1 transition-all duration-300 inline-block">Latest News</a></li>
                        <li><a href="#about" className="text-white/70 hover:text-[#eb3813] hover:translate-x-1 transition-all duration-300 inline-block">About Us</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-['Boska'] text-xl mb-6 text-[#eb3813]">Legal</h3>
                    <ul className="space-y-4 font-['Satoshi-light']">
                        <li><Link to="#" className="text-white/70 hover:text-[#eb3813] hover:translate-x-1 transition-all duration-300 inline-block">Privacy Policy</Link></li>
                        <li><Link to="#" className="text-white/70 hover:text-[#eb3813] hover:translate-x-1 transition-all duration-300 inline-block">Terms of Service</Link></li>
                        <li><Link to="#" className="text-white/70 hover:text-[#eb3813] hover:translate-x-1 transition-all duration-300 inline-block">Cookie Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-['Boska'] text-xl mb-6 text-[#eb3813]">Connect</h3>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/70 hover:text-[#eb3813] hover:-translate-y-1 transition-all duration-300"><Instagram strokeWidth={1.5} size={24}/></a>
                        <a href="#" className="text-white/70 hover:text-[#eb3813] hover:-translate-y-1 transition-all duration-300"><Twitter strokeWidth={1.5} size={24}/></a>
                        <a href="#" className="text-white/70 hover:text-[#eb3813] hover:-translate-y-1 transition-all duration-300"><Linkedin strokeWidth={1.5} size={24}/></a>
                        <a href="#" className="text-white/70 hover:text-[#eb3813] hover:-translate-y-1 transition-all duration-300"><Facebook strokeWidth={1.5} size={24}/></a>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Section: Copyright & Big Text */}
        <div className="flex flex-col gap-8">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8">
                 <span className="text-white/40 text-sm font-['Satoshi-light'] tracking-wide">© 2026 Luxy Rental. All rights reserved.</span>
                 <span className="text-white/40 text-sm font-['Satoshi-light'] tracking-wide mt-2 md:mt-0">Designed for excellence.</span>
             </div>
             
             {/* Massive Text */}
             <div className="relative w-full overflow-hidden flex justify-center">
                <h1 className="font-['Boska'] text-[13vw] leading-[0.8] text-center text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none tracking-tight">
                    LUXY RENTAL
                </h1>
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
