"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-6 flex origin-bottom h-full max-h-14">
      {/* Enhanced backdrop blur */}
      <div className="fixed bottom-0 inset-x-0 h-20 w-full bg-gradient-to-t from-background/80 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)]"></div>
      
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-2 glass-card border-0 shadow-glass dark:shadow-glass-dark">
          {DATA.navbar.map((item) => {
            const isActive = pathname === item.href;
            return (
              <DockIcon key={item.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 relative transition-all duration-300 hover:scale-110",
                        isActive && "bg-primary/10 text-primary"
                      )}
                    >
                      <item.icon className="size-4" />
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-primary/10 rounded-md"
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="glass-card border-0">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
          
          <Separator orientation="vertical" className="h-8 mx-2 bg-border/50" />
          
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 transition-all duration-300 hover:scale-110 hover:text-primary"
                      )}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="glass-card border-0">
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          
          <Separator orientation="vertical" className="h-8 mx-2 bg-border/50" />
          
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="transition-all duration-300 hover:scale-110">
                  <ModeToggle />
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="glass-card border-0">
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </motion.div>
    </div>
  );
}
