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
//角色状态
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus[PlayerStatus["Alive"] = 0] = "Alive";
    PlayerStatus[PlayerStatus["Die"] = 1] = "Die";
    PlayerStatus[PlayerStatus["Jump"] = 2] = "Jump";
})(PlayerStatus || (PlayerStatus = {}));
//主角
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.playerMovieClip = {
            normal: GameUtil.creatMovieClipByName('cat_normal'),
            jump: GameUtil.creatMovieClipByName('cat_lose'),
            die: GameUtil.creatMovieClipByName('cat_lose'),
        };
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.startPos = new Point(GameUtil.getStageWidth() / 2, GameUtil.getStageHeight() / 2);
        return _this;
        // this.bg.width=20;
        // this.bg.height=20;
    }
    Player.prototype.onAddToStage = function (event) {
        this.init();
    };
    Player.prototype.init = function () {
        this.bg = new egret.MovieClip();
        this.addChild(this.bg);
        this.setStatus(PlayerStatus.Alive);
        this.x = this.startPos.x;
        this.y = this.startPos.y;
        ;
    };
    Player.prototype.setStatus = function (status) {
        if (this.status === status) {
            return;
        }
        this.status = status;
        this.changeBg();
    };
    Player.prototype.changeBg = function () {
        switch (this.status) {
            case PlayerStatus.Alive:
                this.bg.movieClipData = this.playerMovieClip.normal.movieClipData;
                this.bg.play(-1);
                break;
            case PlayerStatus.Die:
                this.bg.movieClipData = this.playerMovieClip.die.movieClipData;
                this.bg.play(-1);
                break;
            case PlayerStatus.Jump:
                this.bg.movieClipData = this.playerMovieClip.jump.movieClipData;
                this.bg.play(-1);
                break;
        }
    };
    Player.prototype.GetStatus = function () {
        return this.status;
    };
    Player.prototype.SetStatus = function (status) {
        this.status = status;
    };
    Player.prototype.MoveDown = function (dis) {
        this.y += dis;
    };
    Player.prototype.Jump = function () {
        console.log("Jump");
        // this.y-=20;
        // this.setStatus(PlayerStatus.Jump);
    };
    return Player;
}(egret.DisplayObjectContainer));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map