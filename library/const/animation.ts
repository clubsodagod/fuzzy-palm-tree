import { useScroll } from "@/app/context/sub-context/ScrollContext";

const ScrollValue = () => {
    return useScroll().scrollYPro;
}




const qtrCtn = ScrollValue() / 4;
const halfCtn = ScrollValue() / 2;
const threeQtrCtn = qtrCtn * 3;
const eighthCtn = ScrollValue() / 8;
const threeEighthsCtn = eighthCtn * 3;
const fiveEightsCtn = eighthCtn * 5;
const sevenEightsCtn = eighthCtn * 7;