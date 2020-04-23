<template>
  <div id="cyzs">
    <h2>酒 都 餐 饮 住 宿</h2>
    <p>酒都宾馆位于汾酒集团厂区内，酒都大道东南部，成立于1990年，是集旅游观光，餐饮、住宿、会议接待，商务活动于一体的三星级涉外宾馆。宾馆整个建筑为仿古庭院式建筑，占地一万三千二百平方米。</p>
    <dl v-for="item in list" :key="item.text">
        <dt>
            <img :src="item.img" alt="">
        </dt>
        <dd><p>{{item.text}}</p></dd>
    </dl>
  </div>
</template>

<script>
export default {
    name:'cyzs',
    data(){
        return{
            list:[
                {img:'https://www.fenjiu.com.cn/docc/visit/images/bg.png',text:' 住宿：高、中档次套间9套，二人标准房间80间。'},
                {img:'https://www.fenjiu.com.cn/docc/visit/images/zs.png',text:' 会议接待：能容纳250人，多功能会议厅2个，中小型会议接待室6个。 '},
                {img:'https://www.fenjiu.com.cn/docc/visit/images/hy.png',text:'餐饮：设有中餐厅，对外餐厅，火锅楼，大型宴会厅1个，风格各异的小餐厅30个，能同时提供600人就餐。餐厅提供汾酒、竹叶青、白玉、玫瑰等名酒，制作浓郁特色的汾阳地方风味和著名于世的山西面食。 '},
                {img:'https://www.fenjiu.com.cn/docc/visit/images/cy.png',text:' 开放的酒都热忱欢迎海内外朋友做客杏花村，下塌酒都宾馆，品千年杏花美酒，游国家AAAA级旅游景区——汾酒文化景区，领略清香文化，酒都宾馆热情欢迎您的光临。'},
            ]
        }
    }
};
</script>

<style scoped lang="less">
#cyzs{
    padding: 0 30px;
}
p{
    font-size: 14px;
    text-indent: 2em;
}
h2 {
  margin: 20px 0;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}
dl{
    margin: 10px;
}
</style>