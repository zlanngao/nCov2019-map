$(function(){
	
var myChart = echarts.init(document.getElementById('main'));
var geoCoordMap = {

'白马井':[109.564839,19.477681],
'白马井市':[109.564839,19.477681],
'白坡里':[110.341746,20.027409],
'白坡里路':[110.355537,20.025802],
'百花谷':[109.650584,18.238613],
'不夜城':[110.341732,20.024627],
'昌城村农贸市场':[110.450763,19.869321],
'昌江':[109.062464,19.303998],
'昌江县':[109.062464,19.303998],
'昌江县城宝真超市':[110.472275,19.259129],
'澄迈县老城镇迎宾路玉海金华小区':[110.136125,19.993909],
'澄迈中学':[110.016296,19.728977],
'川渝商场':[110.355537,20.025802],
'从椰岛广场':[110.333529,20.030045],
'大小洞天景区':[109.164689,18.306733],
'儋州光村':[109.365503,19.64604],
'儋州那大镇':[109.566665,19.55713],
'儋州市白马井':[109.564839,19.477681],
'儋州市合罗农场':[109.372485,19.4458],
'儋州市那大镇':[109.566665,19.55713],
'儋州市那大镇解放北路':[109.578438,19.522953],
'儋州市那大镇解放路':[109.578294,19.528873],
'儋州市那大镇万福市场':[109.587439,19.509489],
'定安某小区':[110.365533,19.68712],
'定安天籁谷小区1幢':[110.361641,19.684688],
'定安县':[110.365533,19.68712],
'定安县乡江丽景小区11栋':[110.365533,19.68712],
'东方':[108.658567,19.101105],
'东方海郡小区':[108.686062,19.147978],
'东方海郡小区3栋':[108.686062,19.147978],
'东方山海湾小区':[108.692668,19.095059],
'东方市':[108.658567,19.101105],
'凤凰菜市场':[109.605527,27.953848],
'福山镇菜市场':[109.9377,19.84146],
'富强巷':[110.012021,19.739204],
'港口维也纳国际酒店':[110.368832,19.992484],
'港口希尔悦酒店':[110.346906,20.045578],
'广东徐闻海安新港':[110.223378,20.27313],
'广西北海港':[110.355537,20.025802],
'广州':[113.271431,23.135336],
'桂林':[110.203545,25.242886],
'哈尔滨':[126.541615,45.808826],
'海安':[120.474433,32.539196],
'海安港':[120.474433,32.539196],
'海安旧港':[120.474433,32.539196],
'海安新港':[120.519038,32.511169],
'海口':[110.325525,20.044049],
'海口福达美食街':[110.352052,20.004434],
'海口港':[110.288992,20.026747],
'海口丽华大酒店':[110.36656,19.99485],
'海口龙华区金宇街道金地路':[110.329521,20.010916],
'海口美兰机场':[110.468596,19.944221],
'海口美兰区蓝天街道白坡里':[110.341746,20.027409],
'海口骑楼小吃街':[110.325525,20.044049],
'海口汽车西站':[110.296446,20.018175],
'海口琼山区':[110.360526,20.009151],
'海口日月广场':[110.353251,20.022084],
'海口市':[110.325525,20.044049],
'海口市凯威大酒店':[110.288002,20.023626],
'海口市蓝天路':[110.35356,20.026898],
'海口市龙华区城西镇鸿侨公寓':[110.32882,19.970769],
'海口市龙华区城西镇金南苑小区B1栋':[110.323216,19.999571],
'海口市龙华区义龙西路汉庭酒店新温泉分店':[110.33808,20.031132],
'海口市美兰区':[110.373498,20.034646],
'海口市美兰区三江农场':[110.628288,19.888192],
'海口市琼山区':[110.360526,20.009151],
'海口西站':[110.296446,20.018175],
'海口新港':[110.325525,20.044049],
'海口兴泰粤海酒店':[110.327781,20.032284],
'海口秀英港':[110.293096,20.026517],
'海南美兰机场':[110.468596,19.944221],
'海南文昌市月亮城小区':[110.758935,19.637816],
'海南西部中心医院':[100.626621,36.292102],
'海医附':[110.355537,20.025802],
'杭州':[120.215512,30.253083],
'后坑村':[110.355537,20.025802],
'湖北':[110.355537,20.025802],
'湖北省':[114.348441,30.5516],
'吉阳区':[109.602264,18.298121],
'嘉积镇温泉天来泉':[110.428951,19.218219],
'解放路天懋超市':[109.511145,18.255717],
'乐东县':[109.180508,18.755871],
'临高县越丰宝宾馆大厅':[109.688336,19.910205],
'三亚市崖州区南滨佳康宾馆':[109.154922,18.39476],
'三亚市崖州区南山花园小区':[109.189267,18.368658],
'三亚市崖州区施顿花园':[109.154922,18.39476],
'三亚天涯区大好河山旅':[109.398626,18.452443],
'三亚湾':[109.427985,18.298857],
'三亚湾港务码头':[109.427985,18.298857],
'三亚湾森林公园':[109.427985,18.298857],
'石碌新地税局宿舍':[110.803653,19.557127],
'台湾风情小镇小区':[109.901031,19.898859],
'天涯海角景区':[109.359673,18.298693],
'天涯区':[109.398626,18.452443],
'天涯区升升超市':[109.446364,18.298743],
'天涯区羊栏市场':[109.460545,18.3047],
'头铺村菜市场':[110.355537,20.025802],
'万达广场三楼':[110.284457,19.985779],
'万宁':[110.399434,18.800107],
'万宁神州半岛':[110.390861,18.676725],
'万宁石梅湾':[110.294288,18.675434],
'万宁市石梅湾九里三期':[110.258969,18.659318],
'万宁市文化商业广场广百汇超市':[110.3955,18.804725],
'万宁文化商业广场广百汇超市':[110.3955,18.804725],
'万泉河家园小区':[109.877176,19.126259],
'万应堂大药房':[109.446871,18.298898],
'旺佳旺超市南沙店':[113.531436,22.807929],
'文昌':[110.804509,19.549062],
'文昌昌洒镇':[110.938725,19.789305],
'文昌东郊':[110.857333,19.538127],
'文昌公园':[110.761837,19.623163],
'秀英区锦地翰城Ⅱ期19栋':[110.300436,20.013642],
'崖州':[109.154922,18.39476],
'雅居乐售楼部':[110.355537,20.025802],
'友谊阳光城御花园鲜花花店':[131.814595,46.772973],
'月亮城小区':[110.758935,19.637816],
'月亮湾农贸市场':[111.026172,19.678029],
'湛江':[110.365554,21.276723],
'长沙':[112.945473,28.234889],
'郑州':[113.631419,34.753439],
'中沙路头铺农贸市场':[110.321185,19.994988],
'重庆':[106.558434,29.568996]
};

var BL101Data = [
[{name:'白马井',value:20}],
[{name:'白马井市',value:20}],
[{name:'白坡里',value:60}],
[{name:'白坡里路',value:60}],
[{name:'百花谷',value:60}],
[{name:'不夜城',value:60}],
[{name:'昌城村农贸市场',value:60}],
[{name:'昌江',value:60}],
[{name:'昌江县',value:60}],
[{name:'昌江县城宝真超市',value:60}],
[{name:'澄迈县老城镇迎宾路玉海金华小区',value:60}],
[{name:'澄迈中学',value:60}],
[{name:'川渝商场',value:60}],
[{name:'从椰岛广场',value:60}],
[{name:'大小洞天景区',value:60}],
[{name:'儋州光村',value:60}],
[{name:'儋州那大镇',value:60}],
[{name:'儋州市白马井',value:60}],
[{name:'儋州市合罗农场',value:60}],
[{name:'儋州市那大镇',value:60}],
[{name:'儋州市那大镇解放北路',value:60}],
[{name:'儋州市那大镇解放路',value:60}],
[{name:'儋州市那大镇万福市场',value:60}],
[{name:'定安某小区',value:60}],
[{name:'定安天籁谷小区1幢',value:20}],
[{name:'定安县',value:60}],
[{name:'定安县乡江丽景小区11栋',value:60}],
[{name:'东方',value:80}],
[{name:'东方海郡小区',value:60}],
[{name:'东方海郡小区3栋',value:60}],
[{name:'东方山海湾小区',value:60}],
[{name:'东方市',value:80}],
[{name:'凤凰菜市场',value:60}],
[{name:'福山镇菜市场',value:60}],
[{name:'富强巷',value:60}],
[{name:'港口维也纳国际酒店',value:60}],
[{name:'港口希尔悦酒店',value:60}],
[{name:'广东徐闻海安新港',value:60}],
[{name:'广西北海港',value:60}],
[{name:'广州',value:60}],
[{name:'桂林',value:60}],
[{name:'哈尔滨',value:60}],
[{name:'海安',value:60}],
[{name:'海安港',value:60}],
[{name:'海安旧港',value:60}],
[{name:'海安新港',value:60}],
[{name:'海口',value:120}],
[{name:'海口福达美食街',value:60}],
[{name:'海口港',value:60}],
[{name:'海口丽华大酒店',value:60}],
[{name:'海口龙华区金宇街道金地路',value:60}],
[{name:'海口美兰机场',value:60}],
[{name:'海口美兰区蓝天街道白坡里',value:60}],
[{name:'海口骑楼小吃街',value:60}],
[{name:'海口汽车西站',value:60}],
[{name:'海口琼山区',value:60}],
[{name:'海口日月广场',value:60}],
[{name:'海口市',value:100}],
[{name:'海口市凯威大酒店',value:60}],
[{name:'海口市蓝天路',value:60}],
[{name:'海口市龙华区城西镇鸿侨公寓',value:60}],
[{name:'海口市龙华区城西镇金南苑小区B1栋',value:60}],
[{name:'海口市龙华区义龙西路汉庭酒店新温泉分店',value:60}],
[{name:'海口市美兰区',value:60}],
[{name:'海口市美兰区三江农场',value:60}],
[{name:'海口市琼山区',value:60}],
[{name:'海口西站',value:60}],
[{name:'海口新港',value:60}],
[{name:'海口兴泰粤海酒店',value:60}],
[{name:'海口秀英港',value:60}],
[{name:'海南美兰机场',value:60}],
[{name:'海南文昌市月亮城小区',value:60}],
[{name:'海南西部中心医院',value:60}],
[{name:'海医附',value:60}],
[{name:'杭州',value:60}],
[{name:'后坑村',value:60}],
[{name:'湖北',value:60}],
[{name:'湖北省',value:60}],
[{name:'吉阳区',value:60}],
[{name:'嘉积镇温泉天来泉',value:60}],
[{name:'解放路天懋超市',value:60}],
[{name:'乐东县',value:60}],
[{name:'临高县越丰宝宾馆大厅',value:60}],
[{name:'三亚市崖州区南滨佳康宾馆',value:60}],
[{name:'三亚市崖州区南山花园小区',value:60}],
[{name:'三亚市崖州区施顿花园',value:60}],
[{name:'三亚天涯区大好河山旅',value:60}],
[{name:'三亚湾',value:90}],
[{name:'三亚湾港务码头',value:60}],
[{name:'三亚湾森林公园',value:60}],
[{name:'石碌新地税局宿舍',value:60}],
[{name:'台湾风情小镇小区',value:60}],
[{name:'天涯海角景区',value:60}],
[{name:'天涯区',value:180}],
[{name:'天涯区升升超市',value:10}],
[{name:'天涯区羊栏市场',value:60}],
[{name:'头铺村菜市场',value:60}],
[{name:'万达广场三楼',value:60}],
[{name:'万宁',value:80}],
[{name:'万宁神州半岛',value:60}],
[{name:'万宁石梅湾',value:5}],
[{name:'万宁市石梅湾九里三期',value:1}],
[{name:'万宁市文化商业广场广百汇超市',value:2}],
[{name:'万宁文化商业广场广百汇超市',value:2}],
[{name:'万泉河家园小区',value:60}],
[{name:'万应堂大药房',value:60}],
[{name:'旺佳旺超市南沙店',value:60}],
[{name:'文昌',value:60}],
[{name:'文昌昌洒镇',value:60}],
[{name:'文昌东郊',value:60}],
[{name:'文昌公园',value:60}],
[{name:'秀英区锦地翰城Ⅱ期19栋',value:60}],
[{name:'崖州',value:60}],
[{name:'雅居乐售楼部',value:60}],
[{name:'友谊阳光城御花园鲜花花店',value:60}],
[{name:'月亮城小区',value:60}],
[{name:'月亮湾农贸市场',value:60}],
[{name:'湛江',value:60}],
[{name:'长沙',value:60}],
[{name:'郑州',value:60}],
[{name:'中沙路头铺农贸市场',value:60}],
[{name:'重庆',value:60}]


];

var color = ['#a312c','#88684c'];
var series = [];
[['', BL101Data]].forEach(function (item, i) {
    series.push(        
        {
            name: item[0] + '确诊病例',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
               normal: {
                    show: false,//地址是否显示
		    color: color[i],
                    position: 'top',
                    formatter: '{b}'
                },

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
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            })
        });
});
var bmap = {//设置百度地图显示哪些东西
	center: [109.84502,19.239202],//设置初始中心位置为：琼中黎族苗族自治县人民政府
	zoom: 10,//修改地图放大倍数，原来的是全国地图，倍数为6
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
        sublink: 'http://www.gaohualing.cn',  //汤的地图使用简易教程链接
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
