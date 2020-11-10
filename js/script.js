(function loadJSFunctionality() {

    //CHANGE THIS TO TEXT CONTENT OF INDEX.HTML
    const textArray = ["modern", "unique", "responsive", "user friendly", "search engine friendly"];

    const typedTextSpan = document.querySelector(".typing-text");
    const cursorSpan = document.querySelector(".cursor");
    //Speed
    const typingDelay = 196;
    const erasingDelay = 102;
    const newTextDelay = 2005; //Duration before a new text is typed again
    let textArrayIndex = 0;
    let characterIndex = 0;

    function type() {
        if (characterIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(type, typingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (characterIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, characterIndex - 1);
            characterIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    //Load typing text effect on site load
    document.addEventListener("DOMContentLoaded", function () {
        if (textArray.length) setTimeout(type, newTextDelay - 1500);
    });

    //Smooth Scrolling
    document.querySelector('a[href^="#"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}());