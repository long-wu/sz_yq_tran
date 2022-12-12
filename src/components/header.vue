<template>
    <div class="header">
        <div class="header-logo-container">
            <img src="@/assets/img/logo_1627899410263.png" alt="logo">
            <h2>COVID-19 STATUS MONITOR</h2>
        </div>
        <div class="header-main">
            <div>home</div>
            <div>background</div>
            <div>team</div>
        </div>
        <div class="language-switch">
            <el-switch v-model="language"
                active-color="#a0c9b2"
                inactive-color="#aba9a9">
            </el-switch>
        </div>
    </div>
</template>

<script>

export default {
    name: 'header',
    props: {},
    components: {
    },
    data() {
        return {
            language: false
        }
    },
    methods: {},
    computed: {},
    mounted() {},
}
</script>

<style lang='scss' scoped>
    .header {
        width: 100%;
        height: 10%;
        background-color: #49494d38;
        // background-color: burlywood;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .header-logo-container {
            position: absolute;
            padding: 0 20px;
            left: 0;
            display: flex;
            align-items: center;
            cursor: pointer;
            img {
                height: 50px;
            }
            h2 {
                font-size: 1rem;
                font-family: fantasy;
                border-left: 1px solid rgb(71, 71, 71);
                padding-left: 6px;
            }
        }
        .header-main {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            letter-spacing: .1em;
            color: #fff;
            div {
                cursor: pointer;
            }
            div {
                padding: 0 4em;
            }
        }
        .language-switch {
            position: absolute;
            right: 20px;
            height: 32px;
            width: 40px;
            ::v-deep .el-switch__action {
                background-color: rgb(54, 63, 73);
            }
        }
    }
</style>