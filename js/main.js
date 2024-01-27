var swiper = new Swiper(".mySwiper",{
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewhell: true,
    keyboard: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 6000,
})


$(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });
   });

   
   $(document).ready(function() {
    $(".btn-close").click(function() {
      $(".header_close").slideToggle();
      $(".btn").toggle();
    });
  });

  $(document).ready(function() {
    $(".btn").click(function() {
      $(".header_close").slideToggle();
      $(".btn").toggle();
    });  
  });

  $(document).ready(function() {
    $(".submit_button").click(function() {
      $(".header_close").slideToggle();
      $(".btn").toggle();
    });
  });


   let coll = document.getElementsByClassName('collapsible');
   for(let i = 0; i < coll.length; i++) {
       coll[i].addEventListener('click', function () {
           this.classList.toggle('active');
           let content = this.nextElementSibling;
           if (content.style.maxHeight) {
               content.style.maxHeight = null;
           } else {
               content.style.maxHeight = content.scrollHeight + 'px'
           }
       })
   }

const quizData = [
    {
        question: "Как помочь животным?",
        a: "Накормить животных сладостями",
        b: "Волонтерство в приюте для животных",
        c: "Помогать животным нельзя",
        correct: "b",
    },
    {
        question: "Куда нужно выкидывать мусор?",
        a: "В отведенные для этого места(контейнерные площадки, урны)",
        b: "На землю, другие подберут",
        c: "В море, мусор смоет далеко от берега",
        correct: "a",
    },
    {
        question: "Какие животные есть в России?",
        a: "Кенгуру",
        b: "Вомбаты",
        c: "Зубры",
        correct: "c",
    },
    {
        question: "Что нужно сделать для создания мест обитания животных?",
        a: "Вырубка леса",
        b: "Создание водоемов",
        c: "Строительство жилых домов рядом с лесом",
        correct: "b",
    },
    {
        question: "Отличительные признаки птицы тупик?",
        a: "Треугольный клюв",
        b: "Наличие панциря",
        c: "Массивные, закрученные в спираль рога",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы ответили на ${score}/${quizData.length} вопросов</h2>
            <button class='answer_button' onclick="location.reload()">Начать заново</button>
            `;
        }
    }
});


$('.close__link').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(400);
    $('html').addClass('no-scroll');
});
$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(400);
    $('html').removeClass('no-scroll');
});
$('.submit_button').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeOut(400);
    $('html').removeClass('no-scroll');
})
$('.popup-bg').click(function (e) {
    if (!$(e.target).closest(".popup").length) {
      $('.popup-bg').fadeOut(400);
      $('html').removeClass('no-scroll');
    }
  });
  $('.footer_text._popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(400);
    $('html').addClass('no-scroll');
});