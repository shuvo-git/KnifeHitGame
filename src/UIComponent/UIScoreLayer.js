var UIScoreLayer = BaseLayer.extend({
    mLevel      : 0,
    mScore      : 0,
    mAppleCount : 0,
    ctor : function (size, postion, tag) {
        this._super(size, cc.p(postion.x, postion.y), tag);
        return true;
    },

    onEnter : function () {
        this._super();
        this.setOpacity(0);
        this.createUI();
        this.mLevel = GameLevel.getLevel();
    },

    createUI : function(){
        this.addLevelCount();
        this.addScoreCount();
        this.addApple();
        this.addAppleCount();
    },

    addLevelCount : function(){
        var level = Utility.getLabel("Level : 0", cc.p(this.getContentSize().width * 0.16 , this.getContentSize().height * 0.7), LevelTag);
        this.addChild(level, 1);
    },

    updateLevel : function(levelCount){
        var level  = this.getChildByTag(
            
            
            LevelTag);
        this.mLevel = GameLevel.getLevel();
        level.setString("Level : "+this.mLevel);
    },

    addScoreCount: function(){
        var score = Utility.getLabel("Score : 0", cc.p(this.getContentSize().width * 0.33, this.getContentSize().height * 0.7), ScoreTag);
        score.setColor(cc.color(255,255,0));
        this.addChild(score, 1);
    },

    updateScore : function(scoreCount){
        var score  = this.getChildByTag(ScoreTag);
        score.setPosition(cc.p(this.getContentSize().width * 0.33, this.getContentSize().height * 0.7));
        score.setString("Score : "+this.mScore);

        if(score.getPositionY() >  this.getContentSize().height){
            score.stopAllActions();
            score.runAction(Utility.getMoveAnimation(cc.p(this.getContentSize().width * 0.25, this.getContentSize().height * 1.2)));
        }

       // score.setPosition(cc.p(this.getContentSize().width * 0.25, this.getContentSize().height * 0.7));
        localStorage.setItem(keyForScore,this.mScore);
    },


    addApple : function(){
        var apple  = new UISprite(res.RightCuttedApple_png, cc.p(this.getContentSize().width * 0.38, this.getContentSize().height * 1.0), AppleTag);
        apple.setScale(0.4);
        apple.runAction(Utility.getMoveAnimation(cc.p(this.getContentSize().width * 0.38, this.getContentSize().height * 0.37)))
        this.addChild(apple, 4);
    },

    addAppleCount: function(){
        var appleCount = Utility.getLabel("0", cc.p(this.getContentSize().width * 0.40, this.getContentSize().height * 0.25), AppleCountTag);
        appleCount.setColor(cc.color(255,0,0));
        this.addChild(appleCount, 1);
    },

    updateApple : function(appleScore){
        var appleCount  = this.getChildByTag(AppleCountTag);
        appleCount.setString(this.mAppleCount);

        // this.getChildByTag(kAppleTag).runAction(Utility.getZoomInZoomOutAnimation());
        localStorage.setItem(keyForAppleCount, this.mAppleCount);
    },

    onExit : function () {
        this._super();
    }


});
