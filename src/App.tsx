import React, { useState } from 'react';
import { MapPin, ArrowRight, Linkedin, Twitter, Facebook, Youtube, Instagram, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F2] text-[#111111] font-sans selection:bg-black selection:text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-black/10">
        <div className="text-2xl font-bold tracking-tighter">THRIVE GROUP</div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="hover:opacity-60 transition-opacity">ABOUT</a>
          <a href="#" className="hover:opacity-60 transition-opacity">SERVICES</a>
          <a href="#" className="hover:opacity-60 transition-opacity">INSIGHTS</a>
          <a href="#" className="hover:opacity-60 transition-opacity">CAREERS</a>
          <a href="#" className="px-3 py-1 bg-black/5 rounded-full">CONTACT</a>
        </div>
        <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black/80 transition-colors flex items-center gap-2">
          GET STARTED <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          Contacts
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight max-w-4xl mx-auto leading-[1.1]">
          We'd love to hear from you<br/>
          <span className="text-black/60">(seriously, we actually reply)</span>
        </h1>
      </section>

      {/* Services Cards */}
      <section className="px-6 pb-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-black cursor-pointer">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" alt="Dubai" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
            <h3 className="text-2xl font-medium">Company Formation<br/>in Dubai</h3>
            <div>
              <p className="text-sm text-white/80 mb-4 max-w-[250px]">Launch your business in the UAE with our expert guidance and seamless setup process.</p>
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-black cursor-pointer">
          <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop" alt="Visa" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
            <h3 className="text-2xl font-medium">Visa & PRO<br/>Services</h3>
            <div>
              <p className="text-sm text-white/80 mb-4 max-w-[250px]">Hassle-free visa processing and corporate PRO services for you and your employees.</p>
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-black cursor-pointer">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="Finance" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
            <h3 className="text-2xl font-medium">Financial & Tax<br/>Advisory</h3>
            <div>
              <p className="text-sm text-white/80 mb-4 max-w-[250px]">Navigate UAE corporate tax and financial regulations with our certified experts.</p>
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-10 text-center max-w-xl mx-auto leading-tight">
            We're just a form away—send us your question, and we'll be happy to help!
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-black/50 block">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Smith" 
                  className={`w-full bg-[#F9F9F8] border rounded-xl px-5 py-4 text-sm focus:bg-white focus:ring-1 outline-none transition-all placeholder:text-black/30 hover:border-black/20 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/5 focus:border-black focus:ring-black'}`} 
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-black/50 block">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 50 123 4567" 
                  className={`w-full bg-[#F9F9F8] border rounded-xl px-5 py-4 text-sm focus:bg-white focus:ring-1 outline-none transition-all placeholder:text-black/30 hover:border-black/20 ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/5 focus:border-black focus:ring-black'}`} 
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-black/50 block">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@thrivegroup.ae" 
                className={`w-full bg-[#F9F9F8] border rounded-xl px-5 py-4 text-sm focus:bg-white focus:ring-1 outline-none transition-all placeholder:text-black/30 hover:border-black/20 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/5 focus:border-black focus:ring-black'}`} 
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-black/50 block">Message</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here" 
                className={`w-full bg-[#F9F9F8] border rounded-xl px-5 py-4 text-sm focus:bg-white focus:ring-1 outline-none transition-all placeholder:text-black/30 hover:border-black/20 resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/5 focus:border-black focus:ring-black'}`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <div className="pt-2">
              <button type="submit" className="group w-full bg-black text-white rounded-xl py-4 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-black/90 transition-all active:scale-[0.99] shadow-lg shadow-black/10">
                {isSubmitted ? (
                  <>SENT SUCCESSFULLY <CheckCircle2 className="w-4 h-4 text-green-400" /></>
                ) : (
                  <>SEND MESSAGE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Office Locations */}
      <section className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Office 1 */}
          <div>
            <div className="flex items-center gap-2 text-lg font-medium mb-6">
              <MapPin className="w-5 h-5" /> Dubai Office (Headquarters)
            </div>
            <div className="space-y-4 text-sm text-black/80 border-l-2 border-black/10 pl-4">
              <p>Level 41, Emirates Towers<br/>Sheikh Zayed Road, Dubai, UAE</p>
              <p>+971 4 123 4567</p>
              <p>hello@thrivegroup.ae</p>
              <div className="pt-2">
                <p>Monday–Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday–Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Office 2 */}
          <div>
            <div className="flex items-center gap-2 text-lg font-medium mb-6">
              <MapPin className="w-5 h-5" /> Abu Dhabi Office
            </div>
            <div className="space-y-4 text-sm text-black/80 border-l-2 border-black/10 pl-4">
              <p>Al Maryah Island, Abu Dhabi Global Market Square<br/>Abu Dhabi, UAE</p>
              <p>+971 2 987 6543</p>
              <p>ad@thrivegroup.ae</p>
              <div className="pt-2">
                <p>Monday–Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday–Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Office 3 */}
          <div>
            <div className="flex items-center gap-2 text-lg font-medium mb-6">
              <MapPin className="w-5 h-5" /> London Office
            </div>
            <div className="space-y-4 text-sm text-black/80 border-l-2 border-black/10 pl-4">
              <p>1 Canada Square, Canary Wharf<br/>London E14 5AB, UK</p>
              <p>+44 20 7123 4567</p>
              <p>uk@thrivegroup.ae</p>
              <div className="pt-2">
                <p>Monday–Friday: 9:00 AM – 5:30 PM</p>
                <p>Saturday–Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <p className="text-sm text-black/60 mb-4">Social Media:</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <a href="#" className="group relative bg-black text-white py-4 rounded-xl flex items-center justify-center hover:bg-black/80 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">LinkedIn</span>
          </a>
          <a href="#" className="group relative bg-black text-white py-4 rounded-xl flex items-center justify-center hover:bg-black/80 transition-colors">
            <Twitter className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Twitter</span>
          </a>
          <a href="#" className="group relative bg-black text-white py-4 rounded-xl flex items-center justify-center hover:bg-black/80 transition-colors">
            <Facebook className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Facebook</span>
          </a>
          <a href="#" className="group relative bg-black text-white py-4 rounded-xl flex items-center justify-center hover:bg-black/80 transition-colors">
            <Youtube className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">YouTube</span>
          </a>
          <a href="#" className="group relative bg-black text-white py-4 rounded-xl flex items-center justify-center hover:bg-black/80 transition-colors">
            <Instagram className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Instagram</span>
          </a>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[500px] bg-black/5">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178653926922!2d55.28001181500618!3d25.21646698388656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f428c89b2f211%3A0x6b4c107f9c2182b5!2sEmirates%20Towers!5e0!3m2!1sen!2sae!4v1625581234567!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 mb-6">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div> PAGES
              </div>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white/70 flex items-center justify-between group">Home <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">About us <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">Services <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">Insights <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">Careers <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">Contact <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 mb-6">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div> SERVICES
              </div>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white/70 flex items-center justify-between group">Company Formation <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">Visa & PRO Services <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">Corporate Tax <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">Accounting <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 mb-6">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div> JURISDICTIONS
              </div>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white/70 flex items-center justify-between group">Dubai Mainland <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">Free Zones <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">Offshore <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="border-t border-white/10 pt-4"><a href="#" className="hover:text-white/70 flex items-center justify-between group">Abu Dhabi <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-12">
            <h2 className="text-[12vw] md:text-[180px] font-bold leading-none tracking-tighter -ml-2 select-none">
              Thrive.
            </h2>
            
            <div className="w-full md:w-auto md:min-w-[400px]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div> GET FRESH UPDATES
              </div>
              <div className="flex p-1 bg-white rounded-full">
                <input type="email" placeholder="jane@thrivegroup.ae" className="flex-1 bg-transparent px-6 text-black outline-none" />
                <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black/80 transition-colors flex items-center gap-2">
                  SUBSCRIBE <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/50">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-white">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white">TERMS</a>
            </div>
            <p>© {new Date().getFullYear()} THRIVE GROUP. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
