<!--
	/**
		 * @author: wen_dell
		 * @createDate: 2019/12/11
		 * @weChat: fourteen_clever
		 * **/
-->
<template>
    <div id="login" style="padding: 30px">
<!--        <SwitchComponent v-model="value" :isTextInner="true"></SwitchComponent>-->

        <div class="select_box"></div>

        <div class="triangle"></div>

        <div class="triangle_bg"></div>

        <svg>
            <defs>
                <clipPath id="clipPath">
                    <rect x="15" y="15" width="100" height="100"/>
                </clipPath>
            </defs>
            <circle
                cx="150" cy="150"
                r="100"
                fill="red"/>
            <rect
                x="15" y="15"
                width="100" height="100"
                fill="blue"
                fill-opacity="0.1"/>
        </svg>

        <div class="rect"></div>
    </div>
</template>

<script>
    import SwitchComponent from "../../components/switchComponent/SwitchComponent.vue";
    export default {
        name: "Login",
        components: {
            SwitchComponent
        },
        data(){
            return {
                value: true
            }
        },
        mounted(){
            console.log();
        }
    }
</script>

<style lang="scss">
    @import '@css/views/login.scss';
</style>
