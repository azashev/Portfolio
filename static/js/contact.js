document.getElementById("copy-email-btn").addEventListener("click", function () {
    const email = document.getElementById("email").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const copyMessage = document.querySelector(".copy-message");
    copyMessage.style.display = "inline";
    setTimeout(function () {
        copyMessage.style.display = "none";
    }, 3000);
});
