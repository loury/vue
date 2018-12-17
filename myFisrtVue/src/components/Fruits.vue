<template>
    <div id="fruit">
        <p>{{ name }}</p>
        <!-- <ul v-html= {{ list }}> 
        </ul>-->
    </div>
</template>

<script>
export default {
	name: 'Fruits',
    data () {//数据
        return {
            name: '敏',
            fruits: '梨',//普通字符串
            list: '<li> '+this.name+'喜欢吃'+this.fruits+'。',//html
            isfinisshed: true
        }
	},
    methods () {//方法，函数
        return {
            showLabel: function(){
                alert(this.label);
            }
        }
    }		    
}
</script>
