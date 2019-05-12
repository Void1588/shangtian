//角色状态
enum PlayerStatus{
    Alive=0,
    Die=1,
    Jump=2,
}
//主角
class Player extends egret.DisplayObjectContainer{
    private playerMovieClip = {
        normal: GameUtil.createMovieClipByName('cat_normal'),
        jump: GameUtil.createMovieClipByName('cat_lose'),
        die: GameUtil.createMovieClipByName('cat_lose'),
    }
    /**
     * 主角的状态
     */
    private status: PlayerStatus

    //角色图片宽度
    public width:number

    private bg:egret.MovieClip;

    public constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
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
        // this.x=GameUtil.getStageWidth()/2;
        // this.y=GameUtil.getStageHeight()/2;
        this.x=0;
        this.y=0;
    }

    public setStatus(status: PlayerStatus){
        if(this.status === status){
            return
        }
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
        }
    }

    public GetStatus():PlayerStatus{
        return this.status;
    }

    public SetStatus(status:PlayerStatus){
        this.status=status;
    }
}