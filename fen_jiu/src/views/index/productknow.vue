<template>
    <div id="productknow">
        <dl>
            <dt><img src="https://www.fenjiu.com.cn/upfiles/200544144308.gif" alt=""></dt>
            <dd>
                <h2><img src="@/assets/img/icon01.gif" alt=""> 酒与养生</h2>
                <p>人类最初的饮酒行为虽然还不能够称之为饮酒养生，但却与养生保健、防病治病有着密切的联系。学者一般认为，最初的酒是人类采集的野生水果在剩余的时候，得到适宜条件，自然发酵而成。由于许多野生水果是具有药用价值的，所以最初的酒可以称得上是天然的“药酒”，它自然对人体健康有一定的保护和促进作用。当然，这时人类虽然从饮酒得到了养生的好处，但他们可能并没有明确的养生目的。</p>
            </dd>
        </dl>
        <div class="clear"></div>
        <ul>
            <li v-for="item in list" :key="item.text">
                <img src="@/assets/img/icon01.gif" alt=""><a :href="item.url">{{item.text}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'productknow',
        data(){
            return{
                list:[
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=2505',text:'汾酒·汾清酒的由来'},
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=1949',text:'竹叶青酒的保健功效'},
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=1009',text:'说酒'},
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=1008',text:'酒为什么越陈越好？'},
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=396',text:'中国白酒的特点、名称和起源'},
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=395',text:'调查显示适当饮酒对健康有好处'},
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=394',text:'饮汾酒的学问'},
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=393',text:'一剑封喉：山西汾酒绿色健康超越'},
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=390',text:'酒的医药保健功能'},
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=389',text:'解酒十法'},
                    {url:'https://www.fenjiu.com.cn/docc/product/knowledge_open.asp?auto_id=386',text:'低聚果糖在酒类产品中的应用'}
                ]
            }
        }
    }
</script>

<style scoped lang="less">
dl{
    dt{
        float: left;
        margin-right: 30px;
    }
    dd{
        
        h2{
            font-size: 20px;
            font-weight: 600;
            padding-top: 10px;
        }
        p{
            text-indent: 2em;
            font-size: 12px;
            height: 30px;
            line-height: 30px;
        }
    }
}
ul{
    margin-top: 30px;
    li{
        height: 30px;
        line-height: 30px;
        img{
            margin: 0 10px;
        }
        a{
            font-size: 14px;
            color: #909399;
            &:hover{
                color: #303133;
            }
        }
    }
}
</style>