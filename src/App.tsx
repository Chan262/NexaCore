import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Server, Cloud, Code, Wifi, Video, Cpu, Database, Briefcase,
  CheckCircle, ChevronDown, Phone, Mail, MapPin, Menu, X, ArrowRight,
  Star, Quote, MessageCircle, ArrowUp, Clock, Users, Zap, Lock,
  Globe, LayoutDashboard, MonitorSmartphone, Headset
} from 'lucide-react';

// --- Reusable Animation Wrapper ---
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-brand-primary/95 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-accent p-2 rounded-lg">
              <Server className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>
              NexaCore
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-brand-accent ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-brand-accent hover:bg-sky-400 text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-lg shadow-brand-accent/20">
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isScrolled ? 'text-brand-primary' : 'text-white'}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-accent hover:bg-slate-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 mt-4 text-center text-base font-medium text-white bg-brand-accent rounded-md"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-primary">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/90 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/50 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Enterprise-Grade IT Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Reliable ICT Solutions That Keep Your Business <span className="text-brand-accent">Connected, Protected, and Growing.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              We provide comprehensive technology services, infrastructure, and managed support for businesses, schools, and government institutions across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-brand-accent hover:bg-sky-400 text-white px-8 py-4 rounded-md font-semibold transition-all shadow-lg shadow-brand-accent/25 hover:-translate-y-0.5">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#pricing" className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-semibold transition-all backdrop-blur-sm">
                View Packages
              </a>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:gap-8 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-accent" /> Fast Support</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-accent" /> Certified Techs</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-accent" /> Secure Solutions</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" 
                alt="IT Professionals working" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-2xl">99.9%</p>
                  <p className="text-brand-accent text-sm font-medium">Uptime Guarantee</p>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div>
                  <p className="text-white font-bold text-2xl">24/7</p>
                  <p className="text-brand-accent text-sm font-medium">Monitoring</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, value: "100+", label: "Businesses Supported" },
    { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Technical Assistance" },
    { icon: <Wifi className="w-6 h-6" />, value: "99.9%", label: "Network Reliability Goal" },
    { icon: <Cpu className="w-6 h-6" />, value: "100%", label: "Custom Solutions" },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10 relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-xl shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((stat, index) => (
          <FadeIn key={index} delay={index * 0.1} className="flex flex-col items-center text-center">
            <div className="text-brand-accent mb-3 bg-slate-50 p-3 rounded-full">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-brand-primary mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-accent/10 rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                alt="NexaCore Team" 
                className="relative rounded-2xl shadow-xl object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <Shield className="w-8 h-8 text-brand-accent" />
                  <h4 className="font-bold text-lg">Our Mission</h4>
                </div>
                <p className="text-sm text-slate-300">To empower organizations with secure, scalable, and reliable technology infrastructure.</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">About NexaCore</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 leading-tight">
              Your Trusted Partner in Digital Transformation & IT Infrastructure
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              At NexaCore ICT Solutions, we don't just fix computers—we build resilient technology ecosystems. We understand that downtime costs money and security breaches destroy reputations.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our commitment is to provide proactive, reliable, and long-term support to small and medium businesses, schools, and government institutions. We handle the technology so you can focus on your core operations.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Proactive monitoring to prevent issues before they occur",
                "Strategic IT consulting aligned with your business goals",
                "Uncompromising approach to data security and privacy"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-accent shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-md font-semibold transition-colors">
              Talk to Our Team
              <ArrowRight className="w-5 h-5" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Headset className="w-8 h-8" />,
      title: "Managed IT Support",
      desc: "Comprehensive outsourced IT department for your business.",
      bullets: ["24/7 Helpdesk Support", "Remote & Onsite Assistance", "Proactive Maintenance"]
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Network Setup & Maintenance",
      desc: "Robust, high-speed networking solutions for seamless connectivity.",
      bullets: ["LAN/WAN Design", "Wi-Fi Optimization", "Structured Cabling"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Solutions",
      desc: "Enterprise-grade protection against modern digital threats.",
      bullets: ["Firewall Management", "Endpoint Protection", "Security Audits"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Microsoft 365",
      desc: "Secure cloud migrations and collaborative workspace setups.",
      bullets: ["Email Hosting & Migration", "SharePoint Setup", "Cloud Server Hosting"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website & Systems Dev",
      desc: "Custom digital solutions to streamline your operations.",
      bullets: ["Corporate Websites", "Web Applications", "System Integrations"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "CCTV & Access Control",
      desc: "Physical security systems integrated with your IT network.",
      bullets: ["IP Camera Systems", "Biometric Access", "Remote Monitoring Setup"]
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Hardware & Software",
      desc: "Procurement and licensing of top-tier technology products.",
      bullets: ["Laptops & Workstations", "Server Hardware", "Software Licensing"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backup & Disaster Recovery",
      desc: "Ensure business continuity with automated data protection.",
      bullets: ["Automated Cloud Backups", "Disaster Recovery Planning", "Data Restoration"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "ICT Consulting",
      desc: "Strategic guidance to align technology with business goals.",
      bullets: ["IT Strategy Roadmaps", "Infrastructure Audits", "Digital Transformation"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">Comprehensive ICT Services</h3>
          <p className="text-slate-600 text-lg">
            End-to-end technology solutions designed to optimize operations, secure your data, and drive your organization forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-brand-bg border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 group h-full flex flex-col">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-primary group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 flex-grow">{service.desc}</p>
                <ul className="space-y-2 mb-8">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center gap-2 text-brand-primary font-semibold group-hover:text-brand-accent transition-colors mt-auto">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Zap />, title: "Fast Response Times", desc: "We understand that downtime is costly. Our team responds swiftly to critical issues." },
    { icon: <LayoutDashboard />, title: "Tailored Solutions", desc: "No cookie-cutter approaches. We design systems specifically for your operational needs." },
    { icon: <Users />, title: "Experienced Team", desc: "Certified professionals with years of hands-on experience across diverse IT environments." },
    { icon: <Shield />, title: "Security-First Mindset", desc: "Security isn't an afterthought; it's built into every solution we deploy." },
    { icon: <Server />, title: "Scalable Systems", desc: "Infrastructure designed to grow seamlessly alongside your business expansion." },
    { icon: <CheckCircle />, title: "Preventative Approach", desc: "We monitor and maintain systems to fix problems before they impact your workflow." },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <FadeIn>
              <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">The NexaCore Advantage</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Us?</h3>
              <p className="text-slate-300 mb-8 text-lg">
                We don't just act as a vendor; we become your dedicated technology partner, invested in your success and security.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-brand-accent hover:bg-sky-400 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Discover the Difference
              </a>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-brand-secondary/40 border border-white/10 p-6 rounded-xl hover:bg-brand-secondary/60 transition-colors h-full">
                  <div className="text-brand-accent mb-4 bg-white/5 inline-block p-3 rounded-lg">
                    {reason.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: "Schools & Education", desc: "Secure networks, lab setups, and e-learning infrastructure." },
    { name: "SMEs", desc: "Cost-effective, scalable IT support for growing businesses." },
    { name: "Healthcare Practices", desc: "POPIA compliant data handling and reliable clinic systems." },
    { name: "Legal & Financial", desc: "Ultra-secure document management and communication setups." },
    { name: "Retail Businesses", desc: "POS network stability and multi-branch connectivity." },
    { name: "Public Sector", desc: "Robust infrastructure for government and municipal offices." },
  ];

  return (
    <section id="industries" className="py-20 lg:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Sectors We Empower</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">Industries We Serve</h3>
          <p className="text-slate-600 text-lg">
            Technology requirements vary by industry. We deliver specialized ICT solutions tailored to the unique regulatory and operational demands of your sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="mt-1 bg-brand-bg p-2 rounded text-brand-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary text-lg mb-1">{ind.name}</h4>
                  <p className="text-slate-500 text-sm">{ind.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Consultation", desc: "We discuss your current challenges, goals, and technology requirements." },
    { num: "02", title: "Assessment", desc: "Our engineers audit your existing infrastructure to identify gaps and risks." },
    { num: "03", title: "Solution Design", desc: "We architect a tailored, scalable, and secure ICT strategy for your business." },
    { num: "04", title: "Implementation", desc: "Seamless deployment with minimal disruption to your daily operations." },
    { num: "05", title: "Support & Optimization", desc: "Ongoing monitoring, maintenance, and continuous improvement." },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">How We Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">Our Proven Process</h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1} className="relative">
                <div className="bg-white border-2 border-brand-bg rounded-xl p-6 text-center hover:border-brand-accent transition-colors h-full flex flex-col items-center">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-brand-primary/20">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-brand-primary mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      client: "Regional Logistics Firm",
      challenge: "Frequent network downtime causing dispatch delays and data loss.",
      solution: "Implemented SD-WAN, upgraded core switches, and deployed automated cloud backups.",
      outcome: "99.9% uptime achieved, reducing operational delays by 85%."
    },
    {
      client: "Private High School",
      challenge: "Outdated Wi-Fi unable to support 500+ student devices securely.",
      solution: "Deployed enterprise-grade Wi-Fi 6 access points with strict content filtering and VLAN segregation.",
      outcome: "Seamless campus-wide connectivity with zero security breaches."
    },
    {
      client: "Financial Services SME",
      challenge: "Lacked compliance with data protection regulations and faced phishing threats.",
      solution: "Migrated to secure Microsoft 365, implemented 2FA, and conducted staff security training.",
      outcome: "Achieved full POPIA compliance and blocked 100% of simulated phishing attacks."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Proven Results</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-primary">Client Success Stories</h3>
          </div>
          <a href="#contact" className="text-brand-primary font-semibold hover:text-brand-accent flex items-center gap-2 transition-colors">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((cs, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 h-full flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">Client Type</div>
                  <h4 className="text-xl font-bold text-brand-primary mb-6">{cs.client}</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-bold text-slate-700 block mb-1">Challenge:</span>
                      <p className="text-sm text-slate-600">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-700 block mb-1">Solution:</span>
                      <p className="text-sm text-slate-600">{cs.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-primary p-6 mt-auto">
                  <span className="text-xs font-bold tracking-wider text-brand-accent uppercase block mb-1">Measurable Outcome</span>
                  <p className="text-white font-medium">{cs.outcome}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "David M.",
      role: "Operations Director",
      company: "Apex Manufacturing",
      text: "NexaCore completely transformed our IT infrastructure. Their proactive monitoring means we rarely have issues, and when we do, their response time is incredible."
    },
    {
      name: "Sarah T.",
      role: "School Principal",
      company: "Horizon Academy",
      text: "Setting up a secure network for hundreds of students was daunting. NexaCore handled everything professionally, ensuring our students are safe online while maintaining fast speeds."
    },
    {
      name: "Michael B.",
      role: "Managing Partner",
      company: "B&B Legal Associates",
      text: "As a law firm, data security is non-negotiable. NexaCore's cybersecurity solutions and cloud migration gave us peace of mind and modernized how our team collaborates."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">What Our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-brand-bg p-8 rounded-xl border border-slate-100 relative h-full flex flex-col">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-accent/20" />
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-8 flex-grow">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-brand-primary">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}, {review.company}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Essential Support",
      price: "R 2,999",
      period: "/ month",
      desc: "Perfect for small businesses needing reliable, reactive IT support.",
      ideal: "Ideal for: 1-10 Users",
      features: [
        "Remote Helpdesk Support (8am - 5pm)",
        "Basic Antivirus & Endpoint Protection",
        "Microsoft 365 Basic Management",
        "Monthly System Health Check",
        "Standard SLA Response Time"
      ],
      recommended: false
    },
    {
      name: "Business Growth",
      price: "R 7,499",
      period: "/ month",
      desc: "Comprehensive proactive management for growing organizations.",
      ideal: "Ideal for: 11-30 Users",
      features: [
        "Unlimited Remote & Onsite Support",
        "Advanced Cybersecurity Suite",
        "Automated Cloud Backups (1TB)",
        "24/7 Network Monitoring",
        "Priority SLA Response Time",
        "Quarterly IT Strategy Review"
      ],
      recommended: true
    },
    {
      name: "Enterprise Care",
      price: "Custom Quote",
      period: "",
      desc: "Tailored infrastructure management for complex environments.",
      ideal: "Ideal for: 30+ Users / Schools",
      features: [
        "Dedicated Account Manager",
        "Full Infrastructure Management",
        "Disaster Recovery Implementation",
        "Compliance & Security Auditing",
        "Custom Server & Network Architecture",
        "24/7/365 Emergency Support"
      ],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Service Packages</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Transparent, Value-Driven Pricing</h3>
          <p className="text-slate-300 text-lg">
            Choose a support plan that aligns with your business size and operational requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className={`rounded-2xl p-8 h-full flex flex-col relative ${plan.recommended ? 'bg-white text-slate-900 shadow-2xl scale-105 z-10' : 'bg-brand-secondary/40 border border-white/10'}`}>
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                    Recommended
                  </div>
                )}
                
                <h4 className={`text-xl font-bold mb-2 ${plan.recommended ? 'text-brand-primary' : 'text-white'}`}>{plan.name}</h4>
                <p className={`text-sm mb-6 ${plan.recommended ? 'text-slate-500' : 'text-slate-400'}`}>{plan.desc}</p>
                
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.recommended ? 'text-brand-primary' : 'text-white'}`}>{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.recommended ? 'text-slate-500' : 'text-slate-400'}`}>{plan.period}</span>
                </div>
                
                <div className={`text-sm font-bold mb-6 pb-6 border-b ${plan.recommended ? 'text-brand-accent border-slate-100' : 'text-brand-accent border-white/10'}`}>
                  {plan.ideal}
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 shrink-0 ${plan.recommended ? 'text-brand-accent' : 'text-brand-accent'}`} />
                      <span className={`text-sm ${plan.recommended ? 'text-slate-700' : 'text-slate-300'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className={`block text-center py-3 rounded-md font-bold transition-colors ${plan.recommended ? 'bg-brand-primary text-white hover:bg-brand-secondary' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}`}>
                  {plan.price === "Custom Quote" ? "Request Quote" : "Get Started"}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "What types of businesses do you support?",
      a: "We support a wide range of organizations including SMEs, corporate offices, schools, healthcare practices, legal firms, and government institutions across South Africa."
    },
    {
      q: "Do you offer remote and onsite support?",
      a: "Yes, we provide both. Many issues can be resolved instantly via our secure remote helpdesk, but we also dispatch technicians onsite for hardware issues, network installations, and critical failures."
    },
    {
      q: "How fast is your response time?",
      a: "Our response times depend on your SLA (Service Level Agreement). Critical issues for contracted clients are typically addressed within 15-30 minutes, ensuring minimal downtime."
    },
    {
      q: "Can you help with cybersecurity and POPIA compliance?",
      a: "Absolutely. We implement robust firewalls, endpoint protection, automated backups, and access controls to secure your data and ensure you meet POPIA regulatory requirements."
    },
    {
      q: "Do you provide once-off services or monthly support plans?",
      a: "We offer both. While we highly recommend our proactive monthly managed IT plans for ongoing stability, we also handle once-off projects like server migrations, network cabling, or CCTV installations."
    },
    {
      q: "Do you help with hardware and software procurement?",
      a: "Yes, we supply top-tier laptops, desktops, servers, networking gear, and software licenses (like Microsoft 365 and antivirus) at competitive business rates."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-primary">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all hover:border-brand-accent/50">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-brand-primary pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-accent transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-bg -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <FadeIn>
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">Ready to Upgrade Your IT Infrastructure?</h3>
            <p className="text-slate-600 mb-10 text-lg">
              Contact NexaCore ICT Solutions today for a free consultation or to request a custom quote for your business.
            </p>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-brand-bg p-3 rounded-lg text-brand-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary mb-1">Call Us Directly</h4>
                  <a href="tel:0662993548" className="text-slate-600 hover:text-brand-accent transition-colors text-lg">066 299 3548</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-bg p-3 rounded-lg text-brand-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary mb-1">Email Our Team</h4>
                  <a href="mailto:teamnexacoreictsolutions@gmail.com" className="text-slate-600 hover:text-brand-accent transition-colors text-lg">teamnexacoreictsolutions@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-bg p-3 rounded-lg text-brand-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary mb-1">Office Location</h4>
                  <p className="text-slate-600">12 Perth Avenue<br/>Bryanston, South Africa</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-slate-200 rounded-xl overflow-hidden relative border border-slate-300">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-500">
                <MapPin className="w-8 h-8 mb-2 opacity-50" />
                <span className="text-sm font-medium">Interactive Map Area</span>
              </div>
            </div>
          </FadeIn>

          {/* Lead Capture Form */}
          <FadeIn delay={0.2}>
            <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8 lg:p-10">
              <h4 className="text-2xl font-bold text-brand-primary mb-6">Request a Quote</h4>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Your Business" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="082 123 4567" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-slate-50 focus:bg-white text-slate-700">
                    <option>Managed IT Support</option>
                    <option>Network Setup</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Services</option>
                    <option>Hardware/Software Quote</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">How can we help? *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Describe your IT needs or challenges..." required></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                  Request My Quote <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">We respect your privacy. Your details are secure.</p>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#051024] text-slate-300 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-accent p-1.5 rounded-lg">
                <Server className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                NexaCore
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Professional ICT solutions company providing enterprise-grade technology services, infrastructure, and managed support for South African businesses.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-brand-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#pricing" className="hover:text-brand-accent transition-colors">Pricing & Packages</a></li>
              <li><a href="#faq" className="hover:text-brand-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Core Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Managed IT Support</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Cloud & Microsoft 365</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Network Setup</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Backup & Recovery</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for IT tips and security alerts.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 w-full text-sm outline-none focus:border-brand-accent text-white"
                required
              />
              <button type="submit" className="bg-brand-accent hover:bg-sky-400 text-white px-4 py-2 rounded-r-md transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} NexaCore ICT Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingElements = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/27662993548" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      
      {/* Scroll to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}
