// 柱状图1
{
    var myChart = this.$echarts.init(document.querySelector('.bar .chart'));
    var option = {
        color: ['#b7b7b7'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            top: "10px",
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    color: 'white'
                },
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#b7b7b7'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: 'white'
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#b7b7b7'
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [10, 52, 200, 334, 390, 330, 220],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option)
    // 自适应盒子大小,以及屏幕大小
    window.addEventListener("resize", function () {
        myChart.resize();
    })
}
{
    console.log(111)
}