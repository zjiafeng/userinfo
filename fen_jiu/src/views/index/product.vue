<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="汾酒" name="first">
      <dl v-for="(item,index) in first" :key="index">
        <dt>
          <img :src="item.imgurl" alt />
        </dt>
        <dd>{{item.imgtext}}</dd>
      </dl>
    </el-tab-pane>
    <el-tab-pane label="竹叶青酒" name="second">
      <dl v-for="(item,index) in second" :key="index">
        <dt>
          <img :src="item.imgurl" alt />
        </dt>
        <dd>{{item.imgtext}}</dd>
      </dl>
    </el-tab-pane>
    <el-tab-pane label="汾清酒" name="third">
      <dl v-for="(item,index) in third" :key="index">
        <dt>
          <img :src="item.imgurl" alt />
        </dt>
        <dd>{{item.imgtext}}</dd>
      </dl>
    </el-tab-pane>
    <el-tab-pane label="白玉汾酒" name="fourth">
      <dl v-for="(item,index) in fourth" :key="index">
        <dt>
          <img :src="item.imgurl" alt />
        </dt>
        <dd>{{item.imgtext}}</dd>
      </dl>
    </el-tab-pane>
    <el-tab-pane label="玫瑰汾酒" name="fourth2">
      <dl v-for="(item,index) in fourth2" :key="index">
        <dt>
          <img :src="item.imgurl" alt />
        </dt>
        <dd>{{item.imgtext}}</dd>
      </dl>
    </el-tab-pane>
    <el-tab-pane label="杏花村酒" name="fourth3">
      <dl v-for="(item,index) in fourth3" :key="index">
        <dt>
          <img :src="item.imgurl" alt />
        </dt>
        <dd>{{item.imgtext}}</dd>
      </dl>
    </el-tab-pane>
    <el-tab-pane label="杏花春" name="fourth4">
      <dl v-for="(item,index) in fourth4" :key="index">
        <dt>
          <img :src="item.imgurl" alt />
        </dt>
        <dd>{{item.imgtext}}</dd>
      </dl>
    </el-tab-pane>
    <el-tab-pane label="盛世兴" name="fourth5">
      <dl v-for="(item,index) in fourth5" :key="index">
        <dt>
          <img :src="item.imgurl" alt />
        </dt>
        <dd>{{item.imgtext}}</dd>
      </dl>
    </el-tab-pane>
    <el-tab-pane label="其 它" name="fourth6">
      <dl v-for="(item,index) in fourth6" :key="index">
        <dt>
          <img :src="item.imgurl" alt />
        </dt>
        <dd>{{item.imgtext}}</dd>
      </dl>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      activeName: "first",
      first: [
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%9B%BD%E5%AE%B4%E6%B1%BE%E9%85%92%EF%BC%8860%E7%94%B2%E5%AD%90%EF%BC%89%E5%B0%8F.gif",
          imgtext: "国宴汾酒（60甲子）  60%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%9B%BD%E5%AE%B4%E6%B1%BE%E9%85%92%EF%BC%8848%E6%98%9F%E5%AE%BF%EF%BC%89%E5%B0%8F.gif",
          imgtext: "国宴汾酒（48星宿）  55%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%9B%BD%E5%AE%B4%E6%B1%BE%E9%85%92%EF%BC%8836%E8%AE%A1)%E5%B0%8F.gif",
          imgtext: "国宴汾酒（36计）  53%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%9B%BD%E5%AE%B4%E6%B1%BE%E9%85%92%EF%BC%8812%E7%94%9F%E8%82%96%EF%BC%89%E5%B0%8F.gif",
          imgtext: "国宴汾酒（12生肖）  42%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E9%9D%92%E8%8A%B1%E6%B1%BE%E9%85%92(%E5%B0%8F).jpg",
          imgtext: "青花汾酒"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E4%BA%8C%E5%8D%81%E5%B9%B4%E9%99%88%E9%85%BF%E9%87%91%E5%A5%96%E6%B1%BE%E9%85%92(%E5%B0%8F).jpg",
          imgtext: "二十年陈酿金奖汾酒"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%B0%81%E5%9D%9B%E5%8D%81%E4%BA%94%E5%B9%B4%E8%80%81%E7%99%BD%E6%B1%BE%E9%85%92%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "封坛十五年老白汾酒"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E9%86%87%E6%9F%94%E8%80%81%E7%99%BD%E6%B1%BE(%E5%B0%8F).jpg",
          imgtext: "醇柔老白汾"
        }
      ],
      second: [
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E7%AB%B9%E5%8F%B6%E9%9D%92%E9%85%92%EF%BC%88%E7%88%B6%E4%BA%B2%E7%9A%84%E5%91%B3%E9%81%93%EF%BC%89381l%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "竹叶青(父亲的味道)  38%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%9B%BD%E9%85%BF%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "国酿竹叶青酒  45%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E7%B2%BE%E9%85%BF%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "精酿竹叶青酒  42%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E7%89%B9%E9%85%BF%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "特酿竹叶青酒  38%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%9B%BD%E5%AE%9D%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "国宝竹叶青酒  38%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E9%87%91%E8%B1%A1%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "金象竹叶青酒  38%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E7%89%A7%E7%AB%A5%E7%AB%B9%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "牧童竹叶青酒  45%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%86%B0%E6%B4%BE(%E5%B0%8F).jpg",
          imgtext: "冰派竹叶青酒  38%vol"
        }
      ],
      third: [
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/004s.jpg",
          imgtext: "汾清私藏1979  52%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/009s.jpg",
          imgtext: "汾清御藏  52%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/008s.jpg",
          imgtext: "汾清 鉴赏  45%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/007s.jpg",
          imgtext: "汾清  42%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/005s.jpg",
          imgtext: "汾清A20  42%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/003s.jpg",
          imgtext: "汾清私藏1999  42%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/002s.jpg",
          imgtext: "汾清私藏1996  52%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/001s.jpg",
          imgtext: "汾清A20  52%vol"
        }
      ],
      fourth: [
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E9%87%91%E7%99%BD%E7%8E%89%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "金白玉  45%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E9%93%B6%E7%99%BD%E7%8E%89%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "银白玉  40%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E7%8E%B2%E7%8F%91%E7%99%BD%E7%8E%89%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "玲珑白玉  40%vol"
        }
      ],
      fourth2: [
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E9%BB%91%E7%8E%AB%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "黑玫瑰  45%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E7%BA%A2%E7%8E%AB%E7%91%B0%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "红玫瑰  40%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E7%8E%B2%E7%8F%91%E7%BA%A2%E7%8E%AB%E7%91%B0%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "玲珑玫瑰  40%vol"
        }
      ],
      fourth3: [
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/x02.jpg",
          imgtext: "十八年陈酿杏花春  53%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/x01.jpg",
          imgtext: "原浆杏花春  60%vol"
        }
      ],
      fourth4: [
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/x13.jpg",
          imgtext: "喜庆红盒杏花春  52%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/x12.jpg",
          imgtext: "金卡杏花春  52%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/x11.jpg",
          imgtext: "青花瓷杏花春  38%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/x10.jpg",
          imgtext: "125ml杏花春  50%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/x09.jpg",
          imgtext: "特制杏花春  50%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/x08.jpg",
          imgtext: "蓝花瓷杏花春  53%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/x07.jpg",
          imgtext: "珍藏版青花瓷杏花春  45%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/x04.jpg",
          imgtext: "十八年陈酿杏花春  39%vol"
        }
      ],
      fourth5: [
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/53%E5%BA%A6%E6%B8%85%E9%A6%99%E5%9E%8B%E7%9B%9B%E4%B8%96%E5%85%B4%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "清香型盛世兴  53%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/52%E5%BA%A6%E6%B5%93%E9%A6%99%E7%9B%9B%E4%B8%96%E5%85%B4%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "浓香型盛世兴  52%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E7%9B%9B%E4%B8%96%E5%85%B4x.jpg",
          imgtext: "尚品盛世兴酒  52%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/9%E5%8F%B7x.jpg",
          imgtext: "尚品盛世兴酒（9号）  45%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%85%B8%E8%97%8FA1002.jpg",
          imgtext: "盛世兴典藏A1  50%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%85%B8%E8%97%8FA3002.jpg",
          imgtext: "盛世兴典藏A3  53%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%85%B8%E8%97%8Fv3002.jpg",
          imgtext: "盛世兴典藏V3  52%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/1%E5%8F%B7x.jpg",
          imgtext: "尚品盛世兴酒（1号）  52%vol"
        }
      ],
      fourth6: [
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E6%84%8F%E4%BC%9A%E8%87%AA%E8%B0%83%E9%85%92%E7%95%85%E4%BA%AB%E7%89%8802.jpg",
          imgtext: "意会自调酒（畅享版）  38%vol + 28%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E6%84%8F%E4%BC%9A%E8%87%AA%E8%B0%83%E9%85%92%E4%B9%90%E4%BA%AB%E7%89%88002.jpg",
          imgtext: "意会自调酒（乐享版）  38%vol+28%vol"
        },
        {
          imgurl:
            "https://www.fenjiu.com.cn/upfiles/%E5%85%AD%E5%B9%B4%E9%99%88%E9%85%BF%E8%80%81%E7%99%BD%E5%B9%B2%EF%BC%88%E5%B0%8F%EF%BC%89.jpg",
          imgtext: "六年陈酿老白干  42%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/2005312173467.jpg",
          imgtext: "福圆酒  42%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/2005312173826.jpg",
          imgtext: "国宴礼品酒  50%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/2005312174733.jpg",
          imgtext: "杨家将七狼八虎（浓香）  42%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/2005312175214.jpg",
          imgtext: "杨家将金玉缘（浓香）  38%vol"
        },
        {
          imgurl: "https://www.fenjiu.com.cn/upfiles/2005312175359.jpg",
          imgtext: "大运享通  42%vol"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    }
  },
  mounted() {
    for(var i=0;i<$('dl dt img').length;i++){
	$('dl dt img')[i].onmouseover=function(){
		this.style.transform='scale(1.2,1.2)'
		this.style.transition='all 0.5s'
	}
	$('dl dt img')[i].onmouseout=function(){
		this.style.transform='scale(1,1)'
		this.style.transition='all 0.5s'
	}
}
  }
};
</script>

<style scoped lang="less">
dl {
  float: left;
  text-align: center;
  width: 260px;
  height: 180px;
  background-color: #fff;
  margin: 20px;
  border-radius: 20px;
  dt {
    margin: 20px 0;
  }
  dd {
    font-size: 14px;
    font-weight: 600;
  }
}
</style>