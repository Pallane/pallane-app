import jsPDF from 'jspdf';
import 'jspdf-autotable';
import type { UserData } from 'jspdf-autotable';

interface QuoteRequest {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
  phone: string;
  message?: string;
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  products: Array<{
    id: string;
    name: string;
    quantity: number;
    type: string;
    price: string;
  }>;
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'pending':
      return 'En attente';
    case 'processing':
      return 'En cours';
    case 'completed':
      return 'Terminé';
    case 'rejected':
      return 'Rejeté';
    default:
      return status;
  }
};

export const generateQuotePDF = (quote: QuoteRequest) => {
  const doc = new jsPDF();
  
  // Configuration
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let yPosition = 40;

  // En-tête
  doc.setFillColor(11, 50, 81); // #0B3251
  doc.rect(0, 0, pageWidth, 25, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.text('PALLANE', margin, 16);

  // Numéro de devis et date
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(20);
  doc.text(`Devis #${quote.id.slice(0, 8)}`, margin, yPosition);
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Date: ${new Date(quote.created_at).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}`, margin, yPosition + 10);

  yPosition += 30;

  // Status
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Statut: ${getStatusLabel(quote.status)}`, margin, yPosition);
  
  yPosition += 20;

  // Informations client
  doc.setFillColor(245, 247, 250);
  doc.rect(margin, yPosition, pageWidth - (2 * margin), 50, 'F');
  
  doc.setFontSize(14);
  doc.setTextColor(11, 50, 81);
  doc.text('Informations client', margin + 5, yPosition + 10);
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text([
    `${quote.first_name} ${quote.last_name}`,
    quote.company_name,
    quote.email,
    quote.phone
  ], margin + 5, yPosition + 20);

  yPosition += 70;

  // Tableau des produits
  const tableHeaders = [['Produit', 'Type', 'Quantité', 'Prix']];
  const tableData = quote.products.map(product => [
    product.name,
    product.type,
    product.quantity.toString(),
    product.price
  ]);

  (doc as any).autoTable({
    head: tableHeaders,
    body: tableData,
    startY: yPosition,
    margin: { left: margin, right: margin },
    headStyles: {
      fillColor: [11, 50, 81],
      textColor: [255, 255, 255],
      fontSize: 10
    },
    bodyStyles: {
      fontSize: 10
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250]
    }
  });

  yPosition = (doc as any).lastAutoTable.finalY + 20;

  // Message (si présent)
  if (quote.message) {
    doc.setFillColor(245, 247, 250);
    doc.rect(margin, yPosition, pageWidth - (2 * margin), 40, 'F');
    
    doc.setFontSize(14);
    doc.setTextColor(11, 50, 81);
    doc.text('Message', margin + 5, yPosition + 10);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    const messageLines = doc.splitTextToSize(quote.message, pageWidth - (2 * margin) - 10);
    doc.text(messageLines, margin + 5, yPosition + 20);
  }

  // Pied de page
  const footerY = doc.internal.pageSize.getHeight() - 20;
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text('Pallane - Solutions d\'Intelligence Artificielle', pageWidth / 2, footerY, { align: 'center' });
  doc.text('123 Avenue des Champs-Élysées, 75008 Paris, France', pageWidth / 2, footerY + 5, { align: 'center' });
  doc.text('contact@pallane.com • +33 1 23 45 67 89', pageWidth / 2, footerY + 10, { align: 'center' });

  return doc;
};