'use client'
import { render } from "@react-three/offscreen";

import dynamic from 'next/dynamic';

const AboutExperience = dynamic(() => import('../../app/about/_components/scenes/mission-statement/AboutExperience'), {
  ssr: false, // Optional: Disable server-side rendering for this component
});

render(<AboutExperience value={0} />);