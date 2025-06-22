"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export function useAutoRouteScroll(pages: string[]) {
  const router = useRouter();
  const rawPathname = usePathname();
  const pathname = rawPathname?.replace(/\/$/, "") || "/";
  const isThrottled = useRef(false);

  const currentIndex = pages.indexOf(pathname);
  const goToPage = useCallback(
    (index: number) => {
      if (index >= 0 && index < pages.length) {
        router.push(pages[index]);
      }
    },
    [pages, router]
  );

  const handleNavigation = useCallback(
    (direction: "next" | "prev") => {
      if (isThrottled.current || currentIndex === -1) return;

      const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
      goToPage(nextIndex);

      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 1000);
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

      if (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight - 1) {
        handleNavigation("next");
      } else if (e.deltaY < 0 && scrollTop <= 1) {
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
