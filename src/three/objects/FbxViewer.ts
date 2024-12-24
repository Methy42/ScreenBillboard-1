import * as THREE from 'three';

import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

export class FbxViewer extends EventTarget {
    constructor (url: string) {
        super();

        const loader = new FBXLoader();

        loader.load(url, (group) => {

            this.model = group.children[0] as THREE.Mesh;

            console.log("this.model", this.model);
            

            this.model.scale.set(1_0000, 1_0000, 1_0000);
            this.model.position.set(0, 0, 0);
            this.model.castShadow = true;
            this.model.receiveShadow = true;

            this.dispatchEvent(new Event("init"));
        });
    }

    model?: THREE.Mesh;
}