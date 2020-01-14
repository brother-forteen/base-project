<template>
    <!--
        * @description: switch
        * @param: value {Boolean} 是否为on 必须
        * @param：isTextInner {Boolean} 是否在内部显示文案 非必须
        * @param：activeText {Boolean} value为true的文案 非必须
        * @param：activeColor {Boolean} value为true的颜色 非必须
        * @param：inActiveText {Boolean} value为false的文案 非必须
        * @param：inActiveColor {Boolean} value为false的颜色 非必须
        * @use:
            import SwitchComponent from "../../components/switchComponent/SwitchComponent.vue";
            components: {
                SwitchComponent
            }
            <SwitchComponent v-model="value" :isTextInner="false"></SwitchComponent>
    -->
    <div>
        <span v-if="!isTextInner">{{activeText}}</span>
        <span
            :class="['switch_component', {'switch_component_on': isChecked, 'switch_component_innerText': isTextInner, 'switch_component_innerText_on': isChecked && isTextInner}]"
            :style="{borderColor: isChecked ? activeColor : inActiveColor, backgroundColor: isChecked ? activeColor : inActiveColor}"
            :value="value"
            @click="toggle"
        ></span>
        <span v-if="!isTextInner">{{inActiveText}}</span>
    </div>
</template>

<script>
    export default {
        name: "SwitchComponent",
        props: {
            value: {
                type: Boolean,
                default: true
            },
            isTextInner: {
                type: Boolean,
                default: false
            },
            activeText: {
                type: String,
                default: 'ON'
            },
            activeColor: {
                type: String,
                default: '#1AAD19'
            },
            inActiveText: {
                type: String,
                default: 'OFF'
            },
            inActiveColor: {
                type: String,
                default: '#DFDFDF'
            }
        },
        data() {
            return {
                isChecked: this.value
            }
        },
        watch: {
            isChecked(val) {
                this.$emit('input', val);
            },

            value(val){
                this.isChecked = val;
            }
        },
        mounted() {

        },
        methods: {
            toggle() {
                this.isChecked = !this.isChecked;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./switchComponent.scss";
</style>
