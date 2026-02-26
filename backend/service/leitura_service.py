from collections import deque
from repository.leitura_repository import salvar_leitura

# Buffer global (persiste entre requisições)
leituras_buffer = deque(maxlen=5)


def processar_leitura(dados):

    print("\n📥 NOVA LEITURA RECEBIDA") # INDICA LEITURA RECEBIDA
    print("Dados:", dados)

    campos_obrigatorios = ["SOJA", "FEIJAO", "MILHO", "TRIGO"]

    for campo in campos_obrigatorios:
        if campo not in dados:
            raise ValueError(f"Campo '{campo}' é obrigatório")

    try:
        soja = float(dados["SOJA"])
        feijao = float(dados["FEIJAO"])
        milho = float(dados["MILHO"])
        trigo = float(dados["TRIGO"])
    except:
        raise ValueError("Todos os valores devem ser numéricos")

    validar_leitura(soja, feijao, milho, trigo)

    # adiciona leitura no buffer
    leituras_buffer.append((soja, feijao, milho, trigo))

    print(f"Buffer atual: {len(leituras_buffer)}")

    # só salva quando tiver 5
    if len(leituras_buffer) == 5:
        calcular_media_movel()


def validar_leitura(soja, feijao, milho, trigo):

    if not (20.0 <= soja <= 35.0):
        raise ValueError("Soja fora do limite (20 - 35)")

    if not (25.0 <= feijao <= 40.0):
        raise ValueError("Feijão fora do limite (25 - 40)")

    if not (15.0 <= milho <= 30.0):
        raise ValueError("Milho fora do limite (15 - 30)")

    if not (30.0 <= trigo <= 50.0):
        raise ValueError("Trigo fora do limite (30 - 50)")


def calcular_media_movel():

    soma_soja = sum(l[0] for l in leituras_buffer) # pega o primeiro elemento de cada tupla (soja) e soma
    soma_feijao = sum(l[1] for l in leituras_buffer) # pega o segundo elemento de cada tupla (feijao) e soma
    soma_milho = sum(l[2] for l in leituras_buffer) # pega o terceiro elemento de cada tupla (milho) e soma
    soma_trigo = sum(l[3] for l in leituras_buffer) # pega o quarto elemento de cada tupla (trigo) e soma

    media_soja = soma_soja / 5
    media_feijao = soma_feijao / 5
    media_milho = soma_milho / 5
    media_trigo = soma_trigo / 5

    print("\n==============================")
    print("🔥 SALVANDO MÉDIA NO BANCO 🔥")
    print("Soja:", media_soja)
    print("Feijao:", media_feijao)
    print("Milho:", media_milho)
    print("Trigo:", media_trigo)
    print("==============================\n")

    #salva somente a média
    salvar_leitura(media_soja, media_feijao, media_milho, media_trigo)