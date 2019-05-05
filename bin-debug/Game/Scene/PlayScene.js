var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var PlayScene = (function (_super) {
    __extends(PlayScene, _super);
    function PlayScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeOnEnterFrame = 0;
        //距离上一次制造砖块过去的时间
        _this.fromLastCreate = 0;
        //背景
        _this.bg = GameUtil.creatBitmapByName("white");
        return _this;
    }
    PlayScene.prototype.initView = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
        this.addChild(this.bg);
    };
    PlayScene.prototype.onEnterFrame = function (e) {
        var nowTime = egret.getTimer();
        var deltaTime = nowTime - this.timeOnEnterFrame;
        this.timeOnEnterFrame = nowTime;
    };
    return PlayScene;
}(BaseScene));
__reflect(PlayScene.prototype, "PlayScene");
