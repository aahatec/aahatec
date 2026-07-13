export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  features: string[];
  specs: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'fleet-tracker',
    name: 'AAHAGPS Fleet Tracker Pro',
    category: 'Vehicle Tracking',
    description: 'Our core business tracking hardware. Advanced real-time vehicle GPS tracker with high-gain internal antennas, ignition cut-off, and route replay analytics.',
    price: 99,
    features: ['Real-time 10s ping interval', 'Ignition & Fuel theft cut-off', '3-month history playback'],
    specs: 'High sensitivity GPS, 4G LTE fallback, 500mAh backup battery'
  },
  {
    id: 'school-bus-video',
    name: 'School Bus Live Video Streamer',
    category: 'Vehicle Tracking',
    description: 'Ensure student safety with our dual-camera & high-definition multi-channel streaming system. Parent dashboard app integration included.',
    price: 299,
    features: ['4-channel real-time streaming', 'ADAS sensor compatibility', 'Parent app live check-in'],
    specs: '1080p camera inputs, secure H.265 compression, tamper-proof lockbox'
  },
  {
    id: 'adas-avoidance',
    name: 'ADAS Collision Warning Unit',
    category: 'Vehicle Tracking',
    description: 'Advanced Driver Assistance System featuring AI-assisted lane departure warnings, headway monitoring, and pedestrian collision warnings.',
    price: 349,
    features: ['Forward Collision Warning (FCW)', 'Lane Departure Warning (LDW)', 'Driver drowsiness detection'],
    specs: 'ADAS camera unit, voice alert speaker, CAN-bus speed integration'
  },
  {
    id: 'rfid-parking-gate',
    name: 'RFID Parking Barrier Controller',
    category: 'RFID Automation',
    description: 'Completely automated parking management system. Integrated RFID reader to trigger boom barriers for authorized vehicles without stopping.',
    price: 189,
    features: ['12m long-range read distance', 'Weatherproof IP67 enclosure', 'Anti-collision multi-tag reading'],
    specs: '865-868 MHz UHF RFID reader, Wiegand output, Relay barrier control'
  },
  {
    id: 'rfid-tat-terminal',
    name: 'RFID TAT Plant Terminal',
    category: 'RFID Automation',
    description: 'Track truck loading/unloading Turn-Around-Time (TAT) in manufacturing plants. Integrates with AahaGPS to trigger automated plant arrival/departure.',
    price: 249,
    features: ['Automated gate log timestamping', 'Truck loading bay assignment', 'Real-time TAT bottleneck alert'],
    specs: 'Industrial controller, outdoor sunlight-readable display, PoE power'
  },
  {
    id: 'fuel-level-sensor',
    name: 'Smart Capacitive Fuel Sensor',
    category: 'Sensors',
    description: 'High-precision fuel monitoring rod. Plugs directly into vehicle tracking units to log exact fuel levels and trigger alerts during sudden drops.',
    price: 129,
    features: ['99.2% measurement accuracy', 'Cut-to-fit rod length design', 'Live anti-siphon alerts'],
    specs: 'RS485 interface, IP67 grade, stainless steel capacitive rod'
  },
  {
    id: 'cargo-temp-humidity',
    name: 'Cargo Cold-Chain Sensor',
    category: 'Sensors',
    description: 'Real-time temperature and humidity tracking for cargo boxes. Transmits logs instantly to the driver dashboard and cloud dashboard.',
    price: 79,
    features: ['Log-on-interval local storage', 'Accurate ±0.3°C temperature reading', 'High/Low threshold SMS alerts'],
    specs: 'BLE 5.0 wireless transmitter, 5-year battery life, compact size'
  },
  {
    id: 'student-rfid-reader',
    name: 'Student RFID Attendance Reader',
    category: 'RFID Automation',
    description: 'Active RFID attendance scanner mounted at school bus entrance doors. Sends instant boarding notifications to parents via smartphone app.',
    price: 149,
    features: ['Hands-free student card scan', 'Dashboard seating monitoring', 'Automatic boarding alert'],
    specs: '2.4GHz active RFID reader, sounder indicator, local SQLite backup'
  },
  {
    id: 'custom-enterprise-app',
    name: 'AAHA Bespoke App License',
    category: 'Custom Apps',
    description: 'Customized applications are our core expertise. Tailored mobile app development for custom client logistics workflows and fleet management analytics.',
    price: 1499,
    features: ['White-label iOS & Android apps', 'Custom API & ERP integrations', 'Dedicated support & updates'],
    specs: 'React Native codebase, microservices API, dedicated database cluster'
  }
];
