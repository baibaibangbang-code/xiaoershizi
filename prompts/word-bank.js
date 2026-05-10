// 主题词库：每个主题含 roles、items、environment，共 15-20 个词
const THEME_BANKS = {
  超市: {
    roles: [
      { pinyin: "shōu yín yuán", hanzi: "收银员" },
      { pinyin: "gù kè", hanzi: "顾客" },
      { pinyin: "bǎo ān", hanzi: "保安" },
    ],
    items: [
      { pinyin: "huò jià", hanzi: "货架" },
      { pinyin: "shōu yín tái", hanzi: "收银台" },
      { pinyin: "tuī chē", hanzi: "推车" },
      { pinyin: "píng guǒ", hanzi: "苹果" },
      { pinyin: "niú nǎi", hanzi: "牛奶" },
      { pinyin: "miàn bāo", hanzi: "面包" },
      { pinyin: "shuǐ guǒ", hanzi: "水果" },
      { pinyin: "liàng chē", hanzi: "凉菜" },
    ],
    environment: [
      { pinyin: "chū kǒu", hanzi: "出口" },
      { pinyin: "rù kǒu", hanzi: "入口" },
      { pinyin: "jià mù pái", hanzi: "价目牌" },
      { pinyin: "dēng", hanzi: "灯" },
      { pinyin: "qiáng", hanzi: "墙" },
    ]
  },

  医院: {
    roles: [
      { pinyin: "yī shēng", hanzi: "医生" },
      { pinyin: "hù shi", hanzi: "护士" },
      { pinyin: "bìng rén", hanzi: "病人" },
    ],
    items: [
      { pinyin: "bìng chuáng", hanzi: "病床" },
      { pinyin: "tī wēn jì", hanzi: "体温计" },
      { pinyin: "yào", hanzi: "药" },
      { pinyin: "zhěn suǒ", hanzi: "诊所" },
      { pinyin: "xuè yā jì", hanzi: "血压计" },
      { pinyin: "kǒu zhào", hanzi: "口罩" },
      { pinyin: "zhěn liáo qì", hanzi: "诊疗器" },
    ],
    environment: [
      { pinyin: "háng liè duì", hanzi: "排队" },
      { pinyin: "guà hào chù", hanzi: "挂号处" },
      { pinyin: "bìng fáng", hanzi: "病房" },
      { pinyin: "zǒu láng", hanzi: "走廊" },
      { pinyin: "mén", hanzi: "门" },
    ]
  },

  公园: {
    roles: [
      { pinyin: "hái zi", hanzi: "孩子" },
      { pinyin: "bà ba", hanzi: "爸爸" },
      { pinyin: "mā ma", hanzi: "妈妈" },
    ],
    items: [
      { pinyin: " qiū qiān", hanzi: "秋千" },
      { pinyin: "huá tī", hanzi: "滑梯" },
      { pinyin: "shā kēng", hanzi: "沙坑" },
      { pinyin: "cháng", hanzi: "长椅" },
      { pinyin: "huā", hanzi: "花" },
      { pinyin: "cǎo", hanzi: "草" },
      { pinyin: "shù", hanzi: "树" },
      { pinyin: "hú", hanzi: "湖" },
    ],
    environment: [
      { pinyin: "mén piào", hanzi: "门票" },
      { pinyin: "gōng yuán", hanzi: "公园" },
      { pinyin: "lù dēng", hanzi: "路灯" },
      { pinyin: "xiǎo jìng", hanzi: "小径" },
      { pinyin: "chē wèi", hanzi: "车位" },
    ]
  },

  学校: {
    roles: [
      { pinyin: "lǎo shī", hanzi: "老师" },
      { pinyin: "xué shēng", hanzi: "学生" },
      { pinyin: "xiào zhǎng", hanzi: "校长" },
    ],
    items: [
      { pinyin: "hēi bǎn", hanzi: "黑板" },
      { pinyin: "kè zhuō", hanzi: "课桌" },
      { pinyin: "kē shū", hanzi: "课本" },
      { pinyin: "bǐ", hanzi: "笔" },
      { pinyin: "xiàng pí", hanzi: "橡皮" },
      { pinyin: "shū bāo", hanzi: "书包" },
      { pinyin: "tí gōng", hanzi: "题共" },
      { pinyin: "guǎng bō", hanzi: "广播" },
    ],
    environment: [
      { pinyin: "cāo chǎng", hanzi: "操场" },
      { pinyin: " tú shū guǎn", hanzi: "图书馆" },
      { pinyin: "cè suǒ", hanzi: "厕所" },
      { pinyin: "lóu tī", hanzi: "楼梯" },
      { pinyin: "jiǎng tái", hanzi: "讲台" },
    ]
  },

  餐厅: {
    roles: [
      { pinyin: "chú shī", hanzi: "厨师" },
      { pinyin: "fú wù yuán", hanzi: "服务员" },
      { pinyin: "gù kè", hanzi: "顾客" },
    ],
    items: [
      { pinyin: "zhuō yǐ", hanzi: "桌椅" },
      { pinyin: "cān jīn", hanzi: "餐巾" },
      { pinyin: "wǎn kuài", hanzi: "碗筷" },
      { pinyin: "cài dān", hanzi: "菜单" },
      { pinyin: "shuǐ guǒ", hanzi: "水果" },
      { pinyin: "tāng", hanzi: "汤" },
      { pinyin: "mǐ fàn", hanzi: "米饭" },
      { pinyin: "cài", hanzi: "菜" },
    ],
    environment: [
      { pinyin: "mén kǒu", hanzi: "门口" },
      { pinyin: "jī guì", hanzi: "机柜" },
      { pinyin: "zhuō bù", hanzi: "桌布" },
      { pinyin: "dēng", hanzi: "灯" },
      { pinyin: "chuāng", hanzi: "窗" },
    ]
  },

  图书馆: {
    roles: [
      { pinyin: "guǎn lǐ yuán", hanzi: "管理员" },
      { pinyin: "dú zhě", hanzi: "读者" },
      { pinyin: "xué shēng", hanzi: "学生" },
    ],
    items: [
      { pinyin: "shū jià", hanzi: "书架" },
      { pinyin: "shū", hanzi: "书" },
      { pinyin: "zhuō yǐ", hanzi: "桌椅" },
      { pinyin: "tái dēng", hanzi: "台灯" },
      { pinyin: "biāo qiān", hanzi: "标签" },
      { pinyin: "dú shū", hanzi: "读书" },
      { pinyin: "bǐ jì běn", hanzi: "笔记本" },
      { pinyin: "gōng juān", hanzi: "工眷" },
    ],
    environment: [
      { pinyin: "jìng yì qū", hanzi: "静议区" },
      { pinyin: "cāng kù", hanzi: "仓库" },
      { pinyin: "mén", hanzi: "门" },
      { pinyin: "chuāng", hanzi: "窗" },
      { pinyin: "zǒu láng", hanzi: "走廊" },
    ]
  },

  游乐场: {
    roles: [
      { pinyin: "hái zi", hanzi: "孩子" },
      { pinyin: "jiā zhǎng", hanzi: "家长" },
      { pinyin: "gōng zuò rén yuán", hanzi: "工作人员" },
    ],
    items: [
      { pinyin: "xuán zhuǎn mù mǎ", hanzi: "旋转木马" },
      { pinyin: "guò shān chē", hanzi: "过山车" },
      { pinyin: "xuē duò", hanzi: "雪雕" },
      { pinyin: "bīng qí lín", hanzi: "冰淇淋" },
      { pinyin: "qì qiú", hanzi: "气球" },
      { pinyin: "piào", hanzi: "票" },
      { pinyin: "mén piào", hanzi: "门票" },
      { pinyin: "xiào yì", hanzi: "笑颜" },
    ],
    environment: [
      { pinyin: "yóu lè chǎng", hanzi: "游乐场" },
      { pinyin: "mén kǒu", hanzi: "门口" },
      { pinyin: "cān tīng", hanzi: "餐厅" },
      { pinyin: "gēng yī shì", hanzi: "更衣室" },
      { pinyin: "chē wèi", hanzi: "车位" },
    ]
  },

  家庭: {
    roles: [
      { pinyin: "bà ba", hanzi: "爸爸" },
      { pinyin: "mā ma", hanzi: "妈妈" },
      { pinyin: "hái zi", hanzi: "孩子" },
    ],
    items: [
      { pinyin: "shā fā", hanzi: "沙发" },
      { pinyin: "diàn shì", hanzi: "电视" },
      { pinyin: "cān zhuō", hanzi: "餐桌" },
      { pinyin: "chuáng", hanzi: "床" },
      { pinyin: "yǐ zi", hanzi: "椅子" },
      { pinyin: "fàn", hanzi: "饭" },
      { pinyin: "shuǐ guǒ", hanzi: "水果" },
      { pinyin: "gǒu", hanzi: "狗" },
    ],
    environment: [
      { pinyin: "kè tīng", hanzi: "客厅" },
      { pinyin: "wò shì", hanzi: "卧室" },
      { pinyin: "chú fáng", hanzi: "厨房" },
      { pinyin: "mén", hanzi: "门" },
      { pinyin: "chuāng", hanzi: "窗" },
    ]
  }
};

// 通用兜底词库
const FALLBACK_BANK = {
  roles: [
    { pinyin: "rén", hanzi: "人" },
    { pinyin: " péng you", hanzi: "朋友" },
  ],
  items: [
    { pinyin: "dōng xi", hanzi: "东西" },
    { pinyin: "wén jù", hanzi: "文具" },
    { pinyin: "shū", hanzi: "书" },
    { pinyin: "bǐ", hanzi: "笔" },
    { pinyin: "zhǐ", hanzi: "纸" },
    { pinyin: "hé zi", hanzi: "盒子" },
    { pinyin: "dài zi", hanzi: "袋子" },
    { pinyin: "lǐ wù", hanzi: "礼物" },
  ],
  environment: [
    { pinyin: "dì fāng", hanzi: "地方" },
    { pinyin: "kōng jiān", hanzi: "空间" },
    { pinyin: "qiáng", hanzi: "墙" },
    { pinyin: "dì miàn", hanzi: "地面" },
    { pinyin: "tiān huā bǎn", hanzi: "天花板" },
  ]
};

function getWordBank(theme) {
  // 精确匹配
  if (THEME_BANKS[theme]) {
    return THEME_BANKS[theme];
  }
  // 模糊匹配：包含关系
  for (const key of Object.keys(THEME_BANKS)) {
    if (theme.includes(key) || key.includes(theme)) {
      return THEME_BANKS[key];
    }
  }
  // 兜底
  return FALLBACK_BANK;
}

module.exports = { THEME_BANKS, FALLBACK_BANK, getWordBank };
