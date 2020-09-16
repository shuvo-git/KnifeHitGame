cc.KnifeTapDelegate =  cc.Class.extend({
    knifeTapped : function(){

    }
});

var UIKnife  = BaseLayer.extend({
           mKnifeImage : null,
           mDelegate : null,
           mWorld : null,
           mKnifeBody : null,
    ctor: function (world, size, position, tag) {
        this._super(size, cc.p(position.x, position.y), tag);
        this.setPhysicsWorld(world);
         this.setOpacity(0);
         this.setColor(cc.color(100, 50, 50));
        return true;
    },

    setPhysicsWorld : function (world){
        this.mWorld = world;
    },

    getKnife: function(level){
        this.getKnifeImage(level)
        this.mKnifeBody = new BoxBody(this.mWorld, KnifeWidth, KnifeLength, Box2D.Dynamics.b2Body.b2_dynamicBody, KnifeDensity, KnifeRestitution, KnifeFriction, cc.p(this.getPositionX() + this.mKnifeImage.getPositionX(), this.mKnifeImage.getPositionY() + this.getPositionY()), 0,  KeyForKnifeText, this.mKnifeImage, kKnifeCategory,  kKnifeMask);

        var  dummyKnifeForAnimation   = new UISprite(res.Knife_png, cc.p(this.mKnifeImage.getPositionX(), this.mKnifeImage.getPositionY()), DummyKnifeTag);
        dummyKnifeForAnimation.runAction( Utility.getToAndFromMoveAnimation(cc.p(0, 10)));
        this.addChild(dummyKnifeForAnimation, 2);

    },

    stopKnifeAnimation : function () {
      if(this.getChildByTag(DummyKnifeTag))
      this.getChildByTag(DummyKnifeTag).stopAllActions();
    },

    resumeKnifeAnimation : function(){
        if(this.getChildByTag(DummyKnifeTag))
        this.getChildByTag(DummyKnifeTag).runAction( Utility.getToAndFromMoveAnimation(cc.p(0, 10)));
    },

    getKnifeImage : function(level){
        var knife = new UIButton(res.Knife_png, cc.p(this.getContentSize().width * 0.75, this.getContentSize().height /2 ), KnifeInitialTag);
        knife.setDelegate(this);
        knife.setOpacity(0);
        this.mKnifeImage = knife;
        this.addChild(knife, 3);
    },

    buttonPressed : function(sender){

        this.mDelegate.knifeTapped();
    },

    removeDummyKnife : function(){
        this.removeChildByTag(DummyKnifeTag);
    },

    setDelegate : function(ref){
        this.mDelegate = ref;
    },

    onEnter : function () {
        this._super();
    },
    onExit : function () {
        this._super();

    },
});
