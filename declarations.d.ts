// custom-three-js.d.ts
import { JSX } from '@react-three/fiber';

// Extend the Three.js namespace to include custom elements
declare module '@react-three/fiber' {
    namespace JSX {
        interface IntrinsicElements {
            div: React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement>;
        }
    }
}