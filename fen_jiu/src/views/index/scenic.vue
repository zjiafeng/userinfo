<template>
  <div id="scenic">
    <h2>酒 都 网 上 游 览</h2>
    <ul>
      <li v-for="item in list" :key="item.url">
        <a :href="item.url">
          <img :src="item.img" alt />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "scenic",
  data() {
    return {
      list: [
        {
          img:
            "https://www.fenjiu.com.cn/docc/visit/images/%E6%B1%BE%E9%85%92%E5%8D%9A%E7%89%A9%E9%A6%86.png",
          url: "https://www.fenjiu.com.cn/docc/visit/fjbwg.asp"
        },
        {
          img:
            "https://www.fenjiu.com.cn/docc/visit/images/%E5%B7%A5%E4%B8%9A%E5%9B%AD%E6%9E%97.png",
          url: "https://www.fenjiu.com.cn/docc/visit/fjgyyl.asp"
        },
        {
          img:
            "https://www.fenjiu.com.cn/docc/visit/images/%E5%8E%82%E5%8C%BA%E9%A3%8E%E8%B2%8C.png",
          url: "https://www.fenjiu.com.cn/docc/visit/fjcq.asp"
        },
        {
          img:
            "https://www.fenjiu.com.cn/docc/visit/images/%E8%80%81%E4%BD%9C%E5%9D%8A%E5%8D%9A%E7%89%A9%E9%A6%86.png",
          url: "https://www.fenjiu.com.cn/docc/visit/lzf.asp"
        },
        {
          img:
            "https://www.fenjiu.com.cn/docc/visit/images/%E4%BF%9D%E5%81%A5%E9%85%92%E5%9B%AD%E5%8C%BA.png",
          url: "https://www.fenjiu.com.cn/docc/visit/bjjyq.asp"
        },
        {
          img:
            "https://www.fenjiu.com.cn/docc/visit/images/%E9%85%92%E4%B8%9A%E5%8F%91%E5%B1%95%E5%8C%BA.png",
          url: "https://www.fenjiu.com.cn/docc/visit/jyfzq.asp"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
h2 {
  margin: 20px 0;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}
ul{
    padding: 0 50px;
    li{
        float: left;
        margin: 30px;
    }
}
</style>