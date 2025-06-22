// hooks/useAutoRouteScroll.ts

"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export function useAutoRouteScroll(pages: string[]) {
  const router = useRouter();
  const pathname = usePathname();
  const isThrottled = useRef(false);

  const currentIndex = pages.indexOf(pathname);

  const goToPage = (index: number) => {
    if (index >= 0 && index < pages.length) {
      router.push(pages[index]);
    }
  };

  const handleNavigation = (direction: "next" | "prev") => {
    if (isThrottled.current) return;

    const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    goToPage(nextIndex);

    isThrottled.current = true;
    setTimeout(() => {
      isThrottled.current = false;
    }, 1000); // throttle
  };

  const goToNext = () => handleNavigation("next");
  const goToPrev = () => handleNavigation("prev");

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 50) return; // minor scroll ignored
    
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
    
      // Scrolling down at bottom -> next page
      if (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight - 1) {
        handleNavigation("next");
      }
      // Scrolling up at top -> previous page
      else if (e.deltaY < 0 && scrollTop <= 1) {
        handleNavigation("prev");
      }
    };    

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        handleNavigation("next");
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        handleNavigation("prev");
      }
    };

    if (window.innerWidth >= 768) {
      window.addEventListener("wheel", handleWheel, { passive: true });
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, pages]);

  return { goToNext, goToPrev };
}
