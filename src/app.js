
function generarLink() {
    var x = document.getElementById("myBtn");
    var pronoun = ['the', 'our'];
    var adj = ['great', 'big'];
    var noun = ['jogger', 'racoon'];
    var ext = ['.com', '.net', '.us', '.io'];

    for (i = 0; i < pronoun.length; i++) {
        for (j = 0; j < adj.length; j++) {
            for (k = 0; k < noun.length; k++) {
                for (l = 0; l < ext.length; l++) {
                    var elem = document.createElement("h4");
                    elem.innerHTML = pronoun[i] + adj[j] + noun[k] + ext[l];
                    document.querySelector("#myDiv").appendChild(elem);

                }
            }
        }
    }

}


