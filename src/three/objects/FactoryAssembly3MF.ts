// import * as THREE from 'three';

import { ThreeMFLoader } from 'three/addons/loaders/3MFLoader.js';

export class FactoryAssembly3MF extends EventTarget {
    constructor () {
        super();

        const loader = new ThreeMFLoader();

        loader.load("/jsm/FactoryAssembly-1210.3MF", (data) => {
            console.log('data', data);

            this.dispatchEvent(new Event("init"));
        }, (event) => {
            console.log("loading FactoryAssembly-1210.3MF", event.loaded, '/', event.total);
        });
    }
}
