from flask import Flask, render_template, url_for, request, redirect, flash

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Required for flash messages

@app.route("/")
@app.route("/home")
def index():
    return render_template('index.html')

@app.route('/about-us')
def about():
    return render_template('about_us.html')

@app.route('/registration', methods=['GET', 'POST'])
def registration():
    if request.method == 'POST':
        # Handle form submission
        name = request.form.get('name')
        aadhar = request.form.get('aadhar')
        phone = request.form.get('phone')
        email = request.form.get('email')
        
        # Basic validation
        if name and aadhar and phone and email:
            flash('Registration successful!', 'success')
            return redirect(url_for('index'))
        else:
            flash('Please fill in all fields.', 'error')
    
    return render_template('registration.html')

@app.route('/submit-registration', methods=['GET', 'POST'])
def submit_registration():
    # Redirect to registration route to handle the form
    return redirect(url_for('registration'))

@app.route('/report-issue', methods=['GET', 'POST'])
def report_issue():
    if request.method == 'POST':
        # Handle issue reporting
        description = request.form.get('description')
        severity = request.form.get('severity')
        location = request.form.get('location')
        
        # Basic validation
        if description and severity and location:
            flash('Issue reported successfully! Thank you for helping protect our water resources.', 'success')
        else:
            flash('Please fill in all required fields.', 'error')
    
    return redirect(url_for('index'))

@app.route('/active-issues')
def active_issues():
    # Pass a default URL for the table rows to avoid template errors
    default_url = url_for('index')
    return render_template('active_issues.html', default_url=default_url)

if __name__ == '__main__':
    app.run(debug=True)