/*
功能分析:
歌曲搜索:搜歌手名字会在左侧的歌曲信息容器展示其所有歌曲
歌曲播放:点击左侧歌曲信息容器的播放图标会播放歌曲，底下显示普通的歌曲调节栏
歌曲封面:当歌曲播放的时候中间的唱片更改图片
歌曲评论:播放歌曲后展示热门留言
播放动画:唱片会旋转起来
*/
/*
事件分析：
点击搜索图标>请求接口-显示歌曲信息  
点击播放按钮>显示控制栏+唱片旋转+请求接口-唱片图片更改、获取热门留言
点击mv按钮>跳转页面并且播放mv
控制栏的一系列事件：暂停、进度条、声音、其他设置
*/
var player = new Vue({
    el: "#player",
    data: {
        query: '',
    },
    methods: {
        search: function() {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(function(response) { console.log(response); }, function(err) {});
        }
    }

})