// TypeScript file
class Point {
	public x:number = 0
	public y:number = 0

	public constructor(x: number,y: number) {
		this.x=x
		this.y=y
	}

	public equal(point: Point): boolean{
		return point && point.x===this.x && point.y===this.y
	}

	public copy(): Point{
		return new Point(this.x,this.y)
	}
}
/**
 * 工具类
 */
class GameUtil{
    /*
    获取高度
    */
    public static getStageHeight():number{
        return egret.MainContext.instance.stage.stageHeight
    }

    /*
    获取宽度
    */
    public static getStageWidth():number{
        return egret.MainContext.instance.stage.stageWidth
    }
    
    /*
    根据name创建一个Bitmap对象
    */
    public static createBitmapByName(name:string,type:string='png'){
        let result=new egret.Bitmap()
        let texture:egret.Texture=RES.getRes(name+'_'+type)
        if(!texture){
            console.log(name)
        }
        result.texture=texture
        return result
    }

    /*
     根据name关键字创建一个MovieClip对象
    */
    public static createMovieClipByName(name:string):egret.MovieClip{
        let data_stay:any=RES.getRes(name+"_json")
        let texture_stay:egret.Texture=RES.getRes(name+"_png")
        let mcFactory_stay:egret.MovieClipDataFactory=new egret.MovieClipDataFactory(data_stay,texture_stay)
        return new egret.MovieClip(mcFactory_stay.generateMovieClipData(name))
    }

    public static bitmapToBtn(bitmap:egret.Bitmap,callback){
        bitmap.touchEnabled=true
        //记录当前位置
        const source:Point=new Point(bitmap.x,bitmap.y)
        //记录当前锚点位置
        const sourceAnchor:Point=new Point(bitmap.anchorOffsetX,bitmap.anchorOffsetY)
        //监听触摸事件
        bitmap.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{
            //改变按钮的锚点
            bitmap.anchorOffsetX=bitmap.width/2
            bitmap.anchorOffsetY=bitmap.height/2
            //如果改变后的锚点位置和原来的不一样，那就需要改变按钮位置
            if(!new Point(bitmap.anchorOffsetX,bitmap.anchorOffsetY).equal(sourceAnchor)){
                bitmap.x=source.x+bitmap.anchorOffsetX
                bitmap.y=source.y+bitmap.anchorOffsetY
            }
            //缩放
            bitmap.scaleX=0.95
            bitmap.scaleY=0.95
        },this)
        bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            reset()
            //这个事件发生才算是点击按钮
            callback && callback()
        },this)
        bitmap.addEventListener(egret.TouchEvent.TOUCH_CANCEL,reset,this)
        bitmap.addEventListener(egret.TouchEvent.TOUCH_END,reset,this)
        bitmap.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,reset,this)

        function reset(){
            bitmap.anchorOffsetX=sourceAnchor.x
            bitmap.anchorOffsetY=sourceAnchor.y
            bitmap.x=source.x
            bitmap.y=source.y
            bitmap.scaleX=1
            bitmap.scaleY=1
        }
    }
}