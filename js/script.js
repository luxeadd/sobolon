$(function() {

  //ドロワーメニュー===========================
  
  //ハンバーガーメニュー------------------
  var grayDisplay = $('#gray-display');
  grayDisplay.hide();
  //展開時画面暗くする設定
  //＃w:100% h:100% fixed t:0 lf:0 bg:gray 0.8
  
    
  //ハンバーガーメニュークリックでイベント作動
  //ハンバーガーメニューにopenクラスがついていれば外す
  // →×からハンバーガーにもどる
  //ドロワーメニュー閉じる 画面暗い解除
  $('.hamburger-menu').click( function() {
    if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.header-drawer').slideToggle();
  grayDisplay.hide();
  
  //ハンバーガーメニューにopenクラスがついていなければ追加
  // →ハンバーガーから×に変形
  //ドロワーメニュー開く 画面暗くする展開
   }else{
    $('.header-drawer').slideToggle();
    grayDisplay.show();
    $(this).addClass('open');
   }
  });
  
  //グレイ部分のクリックで全て閉じる
  grayDisplay.click(function() {
    $(this).next().fadeOut(200,function() {
    grayDisplay.hide();
    $('.header-drawer').slideUp();
    $('.hamburger-menu').removeClass('open');
   });
  });
  
  //ドロワーメニュークリックで全て閉じる
  //×をハンバーガーに戻す
  $('.header-drawer li').click(function() {
    grayDisplay.hide();
    $('.header-drawer').hide();
    $('.hamburger-menu').removeClass('open');
   });
  
  
  //ハンバーガーメニュー2------------------------------------------
  $(".drawer-icon").on('click', function(e) {
    e.preventDefault();
    $(".drawer-icon" ).toggleClass("is-active");
    $(".drawer-content" ).toggleClass("is-active");
    $(".drawer-background" ).toggleClass("is-active");
  
    return  false;
   })
  
  $(".drawer-background").on('click', function(e) {
    e.preventDefault();
    $(".drawer-icon" ).toggleClass("is-active");
    $(".drawer-content" ).toggleClass("is-active");
    $(".drawer-background" ).toggleClass("is-active");
  
   return  false;
  })
  
  $(".drawer-content__item a").on('click', function( ) {
    $(".drawer-icon" ).toggleClass("is-active");
    $(".drawer-content" ).toggleClass("is-active");
    $(".drawer-background" ).toggleClass("is-active");
  
  return  false;
  })
  
  //その他ドロワー---------------------------
  $('.qr-box__q').click( function() {
   $(this).next().slideToggle();
   $(this).children(".qr-box__icon").toggleClass("is-open");
  });
  
  
  //============================================
  
  // べージトップボタン=========================
  $('.page-top').click(function() {
    $('html,body').animate({scrollTop:0},'500');
   });
  
  // page-topクラスをクリックでイベント発火。html,bodyで全体の情報を取得しanimateメソッドで移動をかける。500ms（0.5秒）でTopまでスクロール
  
  $('.page-top').hide();
  // page-topクラスを消す
  $(window).scroll(function () {
    if($(window).scrollTop() > 80 ) {
    $('.page-top').slideDown(300);
    } else {
     $('.page-top').slideUp(300);
     }
   });
  
  // ウインドウをスクロールしてイベント発火
  // ウインドウを80px TopからスクロールしたらslideDownで表示。0.3秒で
  
    
  //スムーススクロール=================================
  
  //$('a[href^="#"]').click( function () { //aタグの＃がついたものをクリックすると
   //var id = $(this).attr("href"); //クリックした対象よりhrefの値を取得 attr ( )
   //var header = $(".header").innerHeight(); //headerの高さ取得 ※headerがfixedの場合
   //var position = 0  //idが＃だけの場合TOPへもどる
   //if ( id != "#" ) { //idに＃と値が入っていれば↓
     //var position = $(id).offset().top - header; //その値の場所のTOPからの場所を取得 offset ().top
    //}
  
  //$('html,body').animate ({ //その場所へ0.3sでスクロール
   //scrollTop: position
   //},300)
  //})
    
    
    //overfllow scroll内のスムーズスクロール
  //クリックタグにdata-box=".scroll"
  //overflloｗつけたタグにclass="scroll"をつける
  
  $("a\[href^='#'\]").click(function(){
  
  //data-box属性がない場合は通常のスムーズスクロール
  
  if(!$(this).data("box")){
   var header = $("header").innerHeight(); //headerの高さ取得 ※headerがfixedの場合
   $("body,html").stop().animate({
   scrollTop:$($(this).attr("href")).offset().top - header
   });
  
  //data-box属性がある場合はdata-box内をスムーズスクロール
  }else{
   var $box = $($(this).data("box"));
   var $tareget = $($(this).attr("href"));
   var dist = $tareget.position().top - $box.position().top;
   $box.stop().animate({
   scrollTop: $box.scrollTop() + dist
   });
  }
  return  false;
  });
    
    
  //選択したタグに is-activeクラスをつける-===================
  $(".header__nav li a").click(function () {
   $(".header__nav li a").removeClass("is-active");
   $(this).addClass("is-active");
  
  })
    
  // モーダルJS================================
  var grayDisplay = $('#gray-display');
  var largeImage = $('#large-img');
  // モーダル表示要のIDは何度も取得するため、変数として格納しておく
  grayDisplay.hide();
  largeImage.hide();
  // 最初は非表示に
  $('.corse-block li img').click(function() {
    const targetImg = $(this).attr('src');
    // クリックされた画像のsrc属性の値を取得して定数に格納
  
  grayDisplay.show();
  // 画面全体を暗くする
  largeImage.append(`<img src='${targetImg}'>`);
  largeImage.show();
  // 取得したsrc属性の値をlargeImageクラスに追加して、showメソッドで表示
  grayDisplay.click(function() {
    $(this).next().fadeOut(200,function() {
    grayDisplay.hide();
    largeImage.children().remove();
   });
  });
  // 画面の暗い部分をクリックすると、モーダル表示した画像と暗くなった部分をfadeOutメソッドで消す。
  return  false;
  });
  
  //===========================================
  //モーダル２================================================
     //クリックするタグにclass="js-close-button" data-target=".target-modal"つける
     //反応して閉じるタグに class="target-modal"をつける
    $(".js-close-button").click(function (e) {
       e.preventDefault();
       var target =  $(this).data("target");
       $(target).hide();
     });
     //クリックするタグにclass="js-open-button" data-target=".target-modal"つける
     //反応して開くタグに class="target-modal"をつける
    $(".js-open-button").click(function (e) {
      e.preventDefault();
       var target =  $(this).data("target");
       $(target).show();
     });
    
  
  // submit 制御ーーーーーーーーーーーーーーーーーーーーーーー
  // submitにdisabledをつけること
  // form に＃form submitに#submit プライバシーポリシーに#privacyCheckをつける
  $(document).ready(function () {
    const $submitBtn = $('#submit')
    $('#js-form input,#js-form textarea').on('change', function () {
    if (
    $('#js-form input\[type="text"\]').val() !== "" &&
    $('#js-form input\[type="email"\]').val() !== "" &&
    $('#js-form input\[type="checkbox"\]').val() !== "" &&
    $('#js-form #privacyCheck').prop('checked') === true
    ) {
     $submitBtn.prop('disabled', false);
     } else {
     $submitBtn.prop('disabled', true);
     }
    });
   });
  });
  
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  
  //============================================
  
  //Swiper-------------------------------------------------------------------
  const swiper = new Swiper('.swiper-container', {
  loop: true,
  // If we need pagination
  pagination: {
   el: '.swiper-pagination',
    clickable : true,
   },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },
  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  });
  //----------------------------------------------------------------------------  
  
  //WOW.js-----------------------------------------------------------------
  new WOW().init();
  
  window.addEventListener('scroll', function(e) {
   if( $(window).scrollTop() <= 0) {
   $('.wow').removeClass('animated');
   $('.wow').removeAttr('style');
   new WOW().init();
   }
  });

  //googleフォーム---------------------------------------------------------
  let $form = $(" #js-form")
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $("#js-success").slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $("#js-error").slideDown()
        }
      } 
    });
    return false; 
  }); 