(function(){let e={toggle:"main-navigation__menu-toggle",toggleActive:"main-navigation__menu-toggle--active",navigationList:"main-navigation__list",navigationListActive:"main-navigation__list--active"},o={menuButton:document.querySelector(`.${e.toggle}`),navigationList:document.querySelector(`.${e.navigationList}`)};if(Object.values(o).some(t=>!t))return;o.menuButton.classList.remove(e.toggleActive),o.navigationList.classList.remove(e.navigationListActive);let s=t=>{t.preventDefault(),o.menuButton.classList.toggle(e.toggleActive),o.navigationList.classList.toggle(e.navigationListActive)};o.menuButton.addEventListener("click",s)})();(function(){let e={container:document.querySelector(".example-slider"),imageBefore:document.querySelector(".example-slider__before"),comparisonLine:document.querySelector(".example-slider__line"),comparisonButton:document.querySelector(".example-slider__button")},o=4;if(Object.values(e).some(t=>!t))return;let s=t=>{t.preventDefault();let d=e.container.offsetWidth,v=e.container.getBoundingClientRect().left,r=t.clientX,l=t.pageX;t.touches&&(r=t.touches[0].clientX,l=t.touches[0].pageX);let c=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),e.comparisonButton.onmouseup=null},g=r-e.comparisonLine.getBoundingClientRect().left,u=i=>{let n=i-v-g;n>0&&n<d-o?e.comparisonLine.style.left=`${n}px`:c();let p=e.comparisonLine.offsetLeft;e.imageBefore.style.width=`${p}px`};u(l),e.comparisonLine.style.transform="none";function a(i){let n=i.pageX;i.touches&&(n=i.touches[0].pageX),u(n)}document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),e.comparisonButton.addEventListener("mouseup",c),e.comparisonButton.addEventListener("touchend",c)};e.comparisonButton.addEventListener("mousedown",s),e.comparisonButton.addEventListener("touchstart",s),window.addEventListener("resize",()=>{e.comparisonLine.style.left="50%",e.imageBefore.style.width="50%"})})();
