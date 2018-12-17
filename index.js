var app = new Vue({
    el:"#vue-app",
    data:{
        message:"name",
        name:"loury",
        seen:true,
        rawhtml:"<span>这是html语句</span>",
        btnVal:"v-bind绑定",
        seenMsg:"v-if**：根据表达式的真假来插入或移除元素，点击上面消失",
    },
    computed:{
        //默认只有getter：message改变引起remessage的改变
        remessage:function(){
            return this.message.splitL('').reverse().join('')
        },
        //getter和setter：name和rename相互影响
        rename:{
            //getter
            get:function(){
                return this.name.split('').reverse().join('')
            },
            //setter:rename发生改变，name也跟着改变
            set:function(newVal){
                this.name=newVal.split('').reverse().join('');
            }
        }
    },
    methods:{
        //4：v-if**：根据表达式的真假来插入\移除元素
        isSeen:function(){
            if(this.seen){
                this.seen=false;
                this.seenMsg="v-if**：根据表达式的真假来插入或移除元素，点击上面出现"
            }else{
                this.seen=true;
                this.seenMsg="v-if**：根据表达式的真假来插入或移除元素，点击上面消失"
            }
        }
    }

})