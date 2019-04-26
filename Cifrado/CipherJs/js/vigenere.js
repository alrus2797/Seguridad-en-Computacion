
function desc_vigenere(text, key, alphabet){
    text = text.slice(1,-1);
    text = cleanText(text);
    text = text.toUpperCase();
    key = key.toUpperCase();
    alphabet = alphabet.toUpperCase();
    console.log(key);
    for (var i; i< key.length; i++){
        if (alphabet.indexOf(key[i]) < 0 ){
            alert("key contains characters not included in the alphabet" +  key[i]);
            return;
        }
    }

    desc = ""
    for (var i; i< alphabet.length; i++){
        if (alphabet.indexOf(text[i]) < 0 ){
            alert("encrypted text contains characters not included in the alphabet "+ text[i]);
            return;
        }

        
    }

    for (var i = 0; i < text.length ; i++){
        encripted_index = alphabet.indexOf(text[i]);
        key_index = alphabet.indexOf( key[modulo( i, key.length )] );
        console.log(encripted_index, key_index, modulo(encripted_index - key_index, alphabet.length));
        // if (encripted_index - key_index < 0){
        //     console.log("N:",at_negative(alphabet,modulo(encripted_index - key_index, alphabet.length)));
        //     desc += at_negative(alphabet,modulo(encripted_index - key_index, alphabet.length));            
        // }
        // else{
        //     desc += alphabet[modulo(encripted_index - key_index, alphabet.length)];
        // }
        desc += alphabet.get(modulo(encripted_index - key_index, alphabet.length));
    }
    return desc;
}