import * as THREE from 'three';

import { PLYLoader } from 'three/addons/loaders/PLYLoader.js';

export class FactoryAssemblySmallPly extends EventTarget {
    constructor() {
        super();

        const loader = new PLYLoader();

        loader.load("/jsm/0416.PLY", (geometry) => {
            const mesh = new THREE.Mesh( geometry );

            this.model = mesh;

            this.model.scale.set(0.001, 0.001, 0.001);
            this.model.position.set(0, 0, 0);
            this.model.castShadow = true;
            this.model.receiveShadow = true;

            this.dispatchEvent(new Event("init"));
        }, (event) => {
            console.log(`${ event.loaded }/${ event.total }`);
        }, (error) => {
            console.log(error);
        });
    }

    model?: THREE.Mesh;
}