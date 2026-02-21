"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutClinicAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(
        ["#about-image", "#about-text > *", ".feature-item"],
        { opacity: 0, y: 40 }
      );

      ScrollTrigger.matchMedia({
        "(max-width: 768px)": () => {
          gsap.timeline({
            scrollTrigger: {
              trigger: "#about-section",
              start: "top 90%",
              toggleActions: "play none none none",
            },
          })
            .to("#about-image", {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            })
            .to(
              "#about-text > *",
              {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
              },
              "-=0.5"
            )
            .to(
              ".feature-item",
              {
                y: 0,
                opacity: 1,
                stagger: 0.12,
                duration: 0.6,
                ease: "power2.out",
              },
              "-=0.4"
            );
        },

        "(min-width: 769px)": () => {
          gsap.timeline({
            scrollTrigger: {
              trigger: "#about-section",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          })
            .to("#about-image", {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power4.out",
            })
            .to(
              "#about-text > *",
              {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.9,
                ease: "power3.out",
              },
              "-=0.6"
            )
            .to(
              ".feature-item",
              {
                y: 0,
                opacity: 1,
                stagger: 0.12,
                duration: 0.7,
                ease: "power2.out",
              },
              "-=0.4"
            );
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
