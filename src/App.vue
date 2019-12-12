<!--
	/**
		 * @author: wen_dell
		 * @createDate: 2019/12/10
		 * @weChat: fourteen_clever
		 * **/
-->
<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                template: {
                    inputParam: []
                }
            }
        },
        methods: {
            test(){
                this.template.inputParam({
                    xxx: 'xxx',
                    'dsfaf': 'ssdf'
                })
            }
        }
    }
</script>

<style lang="scss">

</style>
