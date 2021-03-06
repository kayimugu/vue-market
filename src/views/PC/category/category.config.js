// 电脑/办公
// 家居/家具/家装/厨具
// 男装/女装/童装/内衣
// 美妆/个护清洁/宠物
// 女鞋/箱包/钟表/珠宝
// 男鞋/运动/户外
// 房产/汽车/汽车用品
// 母婴/玩具乐器
// 食品/酒类/生鲜/特产
// 艺术/礼品鲜花/农资绿植
// 医药保健/计生情趣
// 图书/文娱/教育/电子书
// 机票/酒店/旅游/生活
// 理财/众筹/白条/保险
// 安装/维修/清洗/二手
const lists = [{
  "title": "手机 / 运营商 / 数码 ",
  "childrens": [{
    "title": "手机",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽带", "充话费 / 流量 ", "中国电信 ", " 中国移动 ", " 中国联通 ", " 京东通信 ", " 挑靓号 "]
  }, {
    "title": " 手机配件 ",
    "childrens": ["手机壳贴膜 ", " 手机存储卡 ", " 数据线充电器 ", " 手机耳机 ", " 创意配件 ", " 手机饰品 ", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机支架 ", " 拍照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": ["数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": ["存储卡 ", " 三脚架 / 云台相机包 ", " 滤镜闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智能机器 人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "电脑 / 办公 ",
  "childrens": [{
    "title": "电脑",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "电脑配件",
    "childrens": ["显示器", "CPU主板", "显卡硬盘", "内存机箱", "电源散热器", "显示器支架", " 中国联通 ", "刻录机/光驱声卡/扩展卡", "装机配件"]
  }, {
    "title": "外设产品",
    "childrens": ["鼠标键盘", "键鼠套装", "网络仪表仪器", "U盘移动硬盘", "鼠标垫摄像头", "线缆手写板硬盘", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机支架 ", " 拍照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": [" 数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": [" 存储卡 ", " 三脚架 / 云台相机包 ", " 滤镜闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智能机器人 ", " 运动跟 踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "家居 / 家具 / 家装 / 厨具 ",
  "childrens": [{
    "title": "家居",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽带 ", " 充话费 / 流量 ", " 中国电信 ", " 中国移动 ", " 中国联通 ", " 京东通信 ", " 挑靓号 "]
  }, {
    "title": " 手机配件 ",
    "childrens": [" 手机壳贴膜 ", " 手机存储卡 ", " 数据线充电器 ", " 手机耳机 ", " 创意配件 ", " 手机饰品 ", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机支 架 ", " 拍照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": [" 数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": [" 存储卡 ", " 三脚架 / 云台相机包 ", " 滤镜 闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智 能机器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "男装 / 女装 / 童装 / 内衣 ",
  "childrens": [{
    "title": "男装",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽带 ", " 充话费 / 流量 ", " 中国电信 ", " 中国移动 ", " 中国联通 ", " 京东通信 ", " 挑靓号 "]
  }, {
    "title": " 手机配件 ",
    "childrens": [" 手机壳贴膜 ", " 手机存储卡 ", " 数据线充电器 ", " 手机耳机 ", " 创意配件 ", " 手机饰品 ", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机支 架 ", " 拍照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": [" 数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": [" 存储卡 ", " 三脚架 / 云台相机包 ", " 滤镜 闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智 能机器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "美妆 / 个护清洁 / 宠物 ",
  "childrens": [{
    "title": "美妆",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽带", "充话费/流量", "中国电信", "中国移动", "中国联通", "京东通信", "挑靓号"]
  }, {
    "title": "手机配件",
    "childrens": ["手机壳贴膜", "手机存储卡", "数据线充电器", "手机耳机", "创意配件", "手机饰品", "手机电池苹果周边", "移动电源", "蓝牙耳机", "手机支架", "拍照配件"]
  }, {
    "title": "摄影摄像",
    "childrens": ["数码相机", "微单相机", "单反相机", "拍立得", "运动相机", "摄像机镜头", "户外器材", "影棚器材冲印服务", "数码相框"]
  }, {
    "title": "数码配件",
    "childrens": ["存储卡", "三脚架/云台相机包", "滤镜闪光 灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智能机 器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "女鞋 / 箱包 / 钟表 / 珠宝 ",
  "childrens": [{
    "title": "女鞋",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽带 ", " 充话费 / 流量 ", " 中国电信 ", " 中国移动 ", " 中国联通 ", " 京东通信 ", " 挑靓号 "]
  }, {
    "title": " 手机配件 ",
    "childrens": [" 手机壳贴膜 ", " 手机存储卡 ", " 数据线充电器 ", " 手机耳机 ", " 创意配件 ", " 手机饰品 ", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机支 架 ", " 拍照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": [" 数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": [" 存储卡 ", " 三脚架 / 云台相机包 ", " 滤镜 闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智 能机器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "男鞋 / 运动 / 户外 ",
  "childrens": [{
    "title": "男鞋",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽带", "充话 费 / 流量 ", " 中国电信 ", " 中国移动 ", " 中国联通 ", " 京东通信 ", " 挑靓号 "]
  }, {
    "title": " 手机配件 ",
    "childrens": [" 手机壳贴膜 ", " 手机存储卡 ", " 数据线充电器 ", " 手机耳机 ", " 创意配件 ", " 手机饰品 ", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机支架 ", " 拍 照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": [" 数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": [" 存储卡 ", " 三脚架 / 云台相机包 ", " 滤镜闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智能机器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": " 汽车 / 汽车用品 ",
  "childrens": [{
    "title": "汽车",
    "childrens": ["合约机", "手机卡", "宽带", "充话费/流量", "中国电信", "中国移动", "中国联通", "京东通信", "挑靓号"]
  }, {
    "title": "手机配件",
    "childrens": ["手机壳贴膜", "手机存储卡", "数据线充电器", "手机耳机", "创意配件", "手机饰品", "手机电池苹果周边", "移动电源", "蓝牙耳机", "手机支架", "拍照配件"]
  }, {
    "title": "摄影摄像",
    "childrens": ["数码相机", "微单相机", "单反相机", "拍立得", "运动相机", "摄像机镜头", "户外器材", "影棚器材冲印服务", "数码相框"]
  }, {
    "title": "数码配件",
    "childrens": ["存储卡", "三脚架/云台相机包", "滤镜闪光 灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智能机 器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "母婴 / 玩具乐器 ",
  "childrens": [{
    "title": "母婴",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽带", "充话费/流量", "中国电信", "中国移动", "中国联通", "京东通信", "挑靓号"]
  }, {
    "title": "手机配件",
    "childrens": ["手机壳贴膜", "手机存储卡", "数据线充电器", "手机耳机", "创意配件", "手机饰品", "手机电池苹果周边", "移动电源", "蓝牙耳机", "手机支架", "拍照配 件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": ["数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": ["存储卡 ", " 三脚架 / 云台相机包 ", " 滤镜闪光灯 / 手柄 相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": ["耳机 / 耳麦音箱 / 音响", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智能机器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": ["学生平板", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "食品 / 酒类 / 生鲜 / 特产 ",
  "childrens": [{
    "title": "食品",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽带 ", " 充话费 / 流量 ", " 中国电信 ", " 中国移动 ", " 中国联通 ", " 京东通信 ", " 挑靓号 "]
  }, {
    "title": " 手机配件 ",
    "childrens": [" 手机壳贴膜 ", " 手机存储卡 ", " 数据线充电器 ", " 手机耳机 ", " 创意配件 ", " 手机饰品 ", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机支 架 ", " 拍照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": [" 数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": [" 存储卡 ", " 三脚架 / 云台相机包 ", " 滤镜 闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智 能机器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "艺术 / 礼品鲜花 / 农资绿植 ",
  "childrens": [{
    "title": "艺术",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽 带 ", " 充话费 / 流量 ", " 中国电信 ", " 中国移动 ", " 中国联通 ", " 京东通信 ", " 挑靓号 "]
  }, {
    "title": " 手机配件 ",
    "childrens": [" 手机壳贴膜 ", " 手机存储卡 ", " 数据线充电器 ", " 手机耳机 ", " 创意配件 ", " 手机饰品 ", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机 支架 ", " 拍照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": [" 数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": [" 存储卡 ", " 三脚架 / 云台相机包 ", " 滤 镜闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智能机器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "图书 / 文娱 / 教育 / 电子书 ",
  "childrens": [{
    "title": "图书",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽 带 ", " 充话费 / 流量 ", " 中国电信 ", " 中国移动 ", " 中国联通 ", " 京东通信 ", " 挑靓号 "]
  }, {
    "title": " 手机配件 ",
    "childrens": [" 手机壳贴膜 ", " 手机存储卡 ", " 数据线充电器 ", " 手机耳机 ", " 创意配件 ", " 手机饰品 ", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机 支架 ", " 拍照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": [" 数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": [" 存储卡 ", " 三脚架 / 云台相机包 ", " 滤 镜闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智能机器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "手机 / 运营商 / 数码 ",
  "childrens": [{
    "title": "手机",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽带", "充话费 / 流量 ", "中国电信 ", " 中国移动 ", " 中国联通 ", " 京东通信 ", " 挑靓号 "]
  }, {
    "title": " 手机配件 ",
    "childrens": ["手机壳贴膜 ", " 手机存储卡 ", " 数据线充电器 ", " 手机耳机 ", " 创意配件 ", " 手机饰品 ", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机支架 ", " 拍照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": ["数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": ["存储卡 ", " 三脚架 / 云台相机包 ", " 滤镜闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智能机器 人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, {
  "title": "家居 / 家具 / 家装 / 厨具 ",
  "childrens": [{
    "title": "家居",
    "childrens": ["手机游戏", "手机", "5G手机", "拍照手机", "全面屏手机", "老人机对讲机", "以旧换新", "手机维修"]
  }, {
    "title": "运营商",
    "childrens": ["合约机", "手机卡", "宽带 ", " 充话费 / 流量 ", " 中国电信 ", " 中国移动 ", " 中国联通 ", " 京东通信 ", " 挑靓号 "]
  }, {
    "title": " 手机配件 ",
    "childrens": [" 手机壳贴膜 ", " 手机存储卡 ", " 数据线充电器 ", " 手机耳机 ", " 创意配件 ", " 手机饰品 ", " 手机电池苹果周边 ", " 移动电源 ", " 蓝牙耳机 ", " 手机支 架 ", " 拍照配件 "]
  }, {
    "title": " 摄影摄像 ",
    "childrens": [" 数码相机 ", " 微单相机 ", " 单反相机 ", " 拍立得 ", " 运动相机 ", " 摄像机镜头 ", " 户外器材 ", " 影棚器材冲印服务 ", " 数码相框 "]
  }, {
    "title": " 数码配件 ",
    "childrens": [" 存储卡 ", " 三脚架 / 云台相机包 ", " 滤镜 闪光灯 / 手柄相机 ", " 清洁 / 贴膜机身 ", " 附件镜头 ", " 附件读卡器 ", " 支架电池 / 充电器 "]
  }, {
    "title": " 影音娱乐 ",
    "childrens": [" 耳机 / 耳麦音箱 / 音响 ", " 智能音箱 ", " 收音机 ", " 麦克风 ", " MP3 / MP4 ", " 专业音频 ", " 音频线 ", " 智能手环 ", " 智能手表 ", " 智能眼镜 ", " 智 能机器人 ", " 运动跟踪器 ", " 健康监测 ", " 智能配饰 ", " 智能家居 ", " 体感车无人机 ", " 监控摄像 "]
  }, {
    "title": " 电子教育 ",
    "childrens": [" 学生平板 ", " 点读机 / 笔 ", " 早教益智 ", " 录音笔 ", " 电纸书 ", " 电子词典 ", " 复读机 "]
  }]
}, ]

export default lists;
