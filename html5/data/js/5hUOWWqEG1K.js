window.globalProvideData('slide', '{"title":"Essay","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":3,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide3","width":1080,"height":1920,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5hUOWWqEG1K","actionGroups":{"ReviewInt_5xctQT3GvW9":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5kPDygrzz2W"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5xctQT3GvW9","typea":"var","valueb":"67pvIE0scOn","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.67pvIE0scOn.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5xctQT3GvW9"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.67pvIE0scOn.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5xctQT3GvW9"}]}]}]},"ReviewIntCorrectIncorrect_5xctQT3GvW9":{"kind":"actiongroup","actions":[]},"AnsweredInt_5xctQT3GvW9":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5xctQT3GvW9"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5xctQT3GvW9":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5kPDygrzz2W"},"enabled":{"type":"boolean","value":false}}]},"5xctQT3GvW9_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5tQxSZ8bYp3.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5xctQT3GvW9"}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5hUOWWqEG1K":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5g4HQ6XdEfL"}}]},"NavigationRestrictionPreviousSlide_5hUOWWqEG1K":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_68jtoPnxjiH","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_68jtoPnxjiH","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5xctQT3GvW9","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5xctQT3GvW9"}],"elseActions":[{"kind":"exe_actiongroup","id":"5xctQT3GvW9_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5xctQT3GvW9","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5xctQT3GvW9","typea":"var","valueb":"67pvIE0scOn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.67pvIE0scOn"},"completed_slide_ref":{"type":"string","value":"_player.6jja93YUHKo.6pAUzGcIbNe"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5xctQT3GvW9","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5xctQT3GvW9","typea":"var","valueb":"67pvIE0scOn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.67pvIE0scOn"},"completed_slide_ref":{"type":"string","value":"_player.6jja93YUHKo.6pAUzGcIbNe"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5hUOWWqEG1K"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5hUOWWqEG1K"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5hUA1gSuHBo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5kPDygrzz2W"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6M3CzAlWmv1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6dNrm4jlBgH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6RyZpvyc5NI"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":87,"id":"01","url":"story_content/638k1wznuce_80_DX3840_DY3840.swf","type":"normal","altText":"22.png","width":1151,"height":2046,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":540,"rotateYPos":960,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1080,"bottom":1920,"altText":"22.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1080,"height":1920,"strokewidth":0}},"width":1080,"height":1920,"resume":true,"useHandCursor":true,"id":"5hUA1gSuHBo"},{"kind":"textinput","bindto":"_player.TextEntry5","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":5000,"placeholder":"Isi jawabanmu disini!","fontsize":44,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":140,"yPos":1344,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":411.5,"rotateYPos":131.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5kPDygrzz2W","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":804,"height":264,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":416,"bottom":59,"pngfb":false,"pr":{"l":"Lib","i":16}}},"html5data":{"xPos":0,"yPos":0,"width":824,"height":264,"strokewidth":1}},"width":824,"height":264,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":825,"bottom":265,"altText":"Isi jawabanmu disini!","pngfb":false,"pr":{"l":"Lib","i":143}}},"id":"5kPDygrzz2W","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry5","operator":"set","value":{"type":"property","value":"$Text"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":53,"id":"01","url":"story_content/6TqCBsGJMTa_80_DX526_DY526.swf","type":"normal","altText":"gg3.png","width":425,"height":526,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":86,"id":"02","url":"story_content/6TqCBsGJMTa_80_DX526_DY526.swf","type":"normal","altText":"gg3.png","width":425,"height":526,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":868,"yPos":1696,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":85,"rotateYPos":105.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":170,"bottom":211,"altText":"gg3.png","pngfb":false,"pr":{"l":"Lib","i":17}},"html5data":{"xPos":0,"yPos":0,"width":170,"height":211,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-13,"top":-16,"right":184,"bottom":211,"altText":"gg3.png","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":-13,"yPos":-16,"width":197,"height":227,"strokewidth":0}}}],"width":170,"height":211,"resume":true,"useHandCursor":true,"id":"6M3CzAlWmv1","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpClearHoverState"},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6jja93YUHKo.67X9hvlfm2m"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":55,"id":"01","url":"story_content/6IozolCqZG4_80_DX436_DY436.swf","type":"normal","altText":"gg2.png","width":352,"height":436,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":56,"id":"02","url":"story_content/6IozolCqZG4_80_DX438_DY438.swf","type":"normal","altText":"gg2.png","width":353,"height":438,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":236,"yPos":1696,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":85,"rotateYPos":105.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":170,"bottom":211,"altText":"gg2.png","pngfb":false,"pr":{"l":"Lib","i":19}},"html5data":{"xPos":0,"yPos":0,"width":170,"height":211,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-7,"top":-8,"right":177,"bottom":211,"altText":"gg2.png","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":-7,"yPos":-8,"width":184,"height":219,"strokewidth":0}}}],"width":170,"height":211,"resume":true,"useHandCursor":true,"id":"6dNrm4jlBgH","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"_parent.5kPDygrzz2W.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5tQxSZ8bYp3"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_68jtoPnxjiH.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":57,"id":"01","url":"story_content/5p5HZVhhB8t_80_DX436_DY436.swf","type":"normal","altText":"gg.png","width":352,"height":436,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":58,"id":"02","url":"story_content/5p5HZVhhB8t_80_DX438_DY438.swf","type":"normal","altText":"gg.png","width":353,"height":438,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":44,"yPos":1696,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":85,"rotateYPos":105.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":170,"bottom":211,"altText":"gg.png","pngfb":false,"pr":{"l":"Lib","i":19}},"html5data":{"xPos":0,"yPos":0,"width":170,"height":211,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-7,"top":-8,"right":177,"bottom":211,"altText":"gg.png","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":-7,"yPos":-8,"width":184,"height":219,"strokewidth":0}}}],"width":170,"height":211,"resume":true,"useHandCursor":true,"id":"6RyZpvyc5NI","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpClearHoverState"},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6jja93YUHKo.613uR1Hcavn"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5xctQT3GvW9_CorrectReview","id":"01","linkId":"5xctQT3GvW9_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":582,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":22}}}],"shapemaskId":"","xPos":0,"yPos":1880,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":540,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1080,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":1,"yPos":1,"width":1077,"height":37,"strokewidth":2}},"width":1080,"height":40,"resume":false,"useHandCursor":true,"id":"5xctQT3GvW9_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5xctQT3GvW9_IncorrectReview","id":"01","linkId":"5xctQT3GvW9_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":591,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":24}}}],"shapemaskId":"","xPos":0,"yPos":1880,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":540,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1080,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":1,"yPos":1,"width":1077,"height":37,"strokewidth":2}},"width":1080,"height":40,"resume":false,"useHandCursor":true,"id":"5xctQT3GvW9_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');