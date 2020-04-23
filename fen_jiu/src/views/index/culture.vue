<template>
    <div id="culture">
        <h1>汾 酒 之 魂</h1>
        <img class="bg" src="@/assets/img/a_27.gif" alt="">
        <div class="main">
            <div class="left">
                <p><img src="@/assets/img/sleep3.gif" alt=""><span>汾酒使命</span></p>
                <p>为民族——传承国宝，让清香更久远！</p>
                <p>为公众——精酿美酒，让身心更愉悦！</p>
                <p>为员工——创造成功，让生活更美好！</p>
                <p>为股东——多创红利，让汾酒更卓越！</p>
                <ul>
                    <li v-for="(item,index) in content" :key="index">
                        <img src="@/assets/img/sleep3.gif" alt="">
                        <span>{{item.text1}}</span>
                        {{item.text2}}
                    </li>
                </ul>
            </div>
            <div class="right">
                <!-- <img class="bg" src="@/assets/img/a_27.gif" alt=""> -->
                <p><img src="@/assets/img/sleep3.gif" alt=""><span>"111343"发展总战略</span></p>
                <p>一个发展目标——覆盖全国市场，打造国际品牌，成为国内白酒业排头兵和国际知名酒企</p>
                <p>一个指导方针——清香酒业为本　主动创造市场深化内部改革　企业文化导航</p>
                <p>一个基本原则——"清香久远"的科学发展原则</p>
                <p>三个重点基地——名优白酒基地，保健酒基地，酒文化旅游基地</p>
                <p>四个管理体系——营销体系，财务体系，物流体系，科技质量体系</p>
                <p>三个保障工程——"智闯金海"营销工程，"心心相映"人才工程，"点点渐进"管理工程</p>
                
            </div>
            <div class="right">
                <p><img src="@/assets/img/sleep3.gif" alt=""><span>汾酒集团行为文化个性</span></p>
                <p>清香三品：清香酒品　清香人品　清香司品</p>
            </div>
            <div class="right">
                <p><img src="@/assets/img/sleep3.gif" alt=""><span>汾酒集团企业形象口号</span></p>
                <p>千年清香　陶醉你我</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'culture',
        data(){
            return{
                content:[
                    {text1:'汾酒精神',text2:'诚为本　酿为乐　创为魂'},
                    {text1:'精神理念',text2:'传承国宝　清香久远'},
                    {text1:'核心理念',text2:'用心酿造　诚信天下'},
                    {text1:'管理理念',text2:'心心相映　点点渐进'},
                    {text1:'经营理念',text2:'清香扬帆　同舟共济'},
                    {text1:'服务理念',text2:'一"心"一"意"　专业得体'},
                    {text1:'发展理念',text2:'逆水行舟　六力勇进'},
                ]
            }
        }
    }
</script>

<style scoped lang="less">
.right{
    margin-bottom: 20px;
}
.bg{
    width: 192px;
    height: 120px;
    position: fixed;
    bottom: 10px;
    right: 30px;
}
p{
    margin-left: 20px;
    height: 30px;
    line-height: 30px;
}
ul{
    margin: 20px;
    li{
        height: 30px;
        line-height: 30px;
        color: rgb(255, 51, 51); 
    }
}
img{
    margin-right: 10px;
}
span{
    font-size: 16px;
    font-weight: 600;
    color: #303133;
    margin-right: 20px;
}
p{
   color: rgb(255, 51, 51); 
}
.main{
    // display: flex;
    font-size: 14px;
}
h1{
    font-weight: 600;
    font-size: 34px;
    text-align: center;
    color: rgb(255, 51, 51);
}
</style>