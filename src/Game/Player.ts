//角色状态
enum PlayerStatus{
    Alive=0,
    Die=1,
    Jump=2,
}
//主角
class Player extends egret.Sprite{
    private playerMovieClip = {
        normal: GameUtil.creatMovieClipByName(''),
        jump: GameUtil.creatMovieClipByName(''),
        die: GameUtil.creatMovieClipByName(''),
    }
    /**
     * 主角的状态
     */
    private status: PlayerStatus

    //角色图片宽度
    public width:number

    //private bg: egret.MovieClip
    private bg:egret.Bitmap = GameUtil.creatBitmapByName("black");

    public constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        this.bg.width=5;
        this.bg.height=5;
    }

    public onAddToStage(event:egret.Event){
        this.init()
    }

    private init(){
        //this.bg = new egret.MovieClip()
        this.addChild(this.bg)
        this.setStatus(PlayerStatus.Alive)
    }

    public setStatus(status: PlayerStatus){
        if(this.status === status){
            return
        }
        this.status = status
        //this.changeBg()
    }

    // private changeBg() {
    //     switch(this.status){
    //         case PlayerStatus.Alive:
    //             this.bg.movieClipData = this.playerMovieClip.normal.movieClipData
    //             this.bg.play(-1)
    //             break
    //         case PlayerStatus.Die:
    //             this.bg.movieClipData = this.playerMovieClip.die.movieClipData
    //             this.bg.play(-1)
    //             break
    //         case PlayerStatus.Jump:
    //             this.bg.movieClipData = this.playerMovieClip.jump.movieClipData
    //             this.bg.play(-1)
    //             break
    //     }
    // }

    public GetStatus():PlayerStatus{
        return this.status;
    }

    public SetStatus(status:PlayerStatus){
        this.status=status;
    }
}