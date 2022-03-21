
    document.getElementById("upper-case").addEventListener("click", function() {
    let text = document.querySelector ('textarea').value.toUpperCase().split(' ');
    document.querySelector('textarea').value = text.join(' ');
});

    document.getElementById("lower-case").addEventListener("click", function() {
    let text = document.querySelector('textarea').value.toLowerCase().split(' ');
    document.querySelector('textarea').value = text.join(' ');
});

    document.getElementById("proper-case").addEventListener("click",function() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
        .join(' ');
});

    document.getElementById("sentence-case").addEventListener("click",function() {
        let text = document.querySelector('textarea').value;
        document.querySelector('textarea').value = text.toLowerCase()
            .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (letter) {
                return letter.toUpperCase();
            });
    });

    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    document.getElementById("save-text-file").addEventListener("click", function() {
        let text = document.querySelector('textarea').value;
        // Start file download.
        download("text.txt", text);
    });