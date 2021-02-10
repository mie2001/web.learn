/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
var app = new Vue({
    el: "#app",
    data: {
        city: '',
        weatherList: []
    },
    methods: {
        searchWeather: function(city2) {
                //console.log('天气查询');
                console.log(city2);
                // 调用接口
                // 保存this
                var that = this;
                axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + (city2 == undefined ? this.city : city2))
                    .then(function(response) {
                        //console.log(response);
                        console.log(response.data.data.forecast);
                        that.weatherList = response.data.data.forecast
                    }, function(err) {}),


            }
            //还有可以函数里面套函数
            //chagecity: function(city) {
            //  city = this.city;
            //this.searchWeather();
    }
},
})