class PlayScene extends BaseScene{
    private timeOnEnterFrame:number = 0;

    //距离上一次制造砖块过去的距离
    private fromLastCreateDis:number=0;

    //距离上一次选词的等级距离
    private fromLastSentenceLevel:number=0;

    //砖块
    private brick:Array<BaseBoard>=[new BaseBoard(100,20)];

    //主角
    private player:Player=new Player();

    private toucharea:egret.Bitmap=GameUtil.creatBitmapByName("toucharea");

    private stage_width=GameUtil.getStageWidth();
    private stage_height=GameUtil.getStageHeight();

    protected initView(){
         this.timeOnEnterFrame=egret.getTimer();
         this.addChild(this.brick[0])
         this.player=new Player();
         this.addChild(this.player)
         this.width=GameUtil.getStageWidth();
         this.height=GameUtil.getStageHeight();
         this.touchEnabled=true;
         this.toucharea.width=GameUtil.getStageWidth();
         this.toucharea.height=GameUtil.getStageHeight();
         this.toucharea.touchEnabled=true;
         this.addChild(this.toucharea);
         this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
         this.toucharea.addEventListener(egret.TouchEvent.TOUCH_TAP,this.playerJump,this)
    }

    private onEnterFrame(e:egret.Event)
    {
        let nowTime=egret.getTimer();
        let deltaTime=nowTime-this.timeOnEnterFrame;
        let dis=deltaTime*ValueData.ScrollingSpeed;
        this.fromLastCreateDis+=dis;
        if(this.fromLastCreateDis>=ValueData.LevelDis)
        {
            this.fromLastCreateDis=0;
            this.fromLastSentenceLevel+=1;
            if(this.fromLastSentenceLevel==ValueData.SentenceLevel)
            {
                this.createSentenceBrick();
                this.fromLastSentenceLevel==0;
            }
            else
            {
                this.createCustomBrick();
            }
        }
        for(let i=0;i<this.brick.length;i++){
            this.brick[i].movedown(dis);
        }
        this.player.MoveDown(dis);
        if(this.player.GetStatus()===PlayerStatus.Fall){
            for(let i=0;i<this.brick.length;i++){
                if(this.brick[i].IsOnBoard(new Point(this.player.x,this.player.y),this.player.height,this.player.width)){
                    this.player.SetStatus(PlayerStatus.Alive);
                    this.player.y=this.brick[i].y-this.player.height;
                }
            }
        }
        this.timeOnEnterFrame=nowTime;
    }

    //制造普通的砖块
    private createCustomBrick()
    {
        this.brick.push(new BaseBoard(200,this.stage_width/2))
        this.addChild(this.brick[this.brick.length-1])
    }
    
    //制造诗句砖块
    private createSentenceBrick()
    {

    }

    private playerJump(e:egret.TouchEvent)
    {
        this.player.Jump(e.stageX);
    }
}