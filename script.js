document.addEventListener("DOMContentLoaded", function () {
    const encryptButton = document.getElementById("encryptButton");
    const decryptButton = document.getElementById("decryptButton");
    const originalWordInput = document.getElementById("originalWord");
    const translatedWordSpan = document.getElementById("translatedWord");
    const shiftAmount = 15; // Fixed shift amount

    encryptButton.addEventListener("click", function () {
        const originalWord = originalWordInput.value;
        const encryptedWord = caesarCipher(originalWord, shiftAmount);
        translatedWordSpan.textContent = encryptedWord;
    });

    decryptButton.addEventListener("click", function () {
        const originalWord = originalWordInput.value;
        const decryptedWord = caesarDecipher(originalWord, shiftAmount);
        translatedWordSpan.textContent = decryptedWord;
    });

    function caesarCipher(text, shift) {
        let result = "";

        for (let i = 0; i < text.length; i++) {
            let char = text[i];

            if (char.match(/[a-z]/i)) {
                const code = text.charCodeAt(i);

                if (code >= 65 && code <= 90) {
                    char = String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
                } else if (code >= 97 && code <= 122) {
                    char = String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
                }
            }

            result += char;
        }

        return result;
    }

    function caesarDecipher(text, shift) {
        // To decrypt, simply use the same fixed shift
        return caesarCipher(text, -shift);
    }
});
