"use client";

import { DATA } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

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

// Timeline Item Component
const TimelineItem = ({ item, index, type }: { item: any, index: number, type: 'work' | 'education' }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={isEven ? slideInLeft : slideInRight}
    >
      {/* Content Card */}
      <div className="flex-1">
        <Card className="professional-card p-6 hover:shadow-glow dark:hover:shadow-glow-dark transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Image
                src={item.logoUrl}
                alt={type === 'work' ? item.company : item.school}
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {item.start} - {item.end}
                </Badge>
                {type === 'work' && (
                  <Badge variant="outline" className="text-xs">
                    <Briefcase className="w-3 h-3 mr-1" />
                    Work
                  </Badge>
                )}
                {type === 'education' && (
                  <Badge variant="outline" className="text-xs">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    Education
                  </Badge>
                )}
              </div>
              
              <h3 className="font-semibold text-lg mb-1">
                {type === 'work' ? item.title : item.degree}
              </h3>
              
              <p className="text-primary font-medium mb-3">
                {type === 'work' ? item.company : item.school}
              </p>
              
              {item.description && (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
              
              {item.href && (
                <Link 
                  href={item.href}
                  className="inline-flex items-center gap-1 text-primary hover:underline text-sm mt-2"
                >
                  Visit Website
                  <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        </Card>
      </div>
      
      {/* Timeline Dot */}
      <div className="relative flex-shrink-0">
        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
        {index < (type === 'work' ? DATA.work.length - 1 : DATA.education.length - 1) && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-border" />
        )}
      </div>
      
      {/* Spacer for opposite side */}
      <div className="flex-1" />
    </motion.div>
  );
};

export default function AboutPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={staggerItem} className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4 glass-card border-0">
                  <Award className="w-4 h-4 mr-2" />
                  About Me
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Crafting Digital{" "}
                  <span className="bg-gradient-to-r from-primary via-gradient-via to-gradient-to bg-clip-text text-transparent font-extrabold">
                    Experiences
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {DATA.summary}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="btn-gradient shadow-xl">
                  <Link href="/Mudunuribhaskarakarthikeyavarma-Resume.pdf" className="flex items-center gap-2">
                    Download CV
                    <Download className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="professional-card border-primary/20 hover:border-primary/40">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Right Content - Image Gallery */}
            <motion.div variants={staggerItem} className="relative">
              <div className="grid grid-cols-2 gap-4">
                {DATA.images.slice(0, 4).map((image, index) => (
                  <motion.div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl ${
                      index === 0 ? 'col-span-2 h-48' : 'h-32'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image.href}
                      alt={image.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                      {image.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Work Experience Timeline */}
      <motion.section 
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {DATA.worksummary}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {DATA.work.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} type="work" />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Timeline */}
      <motion.section 
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {DATA.educationsummary}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {DATA.education.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} type="education" />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {DATA.certificationssummary}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DATA.certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.02 }}
                className="professional-card p-6 hover:shadow-glow dark:hover:shadow-glow-dark transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={cert.logoUrl}
                      alt={cert.organization}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        Certificate
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-1">
                      {cert.title}
                    </h3>
                    
                    <p className="text-primary font-medium mb-3">
                      {cert.organization}
                    </p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {DATA.skillsdescription}
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={staggerContainer}
          >
            {DATA.Skills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="professional-card p-4 text-center group hover:shadow-glow dark:hover:shadow-glow-dark transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-3 p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Image
                    src={skill.href}
                    alt={skill.title}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium">{skill.title}</p>
              </motion.div>
            ))}
          </motion.div>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Hackathons & Awards</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {DATA.hackathonsummary}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DATA.hackathons.map((hackathon) => (
                <motion.div
                  key={hackathon.id}
                  whileHover={{ scale: 1.02 }}
                  className="professional-card p-6 hover:shadow-glow dark:hover:shadow-glow-dark transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={hackathon.logo}
                      alt={hackathon.title}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{hackathon.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {hackathon.dates}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {hackathon.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {hackathon.description}
                  </p>
                  
                  {hackathon.images && (
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src={hackathon.images}
                        alt={hackathon.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
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
          <Card className="professional-card p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate with talented individuals.
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-gradient shadow-xl">
                <Link href="/contact">Start a Project</Link>
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
