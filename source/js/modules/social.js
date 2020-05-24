export default () => {
  const socialBlock = document.querySelector(`.js-social-block`);
  const activeClassName = `social-block--active`;

  // Поскольку я считаю, что управление состоянием у компонента должно быть централизованным, а не разбросано по разным элементам,
  // я удаляю из social-block.css селекторы, связанные с состоянием .social-block__list
  // и делаю его состояние зависимым только от класса .social-block--active вот таким вот костылем, эмулирующим :focus-within
  // To be discussed

  const hasFocusWithin = () => socialBlock.contains(document.activeElement);
  const focusWithin = () => {
    if (hasFocusWithin()) {
      socialBlock.classList.add(activeClassName);
    } else {
      socialBlock.classList.remove(activeClassName);
    }
  };

  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(activeClassName);
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    if (!hasFocusWithin()) {
      socialBlock.classList.remove(activeClassName);
    }
  });

  socialBlock.querySelectorAll(`*`).forEach((el) => {
    el.addEventListener(`focus`, focusWithin);
    el.addEventListener(`blur`, focusWithin);
  });
};
