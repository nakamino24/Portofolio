import jsPDF from "jspdf";
import { cvData } from "../data/cvData";

export const generatePDF = () => {
  const doc = new jsPDF();
  let currentY = 20;
  const pageHeight = 279; // A4 page height in mm
  const margin = 14;
  const pageWidth = 196; // usable width (210 - 14)

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace = 15) => {
    if (currentY + requiredSpace > pageHeight - 20) {
      doc.addPage();
      currentY = 20;
    }
  };

  // Helper function to add section header
  const addSectionHeader = (title, spacing = 8) => {
    checkNewPage(15);
    currentY += spacing;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(title.toUpperCase(), margin, currentY);
    
    // Add underline
    const textWidth = doc.getTextWidth(title.toUpperCase());
    doc.line(margin, currentY + 1, margin + textWidth, currentY + 1);
    
    currentY += 6;
    doc.setFont(undefined, 'normal');
  };

  // Helper function to add wrapped text
  const addWrappedText = (text, fontSize = 10, indent = 0) => {
    doc.setFontSize(fontSize);
    const wrappedText = doc.splitTextToSize(text, pageWidth - indent);
    
    wrappedText.forEach(line => {
      checkNewPage();
      doc.text(line, margin + indent, currentY);
      currentY += fontSize * 0.4;
    });
  };

  // HEADER - Name and Title
  doc.setFontSize(20);
  doc.setFont(undefined, 'bold');
  doc.text(cvData.personalInfo.name, pageWidth / 2 + margin, currentY, { align: "center" });
  currentY += 8;
  
  doc.setFontSize(12);
  doc.setFont(undefined, 'normal');
  doc.text(cvData.personalInfo.title, pageWidth / 2 + margin, currentY, { align: "center" });
  currentY += 10;

  // CONTACT INFORMATION
  doc.setFontSize(10);
  const contactInfo = [
    `Email: ${cvData.personalInfo.email}`,
    `Phone: ${cvData.personalInfo.phone}`,
    `Location: ${cvData.personalInfo.location}`,
    `LinkedIn: ${cvData.personalInfo.linkedin}`,
    `GitHub: ${cvData.personalInfo.github}`
  ];
  
  // Split contact info into two columns
  for (let i = 0; i < contactInfo.length; i += 2) {
    checkNewPage();
    doc.text(contactInfo[i], margin, currentY);
    if (contactInfo[i + 1]) {
      doc.text(contactInfo[i + 1], pageWidth / 2 + margin, currentY);
    }
    currentY += 5;
  }

  // PROFESSIONAL PROFILE
  addSectionHeader('Professional Profile');
  addWrappedText(cvData.profile, 10);
  currentY += 3;

  // EDUCATION
  addSectionHeader('Education');
  cvData.education.forEach(edu => {
    checkNewPage(15);
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text(`${edu.degree}`, margin, currentY);
    doc.text(`GPA: ${edu.gpa}`, pageWidth + margin - 10, currentY, { align: "right" });
    currentY += 5;
    
    doc.setFont(undefined, 'normal');
    doc.setFontSize(10);
    doc.text(`${edu.institution}, ${edu.location}`, margin, currentY);
    doc.text(edu.period, pageWidth + margin - 10, currentY, { align: "right" });
    currentY += 6;
  });

  // PROFESSIONAL EXPERIENCE
  addSectionHeader('Professional Experience');
  cvData.experience.forEach((exp, index) => {
    checkNewPage(25);
    
    // Job title and company
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text(`${exp.title}`, margin, currentY);
    doc.text(exp.period, pageWidth + margin - 10, currentY, { align: "right" });
    currentY += 5;
    
    doc.setFont(undefined, 'normal');
    doc.text(`${exp.company}, ${exp.location}`, margin, currentY);
    currentY += 5;
    
    // Responsibilities
    doc.setFontSize(10);
    exp.responsibilities.forEach(resp => {
      checkNewPage(8);
      const bulletText = `• ${resp}`;
      const wrappedResp = doc.splitTextToSize(bulletText, pageWidth - 10);
      wrappedResp.forEach(line => {
        doc.text(line, margin + 5, currentY);
        currentY += 4;
      });
    });
    
    // Technologies (if space permits)
    if (exp.technologies && exp.technologies.length > 0) {
      checkNewPage(8);
      doc.setFontSize(9);
      doc.setFont(undefined, 'italic');
      const techText = `Technologies: ${exp.technologies.join(', ')}`;
      addWrappedText(techText, 9, 5);
      doc.setFont(undefined, 'normal');
    }
    
    currentY += 3;
  });

  // TECHNICAL SKILLS
  addSectionHeader('Technical Skills');
  cvData.technicalSkills.forEach(skillGroup => {
    checkNewPage(8);
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text(`${skillGroup.category}:`, margin, currentY);
    doc.setFont(undefined, 'normal');
    doc.text(skillGroup.skills.join(', '), margin + 45, currentY);
    currentY += 5;
  });

  // SOFT SKILLS
  currentY += 3;
  checkNewPage(10);
  doc.setFontSize(11);
  doc.setFont(undefined, 'bold');
  doc.text('SOFT SKILLS', margin, currentY);
  const textWidth = doc.getTextWidth('SOFT SKILLS');
  doc.line(margin, currentY + 1, margin + textWidth, currentY + 1);
  currentY += 6;
  
  doc.setFont(undefined, 'normal');
  doc.setFontSize(10);
  addWrappedText(cvData.softSkills.join(' • '), 10);
  currentY += 3;

  // CERTIFICATIONS
  addSectionHeader('Certifications');
  cvData.certifications.forEach((cert, index) => {
    checkNewPage(6);
    doc.setFontSize(10);
    doc.text(`• ${cert.title}`, margin, currentY);
    doc.text(cert.year, pageWidth + margin - 10, currentY, { align: "right" });
    currentY += 4;
    doc.setFontSize(9);
    doc.setFont(undefined, 'italic');
    doc.text(cert.issuer, margin + 5, currentY);
    doc.setFont(undefined, 'normal');
    currentY += 5;
  });

  // Generate timestamp for filename
  const timestamp = new Date().toISOString().slice(0, 10);
  doc.save(`CV-Muhammad-Quways-Al-Qarany-${timestamp}.pdf`);
};

