def analyze_satisfaction(message: str) -> int:
    """
    Analyse le texte d'un message et retourne un score de satisfaction.
    Retourne 1 si le message est positif, 0 si négatif.
    """
    positive_words = [
        "merci", "super", "génial", "excellent", "parfait", "top", "bien"
    ]
    negative_words = [
        "nul", "mauvais", "bug", "problème", "déçu", "erreur"
    ]

    msg = message.lower()

    for word in positive_words:
        if word in msg:
            return 1

    for word in negative_words:
        if word in msg:
            return 0

    return 1  # par défaut : positif
