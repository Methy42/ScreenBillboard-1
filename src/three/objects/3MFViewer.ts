import * as THREE from 'three';

import { ThreeMFLoader } from 'three/addons/loaders/3MFLoader.js';

export class ThreeMFViewer extends EventTarget {
    constructor (url: string) {
        super();

        const loader = new ThreeMFLoader();

        loader.load(url, (group) => {
            console.log("group", group);

            this.model = group.children[0] as THREE.Mesh;

            console.log("this.model", this.model);
            

            this.model.scale.set(0.0001, 0.0001, 0.0001);
            this.model.position.set(0, 0, 0);
            this.model.castShadow = true;
            this.model.receiveShadow = true;

            this.dispatchEvent(new Event("init"));
        }, (event) => {
            console.log("loading ThreeMF Model", event.loaded, '/', event.total);
        }, (error) => {
            console.error("ThreeMF Model Error", error);
        });
    }

    model?: THREE.Mesh;
}