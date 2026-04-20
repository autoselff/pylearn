from flask import Flask, render_template, request, session

app = Flask(__name__)
app.secret_key = 'KEY'

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        words_1 = request.form.getlist("word_1")
        words_2 = request.form.getlist("word_2")
        mode = request.form.get("mode")

        vocabulary = []
        for w1, w2 in zip(words_1, words_2):
            if w1.strip() and w2.strip():
                vocabulary.append({"front": w1.strip(), "back": w2.strip()})

        session['vocabulary'] = vocabulary

        if vocabulary:
            if mode == "quiz":
                return render_template("quiz.html", vocabulary=vocabulary)
            return render_template("flashcards.html", vocabulary=vocabulary)

    saved_vocab = session.get('vocabulary', [])
    return render_template("index.html", vocabulary=saved_vocab)
