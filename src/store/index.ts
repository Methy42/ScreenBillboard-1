import { AppData } from "./AppData";
import { AppSocket } from "./AppSocket";
import { AssetsMap } from "./AssetsMap";

export class Store {
    static assetsMap = new AssetsMap();

    static appSocket = new AppSocket();

    static appData = new AppData();

    constructor() {
        Store.appSocket.socket.addEventListener("message", (message: any) => {
            switch (message.type) {
                case "robot": Store.appData.setRobotData(message);
                    break;
                case "plan": Store.appData.setPlanData(message);
                    break;
                case 'vacuumFurnace': Store.appData.setVacuumFurnaceData(message);
                    break;
                case 'preheatingFurnace': Store.appData.setPreheatingFurnaceData(message);
                    break;
                case 'insulationWarehouse': Store.appData.setInsulationWarehouseData(message);
            }
        });
    }
}