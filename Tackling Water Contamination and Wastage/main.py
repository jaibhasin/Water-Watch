from flask import Flask , render_template , url_for

app = Flask(__name__)

def my_view():
    url = url_for( value=None)
    return url

@app.route("/")
@app.route("/home")
def index():
    return render_template('index.html')

@app.route('/about-us')
def about():
    return render_template('about_us.html')

@app.route('/registration' , methods=['GET', 'POST'])
def registration():
    return render_template('registration.html')

@app.route('/active-issues')
def active_issues():
    return render_template('active_issues.html')

if __name__ == '__main__':
    app.run(debug=True)