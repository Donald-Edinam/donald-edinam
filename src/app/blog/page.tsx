"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Bell, ArrowRight } from "lucide-react";

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

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function BlogPage() {
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
          <motion.div variants={staggerItem} className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 glass-card border-0">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-primary via-gradient-via to-gradient-to bg-clip-text text-transparent font-extrabold">
                Thoughts
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights on software development, technology trends, and lessons learned along the way.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Coming Soon Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerItem}
            className="text-center"
          >
            <Card className="professional-card p-12 max-w-2xl mx-auto hover:shadow-glow dark:hover:shadow-glow-dark transition-all">
              <motion.div
                className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                variants={pulseAnimation}
              >
                <Clock className="w-10 h-10 text-primary" />
              </motion.div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Coming{" "}
                <span className="bg-gradient-to-r from-primary via-gradient-via to-gradient-to bg-clip-text text-transparent font-extrabold">
                  Soon
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I&apos;m currently working on creating valuable content about web development,
                frontend technologies, and my journey as a software engineer. 
                Stay tuned for insightful articles and tutorials!
              </p>

              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <Badge variant="secondary" className="glass-card border-0">
                  <Bell className="w-4 h-4 mr-2" />
                  In Development
                </Badge>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="btn-gradient shadow-xl">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Notified
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="professional-card border-primary/20 hover:border-primary/40">
                  <Link href="/projects" className="flex items-center gap-2">
                    View My Work
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* What to Expect Section */}
      <motion.section 
        className="mt-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What to Expect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here&apos;s what I&apos;ll be sharing once the blog is live
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              className="professional-card p-6 text-center hover:shadow-glow dark:hover:shadow-glow-dark transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 p-3 bg-primary/10 rounded-xl">
                <BookOpen className="w-full h-full text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Tutorials</h3>
              <p className="text-muted-foreground text-sm">
                Step-by-step guides on React, Next.js, and modern web development
              </p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              className="professional-card p-6 text-center hover:shadow-glow dark:hover:shadow-glow-dark transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 p-3 bg-primary/10 rounded-xl">
                <Clock className="w-full h-full text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Journey</h3>
              <p className="text-muted-foreground text-sm">
                My experiences, challenges, and lessons learned as a developer
              </p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              className="professional-card p-6 text-center hover:shadow-glow dark:hover:shadow-glow-dark transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 p-3 bg-primary/10 rounded-xl">
                <Bell className="w-full h-full text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Tech Insights</h3>
              <p className="text-muted-foreground text-sm">
                Latest trends, tools, and best practices in frontend development
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
