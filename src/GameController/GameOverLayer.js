cc.RestartButtonDelegate = cc.Class.extend({

    restartButtonClicked : function (sender) {

    }
});

var GameOverLayer = BaseLayer.extend({
    mDelegate : null,
    touchListener : null,

    ctor : function (size, postion, tag) {
        this._super(size, postion, tag);

        this.addBackGround();
        this.setOpacity(180);
        this.setColor(cc.color(100, 100, 100));
        cc.log("Game Over called!");
        this.addRestartButton();
        return true;
    },

    onEnter : function (){
        this._super();
    },

    addBackGround: function () {
        var backGround = new UISprite(
            res.GameOver_png, 
            cc.p(this.getContentSize().width / 2, this.getContentSize().height / 2), 
            BackgroundTag
        );
        this.addChild(backGround, 1);
    },

    addRestartButton : function(){

        //var dummyBoard = new UISprite(res.Target_png, cc.p(this.getContentSize().width * 0.5, this.getContentSize().height * 0.68), DummyBoardTag);
        //this.addChild(dummyBoard, 1);

        var restartButton = new UIButton(res.RestartButton_png, cc.p(this.getContentSize().width * 0.5, this.getContentSize().height * 0.68), RestartButtonTag);
        restartButton.runAction(Utility.getZoomInZoomOutAnimation());
        restartButton.setDelegate(this);
        this.addChild(restartButton, 2);
    },
    buttonPressed : function(sender, type){
        console.log("Restart button pressed");
        this.mDelegate.restartButtonClicked(sender);
    },
    setDelegate : function(ref){
        this.mDelegate = ref;
    },
    onExit: function () {
        this._super();
    },

});