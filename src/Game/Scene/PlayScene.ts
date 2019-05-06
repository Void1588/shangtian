class PlayScene extends BaseScene{
    private timeOnEnterFrame:number = 0;

    //距离上一次制造砖块过去的时间
    private fromLastCreate:number=0;

    //砖块
    private brick:Array<BaseBoard>=[new BaseBoard(100,20)];

    protected initView(){
         this.timeOnEnterFrame=egret.getTimer();
         this.addChild(this.brick[0])
         this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
    }

    private onEnterFrame(e:egret.Event)
    {
        let nowTime=egret.getTimer();
        let deltaTime=nowTime-this.timeOnEnterFrame;
        this.fromLastCreate+=deltaTime
        if(this.fromLastCreate>=1000)
        {
            this.fromLastCreate=0;
            this.brick.push(new BaseBoard(50,20))
        }
        let dis=deltaTime*ValueData.ScrollingSpeed;
        for(let i=0;i<this.brick.length;i++)
        {
            this.brick[i].movedown(dis)
        }
        this.timeOnEnterFrame=nowTime;
    }
}