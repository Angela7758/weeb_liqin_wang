def predict_satisfaction(message: str) -> int:
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

    return 1
