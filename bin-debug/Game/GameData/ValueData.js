var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ValueData = (function () {
    function ValueData() {
    }
    ValueData.ScrollingSpeed = 5;
    ValueData.MinBoardLen = 5;
    ValueData.MaxBoardLen = 10;
    return ValueData;
}());
__reflect(ValueData.prototype, "ValueData");
//# sourceMappingURL=ValueData.js.map