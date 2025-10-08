



import { deckContent } from './exportContent';

type TextParagraph = { text: string; options?: Record<string, unknown> };
type TableCell = { text?: string | TextParagraph[]; options?: Record<string, unknown> };
type TableRow = TableCell[];

interface PptxSlide {
  background?: Record<string, unknown>;
  addShape: (...args: any[]) => void;
  addText: (...args: any[]) => void;
  addTable: (...args: any[]) => void;
  addChart?: (...args: any[]) => void;
  addImage?: (...args: any[]) => void;
}

interface PptxGenJs {
  layout: string;
  ShapeType: Record<string, any>;
  AlignH: Record<string, any>;
  AlignV: Record<string, any>;
  ChartType: Record<string, any>;
  addSlide: (...args: any[]) => PptxSlide;
  writeFile: (options: { fileName: string }) => Promise<string>;
}

type PptxGenJsConstructor = new () => PptxGenJs;

declare global {
  interface Window {
    PptxGenJS?: PptxGenJsConstructor;
  }
}

let pptxLoader: Promise<PptxGenJsConstructor> | null = null;

// ScaleUp Brand Colors (from logo)
const COLORS = {
  primary: '0F4C5C',      // Dark Teal (main brand color)
  secondary: 'EAB308',    // Yellow/Gold (accent from logo)
  accent: 'F59E0B',       // Brighter gold for highlights
  white: 'FFFFFF',
  lightGray: 'F3F4F6',
  mediumGray: 'E5E7EB',
  darkGray: '6B7280',
  textDark: '1F2937',
  textLight: '9CA3AF',
  success: '10B981',
  warning: 'F97316',
  error: 'EF4444',
  bgLight: 'FAFBFC',
  tealLight: 'E0F2F7',
  yellowLight: 'FEF3C7'
} as const;

// Optimized font sizes for better readability and fit
const FONT_SIZES = {
  hero: 44,
  title: 28,
  subtitle: 16,
  heading: 22,
  subheading: 18,
  body: 14,
  bodySmall: 12,
  small: 10,
  tiny: 9
} as const;

// Optimized margins for better space utilization
const LAYOUT = {
  slideWidth: 10,
  slideHeight: 5.625,
  margin: {
    left: 0.4,
    right: 0.4,
    top: 0.7,
    bottom: 0.4
  },
  contentStart: 1.1,
  headerHeight: 0.65
} as const;

class PitchDeckPptExporter {
  constructor(private pptx: PptxGenJs) {
    this.pptx.layout = 'LAYOUT_16x9';
  }

  async generate(): Promise<void> {
    this.addCover();
    this.addExecutiveSummary();
    this.addProblemSlide();
    this.addSolutionSlide();
    this.addInsightSlide();
    this.addTractionSlide();
    this.addBusinessModelSlide();
    this.addUnitEconomicsSlide();
    this.addCompetitiveSlide();
    this.addRoadmapSlide();
    this.addTeamSlide();
    this.addFundingSlide();
    this.addContactSlide();

    const date = new Date().toISOString().split('T')[0];
    await this.pptx.writeFile({ fileName: `ScaleUp-Investor-Deck-${date}.pptx` });
  }

  private addCover() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.primary };
    
    // Top accent bar
    slide.addShape(this.pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: LAYOUT.slideWidth,
      h: 0.15,
      fill: { color: COLORS.secondary },
      line: { type: 'none' }
    });

    // Company name - larger and centered
    slide.addText(deckContent.company.name, {
      x: 1,
      y: 1.5,
      w: 8,
      h: 0.8,
      fontSize: FONT_SIZES.hero,
      color: COLORS.white,
      bold: true,
      align: 'center',
      fontFace: 'Arial'
    });

    // Tagline with yellow accent
    slide.addText(deckContent.company.tagline, {
      x: 1,
      y: 2.4,
      w: 8,
      h: 0.4,
      fontSize: FONT_SIZES.heading,
      color: COLORS.secondary,
      bold: true,
      align: 'center',
      fontFace: 'Arial'
    });

    // Value statement
    slide.addText(deckContent.company.valueStatement, {
      x: 1.5,
      y: 2.9,
      w: 7,
      h: 0.4,
      fontSize: FONT_SIZES.body,
      color: COLORS.white,
      align: 'center',
      fontFace: 'Arial'
    });

    // Metric cards - optimized spacing
    const cardWidth = 2.6;
    const cardSpacing = 0.25;
    const totalCardsWidth = (cardWidth * 3) + (cardSpacing * 2);
    const startX = (LAYOUT.slideWidth - totalCardsWidth) / 2;
    
    deckContent.company.metrics.forEach((metric, index) => {
      const x = startX + (index * (cardWidth + cardSpacing));
      
      slide.addShape(this.pptx.ShapeType.roundRect, {
        x,
        y: 3.6,
        w: cardWidth,
        h: 1.1,
        fill: { color: '0A3D4A' },
        line: { color: COLORS.secondary, width: 2 },
        rectRadius: 0.1
      });
      
      slide.addText(metric.value, {
        x,
        y: 3.7,
        w: cardWidth,
        h: 0.35,
        fontSize: 24,
        color: COLORS.secondary,
        bold: true,
        align: 'center',
        fontFace: 'Arial'
      });
      
      slide.addText(metric.label, {
        x,
        y: 4.05,
        w: cardWidth,
        h: 0.25,
        fontSize: 13,
        color: COLORS.white,
        bold: true,
        align: 'center',
        fontFace: 'Arial'
      });
      
      if (metric.detail) {
        slide.addText(metric.detail, {
          x: x + 0.1,
          y: 4.3,
          w: cardWidth - 0.2,
          h: 0.3,
          fontSize: 10,
          color: COLORS.mediumGray,
          align: 'center',
          fontFace: 'Arial'
        });
      }
    });

    // Footer
    slide.addText('Investor Pitch Deck • Pre-Seed Round • ₹4 Crore', {
      x: 1,
      y: 5.1,
      w: 8,
      fontSize: 11,
      color: COLORS.mediumGray,
      align: 'center',
      fontFace: 'Arial'
    });
  }

  private addExecutiveSummary() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, 'Executive Summary', 'The opportunity at a glance');
    
    const bullets = deckContent.execSummary.bullets;
    const contentWidth = LAYOUT.slideWidth - (LAYOUT.margin.left + LAYOUT.margin.right);
    const columnWidth = (contentWidth - 0.3) / 2;
    
    // Left column (first 3 items)
    bullets.slice(0, 3).forEach((item, index) => {
      const y = LAYOUT.contentStart + (index * 1.15);
      this.addBulletCard(slide, item.title, item.detail, LAYOUT.margin.left, y, columnWidth);
    });
    
    // Right column (last 3 items)
    bullets.slice(3, 6).forEach((item, index) => {
      const y = LAYOUT.contentStart + (index * 1.15);
      this.addBulletCard(slide, item.title, item.detail, LAYOUT.margin.left + columnWidth + 0.3, y, columnWidth);
    });

    // Key differentiator at bottom
    slide.addShape(this.pptx.ShapeType.rect, {
      x: LAYOUT.margin.left,
      y: 4.6,
      w: contentWidth,
      h: 0.7,
      fill: { color: COLORS.yellowLight },
      line: { color: COLORS.secondary, width: 2 }
    });
    
    slide.addText([
      { text: 'Our Differentiator: ', options: { fontSize: FONT_SIZES.body, color: COLORS.textDark, bold: true, fontFace: 'Arial' } },
      { text: deckContent.execSummary.differentiator, options: { fontSize: FONT_SIZES.body, color: COLORS.textDark, fontFace: 'Arial' } }
    ] as TextParagraph[], {
      x: LAYOUT.margin.left + 0.15,
      y: 4.7,
      w: contentWidth - 0.3,
      h: 0.5,
      valign: 'middle'
    });
  }

  private addBulletCard(slide: PptxSlide, title: string, detail: string, x: number, y: number, width: number) {
    slide.addShape(this.pptx.ShapeType.rect, {
      x,
      y,
      w: width,
      h: 1,
      fill: { color: COLORS.bgLight },
      line: { color: COLORS.mediumGray, width: 1 }
    });
    
    // Title bar
    slide.addShape(this.pptx.ShapeType.rect, {
      x,
      y,
      w: width,
      h: 0.3,
      fill: { color: COLORS.primary },
      line: { type: 'none' }
    });
    
    slide.addText(title, {
      x: x + 0.1,
      y: y + 0.05,
      w: width - 0.2,
      h: 0.2,
      fontSize: FONT_SIZES.subheading,
      color: COLORS.secondary,
      bold: true,
      fontFace: 'Arial'
    });
    
    slide.addText(detail, {
      x: x + 0.1,
      y: y + 0.38,
      w: width - 0.2,
      h: 0.55,
      fontSize: FONT_SIZES.bodySmall,
      color: COLORS.textDark,
      fontFace: 'Arial',
      valign: 'top'
    });
  }

  private addProblemSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, 'The Problem', 'Why EdTech 1.0 failed and the market gap we address');

    // Problem stats in a 2x2 grid
    deckContent.problem.stats.forEach((stat, index) => {
      const col = index % 2;
      const row = Math.floor(index / 2);
      const cardWidth = 4.5;
      const cardHeight = 0.85;
      const x = LAYOUT.margin.left + (col * (cardWidth + 0.3));
      const y = LAYOUT.contentStart + (row * (cardHeight + 0.15));
      
      slide.addShape(this.pptx.ShapeType.rect, {
        x,
        y,
        w: cardWidth,
        h: cardHeight,
        fill: { color: COLORS.bgLight },
        line: { color: COLORS.warning, width: 2 }
      });
      
      // Large stat value
      slide.addText(stat.value, {
        x: x + 0.1,
        y: y + 0.12,
        w: 1.3,
        h: 0.6,
        fontSize: 26,
        color: COLORS.warning,
        bold: true,
        align: 'center',
        valign: 'middle',
        fontFace: 'Arial'
      });
      
      // Label and detail
      slide.addText([
        { text: stat.label, options: { fontSize: FONT_SIZES.body, color: COLORS.textDark, bold: true, fontFace: 'Arial', breakLine: true } },
        { text: stat.detail, options: { fontSize: FONT_SIZES.small, color: COLORS.darkGray, fontFace: 'Arial' } }
      ] as TextParagraph[], {
        x: x + 1.5,
        y: y + 0.15,
        w: cardWidth - 1.7,
        h: 0.6,
        valign: 'middle'
      });
    });

    // Behavior shift insights
    slide.addShape(this.pptx.ShapeType.rect, {
      x: LAYOUT.margin.left,
      y: 3.2,
      w: LAYOUT.slideWidth - (LAYOUT.margin.left + LAYOUT.margin.right),
      h: 1.05,
      fill: { color: COLORS.tealLight },
      line: { color: COLORS.primary, width: 2 }
    });
    
    slide.addText('Market Behavior Shifts:', {
      x: LAYOUT.margin.left + 0.15,
      y: 3.3,
      w: 9,
      fontSize: FONT_SIZES.heading,
      color: COLORS.primary,
      bold: true,
      fontFace: 'Arial'
    });
    
    const behaviorText = deckContent.problem.behaviorShiftPoints.map((point, idx) => 
      `${idx + 1}. ${point}`
    ).join('\n\n');
    
    slide.addText(behaviorText, {
      x: LAYOUT.margin.left + 0.15,
      y: 3.65,
      w: 9,
      h: 0.5,
      fontSize: FONT_SIZES.bodySmall,
      color: COLORS.textDark,
      fontFace: 'Arial'
    });

    // EdTech failures - compact table
    slide.addText('The ₹28B EdTech Meltdown:', {
      x: LAYOUT.margin.left,
      y: 4.4,
      w: 9.2,
      fontSize: FONT_SIZES.body,
      color: COLORS.error,
      bold: true,
      fontFace: 'Arial'
    });
    
    const failureTableData = this.buildCompactTable(
      deckContent.problem.failureTable,
      COLORS.error
    );
    
    slide.addTable(failureTableData, {
      x: LAYOUT.margin.left,
      y: 4.65,
      w: 9.2,
      h: 0.55,
      fontSize: FONT_SIZES.tiny,
      border: { pt: 1, color: COLORS.mediumGray },
      fontFace: 'Arial'
    });
  }

  private addSolutionSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, 'Our Solution: The Learning OS', 'Four integrated modules that compound value');

    const modules = deckContent.solution.modules;
    const cardWidth = 4.5;
    const cardHeight = 1.55;
    
    modules.forEach((module, index) => {
      const col = index % 2;
      const row = Math.floor(index / 2);
      const x = LAYOUT.margin.left + (col * (cardWidth + 0.3));
      const y = LAYOUT.contentStart + (row * (cardHeight + 0.15));
      
      // Module card with gradient effect
      slide.addShape(this.pptx.ShapeType.rect, {
        x,
        y,
        w: cardWidth,
        h: cardHeight,
        fill: { color: index % 2 === 0 ? COLORS.tealLight : COLORS.yellowLight },
        line: { color: index % 2 === 0 ? COLORS.primary : COLORS.secondary, width: 2 }
      });

      // Module number badge
      slide.addShape(this.pptx.ShapeType.ellipse, {
        x: x + 0.1,
        y: y + 0.1,
        w: 0.4,
        h: 0.4,
        fill: { color: COLORS.primary },
        line: { type: 'none' }
      });
      
      slide.addText(`${index + 1}`, {
        x: x + 0.1,
        y: y + 0.1,
        w: 0.4,
        h: 0.4,
        fontSize: FONT_SIZES.subheading,
        color: COLORS.secondary,
        bold: true,
        align: 'center',
        valign: 'middle',
        fontFace: 'Arial'
      });

      // Module name
      slide.addText(module.name, {
        x: x + 0.6,
        y: y + 0.15,
        w: cardWidth - 0.7,
        h: 0.3,
        fontSize: FONT_SIZES.subheading,
        color: COLORS.primary,
        bold: true,
        fontFace: 'Arial'
      });

      // Outcome arrow
      slide.addText(`→ ${module.outcome}`, {
        x: x + 0.1,
        y: y + 0.55,
        w: cardWidth - 0.2,
        h: 0.25,
        fontSize: FONT_SIZES.body,
        color: COLORS.secondary,
        bold: true,
        fontFace: 'Arial'
      });

      // Key bullets (condensed to fit)
      const condensedBullets = module.bullets.slice(0, 2).map(b => {
        if (b.length > 55) return b.substring(0, 52) + '...';
        return b;
      });
      
      slide.addText(
        condensedBullets.map(bullet => ({
          text: `• ${bullet}`,
          options: { fontSize: FONT_SIZES.small, color: COLORS.textDark, fontFace: 'Arial' }
        })) as TextParagraph[],
        {
          x: x + 0.1,
          y: y + 0.85,
          w: cardWidth - 0.2,
          h: 0.6,
          lineSpacing: 14
        }
      );
    });

    // Bottom insight
    slide.addShape(this.pptx.ShapeType.rect, {
      x: LAYOUT.margin.left,
      y: 4.75,
      w: 9.2,
      h: 0.6,
      fill: { color: COLORS.primary },
      line: { type: 'none' }
    });
    
    slide.addText(deckContent.solution.closing, {
      x: LAYOUT.margin.left + 0.2,
      y: 4.85,
      w: 8.8,
      fontSize: FONT_SIZES.body,
      color: COLORS.secondary,
      bold: true,
      align: 'center',
      valign: 'middle',
      fontFace: 'Arial'
    });
  }

  private addInsightSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, 'Strategic Insight', 'Why our approach creates lasting defensibility');

    // Why it works section
    slide.addShape(this.pptx.ShapeType.rect, {
      x: LAYOUT.margin.left,
      y: LAYOUT.contentStart,
      w: 9.2,
      h: 1.2,
      fill: { color: COLORS.yellowLight },
      line: { color: COLORS.secondary, width: 2 }
    });
    
    slide.addText('Why Our Model Works:', {
      x: LAYOUT.margin.left + 0.15,
      y: LAYOUT.contentStart + 0.1,
      w: 8.9,
      fontSize: FONT_SIZES.heading,
      color: COLORS.primary,
      bold: true,
      fontFace: 'Arial'
    });
    
    const whyText = deckContent.insight.whyItWorks.map((point, idx) => 
      `${idx + 1}. ${point}`
    ).join('\n\n');
    
    slide.addText(whyText, {
      x: LAYOUT.margin.left + 0.15,
      y: LAYOUT.contentStart + 0.45,
      w: 8.9,
      h: 0.65,
      fontSize: FONT_SIZES.bodySmall,
      color: COLORS.textDark,
      fontFace: 'Arial',
      lineSpacing: 16
    });

    // OS Layers
    const layers = deckContent.insight.osLayers;
    layers.forEach((layer, index) => {
      const y = 2.5 + (index * 0.9);
      
      slide.addShape(this.pptx.ShapeType.rect, {
        x: LAYOUT.margin.left,
        y,
        w: 9.2,
        h: 0.8,
        fill: { color: index % 2 === 0 ? COLORS.bgLight : COLORS.tealLight },
        line: { color: COLORS.mediumGray, width: 1 }
      });
      
      slide.addText([
        { text: `${layer.name}: `, options: { fontSize: FONT_SIZES.body, color: COLORS.primary, bold: true, fontFace: 'Arial' } },
        { text: layer.today, options: { fontSize: FONT_SIZES.bodySmall, color: COLORS.textDark, fontFace: 'Arial', breakLine: true } },
        { text: `→ ${layer.tomorrow}`, options: { fontSize: FONT_SIZES.small, color: COLORS.secondary, italic: true, fontFace: 'Arial' } }
      ] as TextParagraph[], {
        x: LAYOUT.margin.left + 0.15,
        y: y + 0.1,
        w: 9,
        h: 0.6
      });
    });
  }

  private addTractionSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, 'Traction & Validation', "Proven model at India's top engineering campus");

    // Key metrics cards
    const metrics = deckContent.traction.metrics;
    const cardWidth = 2.2;
    const spacing = 0.15;
    
    metrics.forEach((metric, index) => {
      const x = LAYOUT.margin.left + (index * (cardWidth + spacing));
      
      slide.addShape(this.pptx.ShapeType.roundRect, {
        x,
        y: LAYOUT.contentStart,
        w: cardWidth,
        h: 0.9,
        fill: { color: COLORS.primary },
        line: { color: COLORS.secondary, width: 2 },
        rectRadius: 0.08
      });
      
      slide.addText(metric.value, {
        x,
        y: LAYOUT.contentStart + 0.15,
        w: cardWidth,
        fontSize: 22,
        color: COLORS.secondary,
        bold: true,
        align: 'center',
        fontFace: 'Arial'
      });
      
      slide.addText(metric.label, {
        x,
        y: LAYOUT.contentStart + 0.45,
        w: cardWidth,
        fontSize: FONT_SIZES.bodySmall,
        color: COLORS.white,
        bold: true,
        align: 'center',
        fontFace: 'Arial'
      });
      
      if (metric.detail) {
        slide.addText(metric.detail, {
          x: x + 0.05,
          y: LAYOUT.contentStart + 0.65,
          w: cardWidth - 0.1,
          fontSize: FONT_SIZES.tiny,
          color: COLORS.mediumGray,
          align: 'center',
          fontFace: 'Arial'
        });
      }
    });

    // Retention comparison chart
    if (slide.addChart) {
      const retentionData = deckContent.traction.retentionTable.rows.map(row => ({
        platform: row[0],
        retention: parseInt(row[1].replace('%', ''))
      }));

      slide.addChart(this.pptx.ChartType.bar, [{
        name: 'Month-1 Retention',
        labels: retentionData.map(d => d.platform),
        values: retentionData.map(d => d.retention)
      }], {
        x: LAYOUT.margin.left,
        y: 2.3,
        w: 4.5,
        h: 2.1,
        chartColors: [COLORS.secondary],
        showLegend: false,
        dataLabelColor: COLORS.white,
        dataLabelFontSize: 12,
        showValue: true,
        valAxisMaxVal: 100,
        valAxisTitle: 'Retention %',
        titleFontSize: FONT_SIZES.body,
        catAxisLabelFontSize: FONT_SIZES.small,
        valAxisLabelFontSize: FONT_SIZES.small,
        fontFace: 'Arial'
      });
    }

    // Growth trajectory
    if (slide.addChart) {
      const growthData = deckContent.traction.growthPlan.rows.map(row => ({
        quarter: row[0],
        users: parseInt(row[1].replace(/,/g, ''))
      }));

      slide.addChart(this.pptx.ChartType.line, [{
        name: 'User Growth',
        labels: growthData.map(d => d.quarter),
        values: growthData.map(d => d.users)
      }], {
        x: 5.1,
        y: 2.3,
        w: 4.5,
        h: 2.1,
        chartColors: [COLORS.primary],
        showLegend: false,
        dataLabelColor: COLORS.textDark,
        dataLabelFontSize: 11,
        showValue: true,
        lineSize: 3,
        lineDataSymbolSize: 8,
        valAxisTitle: 'Total Users',
        titleFontSize: FONT_SIZES.body,
        catAxisLabelFontSize: FONT_SIZES.small,
        valAxisLabelFontSize: FONT_SIZES.small,
        fontFace: 'Arial'
      });
    }

    // Validation summary
    slide.addText(deckContent.traction.summary, {
      x: LAYOUT.margin.left,
      y: 4.6,
      w: 9.2,
      fontSize: FONT_SIZES.body,
      color: COLORS.textDark,
      italic: true,
      align: 'center',
      fontFace: 'Arial'
    });
  }

  private addBusinessModelSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, 'Business Model', '5 revenue streams with SaaS-like margins');

    // Revenue streams
    const streams = deckContent.businessModel.streams;
    streams.forEach((stream, index) => {
      const y = LAYOUT.contentStart + (index * 0.7);
      const barWidth = (parseFloat(stream.share) / 100) * 4;
      
      // Revenue bar
      slide.addShape(this.pptx.ShapeType.rect, {
        x: LAYOUT.margin.left,
        y,
        w: barWidth,
        h: 0.6,
        fill: { color: index % 2 === 0 ? COLORS.primary : COLORS.secondary },
        line: { type: 'none' }
      });
      
      // Stream name and percentage
      slide.addText([
        { text: `${stream.name} `, options: { fontSize: FONT_SIZES.body, color: COLORS.textDark, bold: true, fontFace: 'Arial' } },
        { text: `(${stream.share})`, options: { fontSize: FONT_SIZES.bodySmall, color: COLORS.secondary, bold: true, fontFace: 'Arial' } }
      ] as TextParagraph[], {
        x: LAYOUT.margin.left + barWidth + 0.1,
        y: y + 0.05,
        w: 4.8 - barWidth,
        h: 0.2
      });
      
      // Details
      slide.addText(stream.details, {
        x: LAYOUT.margin.left + barWidth + 0.1,
        y: y + 0.3,
        w: 4.8 - barWidth,
        h: 0.25,
        fontSize: FONT_SIZES.small,
        color: COLORS.darkGray,
        fontFace: 'Arial'
      });
    });

    // Revenue projection chart
    if (slide.addChart) {
      const revenueData = deckContent.businessModel.revenueTable.rows.map(row => ({
        quarter: row[0],
        mrr: parseInt(row[3].replace('₹', '').replace('L', ''))
      }));

      slide.addChart(this.pptx.ChartType.area, [{
        name: 'MRR (₹ Lakhs)',
        labels: revenueData.map(d => d.quarter),
        values: revenueData.map(d => d.mrr)
      }], {
        x: 5.1,
        y: LAYOUT.contentStart,
        w: 4.5,
        h: 3.5,
        chartColors: [COLORS.success],
        showLegend: true,
        legendPos: 't',
        dataLabelColor: COLORS.textDark,
        dataLabelFontSize: 12,
        showValue: true,
        valAxisTitle: 'Monthly Recurring Revenue',
        titleFontSize: FONT_SIZES.body,
        catAxisLabelFontSize: FONT_SIZES.small,
        valAxisLabelFontSize: FONT_SIZES.small,
        fontFace: 'Arial'
      });
    }

    // Business model summary
    slide.addShape(this.pptx.ShapeType.rect, {
      x: LAYOUT.margin.left,
      y: 4.65,
      w: 4.7,
      h: 0.6,
      fill: { color: COLORS.yellowLight },
      line: { color: COLORS.secondary, width: 1 }
    });
    
    slide.addText(deckContent.businessModel.overview, {
      x: LAYOUT.margin.left + 0.1,
      y: 4.75,
      w: 4.5,
      fontSize: FONT_SIZES.small,
      color: COLORS.textDark,
      fontFace: 'Arial'
    });
  }

  private addUnitEconomicsSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, 'Unit Economics', 'World-class efficiency with 60:1 LTV:CAC');

    // Key metrics display
    const mainMetrics = deckContent.unitEconomics.metrics;
    mainMetrics.forEach((metric, index) => {
      const cardWidth = 2.9;
      const x = LAYOUT.margin.left + (index * (cardWidth + 0.15));
      
      slide.addShape(this.pptx.ShapeType.roundRect, {
        x,
        y: LAYOUT.contentStart,
        w: cardWidth,
        h: 1,
        fill: { color: index === 2 ? COLORS.yellowLight : COLORS.tealLight },
        line: { color: index === 2 ? COLORS.secondary : COLORS.primary, width: 2 },
        rectRadius: 0.08
      });
      
      slide.addText(metric.label, {
        x,
        y: LAYOUT.contentStart + 0.1,
        w: cardWidth,
        fontSize: FONT_SIZES.body,
        color: COLORS.textDark,
        bold: true,
        align: 'center',
        fontFace: 'Arial'
      });
      
      slide.addText(metric.value, {
        x,
        y: LAYOUT.contentStart + 0.35,
        w: cardWidth,
        fontSize: 26,
        color: index === 2 ? COLORS.secondary : COLORS.primary,
        bold: true,
        align: 'center',
        fontFace: 'Arial'
      });
      
      slide.addText(metric.detail, {
        x: x + 0.1,
        y: LAYOUT.contentStart + 0.7,
        w: cardWidth - 0.2,
        fontSize: FONT_SIZES.small,
        color: COLORS.darkGray,
        align: 'center',
        fontFace: 'Arial'
      });
    });

    // CAC breakdown
    slide.addText('CAC Breakdown:', {
      x: LAYOUT.margin.left,
      y: 2.3,
      w: 4.5,
      fontSize: FONT_SIZES.subheading,
      color: COLORS.primary,
      bold: true,
      fontFace: 'Arial'
    });
    
    const cacTableData = this.buildCompactTable(
      deckContent.unitEconomics.cacTable,
      COLORS.primary
    );
    
    slide.addTable(cacTableData, {
      x: LAYOUT.margin.left,
      y: 2.6,
      w: 4.5,
      h: 1.5,
      fontSize: FONT_SIZES.small,
      border: { pt: 1, color: COLORS.mediumGray },
      fontFace: 'Arial'
    });

    // LTV progression
    slide.addText('LTV Build-up:', {
      x: 5.1,
      y: 2.3,
      w: 4.5,
      fontSize: FONT_SIZES.subheading,
      color: COLORS.primary,
      bold: true,
      fontFace: 'Arial'
    });
    
    const ltvTableData = this.buildCompactTable(
      deckContent.unitEconomics.ltvTable,
      COLORS.success
    );
    
    slide.addTable(ltvTableData, {
      x: 5.1,
      y: 2.6,
      w: 4.5,
      h: 1.5,
      fontSize: FONT_SIZES.small,
      border: { pt: 1, color: COLORS.mediumGray },
      fontFace: 'Arial'
    });

    // Payback highlight
    slide.addShape(this.pptx.ShapeType.rect, {
      x: LAYOUT.margin.left,
      y: 4.6,
      w: 9.2,
      h: 0.65,
      fill: { color: COLORS.primary },
      line: { type: 'none' }
    });
    
    slide.addText([
      { text: 'Payback Period: ', options: { fontSize: FONT_SIZES.heading, color: COLORS.white, bold: true, fontFace: 'Arial' } },
      { text: '<1 Month ', options: { fontSize: FONT_SIZES.heading, color: COLORS.secondary, bold: true, fontFace: 'Arial' } },
      { text: '| Best-in-class efficiency', options: { fontSize: FONT_SIZES.body, color: COLORS.mediumGray, fontFace: 'Arial' } }
    ] as TextParagraph[], {
      x: LAYOUT.margin.left + 0.2,
      y: 4.75,
      w: 8.8,
      h: 0.4,
      align: 'center',
      valign: 'middle'
    });
  }

  private addCompetitiveSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, 'Competitive Landscape', 'Only platform combining all 4 layers');

    // Comparison matrix
    const compTable = deckContent.competitive.comparisonTable;
    const tableData = this.buildComparisonTable(compTable);
    
    slide.addTable(tableData, {
      x: LAYOUT.margin.left,
      y: LAYOUT.contentStart,
      w: 9.2,
      h: 2.2,
      fontSize: FONT_SIZES.bodySmall,
      border: { pt: 1, color: COLORS.mediumGray },
      fontFace: 'Arial',
      align: 'center'
    });

    // Our moats
    slide.addText('Our Competitive Moats:', {
      x: LAYOUT.margin.left,
      y: 3.5,
      w: 9.2,
      fontSize: FONT_SIZES.heading,
      color: COLORS.primary,
      bold: true,
      fontFace: 'Arial'
    });
    
    deckContent.competitive.moatBullets.forEach((moat, index) => {
      const y = 3.85 + (index * 0.35);
      
      slide.addText([
        { text: `${index + 1}. `, options: { fontSize: FONT_SIZES.body, color: COLORS.secondary, bold: true, fontFace: 'Arial' } },
        { text: moat, options: { fontSize: FONT_SIZES.body, color: COLORS.textDark, fontFace: 'Arial' } }
      ] as TextParagraph[], {
        x: LAYOUT.margin.left + 0.2,
        y,
        w: 8.8,
        h: 0.3
      });
    });

    // Category creation message
    slide.addShape(this.pptx.ShapeType.rect, {
      x: LAYOUT.margin.left,
      y: 4.95,
      w: 9.2,
      h: 0.5,
      fill: { color: COLORS.yellowLight },
      line: { color: COLORS.secondary, width: 2 }
    });
    
    slide.addText(deckContent.competitive.summary, {
      x: LAYOUT.margin.left + 0.2,
      y: 5.05,
      w: 8.8,
      fontSize: FONT_SIZES.body,
      color: COLORS.primary,
      bold: true,
      align: 'center',
      valign: 'middle',
      fontFace: 'Arial'
    });
  }

  private addRoadmapSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, '12-Month Roadmap', 'From 350 to 150K users');

    const milestones = deckContent.roadmap.timeline;
    const cardWidth = 2.2;
    const spacing = 0.15;
    
    milestones.forEach((milestone, index) => {
      const x = LAYOUT.margin.left + (index * (cardWidth + spacing));
      
      // Milestone card
      slide.addShape(this.pptx.ShapeType.roundRect, {
        x,
        y: LAYOUT.contentStart,
        w: cardWidth,
        h: 3.3,
        fill: { color: index % 2 === 0 ? COLORS.tealLight : COLORS.yellowLight },
        line: { color: index % 2 === 0 ? COLORS.primary : COLORS.secondary, width: 2 },
        rectRadius: 0.08
      });

      // Quarter badge
      slide.addShape(this.pptx.ShapeType.rect, {
        x,
        y: LAYOUT.contentStart,
        w: cardWidth,
        h: 0.35,
        fill: { color: index % 2 === 0 ? COLORS.primary : COLORS.secondary },
        line: { type: 'none' }
      });
      
      slide.addText(milestone.quarter, {
        x,
        y: LAYOUT.contentStart + 0.05,
        w: cardWidth,
        fontSize: FONT_SIZES.body,
        color: COLORS.white,
        bold: true,
        align: 'center',
        fontFace: 'Arial'
      });

      // Theme
      slide.addText(milestone.theme, {
        x: x + 0.1,
        y: LAYOUT.contentStart + 0.45,
        w: cardWidth - 0.2,
        fontSize: FONT_SIZES.bodySmall,
        color: COLORS.textDark,
        bold: true,
        align: 'center',
        fontFace: 'Arial'
      });

      // Metrics
      const metricsText = [
        `👥 ${milestone.users}`,
        `📈 ${milestone.retention}`,
        `💰 ${milestone.revenue}`
      ].join('\n');
      
      slide.addText(metricsText, {
        x: x + 0.1,
        y: LAYOUT.contentStart + 0.75,
        w: cardWidth - 0.2,
        fontSize: FONT_SIZES.small,
        color: COLORS.textDark,
        align: 'center',
        fontFace: 'Arial',
        lineSpacing: 18
      });

      // Divider
      slide.addShape(this.pptx.ShapeType.line, {
        x: x + 0.2,
        y: LAYOUT.contentStart + 1.5,
        w: cardWidth - 0.4,
        h: 0,
        line: { color: COLORS.mediumGray, width: 1 }
      });

      // Highlights (max 3, condensed)
      const condensedHighlights = milestone.highlights.slice(0, 3).map(h => {
        if (h.length > 28) return h.substring(0, 25) + '...';
        return h;
      });
      
      slide.addText(
        condensedHighlights.map(h => ({
          text: `• ${h}`,
          options: { fontSize: FONT_SIZES.tiny, color: COLORS.textDark, fontFace: 'Arial' }
        })) as TextParagraph[],
        {
          x: x + 0.1,
          y: LAYOUT.contentStart + 1.65,
          w: cardWidth - 0.2,
          h: 1.2,
          lineSpacing: 12
        }
      );

      // Funding note
      if (milestone.fundingNote) {
        slide.addShape(this.pptx.ShapeType.rect, {
          x: x + 0.1,
          y: LAYOUT.contentStart + 2.95,
          w: cardWidth - 0.2,
          h: 0.25,
          fill: { color: COLORS.warning },
          line: { type: 'none' }
        });
        
        slide.addText(milestone.fundingNote, {
          x: x + 0.1,
          y: LAYOUT.contentStart + 2.98,
          w: cardWidth - 0.2,
          fontSize: FONT_SIZES.tiny,
          color: COLORS.white,
          bold: true,
          align: 'center',
          fontFace: 'Arial'
        });
      }
    });

    // Timeline arrow
    slide.addShape(this.pptx.ShapeType.line, {
      x: LAYOUT.margin.left,
      y: 4.75,
      w: 9.2,
      h: 0,
      line: { color: COLORS.primary, width: 4, dashType: 'solid', endArrowType: 'arrow' }
    });
    
    slide.addText('Growth Trajectory →', {
      x: LAYOUT.margin.left,
      y: 4.85,
      w: 9.2,
      fontSize: FONT_SIZES.body,
      color: COLORS.primary,
      bold: true,
      align: 'center',
      fontFace: 'Arial'
    });
  }

  private addTeamSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, 'Team & Advisors', 'Operators with deep EdTech & growth expertise');

    // Founders
    const founders = deckContent.team.founders;
    founders.forEach((founder, index) => {
      const y = LAYOUT.contentStart + (index * 1.65);
      
      slide.addShape(this.pptx.ShapeType.roundRect, {
        x: LAYOUT.margin.left,
        y,
        w: 5.5,
        h: 1.5,
        fill: { color: COLORS.tealLight },
        line: { color: COLORS.primary, width: 2 },
        rectRadius: 0.1
      });

      // Name and role
      slide.addText([
        { text: founder.name, options: { fontSize: FONT_SIZES.heading, color: COLORS.primary, bold: true, fontFace: 'Arial', breakLine: true } },
        { text: `${founder.role} • ${founder.focus}`, options: { fontSize: FONT_SIZES.body, color: COLORS.secondary, bold: true, fontFace: 'Arial' } }
      ] as TextParagraph[], {
        x: LAYOUT.margin.left + 0.2,
        y: y + 0.15,
        w: 5.1,
        h: 0.5
      });

      // Achievements (condensed to 2)
      const condensedAchievements = founder.achievements.slice(0, 2).map(a => {
        if (a.length > 60) return a.substring(0, 57) + '...';
        return a;
      });
      
      slide.addText(
        condensedAchievements.map(achievement => ({
          text: `• ${achievement}`,
          options: { fontSize: FONT_SIZES.small, color: COLORS.textDark, fontFace: 'Arial' }
        })) as TextParagraph[],
        {
          x: LAYOUT.margin.left + 0.2,
          y: y + 0.7,
          w: 5.1,
          h: 0.7,
          lineSpacing: 14
        }
      );
    });

    // Advisors section
    slide.addShape(this.pptx.ShapeType.rect, {
      x: 6.1,
      y: LAYOUT.contentStart,
      w: 3.5,
      h: 3.5,
      fill: { color: COLORS.yellowLight },
      line: { color: COLORS.secondary, width: 2 }
    });
    
    slide.addText('Key Advisors', {
      x: 6.2,
      y: LAYOUT.contentStart + 0.15,
      w: 3.3,
      fontSize: FONT_SIZES.heading,
      color: COLORS.primary,
      bold: true,
      fontFace: 'Arial'
    });
    
    slide.addText(
      deckContent.team.advisors.map(advisor => ({
        text: `• ${advisor}`,
        options: { fontSize: FONT_SIZES.bodySmall, color: COLORS.textDark, fontFace: 'Arial' }
      })) as TextParagraph[],
      {
        x: 6.3,
        y: LAYOUT.contentStart + 0.6,
        w: 3.1,
        h: 2.7,
        lineSpacing: 20
      }
    );
  }

  private addFundingSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.white };
    this.addHeader(slide, 'The Ask: ₹4 Crore Pre-Seed', 'Capital efficiency meets explosive growth');

    // Use of funds pie chart
    if (slide.addChart) {
      const fundData = deckContent.funding.useOfFunds.map(item => ({
        label: item.category.replace(' & ', '\n'),
        value: parseInt(item.allocation)
      }));

      slide.addChart(this.pptx.ChartType.pie, [{
        name: 'Fund Allocation',
        labels: fundData.map(d => d.label),
        values: fundData.map(d => d.value)
      }], {
        x: LAYOUT.margin.left,
        y: LAYOUT.contentStart,
        w: 4.5,
        h: 3.5,
        chartColors: [COLORS.primary, COLORS.secondary, COLORS.success, COLORS.warning],
        showLegend: true,
        legendPos: 'r',
        legendFontSize: FONT_SIZES.small,
        dataLabelFontSize: FONT_SIZES.body,
        showPercent: true,
        fontFace: 'Arial'
      });
    }

    // Fund allocation details
    slide.addText('Deployment Plan:', {
      x: LAYOUT.margin.left,
      y: 4.7,
      w: 4.5,
      fontSize: FONT_SIZES.body,
      color: COLORS.primary,
      bold: true,
      fontFace: 'Arial'
    });
    
    const fundDetails = deckContent.funding.useOfFunds.map(f => 
      `${f.category}: ${f.amount} (${f.allocation})`
    ).join(' • ');
    
    slide.addText(fundDetails, {
      x: LAYOUT.margin.left,
      y: 4.95,
      w: 4.5,
      fontSize: FONT_SIZES.tiny,
      color: COLORS.textDark,
      fontFace: 'Arial'
    });

    // 12-month milestones
    slide.addText('12-Month Milestones:', {
      x: 5.1,
      y: LAYOUT.contentStart,
      w: 4.5,
      fontSize: FONT_SIZES.heading,
      color: COLORS.primary,
      bold: true,
      fontFace: 'Arial'
    });

    deckContent.funding.milestones.forEach((milestone, index) => {
      const y = LAYOUT.contentStart + 0.5 + (index * 0.65);
      
      slide.addShape(this.pptx.ShapeType.rect, {
        x: 5.1,
        y,
        w: 4.5,
        h: 0.55,
        fill: { color: index % 2 === 0 ? COLORS.bgLight : COLORS.tealLight },
        line: { color: COLORS.mediumGray, width: 1 }
      });

      slide.addText([
        { text: `${milestone.metric}: `, options: { fontSize: FONT_SIZES.bodySmall, color: COLORS.textDark, bold: true, fontFace: 'Arial' } },
        { text: `${milestone.now} → `, options: { fontSize: FONT_SIZES.bodySmall, color: COLORS.darkGray, fontFace: 'Arial' } },
        { text: milestone.target, options: { fontSize: FONT_SIZES.bodySmall, color: COLORS.secondary, bold: true, fontFace: 'Arial' } }
      ] as TextParagraph[], {
        x: 5.2,
        y: y + 0.08,
        w: 4.3,
        h: 0.2
      });

      slide.addText(`Timeline: ${milestone.timeline}`, {
        x: 5.2,
        y: y + 0.3,
        w: 4.3,
        fontSize: FONT_SIZES.tiny,
        color: COLORS.darkGray,
        italic: true,
        fontFace: 'Arial'
      });
    });
  }

  private addContactSlide() {
    const slide = this.pptx.addSlide();
    slide.background = { color: COLORS.primary };

    // Top accent
    slide.addShape(this.pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: LAYOUT.slideWidth,
      h: 0.15,
      fill: { color: COLORS.secondary },
      line: { type: 'none' }
    });

    slide.addText("Let's Build India's Learning OS Together", {
      x: 1,
      y: 1,
      w: 8,
      fontSize: FONT_SIZES.title,
      color: COLORS.secondary,
      bold: true,
      align: 'center',
      fontFace: 'Arial'
    });

    slide.addText(deckContent.contact.callToAction, {
      x: 1,
      y: 1.6,
      w: 8,
      fontSize: FONT_SIZES.body,
      color: COLORS.white,
      align: 'center',
      fontFace: 'Arial'
    });

    // Contact cards
    deckContent.contact.contacts.forEach((contact, index) => {
      const y = 2.3 + (index * 1.1);
      
      slide.addShape(this.pptx.ShapeType.roundRect, {
        x: 2,
        y,
        w: 6,
        h: 0.95,
        fill: { color: '0A3D4A' },
        line: { color: COLORS.secondary, width: 2 },
        rectRadius: 0.1
      });

      // Left side - Name and role
      slide.addText([
        { text: contact.name, options: { fontSize: FONT_SIZES.subheading, color: COLORS.secondary, bold: true, fontFace: 'Arial', breakLine: true } },
        { text: contact.role, options: { fontSize: FONT_SIZES.bodySmall, color: COLORS.white, fontFace: 'Arial' } }
      ] as TextParagraph[], {
        x: 2.2,
        y: y + 0.15,
        w: 2.8,
        h: 0.65
      });

      // Right side - Contact info
      slide.addText([
        { text: `📧 ${contact.email}`, options: { fontSize: FONT_SIZES.small, color: COLORS.white, fontFace: 'Arial', breakLine: true } },
        { text: `📱 ${contact.phone}`, options: { fontSize: FONT_SIZES.small, color: COLORS.white, fontFace: 'Arial', breakLine: true } },
        { text: `💼 ${contact.linkedin}`, options: { fontSize: FONT_SIZES.tiny, color: COLORS.mediumGray, fontFace: 'Arial' } }
      ] as TextParagraph[], {
        x: 5.1,
        y: y + 0.15,
        w: 2.7,
        h: 0.65,
        align: 'right'
      });
    });

    // Footer
    slide.addText(deckContent.contact.footerNote, {
      x: 1,
      y: 5.1,
      w: 8,
      fontSize: FONT_SIZES.bodySmall,
      color: COLORS.mediumGray,
      align: 'center',
      fontFace: 'Arial'
    });
  }

  private addHeader(slide: PptxSlide, title: string, subtitle?: string) {
    // Header background
    slide.addShape(this.pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: LAYOUT.slideWidth,
      h: LAYOUT.headerHeight,
      fill: { color: COLORS.primary },
      line: { type: 'none' }
    });

    // Yellow accent line
    slide.addShape(this.pptx.ShapeType.rect, {
      x: 0,
      y: LAYOUT.headerHeight,
      w: LAYOUT.slideWidth,
      h: 0.05,
      fill: { color: COLORS.secondary },
      line: { type: 'none' }
    });

    slide.addText(title, {
      x: LAYOUT.margin.left,
      y: 0.12,
      w: 7,
      fontSize: FONT_SIZES.title,
      color: COLORS.secondary,
      bold: true,
      fontFace: 'Arial'
    });

    if (subtitle) {
      slide.addText(subtitle, {
        x: LAYOUT.margin.left,
        y: 0.85,
        w: 9.2,
        fontSize: FONT_SIZES.bodySmall,
        color: COLORS.textLight,
        italic: true,
        fontFace: 'Arial'
      });
    }
  }

  private buildCompactTable(table: { header: string[]; rows: string[][] }, headerColor: string): TableRow[] {
    const headerRow: TableRow = table.header.map((text) => ({
      text,
      options: {
        bold: true,
        color: COLORS.white,
        fill: { color: headerColor },
        align: this.pptx.AlignH.center,
        valign: this.pptx.AlignV ? this.pptx.AlignV.middle : 'middle',
        fontSize: FONT_SIZES.small,
        fontFace: 'Arial'
      }
    })) as TableRow;

    const bodyRows: TableRow[] = table.rows.map((row, rowIdx) =>
      row.map((cell, cellIdx) => ({
        text: cell,
        options: { 
          color: COLORS.textDark,
          fontSize: FONT_SIZES.tiny,
          valign: 'top',
          fill: { color: rowIdx % 2 === 0 ? COLORS.white : COLORS.bgLight },
          fontFace: 'Arial'
        }
      }))
    );

    return [headerRow, ...bodyRows];
  }

  private buildComparisonTable(table: { header: string[]; rows: string[][] }): TableRow[] {
    const headerRow: TableRow = table.header.map((text) => ({
      text,
      options: {
        bold: true,
        color: COLORS.white,
        fill: { color: COLORS.primary },
        align: this.pptx.AlignH.center,
        valign: this.pptx.AlignV ? this.pptx.AlignV.middle : 'middle',
        fontSize: FONT_SIZES.small,
        fontFace: 'Arial'
      }
    })) as TableRow;

    const bodyRows: TableRow[] = table.rows.map((row, rowIdx) =>
      row.map((cell, cellIdx) => {
        const isScaleUp = row[0] === 'ScaleUp';
        const isCheckmark = cell === '✓';
        const isX = cell === '✗';
        
        return {
          text: cell,
          options: { 
            color: isX ? COLORS.error : (isCheckmark ? COLORS.success : COLORS.textDark),
            fontSize: FONT_SIZES.bodySmall,
            fill: { color: isScaleUp ? COLORS.yellowLight : (rowIdx % 2 === 0 ? COLORS.white : COLORS.bgLight) },
            align: cellIdx === 0 ? this.pptx.AlignH.left : this.pptx.AlignH.center,
            bold: isScaleUp || cellIdx === 0,
            fontFace: 'Arial'
          }
        };
      })
    );

    return [headerRow, ...bodyRows];
  }
}

export async function downloadPitchDeckPpt(): Promise<void> {
  const PptxGenJS = await loadPptxGenJs();
  const exporter = new PitchDeckPptExporter(new PptxGenJS());
  await exporter.generate();
}

async function loadPptxGenJs(): Promise<PptxGenJsConstructor> {
  if (typeof window === 'undefined') {
    throw new Error('PPT export is only available in the browser.');
  }

  if (window.PptxGenJS) {
    return window.PptxGenJS;
  }

  if (!pptxLoader) {
    pptxLoader = new Promise<PptxGenJsConstructor>((resolve, reject) => {
      const scriptUrl = 'https://cdn.jsdelivr.net/npm/pptxgenjs@4.0.1/dist/pptxgen.bundle.js';

      const finish = (el?: HTMLScriptElement | null) => {
        if (el) {
          el.dataset.pptxgenLoaded = 'true';
        }
        const ctor = window.PptxGenJS;
        if (ctor) {
          resolve(ctor);
        } else {
          reject(new Error('PPTX generator did not initialize.'));
        }
      };

      const existing = document.querySelector<HTMLScriptElement>(`script[src="${scriptUrl}"]`);
      if (existing) {
        if (existing.dataset.pptxgenLoaded === 'true' && window.PptxGenJS) {
          resolve(window.PptxGenJS);
          return;
        }
        existing.addEventListener('load', () => finish(existing), { once: true });
        existing.addEventListener('error', () => reject(new Error('Failed to load PPTX library')), { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      script.onload = () => finish(script);
      script.onerror = () => reject(new Error('Failed to load PPTX library'));
      (document.head || document.body || document.documentElement).appendChild(script);
    });
  }

  return pptxLoader;
}

