function modulo (a,b){
    var q = Math.trunc(a/b);
    return (a - b * (a < 0 ? q -1 : q));
}


function cleanText(text){
    return text.replace(/\r|\n|\s|\t| |"|'|\:|\.|\-|\,|\_|\;|\/|\\|\¿|\?|\“|\”|/g,'');
}

function at_negative(str, number){
    return str[str.length+number]
}

String.prototype.get = function(i, fallback) { 
    if (i >= 0)
    {
        return this[i] || fallback; 
    }
    else{
        return this[this.length+i] || fallback;
    }

}


function preprocessing(text){
    var Lchars = base64map;
    var Latinise={};Latinise.latin_map=JSON.parse(decodeURIComponent(escape(atob(Lchars))));
    String.prototype.latinise=function(){return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||a})};
    String.prototype.latinize=String.prototype.latinise;
    String.prototype.isLatin=function(){return this==this.latinise()}

    text = text.latinise()
    text = cleanText(text);
    text = text.toUpperCase();
    return text;
}

function alberti(text, innerDisk, outer_disk, inner_spin){
    text = preprocessing(text);
    if (innerDisk.length != outer_disk.length){
        alert("Disk has different length");
        return;
    }
    encripted_text = "";

    // for (var i in text.slice(0,text.length)){
    //     console.log(i, text[i], text.length);
    // }

    console.log("\nOuter disk:", outer_disk, "\nInner disk:", innerDisk);

    for (var i = 0; i < text.length; i++){
        var outer_index = outer_disk.indexOf(text[i]);
        if (outer_index < 0){
            console.log("nf", text[i]);
            //alert("Found a character that's not in the disk: " + i+" "+ outer_index +" "+text);
            //return;
        }
        console.log(text[i],modulo(outer_index - parseInt(inner_spin), innerDisk.length),innerDisk[modulo(outer_index - parseInt(inner_spin), innerDisk.length)]);

        
        encripted_text += innerDisk.get(modulo(outer_index - parseInt(inner_spin), innerDisk.length));
    }
    return encripted_text;

}

function des_alberti(text, outer_disk, innerDisk, inner_spin){
    if (innerDisk.length != outer_disk.length){
        alert("Disk has different length");
        return;
    }
    encripted_text = "";

    console.log("\nOuter disk:", outer_disk, "\nInner disk:", innerDisk);

    for (var i = 0; i < text.length; i++){
        var outer_index = outer_disk.indexOf(text[i]);
        if (outer_index < 0){
            console.log("nf", text[i]);
            //alert("Found a character that's not in the disk: " + i+" "+ outer_index +" "+text);
            //return;
        }
        console.log(text[i],modulo(outer_index - parseInt(inner_spin), innerDisk.length),innerDisk[modulo(outer_index - parseInt(inner_spin), innerDisk.length)]);

        
        encripted_text += innerDisk.get(modulo(outer_index + parseInt(inner_spin), innerDisk.length));
    }
    return encripted_text;

}



function multiple_alberti(text, innerDisk, outerDisk, spins){
    text = preprocessing(text);
    for (var i in spins){
        if (i >= text.length){
            alert("An index exceeds the length of the text");
        }
    }

    if (! spins[0]){
        alert("Give an initial spin");
        return;
    }

    var curr_spin = spins[0];
    encripted_text = ""
    for (var i = 0; i < text.length; i++){
        if (spins[i]){
            curr_spin = spins[i];
        }
        var outer_index = outerDisk.indexOf(text[i])
        
        console.log("curr_ ",text[i], curr_spin, i);
        encripted_text += innerDisk[ modulo(outer_index - curr_spin, innerDisk.length) ];
    }
    return encripted_text;
}

function periodic_alberti(text, innerDisk, outer_disk, initial_spin, period, period_spin){
    text = preprocessing(text);
    if (innerDisk.length != outer_disk.length){
        alert("Disk has different length");
        return;
    }
    
    encripted_text = "";

    var curr_spin = parseInt(initial_spin);
    period = parseInt(period)
    period_spin = parseInt(period_spin)

    
    for (var i = 0 ; i< text.length; i++){
        var outer_index = outer_disk.indexOf(text[i]);
        if (outer_index < 0){
            console.log("nf", text[i]);
            //alert("Found a character that's not in the disk: " + i+" "+ outer_index +" "+text);
            return;
        }
        
        if ( i != 0 && i % period == 0){
            curr_spin += period_spin;
        }
        console.log(text[i], modulo(outer_index - curr_spin, innerDisk.length), innerDisk.get(modulo(outer_index - curr_spin, innerDisk.length)));

        encripted_text += innerDisk.get(modulo(outer_index - curr_spin, innerDisk.length));
    }
    return encripted_text;
}