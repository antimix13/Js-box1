function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll(".info_box2 > details[open]").forEach((el) => {
      // Исключаем из перебора елемент который мы только что открыли
      if (el === event.target) {
        return;
      }

      // Закрываем все остальные елементы <details>
      el.open = false;
    });
  }
}

// Вешаем наблюдатель на все елементы <details> внутри акордиона
document
  .querySelectorAll(".info_box2 > details")
  .forEach((el) => el.addEventListener("toggle", onToggle));



