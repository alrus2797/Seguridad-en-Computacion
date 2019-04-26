def sustitute(text,sustitutions):
    for value, sustitute in sustitutions.items():
        text = text.replace(value, sustitute)
    return text

import string
def nullify(text, nullifies_list):
    for value in nullifies_list:
        text = text.replace(value,'')
    return text

in_file = open('nombre.txt','r')
text = in_file.read()

# Preprocessing

# Uppercase
text = text.upper()
# Sustitutions
sustitutions = {
    'U' : 'V',
}

# Nullifies
nullifies = [' ', '\n', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ñ', '"', '.']

# Execute

text = text.strip()
text = text.translate(str.maketrans("","", string.punctuation))
#text = nullify(text, nullifies)
#text = sustitute(text, sustitutions)
print(repr(text))