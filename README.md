# Machine Learning-Based Application for Student Data Services

This project is a **full-stack intelligent student data management system** designed for academic departments, particularly the **Department of Computer Science**.  
It combines **Laravel**, **React Native**, **Firebase**, and **Machine Learning** to automate verification, billing, alumni tracking, and reporting processes.

---

## Overview

The system integrates multiple technologies to streamline departmental operations such as degree verification, billing, and reporting.  
Machine learning models and OCR are used for document and invoice processing, while Firebase ensures real-time synchronization and secure data handling.

---

## Key Features

- **Degree Verification System:**  
  Designed and deployed a secure, department-specific verification platform that validates student and alumni credentials.

- **Machine Learning-Based OCR Module:**  
  Extracts and processes billing and invoice data automatically using trained OCR and classification models.

- **Excel-to-Database Automation:**  
  Converts historical Excel records into structured database entries, reducing manual data entry and human error.

- **Mobile Application (React Native):**  
  Provides real-time access and updates, synchronized with the Laravel backend and Firebase.

- **Reporting and Analytics:**  
  Generates daily, monthly, and yearly insights for financial and administrative decision-making.

---

## Technology Stack

| Layer | Technologies |
|--------|---------------|
| **Frontend (Mobile)** | React Native |
| **Backend** | Laravel (PHP Framework) |
| **Database** | MySQL |
| **Machine Learning & OCR** | Python (Tesseract / OpenCV / scikit-learn) |
| **Cloud Services** | Firebase (Authentication, Notifications, Real-Time Sync) |
| **Automation** | Excel-to-Database Converter |
| **Version Control** | Git & GitHub |

---

## Project Structure

| Folder / File | Description |
|----------------|-------------|
| **/server/** | Laravel backend – API, authentication, degree verification logic, billing endpoints |
| **/client/** | React Native app – user interface, API integration, Firebase synchronization |
| **/ml_module/** | Machine learning models and OCR scripts for invoice/billing extraction |
| **/excel_automation/** | Python scripts for Excel to database conversion |
| **/reports/** | Reporting tools and analytics scripts |
| **/firebase/** | Firebase configuration and connection logic |
| **README.md** | Project documentation |

---

## Firebase Integration

- **Authentication:** Secure login for students, alumni, and administrators.  
- **Realtime Database / Firestore:** Instant synchronization of verification and billing records.  
- **Cloud Messaging:** Push notifications for billing updates or verification status.  

---

## Results and Impact

- Automated verification reduced manual processing time significantly.  
- Machine learning-based OCR achieved high accuracy in billing data extraction.  
- Excel automation eliminated repetitive work and improved data consistency.  
- The React Native app enabled staff and alumni to interact with the system from anywhere.  
- Data analytics provided actionable insights for yearly and monthly departmental reporting.

---

## Future Enhancements

- Integration of **deep learning** for more accurate OCR recognition.  
- Expansion to other departments and institutions.  
- Role-based access control and audit logging.  
- Interactive dashboards using Power BI or custom visualization libraries.

---




