def mayusculas(txt):
    a = ''
    for i in txt:
        if ord(i) >= 97 and ord(i) <=122:
            a = a + chr(ord(i)-32)
        else:
            a = a + i
    return a

def sustituir(txt, dict):
    for key, value in dict.items():
        txt = txt.replace(key,value)
    return txt

def prepros(filename):
    a = open(filename,'r')
    caracteres = {
        'j':'i',
        'h':'i',
        'ñ':'n',
        'k':'l',
        'u':'v',
        'w':'v',
        'y':'z',
    }
    tildes = {
        'á':'a',
        'é':'e',
        'í':'i',
        'ó':'o',
        'ú':'u',
    }
    espacios_tildes = { ' ':'', '.':'', ',':'', ':':'', '“':'', '”':'',
    }
    txt= a.read()
    txt = sustituir(txt,caracteres)
    txt = sustituir(txt,tildes)
    txt = mayusculas(txt)
    txt = sustituir(txt, espacios_tildes)
    print(txt)

prepros('text.txt')
