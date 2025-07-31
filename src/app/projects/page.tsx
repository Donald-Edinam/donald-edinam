"use client";

import { HoverEffect } from '@/components/contributions-card';
import { ProjectCard } from '@/components/project-card';
import Image from 'next/image';
import { DATA } from '@/data';
import type { Metadata } from 'next';
import Markdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Trophy, Code, GitBranch } from 'lucide-react';

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

export default function ProjectsPage() {
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
              <Code className="w-4 h-4 mr-2" />
              My Work
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {DATA.projectssummary}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
          >
            {DATA.projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  iconLists={project.iconLists}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Open Source Contributions */}
      <motion.section 
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 glass-card border-0">
              <GitBranch className="w-4 h-4 mr-2" />
              Open Source
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Community Contributions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {DATA.contributionssummary}
            </p>
          </div>
          
          <HoverEffect items={DATA.contributions} />
        </div>
      </motion.section>

      {/* Hackathons Section */}
      {DATA.hackathons.length > 0 && (
        <motion.section 
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 glass-card border-0">
                <Trophy className="w-4 h-4 mr-2" />
                Achievements
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Hackathons & Awards
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {DATA.hackathonsummary}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {DATA.hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="glass-card border-0 p-8 hover:shadow-glow dark:hover:shadow-glow-dark transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Logo */}
                      {hackathon.logo && (
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-2xl bg-primary/10 p-2 flex items-center justify-center">
                            <Image
                              src={hackathon.logo}
                              alt={hackathon.title}
                              width={64}
                              height={64}
                              className="w-16 h-16 rounded-xl object-cover"
                            />
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {hackathon.dates}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {hackathon.location}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">{hackathon.title}</h3>
                        
                        <div className="prose prose-neutral dark:prose-invert mb-6">
                          <Markdown>{hackathon.description}</Markdown>
                        </div>

                        {/* Image */}
                        {hackathon.images && (
                          <div className="relative h-48 rounded-xl overflow-hidden">
                            <Image
                              src={hackathon.images}
                              alt={hackathon.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <Card className="glass-card border-0 p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Interested in collaborating?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Badge className="btn-gradient px-6 py-3 text-base cursor-pointer">
                  Let's Work Together
                </Badge>
              </motion.div>
            </div>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}