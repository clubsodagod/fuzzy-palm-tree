

import { OrbitControls, useTexture } from '@react-three/drei';
import React, { useMemo, useRef } from 'react'
import {Group, Bone, SkinnedMesh, Vector3, BoxGeometry, Color,MeshStandardMaterial,Uint16BufferAttribute,
    Float32BufferAttribute,  Skeleton, SRGBColorSpace
} from 'three'

const whiteColor = new Color('white');




const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71; // 4:3 aspect ratio
const PAGE_DEPTH = 0.003;
const PAGE_SEGMENTS = 30;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

const pageGeometry = new BoxGeometry(
    PAGE_WIDTH,
    PAGE_HEIGHT,
    PAGE_DEPTH,
    PAGE_SEGMENTS,
    2,
)

pageGeometry.translate(PAGE_WIDTH / 2, 0, 0);

const pictures = [
    "DSC00680",
    "DSC00933",
    "DSC00966",
    "DSC00983",
    "DSC01011",
    "DSC01040",
    "DSC01064",
    "DSC01071",
    "DSC01103",
    "DSC01145",
    "DSC01420",
    "DSC01461",
    "DSC01489",
    "DSC02031",
    "DSC02064",
    "DSC02069",
];


export const pages = [
    {
        front: "book-cover",
        back: pictures[0],
    },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
    pages.push({
        front: pictures[i % pictures.length],
        back: pictures[(i + 1) % pictures.length],
    });
}

pages.push({
    front: pictures[pictures.length - 1],
    back: "book-back",
});

const position = pageGeometry.attributes.position;
const vertex = new Vector3();
const skinIndexes = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    const x = vertex.x;

    const skinIndex = Math.max(0, Math.floor( x/ SEGMENT_WIDTH ));
    let skinWeight = (x % SEGMENT_WIDTH) / SEGMENT_WIDTH;
    
    skinWeights.push(skinWeight, 1 - skinWeight, 0, 0);

    skinIndexes.push(skinIndex, skinIndex + 1, 0 ,0);
};

pageGeometry.setAttribute(
    "skinIndex",
    new Uint16BufferAttribute(skinIndexes, 4)
);
pageGeometry.setAttribute(
    "skinWeight",
    new Float32BufferAttribute(skinWeights, 4)
);

const pageMaterials = [
    new MeshStandardMaterial({
        color: whiteColor,
    }),
    new MeshStandardMaterial({
        color: '#000',
    }),
    new MeshStandardMaterial({
        color: whiteColor,
    }),
    new MeshStandardMaterial({
        color: whiteColor,
    }),
];

// pages.forEach((page) => {
//     useTexture.preload(`/textures/${page.front}.jpg`);
//     useTexture.preload(`/textures/${page.back}.jpg`);
//     useTexture.preload(`/textures/book-cover-roughness.jpg`);
// })

const Page = ({number, front, back, ...props}:any) => {
    const [picture, picture2, pictureRoughness] = useTexture([
        `/textures/${front}.jpg`,
        `/textures/${back}.jpg`,
        ...(number === 0 || number === pages.length -1 
            ? [`/textures/book-cover-roughness.jpg`]
            : [] ),
    ]);

    picture.colorSpace =  picture2.colorSpace = SRGBColorSpace;
    const group = useRef(null);
    
    const skinnedMeshRef = useRef(null);

    const manualSkinnedMesh = useMemo(()=> {
        let bones = [];
        for (let i = 0; i <= PAGE_SEGMENTS; i++) {
            let bone = new Bone();
            bones.push(bone);
            if (i === 0) {
                bone.position.x = 0;
            } else {
                bone.position.x = SEGMENT_WIDTH;
            }
            if (i > 0) {
                bones[i - 1].add(bone); // attach the new bone to the previous bone
            }
        }

        const skeleton = new Skeleton(bones);

        
        const materials = [...pageMaterials,
            new MeshStandardMaterial({
                color: whiteColor,
                map: picture,
                ...(number === 0 ?
                    {
                        roughnessMap: pictureRoughness,
                    }
                    :
                    {
                        roughness: 0.1
                    }
                ),
            }),
            new MeshStandardMaterial({
                color: whiteColor,
                map: picture2,
                ...(number === pages.length - 1 ?
                    {
                        roughnessMap: pictureRoughness,
                    }
                    :
                    {
                        roughness: 0.1
                    }
                ),
            }),
        ];
        const mesh = new SkinnedMesh(pageGeometry, materials)
        
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.frustumCulled = false;
        // mesh.scale.set(100, 100, 100); 
        mesh.add(skeleton.bones[0]);
        mesh.bind(skeleton);
        console.log(mesh);
        return mesh;
    }, []);
    
    return (

        <group {...props} ref={group} scale={1}  > 

            <axesHelper args={[5]} />
            <primitive object={manualSkinnedMesh} ref={skinnedMeshRef}/>

        </group>
    )
}


const Book = ({...props}) => {
    return (
        <group {...props} scale={1} visible>
            {/* <OrbitControls /> */}
            {[...pages].map((pageData, index) => {
            
            if (index===0)
            return (
                
                <Page
                position-x={index * 0.25} 
                key={index} 
                number={index} 
                {...pageData} 
                />
            ) }
            )}
        </group>
    )
}

export default Book