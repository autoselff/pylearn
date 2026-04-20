from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'TWOJ_BARDZO_TAJNY_KLUCZ'

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        words_1 = request.form.getlist("word_1")
        words_2 = request.form.getlist("word_2")
        mode = request.form.get("mode")

        new_vocabulary = []
        for w1, w2 in zip(words_1, words_2):
            if w1.strip() and w2.strip():
                new_vocabulary.append({"front": w1.strip(), "back": w2.strip()})

        session['vocabulary'] = new_vocabulary

        if new_vocabulary:
            if mode == "quiz":
                return render_template("quiz.html", vocabulary=new_vocabulary)
            return render_template("flashcards.html", vocabulary=new_vocabulary)

    saved_vocab = session.get('vocabulary', [])
    return render_template("index.html", vocabulary=saved_vocab)

@app.route("/clear")
def clear():
    session.pop('vocabulary', None)
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True)
