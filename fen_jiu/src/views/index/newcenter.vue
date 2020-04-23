<template>
  <div id="newcenter">
    <ul class="nav">
      <li
        v-for="(item,index) in datatab"
        @click="clickHandler(index)"
        :class="index==curindex?'cur':''"
        :key="index"
      >{{item.tabname}}</li>
    </ul>
    <div class="main" v-for="(item,index) in datatab" v-show="index==curindex" :key="item.tabname">
      <div class="left">
        <!-- <img :src="item.tabimg" alt="">
        <img :src="item.tabimg" alt=""> -->
        <dl v-for="(item,idx) in item.tabimg" :key="idx">
          <dt><img :src="item" alt=""></dt>
          <dd></dd>
        </dl>
      </div>
      <ul class="content">
        <li v-for="(item,idx) in item.tabconcent" :key="idx">
          <img src="@/assets/img/sleep2.gif" alt />
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "newcenter",
  data() {
    return {
      datatab: [
        {
          tabname: "企业新闻",
          tabimg:[
            "https://www.fenjiu.com.cn/admin/webeditor/UploadFile/20200407093318.jpg",
            "https://www.fenjiu.com.cn/admin/webeditor/UploadFile/202004070933181.jpg"
          ],
          tabconcent: [
            "汾酒科技创新再出发",
            "汾酒综合活动中心、销售中心项目开工为汾酒高质量发展赋能",
            "山西省副省长吴伟一行来汾酒调研指导工作",
            "人民网对话李秋喜董事长，探寻汾酒发展路径",
            "山西大学杏花村学院（山西酿造产业研究院）揭牌成立 ",
            "李秋喜：汾酒改革永远在路上",
            "2020人参会，史上规模最大的汾酒经销商大会传递了什么信号？",
            "习近平向2019年太原能源低碳发展论坛致贺信",
            "习近平向第六届世界互联网大会致贺信 ",
            "第三届山西（汾阳•杏花村）世界酒文化博览会盛大开幕 "
          ]
        },
        {
          tabname: "业界动态",
          tabconcent: [
            "王一新在省属国有控股电力上市公司调研",
            "山西省文化旅游投资控股集团有限公司市场化选聘职业经理人公告 ",
            "白酒行业两极分化加剧　品牌集中度将逐步提升",
            "去年贵州白酒卖了561亿 白酒产量全国排名第11位 ",
            "山西大学杏花村学院（山西酿造产业研究院）揭牌成立 ",
            "高档白酒提价卖不动 中低档是购买首选",
            "2020人参会，史上规模最大的汾酒经销商大会传递了什么信号？",
            "习近平向2019年太原能源低碳发展论坛致贺信",
            "习近平向第六届世界互联网大会致贺信 ",
            "第三届山西（汾阳•杏花村）世界酒文化博览会盛大开幕 ",
            "白酒瞄准酒吧，消费者买单吗？",
            "年轻消费群体是中国白酒的希望之光"
          ]
        },
        {
          tabname: "媒体聚焦",
          tabconcent: [
            "1915，山西汾酒获巴拿马博览会甲等大奖 2015，得奖通告惊现太原",
            "以汾酒为龙头，带动山西白酒整体“上位”",
            "灯下酒 纸上醉” 汾酒文化漫谈--厚重的文化，干净的酒",
            "人民网对话李秋喜董事长，探寻汾酒发展路径",
            "山西大学杏花村学院（山西酿造产业研究院）揭牌成立 ",
            "李秋喜：汾酒改革永远在路上",
            "2020人参会，史上规模最大的汾酒经销商大会传递了什么信号？",
          ]
        },
        {
          tabname: "专题报道",
          tabconcent: [
            "汾酒集团产品包装创意设计大赛征集启事",
            "大型现代晋剧音乐剧《杏花酒翁》全国巡演启动",
            "《杏花酒翁》全国巡演500场 ",
            "大型现代晋剧音乐剧《杏花酒翁》全国巡回演出启动 ",
            "感恩历史 典范未来 ",
            "李秋喜：汾酒改革永远在路上",
            "首届“汾酒竹叶青杯”环境人像摄 ",
            "首届中国酒文化节将在武汉举办 ",
          ]
        },
        {
          tabname: "公司公告",
          tabconcent: [
            "山西杏花村汾酒集团有限责任公司2017年度财务等重大信息公开（一）",
            "山西杏花村汾酒集团有限责任公司2017年度财务等重大信息公开（二）",
            "山西杏花村汾酒大厦有限责任公司2017年财务等重大信息公开 ",
            "北京杏花村汾酒大厦有限责任公司2017年财务等重大信息公开 ",
            "山西杏花村汾酒集团宝泉涌有限责任公司2018年一季度财务等重大信息公开 ",
            "山西杏花村汾酒集团宝泉涌有限责任公司2018年二季度财务等重大信息公开",
          ]
        }
      ],
      curindex: 0
    };
  },
  methods: {
    clickHandler: function(idx) {
      this.curindex = idx;
    }
  }
};
</script>

<style scoped lang="less">
.main{
  display: flex;
  .left{
    dl{
      margin: 20px;
      dt{
        img{
          width: 400px;
          height: 250px;
        }
      }
    }
  }
}
li {
  cursor: pointer;
}
.content {
  padding: 20px;
  width: 70%;
  li {
    height: 36px;
    line-height: 36px;
    color: #606266;
    border-bottom: 1px #606266 dotted;
  }
}
.nav {
  display: flex;
  border: 2px #606266 solid;
  li {
    flex: 1;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    padding: 5px;
    border-left: 1px #606266 solid;
    color: #303133;
    &:nth-child(1) {
      border-left: none;
    }
  }
  .cur {
    color: rgb(255, 51, 51);
  }
}
</style>