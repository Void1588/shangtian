class sentenceContent{
    public sentence:string;//句子内容
    public sentenceSource:string;//句子来源
    public answer:Array<string>=new Array();//0-正确答案，1:4-混淆答案

    constructor(sentence:string,sentenceSource:string,answer:Array<string>/*,isUsed:boolean=false*/){
        this.sentence=sentence;
        this.sentenceSource=sentenceSource;
        this.answer=answer;//由于答案的个数不一样，判断有几个答案的时候，用array.length或着判断数组内内容为undefined
    }
}

class Sentence{
    private static AcientSentence:Array<sentenceContent>=[
        new sentenceContent("粉身碎骨浑不怕，\n要留清白在人间。","于谦《石灰吟》",new Array("1","2","3")),
        new sentenceContent("孤舟蓑笠翁，\n独钓寒江雪。","柳宗元《江雪》",new Array("1","2","3")),
        new sentenceContent("几处早莺争暖树，\n谁家新燕啄春泥。","白居易《钱塘湖春行》",new Array("1","2","3")),
        new sentenceContent("九曲黄河万里沙，\n浪淘风簸自天涯。","刘禹锡《浪淘沙九首》之一",new Array("1","2","3")),
        new sentenceContent("君子成人之美，\n不成人之恶。","《论语·颜渊》",new Array("1","2","3")),
        new sentenceContent("露从今夜白，\n月是故乡明。","杜甫《月夜忆舍弟》",new Array("1","2","3")),
        new sentenceContent("路漫漫，其修远兮，\n吾将上下而求索。","屈原《离骚》",new Array("1","2","3")),
        new sentenceContent("昔我往矣，杨柳依依；\n今我来思，雨雪霏霏。","《诗经·小雅·采薇》",new Array("1","2","3"))
        ];
    private static indexArray:number[]=Sentence.randUnique(0,Sentence.AcientSentence.length,Sentence.AcientSentence.length);
    
    private static index:number=0;
    
    public static GetRandomSentence():sentenceContent{
        return Sentence.AcientSentence[this.indexArray[(Sentence.index++)%Sentence.AcientSentence.length]];
    } 

    private static randUnique(start, end, size){//获取不重复的随机数数组
        // 全部随机数值
        var allNums = new Array;
        // 判断获取随机数个数
        size = size ? (size > end - start ? end - start : size) : 1;
        // 生成随机数值区间数组
        for (var i = start, k = 0; i <= end; i++, k++) {
        allNums[k] = i;
        }
        // 打撒数组排序
        allNums.sort(function(){ return 0.5 - Math.random(); });
        // 获取数组从第一个开始到指定个数的下标区间
        return allNums.slice(0, size);
    } 
}
