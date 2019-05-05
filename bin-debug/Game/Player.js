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
            normal: GameUtil.creatMovieClipByName(''),
            jump: GameUtil.creatMovieClipByName(''),
            die: GameUtil.creatMovieClipByName(''),
        };
        //private bg: egret.MovieClip
        _this.bg = GameUtil.creatBitmapByName("black");
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.bg.width = 5;
        _this.bg.height = 5;
        return _this;
    }
    Player.prototype.onAddToStage = function (event) {
        this.init();
    };
    Player.prototype.init = function () {
        //this.bg = new egret.MovieClip()
        this.addChild(this.bg);
        this.setStatus(PlayerStatus.Alive);
    };
    Player.prototype.setStatus = function (status) {
        if (this.status === status) {
            return;
        }
        this.status = status;
        //this.changeBg()
    };
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
    Player.prototype.GetStatus = function () {
        return this.status;
    };
    Player.prototype.SetStatus = function (status) {
        this.status = status;
    };
    return Player;
}(egret.Sprite));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map