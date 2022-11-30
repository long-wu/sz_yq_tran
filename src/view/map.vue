<template>
    <div id="map-antv">
        
    </div>
</template>

<script>
import { Scene, GaodeMap, PolygonLayer } from '@antv/l7'
export default {
    name: 'L7Map',
    props: {},
    components: {},
    data() {
        return {}
    },
    methods: {},
    computed: {},
    mounted() {
        const scene = new Scene({
            id: 'map-antv',
            map: new GaodeMap({
                center: [114.2, 22.63], // 视角初始中心点c
                zoom: 10,
                style: 'dark',
                pitch: 40, // 俯视仰角
            })
        });
        // const scene = new Scene({
        //     id: 'map-antv',
        //     mapStyle: 'dark', // 样式URL
        //     center: [114.2, 22.63],
        //     pitch: 56,
        //     zoom: 10,
        //     rotation: 255.1
        // });
        const comminitiesData = fetch('./json/shenzhen_community_all.json').then(response => response.json());
        const szC = new PolygonLayer({});
        Promise.all([comminitiesData, szC]).then(r => {
            szC.source(r[0])
            .color(
                    '新类型_',
                    [
                        'rgb(239,243,255)',
                        // 'rgb(189,215,231)',
                        // 'rgb(107,174,214)',
                        // 'rgb(49,130,189)',
                        // 'rgb(8,81,156)'
                    ]
                )
                .shape('fill')
                .style({
                    opacity: 1
                });
            scene.on('loaded', () => {
                scene.addLayer(szC);
            });
            
            // setInterval(() => {
            //     szC.color(
            //         '新类型_',
            //         [
            //             'rgb(239,243,255)',
            //             'rgb(189,215,231)',
            //             'rgb(107,174,214)',
            //             'rgb(49,130,189)',
            //             'rgb(8,81,156)'
            //         ]
            //     )
            // }, 3000)
        });
    },
}
</script>

<style lang='scss' scoped>
    #map-antv {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>