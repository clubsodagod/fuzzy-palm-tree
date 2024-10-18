export interface MotionObject {
    x: number;
    y: number;
    z: number;
    scale: number;
    updateScroll: (scrollValue: number) => void;
}

interface AnimationConfig {
    animationOrbit: boolean;
    animationMain: boolean;
}

type Model3D = 'BolsaDeDinero' | 'MacbookModel' | 'CoinGrowthModel' ;
