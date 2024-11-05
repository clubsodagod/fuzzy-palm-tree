'use client'
import { MotionGroup } from '@/app/_components/framer/MotionGroup';
import { EmailIcon, GithubIcon, LinkedInIcon, MessengerIcon, PhoneIcon, YouTubeIcon } from '@/public/3d-objects';
import { Center } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { useState } from 'react'


const LetsWorkExperience: React.FC<{}> = ({ }) => {

    const { viewport } = useThree();
    // memoized 3D assets
    const MemoizedPhone = React.memo(PhoneIcon);
    const MemoizedYouTube = React.memo(YouTubeIcon);
    const MemoizedEmail = React.memo(EmailIcon);
    const MemoizedLinkedIn = React.memo(LinkedInIcon);
    const MemoizedMessenger = React.memo(MessengerIcon);
    const MemoizedGithub = React.memo(GithubIcon);

    // initialize state variables
    const [scalingFactor, setScalingFactor] = useState<number>(1);
    const [visible, setVisible] = useState({
        phone: true,
        email: false,
        messenger: false,
        linkedin: false,
        youtube: false,
        github: false,
    });

    return (
        <group
        >


            <Center>

                <group
            position={[0, 0, 0]}>

                    <MotionGroup
                    >
                        <MemoizedPhone
                            scale={10}
                            position={[(viewport.width / -1.25), (viewport.height / 3), 0]}
                        />
                    </MotionGroup>

                    <MotionGroup
                    >
                        <MemoizedEmail
                            scale={0.09}
                            position={[(viewport.width / -0.9), (viewport.height / 5), 0]}
                        />
                    </MotionGroup>

                    <MotionGroup
                    >
                        <MemoizedGithub
                            scale={4.25}
                            position={[(viewport.width / -2.6), 4, 0]}
                        />
                    </MotionGroup>

                    <MotionGroup
                    >
                        <MemoizedYouTube
                            scale={4.25}
                            position={[(viewport.width / -3.6), 4, 0]}
                        />
                    </MotionGroup>

                    <MotionGroup
                    >
                        <MemoizedLinkedIn
                            scale={4.25}
                            position={[-20, 4, 0]}
                        />
                    </MotionGroup>

                    <MotionGroup
                    >
                        <MemoizedMessenger
                            scale={0.08}
                            position={[0, 11.5, 0]}
                        />
                    </MotionGroup>
                </group>

            </Center>

        </group>
    )
}



export default LetsWorkExperience;