import * as THREE from 'three';

import { STLLoader } from 'three/addons/loaders/STLLoader.js';

export class FactoryAssemblySmallStl extends EventTarget {
    constructor() {
        super();

        const loader = new STLLoader();

        loader.load("/jsm/FactoryAssembly.small.stl", (geometry) => {
            const mesh = new THREE.Mesh( geometry );

            this.model = mesh;

            this.model.scale.set(0.001, 0.001, 0.001);
            this.model.position.set(0, 0, 0);
            this.model.castShadow = true;
            this.model.receiveShadow = true;

            this.dispatchEvent(new Event("init"));
        });
    }

    model?: THREE.Mesh;
}