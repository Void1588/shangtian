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
        _this.brick = [new BaseBoard(100, 20)];
        //主角
        _this.player = new Player();
        return _this;
    }
    PlayScene.prototype.initView = function () {
        this.timeOnEnterFrame = egret.getTimer();
        this.addChild(this.brick[0]);
        this.player = new Player();
        this.addChild(this.player);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playerJump, this);
    };
    PlayScene.prototype.onEnterFrame = function (e) {
        var nowTime = egret.getTimer();
        var deltaTime = nowTime - this.timeOnEnterFrame;
        this.fromLastCreate += deltaTime;
        if (this.fromLastCreate >= 1000) {
            this.fromLastCreate = 0;
            this.brick.push(new BaseBoard(50, 20));
            this.addChild(this.brick[this.brick.length - 1]);
        }
        var dis = deltaTime * ValueData.ScrollingSpeed;
        for (var i = 0; i < this.brick.length; i++) {
            this.brick[i].movedown(dis);
        }
        this.player.MoveDown(dis);
        this.timeOnEnterFrame = nowTime;
    };
    PlayScene.prototype.playerJump = function () {
        console.log(1);
        this.player.Jump();
    };
    return PlayScene;
}(BaseScene));
__reflect(PlayScene.prototype, "PlayScene");
//# sourceMappingURL=PlayScene.js.map