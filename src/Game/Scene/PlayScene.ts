class PlayScene extends BaseScene{
    private timeOnEnterFrame:number = 0;

    //距离上一次制造砖块过去的时间
    private fromLastCreate:number=0;

    //砖块
    private brick:Array<BaseBoard>;

    protected initView(){
         this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
         this.timeOnEnterFrame=egret.getTimer();
    }

    private onEnterFrame(e:egret.Event)
    {
        let nowTime=egret.getTimer();
        let deltaTime=nowTime-this.timeOnEnterFrame;

        this.timeOnEnterFrame=nowTime;
    }
}