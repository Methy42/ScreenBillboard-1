import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

export class GLBViewer extends EventTarget {
    constructor (url: string) {
        super();

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/jsm/');

        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);

        loader.load(url, (gltf) => {

            this.model = gltf.scene;
            console.debug("loaded model", this.model);

            this.model.position.set(0, 0, 0);
            this.model.scale.set(1, 1, 1);

            this.dispatchEvent(new Event("init"));

        }, (event) => {

            console.log("Loading GLB Model", event.loaded, '/', event.total);
            
        }, (e) => {

            console.error("Load GLB Model Error", e);

        });
    }

    model?: THREE.Group<THREE.Object3DEventMap>;
}