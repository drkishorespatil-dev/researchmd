const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, PageBreak,
  ImageRun
} = require('docx');

const FIGDIR = path.join(__dirname, 'figures');

// usage: node build.js <out.docx> [contentModule] [tablesModule]
const contentMod = process.argv[3] || './content.js';
const tablesMod  = process.argv[4] || './tables.js';
const blocks = [].concat(require(contentMod), require(tablesMod));

const FONT = 'Times New Roman';
const RED = 'C00000';

function runs(text, opts = {}) {
  return [new TextRun({ text, font: FONT, size: opts.size || 24, bold: opts.bold,
    italics: opts.italics, color: opts.color })];
}

function cell(text, { header = false, width, align } = {}) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    shading: header ? { type: ShadingType.CLEAR, fill: 'EDEDED' } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [new Paragraph({
      alignment: align || AlignmentType.LEFT,
      spacing: { before: 20, after: 20 },
      children: runs(text, { size: 19, bold: header })
    })]
  });
}

function buildTable(b) {
  const total = b.widths.reduce((a, c) => a + c, 0);
  return new Table({
    columnWidths: b.widths,
    width: { size: total, type: WidthType.DXA },
    borders: {
      top:    { style: BorderStyle.SINGLE, size: 6, color: '000000' },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: '000000' },
      left:   { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: 'BFBFBF' },
      insideVertical:   { style: BorderStyle.NONE }
    },
    rows: b.rows.map((r, i) => new TableRow({
      tableHeader: i === 0,
      children: r.map((c, j) => cell(String(c), {
        header: i === 0, width: b.widths[j],
        align: (j > 0 && i > 0) ? AlignmentType.CENTER : AlignmentType.LEFT
      }))
    }))
  });
}

const children = [];

for (const b of blocks) {
  switch (b.t) {
    case 'pagebreak':
      children.push(new Paragraph({ children: [new PageBreak()] }));
      break;
    case 'title':
      children.push(new Paragraph({ spacing: { before: 200, after: 200 },
        children: runs(b.text, { bold: true, size: 26 }) }));
      break;
    case 'h1':
      children.push(new Paragraph({ heading: HeadingLevel.HEADING_1,
        spacing: { before: 320, after: 140 },
        children: runs(b.text, { bold: true, size: 26 }) }));
      break;
    case 'h2':
      children.push(new Paragraph({ heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 100 },
        children: runs(b.text, { bold: true, size: 24 }) }));
      break;
    case 'meta':
      children.push(new Paragraph({ spacing: { before: 160, after: 60 },
        children: runs(b.text, { bold: true }) }));
      break;
    case 'p':
      children.push(new Paragraph({ spacing: { after: 140, line: 360 },
        alignment: AlignmentType.JUSTIFIED, children: runs(b.text) }));
      break;
    case 'ref':
      children.push(new Paragraph({ spacing: { after: 60, line: 260 },
        indent: { left: 400, hanging: 400 }, children: runs(b.text, { size: 21 }) }));
      break;
    case 'tcap':
      children.push(new Paragraph({ spacing: { before: 300, after: 100 },
        children: runs(b.text, { bold: true, size: 22 }) }));
      break;
    case 'small':
      children.push(new Paragraph({ spacing: { before: 80, after: 200 },
        alignment: AlignmentType.JUSTIFIED, children: runs(b.text, { size: 19 }) }));
      break;
    case 'table':
      children.push(buildTable(b));
      break;
    case 'figure': {
      const p = path.join(FIGDIR, b.file);
      if (!fs.existsSync(p)) throw new Error('missing figure: ' + p);
      children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 280, after: 90 },
        children: [new ImageRun({
          type: 'png', data: fs.readFileSync(p),
          transformation: { width: b.w, height: b.h }
        })]
      }));
      break;
    }
    case 'fcap':
      children.push(new Paragraph({ spacing: { after: 260, line: 260 },
        alignment: AlignmentType.JUSTIFIED, children: runs(b.text, { size: 19 }) }));
      break;
    case 'red':
      children.push(new Paragraph({ spacing: { before: 300, after: 160 },
        children: runs(b.text, { bold: true, size: 28, color: RED }) }));
      break;
    case 'redbody':
      children.push(new Paragraph({ spacing: { after: 160, line: 340 },
        alignment: AlignmentType.JUSTIFIED,
        children: runs(b.text, { size: 23, color: RED }) }));
      break;
    case 'redsmall':
      children.push(new Paragraph({ spacing: { after: 200 },
        children: runs(b.text, { bold: true, size: 20, color: RED }) }));
      break;
    default:
      throw new Error('unknown block type: ' + b.t);
  }
}

const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: 24 } } } },
  sections: [{
    properties: { page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
    children
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(process.argv[2], buf);
  console.log('written:', process.argv[2], buf.length, 'bytes');
});
