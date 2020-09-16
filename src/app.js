/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/


var HelloWorldLayer = cc.Layer.extend({
    
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        var xPos = size.width/2;
        var yPos = size.height/2;

        

        
        var sprite = new cc.Sprite.create(res.Board_png);
        sprite.setAnchorPoint(cc.p(0.5,0.5));
        sprite.setPosition(cc.p(size.width/2, size.height/2 ));
        this.addChild(sprite,0);
        sprite.setScale(0.2);

        
        var spriteKnifeThrow = new cc.Sprite.create(res.Knife_png);
        spriteKnifeThrow.setAnchorPoint(cc.p(0.5,0.5));
        spriteKnifeThrow.setPosition(cc.p(xPos, yPos-280 ));
        this.addChild(spriteKnifeThrow,0);
        spriteKnifeThrow.setScale(0.075);

        var spriteKnifeSmall = [];
        var counter = 8;
        var yyy = yPos-280;
        for(var i=0;i<9;i++)
        {
            spriteKnifeSmall[i] = new cc.Sprite.create(res.Knife_small_png);
            spriteKnifeSmall[i].setAnchorPoint(cc.p(0.5,0.5));
            spriteKnifeSmall[i].setPosition(cc.p(xPos-150, yyy ));
            this.addChild(spriteKnifeSmall[i],0);
            spriteKnifeSmall[i].setScale(0.02);

            yyy += 13;
        }

        var spriteKnifeThrowChild = [];
        var knifeIndex = 0;

        var hoverHandler = cc.EventListener.create({
            event: cc.EventListener.MOUSE,
            onMouseUp: function (event) {
              if(counter>-1){
                var knife_action = cc.RotateBy.create(0.10,45);
                spriteKnifeSmall[counter--].runAction(knife_action);

                spriteKnifeThrowChild[knifeIndex] = new cc.Sprite.create(res.Knife_png);
                spriteKnifeThrowChild[knifeIndex].setAnchorPoint(cc.p(0.5,0.5));
                spriteKnifeThrowChild[knifeIndex].setPosition(cc.p(xPos,yPos-280) );
                spriteKnifeThrowChild[knifeIndex].setScale(0.4);
                sprite.addChild(spriteKnifeThrowChild[knifeIndex],0);

                var knife_throw_action = cc.RotateBy.create(0.05,15);
                spriteKnifeThrowChild[knifeIndex].runAction(knife_throw_action);
                knifeIndex++;

                console.log(sprite._rotationX);
                
              }

              /* var target = event.getCurrentTarget();
              var locationInNode = target.convertToNodeSpace(event.getLocation());
              var s = target.getContentSize();
              var rect = cc.rect(0, 0, s.width, s.height);




        
              /*if (cc.rectContainsPoint(rect, locationInNode)) {
                cc.log("It's hovering! x = " + locationInNode.x + ", y = " + locationInNode.y);
                target.opacity = 180;
                return true;
              } else {
                target.opacity = 255;
                return false;
              }*/

              //alert("clicked");
          }
        });

        cc.eventManager.addListener(hoverHandler.clone(), sprite );


        //var sprite_action = cc.MoveTo.create(3,cc.p(0,0));
        //var sprite_action = cc.MoveBy.create(3,cc.p(50,100));
        //var sprite_action = cc.JumpBy.create(3,cc.p(50,100),50,4);
        var i = 100;
        var sprite_action = cc.RotateBy.create(200,360*i);
        
        sprite.runAction(sprite_action);
        //sprite.runAction(sprite_action);

        return true;
    }
});

var HelloWorldScene1 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

