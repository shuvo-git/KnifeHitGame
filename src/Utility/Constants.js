/*var GameControllerLayerTag  = 2;
var BackgroundTag           = 4;
var DummyKnifeTag           = 5;
var KnifeInitialTag         = 28;
var GameOverLayerTag        = 41;
var kAppleTag               = 52;
var TargetLayerTag          = 64;
var KnifeLayerTag           = 65;
var AttachedAppleTag        = 85;
var AttachedKnifeTag        = 91;*/

var TargetTag                                  =           1;
var GameControllerLayerTag                     =           2;
var KnifeTag                                   =           3;
var BackgroundTag                              =           4;
var DummyKnifeTag                              =           5;
var AvailableKnifeInitialTag                   =           6;
var DummyKnifeInitialTag                       =           17;
var KnifeInitialTag                            =           28;
var ScoreLabelTag                              =           38;
var ScoreTag                                   =           39;
var GameNameTag                                =           40;
var GameOverLayerTag                           =           41;
var RestartButtonTag                           =           42;
var GameOverLabelTag                           =           43;
var PlayButtonTag                              =           44;
var SoundButtonTag                             =           45;
var KnifeSelectorTag                           =           46;
var HomeLayerTag                               =           47;
var GameScoreLayerTag                          =           48;
var LevelTag                                   =           49;
var AppleCountTag                              =           50;
var GameLayerTag                               =           51;
var AppleTag                                   =           52;
var knifeSelectionLayerTag                     =           53;
var AvailableKnifeLayerTag                     =           54;
var SoundSpriteTag                             =           55;
var DummyBoardTag                              =           56;
var GameNameKnifeTag                           =           57;
var GameNameHitTag                             =           58;
var PauseButtonTag                             =           59;
var HomeButtonTag                              =           60;
var ReplayButtonTag                            =           61;
var PauseLayerTag                              =           62;
var GamePlayLayerTag                           =           63;
var TargetLayerTag                             =           64;
var KnifeLayerTag                              =           65;
var SelectedKnifeTag                           =           66;
var DummyBrokenBoardInitialTag                 =           67;
var KnifeSelectionBackgroundTag                =           68;
var KnifeSelectionInitialTag                   =           72;
var SelectedButtonTag                          =           83;
var CompanyNameTag                             =           84;
var AttachedAppleTag                           =           85;
var LeftCuttedAppleTag                         =           89;
var RightCuttedAppleTag                        =           90;
var AttachedKnifeTag                           =           91;





var kAppleCategory                              =           0x002;
var kKnifeCategory                              =           0x004;
var kTargetCategory                             =           0x008;
var kAppleMask                                  =           kKnifeCategory;
var kTargetMask                                 =           kKnifeCategory;
var kKnifeMask                                  =           kTargetCategory | kKnifeCategory  | kAppleCategory;
var kAttachedAppleCategory                      =           0x0016;
var kAttachedAppleMask                          =           -1;

//common
var kPTMRatio                                   =             32;

// KHGameControllerLayer
var GravityInX                                 =             0;
var GravityInY                                 =             0;


//--Knife
var KnifeWidth                                  =             15;
var KnifeLength                                 =             60;
var KnifeDensity                                =             7.85;
var KnifeRestitution                            =             0;
var KnifeFriction                               =             1.0;
var kTotalNumberOfKnife                         =             10;
var kKnifeImpulse                               =             20;

//--Target
var kTargetRadius                               =             60;
var KTargetDensity                              =             70000.85;
var KTargetRestitution                          =             0;
var KTargetFriction                             =             1.0;

//apple
var AppleRadius                                 =             15;
var AppleDensity                                =             0.00;
var AppleRestitution                            =             0.0;
var AppleFriction                               =             0.0;
var CuttedApplePositionMargin                   =             30;
var AppleImpulseInY                             =             15;
var AppleImpulseInX                             =             10;



//Score
var kScoreFontSize                              =              40;
//Game

var kGameFontSize                              =               50;
var GameOverLayerTag                           =               105;

var keyForCurrentLevel                         =               "currentLevel";
var keyForScore                                =               "currentScore";
var keyForAppleCount                           =               "appleCount";
var KeyForAppleText                            =               "apple";
var KeyForKnifeText                            =               "knife";
var KeyForAttachedKnifeText                    =               "attachedKnife";
var KeyForTargetText                           =               "target";
var KeyForLeftAppleText                        =               "leftApple";
var KeyForRightAppleText                       =               "rightApple";
var kCompanyName                               =               "Hello World";
var kDebugCanvas                               =                "debugCanvas";
var kDebugContext                              =                "2d";



