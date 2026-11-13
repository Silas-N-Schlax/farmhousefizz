import React from 'react'

// Illustrations for the dirty soda kit page. Every scene shares one viewBox and
// draws our clear cup (dome lid, Farmhouse Fizz sticker) at the same spot, so
// the steps read like frames of one drink being built.
//
// Motion lives in kit-steps.css. Every animated element's resting style is its
// finished state, so with reduced motion each scene shows the completed step.

const VIEW_BOX = "-20 -14 240 250"
const CUP_INSIDE = "M50 72 L150 72 L134 226 L66 226 Z"

// Each scene gets its own clip id so seven SVGs on one page don't collide.
const ClipContext = React.createContext('kit-cup-inside')

const ICE = [
  [72, 192, 12], [100, 198, -8], [122, 188, 20],
  [80, 162, -15], [110, 166, 8], [130, 150, -6],
  [92, 134, 18], [70, 130, 5], [122, 122, -10],
  [104, 104, -12], [78, 100, 10],
]

const BUBBLES = [
  [76, 0], [96, 0.6], [118, 1.2], [88, 1.8], [126, 0.3], [108, 2.2],
]

function Ice({ drop }) {
  return (
    <g className={`kit-art__ice${drop ? ' kit-art__ice--drop' : ''}`}>
      {ICE.map(([x, y, r], i) => (
        <rect
          key={i}
          x={x - 10}
          y={y - 10}
          width="20"
          height="20"
          rx="4"
          transform={`rotate(${r} ${x} ${y})`}
          style={drop ? { animationDelay: `${i * 0.22}s` } : undefined}
        />
      ))}
    </g>
  )
}

function Bubbles({ top }) {
  return (
    <g className="kit-art__bubbles">
      {BUBBLES.map(([x, delay], i) => (
        <circle key={i} cx={x} cy="212" r={i % 2 ? 2 : 3} style={{ animationDelay: `${delay}s`, '--bubble-rise': `${top - 212}px` }} />
      ))}
    </g>
  )
}

function Sticker() {
  return (
    <g className="kit-art__sticker" transform="translate(100 136)">
      <circle r="25" />
      <image href="/logo.png" x="-23" y="-23" width="46" height="46" />
    </g>
  )
}

function Lid() {
  return (
    <g>
      <path className="kit-art__lid" d="M46 70 Q46 24 100 22 Q154 24 154 70 Z" />
      <path className="kit-art__lid-shine" d="M66 58 Q68 36 90 30" />
    </g>
  )
}

function Straw({ stir }) {
  return (
    <rect className={`kit-art__straw${stir ? ' kit-art__straw--stir' : ''}`} x="109" y="-6" width="7" height="216" rx="3" />
  )
}

// The cup itself. Layers stack bottom-up. Soda is drawn first and syrup over it
// so the soda layer can slide up from below without covering the syrup; cream
// sits on top of both, and the mixed fill fades in over everything once stirred.
// Ice goes last so it reads as floating in the drink.
//
// `pour` names the layer that is currently being poured in (it animates in);
// `ice="drop"` makes the cubes fall into the cup; `stir` blends the layers.
function Cup({ ice, syrup, soda, cream, mixed, lid, straw, bubbles, pour, stir }) {
  const clipId = React.useContext(ClipContext)
  const sodaTop = cream ? 100 : 92
  const dropIce = ice === 'drop'

  return (
    <g>
      {lid && <Lid />}
      <path className="kit-art__cup-back" d={CUP_INSIDE} />
      <g clipPath={`url(#${clipId})`}>
        {soda && (
          <g className={`kit-art__soda-layer${pour === 'soda' ? ' kit-art__soda-layer--pour' : ''}`}>
            <rect className="kit-art__soda" x="40" y={sodaTop} width="120" height="160" />
            {!cream && !mixed && (
              <g className="kit-art__foam">
                <circle cx="62" cy="92" r="5" /><circle cx="76" cy="90" r="6" /><circle cx="92" cy="92" r="5" />
                <circle cx="108" cy="90" r="6" /><circle cx="124" cy="92" r="5" /><circle cx="140" cy="91" r="6" />
              </g>
            )}
            {bubbles && !mixed && <Bubbles top={sodaTop + 4} />}
          </g>
        )}
        {syrup && (
          <rect className={`kit-art__syrup${pour === 'syrup' ? ' kit-art__syrup--pour' : ''}`} x="40" y="204" width="120" height="40" />
        )}
        {cream && (
          <g className={`kit-art__cream${pour === 'cream' ? ' kit-art__cream--pour' : ''}`}>
            <path className="kit-art__cream-top" d="M40 92 Q55 84 70 92 T100 92 T130 92 T160 92 V104 H40 Z" />
            <path className="kit-art__cream-drip" pathLength="1" d="M66 100 q6 18 -2 34" />
            <path className="kit-art__cream-drip" pathLength="1" d="M104 100 q-6 22 2 44" />
            <path className="kit-art__cream-drip" pathLength="1" d="M134 100 q4 12 -1 24" />
          </g>
        )}
        {mixed && (
          <rect className={`kit-art__mixed${stir ? ' kit-art__mixed--blend' : ''}`} x="40" y="84" width="120" height="150" />
        )}
        {mixed && bubbles && <Bubbles top={96} />}
        {ice && !dropIce && <Ice />}
      </g>
      {dropIce && <Ice drop />}
      <path className="kit-art__cup" d={CUP_INSIDE} />
      <rect className="kit-art__rim" x="44" y="66" width="112" height="7" rx="3.5" />
      <Sticker />
      {straw && <Straw stir={stir} />}
    </g>
  )
}

function PortionCup({ fill, x, y, angle, className = '', pouring }) {
  return (
    <g className={className} transform={`translate(${x} ${y}) rotate(${angle})`}>
      <path className={`kit-art__portion-fill kit-art__portion-fill--${fill}${pouring ? ' kit-art__portion-fill--pouring' : ''}`} d="M-12 -6 L12 -6 L9 12 L-9 12 Z" />
      <path className="kit-art__portion" d="M-14 -12 L14 -12 L9 12 L-9 12 Z" />
      <rect className="kit-art__rim" x="-16" y="-14" width="32" height="4" rx="2" />
    </g>
  )
}

function Stream({ d, kind }) {
  return <path className={`kit-art__stream kit-art__stream--${kind}`} d={d} />
}

function Scene({ label, children }) {
  const clipId = `kit-cup-${React.useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  return (
    <ClipContext.Provider value={clipId}>
      <svg className="kit-art" viewBox={VIEW_BOX} role="img" aria-label={label}>
        <defs>
          <clipPath id={clipId}><path d={CUP_INSIDE} /></clipPath>
        </defs>
        <ellipse className="kit-art__shadow" cx="100" cy="230" rx="52" ry="6" />
        {children}
      </svg>
    </ClipContext.Provider>
  )
}

function Sparkle({ x, y, size = 1, delay = 0 }) {
  return (
    <path
      className="kit-art__sparkle"
      style={{ animationDelay: `${delay}s` }}
      transform={`translate(${x} ${y}) scale(${size})`}
      d="M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9 Z"
    />
  )
}

// Drawn at 1.5x so the can reads as about as wide as the cup and half as tall.
function SodaCan({ x, y, angle }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(1.5)`}>
      <rect className="kit-art__can" x="-15" y="-26" width="30" height="52" rx="5" />
      <rect className="kit-art__can-band" x="-15" y="-6" width="30" height="12" />
      <ellipse className="kit-art__can-top" cx="0" cy="-26" rx="15" ry="4" />
    </g>
  )
}

export function UnpackArt() {
  return (
    <Scene label="Syrup cup, soda, and cream cup lifting out of an empty cup">
      <Cup />
      <PortionCup fill="syrup" x={56} y={30} angle={-14} className="kit-art__unpack" />
      <g className="kit-art__unpack kit-art__unpack--second">
        <SodaCan x={100} y={18} angle={0} />
      </g>
      <PortionCup fill="cream" x={146} y={26} angle={14} className="kit-art__unpack kit-art__unpack--third" />
      <path className="kit-art__motion" d="M40 52 v-14 M162 50 v-14" />
    </Scene>
  )
}

export function IceArt() {
  return (
    <Scene label="Ice cubes dropping into the cup">
      <Cup ice="drop" />
    </Scene>
  )
}

export function SyrupArt() {
  return (
    <Scene label="Syrup pouring from its little cup over the ice">
      <Cup ice syrup pour="syrup" />
      <Stream kind="syrup" d="M140 30 C124 44 108 70 104 206" />
      <PortionCup fill="syrup" x={160} y={22} angle={-118} pouring />
    </Scene>
  )
}

export function SodaArt() {
  return (
    <Scene label="Soda pouring slowly into the cup">
      <Cup ice syrup soda bubbles pour="soda" />
      <Stream kind="soda" d="M144 18 C128 32 112 60 108 100" />
      <SodaCan x={180} y={2} angle={-112} />
      <text className="kit-art__note" x="36" y="40">slowly…</text>
    </Scene>
  )
}

export function CreamArt() {
  return (
    <Scene label="Cream pouring on top of the soda">
      <Cup ice syrup soda cream pour="cream" />
      <Stream kind="cream" d="M140 30 C124 44 110 66 104 94" />
      <PortionCup fill="cream" x={160} y={22} angle={-118} pouring />
    </Scene>
  )
}

export function StirArt() {
  return (
    <Scene label="Lid on, straw stirring the layers into one blended drink">
      <Cup ice syrup soda cream mixed lid straw stir />
    </Scene>
  )
}

export function EnjoyArt() {
  return (
    <Scene label="Finished dirty soda with sparkles around it">
      <Cup ice mixed lid straw bubbles />
      <Sparkle x={26} y={60} size={1.2} />
      <Sparkle x={178} y={44} size={0.9} delay={0.5} />
      <Sparkle x={184} y={150} size={1.3} delay={1} />
      <Sparkle x={20} y={170} size={0.8} delay={1.5} />
      <path className="kit-art__heart" d="M168 96 c-6 -8 -18 -2 -10 8 l10 9 l10 -9 c8 -10 -4 -16 -10 -8 Z" />
    </Scene>
  )
}
