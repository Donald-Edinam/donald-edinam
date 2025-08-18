"use client";

import { DATA } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
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

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1,
    x: 0,
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

// Animated blob component
const AnimatedBlob = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
    <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBlob />

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-4rem)]">
            {/* Left Content */}
            <motion.div
              className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                <Badge variant="secondary" className="mb-3 sm:mb-4 glass-card border-0 text-xs sm:text-sm px-3 py-1">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="hidden sm:inline">Let&apos;s build something great together</span>
                    <span className="sm:hidden">Let&apos;s build together</span>
                  </span>center
                </Badge>
              </motion.div>

              <motion.div variants={staggerItem} className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent leading-tight">
                  I&apos;m, {" "}
                  <span className="bg-clip-text text-transparent font-extrabold block sm:inline">
                    {DATA.name}
                  </span>
                  <motion.span
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                    className="inline-block ml-2 text-primary"
                  >
                    👋
                  </motion.span>
                </h1>

                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-medium">
                  I build{" "}
                  <span className="bg-gradient-to-r from-primary to-gradient-via bg-clip-text text-transparent font-bold">
                    modern web experiences
                  </span>
                </h2>
              </motion.div>

              <motion.p
                variants={staggerItem}
                className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 px-2 sm:px-0"
              >
                {DATA.description}
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 px-2 sm:px-0"
              >
                <Button size="lg" className="btn-gradient to-accent py-3 sm:py-5 from-primary group shadow-xl w-full sm:w-auto text-sm sm:text-base">
                  <Link href="/contact" className="flex items-center gap-2">
                    Let&apos;s Connect
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" className="professional-card group border-primary/20 hover:border-primary/40 w-full sm:w-auto py-3 sm:py-5 text-sm sm:text-base">
                  <Link href="/projects" className="flex items-center gap-2">
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <Link
                  href={DATA.contact.social.GitHub.url}
                  className="p-2 sm:p-3 glass-card border-0 hover:scale-110 transition-transform"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="p-2 sm:p-3 glass-card border-0 hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="mailto:contact@donaldedinam.me"
                  className="p-2 sm:p-3 glass-card border-0 hover:scale-110 transition-transform"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              className="relative order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0"
              initial="initial"
              animate="animate"
              variants={fadeInRight}
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-gradient-via to-gradient-to rounded-full animate-pulse-glow shadow-2xl" />
                <div className="absolute inset-2 bg-background rounded-full overflow-hidden">
                  <Image
                    src={DATA.images[1].href}
                    alt={DATA.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 glass-card p-1 sm:p-2 md:p-3 border-0"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-green-500 rounded-full" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4 glass-card p-2 sm:p-3 md:p-4 border-0"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <motion.section
        className="py-12 sm:py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <motion.div variants={staggerItem}>
              <Card className="glass-card border-0 text-center">
                <div className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm sm:text-base text-muted-foreground">Years Experience</div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="glass-card border-0 text-center">
                <div className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm sm:text-base text-muted-foreground">Projects Completed</div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="glass-card border-0 text-center">
                <div className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm sm:text-base text-muted-foreground">Client Satisfaction</div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Skills */}
      <motion.section
        className="py-12 sm:py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Technologies I Love
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              {DATA.skillsdescription}
            </p>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            variants={staggerContainer}
          >
            {DATA.Skills.slice(0, 8).map((skill) => (
              <motion.div
                key={skill.id}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                className="glass-card border-0 p-3 sm:p-4 flex items-center gap-2 sm:gap-3 hover:shadow-glow dark:hover:shadow-glow-dark transition-all"
              >
                <Image
                  src={skill.href}
                  alt={skill.title}
                  width={20}
                  height={20}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="font-medium text-sm sm:text-base">{skill.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-12 sm:py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="glass-card border-0 p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to work together?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              {DATA.footer}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button size="lg" className="btn-gradient w-full sm:w-auto">
                <Link href="/contact" className="flex items-center gap-2">
                  Get In Touch
                  <Mail className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}
