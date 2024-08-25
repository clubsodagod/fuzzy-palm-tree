export interface ScrollContainerData {
    scrollTop: number;
    scrollHeight: number;
    scrollProgress: number;
}

export interface ScrollContextProps {
    scrollX: number;
    scrollY: number;
    setScrollX: (value: number) => void;
    setScrollY: (value: number) => void;
    scrollContainers: {
        [key: string]: ScrollContainerData; // Key is a unique identifier, not an index
    };
    setContainerRef: (ref: HTMLDivElement | null, id: string) => void; // Function to dynamically set refs using unique id
}
