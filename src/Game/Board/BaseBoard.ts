class BaseBoard extends egret.DisplayObjectContainer{
    //背景图片
    protected bg:egret.Bitmap=GameUtil.createBitmapByName("black");
    //砖块位置
    protected pos:number;
    //砖块宽度
    protected bgwidth:number;

    protected bgheight:number;

    public constructor(width:number,pos:number){
        super();
        this.bgwidth=width;
        this.bg.width=width;
        this.bg.height=10;
        this.bgheight=10;
        this.pos=pos;
        this.addChild(this.bg); //addChild不要写到添加到舞台的函数里
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
    }

    public onAddToStage()
    {
        this.init();
    }

    private init()
    {
        this.x=this.pos;
        this.y=GameUtil.getStageHeight()/2;
    }

    public IsOnBoard(playerpos:Point,playerheight:number,playerwidth:number):boolean{
        let posy=playerpos.y+playerheight;
        if(!(posy>=this.y-1&&posy<=this.y+this.bgheight+1)){
            return false;
        }
        if(playerpos.x>this.x&&playerpos.x+playerwidth/2<this.x+this.bgwidth){
            return true;
        }
        else{
            return false;
        }
    }

    public movedown(dis:number)
    {
        this.y+=dis;
    }
}