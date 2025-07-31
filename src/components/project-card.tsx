"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  iconLists?: readonly string[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  iconLists,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        className={cn(
          "glass-card border-0 overflow-hidden hover:shadow-glow dark:hover:shadow-glow-dark transition-all duration-300 ease-out h-full group",
          className
        )}
      >
        {/* Media Section */}
        <div className="relative overflow-hidden">
          <Link
            href={href || "#"}
            className="block cursor-pointer"
          >
            {video && (
              <div className="relative h-48 overflow-hidden">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="pointer-events-none w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}
            {image && !video && (
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}
          </Link>
          
          {/* Overlay with external link icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full glass-card border-0 flex items-center justify-center">
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>

        <CardHeader className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <Badge variant="outline" className="text-xs">
                <Calendar className="w-3 h-3 mr-1" />
                {dates}
              </Badge>
            </div>
            
            <div className="prose prose-sm max-w-full text-muted-foreground dark:prose-invert">
              <Markdown>{description}</Markdown>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-4">
          {/* Tech Stack Icons */}
          {iconLists && iconLists.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-muted-foreground">Built with:</span>
              <div className="flex items-center -space-x-2">
                {iconLists.slice(0, 5).map((icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="relative w-8 h-8 rounded-full glass-card border-0 flex items-center justify-center"
                    style={{ zIndex: iconLists.length - index }}
                  >
                    <Image
                      src={icon}
                      alt="tech icon"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </motion.div>
                ))}
                {iconLists.length > 5 && (
                  <div className="w-8 h-8 rounded-full glass-card border-0 flex items-center justify-center text-xs font-medium">
                    +{iconLists.length - 5}
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0">
          {/* Action Links */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2 w-full">
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="outline"
                      className="flex items-center gap-2 px-3 py-1 text-xs hover:bg-primary/10 hover:border-primary/20 transition-colors"
                    >
                      {link.icon}
                      {link.type}
                    </Badge>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
