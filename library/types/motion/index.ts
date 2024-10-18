interface MotionObject {
    x: number;
    y: number;
    z: number;
    scale: number;
    updateScroll: (scrollValue: number) => void;
}