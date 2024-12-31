import { ref } from "vue";
import { Store } from ".";
import { insulationWarehouseData, planData, preheatingFurnaceData, robotData, vacuumFurnaceData } from "../mock";

export class AppData {
    // 机器人运行模式
    robotOperationMode = ref('');

    // 机器人状态
    robotStatus = ref('');

    // 计划数量
    planCount = ref(0);

    // 完成数量
    completeCount = ref(0);

    // 报废数量
    lossCount = ref(0);

    // 真空炉当前产品
    vacuumFurnaceCurrentProduct = ref("");

    // 真空炉已熔炼时间
    vacuumFurnaceMeltingTime = ref(0);

    //预热炉数据
    preheatingFurnaceList = ref<any[]>([]);

    // 立体保温库数据
    insulationWarehouseList = ref<any[]>([]);

    constructor() {
        // 加载模拟数据，对接websocket之后要去掉
        this.initMockData();
    }

    // 格式化机器人数据
    setRobotData(option: {
        robotOperationMode: any;
        robotStatus: any;
    }) {
        this.robotOperationMode.value = option.robotOperationMode;
        this.robotStatus.value = option.robotStatus;
    };

    // 格式化计划数据
    setPlanData(option: {
        planCount: number;
        completeCount: number;
        lossCount: number;
    }) {
        this.planCount.value = option.planCount;
        this.completeCount.value = option.completeCount;
        this.lossCount.value = option.lossCount;
    }

    // 格式化真空炉数据
    setVacuumFurnaceData(option: {
        vacuumFurnaceCurrentProduct: string;
        vacuumFurnaceMeltingTime: number;
    }) {
        this.vacuumFurnaceCurrentProduct.value = option.vacuumFurnaceCurrentProduct;
        this.vacuumFurnaceMeltingTime.value = option.vacuumFurnaceMeltingTime;
    }

    // 格式化预热炉数据
    setPreheatingFurnaceData(option: {
        preheatingFurnaceList: any[];
    }) {
        this.preheatingFurnaceList.value = option.preheatingFurnaceList;
    };

    // 格式化立体保温库数据
    setInsulationWarehouseData(option: {
        insulationWarehouseList: any[];
    }) {
        this.insulationWarehouseList.value = option.insulationWarehouseList;
    }

    // 加载模拟数据
    initMockData() {
        this.setRobotData(robotData);
        this.setPlanData(planData);
        this.setVacuumFurnaceData(vacuumFurnaceData);
        this.setPreheatingFurnaceData(preheatingFurnaceData);
        this.setInsulationWarehouseData(insulationWarehouseData);
    }
}