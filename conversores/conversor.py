from random import choice
from json import dumps
fichero = open("tickets-20210727.csv")

tipo_random = lambda: choice([0, 1, 10])
lugar_random = lambda: choice(["Programa VIH", "Unidad de género", "DTIC", "Unidad de Comunicaciones"])
formato = lambda corpus: {'id': corpus[0], 'fecha': corpus[1], 'mensaje': corpus[2], 'usuario': {'mail': corpus[4], 'displayName': corpus[3]}, 'estado': tipo_random(), 'nivel': tipo_random(), 'localidad': lugar_random()}
estructurador = lambda linea: [campo.strip('"') for campo in linea.strip().split(';')]

resultado = [formato(estructurador(contenido)) for contenido in fichero]

print(dumps(resultado[1:]))
