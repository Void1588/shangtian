class Sentence{
    private static AcientSentence:Array<Array<any>>=[
        //level1
        [
            {
                context:"1",    //内容
                flag:false,     //防止重复
            },
            {
                context:"2",
                flag:false,
            }
        ],
        //level2
        [
            {
                context:"3",
                flag:false,
            },
            {
                context:"4",
                flag:false,
            },
        ],
        //level3
        [
            {
                context:"2",
                flag:false,
            },
            {
                context:"2",
                flag:false,
            },
        ],
        //level4
        [
            {
                context:"2",
                flag:false,
            },
            {
                context:"2",
                flag:false,
            },
        ],
    ];

    private static FirstUnuse:Array<number>=[
        0,0,0,0,
    ]

    public static GetRandomSentenceAtLevel(level:number):string{
        if(level>Sentence.AcientSentence.length)
        {
            level=Sentence.AcientSentence.length-1;
        }
        else if(level<=0)
        {
            level=0;
        }
        else
        {
            level-=1;
        }
        let index=Math.round(Math.random()*Sentence.AcientSentence[level].length);
        if(Sentence.AcientSentence[level][index].flag)
        { 
            let index=Sentence.FirstUnuse[level];
            for(let i=0;i<Sentence.AcientSentence[level].length;i++)
            {
                if(!Sentence.AcientSentence[level][i].falg)
                {
                    Sentence.FirstUnuse[level]=i;
                }
            }
        }
        return Sentence.AcientSentence[level][index].context;
    }
}