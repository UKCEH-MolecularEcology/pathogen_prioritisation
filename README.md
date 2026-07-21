# UKCEH Pathogen Prioritisation Portal

An interactive, responsive dashboard portal for pathogen risk prioritisation at bathing water sites. This tool implements the exact mathematical scoring model developed in collaboration with Dr. Andrew Singer to rank 31 microbial hazards based on site-specific environmental levers and national policy weights.

---

## 🚀 Quick Start: How to Open and Run

This portal is a self-contained, browser-based application. It runs locally without requiring compilation, installation, or internet access.

### 💻 For Windows Desktop Users
*   **Non-Expert (Easiest)**:
    1. Download or extract the project folder.
    2. Double-click the `index.html` file. It will automatically open in your default web browser (Chrome, Edge, Firefox).
*   **Expert / Developer**:
    *   To host it on a local network or server, run a quick server using Python (if installed) in PowerShell:
        ```powershell
        python -m http.server 8000
        ```
        Then visit `http://localhost:8000` in your browser.
    *   Alternatively, deploy the folder to an IIS (Internet Information Services) instance or static hosting provider.

### 🐧 For Linux Users
*   **Non-Expert**:
    1. Navigate to the project directory in your File Manager.
    2. Right-click `index.html` and choose **Open With Web Browser**.
*   **Expert / Administrator**:
    *   Start a local HTTP server using Python or Node:
        ```bash
        python3 -m http.server 8000
        # or
        npx http-server -p 8000
        ```
        Then open `http://localhost:8000`.
    *   To host it permanently, you can serve it via NGINX or Apache by copying the files to `/var/www/html/`.

---

## 📖 How to Use the Portal

### 🟢 For Non-Experts (General Public / Operators)
The portal is designed to show you which pathogens deserve the most monitoring attention at a specific swimming or recreational water site.

1.  **Site Levers (Left Sidebar)**: Adjust these sliders (0 = absent, 5 = dominant) to match your local site conditions:
    *   *Human Sewage / CSO*: Move higher if the site is near wastewater treatment plants or storm overflows.
    *   *Agriculture Runoff*: Move higher if there are nearby farms, pastures, or livestock.
    *   *Measured Sentinel Burden*: Move higher if testing has already shown high levels of *E. coli* or enterococci.
2.  **Site Influence Slider**: Controls how much local conditions should pull the results away from a standard national view:
    *   *Set to 0%*: Shows a generic, national threat list.
    *   *Set to 100%*: Shows a pure, site-customized list based only on your levers.
    *   *Default (30%)*: Provides a balanced combination of national severity and local context.
3.  **Top 10 Sidebar (Right)**: Watch this update in real-time as you move the sliders. It shows your high-priority targets.
4.  **Detail Card**: Click on any row in the main table to open a detailed explanation of why that pathogen has its score, including its public-health consequence and how it behaves.

### 🔵 For Experts (Scientists / Regulators / Developers)
The portal allows deep calibration of the risk model for research, policy-making, or scientific validation.

1.  **National Hazard Weights (Center Top)**: Recalibrate the weights attached to the five core hazard criteria (Exposure efficiency, Health consequence, Source pressure, Persistence, Bathing evidence). The model automatically normalizes weights dynamically, meaning they do not need to add up to exactly 100 to work.
2.  **Verification of Calculations**:
    *   The model calculates scores using the exact Excel formulas.
    *   *National Score*: Weighted sum of criteria values divided by sum of weights, normalized to a percentage.
    *   *Site Score*: Weighted sum of site fit values divided by sum of levers, normalized to a percentage.
    *   *Final Blended Score*: $Score_{\text{National}} \times (1 - \text{Influence}) + Score_{\text{Site}} \times \text{Influence}$
3.  **Extending the Database**:
    *   The pathogen records are stored inside `app.js` under the `PATHOGEN_DATABASE` constant.
    *   To add a new pathogen or modify the default criteria scores (1 to 5), open [app.js](app.js) in a text editor and edit the JSON structure.

---

## 📂 File Structure

*   `index.html` - The structural markup for the portal.
*   `styles.css` - Custom styling system incorporating the official UKCEH brand guidelines (Teal and Bright Green).
*   `app.js` - Contains the static database and the calculation engine.
*   `pathogen_database.json` - Original parsed data in JSON format.
*   `4. Pathogen_priority_model_Dr Andrew Singer.xlsx` - The original Excel model spreadsheet.
*   `4a. Pathogen_priority_model_Guidance_Dr Andrew Singer.docx` - Original methodology guidance document.
*   `UKCEH logos/` - Directory containing official brand logos.
