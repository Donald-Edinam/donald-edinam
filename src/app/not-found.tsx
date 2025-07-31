"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, AlertTriangle, Mail, Code, BookOpen } from 'lucide-react';
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

const bounceAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function NotFound() {
  return (
    <div className="min-h-screen py-20 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* 404 Number */}
          <motion.div variants={staggerItem} className="mb-8">
            <motion.div
              className="text-8xl lg:text-9xl font-extrabold mb-4"
              variants={bounceAnimation}
            >
              <span className="bg-gradient-to-r from-primary via-gradient-via to-gradient-to bg-clip-text text-transparent">
                404
              </span>
            </motion.div>
          </motion.div>

          {/* Badge and Title */}
          <motion.div variants={staggerItem} className="mb-8">
            <Badge variant="secondary" className="mb-4 glass-card border-0">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Page Not Found
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Oops! This Page{" "}
              <span className="bg-gradient-to-r from-primary via-gradient-via to-gradient-to bg-clip-text text-transparent font-extrabold">
                Doesn't Exist
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The page you're looking for might have been moved, deleted, or you might have entered the wrong URL. 
              Don't worry, let's get you back on track!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={staggerItem} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-gradient shadow-xl">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Go Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="professional-card border-primary/20 hover:border-primary/40">
                <Link href="/projects" className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  View Projects
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="professional-card border-primary/20 hover:border-primary/40">
                <Link href="/contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Helpful Links Card */}
          <motion.div variants={staggerItem}>
            <Card className="professional-card p-8 max-w-2xl mx-auto hover:shadow-glow dark:hover:shadow-glow-dark transition-all">
              <h2 className="text-2xl font-bold mb-6">Popular Pages</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg border border-border hover:border-primary/40 transition-all"
                >
                  <Link href="/about" className="block">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Home className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">About Me</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Learn about my journey, experience, and skills
                    </p>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg border border-border hover:border-primary/40 transition-all"
                >
                  <Link href="/projects" className="block">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">Projects</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Explore my latest work and side projects
                    </p>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg border border-border hover:border-primary/40 transition-all"
                >
                  <Link href="/blog" className="block">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">Blog</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Read my thoughts on web development and tech
                    </p>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg border border-border hover:border-primary/40 transition-all"
                >
                  <Link href="/contact" className="block">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">Contact</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get in touch for collaborations and opportunities
                    </p>
                  </Link>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
