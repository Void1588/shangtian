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
var BaseBoard = (function (_super) {
    __extends(BaseBoard, _super);
    function BaseBoard(width, pos) {
        var _this = _super.call(this) || this;
        //背景图片
        _this.bg = GameUtil.creatBitmapByName("black");
        _this.bgwidth = width;
        _this.bg.width = width;
        _this.bg.height = 5;
        _this.pos = pos;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    BaseBoard.prototype.onAddToStage = function (evennt) {
        this.init();
    };
    BaseBoard.prototype.init = function () {
        this.x = this.pos;
        this.y = -5;
        this.addChild(this.bg);
    };
    BaseBoard.prototype.IsOnBoard = function (playerpos, playerwidth) {
        var gra = playerpos.x + playerwidth / 2;
        if (gra > this.x && gra < this.x + this.bgwidth)
            return true;
        else
            return false;
    };
    BaseBoard.prototype.movedown = function (dis) {
        this.y += dis;
    };
    return BaseBoard;
}(egret.Sprite));
__reflect(BaseBoard.prototype, "BaseBoard");
//# sourceMappingURL=BaseBoard.js.map