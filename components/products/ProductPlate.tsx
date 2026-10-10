import Image from "next/image";
import type { ProductImage, SketchKind } from "@/data/products";
import styles from "./ProductPlate.module.css";

type Props = {
  index: string;
  /** Right-hand caption, e.g. the product category. */
  label: string;
  image?: ProductImage;
  /** Drawn sketch shown when there is no image — a category, or a specific interface. */
  category?: SketchKind;
  priority?: boolean;
  sizes?: string;
};

/**
 * The framed visual for a product or case study. Uses the cover image when provided;
 * otherwise draws a quiet interface sketch that matches the category.
 * Contained images sit on their own background so wide or square art is never cropped.
 */
export function ProductPlate({
  index,
  label,
  image,
  category = "Experiment",
  priority,
  sizes = "(min-width: 900px) 33vw, 100vw",
}: Props) {
  const contain = image?.fit === "contain";

  return (
    <figure
      className={`${styles.plate} ${contain ? styles.contain : ""}`}
      style={image?.background ? { background: image.background } : undefined}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className={styles.image}
        />
      ) : (
        <div className={styles.sketch} aria-hidden="true">
          <Sketch category={category} />
        </div>
      )}
      <figcaption className={`label ${styles.caption}`}>
        <span>Fig. {index}</span>
        <span>{label}</span>
      </figcaption>
    </figure>
  );
}

function Sketch({ category }: { category: SketchKind }) {
  const common = {
    viewBox: "0 0 400 300",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    vectorEffect: "non-scaling-stroke",
    className: styles.svg,
  } as const;

  switch (category) {
    case "inbox":
      // Three-pane conversation inbox: channel list, thread with an AI reply, product panel.
      return (
        <svg {...common}>
          <rect x="60" y="55" width="280" height="190" rx="6" />
          <line x1="130" y1="55" x2="130" y2="245" />
          <line x1="282" y1="55" x2="282" y2="245" />
          {[75, 105, 135, 165].map((y, i) => (
            <g key={y} opacity={i === 0 ? 1 : 0.6}>
              <circle cx="74" cy={y + 4} r="4" className={i === 0 ? styles.accentFill : undefined} />
              <line x1="84" y1={y} x2="120" y2={y} />
              <line x1="84" y1={y + 8} x2="110" y2={y + 8} opacity="0.5" />
            </g>
          ))}
          <rect x="140" y="72" width="72" height="16" rx="8" />
          <rect x="198" y="96" width="74" height="16" rx="8" opacity="0.6" />
          <rect x="140" y="120" width="96" height="28" rx="8" />
          <circle cx="150" cy="134" r="3" className={styles.accentFill} />
          <line x1="158" y1="130" x2="226" y2="130" opacity="0.5" />
          <line x1="158" y1="138" x2="210" y2="138" opacity="0.5" />
          <rect x="186" y="158" width="86" height="16" rx="8" opacity="0.6" />
          <rect x="140" y="214" width="132" height="18" rx="9" />
          <circle cx="262" cy="223" r="4" />
          <rect x="292" y="72" width="38" height="30" rx="3" />
          <line x1="292" y1="114" x2="328" y2="114" />
          <line x1="292" y1="123" x2="316" y2="123" opacity="0.5" />
          <rect x="292" y="136" width="38" height="12" rx="6" className={styles.accentStroke} />
        </svg>
      );
    case "Mobile application":
      return (
        <svg {...common}>
          <rect x="150" y="38" width="100" height="200" rx="16" />
          <rect x="183" y="46" width="34" height="6" rx="3" />
          <line x1="164" y1="76" x2="210" y2="76" />
          <line x1="164" y1="86" x2="196" y2="86" opacity="0.5" />
          <rect x="164" y="102" width="72" height="44" rx="4" />
          <rect x="164" y="154" width="72" height="14" rx="3" opacity="0.6" />
          <rect x="164" y="174" width="72" height="14" rx="3" opacity="0.6" />
          <rect x="164" y="194" width="72" height="14" rx="3" opacity="0.6" />
          <circle cx="220" cy="124" r="5" className={styles.accentFill} />
          <line x1="185" y1="226" x2="215" y2="226" />
        </svg>
      );
    case "Web product":
      return (
        <svg {...common}>
          <rect x="70" y="60" width="260" height="170" rx="6" />
          <line x1="70" y1="82" x2="330" y2="82" />
          <circle cx="84" cy="71" r="3" />
          <circle cx="95" cy="71" r="3" />
          <circle cx="106" cy="71" r="3" />
          <line x1="88" y1="104" x2="180" y2="104" />
          <line x1="88" y1="116" x2="150" y2="116" opacity="0.5" />
          <rect x="88" y="134" width="108" height="76" rx="3" />
          <rect x="208" y="134" width="104" height="34" rx="3" opacity="0.6" />
          <rect x="208" y="176" width="104" height="34" rx="3" opacity="0.6" />
          <rect x="250" y="98" width="62" height="20" rx="10" className={styles.accentStroke} />
        </svg>
      );
    case "Digital tool":
      return (
        <svg {...common}>
          <rect x="90" y="70" width="220" height="160" rx="6" />
          <rect x="106" y="86" width="188" height="30" rx="4" />
          <line x1="120" y1="94" x2="120" y2="108" className={styles.accentStroke} strokeWidth={2} />
          <line x1="106" y1="138" x2="250" y2="138" />
          <line x1="106" y1="160" x2="220" y2="160" opacity="0.6" />
          <line x1="106" y1="182" x2="236" y2="182" opacity="0.6" />
          <line x1="106" y1="204" x2="196" y2="204" opacity="0.6" />
          <text x="282" y="142" className={styles.kbd} stroke="none">
            ↵
          </text>
        </svg>
      );
    default:
      return (
        <svg {...common}>
          {Array.from({ length: 7 }).map((_, row) =>
            Array.from({ length: 11 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={100 + col * 20}
                cy={90 + row * 20}
                r="1.2"
                fill="currentColor"
                stroke="none"
                opacity="0.45"
              />
            )),
          )}
          <circle cx="200" cy="150" r="64" strokeDasharray="3 5" />
          <polyline points="120,210 160,170 200,190 240,130 280,110" />
          <circle cx="240" cy="130" r="5" className={styles.accentFill} />
        </svg>
      );
  }
}
