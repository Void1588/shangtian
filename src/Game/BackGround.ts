class backgroundimg extends egret.DisplayObjectContainer{
    private timeOnEnterFrame:number;
    private bg:Array<egret.Bitmap>=[
        GameUtil.createBitmapByName("whitepng"),
        GameUtil.createBitmapByName("header")
    ]
    private bgheight:number;

    private stageheight:number;

    public constructor() {
		super()
        this.addChild(this.bg[0]);
        this.addChild(this.bg[1]);
        this.stageheight=GameUtil.getStageHeight();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initView,this)
	}

    protected initView(){
         this.timeOnEnterFrame=egret.getTimer();
         this.bg[0].width=GameUtil.getStageWidth()
         this.bg[1].width=GameUtil.getStageWidth()
         this.bgheight=GameUtil.getStageHeight()*1.2
         this.bg[0].height=this.bgheight
         this.bg[1].height=this.bgheight
         this.bg[0].x=0
         this.bg[0].y=0
         this.bg[1].x=0
         this.bg[1].y=-this.bgheight
         this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
    }

    private onEnterFrame(){
        let nowTime=egret.getTimer();
        let deltaTime=nowTime-this.timeOnEnterFrame;
        let dis=ValueData.ScrollingSpeed*deltaTime;
        let rollbackIndex=-1;
        for(let i=0;i<2;i++)
        {
            this.bg[i].y+=dis;
            if(this.bg[i].y>=this.bgheight)
            {
                rollbackIndex=i;
            }
        }
        if(rollbackIndex!=-1)
        {
            this.bg[rollbackIndex].y=this.bg[1-rollbackIndex].y-this.bgheight
        }
        this.timeOnEnterFrame=nowTime;
    }
}