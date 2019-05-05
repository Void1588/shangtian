class backgroundimg extends egret.DisplayObjectContainer{
    private timeOnEnterFrame:number;
    private bg:Array<egret.Bitmap>=[
        GameUtil.creatBitmapByName("white"),
        GameUtil.creatBitmapByName("white")
    ]
    private bgheight:number;

    public constructor() {
		super()
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initView,this)
	}

    protected initView(){
         this.timeOnEnterFrame=egret.getTimer();
         this.bg[0].width=GameUtil.getStageWidth()
         this.bg[1].width=GameUtil.getStageWidth()
         this.bgheight=GameUtil.getStageHeight()*2
         this.bg[0].height=this.bgheight
         this.bg[1].height=this.bgheight
         this.addChild(this.bg[0]);
         this.addChild(this.bg[1]);
         this.bg[0].x=0
         this.bg[0].y=0
         this.bg[1].x=1
         this.bg[1].y=this.bgheight
         //this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
         
    }

    private onEnterFrame(){
        let nowTime=egret.getTimer();
        let deltaTime=nowTime-this.timeOnEnterFrame;
        let dis=ValueData.ScrollingSpeed*deltaTime;
        for(let i=0;i<2;i++)
        {
            this.bg[i].y-=dis;
            console.log(this.bg[i].y)
            if(this.bg[i].y<=this.bgheight)
            {
                this.bg[i].y=this.bg[1-i].y+this.bgheight
            }
        }
        this.timeOnEnterFrame=nowTime;
    }
}