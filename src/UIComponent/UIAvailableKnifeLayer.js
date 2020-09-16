

var UIAvailbaleKnifeLayer = BaseLayer.extend({
    mAvailabelKnife : 9,//kTotalNumberOfKnife,

    ctor : function (size, postion, tag) {
        this._super(size, postion, tag);
        this.addAvailableDummyKnife();
        this.setOpacity(0);
        this.setColor(cc.color(100, 100, 100));
        cc.log("available knife called");
        return true;
    },

    onEnter : function (){
        this._super();
    },

    /**
     * addAvailableDummyKnife : This will add dummy Knife the game to show the available knife.
     */
    addAvailableDummyKnife : function(){
        var xInitialPosition = this.getContentSize().width * 1.0;
        var YInitialPosition = this.getContentSize().height * 0.2;

         cc.log(" knife count = " + GameLevel.getAvailableKnife());
        for (var knifeIndex = 0; knifeIndex < GameLevel.getAvailableKnife(); knifeIndex++) {
            var dummyKnife = new UISprite(res.Knife_small_png, cc.p(xInitialPosition, YInitialPosition), AvailableKnifeInitialTag + knifeIndex);
            //dummyKnife.setRotation(-30);
            dummyKnife.setScale(0.03);
            this.addChild(dummyKnife, 50);
            YInitialPosition = YInitialPosition + 30;
        }
    },

    /**
     * changeKnifeTexture : This will change the knife texture if it has been used.
     */
    changeKnifeTexture : function(availebleKnife){
      cc.log("change knife texture called with value"+ availebleKnife);
        var knife  = this.getChildByTag((AvailableKnifeInitialTag) + parseInt(availebleKnife));
        if(knife) {
            //  knife.setTexture(cc.Sprite.create(res.YellowKnife_png).getTexture());
            knife.setRotation(45);
            //this.removeChild(knife);
        }
    },

    onExit : function () {
        this._super();
    }
});
