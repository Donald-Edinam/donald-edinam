"use client";

import { DATA } from '@/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <motion.section 
        className="mb-20"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div variants={staggerItem}>
              <Badge variant="secondary" className="mb-4 glass-card border-0">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-primary via-gradient-via to-gradient-to bg-clip-text text-transparent font-extrabold">
                  Amazing Together
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I&apos;m always excited to work on new projects and collaborate with talented individuals.
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello,
                I&apos;d love to hear from you.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <motion.section 
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="professional-card p-6 text-center hover:shadow-glow dark:hover:shadow-glow-dark transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 p-3 bg-primary/10 rounded-xl">
                <Mail className="w-full h-full text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Send me an email and I&apos;ll get back to you as soon as possible.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Link href="mailto:donaldedinam@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Send Email
                </Link>
              </Button>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="professional-card p-6 text-center hover:shadow-glow dark:hover:shadow-glow-dark transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 p-3 bg-primary/10 rounded-xl">
                <User className="w-full h-full text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with me on LinkedIn for professional networking.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Link href={DATA.contact.social.LinkedIn.url} target="_blank" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Connect
                </Link>
              </Button>
            </motion.div>

            {/* GitHub */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="professional-card p-6 text-center hover:shadow-glow dark:hover:shadow-glow-dark transition-all md:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 p-3 bg-primary/10 rounded-xl">
                <MessageSquare className="w-full h-full text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">GitHub</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out my projects and contributions on GitHub.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Link href={DATA.contact.social.GitHub.url} target="_blank" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  View Profile
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Send Me a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>
            </div>
            
            <Card className="professional-card p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project, idea, or just say hello..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full btn-gradient shadow-xl">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Availability Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <Card className="professional-card p-12 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <Badge variant="secondary" className="glass-card border-0">
                <Calendar className="w-4 h-4 mr-2" />
                Available for Projects
              </Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m currently available for freelance work and new opportunities.
              Let&apos;s discuss how we can bring your ideas to life with modern web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-gradient shadow-xl">
                <Link href="mailto:donaldedinam@gmail.com">Start a Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="professional-card border-primary/20 hover:border-primary/40">
                <Link href="/projects">View My Work</Link>
              </Button>
            </div>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}