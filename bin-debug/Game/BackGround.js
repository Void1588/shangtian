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
var backgroundimg = (function (_super) {
    __extends(backgroundimg, _super);
    function backgroundimg() {
        var _this = _super.call(this) || this;
        _this.bg = [
            GameUtil.creatBitmapByName("whitepng"),
            GameUtil.creatBitmapByName("header")
        ];
        _this.addChild(_this.bg[0]);
        _this.addChild(_this.bg[1]);
        _this.stageheight = GameUtil.getStageHeight();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        return _this;
    }
    backgroundimg.prototype.initView = function () {
        this.timeOnEnterFrame = egret.getTimer();
        this.bg[0].width = GameUtil.getStageWidth();
        this.bg[1].width = GameUtil.getStageWidth();
        this.bgheight = GameUtil.getStageHeight() * 1.2;
        this.bg[0].height = this.bgheight;
        this.bg[1].height = this.bgheight;
        this.bg[0].x = 0;
        this.bg[0].y = 0;
        this.bg[1].x = 0;
        this.bg[1].y = -this.bgheight;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    backgroundimg.prototype.onEnterFrame = function () {
        var nowTime = egret.getTimer();
        var deltaTime = nowTime - this.timeOnEnterFrame;
        var dis = ValueData.ScrollingSpeed * deltaTime;
        var rollbackIndex = -1;
        for (var i = 0; i < 2; i++) {
            this.bg[i].y += dis;
            if (this.bg[i].y >= this.bgheight) {
                rollbackIndex = i;
            }
        }
        if (rollbackIndex != -1) {
            this.bg[rollbackIndex].y = this.bg[1 - rollbackIndex].y - this.bgheight;
        }
        this.timeOnEnterFrame = nowTime;
    };
    return backgroundimg;
}(egret.DisplayObjectContainer));
__reflect(backgroundimg.prototype, "backgroundimg");
//# sourceMappingURL=BackGround.js.map