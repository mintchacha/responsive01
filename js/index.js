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
  // console.log(figureW)
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
  this.img = img
  this.caption = caption
  this.year = year
  this.program = program
  this.url = url
  this.text= text
}
// prototype
Modal.prototype.action = function(){  
  H5.innerHTML = this.title
  Img.setAttribute('src', this.img)
  Figcaption.innerHTML = this.caption
  Year.innerHTML = this.year
  Program.innerHTML = this.program
  Url.innerHTML = this.url
  Text.innerHTML = this.text
}

// 인스턴스
let Modallist = [
  new Modal('work01','./images/pic01.png','work01','2022','프로그램 이름','url','text'),
  new Modal('work02','./images/pic02.png','work02','2022','프로그램 이름','url','text'),
  new Modal('work03','./images/pic03.png','work03','2022','프로그램 이름','url','text'),
  new Modal('work04','./images/pic04.png','work04','2022','프로그램 이름','url','text'),
  new Modal('work05','./images/pic05.png','work05','2022','프로그램 이름','url','text'),
  new Modal('work06','./images/pic06.png','work06','2022','프로그램 이름','url','text')
]
// 이벤트 : figure클릭(forEach문), #modal>.close클릭
const btn = document.querySelectorAll('#box03 #all>figure')
const close = document.querySelector('#modal>.close')
btn.forEach(function(item,index){  
  item.addEventListener('click',function(e){
    Modallist[index].action()
    $('#modal').fadeIn()
  })
})
close.addEventListener('click',function(e){
  $('#modal').fadeOut()
})