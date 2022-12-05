<template>
    <div id="map-antv">
        
    </div>
</template>

<script>
import { Scene, GaodeMap, PolygonLayer, Control } from '@antv/l7'
import { csvToJson } from '@/util/util'
export default {
    name: 'L7Map',
    props: {},
    components: {},
    data() {
        return {
            timer: null,
            scene: null,
            szC: null,
            comminitiesData: null,
            currentTime: 0,
            maxTime: 0,
        }
    },
    methods: {
        setColor: function (value) {
            if(value < 1) return '#ffffff';
            if(value < 10) return '#f1fe00';
            if(value < 100) return '#ffc20b';
            if(value < 500) return '#de7e00';
            return '#ff1a01'; 
        }
    },
    computed: {},
    created() {
    },
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
        const comminitiesData = fetch('./json/shenzhen_community_all.json').then(response => response.json());
        let currentTime = 0, maxTime = 0;
        Promise.all([csvToJson('./json/districtsinfo.csv'), comminitiesData]).then(r => {
            maxTime = (Object.keys(r[0][0]).length-3)*48;
            r[1].features.forEach((f, i) => {
                f.properties = r[0][i];
            });
        });
        const legend = new Control({
            position: "bottomright"
        });
        legend.onAdd = function () {
            const el = document.createElement("div");
            el.className = "infolegend legend";
            el.style.backgroundColor = '#ffffff';
            el.style.textAlign = 'left';
            el.style.padding = '10px';
            el.style.borderRadius = '3px';
            el.style.boxShadow = '-1px -1px 1px 0px white';
            el.style.fontWeight = 'blod';
            const grades = [0, 1, 10, 100, 500], color = ['#f1f1f1', '#f1fe00', '#ffc20b', '#de7e00', '#ff1a01'];
            for (let i = 0; i < grades.length; i++) {
            el.innerHTML +=
                '<i style="background:' +
                color[i] +
                ';width: 14px;height:14px;display: inline-block"></i> ' +
                grades[i] +
                (grades[i + 1] ? "–" + grades[i + 1] + "<br>" : "+");
            }
            return el;
        };
        scene.addControl(legend);
        Promise.all([comminitiesData, new PolygonLayer()]).then(r => { // 基于社区数据构建面图层
            const szC = r[1];
            szC.source(r[0])
                .color(currentTime.toString(), this.setColor)
                .shape('fill')
                .style({
                    opacity: 1
                });
            scene.on('loaded', () => { // 在全局场景加载完成后添加图层
                scene.addLayer(szC);
            });
            this.timer = setInterval(() => {
                currentTime += 48;
                if(currentTime > maxTime) currentTime = 0;
                szC.color(currentTime.toString(), this.setColor);
                scene.render();
            }, 1500);
        });
        // if(this.scene) this.scene.render();
        // this.comminitiesData = fetch('./json/shenzhen_community_all.json').then(response => response.json());
        // Promise.all([csvToJson('./json/districtsinfo.csv'), this.comminitiesData]).then(r => {
        //     this.maxTime = (r[0][0].length-1)*24;
        //     r[1].features.forEach((f, i) => {
        //         f.properties = r[0][i];
        //     });
        // });
        // this.scene = new Scene({
        //     id: 'map-antv',
        //     map: new GaodeMap({
        //         center: [114.2, 22.63], // 视角初始中心点c
        //         zoom: 10,
        //         style: 'dark',
        //         pitch: 40, // 俯视仰角
        //     })
        // });
        // this.szC = new PolygonLayer({});
        // Promise.all([this.comminitiesData, this.szC]).then(r => { // 基于社区数据构建面图层
        //     this.szC.source(r[0])
        //         .color(this.currentTime.toString(), this.setColor)
        //         .shape('fill')
        //         .style({
        //             opacity: 1
        //         });
        //     this.scene.on('loaded', () => { // 在全局场景加载完成后添加图层
        //         this.scene.addLayer(this.szC);
        //     });
        //     this.timer = setInterval(() => {
        //         this.currentTime += 24;
        //         if(this.currentTime > this.maxTime) this.currentTime = 0;
        //         this.szC.color(this.currentTime.toString(), this.setColor);
        //         this.scene.render();
        //         console.log(this.currentTime.toString());
        //     }, 2000);
        // });
    },
    beforeUnmount() {
        this.timer && clearInterval(this.timer); // 清除定时器
    }
}
</script>

<style lang='scss' scoped>
    #map-antv {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .legend {
            background-color: #e7e7e7;
            text-align: left;
            padding: 10px;
            border-radius: 3px;
            box-shadow: -1px -1px 1px 0px white;
            font-weight: bold;
        }
    }
</style>