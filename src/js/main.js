

(function () {
    const titleMove = {
        cacheDom() {
            this.h = document.querySelector('.jump');
            this.arrayL = Array.from(this.h.textContent);
        },
        init() {
            document.documentElement.classList.add('js-enabled');
            this.cacheDom();
            this.h.textContent ="";
            for (let letter of this.arrayL) {
                const elmSpan = document.createElement('span');
                elmSpan.textContent = letter;
                this.h.appendChild(elmSpan);
                if (letter === ' '){
                    elmSpan.textContent = '\u00A0';
                }else{
                    elmSpan.textContent = letter;
                }
            }
        }
    };
    titleMove.init();
})();

// Vous devez décomposer la chaîne de caractères et entourer chacune des lettres par un élément span. Ex : <h1 class="jump">AB</h1> devient <h1 class="jump"><span>A</span><span>B</span></h1>.
// Les espaces blancs doivent être remplacés par le code Unicode \u00A0 qui est l'espace insécable.
