//角色状态
enum PlayerStatus{
    Alive=0,
    Die=1,
    Jump=2,
    Fall=3,
}
//主角
class Player extends egret.DisplayObjectContainer{
    private playerMovieClip = {
        normal: GameUtil.createMovieClipByName('cat_normal'),
        jump: GameUtil.createMovieClipByName('cat_loser'),
        die: GameUtil.createMovieClipByName('cat_loser'),
        fall:GameUtil.createMovieClipByName('cat_normal'),
    }
    /**
     * 主角的状态
     */
    private status: PlayerStatus

    //角色图片宽度
    public width:number=61;

    public height:number=93;

    private bg:egret.MovieClip;

    private startPos:Point;

    private jumpSpeed:number=0.5;   //跳跃速度

    private jumpLevel:number=2.5; //一次跳跃的高度确定

    private jumpTime:number=this.jumpLevel*ValueData.LevelDis/this.jumpSpeed;

    private jumpxSpeed:number=3 //跳跃时x方向上的速度，有x位置确定

    private fallspeed:number=0.35;   //下落速度

    private aimposx:number;     //目标x位置

    private timeOnEnterFrame:number = 0;

    private lastStatusTime:number=0;

    public constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        this.startPos=new Point(GameUtil.getStageWidth()/2,GameUtil.getStageHeight()/2)
        // this.bg.width=20;
        // this.bg.height=20;
    }

    public onAddToStage(event:egret.Event){
        this.init()
    }

    private init(){
        this.bg = new egret.MovieClip()
        this.addChild(this.bg)
        this.setStatus(PlayerStatus.Alive)
        this.x=this.startPos.x;
        this.y=this.startPos.y;
        this.timeOnEnterFrame=egret.getTimer();
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
    }

    private onEnterFrame(){
        let nowTime=egret.getTimer();
        let deltaTime=nowTime-this.timeOnEnterFrame;
        this.lastStatusTime+=deltaTime;
        switch(this.status){
            case PlayerStatus.Alive:
                break;
            case PlayerStatus.Jump:
                this.JumpUp(deltaTime);
                break;
            case PlayerStatus.Fall:
                this.FallDown(deltaTime);
                break;
            case PlayerStatus.Die:
                break;
        }

        this.timeOnEnterFrame=nowTime;
    }

    private JumpUp(deltaTime:number){
        let jumpyDis=deltaTime*this.jumpSpeed;
        let jumpxDis=deltaTime*this.jumpxSpeed;
        this.y-=jumpyDis;
        this.x+=jumpxDis;
        if(this.lastStatusTime>=this.jumpTime){
            this.setStatus(PlayerStatus.Fall);
        }
    }

    private FallDown(deltaTime:number){
        let fallDis=deltaTime*this.fallspeed;
        this.y+=fallDis;
    }

    public setStatus(status: PlayerStatus){
        if(this.status === status){
            return
        }
        this.lastStatusTime=0;
        this.status = status
        this.changeBg()
    }

    private changeBg() {
        switch(this.status){
            case PlayerStatus.Alive:
                this.bg.movieClipData = this.playerMovieClip.normal.movieClipData
                this.bg.play(-1)
                break
            case PlayerStatus.Die:
                this.bg.movieClipData = this.playerMovieClip.die.movieClipData
                this.bg.play(-1)
                break
            case PlayerStatus.Jump:
                this.bg.movieClipData = this.playerMovieClip.jump.movieClipData
                this.bg.play(-1)
                break
            case PlayerStatus.Fall:
                this.bg.movieClipData = this.playerMovieClip.fall.movieClipData
                this.bg.play(-1)
                break
        }
    }

    public GetStatus():PlayerStatus{
        return this.status;
    }

    public SetStatus(status:PlayerStatus){
        this.status=status;
        this.setStatus(status);
    }

    public MoveDown(dis:number){
        this.y+=dis;
    }

    public Jump(posx:number){
        this.aimposx=posx;
        this.jumpxSpeed=(this.aimposx-this.x)/this.jumpTime;
        this.setStatus(PlayerStatus.Jump);
    }


}