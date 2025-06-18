import os
from pdf2image import convert_from_path

def extract_first_page(pdf_path, output_path):
    pages = convert_from_path(pdf_path, first_page=1, last_page=1)
    if pages:
        pages[0].save(output_path, 'PNG')
        print(f"Thumbnail saved: {output_path}")
    else:
        print(f"No pages found in {pdf_path}")

def batch_extract(pdf_dir, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    for filename in os.listdir(pdf_dir):
        if filename.lower().endswith('.pdf'):
            pdf_path = os.path.join(pdf_dir, filename)
            base = os.path.splitext(filename)[0]
            output_path = os.path.join(output_dir, f"{base}-thumb.png")
            extract_first_page(pdf_path, output_path)

if __name__ == "__main__":
    # Set these paths as needed
    PDF_DIR = r"d:\dataportal3\public\reports"
    OUTPUT_DIR = r"d:\dataportal3\public\images"
    batch_extract(PDF_DIR, OUTPUT_DIR)
