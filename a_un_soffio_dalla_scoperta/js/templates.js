angular.module('c4app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partials/blow.html',
    "<div class=\"container\" id=\"stp5\"\n" +
    "\tng-controller=\"BlowCtrl\">\n" +
    "\t\n" +
    "\t<img src=\"images/svg/dots_04.svg\" />\n" +
    "\t\n" +
    "\t<div id=\"flashContent\">\n" +
    "\t\t\t<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"512\" height=\"250\" id=\"Mic\" align=\"middle\">\n" +
    "\t\t\t\t<param name=\"movie\" value=\"mic/Mic.swf?t=1\" />\n" +
    "\t\t\t\t<param name=\"quality\" value=\"high\" />\n" +
    "\t\t\t\t<param name=\"bgcolor\" value=\"#EDE4DB\" />\n" +
    "\t\t\t\t<param name=\"play\" value=\"true\" />\n" +
    "\t\t\t\t<param name=\"loop\" value=\"true\" />\n" +
    "\t\t\t\t<param name=\"wmode\" value=\"window\" />\n" +
    "\t\t\t\t<param name=\"scale\" value=\"showall\" />\n" +
    "\t\t\t\t<param name=\"menu\" value=\"true\" />\n" +
    "\t\t\t\t<param name=\"devicefont\" value=\"false\" />\n" +
    "\t\t\t\t<param name=\"salign\" value=\"\" />\n" +
    "\t\t\t\t<param name=\"allowScriptAccess\" value=\"always\" />\n" +
    "\t\t\t\t<param name=\"allowNetworking\" value=\"all\" />\n" +
    "\t\t\t\t<!--[if !IE]>-->\n" +
    "\t\t\t\t<object type=\"application/x-shockwave-flash\" data=\"mic/Mic.swf\" width=\"512\" height=\"250\">\n" +
    "\t\t\t\t\t<param name=\"movie\" value=\"mic/Mic.swf?t=1\" />\n" +
    "\t\t\t\t\t<param name=\"quality\" value=\"high\" />\n" +
    "\t\t\t\t\t<param name=\"bgcolor\" value=\"#EDE4DB\" />\n" +
    "\t\t\t\t\t<param name=\"play\" value=\"true\" />\n" +
    "\t\t\t\t\t<param name=\"loop\" value=\"true\" />\n" +
    "\t\t\t\t\t<param name=\"wmode\" value=\"window\" />\n" +
    "\t\t\t\t\t<param name=\"scale\" value=\"showall\" />\n" +
    "\t\t\t\t\t<param name=\"menu\" value=\"true\" />\n" +
    "\t\t\t\t\t<param name=\"devicefont\" value=\"false\" />\n" +
    "\t\t\t\t\t<param name=\"salign\" value=\"\" />\n" +
    "\t\t\t\t\t<param name=\"allowScriptAccess\" value=\"always\" />\n" +
    "\t\t\t\t\t<param name=\"allowNetworking\" value=\"all\" />\n" +
    "\t\t\t\t<!--<![endif]-->\n" +
    "\t\t\t\t\t<a href=\"http://www.adobe.com/go/getflash\">\n" +
    "\t\t\t\t\t\t<img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Get Adobe Flash player\" />\n" +
    "\t\t\t\t\t</a>\n" +
    "\t\t\t\t<!--[if !IE]>-->\n" +
    "\t\t\t\t</object>\n" +
    "\t\t\t\t<!--<![endif]-->\n" +
    "\t\t\t</object>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"a\" ng-if=\"label1\" translate=\"{{'ORA_SOFFIA'}}\"></div>\n" +
    "\t<div class=\"a\" ng-if=\"label2\" translate=\"{{'NON_HO_SENTITO'}}\"></div>\n" +
    "\t<div class=\"a\" ng-if=\"label3\" translate=\"{{'UN_PROBLEMA'}}\" ng-click=\"performBlow();\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('partials/blowFake.html',
    "<div class=\"container\" id=\"stp6\" ng-controller=\"BlowFakeCtrl\" style=\"padding-top:35px;\">\n" +
    "\t\n" +
    "\t<div style=\"padding-bottom: 30px;\">\n" +
    "\t\t<img src=\"images/svg/dots_04.svg\" />\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div>\n" +
    "\t\t<div style=\"text-align:center;\">\n" +
    "\t\t\t<img ng-src=\"{{user.photo}}\" style=\"vertical-align:top; width:120px; height:120px; border:2px solid #3d3d3d; border-bottom:none;margin-left: 1px;\" />\n" +
    "\t\t</div>\n" +
    "\t\t<img  src=\"images/svg/mouse_soffio.svg\" style=\"cursor:pointer;\" ng-click=\"performBlow()\"/>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"a\" translate=\"{{'CLICCA_SOFFIA'}}\"></div>\n" +
    "\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('partials/home.html',
    "<!-- <video class=\"video-stream\" ng-src={{videoSource}} autoplay  poster=\"images/Teca_view_up.jpg\" id=\"bgvid\" loop>\n" +
    "</video> -->\n" +
    "\n" +
    "<!-- test luca - 'rtmp://192.168.1.230:1935/live/myStream' -->\n" +
    "<!-- test wowza - 'rtmp://wowza6.top-ix.org:1935/todotest/streaming' -->\n" +
    "<div class=\"video-stream\">\n" +
    "\t<div id='playerCvfFpDaKBdWl'></div>\n" +
    "</div>\n" +
    "<script type='text/javascript'>\n" +
    "var w = $(window).width();\n" +
    "var h = $(window).height();\n" +
    "\tjwplayer('playerCvfFpDaKBdWl').setup({\n" +
    "\t\tfile: 'rtmp://wowza6.top-ix.org:1935/todotest/streaming',\n" +
    "\t\timage: '//www.longtailvideo.com/content/images/jw-player/lWMJeVvV-876.jpg',\n" +
    "\t\twidth: '100%',\n" +
    "\t\theight: '100%',\n" +
    "\t\t//aspectratio: '1:1',\n" +
    "\t\tstretching: \"exactfit\",\n" +
    "\t\tautostart: 'true',\n" +
    "\t});\n" +
    "\t// setTimeout(function(){\n" +
    "\t// \t$('#playerCvfFpDaKBdWl').height(h);\t\n" +
    "\t// }, 2000)\n" +
    "\n" +
    "</script>\n" +
    "\n" +
    "<div class=\"container\" id=\"c4home\" flex layout=\"column\" layout-align=\"center center\" ng-if=\"!logged\"\n" +
    "\tng-controller=\"HomeCtrl\">\n" +
    "\n" +
    "\t<div>\n" +
    "\t\t<h1 class=\"home-title\" translate=\"{{ 'TITLE_SOFFIO' }}\">A UN SOFFIO DALLA SCOPERTA</h1>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div style=\"margin-bottom:20px;\">\n" +
    "\t\t<button class=\"white\" translate=\"{{ 'LOGIN_JOIN' }}\" ng-click=\"mover.goDown()\"></button>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div>\n" +
    "\t\t<p class=\"white decima\" translate=\"{{ 'HOME_CLAIM' }}\"></p>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div id=\"theRec\" class=\"rec\" layout=\"row\" layout-align=\"center center\">\n" +
    "\t<svg width=\"40\" height=\"50\">\n" +
    "\t\t<circle cx=\"25\" cy=\"25\" r=\"6\" fill=\"#3c3c3c\">\n" +
    "\t\t\t<animate  fill=\"remove\" values=\"2; 6\" accumulate=\"none\" additive=\"replace\" restart=\"always\" calcMode=\"spline\" keyTimes=\"0; 1\" keySplines=\"0.165, 0.84, 0.44, 1\" repeatCount=\"indefinite\" attributeName=\"r\" begin=\"0s\" dur=\"1.6s\">\n" +
    "\t\t\t\t</animate>\n" +
    "\t\t</circle>\n" +
    "\t\t<circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"none\" stroke=\"#3c3c3c\" stroke-width=\"2\"></circle>\n" +
    "\t</svg>\n" +
    "\t<div class=\"decima\" translate=\"{{'LIVE_ON'}}\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"firstUser\" ng-show=\"firstUser\">\n" +
    "\t<div class=\"user\" layout=\"row\">\n" +
    "\t\t<div class=\"info\">\n" +
    "\t\t\t<div class=\"liv\" ng-show=\"firstUser.status == 'done' || firstUser.status == 'move'\">LIVE</div>\n" +
    "\t\t\t<div class=\"sof\" translate=\"{{'IL_SOFFIO_DI'}}\" \n" +
    "\t\t\tng-show=\"firstUser.status == 'done' || firstUser.status == 'move'\"></div>\n" +
    "\t\t\t<div class=\"sof\" translate=\"{{'PREPARA_SOFFIO_1'}}\" \n" +
    "\t\t\tng-hide=\"firstUser.status == 'done' || firstUser.status == 'move'\"></div>\n" +
    "\t\t\t<div class=\"sof\" translate=\"{{'PREPARA_SOFFIO_2'}}\" \n" +
    "\t\t\tng-hide=\"firstUser.status == 'done' || firstUser.status == 'move'\"></div>\n" +
    "\t\t\t<div class=\"usr\">{{firstUser.user.displayName}}</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"thumb\">\n" +
    "\t\t\t<img ng-src=\"{{firstUser.user.photo}}\">\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('partials/login.html',
    "<div class=\"container scrl\" id=\"stp0\" flex layout=\"column\" layout-align=\"start center\" \n" +
    "\tscroll-y\n" +
    "\tflex-content=preserve>\n" +
    "\t\n" +
    "\t<div style=\"width:570px; padding-top:15px;\" class=\"center\" ng-controller=\"LoginCtrl\">\n" +
    "\t\t\n" +
    "\t\t<div layout=\"row\" layout-align=\"center center\">\n" +
    "\t\t\t<div layout=\"column\">\n" +
    "\t\t\t\t<img src=\"images/svg/01_login_accedi.svg\" />\n" +
    "\t\t\t\t<div translate=\"{{'ACCEDI'}}\"></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div layout=\"column\">\n" +
    "\t\t\t\t<div translate=\"{{'ACCEDI_SOCIAL_TITLE'}}\"></div>\n" +
    "\t\t\t\t<div layout=\"row\">\n" +
    "\t\t\t\t\t<a ng-href=\"http://test.egizio2015.it/auth/facebook?redirect=http%3A%2F%2Fcompagnia.egizio2015.it%2Fa_un_soffio_dalla_scoperta%2F\">\n" +
    "\t\t\t\t\t\t<img src=\"images/svg/01_login_fb_btn.svg\" />\n" +
    "\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t<a ng-href=\"http://test.egizio2015.it/auth/twitter?redirect=http%3A%2F%2Fcompagnia.egizio2015.it%2Fa_un_soffio_dalla_scoperta%2F\">\n" +
    "\t\t\t\t\t\t<img src=\"images/svg/01_login_tw_btn.svg\" />\n" +
    "\t\t\t\t\t</a>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div layout=\"column\">\n" +
    "\t\t\t<img src=\"images/svg/01_login_steps_all.svg\" />\n" +
    "\t\t\t<div layout=\"row\">\n" +
    "\t\t\t\t<div flex translate=\"{{'SOFFIA'}}\"></div>\n" +
    "\t\t\t\t<div flex translate=\"{{'SCOPRI'}}\"></div>\n" +
    "\t\t\t\t<div flex translate=\"{{'CONDIVIDI'}}\"></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<p class=\"p1\" translate=\"{{ 'LOGIN_ISTRUCTION' }}\"></p>\n" +
    "\n" +
    "\t\t\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div ng-include=\"'partials/users.html'\" style=\"width:615px;\"></div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('partials/main_menu.html',
    "<div id=\"dvLoading\"></div>\n" +
    "<div id=\"rotate-device\" class=\"white\">\n" +
    "\t<div>\n" +
    "\t\t<img src=\"../imgs/element/rotate-device.png\">\n" +
    "\t\t<h3 translate=\"{{ 'ROTATE-DEVICE' }}\">per favore ruota il tuo dispositivo<br/>per una visualizzazione corretta</h3>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<div id=\"resize-browser\" class=\"white\">\n" +
    "\t<div>\n" +
    "\t\t<img src=\"../imgs/element/resize-browser.png\">\n" +
    "\t\t<h3 translate=\"{{ 'RESIZE-BROWSER' }}\">allarga la finestra del browser<br/>per visualizzare correttamente questo sito</h3>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<header>\n" +
    "\n" +
    "\t<a id=\"wrapper-logo\" ng-href=\"{{getL10NLink('../')}}\">\n" +
    "\t\t<img id=\"logo\" src=\"../imgs/element/compagnia-san-paolo-logo.png\" /><img id=\"logo-black\" src=\"../imgs/element/compagnia-san-paolo-logo-black.png\" />\n" +
    "\t</a>\n" +
    "\n" +
    "\t<div class=\"menu-container\" id=\"menu-vis\">\n" +
    "\t\t<div class=\"menu-wrapper\">\n" +
    "\t\t\t<a ng-href=\"{{getL10NLink('../la_strada_per_menfi_e_tebe/')}}\">\n" +
    "\t\t\t\t<div class=\"menu-element-wrapper menu-element-wrapper-top white menu-1 \">\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<h3 translate=\"{{ 'MENU-1' }}\" ng-class=\"eng('menu-e')\">La strada per menfi e tebe</h3>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</a>\n" +
    "\t\t\t<a ng-href=\"{{getL10NLink('../il_valore_della_riscoperta/')}}\">\n" +
    "\t\t\t\t<div class=\"menu-element-wrapper menu-element-wrapper-top white menu-2\">\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<h3 translate=\"{{ 'MENU-2' }}\" ng-class=\"eng('menu-e')\">Il valore della riscoperta</h3>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</a>\n" +
    "\t\t\t<a ng-href=\"{{getL10NLink('../la_spedizione_di_egizio_2015/')}}\">\n" +
    "\t\t\t\t <div class=\"menu-element-wrapper menu-element-wrapper-top white menu-3\">\n" +
    "\t\t\t\t\t <div>\n" +
    "\t\t\t\t\t\t <h3 translate=\"{{ 'MENU-3' }}\" ng-class=\"eng('menu-e')\">La spedizione di Egizio 2015</h3>\n" +
    "\t\t\t\t\t </div>\n" +
    "\t\t\t\t </div>\n" +
    "\t\t\t</a>\n" +
    "\t\t\t<a ng-href=\"{{getL10NLink('../a_un_soffio_dalla_scoperta/')}}\">\n" +
    "\t\t\t\t<div class=\"menu-element-wrapper menu-element-wrapper-top menu-4 menu-sel\">\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<h3 translate=\"{{ 'MENU-4' }}\" ng-class=\"eng('menu-e')\">A un soffio dalla scoperta</h3>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</a>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"menu-container\" id=\"menu-hid\">\n" +
    "\t\t<div class=\"menu-wrapper\">\n" +
    "\t\t\t<a ng-href=\"{{getL10NLink('../la_strada_per_menfi_e_tebe/')}}\">\n" +
    "\t\t\t\t<div class=\"menu-element-wrapper menu-element-wrapper-bot white menu-1\" >\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<p translate=\"{{ 'MENU-1-TEXT' }}\">Il Museo Egizio più importante d'Europa nasce a Torino, tra storia e avventure.</p>\n" +
    "\t\t\t\t\t\t<img class=\"img-back\" src=\"../imgs/menu/c1w.png\" />\n" +
    "\t\t\t\t\t\t<img class=\"img-over\" src=\"../imgs/menu/c1.png\" />\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</a>\n" +
    "\t\t\t<a ng-href=\"{{getL10NLink('../il_valore_della_riscoperta/')}}\">\n" +
    "\t\t\t\t<div class=\"menu-element-wrapper menu-element-wrapper-bot white menu-2\" >\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<p translate=\"{{ 'MENU-2-TEXT' }}\">Dietro le quinte: il raddoppio degli spazi espositivi per il Nuovo Museo.</p>\n" +
    "\t\t\t\t\t\t<img class=\"img-back\" src=\"../imgs/menu/c2w.png\" />\n" +
    "\t\t\t\t\t\t<img class=\"img-over\" src=\"../imgs/menu/c2.png\" />\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</a>\n" +
    "\t\t\t<a ng-href=\"{{getL10NLink('../la_spedizione_di_egizio_2015/')}}\">\n" +
    "\t\t\t\t<div class=\"menu-element-wrapper menu-element-wrapper-bot white menu-3\" >\t\t\t\t\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<p translate=\"{{ 'MENU-3-TEXT' }}\">Siamo in tour! Vieni a trovarci e scopri cosa si nasconde sotto la sabbia.</p>\n" +
    "\t\t\t\t\t\t<img class=\"img-back\" src=\"../imgs/menu/c3w.png\" />\n" +
    "\t\t\t\t\t\t<img class=\"img-over\" src=\"../imgs/menu/c3.png\" />\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</a>\n" +
    "\t\t\t<a ng-href=\"{{getL10NLink('../a_un_soffio_dalla_scoperta/')}}\">\n" +
    "\t\t\t\t<div class=\"menu-element-wrapper menu-element-wrapper-bot menu-4 menu-sel\">\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<p translate=\"{{ 'MENU-4-TEXT' }}\">Partecipa anche tu,<br/>ovunque nel mondo tu sia.<br/>Che cosa scoprirai oggi?</p>\n" +
    "\t\t\t\t\t\t<img class=\"img-back\" src=\"../imgs/menu/c4w.png\" />\n" +
    "\t\t\t\t\t\t<img class=\"img-over\" src=\"../imgs/menu/c4.png\" />\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</a>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<a ng-href=\"{{getL10NLink('../')}}\">\n" +
    "\t\t<img class=\"logo-elements\" id=\"logo-top\" src=\"../imgs/element/logo-1.png\">\n" +
    "\t\t<img class=\"logo-elements\" id=\"logo-bot\" src=\"../imgs/element/logo-4.png\" ng-if=\"lang=='it'\">\n" +
    "\t\t<img class=\"logo-elements\" id=\"logo-bot-2\" src=\"../imgs/element/logo-4-black.png\" ng-if=\"lang=='it'\">\n" +
    "\t\t<img class=\"logo-elements\" id=\"logo-bot\" src=\"../imgs/element/logo-4-en.png\" ng-if=\"lang=='en'\">\n" +
    "\t\t<img class=\"logo-elements\" id=\"logo-bot-2\" src=\"../imgs/element/logo-4-en-black.png\" ng-if=\"lang=='en'\">\n" +
    "\t</a>\n" +
    "\n" +
    "</header>\n" +
    "<div class=\"shadow top\"></div>\n" +
    "<div class=\"shadow bottom\"></div>"
  );


  $templateCache.put('partials/modal.html',
    "<div class=\"modal-container\" ng-controller=\"ModalCtrl\">\n" +
    "\n" +
    "\t<img class=\"modal-close\" src=\"images/svg/close.svg\" ng-click=\"closeModal()\" ng-if=\"modal.closeable\" />\n" +
    "\n" +
    "\t<div ng-if=\"modal.content=='new_reperto'\" ng-include=\"'partials/modals/reperto.html'\"></div>\n" +
    "\n" +
    "\t<div ng-if=\"modal.content=='prepare_video'\">\n" +
    "\t\t<h2 translate=\"{{'ECCO_IL_SOFFIO'}}\"></h2>\n" +
    "\t\t<div class=\"img-preview\">\n" +
    "\t\t\t<img src=\"images/frame-preview.jpg\" />\n" +
    "\t\t</div>\n" +
    "\t\t<p translate=\"{{'CONDIVITI_TEXT_BOTTOM'}}\"></p>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div ng-if=\"modal.content=='share_video'\">\n" +
    "\t\t<h2 class=\"pb1\" translate=\"{{'ECCO_IL_SOFFIO'}}\"></h2>\n" +
    "\t\t<div class=\"img-preview\">\n" +
    "\t\t\t<div class=\"share-btn\" flex layout=\"row\" layout-align=\"center center\" >\n" +
    "\t\t\t\t<a class=\"btn over m0\"  href=\"\" ng-href=\"{{getSharedUrl()}}\" target=\"_blank\">\n" +
    "\t\t\t\t\t<div translate=\"{{'CONDIVIDI_SOFFIO'}}\"></div>\n" +
    "\t\t\t\t</a>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<img src=\"images/frame-preview.jpg\" />\n" +
    "\t\t</div>\n" +
    "\t\t<p class=\"pt1\" translate=\"{{'CONDIVITI_TEXT_BOTTOM'}}\"></p>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div ng-if=\"modal.content=='share_blow'\">\n" +
    "\t\t<h2 translate=\"{{'HAI_REGISTRATO_SOFF'}}\"></h2>\n" +
    "\t\t<p class=\"pt1 pb1\" translate=\"{{'ORA_DILLO_AMICI'}}\"></p>\n" +
    "\t\t<a class=\"btn\"  href=\"\" ng-click=\"shareBlow()\">\n" +
    "\t\t\t<div translate=\"{{'CONDIVIDI_SOFFIO_OLNY'}}\"></div>\n" +
    "\t\t</a>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div ng-if=\"modal.content=='state_night'\">\n" +
    "\t\t<h2 translate=\"{{'ROBOT_RIPOSA'}}\"></h2>\n" +
    "\t\t<img src=\"images/svg/robot_riposa.svg\" />\n" +
    "\t\t<p class=\"big\">{{'TRA_QUANTO_APRE' | translate:last}}</p>\n" +
    "\t\t<p class=\"pt1\" translate=\"{{'TORNERA_TEXT1'}}\"></p>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div ng-if=\"modal.content=='state_maintenance'\">\n" +
    "\t\t<h2 translate=\"{{'ROBOT_MANUTENZIONE'}}\"></h2>\n" +
    "\t\t<img src=\"images/svg/robot_rotto.svg\" />\n" +
    "\t\t<p translate=\"{{'TORNERA_TEXT2'}}\"></p>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div ng-if=\"modal.content=='state_refill'\">\n" +
    "\t\t<h2 translate=\"{{'ROBOT_SCOPERTO'}}\"></h2>\n" +
    "\t\t<p translate=\"{{'TORNERA_TEXT3'}}\"></p>\n" +
    "\t\t<a href=\"/reperti/\">\n" +
    "\t\t\t<img src=\"images/svg/robot_refill.svg\" />\n" +
    "\t\t</a>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div ng-if=\"modal.content=='is_tablet'\">\n" +
    "\t\t<h2 translate=\"{{'TABLET_A_BIG_NO_NO'}}\"></h2>\n" +
    "\t\t<p translate=\"{{'TABLET_A_BIG_NO_NO_TXT'}}\"></p>\n" +
    "\t</div>\n" +
    "\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('partials/perform.html',
    ""
  );


  $templateCache.put('partials/queue.html',
    "<div class=\"container scrl\" id=\"stp1\" flex layout=\"column\" layout-align=\"start center\" \n" +
    "\tscroll-y\n" +
    "\tflex-content=preserve>\n" +
    "\n" +
    "\t<div style=\"width:570px; padding-top:15px;\" class=\"center\" ng-controller=\"QueueCtrl\">\n" +
    "\n" +
    "\t\t<img src=\"images/svg/dots_01.svg\" />\n" +
    "\n" +
    "\t\t<div class=\"a\">{{ 'STEP1_HEAD' | translate:user }}</div>\n" +
    "\n" +
    "\t\t<div class=\"fr1\" ng-if=\"!isMyTurn()\">\n" +
    "\t\t\t<div class=\"b\">\n" +
    "\t\t\t\t<span translate=\"{{'STEP1_NOTE_PRE'}}\"></span>\n" +
    "\t\t\t\t{{getNumber()}}\n" +
    "\t\t\t\t<span translate=\"{{'STEP1_NOTE_POST'}}\"></span>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"c\" >{{ timer | millSecondsToTimeString }}</div>\n" +
    "\t\t\t<div class=\"d\" translate=\"{{'STEP1_CODA'}}\"></div>\n" +
    "\n" +
    "\t\t\t<a class=\"btn\" href=\"\" ng-click=\"queue(true)\">\n" +
    "\t\t\t\t<div  translate=\"{{'STEP1_GO'}}\"></div>\n" +
    "\t\t\t</a>\n" +
    "\n" +
    "\t\t\t<!-- <div class=\"f\" translate=\"{{'STEP1_INFO'}}\"></div>\n" +
    "\t\t\n" +
    "\t\t\t<a class=\"btn\"  href=\"\" ng-click=\"queue(false)\">\n" +
    "\t\t\t\t<div translate=\"{{'STEP1_NO'}}\"></div>\n" +
    "\t\t\t</a> -->\n" +
    "\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"fr2\" ng-if=\"isMyTurn()\">\n" +
    "\n" +
    "\t\t\t<div class=\"itsme\" layout=\"row\" layout-align=\"center center\">\n" +
    "\t\t\t\t<div>\n" +
    "\t\t\t\t\t<img class=\"logout\" ng-click=\"logout()\" src=\"images/svg/logout.svg\" />\n" +
    "\t\t\t\t\t<img ng-src=\"{{user.photo}}\" />\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"g\" translate=\"{{'STEP1_TOCCA_A_TE'}}\"></div>\n" +
    "\n" +
    "\t\t\t<a class=\"btn\"  href=\"\" ng-click=\"queue(true)\">\n" +
    "\t\t\t\t<div translate=\"{{'STEP1_SONO_PRONTO'}}\"></div>\n" +
    "\t\t\t</a>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\n" +
    "\t<div ng-include=\"'partials/users.html'\" style=\"width:615px;\"></div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('partials/queueSidebar.html',
    "<div class=\"queue-container\" ng-if=\"logged\">\n" +
    "\n" +
    "\t<ul layout=\"column\" layout-align=\"end end\">\n" +
    "\t\t<li layout=\"row\" ng-repeat=\"user in queueUsers\">\n" +
    "\t\t\t<p>{{user.user.displayName}} <br />{{'WAIT' | translate}}</p>\n" +
    "\t\t\t<img ng-src=\"{{user.user.photo}}\" />\n" +
    "\t\t</li>\n" +
    "\t</ul>\n" +
    "\n" +
    "\t<div class=\"others\" ng-show=\"queueLength-queueLimit>0\">\n" +
    "\t\tAltri {{queueLength-queueLimit}} utenti in coda\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"itsme\" ng-show=\"appUser && !isYourTurn()\">\n" +
    "\t\t<img class=\"logout\" ng-click=\"logout()\" src=\"images/svg/logout.svg\" />\n" +
    "\t\t<img ng-src=\"{{appUser.user.photo}}\" />\n" +
    "\t\t<div ng-show=\"timer > 0\">{{ timer | millSecondsToTimeString}}</div>\n" +
    "\t\t<div ng-show=\"timer == 0\">{{'WAIT' | translate}}</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<!-- mock\n" +
    "<div class=\"queue-container\">\n" +
    "\n" +
    "\t<ul layout=\"column\" layout-align=\"end end\">\n" +
    "\t\t<li layout=\"row\" ng-repeat=\"user in queueUsers\">\n" +
    "\t\t\t<p>{{user.user.displayName}} <br />{{'WAIT' | translate}}</p>\n" +
    "\t\t\t<img ng-src=\"{{user.user.photo}}\" />\n" +
    "\t\t</li>\n" +
    "\t</ul>\n" +
    "\n" +
    "\t<div class=\"others\" ng-show=\"queueLength-queueLimit>0\">\n" +
    "\t\tAltri {{queueLength-queueLimit}} utenti in coda\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"itsme\">\n" +
    "\t\t<img class=\"logout\" ng-click=\"logout()\" src=\"images/svg/logout.svg\" />\n" +
    "\t\t<img ng-src=\"me.jpeg\" />\n" +
    "\t\t<div>dasdsa dsadsdas</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>\n" +
    "-->"
  );


  $templateCache.put('partials/selectIo.html',
    "<div class=\"container\" id=\"stp2\" flex layout=\"column\" layout-align=\"start center\" \n" +
    "\tscroll-y\n" +
    "\tflex-content=preserve>\n" +
    "\n" +
    "\t<div style=\"width:570px; padding-top:5px;\" class=\"center\" ng-controller=\"SelectIoCtrl\">\n" +
    "\t\n" +
    "\t\t<img src=\"images/svg/dots_02.svg\" />\n" +
    "\n" +
    "\t\t<div ng-if=\"!isMyTurn()\">\n" +
    "\t\t\t<div class=\"a\" translate=\"{{'MANCANO_ANCORA'}}\"></div>\n" +
    "\t\t\t<div class=\"b\" >{{ timer | millSecondsToTimeString }}</div>\n" +
    "\t\t\t<div class=\"c\" translate=\"{{'NEL_FRATTEMPO'}}\"></div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div ng-if=\"isMyTurn()\">\n" +
    "\t\t\t<div class=\"n\">{{ 'STEP1_HEAD' | translate:user }}</div>\n" +
    "\t\t\t<div style=\"margin-bottom:10px;\" class=\"a\" translate=\"{{'SCEGLI_TRA_QUESTE'}}\"></div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div layout=\"column\" layout-align=\"center center\">\n" +
    "\t<!-- \t\t<img src=\"images/svg/toolset.svg\" ng-click=\"input(true)\" />\n" +
    "\t -->\n" +
    "\t\t\t<div layout=\"row\" style=\"width:380px;\">\n" +
    "\t\t\t\t<div>\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<img  class=\"buttonScale\" src=\"images/svg/headset.svg\" ng-click=\"input(true)\"/>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"bold\"  flex translate=\"{{'HEADSET'}}\"></div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div>\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<img  class=\"buttonScale\" src=\"images/svg/auric.svg\" ng-click=\"input(true)\"/>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"bold\"  flex translate=\"{{'AURIC'}}\"></div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!-- <div>\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<img  class=\"buttonScale\" src=\"images/svg/mic.svg\" ng-click=\"input(true)\"/>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div flex translate=\"{{'MICR'}}\"></div>\n" +
    "\t\t\t\t</div> -->\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div style=\"font-size:11px; margin-bottom:10px; margin-top:10;\" class=\"d pt1\" translate=\"{{'BROWSER'}}\"></div>\n" +
    "\n" +
    "\t\t<div style=\"margin-bottom:10px; margin-top:10;\" class=\"d pt1\" translate=\"{{'SE_NON_VUOI'}}\"></div>\n" +
    "\n" +
    "\t\t<div>\n" +
    "\t\t\t<img  class=\"buttonScale\" src=\"images/svg/mouse.svg\" ng-click=\"input(false)\"/>\n" +
    "\t\t</div>\n" +
    "\t\t<div style=\"margin:0\" class=\"bold\" flex translate=\"{{'MOUSE'}}\"></div>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('partials/selectTarget_new.html',
    "<div class=\"container\" id=\"stp4\" ng-controller=\"SelectTargetCtrl\" >\n" +
    "\n" +
    "\n" +
    "\t<img src=\"images/svg/dots_03.svg\" />\n" +
    "\n" +
    "\t<div class=\"a bld\" translate=\"{{'SELEZ_AREA'}}\"></div>\n" +
    "\t<div class=\"b\" translate=\"{{'AREA_ESPLORATA'}}\"></div>\n" +
    "\n" +
    "\t<img src=\"images/Sand_texture-01.png\" style=\"opacity: 1;\n" +
    "transform: translate(0px, 0px);\n" +
    "position: relative;\n" +
    "width: 277px;\n" +
    "z-index: -1;\n" +
    "top: -4px;\n" +
    "right: -330px;\">\n" +
    "\n" +
    "\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "\t viewBox=\"0 0 467.9 297.4\" enable-background=\"new 0 0 467.9 297.4\" xml:space=\"preserve\" \n" +
    "\t style=\"width:470px;height:300px;position: relative;right: 140px;\">\n" +
    "\n" +
    "\t\t<g id=\"robot\">\n" +
    "\t\t\t<g>\n" +
    "\t\t\t\t<g>\n" +
    "\t\t\t\t\t<g opacity=\"8.000000e-02\">\n" +
    "\t\t\t\t\t\t<path fill=\"#3D3D3D\" d=\"M188.2,295.4h277.7V2H194.8c0,29.3-6.6,29.3-6.6,58.7s6.6,29.3,6.6,58.7c0,29.3-6.6,29.3-6.6,58.7\n" +
    "\t\t\t\t\t\t\tc0,29.3,6.6,29.3,6.6,58.7C194.8,266.1,188.2,266.1,188.2,295.4z\"/>\n" +
    "\t\t\t\t\t</g>\n" +
    "\n" +
    "\t\t\t\t\t<!-- rect -->\n" +
    "\t\t\t\t\t<g>\n" +
    "\n" +
    "\t\t\t\t\t\t<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2.0667\" stroke-miterlimit=\"10\" stroke-dasharray=\"3.333,3.333\" d=\"\n" +
    "\t\t\t\t\t\t\tM450.5,256.1c0,10.4-8.4,18.8-18.7,18.8H272.3c-10.4,0-18.7-8.4-18.7-18.8V41.2c0-10.4,8.4-18.8,18.7-18.8h159.4\n" +
    "\t\t\t\t\t\t\tc10.4,0,18.7,8.4,18.7,18.8V256.1z\"/>\n" +
    "\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t<polygon fill=\"none\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" points=\"172.4,2 172.4,295.4 465.9,295.4 \n" +
    "\t\t\t\t\t\t465.9,2 191.5,2 \t\t\t\"/>\n" +
    "\t\t\t\t\t<g>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"55.5\" y=\"108.2\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.4877\" stroke-miterlimit=\"10\" width=\"39.7\" height=\"6.6\"/>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"55.5\" y=\"191.7\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.4877\" stroke-miterlimit=\"10\" width=\"39.7\" height=\"6.6\"/>\n" +
    "\t\t\t\t\t\t<circle fill=\"none\" stroke=\"#3D3D3D\" stroke-width=\"1.6199\" stroke-miterlimit=\"10\" cx=\"76\" cy=\"152.7\" r=\"52.5\"/>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"116.2\" y=\"119.8\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6627\" stroke-miterlimit=\"10\" width=\"3.6\" height=\"67\"/>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"12.9\" y=\"111.5\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.4877\" stroke-miterlimit=\"10\" width=\"3.6\" height=\"83.7\"/>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"107.3\" y=\"117.7\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"21.4\" height=\"2.9\"/>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"107.3\" y=\"185.9\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"21.4\" height=\"2.9\"/>\n" +
    "\t\t\t\t\t\t<g>\n" +
    "\t\t\t\t\t\t\t<path fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.4877\" stroke-miterlimit=\"10\" d=\"M170.6,140.4l-1.9-4.6\n" +
    "\t\t\t\t\t\t\t\tc0.2-0.1,5.5-2.4,5.5-8.3c0-11.1,4.4-17.5,12-17.5c3.8,0,5.9,1.6,7.1,2.9c3.1,3.5,2.5,8.6,2.4,9.1l-4.9-0.6\n" +
    "\t\t\t\t\t\t\t\tc0.1-0.9,0.1-3.7-1.2-5.2c-0.7-0.8-1.8-1.2-3.4-1.2c-3.2,0-7,2.2-7,12.6C179.2,136.7,171,140.2,170.6,140.4z\"/>\n" +
    "\t\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t\t<rect x=\"5.1\" y=\"148.6\" fill=\"#3D3D3D\" width=\"119.6\" height=\"9.2\"/>\n" +
    "\t\t\t\t\t\t<rect x=\"5.1\" y=\"134.7\" fill=\"#3D3D3D\" width=\"57.1\" height=\"9.2\"/>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"191.5\" y=\"121.7\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6627\" stroke-miterlimit=\"10\" width=\"3.6\" height=\"18.9\"/>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"182.6\" y=\"119.6\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.5033\" stroke-miterlimit=\"10\" width=\"21.4\" height=\"4.1\"/>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"187.5\" y=\"128.7\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.5033\" stroke-miterlimit=\"10\" width=\"11.6\" height=\"6.5\"/>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"124.7\" y=\"141\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"104\" height=\"23.5\"/>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"228.7\" y=\"147.6\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"9.1\" height=\"10.2\"/>\n" +
    "\t\t\t\t\t\t<path fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" d=\"M25.7,130.1v46.2h74.7v-46.2H25.7z\n" +
    "\t\t\t\t\t\t\t M71.4,133.9h15.1c0.7,0,1.1,1.7,0.6,2.6l-7.6,14.2c-0.3,0.6-0.8,0.6-1.2,0l-7.6-14.2C70.3,135.6,70.6,133.9,71.4,133.9z\n" +
    "\t\t\t\t\t\t\t M39.6,133.9h15.1c0.7,0,1.1,1.7,0.6,2.6l-7.6,14.2c-0.3,0.6-0.8,0.6-1.2,0l-7.6-14.2C38.5,135.6,38.9,133.9,39.6,133.9z\n" +
    "\t\t\t\t\t\t\t M33,166.9c0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4h2.1c0.5,0,0.8,1.1,0.8,2.4V166.9z\n" +
    "\t\t\t\t\t\t\t M33,146.8c0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4h2.1c0.5,0,0.8,1.1,0.8,2.4V146.8z\n" +
    "\t\t\t\t\t\t\t M35.8,168.1v-28.5c0-1.4,0.9-2.1,1.4-1.1l7.6,14.2c0.3,0.6,0.3,1.6,0,2.2l-7.6,14.2C36.7,170.1,35.8,169.4,35.8,168.1z\n" +
    "\t\t\t\t\t\t\t M54.8,173.7H39.6c-0.7,0-1.1-1.7-0.6-2.6l7.6-14.2c0.3-0.6,0.8-0.6,1.2,0l7.6,14.2C55.9,172,55.5,173.7,54.8,173.7z\n" +
    "\t\t\t\t\t\t\t M58.6,168.1c0,1.4-0.9,2.1-1.4,1.1l-7.6-14.2c-0.3-0.6-0.3-1.6,0-2.2l7.6-14.2c0.5-1,1.4-0.3,1.4,1.1V168.1z M65.1,166.9\n" +
    "\t\t\t\t\t\t\tc0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4h2.1c0.5,0,0.8,1.1,0.8,2.4V166.9z M65.1,146.8\n" +
    "\t\t\t\t\t\t\tc0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4h2.1c0.5,0,0.8,1.1,0.8,2.4V146.8z M67.5,168.1\n" +
    "\t\t\t\t\t\t\tv-28.5c0-1.4,0.9-2.1,1.4-1.1l7.6,14.2c0.3,0.6,0.3,1.6,0,2.2l-7.6,14.2C68.4,170.1,67.5,169.4,67.5,168.1z M86.5,173.7H71.4\n" +
    "\t\t\t\t\t\t\tc-0.7,0-1.1-1.7-0.6-2.6l7.6-14.2c0.3-0.6,0.8-0.6,1.2,0l7.6,14.2C87.6,172,87.2,173.7,86.5,173.7z M90.3,168.1\n" +
    "\t\t\t\t\t\t\tc0,1.4-0.9,2.1-1.4,1.1l-7.6-14.2c-0.3-0.6-0.3-1.6,0-2.2l7.6-14.2c0.5-1,1.4-0.3,1.4,1.1V168.1z M96.8,166.9\n" +
    "\t\t\t\t\t\t\tc0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4H96c0.5,0,0.8,1.1,0.8,2.4V166.9z M96.8,146.8\n" +
    "\t\t\t\t\t\t\tc0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4H96c0.5,0,0.8,1.1,0.8,2.4V146.8z\"/>\n" +
    "\t\t\t\t\t\t<path fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" d=\"M28.2,130.1v46.2h74.7v-46.2H28.2z\n" +
    "\t\t\t\t\t\t\t M73.8,133.9H89c0.7,0,1.1,1.7,0.6,2.6L82,150.8c-0.3,0.6-0.8,0.6-1.2,0l-7.6-14.2C72.7,135.6,73.1,133.9,73.8,133.9z\n" +
    "\t\t\t\t\t\t\t M42.1,133.9h15.1c0.7,0,1.1,1.7,0.6,2.6l-7.6,14.2c-0.3,0.6-0.8,0.6-1.2,0l-7.6-14.2C41,135.6,41.4,133.9,42.1,133.9z\n" +
    "\t\t\t\t\t\t\t M35.5,166.9c0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4h2.1c0.5,0,0.8,1.1,0.8,2.4V166.9z\n" +
    "\t\t\t\t\t\t\t M35.5,146.8c0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4h2.1c0.5,0,0.8,1.1,0.8,2.4V146.8z\n" +
    "\t\t\t\t\t\t\t M38.3,168.1v-28.5c0-1.4,0.9-2.1,1.4-1.1l7.6,14.2c0.3,0.6,0.3,1.6,0,2.2l-7.6,14.2C39.2,170.1,38.3,169.4,38.3,168.1z\n" +
    "\t\t\t\t\t\t\t M57.2,173.7H42.1c-0.7,0-1.1-1.7-0.6-2.6l7.6-14.2c0.3-0.6,0.8-0.6,1.2,0l7.6,14.2C58.3,172,58,173.7,57.2,173.7z M61.1,168.1\n" +
    "\t\t\t\t\t\t\tc0,1.4-0.9,2.1-1.4,1.1l-7.6-14.2c-0.3-0.6-0.3-1.6,0-2.2l7.6-14.2c0.5-1,1.4-0.3,1.4,1.1V168.1z M67.6,166.9\n" +
    "\t\t\t\t\t\t\tc0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4h2.1c0.5,0,0.8,1.1,0.8,2.4V166.9z M67.6,146.8\n" +
    "\t\t\t\t\t\t\tc0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4h2.1c0.5,0,0.8,1.1,0.8,2.4V146.8z M70,168.1\n" +
    "\t\t\t\t\t\t\tv-28.5c0-1.4,0.9-2.1,1.4-1.1l7.6,14.2c0.3,0.6,0.3,1.6,0,2.2l-7.6,14.2C70.9,170.1,70,169.4,70,168.1z M89,173.7H73.8\n" +
    "\t\t\t\t\t\t\tc-0.7,0-1.1-1.7-0.6-2.6l7.6-14.2c0.3-0.6,0.8-0.6,1.2,0l7.6,14.2C90.1,172,89.7,173.7,89,173.7z M92.8,168.1\n" +
    "\t\t\t\t\t\t\tc0,1.4-0.9,2.1-1.4,1.1l-7.6-14.2c-0.3-0.6-0.3-1.6,0-2.2l7.6-14.2c0.5-1,1.4-0.3,1.4,1.1V168.1z M99.3,166.9\n" +
    "\t\t\t\t\t\t\tc0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4h2.1c0.5,0,0.8,1.1,0.8,2.4V166.9z M99.3,146.8\n" +
    "\t\t\t\t\t\t\tc0,1.3-0.4,2.4-0.8,2.4h-2.1c-0.5,0-0.8-1.1-0.8-2.4v-6.3c0-1.3,0.4-2.4,0.8-2.4h2.1c0.5,0,0.8,1.1,0.8,2.4V146.8z\"/>\n" +
    "\t\t\t\t\t\t<g>\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<rect x=\"110.6\" y=\"135.2\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"118.1\" height=\"5.8\"/>\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<line fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"0.9246\" stroke-miterlimit=\"10\" x1=\"110.6\" y1=\"138.1\" x2=\"228.7\" y2=\"138.1\"/>\n" +
    "\t\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t\t<g>\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<rect x=\"0.8\" y=\"124.3\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"127.8\" height=\"5.8\"/>\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<line fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"0.9246\" stroke-miterlimit=\"10\" x1=\"0.8\" y1=\"127.2\" x2=\"128.7\" y2=\"127.2\"/>\n" +
    "\t\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t\t<g>\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<rect x=\"0.8\" y=\"176.3\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"127.8\" height=\"5.8\"/>\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<line fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"0.9246\" stroke-miterlimit=\"10\" x1=\"0.8\" y1=\"179.2\" x2=\"128.7\" y2=\"179.2\"/>\n" +
    "\t\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t\t<g>\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<rect x=\"110.6\" y=\"164.5\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"118.1\" height=\"5.8\"/>\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<line fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"0.9246\" stroke-miterlimit=\"10\" x1=\"110.6\" y1=\"167.4\" x2=\"228.7\" y2=\"167.4\"/>\n" +
    "\t\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<rect x=\"205.3\" y=\"127.5\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"14.7\" height=\"50.5\"/>\n" +
    "\t\t\t\t\t\t<g>\n" +
    "\t\t\t\t\t\t\t<g>\n" +
    "\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<rect x=\"0.8\" y=\"114.8\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"94.4\" height=\"5.8\"/>\n" +
    "\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<line fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"0.9246\" stroke-miterlimit=\"10\" x1=\"0.8\" y1=\"117.7\" x2=\"95.2\" y2=\"117.7\"/>\n" +
    "\t\t\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<line fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" x1=\"29.1\" y1=\"114.8\" x2=\"29.1\" y2=\"120.6\"/>\n" +
    "\t\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t\t<g>\n" +
    "\t\t\t\t\t\t\t<g>\n" +
    "\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<rect x=\"0.8\" y=\"185.9\" fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" width=\"94.4\" height=\"5.8\"/>\n" +
    "\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<line fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"0.9246\" stroke-miterlimit=\"10\" x1=\"0.8\" y1=\"188.8\" x2=\"95.2\" y2=\"188.8\"/>\n" +
    "\t\t\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<line fill=\"#E9DED4\" stroke=\"#3D3D3D\" stroke-width=\"1.6554\" stroke-miterlimit=\"10\" x1=\"29.1\" y1=\"191.7\" x2=\"29.1\" y2=\"185.9\"/>\n" +
    "\t\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t</g>\n" +
    "\t\t\t\t\t<g touchable id=\"relic_area\">\n" +
    "\t\t\t\t\t\t<rect fill=\"#ffffff\" width=\"200\" height=\"255\" x=\"252\" y=\"21\" rx=\"20\" ry=\"20\" style=\"opacity:0;cursor:pointer;\"></rect>\n" +
    "\t\t\t\t\t</g>\n" +
    "\t\t\t\t</g>\n" +
    "\t\t\t\t<polyline fill=\"none\" stroke=\"#3D3D3D\" stroke-width=\"4\" stroke-miterlimit=\"10\" points=\"0,2 465.9,2 465.9,295.4 0,295.4 \t\t\"/>\n" +
    "\t\t\t</g>\n" +
    "\t\t</g>\n" +
    "\t</svg>\n" +
    "\n" +
    "\t\t\n" +
    "</div>"
  );


  $templateCache.put('partials/users.html',
    "<div id=\"user-container\" style=\"clear:both\">\n" +
    "\t\n" +
    "\t<!-- {{ 'ULTIMI_SOFFI_A' | translate}}<br /> -->\n" +
    "\t<h2 ng-if=\"stats\" class=\"white\" style=\"text-align:center;\" >\n" +
    "\t{{ 'ULTIMI_SOFFI_B' | translate:stats}}</h2>\n" +
    "\n" +
    "\t<div class=\"wrapper-user\"\n" +
    "\t\tng-repeat=\"user in latestUsers\">\n" +
    "\t\t<span>\n" +
    "\t\t\t<img width=\"48\" height=\"48\" ng-src=\"{{user.photo}}\" />\n" +
    "\t\t</span>\n" +
    "\t\t<div class=\"user-info\">\n" +
    "\t\t\t<b>{{user.displayName}}</b><br/>\n" +
    "\t\t\t{{user.username}}</br>\n" +
    "\t\t\t{{user.date}}\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t\n" +
    "\t\n" +
    "\t<div style=\"clear:both\"></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/wait.html',
    "<div class=\"container\" id=\"stp3\" style=\"padding-top:5px;\">\n" +
    "\t\n" +
    "\t<img src=\"images/svg/dots_03.svg\" />\n" +
    "\n" +
    "\t<div class=\"a\" translate=\"{{'TRA_SOLI'}}\"></div>\n" +
    "\t<!-- <div class=\"b\">{{ 'TIME' | translate:time }}</div> -->\n" +
    "\t<div class=\"b bold\">{{ timer | millSecondsToTimeString }}</div>\n" +
    "\t<div class=\"c\" translate=\"{{'TUO_TURNO'}}\"></div>\n" +
    "\n" +
    "\t<div layout=\"row\" layout-align=\"center center\">\n" +
    "\t\t<div class=\"d\" translate=\"{{'POI_AVRAI'}}\"></div>\n" +
    "\t\t<img class=\"e\" src=\"images/svg/2min.svg\" />\n" +
    "\t\t<div class=\"f\" translate=\"{{'MINUTI_PER_SELEZ'}}\"></div>\n" +
    "\t</div>\n" +
    "\t\n" +
    "\n" +
    "</div>"
  );

}]);
