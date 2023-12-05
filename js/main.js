var template =
  '<div itemscope itemtype="http://schema.org/Product" class="col-md"> ' +
  '<div class="card h-100"> ' +
  '<div class="card-body"> ' +
  "<img " +
  'src="${icon}" ' +
  'class="card-img-top mb-4" ' +
  'alt="Ремонт компьютеров и ноутбуков" ' +
  '/> '+
' <h5 class="card-title"><span itemprop="name">${title}</span></h5> ' +
  '<span itemprop="description"> ' +
  '<p class="card-text text-muted">${desc}</p> ' +
  "</span> " +
"</div> " +
  '<div class="card-footer text-center text-muted"> ' +
  '<span itemprop="offers" itemscope itemtype="http://schema.org/Offer"> ' +
  '<span itemprop="price">${price}</span> ' +
  '<span itemprop="priceCurrency">RUB</span> ' +
  '<link itemprop="availability" href="http://schema.org/InStock"/> ' +
  "</span>" +
  "</div>" +
  "</div>" +
  "</div>";

// Массив с данными
var services = [
  {
    icon: "img/undraw_alert_re_j2op.svg",
    title: "Устранение ошибок и сбоев",
    desc: "Устранение системных ошибок и сбоев",
    price: "1200₽",
  },
  {
    icon: "img/undraw_bug_fixing_oc-7-a.svg",
    title: "Удаление вредоносных программ",
    desc: "Обнаружение и удаление вредоносных программ",
    price: "1500₽",
  },
  {
    icon: "img/undraw_data_processing_yrrv.svg",
    title: "Установка и обновление драйверов ",
    desc: "Установка и обновление драйверов для всех компонентов ",
    price: "1500₽",
  },
  {
    icon: "img/undraw_server_re_twwj.svg",
    title: "Очистка и оптимизация системы ",
    desc: "Очистка от ненужных файлов и настройка системы ",
    price: "1000₽",
  },
  {
    icon: "img/undraw_organizing_projects_re_9p1k.svg",
    title: "Расширенная диагностика системы",
    desc: "Подробный анализ работы компьютера и выявление проблем ",
    price: "1500₽",
  },
  {
    icon: "img/undraw_fixing_bugs_w7gi.svg",
    title: "Установка антивирусного ПО",
    desc: "Установка и настройка надежного антивирусного программного обеспечения",
    price: "1200₽",
  },
  {
    icon: "img/undraw_responsive_re_e1nn.svg",
    title: "Установка и настройка программ",
    desc: "Установка и настройка программ по требованию клиента ",
    price: "от 800₽",
  },
  {
    icon: "img/undraw_programming_re_kg9v.svg",
    title: "Оптимизация загрузки и автозапуска",
    desc: "Оптимизация времени загрузки и настройка автозапуска программ",
    price: "800₽",
  },
  {
    icon: "img/undraw_monitor_iqpq.svg",
    title: "Восстановление операционной системы",
    desc: "Восстановление поврежденной или нестабильной операционной системы",
    price: "2500₽",
  },
  {
    icon: "img/undraw_world_re_768g.svg",
    title: "Настройка сетевого подключения ",
    desc: "Установка и настройка сетевого подключения",
    price: "1000₽",
  },
  {
    icon: "img/undraw_resume_folder_re_e0bi.svg",
    title: "Установка офисных приложений",
    desc: "Установка и настройка офисных приложений",
    price: "1500₽",
  },
  {
    icon: "img/undraw_two_factor_authentication_namy.svg",
    title: "Резервное копирование и перенос данных",
    desc: "Копирование и перенос данных между устройствами ",
    price: "1800₽",
  },

  {
    icon: "img/undraw_cloud_files_wmo8.svg",
    title: "Обновление операционной системы",
    desc: "Обновление до последней версии операционной системы",
    price: "1000₽",
  },
  {
    icon: "img/undraw_social_media_re_sulg.svg",
    title: "Восстановление паролей",
    desc: "Восстановление забытых паролей",
    price: "2000₽",
  },
  {
    icon: "img/undraw_throw_away_re_x60k.svg",
    title: "Удаление временных файлов",
    desc: "Очистка временных файлов для освобождения дискового пространства ",
    price: "800₽",
  },
  {
    icon: "img/undraw_envelope_re_f5j4.svg",
    title: "Помощь в настройке электронной почты ",
    desc: "Настройка почтового клиента и учетной записи",
    price: "1000₽",
  },
  {
    icon: "img/undraw_mobile_browsers_re_kxol.svg",
    title: "Установка и настройка браузера",
    desc: "Установка и настройка предпочитаемого веб-браузера ",
    price: "800₽",
  },
  {
    icon: "img/undraw_teaching_re_g7e3.svg",
    title: "Консультация и обучение",
    desc: "Консультация по вопросам компьютера и обучение пользователя ",
    price: "700₽/час",
  },
  // {
  //   icon: "",
  //   title: "",
  //   desc: "",
  //   price: ""
  // },
];

// Функция рендеринга
function renderServices(list) {
  var html = '<div class="row g-4 mb-5">';
  var i = 0;
  for (var s of list) {
    var card = template;

    card = card.replace("${icon}", s.icon);
    card = card.replace("${title}", s.title);
    card = card.replace("${desc}", s.desc + " в Чишмах");
    card = card.replace("${price}", s.price);

    i++;
    if (i != 3) {
      html += card;
    } else {
      html += card + '</div><div class="row g-4 mb-5">';
      i = 0;
    }
  }
  $("#extra-services").html(html);
}

// Вызов функции
renderServices(services);

$(function () {
  $(".extra-services").hide();
  let isShow = false;

  $("#show-more").click(function () {
    if (!isShow) {
      $(".extra-services").slideDown();
      $("#show-more").text("Скрыть");
      isShow = true;
    } else {
      $(".extra-services").slideUp();
      $("#show-more").text("Показать ещё");
      isShow = false;
    }
  });
});

// Обработчик клика по кнопке
$("#call-master").on("click", function () {
  // Анимированный скролл до формы
  $("html, body").animate(
    {
      scrollTop: $("#orderForm").offset().top,
    },
    100
  );
});

$(document).ready(function () {
  $("#post-form").validate({
    rules: {
      name: {
        required: true,
        number: false,
      },
      address: {
        required: true,
        number: false,
      },
    },
    messages: {
      name: {
        required: "Это поле обязательно",
      },
      address: {
        required: "Это поле обязательно",
      },
    },
    submitHandler: function (event, validator) {
      var errors = validator.errors;
      if (!errors) {
        on_click();
      }
    },
  });
});

function on_click() {
  var name = $("#name").val();
  var address = $("#address").val();

  url =
    "https://wa.me/79196153646?text=Здравстуйте, мне нужен мастер по ремонту компьютеров." +
    " %0A Мое имя: " +
    name +
    " %0A Адрес: " +
    address;
  // Открываем чат
  window.open(url);
}
