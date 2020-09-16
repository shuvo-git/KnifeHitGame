
var UISprite = cc.Sprite.extend({

    ctor: function (image, position, tag) {
        this._super();
        this.initWithData(image, position, tag);
        return true;
    },

    onEnter: function () {
        this._super();

    },

    initWithData : function(image, position, tag){
        this.init(image);
        this.setPosition(cc.p(position.x, position.y));
        this.setTag(tag);
    },

    onExit : function () {
        this._super();
    }

});