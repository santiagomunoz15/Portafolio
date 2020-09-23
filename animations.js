
const menu = document.querySelector('.menu');
            const burger = document.querySelector('#ham');
            const selection = document.querySelector('.menu-selection');

            
            const responsive = window.matchMedia('screen and (max-width: 767px)')

            responsive.addListener(validation);

            function validation(event) {
                if (event.matches) {
                    burger.addEventListener('click', hideShow)
                    selection.addEventListener('click', hideShow)
                }
            }
            
            function hideShow() {       
                menu.classList.toggle('menu-display')
            }

            validation(responsive)