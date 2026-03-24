import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AccordionProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export const Accordion = ({ children, className, value, onValueChange }: AccordionProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { 
            activeValue: value, 
            onValueChange 
          });
        }
        return child;
      })}
    </div>
  );
};

export const AccordionItem = ({ value, children, className, activeValue, onValueChange }: any) => {
  const isOpen = activeValue === value;

  return (
    <div className={cn("border-b border-gray-200", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { 
            isOpen, 
            onClick: () => onValueChange?.(isOpen ? "" : value) 
          });
        }
        return child;
      })}
    </div>
  );
};

export const AccordionTrigger = ({ children, className, isOpen, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
};

export const AccordionContent = ({ children, className, isOpen }: any) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
