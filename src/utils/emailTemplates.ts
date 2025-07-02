// Email templates for both student and admin notifications

export const studentEmailTemplate = (formData: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to ScholarSpace - Your Project Journey Begins!</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #0E0B1D;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #FF4DFF 0%, #4D79FF 50%, #FFA500 100%);
            padding: 2px;
            border-radius: 16px;
        }
        .content {
            background: #1a1625;
            border-radius: 14px;
            padding: 40px 30px;
            color: #ffffff;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, #FF4DFF 0%, #4D79FF 50%, #FFA500 100%);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: bold;
        }
        .title {
            font-size: 28px;
            font-weight: bold;
            background: linear-gradient(135deg, #FF4DFF 0%, #4D79FF 50%, #FFA500 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #a0a0a0;
            font-size: 16px;
        }
        .welcome-message {
            background: #2d2438;
            padding: 25px;
            border-radius: 12px;
            margin: 30px 0;
            border-left: 4px solid #4D79FF;
        }
        .project-details {
            background: #2d2438;
            padding: 25px;
            border-radius: 12px;
            margin: 20px 0;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #3a3a3a;
        }
        .detail-row:last-child {
            border-bottom: none;
        }
        .detail-label {
            font-weight: bold;
            color: #4D79FF;
        }
        .detail-value {
            color: #ffffff;
        }
        .next-steps {
            background: linear-gradient(135deg, #FF4DFF 0%, #4D79FF 100%);
            padding: 25px;
            border-radius: 12px;
            margin: 30px 0;
        }
        .step {
            display: flex;
            align-items: center;
            margin: 15px 0;
        }
        .step-number {
            background: rgba(255, 255, 255, 0.2);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-weight: bold;
        }
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #FF4DFF 0%, #4D79FF 100%);
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            margin: 10px 5px;
            text-align: center;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #3a3a3a;
            color: #a0a0a0;
        }
        .social-links {
            margin: 20px 0;
        }
        .social-link {
            display: inline-block;
            margin: 0 10px;
            color: #4D79FF;
            text-decoration: none;
        }
        .highlight {
            background: linear-gradient(135deg, #FF4DFF 0%, #FFA500 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <div class="header">
                <div class="logo">SS</div>
                <h1 class="title">ScholarSpace</h1>
                <p class="subtitle">Where Tomorrow's Coders Meet Ambition</p>
            </div>

            <div class="welcome-message">
                <h2 style="color: #4D79FF; margin-bottom: 15px;">🎉 Welcome to ScholarSpace, ${formData.name}!</h2>
                <p>Thank you for choosing ScholarSpace for your <span class="highlight">${formData.projectType}</span> project. We're excited to be part of your academic and professional journey!</p>
            </div>

            <div class="project-details">
                <h3 style="color: #FF4DFF; margin-bottom: 20px;">📋 Your Project Details</h3>
                <div class="detail-row">
                    <span class="detail-label">Name:</span>
                    <span class="detail-value">${formData.name}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">${formData.email}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span class="detail-value">${formData.phone}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Course:</span>
                    <span class="detail-value">${formData.course}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Academic Year:</span>
                    <span class="detail-value">${formData.year}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Project Type:</span>
                    <span class="detail-value">${formData.projectType}</span>
                </div>
                ${formData.message ? `
                <div class="detail-row">
                    <span class="detail-label">Requirements:</span>
                    <span class="detail-value">${formData.message}</span>
                </div>
                ` : ''}
            </div>

            <div class="next-steps">
                <h3 style="margin-bottom: 20px;">🚀 What Happens Next?</h3>
                <div class="step">
                    <div class="step-number">1</div>
                    <div>Our expert team will review your requirements within 24 hours</div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div>We'll send you a detailed project proposal and timeline</div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div>Schedule a free consultation to discuss your project in detail</div>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <div>Begin your project development with our expert guidance</div>
                </div>
            </div>

            <div style="text-align: center; margin: 30px 0;">
                <a href="https://calendly.com/akrix-ai" class="cta-button">📅 Schedule Free Consultation</a>
                <a href="mailto:akrix.ai@gmail.com" class="cta-button">✉️ Contact Us Directly</a>
            </div>

            <div style="background: #2d2438; padding: 20px; border-radius: 12px; margin: 30px 0;">
                <h3 style="color: #FFA500; margin-bottom: 15px;">💡 Why ScholarSpace?</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin: 10px 0;">✅ <strong>500+ Projects Delivered</strong> - Proven track record</li>
                    <li style="margin: 10px 0;">✅ <strong>Expert Mentorship</strong> - Industry professionals guide you</li>
                    <li style="margin: 10px 0;">✅ <strong>Latest Technologies</strong> - Stay ahead with cutting-edge tools</li>
                    <li style="margin: 10px 0;">✅ <strong>24/7 Support</strong> - We're here whenever you need us</li>
                    <li style="margin: 10px 0;">✅ <strong>100% Success Rate</strong> - Your success is guaranteed</li>
                </ul>
            </div>

            <div class="footer">
                <div class="social-links">
                    <a href="mailto:akrix.ai@gmail.com" class="social-link">📧 Email</a>
                    <a href="tel:+919819399470" class="social-link">📞 Phone</a>
                    <a href="#" class="social-link">💼 LinkedIn</a>
                    <a href="#" class="social-link">📸 Instagram</a>
                </div>
                <p><strong>ScholarSpace by Akrix.ai</strong></p>
                <p>📧 akrix.ai@gmail.com | 📞 +91 9819399470</p>
                <p style="margin-top: 15px; font-size: 12px;">
                    This email was sent because you submitted a project inquiry on our website. 
                    If you have any questions, please don't hesitate to contact us.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`;

export const adminEmailTemplate = (formData: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New ScholarSpace Project Inquiry</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #FF4DFF 0%, #4D79FF 50%, #FFA500 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .content {
            padding: 30px;
        }
        .alert {
            background: #e8f5e8;
            border-left: 4px solid #4CAF50;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 4px;
        }
        .student-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 15px;
        }
        .info-item {
            background: white;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #e0e0e0;
        }
        .info-label {
            font-weight: bold;
            color: #4D79FF;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .info-value {
            color: #333;
            font-size: 14px;
        }
        .message-section {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .priority-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
        }
        .priority-high {
            background: #ffebee;
            color: #c62828;
        }
        .priority-medium {
            background: #fff3e0;
            color: #ef6c00;
        }
        .priority-low {
            background: #e8f5e8;
            color: #2e7d32;
        }
        .action-buttons {
            text-align: center;
            margin: 30px 0;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            margin: 5px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            text-align: center;
        }
        .btn-primary {
            background: #4D79FF;
            color: white;
        }
        .btn-secondary {
            background: #6c757d;
            color: white;
        }
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            color: #666;
            font-size: 12px;
        }
        .timestamp {
            color: #666;
            font-size: 12px;
            text-align: right;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚨 New Project Inquiry</h1>
            <p>ScholarSpace - Student Registration Alert</p>
        </div>

        <div class="content">
            <div class="alert">
                <strong>🎯 Action Required:</strong> A new student has submitted a project inquiry and is waiting for your response.
            </div>

            <div class="student-info">
                <h3 style="color: #4D79FF; margin-bottom: 20px;">👨‍🎓 Student Information</h3>
                
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Full Name</div>
                        <div class="info-value">${formData.name}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Email Address</div>
                        <div class="info-value">${formData.email}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Phone Number</div>
                        <div class="info-value">${formData.phone}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Course/Field</div>
                        <div class="info-value">${formData.course}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Academic Year</div>
                        <div class="info-value">${formData.year}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Project Type</div>
                        <div class="info-value">
                            ${formData.projectType}
                            <span class="priority-badge ${
                              formData.projectType.includes('AI') || formData.projectType.includes('Custom') 
                                ? 'priority-high' 
                                : formData.projectType.includes('Full Stack') 
                                ? 'priority-medium' 
                                : 'priority-low'
                            }">
                                ${formData.projectType.includes('AI') || formData.projectType.includes('Custom') ? 'High Priority' : 'Standard'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            ${formData.message ? `
            <div class="message-section">
                <h4 style="color: #856404; margin-bottom: 10px;">📝 Project Requirements & Message</h4>
                <p style="color: #856404; font-style: italic;">"${formData.message}"</p>
            </div>
            ` : ''}

            <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h4 style="color: #1976d2; margin-bottom: 15px;">📊 Quick Analysis</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin: 8px 0;">🎯 <strong>Lead Quality:</strong> ${formData.phone && formData.course ? 'High' : 'Medium'} (Complete contact info provided)</li>
                    <li style="margin: 8px 0;">⏰ <strong>Urgency:</strong> ${formData.year.includes('Final') || formData.year.includes('4th') ? 'High' : 'Medium'} (Academic year: ${formData.year})</li>
                    <li style="margin: 8px 0;">💰 <strong>Project Value:</strong> ${formData.projectType.includes('Custom') || formData.projectType.includes('AI') ? 'Premium' : 'Standard'}</li>
                    <li style="margin: 8px 0;">📈 <strong>Conversion Potential:</strong> ${formData.message && formData.message.length > 50 ? 'High' : 'Medium'} (Detailed requirements)</li>
                </ul>
            </div>

            <div class="action-buttons">
                <a href="mailto:${formData.email}" class="btn btn-primary">📧 Reply to Student</a>
                <a href="tel:${formData.phone}" class="btn btn-secondary">📞 Call Student</a>
                <a href="https://calendly.com/akrix-ai" class="btn btn-secondary">📅 Schedule Meeting</a>
            </div>

            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h4 style="color: #856404; margin-bottom: 10px;">⚡ Recommended Next Steps</h4>
                <ol style="color: #856404; padding-left: 20px;">
                    <li>Respond within 2 hours for maximum conversion</li>
                    <li>Send personalized project proposal based on requirements</li>
                    <li>Schedule consultation call within 24 hours</li>
                    <li>Add to CRM system for follow-up tracking</li>
                </ol>
            </div>

            <div class="timestamp">
                📅 Inquiry received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </div>
        </div>

        <div class="footer">
            <p><strong>ScholarSpace Admin Panel</strong></p>
            <p>This is an automated notification from the ScholarSpace website contact form.</p>
            <p>For technical issues, contact the development team.</p>
        </div>
    </div>
</body>
</html>
`;