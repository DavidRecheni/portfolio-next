import { useCallback, useEffect, useState } from "react";

/** Enumeration for axis values */
export enum Axis {
  X = "x",
  Y = "y",
}

/** Enumeration for direction values */
export enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
  Still = "still",
}

type ScrollPosition = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

/** Type declaration for the returned scroll information */
type ScrollInfo = {
  scrollDir: Direction;
  scrollPosition: ScrollPosition;
};

/** Type declaration for scroll properties */
type ScrollProps = {
  thr?: number;
  axis?: Axis;
  scrollUp?: Direction;
  scrollDown?: Direction;
  still?: Direction;
};

function useDetectScroll(props: ScrollProps = {}): ScrollInfo {
  const {
    thr = 0,
    axis = Axis.Y,
    scrollUp = axis === Axis.Y ? Direction.Up : Direction.Left,
    scrollDown = axis === Axis.Y ? Direction.Down : Direction.Right,
    still = Direction.Still,
  } = props;

  const [scrollDir, setScrollDir] = useState<Direction>(still);
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  const threshold = Math.max(0, thr);
  let ticking = false;
  let lastScroll = 0;

  /** Function to update scroll direction */
  const updateScrollDir = useCallback(() => {
    const scroll = axis === Axis.Y ? window.scrollY : window.scrollX;

    if (Math.abs(scroll - lastScroll) >= threshold) {
      setScrollDir(scroll > lastScroll ? scrollDown : scrollUp);
      lastScroll = Math.max(0, scroll);
    }
    ticking = false;
  }, [axis, threshold, scrollDown, scrollUp]);

  useEffect(() => {
    /** Function to update scroll position */
    const updateScrollPosition = () => {
      const top = window.scrollY;
      const left = window.scrollX;
      const bottom =
        document.documentElement.scrollHeight - window.innerHeight - top;
      const right =
        document.documentElement.scrollWidth - window.innerWidth - left;

      setScrollPosition({ top, bottom, left, right });
    };

    /** Call the update function when the component mounts */
    updateScrollPosition();

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  useEffect(() => {
    lastScroll = axis === Axis.Y ? window.scrollY : window.scrollX;

    /** Function to handle onScroll event */
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [updateScrollDir]);

  return { scrollDir, scrollPosition };
}

export default useDetectScroll;
