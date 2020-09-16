
var BaseLayer = cc.LayerColor.extend({
    ctor: function(size , position, tag){
        this._super();
        this.initWithData(size,position,tag);
        return true;

    },
    onEnter: function(){
        this._super();
    },
    /*
     * Customize with base layer properties
    **/
    initWithData:  function(size , position, tag){
        this.setContentSize(cc.size(size));
        this.setPosition(cc.p(position.x,position.y) );
        this.setTag(tag);
        
    },
    onExit:  function(){
        this._super();
    },

});