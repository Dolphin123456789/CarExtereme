$(document).ready(function () {
    /*Result işlevsiz hale getirildi*/
    var canvas = $('#canvas');
    var canvas2 = $('#canvas2');
    var oyuncu = $('#oyuncu');
    var canvasSpeed = -10;
    var counter = 10;
    var score = 0;
    var ShadowShifterT = -225;
	var ShadowShifterL = -20;
    var GameOverCheckDegisken = 1;
    var puan = $('#puan');
    var engel = $('#engel');
    var Code = $("#Code");
    /*Hediye Kodu - Starto*/
     localStorage.setItem("hediye", "ahmet");
    $('#CodeButton').click(function(){
    if( Code.val() == localStorage.getItem("hediye"))
    {
        $('#arabaSpecial').fadeIn(500).css({
            'display':'inline'
        });
    }  
    });    
    /*Hediye Kodu - Ovarida*/
    

    
    /* HARİTA SEÇ*/
$('#NightinGale').click(function(){

$('#canvas').css({ 'background':'url(http://i.hizliresim.com/q9a1Jd.jpg)'});
$('#canvas2').css({ 'background':'url(http://i.hizliresim.com/nYqByB.jpg)'});
   $('#karart').css({
'display':'inline'
});
        $('#karartek').css({
'display':'inline'
});
	
});
$('#SandPudding').click(function(){

$('#canvas').css({'background':'url(http://i.hizliresim.com/vYB1Gv.jpg)'});
$('#canvas2').css({'background':'url(http://i.hizliresim.com/vYB1Gv.jpg)'});
    $('#karart').css({
'display':'none'
});
        $('#karartek').css({
'display':'none'
});
});
    $('#VarsayilanArkaplan').click(function(){

$('#canvas').css({'background':'url(http://i.hizliresim.com/q9a1Jd.jpg)'});
$('#canvas2').css({'background':'url(http://i.hizliresim.com/q9a1Jd.jpg)'});
    $('#karart').css({
'display':'none'
});
        
    $('#karartek').css({
'display':'none'
});
});
   $('#SnowWhite').click(function(){

$('#canvas').css({'background':'url(http://i.hizliresim.com/nY897R.jpg)  '});
$('#canvas2').css({'background':'url(http://i.hizliresim.com/nY897R.jpg)  '});
    $('#karart').css({
'display':'none'
});
     blizzard.css({
'display':'inline'
});       
    $('#karartek').css({
'display':'none'
});   
});

   
    /* HARİTA SEÇ*/
    /*Tekerlek DONDURMA -Starto*/
    var tekerlekDegree = 15;
    var tekerlekSet;
    var tekerlekAnimate = function () {
        tekerlekDegree = tekerlekDegree + 2;
        if (tekerlekDegree > 360) {
            tekerlekDegree = 0;
        }
        tekerlekSet = setTimeout(function () {
            $('#tekerlek1').css({
                '-webkit-transform': 'rotate(' + tekerlekDegree + 'deg)',
                    '-moz-transform': 'rotate(' + tekerlekDegree + 'deg)',
                    '-ms-transform': 'rotate(' + tekerlekDegree + 'deg)',
                    '-o-transform': 'rotate(' + tekerlekDegree + 'deg)',
                    'transform': 'rotate(' + tekerlekDegree + 'deg)',
                    'zoom': 1
            });
            $('#tekerlek2').css({
                '-webkit-transform': 'rotate(' + tekerlekDegree + 'deg)',
                    '-moz-transform': 'rotate(' + tekerlekDegree + 'deg)',
                    '-ms-transform': 'rotate(' + tekerlekDegree + 'deg)',
                    '-o-transform': 'rotate(' + tekerlekDegree + 'deg)',
                    'transform': 'rotate(' + tekerlekDegree + 'deg)',
                    'zoom': 1
            });
            tekerlekSet = setTimeout(function () {
                tekerlekAnimate();
            });
        });
    }
    /*Tekerlek DONDURMA - Ovarida*/
    /*PUAN SETTIMEOUT speedBASE=2 -Starto*/
    var PuanSpeed = 5;
    var PuanSet;
    var PuanAnimate = function () {
        PuanSet = setTimeout(function () {
            puan.stop().animate({
                left: '-=' + PuanSpeed + 'px'
            }, 1);
            /*result text control $('#result').text($('#oyuncu').position().left+$('#oyuncu').width()+"  "+$('#oyuncu').position().top  +"  "+$('#puan').position().left+"    "+"   "+$('#oyuncu').position().top+"      "+PuanSpeed +"       "+canvasSpeed);*/


            /*EGER PUAN YAKALARSA*/
            if (oyuncu.position().left + oyuncu.width() >= puan.position().left && oyuncu.position().top <= puan.position().top + puan.height() && oyuncu.position().top + oyuncu.height() >= puan.position().top && puan.position().left + puan.width() > oyuncu.position().left) {
                /* Arkaplan hızlandır*/
                CanvasPositionSet = setTimeout(function () {
                    CanvasPosition();
                });
                /* Puan hızlandır*/
                PuanSet = setTimeout(function () {
                    PuanAnimate();
                });
                /* Puan hızlandır*/
                EngelSet = setTimeout(function () {
                    EngelAnimate();
                });
                /*tekerlek Döndüme*/
                tekerlekSet = setTimeout(function () {
                    tekerlekAnimate();
                });
                counter++;
                score++;
                $('#result').text("Score: "+score);
                if (fuel < 91) {
                    fuel = fuel + 10; /*puan aldığında benzini 10 artır*/
                    fuelBar = fuelBar - 10; /*Gösterge çubuğunu aşağı indir*/
                } else {
                    fuel = 100;
                    fuelBar = 0;
                }
                PuanSpeed = PuanSpeed + (1);
                EngelSpeed = EngelSpeed + (1.5);
                puan.stop().css({
                    'position': 'absolute',
                        'left': '1000' + 'px'
                });
                var puanY = (Math.random() * ($('#canvas').height() - puan.height())).toFixed();
                puan.css({
                    'position': 'absolute',
                        'top': puanY + 'px'
                });
            }
            /*EGER PUAN KACIRIRSA*/
            if ($('#puan').position().left < -25) {
                var puanY = (Math.random() * ($('#canvas').height() - puan.height())).toFixed();

                puan.css({
                    'position': 'absolute',
                        'left': '1000' + 'px'
                });
                puan.css({
                    'position': 'absolute',
                        'top': puanY + 'px'
                });
            }

            PuanSet = setTimeout(function () {
                PuanAnimate();
            }, 1);
        }, 1);
    }
    /*PUAN SETTIMEOUT speedBASE=2 -Ovarida*/
    /*-----------------------------------------------------------------------------------------------------*/

    /*ENGEL SETTIMEOUT speedBASE=2 -Starto*/
    var EngelSpeed = 5;
    var EngelSet;
    var EngelAnimate = function () {
        EngelSet = setTimeout(function () {
            engel.stop().animate({
                left: '-=' + EngelSpeed + 'px'
            }, 1);

            /*EGER ENGELE TAKILIRSA YAKALARSA*/
            if (oyuncu.position().left + oyuncu.width() >= engel.position().left-10 && oyuncu.position().top <= engel.position().top-10 + engel.height() && oyuncu.position().top + oyuncu.height() >= engel.position().top-10 && engel.position().left-10 + engel.width() > oyuncu.position().left) {
                GameOver().stop();
            }
            /*EGER ENGEL ATLATIRSA*/
            if (engel.position().left < -50) {
                var engelY = (Math.random() * ($('#canvas').height() - engel.height())).toFixed();
                engel.css({
                    'position': 'absolute',
                        'left': '1000' + 'px'
                });
                engel.css({
                    'position': 'absolute',
                        'top': engelY + 'px'
                });
            }
            EngelSet = setTimeout(function () {
                EngelAnimate();
            }, 1);
        }, 1);
    }
    /*ENGEL SETTIMEOUT speedBASE=2 -Ovarida*/
    /*------------------------------------------------------------------------------------------*/
    /* BENZIN / FUEL  settime*/
    var fuel = 100; /*Benzin*/
    var fuelBar = 0; /*Benzin gösterge*/
    var FuelSet;
    var FuelCountDown = function () {
        FuelSet = setTimeout(function () {
            fuel--;
            fuelBar++;
            $('#result2').text(fuel);
            if (fuel == 0) {
                GameOver().stop();
            }
            $('#fuel li').css({
                'top': fuelBar + 'px'
            });
            FuelSet = setTimeout(function () {
                FuelCountDown();
            }, 100);
        }, 100);
    }
    $('#result2').text(fuel);
    /* BENZIN / FUEL settime*/
    /*GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER*/
    var GameOver;
    var GameOverSet;
    GameOver = function () {
        GameOverSet = setTimeout(function () {
                var canvasSpeed = -10;
    var counter = 10;
    var score = 0;
    var ShadowShifterT = -225;
            clearTimeout(CanvasPositionSet); /*Arkaplan hareketi kes*/
            clearTimeout(PuanSet); /*Puan hareketi kes*/
            clearTimeout(FuelSet); /*Benzin Gerisayım hareketi kes*/
            clearTimeout(EngelSet); /*Engel hareketi kes*/
            clearTimeout(tekerlekSet); /*Tekerlek hareketi kes*/
			 clearTimeout(blizzardSet); /*Tipi hareketi kes*/
            engel.css({
                'left': '1000px'
            });
            puan.css({
                'left': '1000px'
            });
            if (GameOverCheckDegisken < 3) {
                $("#TheEnd").css({
                    'display': 'inline'
                });
                $('#score').text("Skorunuz:  " + score);
            }
            $('#savePlayer').click(function () {
                localStorage.setItem("player", ($("#nickName").val())); /*Oyuncu ismini kaydet*/
                localStorage.setItem("score", score); /*skoru  kaydet*/
                $('#kaydedildi').text("Skorunuz Kaydedildi!");
            });
            $('#Menu').click(function () {
                GameOverCheckDegisken = 3;
                canvas2.css({
                    'display': 'none'
                });
                canvas.css({
                    'display': 'none'
                });
                $('#TheEnd').css({
                    'display': 'none'
                });
                $('#secim').css({
                    'display': 'inline'
                });
                fuel = 100; /*Benzini fulle*/
                fuelBar = 0; /*Gösterge pozisyon top 0'la*/
                PuanSpeed = 5;
                EngelSpeed = 5;
                $('#kaydedildi').text("Lütfen Kaydedin");
            });
            if (GameOverCheckDegisken < 3) {
                GameOverSet = setTimeout(function () {
                    GameOver();
                });
            }
        });
    }
    /* GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER*/
	
    /*Blizzard*/
           var blizzard=$('#blizzard');
    var blizzardSpeed=0;  
    var blizzardSet;
    var blizzardAnimate = function(){
        blizzardSet=setTimeout(function(){
        blizzardSpeed=blizzardSpeed-10;    
        blizzard.css({
            'background-position': blizzardSpeed+'px'+' 0px'
        });
        blizzardSet = setTimeout(function () {
              blizzardAnimate();
            });
    });               
        }
    /*Blizzard*/
	/*Araba Secim Slider*/
    var sliderPos;
    var sliderAnimate=0;    
          $("#sliderPo").hover(function() {
          $("#sliderPo").draggable({
              containment: $('#sliderContainer'),
              drag: function(){
                  if($("#sliderPo").position().left++)
                  {
                      sliderAnimate--;
                  }
                  if($("#sliderPo").position().left--)
                  {
                      sliderAnimate++;
                  }
                  sliderPos= $("#sliderPo").position().left;
              $('#result').text(sliderPos);
                  $('#Arabalar').css({
                      left:(-1)*sliderPos+'px'
                  });
              }
          });
          });
           /*Araba Secim Slider*/
    /*  Background's gonna flow through -Starto */
    var CanvasPositionSet;
    var CanvasPosition = function () {
        CanvasPositionSet = setTimeout(function () {
            canvasSpeed = canvasSpeed - (2);
            if (canvasSpeed == (-1000)) {
                canvasSpeed = -10;
            }
            canvas2.css({
                'background-position': canvasSpeed + "px" + " 0px"
            }, 10);
            canvas.css({
                'background-position': canvasSpeed + "px" + " -150px"
            }, 10);
            CanvasPositionSet = setTimeout(function () {
                CanvasPosition();
            }, 1);
        });
    }
    $('#b1').click(function () {
        counter++;
        CanvasPositionSet = setTimeout(function () {
            CanvasPosition();
        }, 1);
    });
    /*  Background's gonna flow through -Ovarida */
    $('#araba1').click(function () {
        $('#oyuncu').css({
            'background': 'url(http://i.hizliresim.com/d4VdXp.png)',
        });
        $('#araba1').css({
            'border': '2px solid black'
        });
        $('#araba2').css({
            'border': '2px solid white'
        });
        $('#araba3').css({
            'border': '2px solid white'
        });
    });
    $('#araba2').click(function () {
        $('#oyuncu').css({
            'background': 'url(http://i.hizliresim.com/bQoXym.png)'
        });
        $('#araba2').css({
            'border': '2px solid black'
        });
        $('#araba1').css({
            'border': '2px solid white'
        });
        $('#araba3').css({
            'border': '2px solid white'
        });
    });
    $('#araba3').click(function () {
        $('#oyuncu').css({
            'background': 'url(http://i.hizliresim.com/X2z1d5.png)'
        });
        $('#araba3').css({
            'border': '2px solid black'
        });
        $('#araba2').css({
            'border': '2px solid white'
        });
        $('#araba1').css({
            'border': '2px solid white'
        });
    });
       $('#arabaSpecial').click(function () {
        $('#oyuncu').css({
            'background': 'url(http://i.hizliresim.com/onMWNq.png)'
        });
        $('#araba3').css({
            'border': '2px solid white'
        });
        $('#araba2').css({
            'border': '2px solid white'
        });
        $('#araba1').css({
            'border': '2px solid white'
        });
                   $('#arabaSpecial').css({
            'border': '2px solid black'
        });
           $('.tekerlek1').css({'position': 'absolute',
            'top': '45px',
            'left': '25px'});
            $('.tekerlek2').css({'position': 'absolute',
            'top': '43px',
            'left': '123px'});
       });
    $('#b1').click(
    /*PUAN YAKALAMA --- PUANYAKALAMA*/
    function Game() {
        /* Puan hızlandır*/
        PuanSet = setTimeout(function () {
            PuanAnimate();
        }, 1);
        /* Engel/ENEMY hızlandır*/
        EngelSet = setTimeout(function () {
            EngelAnimate();
        }, 1);
        /*Fuel gerisayım*/
        FuelSet = setTimeout(function () {
            FuelCountDown();
        }, 1);
        /*tekerlek Döndüme*/
        tekerlekSet = setTimeout(function () {
            tekerlekAnimate();
        });
		blizzardSet = setTimeout(function () {
                blizzardAnimate();
            });
        GameOverCheckDegisken = 1;
        canvas2.css({
            'display': 'inline'
        });
        canvas.css({
            'display': 'inline'
        });
        $('#secim').css({
            'display': 'none'
        });
		    });
        /* YUKARI-ASAGİ OYNATMA---start */
        $('html').keydown(function (e) {
       /*Oyuncu Aşağı Git*/	      if ((e.keyCode || e.which) == 40) {
                e.preventDefault();
                ShadowShifterT = ShadowShifterT + 20;
                $('#oyuncu').css({
                    top: '+=20px'
                });
                /*top 350 altı engelleme deneme// "50"=oyuncu width//300=oyuncu. top*/
                if (oyuncu.position().top + oyuncu.height() > canvas.height() - 25) {
                    oyuncu.css({
                        top: "275px"
                    }, 10);
                }
				if(ShadowShifterT>55){
                    ShadowShifterT=55;}
            }
        /*Oyuncu yukarı Git*/	     if ((e.keyCode || e.which) == 38) {
                e.preventDefault();
                ShadowShifterT = ShadowShifterT - 20;
                $('#oyuncu').css({
                    top: '-=20px'
                });
                /*top 0 üzeir engelleme deneme*/
                if ($('#oyuncu').position().top < 4) {
                    $('#oyuncu').css({
                        top: "0px"
                    }, 1);
                }    
					if(ShadowShifterT<-225){
                      ShadowShifterT=-225;}				
            }
		/*Oyuncu Sol Git*/	 	  if ((e.keyCode || e.which) == 37) {
                e.preventDefault();
                ShadowShifterL = ShadowShifterL - 30;
                $('#oyuncu').css({
                    left: '-=30px'
                }, 1);
                /*top 0 üzeir engelleme deneme*/
                if ($('#oyuncu').position().left < 0) {
                    $('#oyuncu').css({
                        left: "0px"
                    }, 1);
                }        
				if(ShadowShifterL<-20){
                      ShadowShifterL=-20;}
            }
		/*Oyuncu Sağ Git*/	  if ((e.keyCode || e.which) == 39) {
                e.preventDefault();
                ShadowShifterL = ShadowShifterL + 100;
                $('#oyuncu').css({
                    left: '+=100px'
                }, 1);
                /*top 0 üzeir engelleme deneme*/
                if ($('#oyuncu').position().left > 230) {
                    $('#oyuncu').css({
                        left: "230px"
                    }, 1);
					 ShadowShifterL=180;
                }
            }
		/*Oyuncu Border ekle*/	 		if ((e.keyCode || e.which) == 70) {
                e.preventDefault();
				$('#oyuncu').toggleClass('oyuncuBorder');
				}
		/*Oyuncu 0-0'a Gönder*/	 		if ((e.keyCode || e.which) == 71) {
                e.preventDefault();
				$('#oyuncu').css({
				top:'0px',
				left:'0px',
				});
				}
				$('#karart').delay(100).css({
				'-webkit-box-shadow': 'inset '+ShadowShifterL+'px '  + ShadowShifterT + 'px ' + '21px 232px rgba(0,0,0,1)',
				'-moz-box-shadow': 'inset '+ShadowShifterL+'px '  + ShadowShifterT + 'px ' + '21px 232px rgba(0,0,0,1)',
				'box-shadow': 'inset '+ShadowShifterL+'px '  + ShadowShifterT + 'px ' + '21px 232px rgba(0,0,0,1)'
        });
        });





});