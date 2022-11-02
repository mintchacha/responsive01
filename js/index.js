import $ from "jquery";

$(function(){
  // 미디어설정
  let windowW = $(window).width();
  if(windowW > 1160){
    nav()
  }
  else if (windowW < 1159 && windowW > 980){
    nav()
  }
  else if (windowW < 979 && windowW > 580){
    gallery()
    tnav()
  }
  else if (windowW < 579){}
    gallery()
    formData()
    tnav()
})
$(window).on('resize',function(e){
  window.location.reload()
})

// 함수
function gallery(){
  const figureW = $('#all>figure').width();
  console.log(figureW)
  $('#all>figure:last').prependTo('#all')
  $('#all').css('margin-left','-'+figureW+'px')
  // event
  $('#gallery>p.prev').on('click',function(e){
    $('#all').animate({marginLeft:'+='+figureW+'px'},600,function(){
      $('#all>figure:last').prependTo('#all')
      $('#all').css('margin-left','-'+figureW+'px')
    })
  })
  $('#gallery>p.next').on('click',function(e){ 
    $('#all').animate({marginLeft:'-='+figureW+'px'},600,function(){
      $('#all>figure:first').appendTo('#all');
      $('#all').css('margin-left','-'+figureW+'px')
    })
  })
}

function formData(){
  const $liForm = $('#box4 form ul>li>input, #box4 form ul>li>textarea')
  $liForm.removeAttr('placeholder')
  $liForm.on('focus',function(e){
    $(this).prev('label').fadeOut(400)
  })
  $liForm.on('blur',function(e){
    let str = $(this).val()
    if(str === ''){
      $(this).prev('label').fadeIn(400)
    }
  })
}

// nav
// wnav
function nav(){
  $('nav li>a').on('click',function(e){
    const navA = $(this).attr('href');
    const aPos = $(navA).offset().top;
    const headerHeight = $('header').innerHeight();
    $('html,body').animate({scrollTop:aPos-headerHeight})
  })
}
// tnav,mobile
function tnav(){}
// aside
// top

// modal
const H5 = document.querySelector('#modal h5')
const Img = document.querySelector('#modal figure>img')
const Figcaption = document.querySelector('#modal figure>figcaption')
const Year = document.querySelector('#modal dl>.year')
const Program = document.querySelector('#modal dl>.program')
const Url = document.querySelector('#modal dl>.url')
const Text = document.querySelector('#modal dl>.text')
// 생성자함수
function Modal(titie,img,caption,year,program,url,text){
  this.title = titie
}
// prototype
// Modal.prototype.action = function(){}

// 인스턴스
let Moda = {
  // new Modal('work01','이미지주소','2022','프로그램 이름','url','text')
}
// 이벤트 : figure클릭(forEach문), #modal>.close클릭
const btn = document.querySelectorAll('#box03 #all>figure')
const close = document.querySelectorAll('#modal>p.close')