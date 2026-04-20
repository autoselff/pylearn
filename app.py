from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        words_1 = request.form.getlist("word_1")
        words_2 = request.form.getlist("word_2")

        vocabulary = []
        for w1, w2 in zip(words_1, words_2):
            if w1.strip() and w2.strip():
                vocabulary.append({"front": w1.strip(), "back": w2.strip()})

        if vocabulary:
            return render_template("learn.html", vocabulary=vocabulary)

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
