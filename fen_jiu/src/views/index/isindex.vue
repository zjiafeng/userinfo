<template>
  <div id="isindex">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in image" :key="item">
        <img class="bg" :src="item" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <div class="left">
        <h2 @click="()=>{this.$router.push('/Index/NewCenter')}">
          <span>丨</span>新闻资讯
        </h2>
        <ul>
          <li v-for="(item,idx) in message" :key="idx">
            <img src="@/assets/img/sleep2.gif" alt />
            <a :href="item.url">{{item.text}}</a>
          </li>
        </ul>
      </div>
      <div class="right">
        <h2 @click="()=>{this.$router.push('/Index/FenjiuCulture')}">
          <span>丨</span>汾酒文化
        </h2>
        <div class="flex">
          <ul>
            <li v-for="(item,idx) in cluture" :key="idx">
              <img src="@/assets/img/icon01.gif" alt />
              <a :href="item.url">{{item.text}}</a>
            </li>
          </ul>
          <dl>
            <dd>李白醉酒</dd>
            <dt><img src="@/assets/img/index_lb.jpg" alt=""></dt>
            
          </dl>
          <dl>
            <dd>[- 汾酒博物馆 -]</dd>
            <dt><img src="@/assets/img/bowu.jpg" alt=""></dt>
            
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bg1 from '@/assets/img/bg1.jpg';
import bg2 from '@/assets/img/bg2.jpg';
import bg3 from '@/assets/img/bg3.jpg';
import bg4 from '@/assets/img/bg4.jpg';
import bg5 from '@/assets/img/bg5.jpg';
import bg6 from '@/assets/img/bg6.jpg';
import bg7 from '@/assets/img/bg7.jpg';
export default {
  name: "isindex",
  data() {
    return {
      image: [bg1,bg2,bg3,bg4,bg5,bg6,bg7],
      message: [
        {
          url:
            "https://www.fenjiu.com.cn/docc/news/news_open.asp?auto_id=3701&kind=47",
          text: "汾酒科技创新再出发"
        },
        {
          url:
            "https://www.fenjiu.com.cn/docc/news/news_open.asp?auto_id=3696&kind=47",
          text: "汾酒综合活动中心、销售中心项目开工为汾酒高质量发展赋能"
        },
        {
          url:
            "https://www.fenjiu.com.cn/docc/news/news_open.asp?auto_id=3685&kind=47",
          text: "山西省副省长吴伟一行来汾酒调研指导工作"
        },
        {
          url:
            "https://www.fenjiu.com.cn/docc/news/news_open.asp?auto_id=3675&kind=47",
          text: "公司召开汾阳杏花村酒文旅融合规划汇报会丨汾·发布"
        },
        {
          url:
            "https://www.fenjiu.com.cn/docc/news/news_open.asp?auto_id=3674&kind=47",
          text: "吕梁市纪委书记徐德峰一行来我公司考察调研丨汾·发布"
        },
        {
          url:
            "https://www.fenjiu.com.cn/docc/news/news_open.asp?auto_id=2349&kind=47",
          text: "沈怡方：中国白酒创新是出路"
        },
        {
          url:
            "https://www.fenjiu.com.cn/docc/news/news_open.asp?auto_id=2335&kind=47",
          text: "白酒行业发展与营销趋势判断"
        },
        {
          url:
            "https://www.fenjiu.com.cn/docc/news/news_open.asp?auto_id=2350&kind=47",
          text: "白酒行业两极分化加剧 品牌集中度将逐步提升"
        }
      ],
      cluture:[
        {url:'https://www.fenjiu.com.cn/docc/culture/culture.asp',text:'汾酒史话'},
        {url:'https://www.fenjiu.com.cn/docc/culture/culture.asp?kind=54',text:'诗酒第一'},
        {url:'https://www.fenjiu.com.cn/docc/culture/culture_p.asp?kind=55',text:'书画题词'},
        {url:'https://www.fenjiu.com.cn/docc/culture/culture.asp?kind=56',text:'名人典故'},
        {url:'https://www.fenjiu.com.cn/docc/culture/culture.asp?kind=57',text:'传说故事'},
        {url:'https://www.fenjiu.com.cn/docc/culture/culture.asp?kind=58',text:'专家评说'},
        {url:'https://www.fenjiu.com.cn/docc/culture/culture_p.asp?kind=59',text:'酒器博览'}
      ]
    };
  }
};
</script>
<style scoped lang="less">
.bg {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  margin-top: 50px;
  display: flex;
  .left {
    width: 500px;
    h2 {
      cursor: pointer;
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 20px;
      width: 150px;
      span {
        color: rgb(255, 51, 51);
      }
    }
    ul {
      margin-left: 30px;
      li {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        img {
          margin-right: 10px;
        }
        a {
          color: #303133;
          &:hover {
            color: rgb(255, 51, 51);
          }
        }
      }
    }
  }
  .right{
    // width: 50%;/
    h2 {
      width: 150px;
      cursor: pointer;
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 20px;
      span {
        color: rgb(68, 128, 82);
      }
    }
    .flex{
      display: flex;
      dl{
        margin: 20px;
        text-align: center;
        color:#FF0000;
        dd{
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
    }
    ul {
      margin-left: 30px;
      li {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        img {
          margin-right: 10px;
        }
        a {
          color: rgb(68, 128, 82);
        }
      }
    }
  }
}
</style>