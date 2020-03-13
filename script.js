"use strict"; // Para que me salga instala aplicacion en google Chrome

var deferredPrompt;
window.addEventListener('beforeinstallprompt', function (e) {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault(); // Stash the event so it can be triggered later.

  deferredPrompt = e; // Update UI notify the user they can install the PWA

  showInstallPromotion();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function (reg) {
    return console.log('Registro de SW exitoso', reg);
  })["catch"](function (err) {
    return console.warn('Error al tratar de registrar el sw', err);
  });
}

var toggleHome = document.getElementById('toggle-home');
var notification = document.getElementById('notification');
var salir = document.getElementById('salir');
salir.addEventListener('click', function (e) {
  location.href = "https://nelsonurbaneja.github.io/coffee-house/";
});

var removeNotification = function removeNotification() {
  notification.classList.remove('show-notification');
};

var search = document.getElementById('search');

var removeSearch = function removeSearch() {
  search.classList.remove('show-search');
};

var menu = document.getElementById('main-menu');

var removeMenu = function removeMenu() {
  menu.classList.remove('show-menu');
};

var showSearch = function showSearch(idToggle, idSearch) {
  var toogleSearch = document.getElementById(idToggle);
  var search = document.getElementById(idSearch);

  if (toogleSearch && search) {
    toogleSearch.addEventListener('click', function (e) {
      search.classList.toggle('show-search');
      removeNotification();
      removeMenu();
      var input = document.getElementById('input-search').focus();
    });
  }
};

showSearch('toggle-search', 'search');

var showNotification = function showNotification(idToggle, idNotification) {
  var toogleNotification = document.getElementById(idToggle);
  var notification = document.getElementById(idNotification);

  if (toogleNotification && notification) {
    toogleNotification.addEventListener('click', function (e) {
      notification.classList.toggle('show-notification');
      removeSearch();
      removeMenu();
    });
  }
};

showNotification('toggle-notification', 'notification');

var showMenu = function showMenu(idToggle, idMenu) {
  var toggle = document.getElementById(idToggle);
  var menu = document.getElementById(idMenu);

  if (toggle && menu) {
    toggle.addEventListener('click', function (e) {
      menu.classList.toggle('show-menu');
      removeNotification();
      removeSearch();
    });
  }
};

showMenu('toggle-menu', 'main-menu');
var icon = Array.from(document.getElementsByClassName('main_product__icon'));
icon.forEach(function (ele) {
  ele.addEventListener('click', function (evt) {
    if (ele.src == "./img/heartBrown.png") {
      ele.nextSibling.nextSibling.innerText++;
      ele.src = "./img/heartRed.png";
    } else {
      ele.nextSibling.nextSibling.innerText--;
      ele.src = "./img/heartBrown.png";
    }
  });
});
var products = Array.from(document.getElementsByClassName('main-product'));
products.forEach(function (product) {
  product.addEventListener('click', function (evt) {
    var title = product.querySelector('h3');
    title.addEventListener('click', function (e) {
      var url = "".concat(title.textContent.split(' ').join('-').toLowerCase(), ".html");
      location.href = url;
    });
  });
});
toggleHome.addEventListener('click', function (e) {
  location.href = "./app.html";
}); // const comments = id => {
//     const fbComments = `<div class = "fb-comments" data-href = "${location.href}" data-width = "" data-numposts = "5" > </div>`
//     const container = document.getElementById(id)
//     addEventListener('DOMContentLoaded', () => {
//         if(id) container.innerHTML = fbComments
//     })
// }
// comments('container')