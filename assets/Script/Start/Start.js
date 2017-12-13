// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        loadingAnimation: {
            default: null,
            type: cc.Animation
        },
        startSound: {
            default: null,
            url: cc.AudioClip
        }
    },

    onLoad: function() {
        this.loadingAnimation.play();
        cc.director.preloadScene("Game");
    },

    startBtnClicked: function() {
        cc.audioEngine.play(this.startSound);
        cc.director.loadScene("Game");
    },

    start () {

    },

    // update (dt) {},
});
