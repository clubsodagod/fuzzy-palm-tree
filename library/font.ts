import { Vina_Sans } from "next/font/google";

const vinaSansFont = Vina_Sans({
    display:'swap',
    subsets:['latin'],
    weight:['400'],
    variable:"--font-vina",
})

export const vinaFont = vinaSansFont.variable;