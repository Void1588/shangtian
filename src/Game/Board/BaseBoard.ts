class BaseBoard extends egret.Sprite{
    //背景图片
    protected bg:egret.Bitmap=GameUtil.creatBitmapByName("black");
    //砖块位置
    protected pos:number;
    //砖块宽度
    protected bgwidth:number;

    public constructor(width:number,pos:number){
        super();
        this.bgwidth=width;
        this.bg.width=width;
        this.bg.height=5;
        this.pos=pos;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
    }

    public onAddToStage(evennt: egret.Event)
    {
        this.init();
    }

    private init()
    {
        this.x=this.pos;
        this.y=-5;
        this.addChild(this.bg);
    }

    public IsOnBoard(playerpos:Point,playerwidth:number):boolean{
        let gra=playerpos.x+playerwidth/2;
        if(gra>this.x&&gra<this.x+this.bgwidth)
            return true;
        else
            return false;
    }

    public movedown(dis:number)
    {
        this.y+=dis;
    }
}