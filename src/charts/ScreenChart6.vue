<template>
    <div class="chart-container" ref="containerRef"></div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import { fontSize } from '../utils';

const containerRef = ref<HTMLDivElement>();
const chartRef = ref<echarts.ECharts>();

onMounted(() => {
    chartRef.value = echarts.init(containerRef.value);
    initChart();
});

const getCubeSize = (count: number) => {
    return count / 1;
}

const initChart = () => {
    const CubeLeft = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function (ctx, shape) {
            const xAxisPoint = shape.xAxisPoint
            const c0 = [shape.x, shape.y]
            const c1 = [shape.x - getCubeSize(9), shape.y - getCubeSize(9)]
            const c2 = [xAxisPoint[0] - getCubeSize(9), xAxisPoint[1] - getCubeSize(9)]
            const c3 = [xAxisPoint[0], xAxisPoint[1]]
            ctx.moveTo(c0[0], c0[1])?.lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
        }
    })
    const CubeRight = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function (ctx, shape) {
            const xAxisPoint = shape.xAxisPoint
            const c1 = [shape.x, shape.y]
            const c2 = [xAxisPoint[0], xAxisPoint[1]]
            const c3 = [xAxisPoint[0] + getCubeSize(18), xAxisPoint[1] - getCubeSize(9)]
            const c4 = [shape.x + getCubeSize(18), shape.y - getCubeSize(9)]
            ctx.moveTo(c1[0], c1[1])?.lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
        }
    })
    const CubeTop = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function (ctx, shape) {
            const c1 = [shape.x, shape.y]
            const c2 = [shape.x + getCubeSize(18), shape.y - getCubeSize(9)]
            const c3 = [shape.x + getCubeSize(9), shape.y - getCubeSize(18)]
            const c4 = [shape.x - getCubeSize(9), shape.y - getCubeSize(9)]
            ctx.moveTo(c1[0], c1[1])?.lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
        }
    })
    echarts.graphic.registerShape('CubeLeft', CubeLeft)
    echarts.graphic.registerShape('CubeRight', CubeRight)
    echarts.graphic.registerShape('CubeTop', CubeTop)
    const MAX = [6000, 6000, 6000, 6000, 6000, 5000]
    const VALUE = [2012, 1230, 3790, 2349, 1654, 1230]

    chartRef.value?.setOption({
        title: {
            text: '',
            top: 32,
            left: 18,
            textStyle: {
                color: '#00F6FF',
                fontSize: fontSize(14)
            }
        },
        grid: {
            left: 20,
            right: 40,
            bottom: 15,
            top: 36,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['深圳车间', 'PD3', 'PD7', '测量中心', 'PD5', 'PD6'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            offset: 5,
            axisTick: {
                show: false,
                length: 9,
                alignWithLabel: true,
                lineStyle: {
                    color: '#7DFFFD'
                }
            },
            axisLabel: {
                fontSize: fontSize(10)
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: fontSize(14)
            },
            boundaryGap: ['20%', '20%']
        },
        series: [{
            type: 'custom',
            renderItem: function (params: any, api: any) {
                const location = api.coord([api.value(0), api.value(1)])
                return {
                    type: 'group',
                    children: [{
                        type: 'CubeLeft',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(7,29,97,.6)'
                        }
                    }, {
                        type: 'CubeRight',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(10,35,108,.7)'
                        }
                    }, {
                        type: 'CubeTop',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(11,42,106,.8)'
                        }
                    }]
                }
            },
            data: MAX
        }, {
            type: 'custom',
            renderItem: (params: any, api: any) => {
                const location = api.coord([api.value(0), api.value(1)])
                return {
                    type: 'group',
                    children: [{
                        type: 'CubeLeft',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
                            }
                            ])
                        }
                    }, {
                        type: 'CubeRight',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
                            }
                            ])
                        }
                    }, {
                        type: 'CubeTop',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
                            }
                            ])
                        }
                    }]
                }
            },
            data: VALUE
        }, {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: (e: any) => {
                        switch (e.name) {
                            case '10kV线路':
                                return VALUE[0]
                            case '公用配变':
                                return VALUE[1]
                            case '35kV主变':
                                return VALUE[2]
                            case '水':

                        }
                    },
                    fontSize: fontSize(14),
                    color: '#fff',
                    offset: [4, -25]
                }
            },
            itemStyle: {
                color: 'transparent'
            },
            data: MAX
        }]
    });
}
</script>

<style scoped>
.chart-container {
    width: 100%;
    height: 100%;
}
</style>