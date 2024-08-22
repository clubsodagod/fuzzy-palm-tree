



export interface ScrollContextProps {
    scrollX: number;
    scrollY: number;
    setScrollX: (value: number) => void;
    setScrollY: (value: number) => void;
    divRef: React.RefObject<HTMLDivElement>;
    divScrollTop: number;
    divHeight: number;
}
