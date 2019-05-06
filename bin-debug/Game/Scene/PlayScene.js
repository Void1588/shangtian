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
        //砖块
        _this.brick = [new BaseBoard(50, GameUtil.getStageHeight() / 2)];
        return _this;
    }
    PlayScene.prototype.initView = function () {
        this.timeOnEnterFrame = egret.getTimer();
        this.addChild(this.brick[0]);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    PlayScene.prototype.onEnterFrame = function (e) {
        console.log(this.brick[0].x);
        var nowTime = egret.getTimer();
        var deltaTime = nowTime - this.timeOnEnterFrame;
        this.fromLastCreate += deltaTime;
        if (this.fromLastCreate >= 1) {
            this.fromLastCreate = 0;
            this.brick.push(new BaseBoard(50, 20));
            this.addChild(this.brick[0]);
        }
        this.timeOnEnterFrame = nowTime;
    };
    return PlayScene;
}(BaseScene));
__reflect(PlayScene.prototype, "PlayScene");
//# sourceMappingURL=PlayScene.js.map