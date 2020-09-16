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

var res = {
    HelloWorld_png : "res/HelloWorld.png",
    Board_png: "res/board4.png",
    Knife_png: "res/knife.png",
    Knife_small_png: "res/knife_small.png",
    GameOver_png: "res/game_over.png",

    Background_png: "res/Common/backGround.png",
    Knife_png: "res/Knife/knife.png",
    Apple_png: "res/Apple/apple.png",
    AttachedKnife_png : "res/Knife/attachedKnife.png",
    Target_png: "res/Board/target.png",

    SelectedKnife_png           : "res/knife/knife.png",
    TargetEffect_png            : "res/Board/targetEffect.png",
    TargetEffect_Plist          : "res/Board/hittingEffect.plist",
    RestartButton_png           : "res/Common/restart.png",
    PlayButton_png              : "res/HomeScene/playButton.png",
    SoundEnable_png             : "res/HomeScene/soundEnable.png",
    SoundDisable_png            : "res/HomeScene/soundDisable.png",
    KnifeSelector_png           : "res/HomeScene/knifeSelector.png",
    LeftCuttedApple_png         : "res/Apple/leftApple.png",
    RightCuttedApple_png         : "res/Apple/rightApple.png",
    Pause_png                   : "res/Common/pause.png",
    RePlay_png                  : "res/Common/replayButton.png",
    Home_png                    : "res/Common/homeButton.png",
    TargetBottomLeft_png        : "res/Board/targetCuttedHalf.png",
    TargetBottomRight_png       : "res/Board/targetSmall.png",
    TargetTopLeft_png           : "res/Board/targetCuttedHalf.png",
    TargetTopRight_png          : "res/Board/targetSmall.png",
    KnifeBackground_png         : "res/Knife/knifeBack.png",
    KnifeLock_1_png             : "res/Knife/knifeLock_1.png",
    KnifeLock_2_png             : "res/Knife/knifeLock_2.png",
    KnifeLock_3_png             : "res/Knife/knifeLock_3.png",
    KnifeLock_4_png             : "res/Knife/knifeLock_4.png",
    KnifeLock_5_png             : "res/Knife/knifeLock_5.png",
    KnifeLock_6_png             : "res/Knife/knifeLock_6.png",
    KnifeLock_7_png             : "res/Knife/knifeLock_7.png",
    KnifeLock_8_png             : "res/Knife/knifeLock_8.png",
    KnifeLock_9_png             : "res/Knife/knifeLock_9.png",
    KnifeLock_10_png            : "res/Knife/knifeLock_10.png",
    YellowKnife_png             : "res/Knife/yellowKnife.png",
    GrayKnife_png               : "res/Knife/grayKnife.png",
    SelectedKnife_png           : "res/Knife/selectedKnife.png",
    SelectedButton_png          : "res/Knife/selectedButton.png",
    DynoRegular_Font             : "res/Font/DynoRegular.ttf"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
