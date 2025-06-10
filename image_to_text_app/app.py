import os
from flask import Flask, render_template, request, redirect, url_for, send_from_directory
import pytesseract
from PIL import Image
from werkzeug.utils import secure_filename # For secure file handling

app = Flask(__name__)


# Folder to store uploaded images and extracted text files
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 # Limit uploads to 16MB

# Allowed image file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'bmp', 'tiff'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# --- Web Routes ---
@app.route("/", methods=["GET", "POST"])
def index():
    extracted_text = None
    download_link = None
    error_message = None

    if request.method == "POST":
        # Check if the post request has the file part
        if 'image_file' not in request.files:
            error_message = "No file part in the request."
            return render_template("index.html", error_message=error_message)

        file = request.files['image_file']

        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            error_message = "No selected file."
            return render_template("index.html", error_message=error_message)

        if file and allowed_file(file.filename):
            try:
                # Securely save the uploaded image
                filename = secure_filename(file.filename)
                image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                file.save(image_path)

                # --- Core OCR Logic (File I/O: Reading Image) ---
                # Open the image using Pillow
                img = Image.open(image_path)

                # Perform OCR to extract text
                extracted_text = pytesseract.image_to_string(img)

                # --- File I/O: Writing Extracted Text ---
                # Create a filename for the output text file
                text_filename = os.path.splitext(filename)[0] + ".txt"
                text_path = os.path.join(app.config['UPLOAD_FOLDER'], text_filename)

                with open(text_path, "w", encoding="utf-8") as text_file:
                    text_file.write(extracted_text)

                download_link = url_for('download_file', name=text_filename)

            except pytesseract.TesseractNotFoundError:
                error_message = "Tesseract OCR engine not found. Please install it and ensure it's in your system PATH or configured in app.py."
            except Exception as e:
                error_message = f"An error occurred during OCR: {e}"
        else:
            error_message = "Invalid file type. Please upload an image (PNG, JPG, JPEG, GIF, BMP, TIFF)."

    return render_template("index.html",
                           extracted_text=extracted_text,
                           download_link=download_link,
                           error_message=error_message)

@app.route('/uploads/<name>')
def download_file(name):
    # This route allows users to download the extracted text file
    return send_from_directory(app.config['UPLOAD_FOLDER'], name, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True) # debug=True helps with development by reloading on code changes
