arch = open('poema20_pre.txt','r')
txt =  arch.read()

frecuencias = {}
for i in txt:
    if i in frecuencias:
        frecuencias[i] += 1
    else:
        frecuencias[i] = 1
mayores = sorted(frecuencias, key=frecuencias.get, reverse=True)[:5]
#print(mayores)

def encode_unicode(text):
    return "".join("{:02x}".format(ord(c)) for c in text)

#print('0x'+encode_unicode(txt))

def insertar_aqui(text):
    i = 1
    res = ''
    for j in range(len(text)):
        if i % 20 == 0:
            res += text[j]
            res += 'AQUI'
        else:
            res += text[j]
        i += 1
    
    while len(res) % 4 != 0:
        res += 'X'
    return res

res = insertar_aqui(txt)
print(res)
print("tamaño: ",len(res))