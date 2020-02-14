$(function(){
	
var myChart = echarts.init(document.getElementById('main'));
console.log(echarts.version);
var geoCoordMap = {
	'三亚': [109.518345,18.258633],
	'武汉':[114.311754,30.598604],
	'海安新港':[110.223378,20.27313],
	'海口市龙华区兴泰粤海酒店':[110.327781,20.032284],
	'文昌东郊椰林':[110.870755,19.536883],
	'东方市海郡小区':[108.686062,19.147978],
	'东方山海湾小区6栋':[108.692668,19.095059],
	'东方山海湾小区9栋':[108.692668,19.095059],
	'东方市人民医院':[108.650883,19.101589],
	'海南省人民医院':[110.294165,20.011119],
	'东方火车站':[108.697839,19.094813],
	'东方市涛昇国际小区C1栋':[108.689745,19.101142],
	'泰国':[100.60416,13.913288],
	'美兰机场':[110.470153,19.942054],
	'东方市海边':[108.654456,19.120854],
	'山海湾养天和大药房':[108.671467,19.098867],
	'东方市人民医院':[108.650883,19.101589]
};

var BL101Data = [
    [{name:'武汉'}, {name:'海安新港',value:50}],
    [{name:'海安新港'}, {name:'海口市龙华区兴泰粤海酒店',value:20}],
    [{name:'海口市龙华区兴泰粤海酒店'}, {name:'文昌东郊椰林',value:20}],
    [{name:'文昌东郊椰林'}, {name:'东方市海郡小区',value:20}],
    [{name:'东方市海郡小区'}, {name:'东方市人民医院',value:100}]
];

var BL002Data = [
    [{name:'东方山海湾小区6栋'}, {name:'东方山海湾小区9栋',value:60}],
    [{name:'东方山海湾小区6栋'}, {name:'东方市人民医院',value:20}],
    [{name:'东方市人民医院'}, {name:'东方山海湾小区6栋',value:20}],
    [{name:'东方山海湾小区6栋'}, {name:'海南省人民医院',value:80}]
];

var BL001Data = [
    [{name:'东方火车站'}, {name:'东方市涛昇国际小区C1栋',value:60}],
    [{name:'东方市涛昇国际小区C1栋'}, {name:'泰国',value:20}],
    [{name:'泰国'}, {name:'美兰机场',value:20}],
    [{name:'美兰机场'}, {name:'东方市涛昇国际小区C1栋',value:80}],
    [{name:'东方市涛昇国际小区C1栋'}, {name:'东方市海边',value:20}],
    [{name:'东方市涛昇国际小区C1栋'}, {name:'山海湾养天和大药房',value:20}],
    [{name:'东方市涛昇国际小区C1栋'}, {name:'东方市人民医院',value:80}]
];
 
//var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var planePath = 'path://M14,7c-0.004-0.6904-0.4787-1.2889-1.15-1.45l-1.39-3.24l0,0l0,0l0,0C11.3833,2.1233,11.2019,2.001,11,2H4C3.8124,2.0034,3.6425,2.1115,3.56,2.28l0,0l0,0l0,0L2.15,5.54C1.475,5.702,0.9994,6.3059,1,7v3.5h1v1c0,0.5523,0.4477,1,1,1s1-0.4477,1-1v-1h7v1c0,0.5523,0.4477,1,1,1s1-0.4477,1-1v-1h1V7zM4.3,3h6.4l1.05,2.5h-8.5L4.3,3zM3,9C2.4477,9,2,8.5523,2,8s0.4477-1,1-1s1,0.4477,1,1S3.5523,9,3,9zM12,9c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S12.5523,9,12,9z'

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#a6c84c' ];
var series = [];
[['101号，东方市', BL101Data],['2号，东方市', BL002Data],['1号，东方市', BL001Data]].forEach(function (item, i) {
    series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + '确诊病例',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 10
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' 确诊病例',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
});
var bmap = {//设置百度地图显示哪些东西
	center: [109.84502,19.239202],//设置初始中心位置为：琼中黎族苗族自治县人民政府
	zoom: 9,//修改地图放大倍数，原来的是全国地图，倍数为6
	roam: true,// 设置为可漫游
	mapStyle: {
		styleJson: [{
				'featureType': 'land', //调整陆地颜色
				'elementType': 'geometry',
				'stylers': {
					'color': '#EAEAEA'
				}
			},
			 
			 
			{
				'featureType': 'highway', //调整高速道路颜色
				'elementType': 'geometry',
				'stylers': {
					'color': '#C5C1AA'
				}
			},
			{
				'featureType': 'highway', //调整高速路的名字是否可视
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			},
			{
				'featureType': 'arterial', //调整一些干道颜色
				'elementType': 'geometry',
				'stylers': {
					'color': '#fefefe'
				}
			},
			{
				'featureType': 'arterial',
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			},
			 {
				'featureType': 'poi',
				'elementType': 'all',
				'stylers':{
				    'visibility': 'off'
				}
                	},
			{
				'featureType': 'green',
				'elementType': 'geometry',
				'stylers': {
					'visibility': 'off'
				}
			},
			{
				'featureType': 'water',//修改水域的颜色
				'elementType': 'geometry',
				'stylers': {
					'color': '#CAE1FF'
				}
			},
			{
				'featureType': 'subway', //调整地铁颜色
				'elementType': 'geometry.stroke',
				'stylers': {
					'color': '#003051'
				}
			},
			{
				'featureType': 'subway',
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			},
			{
				'featureType': 'railway',
				'elementType': 'geometry',
				'stylers': {
					'visibility': 'off'
				}
			},
			{
				'featureType': 'railway',
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			},
			{
				'featureType': 'all', //调整所有的标签的边缘颜色
				'elementType': 'labels.text.stroke',
				'stylers': {
					'color': '#ffffff'
				}
			},
			{
				'featureType': 'all', //调整所有标签的填充颜色
				'elementType': 'labels.text.fill',
				'stylers': {
					'color': '#555555'
			        }
            		}, 
			{
				'featureType': 'manmade',
				'elementType': 'all',
				'stylers': {
				    'color': '#d1d1d1'
				}
			}, 
			{
				'featureType': 'local',
				'elementType': 'geometry',
				'stylers': {
					'visibility': 'off'
				}
			},
			{
				'featureType': 'local',
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			},
			{
				'featureType': 'subway',
				'elementType': 'geometry',
				'stylers': {
					'lightness': -65
				}
			},{

				'featureType': 'railway',
				'elementType': 'all',
				'stylers': {
					'lightness': -40
				}
			},
				{
				'featureType': 'boundary',//调整省界线样式
				'elementType': 'geometry',
				'stylers': {
					'color': '#000000',
					'weight': '1',
					'lightness': 30 //亮度:-100～100
					}
					}
			]
		}
	}

option = {
    bmap: bmap,
    title: {
        text: '海南省疫情轨迹跟踪',  // 图名标题
        subtext: '地图数据来源',  // 图名副标题
        sublink: 'https://www.jianshu.com/p/a8377b25514e',  //汤的地图使用简易教程链接
        left: 'center'
    },

    //backgroundColor: '#404a59',     
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['北京 Top10', '上海 Top10', '广州 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    dataRange: {
        min: 0,
        max: 100,
        x: 'right',
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        }
    },
    

    // geo: {
    //     map: 'world',
    //     center: [115.97, 29.71],
    //     zoom: 5,
    //     label: {
    //         emphasis: {
    //             show: false
    //         }
    //     },
    //     roam: true,
    //     itemStyle: {
    //         normal: {
    //             areaColor: '#323c48',
    //             borderColor: '#404a59'
    //         },
    //         emphasis: {
    //             areaColor: '#2a333d'
    //         }
    //     }
    // },
    series: series
};





myChart.setOption(option);
})
