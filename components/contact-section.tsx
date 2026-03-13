"use client"

import { MapPin, Mail, Phone, Send, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TiltCard } from "@/components/tilt-card"
import { useState } from "react"

export function ContactSection() {
  const leftAnim = useScrollAnimation()
  const rightAnim = useScrollAnimation()
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 animate-morph blur-3xl" />
        <div className="absolute top-1/2 left-10 w-32 h-32 border border-primary/10 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/5 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div
            ref={leftAnim.ref}
            className={`flex flex-col gap-8 animate-fade-left ${leftAnim.isVisible ? "in-view" : ""}`}
          >
            <div className="border-l-4 border-primary pl-4">
              <span className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-2 block flex items-center gap-2">
                <Zap className="w-4 h-4" /> Contact
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold uppercase tracking-wider text-foreground">
                Get In <span className="text-primary neon-text">Touch</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Ready to build the impossible? Whether it is a bug that needs
              squashing or a new AI model that needs training, Gilgamesh
              Production is your partner in technological conquest.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { Icon: MapPin, title: "Location", value: "San Francisco, CA - Sector 7" },
                { Icon: Mail, title: "Email", value: "contact@gilgamesh.prod" },
                { Icon: Phone, title: "Phone", value: "+1 (555) 012-3456" },
              ].map((item, i) => (
                <TiltCard
                  key={item.title}
                  className={`animate-fade-up stagger-${i + 1} ${leftAnim.isVisible ? "in-view" : ""}`}
                >
                  <div
                    className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all duration-500 group cursor-pointer hover-lift"
                  >
                    <div className="w-14 h-14 flex items-center justify-center border border-primary bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <item.Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold text-sm uppercase tracking-wider group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Right form with 3D effect */}
          <TiltCard
            className={`animate-fade-right ${rightAnim.isVisible ? "in-view" : ""}`}
          >
            <div
              ref={rightAnim.ref}
              className="bg-card/50 backdrop-blur-sm p-8 lg:p-12 border border-border relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated background glow following focus */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{ 
                  background: focusedField ? `radial-gradient(circle at 50% 50%, rgba(var(--gold-rgb), 0.05) 0%, transparent 50%)` : "none",
                  opacity: focusedField ? 1 : 0
                }}
              />

              {/* Corner accents with animation */}
              <div className={`absolute top-0 left-0 border-t-2 border-l-2 border-primary transition-all duration-700 delay-300 ${rightAnim.isVisible ? "w-12 h-12" : "w-0 h-0"}`} />
              <div className={`absolute top-0 right-0 border-t-2 border-r-2 border-primary transition-all duration-700 delay-500 ${rightAnim.isVisible ? "w-12 h-12" : "w-0 h-0"}`} />
              <div className={`absolute bottom-0 left-0 border-b-2 border-l-2 border-primary transition-all duration-700 delay-700 ${rightAnim.isVisible ? "w-12 h-12" : "w-0 h-0"}`} />
              <div className={`absolute bottom-0 right-0 border-b-2 border-r-2 border-primary transition-all duration-700 delay-900 ${rightAnim.isVisible ? "w-12 h-12" : "w-0 h-0"}`} />

              <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-3xl font-display font-bold mb-2 text-center text-foreground uppercase tracking-wider">
                  Start Your Odyssey
                </h3>
                <p className="text-center text-muted-foreground mb-10 text-sm">
                  Reach out to begin your next project.
                </p>

                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5 relative">
                      <label
                        htmlFor="name"
                        className={`text-sm uppercase tracking-wider transition-colors duration-300 ${focusedField === 'name' ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 py-2 focus:pl-2"
                      />
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${focusedField === 'name' ? 'w-full' : 'w-0'}`} />
                    </div>
                    <div className="flex flex-col gap-1.5 relative">
                      <label
                        htmlFor="email"
                        className={`text-sm uppercase tracking-wider transition-colors duration-300 ${focusedField === 'email' ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 py-2 focus:pl-2"
                      />
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${focusedField === 'email' ? 'w-full' : 'w-0'}`} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 relative">
                    <label
                      htmlFor="service"
                      className={`text-sm uppercase tracking-wider transition-colors duration-300 ${focusedField === 'service' ? 'text-primary' : 'text-muted-foreground'}`}
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-border text-foreground focus:outline-none focus:border-primary transition-all duration-300 py-2 appearance-none cursor-pointer"
                    >
                      <option className="bg-card text-foreground">
                        Select Service Interest
                      </option>
                      <option className="bg-card text-foreground">
                        Web Development
                      </option>
                      <option className="bg-card text-foreground">
                        {"Bug Fixing / Maintenance"}
                      </option>
                      <option className="bg-card text-foreground">
                        AI Solutions
                      </option>
                      <option className="bg-card text-foreground">
                        3D Printing
                      </option>
                      <option className="bg-card text-foreground">Other</option>
                    </select>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${focusedField === 'service' ? 'w-full' : 'w-0'}`} />
                  </div>

                  <div className="flex flex-col gap-1.5 relative">
                    <label
                      htmlFor="message"
                      className={`text-sm uppercase tracking-wider transition-colors duration-300 ${focusedField === 'message' ? 'text-primary' : 'text-muted-foreground'}`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Your Message"
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 py-2 resize-none focus:pl-2"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${focusedField === 'message' ? 'w-full' : 'w-0'}`} />
                  </div>

                  <button
                    type="button"
                    className="group w-full relative overflow-hidden bg-primary text-primary-foreground py-4 px-4 font-bold uppercase tracking-[0.2em] font-display transition-all duration-500 shadow-[0_0_20px_rgba(var(--gold-rgb),0.3)] hover:shadow-[0_0_40px_rgba(var(--gold-rgb),0.6)] hover-lift ripple"
                  >
                    <span className="absolute inset-0 w-0 bg-gold-dark transition-all duration-500 ease-out group-hover:w-full" />
                    <span className="relative flex items-center justify-center gap-2">
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      Send Message
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
