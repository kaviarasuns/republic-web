"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const platformComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Routers and Switches",
    href: "/product-platforms/Routers-and-Switches",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "IOT - Mesh",
    href: "/product-platforms/IOT-Mesh",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Data Center",
    href: "/product-platforms/Data-Center",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "RF Generator for Plasma",
    href: "/product-platforms/RF-Generator-for-Plasma",
    description: "Visually or semantically separates content.",
  },
];

const caseStudies: { title: string; href: string; description: string }[] = [
  {
    title: "Product Engineering",
    href: "/case-studies/Product Engineering",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "PCB Design",
    href: "/PCB-Design-Case-study",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Embedded HW Designs",
    href: "/Embedded-Case-study",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export default function SideNavMobile() {
  return (
    <NavigationMenu className="ml-8 mt-10">
      <NavigationMenuList className="flex flex-col">
        <NavigationMenuItem>
          <a href="/political-parties">POLITICAL PARTIES</a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger style={{ textDecoration: "none" }}>
                CANDIDATES
              </AccordionTrigger>
              <div className="pl-5">
                {platformComponents.map((component, index) => {
                  return (
                    <a key={index} href={component.href}>
                      <AccordionContent>{component.title}</AccordionContent>
                    </a>
                  );
                })}
              </div>
            </AccordionItem>
          </Accordion>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger
                style={{
                  color: "#ec6a01",
                  fontWeight: "800",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                CONTACT
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-5 flex flex-col  justify-around align-center">
                  <div className="flex flex-row gap-3 align-center">
                    <FaPhoneAlt />
                    <a href="tel:+919994483473">+91 9994483473</a>
                  </div>
                  <div className="flex flex-row gap-3 align-center">
                    <IoMdMail />
                    <a href="mailto:kaviarasu_ns@icloud.com">
                      kaviarasu_ns@icloud.com
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
