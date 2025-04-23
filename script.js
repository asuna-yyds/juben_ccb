document.addEventListener('DOMContentLoaded', () => {
    // --- 数据区 ---
    // !!! 关键：你需要一个包含丰富信息的剧本杀数据库 !!!
    // 属性名尽量保持一致，方便比较
    const scripts = [
        {
            id: 1,
            name: "年轮",
            type: "推理本",
            tags: ["硬核推理", "还原", "情感沉浸", "现代", "都市", "烧脑", "催泪", "经典", "盒装", "IP潜力"],
            player_count: 6,
            publisher: "剧盟",
            release_year: 2019
        },
        {
            id: 2,
            name: "漓川怪谈簿",
            type: "推理本",
            tags: ["悬疑", "变格推理", "还原", "日式", "奇幻", "高阅读量", "进阶", "微恐", "灰烬工作室出品"],
            player_count: 7,
            publisher: "灰烬工作室",
            release_year: 2021
        },
        {
            id: 3,
            name: "窗边的女人",
            type: "推理本",
            tags: ["本格推理", "惊悚", "恐怖", "现实题材", "都市", "还原", "经典", "新手友好", "盒装"],
            player_count: 6,
            publisher: "Godan",
            release_year: 2018
        },
        {
            id: 4,
            name: "古木吟",
            type: "推理本",
            tags: ["中式", "校园", "本格推理", "还原", "进阶"],
            player_count: 7,
            publisher: "剧游方舟",
            release_year: 2020
        },
        {
            id: 5,
            name: "兵临城下",
            type: "机制本",
            tags: ["历史", "战争", "民国", "家国情怀", "阵营对抗", "情感沉浸", "还原", "红色主题", "进阶"],
            player_count: 7,
            publisher: "老玉米联合工作室",
            release_year: 2020
        },
        {
            id: 6,
            name: "持斧奥夫",
            type: "推理本",
            tags: ["欧式", "惊悚", "还原", "本格推理", "封闭结局", "进阶", "都市"],
            player_count: 6,
            publisher: "千谜发行",
            release_year: 2019
        },
        {
            id: 7,
            name: "告别诗",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "治愈", "校园", "水龙头", "中式"],
            player_count: 6,
            publisher: "月影工作室",
            release_year: 2022
        },
        {
            id: 8,
            name: "瘆",
            type: "推理本",
            tags: ["现代", "恐怖", "惊悚", "硬核推理", "还原", "变格推理", "重恐"],
            player_count: 6,
            publisher: "天津第一现场",
            release_year: 2020
        },
        {
            id: 9,
            name: "雪乡连环杀人事件",
            type: "推理本",
            tags: ["现代", "本格推理", "还原", "暴风雪山庄", "进阶", "惊悚"],
            player_count: 7,
            publisher: "李白工作室",
            release_year: 2022
        },
        {
            id: 10,
            name: "第七号嫌疑人",
            type: "推理本",
            tags: ["现代", "本格推理", "硬核推理", "还原", "烧脑", "封闭结局", "进阶"],
            player_count: 6,
            publisher: "外星人",
            release_year: 2020
        },
        {
            id: 11,
            name: "孽岛疑云",
            type: "推理本",
            tags: ["民国", "本格推理", "还原", "封闭结局", "硬核玩家", "经典", "豪门"],
            player_count: 7,
            publisher: "智乐源",
            release_year: 2018
        },
        {
            id: 12,
            name: "永不褪色的山楂林",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "家国情怀", "治愈", "水龙头"],
            player_count: 6,
            publisher: "不俗发行工作室",
            release_year: 2022
        },
        {
            id: 13,
            name: "青楼",
            type: "机制本",
            tags: ["古风", "情感沉浸", "还原", "开放结局", "欢乐本", "阵营对抗"],
            player_count: 7,
            publisher: "西昆仑",
            release_year: 2020
        },
        {
            id: 14,
            name: "来电",
            type: "机制本",
            tags: ["中式", "欢乐", "都市", "机制", "还原"],
            player_count: 6,
            publisher: "剧堆",
            release_year: 2021
        },
        {
            id: 15,
            name: "贵阴贱璧",
            type: "推理本",
            tags: ["古风", "本格推理", "还原", "硬核推理", "宫廷", "进阶"],
            player_count: 7,
            publisher: "天津剧盟",
            release_year: 2020
        },
        {
            id: 16,
            name: "月下沙利叶",
            type: "推理本",
            tags: ["欧式", "变格推理", "还原", "情感沉浸", "惊悚", "进阶"],
            player_count: 6,
            publisher: "四维推理",
            release_year: 2020
        },
        {
            id: 17,
            name: "月落洼",
            type: "推理本",
            tags: ["现代", "本格推理", "还原", "乡村", "微恐", "新手友好"],
            player_count: 6,
            publisher: "剧盟",
            release_year: 2019
        },
        {
            id: 18,
            name: "雾起云浮",
            type: "情感本",
            tags: ["古风", "情感沉浸", "还原", "仙侠", "开放结局", "豪门"],
            player_count: 6,
            publisher: "大魔王创作组",
            release_year: 2021
        },
        {
            id: 19,
            name: "紫藤夫人",
            type: "情感本",
            tags: ["民国", "情感沉浸", "还原", "微恐", "开放结局", "豪门"],
            player_count: 6,
            publisher: "归去来工作室",
            release_year: 2021
        },
        {
            id: 20,
            name: "七月十三日",
            type: "推理本",
            tags: ["现代", "本格推理", "还原", "硬核推理", "烧脑", "经典", "硬核玩家"],
            player_count: 6,
            publisher: "灰烬工作室",
            release_year: 2019
        },
        {
            id: 21,
            name: "死者在幻夜中醒来",
            type: "推理本",
            tags: ["日式", "怪谈", "现代", "本格推理", "还原", "硬核推理", "烧脑", "封闭结局", "硬核玩家"],
            player_count: 7,
            publisher: "灰烬工作室",
            release_year: 2020
        },
        {
            id: 22,
            name: "作者不详",
            type: "推理本",
            tags: ["现代", "变格推理", "还原", "元叙事", "烧脑", "惊悚", "硬核玩家"],
            player_count: 6,
            publisher: "灰烬工作室",
            release_year: 2021
        },
        {
            id: 23,
            name: "弥留",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "治愈", "开放结局", "水龙头"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 24,
            name: "须臾",
            type: "情感本",
            tags: ["古风", "情感沉浸", "还原", "仙侠", "开放结局", "菠萝头"],
            player_count: 6,
            publisher: "须臾工作室",
            release_year: 2021
        },
        {
            id: 25,
            name: "芥子上:弥望之川",
            type: "推理本",
            tags: ["古风", "本格推理", "还原", "硬核推理", "系列作品", "硬核玩家"],
            player_count: 6,
            publisher: "叁仟世界",
            release_year: 2021
        },
        {
            id: 26,
            name: "芥子下:须陀界河",
            type: "推理本",
            tags: ["古风", "本格推理", "还原", "硬核推理", "系列作品", "硬核玩家"],
            player_count: 6,
            publisher: "叁仟世界",
            release_year: 2021
        },
        {
            id: 27,
            name: "马丁内斯死在了惊奇馆",
            type: "推理本",
            tags: ["欧式", "本格推理", "还原", "欢乐机制", "新手友好"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 28,
            name: "雾鸦馆",
            type: "推理本",
            tags: ["欧式", "本格推理", "还原", "封闭结局", "暴风雪山庄", "进阶"],
            player_count: 7,
            publisher: "剧本部落",
            release_year: 2019
        },
        {
            id: 29,
            name: "立方馆谋杀始末",
            type: "推理本",
            tags: ["现代", "本格推理", "还原", "硬核推理", "烧脑", "馆系列", "硬核玩家"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 30,
            name: "诅家庄",
            type: "推理本",
            tags: ["古风", "恐怖", "变格推理", "还原", "封闭结局", "进阶", "豪门"],
            player_count: 7,
            publisher: "叁仟世界",
            release_year: 2019
        },
        {
            id: 31,
            name: "木夕僧之戏",
            type: "推理本",
            tags: ["日式", "本格推理", "还原", "封闭结局", "经典", "进阶"],
            player_count: 7,
            publisher: "剧本部落",
            release_year: 2018
        },
        {
            id: 32,
            name: "病娇男孩的精分日记",
            type: "推理本",
            tags: ["现代", "变格推理", "还原", "精神变态", "微恐", "进阶"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2019
        },
        {
            id: 33,
            name: "病娇男孩的恋爱日记",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "精神变态", "微恐", "系列作品", "菠萝头"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 34,
            name: "致新世界",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "科幻", "开放结局", "水龙头"],
            player_count: 6,
            publisher: "叁仟世界",
            release_year: 2021
        },
        {
            id: 35,
            name: "南墙",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "现实题材", "致郁", "水龙头"],
            player_count: 6,
            publisher: "有间发行",
            release_year: 2021
        },
        {
            id: 36,
            name: "周公游记",
            type: "推理本",
            tags: ["古风", "变格推理", "还原", "奇幻", "欢乐机制", "新手友好"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2019
        },
        {
            id: 37,
            name: "周公游记2",
            type: "推理本",
            tags: ["古风", "变格推理", "还原", "奇幻", "欢乐机制", "系列作品", "新手友好"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 38,
            name: "一座城",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "都市", "现实题材", "治愈"],
            player_count: 6,
            publisher: "叁拾伍工作室",
            release_year: 2021
        },
        {
            id: 39,
            name: "第二十二条校规",
            type: "推理本",
            tags: ["现代", "恐怖", "变格推理", "还原", "校园", "惊悚", "经典", "进阶"],
            player_count: 7,
            publisher: "剧本部落",
            release_year: 2019
        },
        {
            id: 40,
            name: "天才在左我在右",
            type: "推理本",
            tags: ["现代", "本格推理", "还原", "烧脑", "硬核推理", "硬核玩家"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 41,
            name: "诡计博物馆",
            type: "推理本",
            tags: ["现代", "本格推理", "还原", "硬核推理", "烧脑", "馆系列", "硬核玩家"],
            player_count: 7,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 42,
            name: "两点半",
            type: "推理本",
            tags: ["现代", "恐怖", "变格推理", "还原", "惊悚", "重恐", "进阶"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 43,
            name: "孑身",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "都市", "现实题材", "致郁", "水龙头"],
            player_count: 6,
            publisher: "贰叁叁工作室",
            release_year: 2021
        },
        {
            id: 44,
            name: "红黑馆事件",
            type: "推理本",
            tags: ["欧式", "本格推理", "还原", "硬核推理", "烧脑", "馆系列", "硬核玩家"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2021
        },
        {
            id: 45,
            name: "眠梦不老泉",
            type: "推理本",
            tags: ["欧式", "奇幻", "本格推理", "还原", "欢乐机制", "新手友好"],
            player_count: 7,
            publisher: "剧本部落",
            release_year: 2021
        },
        {
            id: 46,
            name: "请将我深埋",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "现实题材", "致郁", "水龙头"],
            player_count: 6,
            publisher: "深圳·老玉米工作室",
            release_year: 2021
        },
        {
            id: 47,
            name: "失真的旋律",
            type: "推理本",
            tags: ["现代", "本格推理", "还原", "音乐主题", "进阶", "豪门"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2021
        },
        {
            id: 48,
            name: "那一束月光",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "都市", "温馨", "治愈", "新手友好"],
            player_count: 6,
            publisher: "未知名工作室",
            release_year: 2021
        },
        {
            id: 49,
            name: "逢山遇鬼",
            type: "推理本",
            tags: ["古风", "恐怖", "变格推理", "还原", "惊悚", "进阶"],
            player_count: 7,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 50,
            name: "没头脑东西不伤心",
            type: "欢乐本",
            tags: ["现代", "欢乐机制", "还原", "情感沉浸", "新手友好"],
            player_count: 6,
            publisher: "天津剧盟",
            release_year: 2021
        },
        {
            id: 51,
            name: "大浪",
            type: "机制本",
            tags: ["现代", "阵营对抗", "还原", "谍战", "家国情怀", "进阶"],
            player_count: 8,
            publisher: "大浪工作室",
            release_year: 2021
        },
        {
            id: 52,
            name: "谋杀安徒生",
            type: "推理本",
            tags: ["欧式", "奇幻", "本格推理", "还原", "童话改编", "进阶"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 53,
            name: "安妮的游戏",
            type: "推理本",
            tags: ["欧式", "恐怖", "变格推理", "还原", "惊悚", "进阶"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2020
        },
        {
            id: 54,
            name: "飞鱼照京霜",
            type: "机制本",
            tags: ["古风", "阵营对抗", "还原", "武侠", "权谋", "进阶"],
            player_count: 8,
            publisher: "发行狮",
            release_year: 2021
        },
        {
            id: 55,
            name: "死亡回响",
            type: "推理本",
            tags: ["现代", "本格推理", "还原", "硬核推理", "烧脑", "PVE", "硬核玩家"],
            player_count: 6,
            publisher: "灰烬工作室",
            release_year: 2020
        },
        {
            id: 56,
            name: "因火成烟",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "消防主题", "家国情怀", "水龙头"],
            player_count: 6,
            publisher: "叁仟世界",
            release_year: 2021
        },
        {
            id: 57,
            name: "猫岛谋杀循环",
            type: "推理本",
            tags: ["现代", "本格推理", "还原", "循环流", "烧脑", "进阶"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2021
        },
        {
            id: 58,
            name: "此时彼刻之人",
            type: "推理本",
            tags: ["现代", "变格推理", "还原", "科幻", "烧脑", "硬核玩家"],
            player_count: 6,
            publisher: "索拉",
            release_year: 2021
        },
        {
            id: 59,
            name: "白色乡愁",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "都市", "现实题材", "致郁", "水龙头"],
            player_count: 6,
            publisher: "索拉",
            release_year: 2021
        },
        {
            id: 60,
            name: "北宋奇案汴京",
            type: "推理本",
            tags: ["古风", "本格推理", "还原", "历史", "进阶"],
            player_count: 7,
            publisher: "剧本部落",
            release_year: 2021
        },
        {
            id: 61,
            name: "双炽岛斩首诸因",
            type: "推理本",
            tags: ["日式", "本格推理", "还原", "硬核推理", "烧脑", "孤岛模式", "硬核玩家"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2021
        },
        {
            id: 62,
            name: "坠入",
            type: "情感本",
            tags: ["现代", "情感沉浸", "还原", "科幻", "赛博朋克", "致郁", "菠萝头"],
            player_count: 6,
            publisher: "拾柒工作室",
            release_year: 2021
        },
        {
            id: 63,
            name: "二分之一世界推理法则",
            type: "推理本",
            tags: ["现代", "本格推理", "还原", "硬核推理", "烧脑", "PVP", "硬核玩家"],
            player_count: 6,
            publisher: "灰烬工作室",
            release_year: 2021
        },
        {
            id: 64,
            name: "罗拉西里的巫女",
            type: "推理本",
            tags: ["欧式", "奇幻", "本格推理", "还原", "魔法", "进阶"],
            player_count: 7,
            publisher: "灰烬工作室",
            release_year: 2021
        },
        {
            id: 65,
            name: "流氓叙事",
            type: "推理本",
            tags: ["现代", "变格推理", "还原", "元叙事", "烧脑", "硬核玩家"],
            player_count: 6,
            publisher: "剧本部落",
            release_year: 2021
        },
        {
            id: 66,
            name: "红豆",
            type: "情感本",
            tags: ["古风", "情感沉浸", "还原", "家国情怀", "战争", "水龙头"],
            player_count: 6,
            publisher: "叁仟世界",
            release_year: 2021
        },
        {
            id: 67,
            name: "洗劫伦敦所有的玫瑰",
            type: "机制本",
            tags: ["欧式", "阵营对抗", "还原", "欢乐机制", "新手友好"],
            player_count: 7,
            publisher: "剧本部落",
            release_year: 2021
        },
        {
            id: 68,
            name: "蟪蛄春秋",
            type: "推理本",
            tags: ["古风", "本格推理", "还原", "历史", "硬核推理", "硬核玩家"],
            player_count: 7,
            publisher: "剧本部落",
            release_year: 2021
        },
        {
            id: 69,
            name: "科举",
            type: "机制本",
            tags: ["古风", "欢乐机制", "还原", "历史", "科举主题", "新手友好"],
            player_count: 8,
            publisher: "剧本部落",
            release_year: 2021
        },
        {
            id: 70,
            name: "孤城",
            type: "机制本",
            tags: ["民国", "阵营对抗", "还原", "谍战", "家国情怀", "红色主题", "情感沉浸", "进阶"],
            player_count: 7,
            publisher: "辽宁铭思文化",
            release_year: 2021
        },
        {
            id: 71,
            name: "刀鞘",
            type: "机制本",
            tags: ["民国", "阵营对抗", "还原", "谍战", "家国情怀", "红色主题", "情感沉浸", "进阶"],
            player_count: 7,
            publisher: "老玉米联合工作室",
            release_year: 2020
        }

        // ... 在这里添加尽可能多的剧本数据 ...
    ];

    // --- 游戏状态变量 ---
    let targetScript = null; // 目标剧本
    let guessesRemaining = 10;
    let gameOver = false;

    // --- DOM 元素引用 ---
    const feedbackElement = document.getElementById('feedback');
    const guessesContainer = document.getElementById('guesses-container');
    const guessesRemainingElement = document.getElementById('guesses-remaining');
    const playAgainButton = document.getElementById('play-again-button');
    const headerRow = document.querySelector('.guess-row.header'); // 获取表头
    const searchInputElement = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResultsContainer = document.getElementById('search-results');
    const surrenderButton = document.getElementById('surrender-button');

    // --- 函数定义 ---

    // 填充 datalist 以提供输入建议
        // 处理投降
    function handleSurrender() {
        if (gameOver) return; // 如果游戏已结束，不做任何事

        gameOver = true;
        // (Inside the handleSurrender function)

    // ... (existing code: if (gameOver) return; gameOver = true; ...)

    feedbackElement.textContent = `你投降了! 正确答案是: ${targetScript.name}`;
    feedbackElement.style.color = '#ffc107';
    playAgainButton.style.display = 'block';
    playAgainButton.disabled = false;

    // --- Add this block ---
    // Create a comparison object showing all fields as correct for the reveal
    const revealComparisonResults = {
        name: 'correct',
        type: 'correct',
        tagsComparison: {}, // Prepare to mark all target tags as correct
        player_count: { result: 'correct', direction: null },
        release_year: { result: 'correct', direction: null }
    };

    // Mark all tags of the target script as correct for display purposes
    (targetScript.tags || []).forEach(tag => {
        revealComparisonResults.tagsComparison[tag] = 'correct';
    });

    // Display the target script row with all fields marked as correct
    displayGuessRow(targetScript, revealComparisonResults);
    // --- End of added block ---

    endGame(); // Call endGame after displaying the row
    }
    function populateScriptList() {
        scriptListElement.innerHTML = ''; // 清空旧选项
        scripts.forEach(script => {
            const option = document.createElement('option');
            option.value = script.name;
            scriptListElement.appendChild(option);
        });
    }

    // 根据名称查找剧本对象 (忽略大小写和空格)
    function findScriptByName(name) {
        const normalizedName = name.trim().toLowerCase();
        return scripts.find(script => script.name.trim().toLowerCase() === normalizedName);
    }

    // 比较两个剧本的属性
    function compareAttributes(guessedScript, targetScript) {
        const results = {};

        // 1. 名称比较 (其实如果能提交，说明名称是对的，但以防万一)
        results.name = guessedScript.name === targetScript.name ? 'correct' : 'incorrect'; // 通常总是 incorrect 直到猜对

        // 2. 类型比较
        results.type = guessedScript.type === targetScript.type ? 'correct' : 'incorrect';

        // 3. 标签比较 (简单实现：检查猜测的所有标签是否都在目标中)
        // 更复杂的：检查共有标签、目标独有、猜测独有等
        const guessedTags = guessedScript.tags || [];
        const targetTagsSet = new Set(targetScript.tags || []); // 使用 Set 提高查找效率
        results.tagsComparison = {}; // 创建一个对象来存储每个猜测标签的比较结果

        guessedTags.forEach(tag => {
            if (targetTagsSet.has(tag)) {
                results.tagsComparison[tag] = 'correct'; // 存在于目标中，标记为正确
            } else {
                results.tagsComparison[tag] = 'incorrect'; // 不存在于目标中，标记为错误
            }
        });
        // 简化版：只判断完全匹配
        // results.tags = guessedTags.size === targetTags.size && [...guessedTags].every(tag => targetTags.has(tag)) ? 'correct' : 'incorrect';


        // 4. 人数比较
        const pcGuess = guessedScript.player_count;
        const pcTarget = targetScript.player_count;
        results.player_count = { result: 'incorrect', direction: null }; // 默认值
        if (pcGuess !== null && pcTarget !== null) { // 确保数据存在
            if (pcGuess === pcTarget) {
                results.player_count.result = 'correct';
            } else if (Math.abs(pcGuess - pcTarget) <= 1) { // +/- 1 人算接近 (黄色)
                results.player_count.result = 'close';
                results.player_count.direction = pcGuess < pcTarget ? 'up' : 'down'; // 箭头指向目标值
            } else {
                results.player_count.result = 'incorrect'; // 差别太大 (灰色/红色)
                results.player_count.direction = pcGuess < pcTarget ? 'up' : 'down';
            }
        }
        // 5. 出版社比较
        const pubGuess = guessedScript.publisher || ""; // 处理可能没有的情况
        const pubTarget = targetScript.publisher || "";
        results.publisher = 'incorrect'; // 默认错误
        if (pubGuess && pubTarget && pubGuess.toLowerCase() === pubTarget.toLowerCase()) { // 忽略大小写比较
         results.publisher = 'correct';
        }
        // 6. 发行年份比较
        const yearGuess = guessedScript.release_year;
        const yearTarget = targetScript.release_year;
        results.release_year = { result: 'incorrect', direction: null }; // 默认值
        if (yearGuess !== null && yearTarget !== null) { // 确保数据存在
            if (yearGuess === yearTarget) {
                results.release_year.result = 'correct';
            } else if (Math.abs(yearGuess - yearTarget) <= 2) { // +/- 2 年算接近 (黄色)
                results.release_year.result = 'close';
                results.release_year.direction = yearGuess < yearTarget ? 'up' : 'down'; // 箭头指向目标值
            } else {
                results.release_year.result = 'incorrect'; // 差别太大 (灰色/红色)
                results.release_year.direction = yearGuess < yearTarget ? 'up' : 'down';
            }
        
        }
        return results;
}

    // 在页面上显示一行猜测结果
    function displayGuessRow(guessedScript, comparisonResults) {
        const row = document.createElement('div');
        row.classList.add('guess-row');

        // 创建各个属性的单元格
        const attributes = ['name', 'type', 'tags', 'player_count', 'publisher', 'release_year'];
        attributes.forEach(attr => {
            const cell = document.createElement('div');
            cell.classList.add('attribute-cell');

            let content = guessedScript[attr];
            let comparison = comparisonResults[attr];

            // 处理特殊显示和比较结果
            // (在 displayGuessRow 函数内部)
            // ... (处理其他属性的代码) ...

        if (attr === 'tags') {
            // 获取详细的标签比较结果
            const tagsComparison = comparisonResults.tagsComparison || {};
            const guessedTags = content || []; // content 就是 guessedScript[attr]

            // 创建包含所有标签 span 的 HTML
            const tagsHtml = guessedTags.map(tag => {
                const comparisonClass = tagsComparison[tag] === 'correct' ? 'tag-correct' : 'tag-incorrect'; // 根据比较结果添加类
                // 返回带特定类的 span 标签
                return `<span class="tag ${comparisonClass}">${tag}</span>`;
            }).join('');

            cell.innerHTML = `<div class="tags-list">${tagsHtml || 'N/A'}</div>`;
            // *** 移除下面这行：不再给整个单元格添加 overall 比较类 ***
            // cell.classList.add(comparisonResults.tags); // 例如 'correct', 'close', or 'incorrect'


        // ... (处理 player_count, release_year 及其他属性的代码保持不变) ...
            } else if (attr === 'player_count' || attr === 'release_year') {
                // 处理数字和箭头
                let value = content !== null ? content : 'N/A';
                let arrow = '';
                if (comparison.direction === 'up') arrow = ' <span class="arrow">▲</span>';
                if (comparison.direction === 'down') arrow = ' <span class="arrow">▼</span>';
                cell.innerHTML = `${value}${arrow}`;
                cell.classList.add(comparison.result); // 'correct', 'close', or 'incorrect'
            } else {
                // 处理普通文本 (name, type)
                cell.textContent = content || 'N/A';
                cell.classList.add(comparison); // 'correct' or 'incorrect'
            }

            row.appendChild(cell);
        });

        // 将新行插入到表头下方
        // guessesContainer.appendChild(row); // 追加到末尾
        headerRow.insertAdjacentElement('afterend', row); // 插入到表头之后 (最新猜测在最上面)
    }


    // 处理玩家的猜测提交
    function processGuess(guessedScript) {
        if (gameOver) return; // 游戏已结束

        

        // --- 输入验证 ---

        
        // (可选) 检查是否重复猜测
        // const alreadyGuessed = [...guessesContainer.querySelectorAll('.guess-row .attribute-cell:first-child')]
        //                         .map(cell => cell.textContent)
        //                         .includes(guessedScript.name);
        // if (alreadyGuessed) {
        //     alert(`你已经猜过 "${guessedScript.name}" 了！`);
        //     return;
        // }

        // --- 处理有效猜测 ---
        guessesRemaining--;
        guessesRemainingElement.textContent = guessesRemaining;

        const comparisonResults = compareAttributes(guessedScript, targetScript);
        displayGuessRow(guessedScript, comparisonResults);

        // --- 检查游戏状态 ---
        if (guessedScript.id === targetScript.id) { // 猜对了！
            gameOver = true;
            feedbackElement.textContent = `恭喜你猜对了! 答案是 ${targetScript.name}!`;
            feedbackElement.style.color = '#4CAF50'; // 绿色反馈
            endGame();
        } else if (guessesRemaining <= 0) { // 次数用尽
            gameOver = true;
            feedbackElement.textContent = `次数用尽! 正确答案是: ${targetScript.name}`;
            feedbackElement.style.color = '#f44336'; // 红色反馈
            endGame();
        } else {
             // 继续游戏
             feedbackElement.textContent = `剩余次数: ${guessesRemaining}`;
             feedbackElement.style.color = ''; // 恢复默认颜色
        }

        searchInputElement.value = '';
        searchResultsContainer.innerHTML = '';
    }

    // 游戏结束时的处理
    function endGame() {
        searchInputElement.disabled = true; // 禁用搜索框
        searchButton.disabled = true; // 禁用搜索按钮
        playAgainButton.style.display = 'inline-block';
            surrenderButton.style.display = 'none'; // 隐藏投降按钮
    surrenderButton.disabled = true; // (可选) 禁用确保安全
    }

    // 初始化游戏
    function initGame() {
        gameOver = false;
        guessesRemaining = 10;

        // 1. 选择目标剧本
        targetScript = scripts[Math.floor(Math.random() * scripts.length)];
        console.log("目标答案 (调试用):", targetScript.name); // 调试信息，发布时应删除

        // 2. 重置界面
        // 清空之前的猜测行 (保留表头)
        const previousGuessRows = guessesContainer.querySelectorAll('.guess-row:not(.header)');
        previousGuessRows.forEach(row => row.remove());
        feedbackElement.textContent = `剩余次数: ${guessesRemaining}`;
    feedbackElement.style.color = '';
    guessesRemainingElement.textContent = guessesRemaining;
    searchInputElement.disabled = false; // 启用搜索框
    searchButton.disabled = false; // 启用搜索按钮
    searchInputElement.value = ''; // 清空搜索框
    searchResultsContainer.innerHTML = ''; // 清空搜索结果区域
    surrenderButton.style.display = 'inline-block'; // 显示投降按钮
    surrenderButton.disabled = false; // 确保投降按钮可用
    playAgainButton.disabled = true; // 确保重玩按钮不可用
    playAgainButton.style.display = 'none';

        // 3. 填充输入提示
        // populateScriptList();

        // 4. 让输入框聚焦
        searchInputElement.focus();
    }

    // 执行剧本搜索
function performSearch() {
    const searchTerm = searchInputElement.value.trim().toLowerCase();
    if (!searchTerm) {
        searchResultsContainer.innerHTML = '<p class="no-results" style="text-align: center; color: #888;">请输入关键词进行搜索。</p>';
        return;
    }

    const results = scripts.filter(script =>
        script.name.toLowerCase().includes(searchTerm)
    );

    displaySearchResults(results);
}

// 显示搜索结果
function displaySearchResults(resultsArray) {
    searchResultsContainer.innerHTML = ''; // 清空旧结果
    
    if (resultsArray.length === 0) {
        searchResultsContainer.innerHTML = '<p class="no-results" style="text-align: center; color: #888;">未找到相关剧本。</p>';
        return;
    }

    const ul = document.createElement('ul');
    resultsArray.forEach(script => {
        const li = document.createElement('li');
        li.textContent = script.name;
        li.title = '点击猜测此剧本'; // 更新提示

        // *** 添加点击事件：点击结果填充到主输入框 ***
        li.addEventListener('click', () => {
            if (!gameOver) { // 确保游戏未结束才处理点击
                // 直接传入当前 script 对象进行猜测处理
                processGuess(script);
            }
        });

        ul.appendChild(li);
    });
    searchResultsContainer.appendChild(ul);
}

    // --- 事件监听器 ---
    playAgainButton.addEventListener('click', initGame);
    searchButton.addEventListener('click', performSearch);
    surrenderButton.addEventListener('click', handleSurrender);
// (可选) 允许在搜索框按 Enter 键搜索
    searchInputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    // 允许按 Enter 键提交
    

    // --- 游戏开始 ---
    initGame();

});