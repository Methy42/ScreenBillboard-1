import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

export class MillGltf extends EventTarget {
    constructor() {
        super();

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/jsm/');

        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);

        loader.load('/jsm/0416-1.glb', (gltf) => {

            this.model = gltf.scene;
            console.debug("loaded model", this.model);

            this.model.position.set(0, 0, 0);
            this.model.scale.set(1, 1, 1);

            this.initModel();

        }, undefined, (e) => {

            console.error(e);

        });
    }

    model?: THREE.Group<THREE.Object3DEventMap>;

    initModel = () => {
        this.dispatchEvent(new Event("init"));
    }
}