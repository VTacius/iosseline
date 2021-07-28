from random import choice
from json import dumps

from sys import exit,argv
if len(argv) < 2:
    print("Falta el nombre del fichero")
    exit(1)

fichero = argv[1]
contenido = open(fichero)

tipo_random = lambda: choice([0, 1, 10])
lugar_random = lambda: choice(["Programa VIH", "Unidad de género", "DTIC", "Unidad de Comunicaciones"])
formato = lambda corpus: {'id': corpus[0], 'fecha': corpus[1], 'mensaje': corpus[2], 'usuario': {'mail': corpus[4], 'displayName': corpus[3]}, 'estado': tipo_random(), 'nivel': tipo_random(), 'localidad': lugar_random()}
estructurador = lambda linea: [campo.strip('"') for campo in linea.strip().split(';')]

if __name__ == "__main__":
    resultado = [formato(estructurador(linea)) for linea in contenido]
    print(dumps(resultado[1:]))
