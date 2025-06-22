"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export function useAutoRouteScroll(pageOrder: string[]) {
  const router = useRouter();
  const pathname = usePathname();
  const isThrottled = useRef(false);

  const currentIndex = pageOrder.indexOf(pathname);

  const goToPage = useCallback(
    (index: number) => {
      if (index >= 0 && index < pageOrder.length) {
        router.push(pageOrder[index]);
      }
    },
    [pageOrder, router]
  );

  const handleNavigation = useCallback(
    (direction: "next" | "prev") => {
      if (isThrottled.current || currentIndex === -1) return;

      const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
      goToPage(nextIndex);

      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 1000); // throttle scrolls for 1 second
    },
    [currentIndex, goToPage]
  );

  const goToNext = useCallback(() => handleNavigation("next"), [handleNavigation]);
  const goToPrev = useCallback(() => handleNavigation("prev"), [handleNavigation]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 50) return;

      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      // Scroll down at bottom
      if (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight - 1) {
        handleNavigation("next");
      }
      // Scroll up at top
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
  }, [handleNavigation]);

  return { goToNext, goToPrev };
}
