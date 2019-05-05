class SceneController{
    private _stage:egret.DisplayObjectContainer //场景容器

	private startScene:StartScene //开始场景
	private playScene:PlayScene  //游戏场景
	private endScene:EndScene   //结束场景
	
	private static sceneController:SceneController

	public static get instance(){
		if(!this.sceneController){
			this.sceneController = new SceneController()
		}
		return this.sceneController
	}

	public constructor(){
		this.startScene = new StartScene()
		this.playScene = new PlayScene()
		this.endScene = new EndScene()
	}

    //设置存放游戏场景的容器
	public setStage(stage: egret.DisplayObjectContainer){
		this._stage = stage
	}

    public static initGame(){
        this.instance._stage.addChild(this.instance.playScene)
    }
}