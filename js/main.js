let validEmail;function checkValidate(e){/\S+@\S+\.\S+/.test(e.value)?(e.style.borderBottomColor="#037171",userEmail=e.value,validEmail=!0):(e.style.borderBottomColor="#5C0029",validEmail=!1)}function logIn(){let e=document.querySelector(".ave");validEmail&&e.classList.add("left")}function toggleHamburger(){let e=document.querySelector(".header__menu"),t=document.querySelector(".menu");e.classList.toggle("menu__on"),t.classList.toggle("menu__off")}function contentMakeList(){let e=document.querySelector(".menu__content");for(let t=0;t<contentList.length;t++)e.insertAdjacentHTML("beforeend",`<div class="content" onclick="openTask(${t})">${contentList[t]}</div>`);e.insertAdjacentHTML("beforeend",'<div class="content content__disabled" onclick="openTask(3)">Итоговое задание</div>'),e.insertAdjacentHTML("beforeend",'<div class="content__alert">Чтобы открыть итоговое задание, выполните все предыдущие!</div>')}function endAsked(){let e=document.querySelector(".asked__title");shuffle(contentAsked),e.innerHTML=contentAsked[0]}contentMakeList(),endAsked();let taskList=document.querySelector(".main").children,headerTitle=document.querySelector(".header__title"),activeTask=0,checkTaskResult=0;function openTask(e){(e<ANSWERS||checkTaskResult===ANSWERS)&&(taskList[activeTask].classList.add("hidden"),activeTask=e,headerTitle.innerHTML=contentList[activeTask]||"Итоговое задание",taskList[activeTask].classList.remove("hidden"),toggleHamburger())}function startInfo(e){let t=e.parentElement;t.classList.add("right"),t.nextElementSibling.classList.remove("left")}function scoreButton(e){if(e<ANSWERS){document.querySelector(".menu__content").children[e].style.color="#037171",toggleHamburger(),document.getElementsByClassName("lock")[e].classList.remove("hidden")}checkTaskResult+=1,checkTaskResult===ANSWERS&&removeContentDisabled()}function removeContentDisabled(){document.querySelector(".content__disabled").classList.remove("content__disabled"),document.querySelector(".content__alert").classList.add("hidden")}function endButton(){let e=`EMAIL: ${userEmail}\n        "Журналист": ${userScribe}/${correctScribe.length}\n        "Классификация": ${userListok}/${correctListok1.length+correctListok2.length}\n        "Найди лишнее": ${userChain}/${correctChain.length}\n        "Вопрос": ${document.querySelector(".asked__title").textContent}`,t=new XMLHttpRequest;t.open("GET",BOT_URL+e,!0),t.send(),window.setTimeout((function(){document.location.href=LESSON_URL}),1e3),document.getElementsByClassName("lock")[4].classList.remove("hidden")}