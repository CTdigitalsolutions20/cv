'use client';

export const downloadPdfDirectly = async (lang: string, onStart?: () => void, onEnd?: () => void) => {
  if (typeof window === 'undefined') return;

  try {
    if (onStart) onStart();

    // Dynamically import html2pdf.js on client side
    const html2pdfModule = await import('html2pdf.js');
    const html2pdf = html2pdfModule.default || html2pdfModule;

    // Find the print document element
    let target = document.getElementById('pdf-download-content');
    if (!target) {
      target = document.querySelector('.print-document') as HTMLElement;
    }

    if (!target) {
      console.error('Target PDF element not found');
      return;
    }

    // Clone element to render off-screen without interfering with layout
    const clone = target.cloneNode(true) as HTMLElement;
    clone.style.display = 'block';
    clone.style.visibility = 'visible';
    clone.style.position = 'absolute';
    clone.style.left = '-9999px';
    clone.style.top = '0px';
    clone.style.width = '210mm';
    clone.style.backgroundColor = '#030712';
    
    document.body.appendChild(clone);

    const langCode = (lang || 'ES').toUpperCase();
    const fileName = `CV_Alberto_Ledesma_Ollega_${langCode}.pdf`;

    const opt = {
      margin: 0,
      filename: fileName,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        backgroundColor: '#030712',
        logging: false,
        width: 794 // 210mm at 96 DPI
      },
      jsPDF: { 
        unit: 'mm' as const, 
        format: 'a4' as const, 
        orientation: 'portrait' as const 
      },
      pagebreak: { mode: ['css', 'legacy'] }
    };

    await html2pdf().set(opt).from(clone).save();

    // Clean up clone
    document.body.removeChild(clone);

  } catch (error) {
    console.error('Failed to generate PDF directly:', error);
    // Fallback: set document title and trigger print
    const originalTitle = document.title;
    document.title = `CV_Alberto_Ledesma_Ollega_${lang.toUpperCase()}`;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  } finally {
    if (onEnd) onEnd();
  }
};
