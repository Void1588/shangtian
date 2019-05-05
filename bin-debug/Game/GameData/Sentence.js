var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sentence = (function () {
    function Sentence() {
    }
    Sentence.GetRandomSentenceAtLevel = function (level) {
        if (level > Sentence.AcientSentence.length) {
            level = Sentence.AcientSentence.length - 1;
        }
        else if (level <= 0) {
            level = 0;
        }
        else {
            level -= 1;
        }
        var index = Math.round(Math.random() * Sentence.AcientSentence[level].length);
        if (Sentence.AcientSentence[level][index].flag) {
            var index_1 = Sentence.FirstUnuse[level];
            for (var i = 0; i < Sentence.AcientSentence[level].length; i++) {
                if (!Sentence.AcientSentence[level][i].falg) {
                    Sentence.FirstUnuse[level] = i;
                }
            }
        }
        return Sentence.AcientSentence[level][index].context;
    };
    Sentence.AcientSentence = [
        //level1
        [
            {
                context: "1",
                flag: false,
            },
            {
                context: "2",
                flag: false,
            }
        ],
        //level2
        [
            {
                context: "3",
                flag: false,
            },
            {
                context: "4",
                flag: false,
            },
        ],
        //level3
        [
            {
                context: "2",
                flag: false,
            },
            {
                context: "2",
                flag: false,
            },
        ],
        //level4
        [
            {
                context: "2",
                flag: false,
            },
            {
                context: "2",
                flag: false,
            },
        ],
    ];
    Sentence.FirstUnuse = [
        0, 0, 0, 0,
    ];
    return Sentence;
}());
__reflect(Sentence.prototype, "Sentence");
