export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'FPGA / Verilog' | 'Digital VLSI' | 'Embedded / IoT' | 'Digital System' | 'Data Science / AI';
  brief: string;
  problemStatement: string;
  objective: string;
  architectureNodes: { id: string; label: string; desc: string; type: 'input' | 'process' | 'fsm' | 'memory' | 'output' }[];
  signalFlow: string[];
  technologies: string[];
  hardwareUsed: string[];
  softwareUsed: string[];
  workingPrinciple: string;
  verilogSnippet?: string;
  simulationNotes: string;
  timingDetails?: string;
  results: string[];
  futureScope: string[];
  githubUrl?: string;
  simulationType: 'traffic' | 'fifo' | 'uart' | 'railway' | 'parking' | 'olympics' | 'waterlevel';
}

export interface SkillItem {
  name: string;
  level: 'Project Experience' | 'Working Knowledge' | 'Learning & Exploring';
  depth: number; // 1 to 3 for visual meter
  highlight?: string;
  details: string;
  tools?: string[];
  projectsApplied?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: 'VLSI & HDL' | 'AI & ML' | 'Data Science' | 'Entrepreneurship';
  credentialId: string;
  skillsCovered: string[];
  description: string;
  pdfUrl: string;
  duration?: string;
  verifiedBy?: string;
}

export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  score?: string;
  coursework: string[];
  achievements: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  engineer: {
    name: 'Baggu Leelaprasad',
    callsign: 'LEELAPRASAD // ECE',
    title: 'ECE × VLSI × DV ',
    tagline: 'Electronics & Communication Engineering undergraduate passionate about Digital VLSI, FPGA prototyping, Verilog, Python Data Systems',
    bio: `Passionate Electronics and Communication Engineering undergraduate at GIET Engineering College focused on Digital VLSI Design, FPGA prototyping, and RTL architecture in Verilog HDL alongside Data Science, data analytics.`,
    degree: 'B.Tech – Electronics & Communication Engineering',
    year: 'Undergraduate (2023–2027)',
    rollNumber: '23T91A0402',
    cgpa: '7.9 / 10.0',
    institution: 'GIET Engineering College',
    location: 'Rajahmundry, Andhra Pradesh, India',
    focus: 'Hardware RTL Synthesis, VLSI Verification, Python & Data Analytics',
    primaryInterests: ['VLSI Architecture', 'FPGA Design (Xilinx / Altera)', 'Verilog HDL & RTL', 'Data Science & Python', 'AI & Machine Learning', 'Embedded Systems & IoT'],
    labStats: {
      logicBlocksDesigned: '18+',
      simulationHours: '140+',
      fpgaTargets: 'Artix-7 / Spartan-6 / Cyclone IV',
      hdlLinesSynthesized: '5.2k+'
    },
    specs: [
      { label: 'ARCHITECTURE', val: 'Synchronous RTL / CMOS Logic' },
      { label: 'HDL STANDARD', val: 'IEEE 1364-2005 (Verilog)' },
      { label: 'SIMULATOR', val: 'ModelSim / QuestaSim / EDA Playground' },
      { label: 'SYNTHESIS TARGET', val: 'Xilinx Vivado / Quartus Prime' },
      { label: 'DATA & ML STACK', val: 'Python (NumPy, Pandas, Matplotlib, Seaborn)' },
      { label: 'LAB INSTRUMENTS', val: 'Digital Storage Oscilloscope, Logic Analyzer, DMM' },
    ],
    contact: {
      email: 'leelaprasadbaggu@gmail.com',
      phone: '+91-8374618021',
      github: 'https://github.com/leela1029',
      linkedin: 'https://www.linkedin.com/in/leelaprasad-baggu-ab8a43321',
      leetcode: 'https://leetcode.com/u/leela1029/',
      location: 'Rajahmundry, Andhra Pradesh, India',
      resumeUrl: '/assets/resumes/LEELA_RESUME.pdf',
      resumePdfPath: '/resume.pdf'
    }
  },

  systemTelemetry: {
    coreStatus: 'ONLINE',
    fpgaStatus: 'READY',
    hdlEngine: 'ACTIVE',
    digitalState: 'STABLE',
    clockFrequency: '100.00 MHz',
    coreVoltage: '1.20 V',
    dieTemperature: '38.4 °C',
    phaseJitter: '< 0.04 ns',
    synthesisMode: 'TIMING_DRIVEN'
  },

  skills: [
    {
      id: 'hardware-rtl',
      title: 'Hardware & RTL Design',
      icon: 'Cpu',
      badge: 'CORE DOMAIN',
      description: 'Combinational & sequential circuit synthesis, finite state machines, and register-transfer level hardware design.',
      skills: [
        {
          name: 'Verilog HDL',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Synthesizable RTL Models',
          details: 'Structural, dataflow, and behavioral modeling styles; parameterized modules, synchronous reset design, and multi-state controllers.',
          tools: ['ModelSim', 'EDA Playground', 'Vivado'],
          projectsApplied: ['Smart Traffic Priority FSM', 'Synchronous FIFO Buffer', 'UART Transceiver Core']
        },
        {
          name: 'Finite State Machines (FSM)',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Mealy & Moore Modeling',
          details: 'Deterministic state machine modeling, one-hot and binary encoding, glitch mitigation, and safe recovery states for hardware controllers.',
          tools: ['Verilog HDL', 'ModelSim'],
          projectsApplied: ['Railway Gate Controller', 'Smart Traffic System', 'UART 8-N-1 Transmitter']
        },
        {
          name: 'Digital Circuit Design',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Combinational & Sequential',
          details: 'Boolean algebra, logic minimization (K-Maps), multiplexers, decoders, ALU design, shift counters, and parity generators.',
          tools: ['ModelSim', 'EDA Playground'],
          projectsApplied: ['Smart Parking 7-Segment Decoder', 'ALU Architecture', 'Digital Clock Dividers']
        },
        {
          name: 'RTL Modeling & Testbenches',
          level: 'Working Knowledge',
          depth: 2,
          highlight: 'Waveform Verification',
          details: 'Self-checking testbenches, task-based stimulus generation, non-blocking vs blocking assignment rules, and corner-case functional verification.',
          tools: ['ModelSim', 'QuestaSim'],
          projectsApplied: ['FIFO Buffer Verification', 'UART Loopback Testbench']
        },
      ]
    },
    {
      id: 'vlsi-fpga',
      title: 'VLSI & FPGA Architecture',
      icon: 'Layers',
      badge: 'SILICON ARCHITECTURE',
      description: 'Semiconductor device physics, CMOS logic gates, FPGA Look-Up Tables (LUTs), and static timing parameters.',
      skills: [
        {
          name: 'Digital VLSI Design',
          level: 'Working Knowledge',
          depth: 2,
          highlight: 'CMOS Fundamentals',
          details: 'MOSFET operation regions, CMOS complementary logic networks, propagation delay (tpd), dynamic & static power dissipation.',
          tools: ['ModelSim', 'SkillDzire VLSI Lab'],
          projectsApplied: ['SkillDzire VLSI Internship', 'CMOS Logic Gate Analysis']
        },
        {
          name: 'FPGA Architecture (LUT / CLB)',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Hardware Mapping',
          details: 'Island-style FPGA fabric, Configurable Logic Blocks (CLB), 4/6-LUT mapping, dedicated carry chains, and switch-box interconnects.',
          tools: ['Xilinx Vivado', 'Quartus Prime'],
          projectsApplied: ['Smart Parking System', 'Emergency Traffic Controller']
        },
        {
          name: 'Static Timing & Setup/Hold',
          level: 'Learning & Exploring',
          depth: 2,
          highlight: 'Timing Analysis',
          details: 'Clock-to-Q delay, setup time (tsu), hold time (th), slack evaluation, and critical path analysis for synchronous circuits.',
          tools: ['Vivado Timing Engine'],
          projectsApplied: ['Synchronous FIFO at 100MHz']
        },
        {
          name: 'FPGA Prototyping Flow',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Bitstream Synthesis',
          details: 'Complete design flow from RTL synthesis, place-and-route, physical constraint mapping (XDC/UCF) to on-board hardware testing.',
          tools: ['Xilinx Vivado', 'Basys3 / Spartan-6'],
          projectsApplied: ['FPGA Traffic Light Controller', '7-Segment Parking Display']
        }
      ]
    },
    {
      id: 'software-prog',
      title: 'Programming & Computer Science',
      icon: 'Code2',
      badge: 'CORE CODE',
      description: 'Systems programming, algorithmic problem solving, scripting, and data structure implementations.',
      skills: [
        {
          name: 'Python',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Data & Automation',
          details: 'Object-oriented programming, data structures, test vector generation, automation scripting, and scientific computing.',
          tools: ['Python 3.x', 'VS Code', 'Jupyter Notebook'],
          projectsApplied: ['Olympics Data Analysis', 'APSSDC Internship', 'Hardware Test Generators']
        },
        {
          name: 'C Programming',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Low-Level Systems',
          details: 'Pointers, bitwise operations, memory mapped I/O, embedded hardware drivers, and fundamental algorithmic structures.',
          tools: ['GCC', 'VS Code'],
          projectsApplied: ['Microcontroller Firmware', 'Algorithm Implementations']
        },
        {
          name: 'Data Structures & Algorithms',
          level: 'Working Knowledge',
          depth: 2,
          highlight: 'LeetCode Problem Solver',
          details: 'Arrays, Linked Lists, Stacks, Queues, Binary Trees, and Searching/Sorting Algorithms with time/space complexity analysis.',
          tools: ['LeetCode', 'Python', 'C'],
          projectsApplied: ['30+ LeetCode Solutions', '20-Day Streak Achievement']
        },
        {
          name: 'JavaScript & Web Fundamentals',
          level: 'Working Knowledge',
          depth: 2,
          highlight: 'Interactive Frontends',
          details: 'Modern JavaScript (ES6+), HTML5 semantic structure, modern CSS styling, React component hierarchies, and Vercel deployments.',
          tools: ['React', 'Next.js', 'TailwindCSS', 'Vercel'],
          projectsApplied: ['Interactive Engineering Portfolio', 'IoT Dashboard UI']
        }
      ]
    },
    {
      id: 'data-ai',
      title: 'Data Science & AI / ML',
      icon: 'Binary',
      badge: 'INTELLIGENT COMPUTATION',
      description: 'Exploratory data analysis, statistical modeling, data visualization, and machine learning fundamentals.',
      skills: [
        {
          name: 'NumPy & Pandas',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Data Wrangling',
          details: 'Multi-dimensional array manipulation, DataFrame transformations, data filtering, missing value imputation, and grouping aggregations.',
          tools: ['Pandas', 'NumPy', 'Jupyter'],
          projectsApplied: ['Olympics Data Analysis', 'APSSDC Summer Internship']
        },
        {
          name: 'Matplotlib & Seaborn',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Visual Analytics',
          details: 'Distribution plots, correlation heatmaps, multi-variable trend charts, and publication-quality exploratory data visualizations.',
          tools: ['Matplotlib', 'Seaborn'],
          projectsApplied: ['Olympics Country Performance Visualizer', 'Telemetry Plotter']
        },
        {
          name: 'AI & Machine Learning Foundations',
          level: 'Working Knowledge',
          depth: 2,
          highlight: 'APSCHE Certified',
          details: 'Supervised and unsupervised learning concepts, feature engineering, regression & classification pipelines, and neural network basics.',
          tools: ['Scikit-Learn', 'Python', 'SmartBridge Lab'],
          projectsApplied: ['APSCHE 120-Hr AI/ML Virtual Internship', 'Predictive Modeling']
        }
      ]
    },
    {
      id: 'eda-tools',
      title: 'EDA & Engineering Tools',
      icon: 'Activity',
      badge: 'VERIFICATION SUITE',
      description: 'Industry-standard Electronic Design Automation environments, logic simulators, and version control systems.',
      skills: [
        {
          name: 'ModelSim / QuestaSim',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Simulation & Waveforms',
          details: 'Cycle-accurate behavioral simulation, signal probing, force stimulus, VCD export, and race condition detection.',
          tools: ['ModelSim PE/SE', 'Questa'],
          projectsApplied: ['FIFO Waveform Simulation', 'UART Testbench', 'FSM Transition Verification']
        },
        {
          name: 'EDA Playground',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Cloud RTL Prototyping',
          details: 'Rapid Verilog simulation, Icarus Verilog synthesis checking, EPWave timing analysis, and reproducible hardware sandboxes.',
          tools: ['EDA Playground', 'Icarus Verilog'],
          projectsApplied: ['SkillDzire Traffic Controller', 'Synchronous Logic Modules']
        },
        {
          name: 'Xilinx Vivado (Basic)',
          level: 'Learning & Exploring',
          depth: 1,
          highlight: 'Synthesis & Implementation',
          details: 'Project synthesis workflow, RTL schematic exploration, timing report analysis, and XDC constraint binding.',
          tools: ['Vivado Design Suite'],
          projectsApplied: ['Artix-7 Prototyping', 'RTL Schematic Analysis']
        },
        {
          name: 'Git & GitHub',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Version Control',
          details: 'Repository management, commit histories, branching workflows, collaborative coding, and continuous deployment.',
          tools: ['Git CLI', 'GitHub', 'VS Code'],
          projectsApplied: ['GitHub: leela1029 Repositories', 'Portfolio CI/CD']
        },
        {
          name: 'MATLAB',
          level: 'Working Knowledge',
          depth: 2,
          highlight: 'Signal Analysis',
          details: 'Mathematical modeling, matrix operations, signal processing simulation, and waveform plotting.',
          tools: ['MATLAB R2024'],
          projectsApplied: ['ECE Coursework Labs', 'Filter Response Simulation']
        }
      ]
    },
    {
      id: 'embedded-iot',
      title: 'Embedded Systems & IoT',
      icon: 'Radio',
      badge: 'SENSORY INTERFACES',
      description: 'Microcontroller hardware interfacing, analog/timer circuits, communication protocols, and sensor integration.',
      skills: [
        {
          name: 'Sensors Interfacing',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Multi-Sensor Integration',
          details: 'Ultrasonic sensors, IR obstacle transceivers, RC522 RFID 13.56MHz modules, conductive water level probes, and optical encoders.',
          tools: ['Sensors Modules', 'Breadboard Lab'],
          projectsApplied: ['Smart Traffic Priority', 'Water Level Indicator', 'Smart Parking System']
        },
        {
          name: 'UART / Serial Protocols',
          level: 'Project Experience',
          depth: 3,
          highlight: '8-N-1 Serial Transceiver',
          details: 'Asynchronous serial transceiver logic, baud rate generator division, 16x oversampling receiver, and parity verification.',
          tools: ['Verilog HDL', 'FTDI Bridge'],
          projectsApplied: ['UART Transceiver Module', 'ESP8266 IoT Telemetry Bridge']
        },
        {
          name: '555 Timer & Analog Circuits',
          level: 'Project Experience',
          depth: 3,
          highlight: 'Hardware Oscillators',
          details: 'Monostable and astable multivibrators, trigger threshold sensing, transistor switching buffers, and relay/buzzer actuation.',
          tools: ['555 IC', 'Oscilloscope', 'Breadboard'],
          projectsApplied: ['Water Level Controller Project', 'Safety Crossing Audio Alarm']
        },
        {
          name: 'Microcontroller Interfacing',
          level: 'Working Knowledge',
          depth: 2,
          highlight: 'GPIO & Peripheral Control',
          details: 'GPIO pin configuration, Timer interrupts, PWM servo ramp generation, and ADC conversion sampling.',
          tools: ['Arduino IDE', 'ESP8266', 'Microcontrollers'],
          projectsApplied: ['IoT Traffic Dispatcher', 'Railway Gate Servo Driver']
        }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: 'smart-traffic-iot',
      title: 'Smart Traffic System for Emergency Vehicles Using IoT',
      subtitle: 'FPGA-Accelerated Priority Traffic Light Controller with RFID & IR Sensing',
      category: 'FPGA / Verilog',
      brief: 'An automated traffic preemption controller implemented in Verilog and targeted for FPGA/Microcontroller systems that senses approaching emergency vehicles (ambulances/fire trucks) via RFID and IR arrays to grant instant green corridor priority.',
      problemStatement: 'Emergency vehicles encounter heavy urban congestion and delay at traffic intersections, causing critical loss of golden response time. Conventional fixed-timer traffic controllers fail to dynamically adapt to emergency priority vehicles.',
      objective: 'Design a deterministic, fail-safe digital priority controller with sensor telemetry that dynamically overrides regular 4-way intersection cycles when an emergency vehicle is detected, clearing congestion and safely restoring regular FSM scheduling.',
      architectureNodes: [
        { id: 'ev', label: 'Emergency Vehicle', desc: 'Equipped with active 13.56MHz RFID beacon transmitter', type: 'input' },
        { id: 'rfid', label: 'RFID Receiver Array', desc: 'Decodes priority vehicle ID code & direction lane', type: 'input' },
        { id: 'ir', label: 'IR Proximity Sensors', desc: 'Calculates real-time vehicle queue density per approach lane', type: 'input' },
        { id: 'fpga', label: 'FPGA FSM Core', desc: 'Hardware-synthesized priority arbiter & safe clearance counter', type: 'fsm' },
        { id: 'lights', label: 'Solid-State Traffic LEDs', desc: 'Green corridor lock with red-hazard holds on intersecting lanes', type: 'output' },
        { id: 'iot', label: 'IoT Telemetry Bridge', desc: 'Broadcasts intersection clearance status to emergency dispatchers', type: 'output' }
      ],
      signalFlow: [
        'Emergency Vehicle Approaches Lane 1',
        'RFID Reader triggers INTERRUPT_EMERGENCY signal (HIGH)',
        'FPGA Priority Arbiter latches Emergency Direction = NORTH',
        'Current active phase executes safe YELLOW transition (3s timer)',
        'ALL intersecting lanes forced to RED (All-Red Clearance)',
        'NORTH Lane given GREEN CORRIDOR signal until clearance sensor fires',
        'FSM smoothly transitions back to balanced density-aware schedule'
      ],
      technologies: ['Verilog HDL', 'FPGA Architecture', 'FSM State Controller', 'RFID (13.56 MHz)', 'IR Sensors', 'IoT Telemetry'],
      hardwareUsed: ['FPGA Development Board (Xilinx / Altera)', 'RC522 RFID Sensor Module', 'IR Obstacle Detector Arrays', 'Traffic Light LED Interface', 'ESP8266 IoT Wi-Fi Module'],
      softwareUsed: ['ModelSim Simulator', 'Xilinx Vivado / Quartus', 'EDA Playground', 'Arduino IDE (IoT Bridge)'],
      workingPrinciple: 'The core is a synthesizable Verilog FSM with states: S_NORMAL_CYCLE, S_YELLOW_TRANSITION, S_ALL_RED_HOLD, S_EMERGENCY_OVERRIDE, and S_RECOVERY. Priority interrupts are edge-triggered and arbitrated in hardware with zero software latency.',
      verilogSnippet: `// ========================================================
// Module: smart_traffic_priority_controller.v
// Designer: Leelaprasad Baggu (ECE - VLSI & Digital Design)
// Description: FPGA FSM Traffic Priority with Emergency Preemption
// ========================================================
module smart_traffic_controller (
    input  wire        clk,
    input  wire        reset_n,
    input  wire        emergency_req_north,
    input  wire        emergency_req_south,
    input  wire [1:0]  lane_density_north,
    input  wire [1:0]  lane_density_east,
    output reg  [2:0]  lights_north_south, // [RED, YELLOW, GREEN]
    output reg  [2:0]  lights_east_west,
    output reg         priority_active
);

    // State Encoding (One-Hot for Glitch-Free FPGA Mapping)
    localparam [3:0] 
        S_NS_GREEN = 4'b0001,
        S_NS_YEL   = 4'b0010,
        S_EW_GREEN = 4'b0100,
        S_EW_YEL   = 4'b1000;

    reg [3:0] current_state, next_state;
    reg [23:0] timer_count;

    // FSM State Register
    always @(posedge clk or negedge reset_n) begin
        if (!reset_n) begin
            current_state   <= S_NS_GREEN;
            timer_count     <= 0;
            priority_active <= 1'b0;
        end else if (emergency_req_north || emergency_req_south) begin
            current_state   <= S_NS_GREEN; // Immediate Preemption
            priority_active <= 1'b1;
            timer_count     <= 0;
        end else begin
            current_state   <= next_state;
            priority_active <= 1'b0;
            timer_count     <= timer_count + 1;
        end
    end
endmodule`,
      simulationNotes: 'Simulated on ModelSim and EDA Playground verifying instant priority preemption (<1 clock cycle) and safe 3-second yellow clearance transitions.',
      timingDetails: 'Max operating frequency: 165 MHz on Xilinx Artix-7. Critical path slack: +2.84 ns.',
      results: [
        'Deterministic zero-software-latency green corridor activation',
        'Validated with RC522 RFID module and multi-lane IR proximity sensors',
        'Synthesizable hardware footprint consuming < 2% of FPGA logic slices'
      ],
      futureScope: [
        'V2X (Vehicle-to-Everything) wireless DSRC mesh networking',
        'Adaptive machine learning traffic density predictor integration'
      ],
      githubUrl: 'https://github.com/leela1029',
      simulationType: 'traffic'
    },
    {
      id: 'olympics-data-analysis',
      title: 'Olympics Historical Data Analysis & Visual Analytics',
      subtitle: 'Comprehensive Exploratory Data Analysis & Country Performance Trends in Python',
      category: 'Data Science / AI',
      brief: 'An in-depth data analytics and visualization system utilizing Python, NumPy, Pandas, Matplotlib, and Seaborn to extract historical trends, medal distribution patterns, sport-wise dominance, and demographic evolutions across 120 years of Olympic games.',
      problemStatement: 'Massive historical athletic datasets are unstructured and complex to interpret without multi-dimensional statistical cleaning, trend extraction, and interactive visual correlation.',
      objective: 'Build an automated data pipeline to parse historical Olympic records, clean missing telemetry, compute country-wise tally metrics, and generate publication-quality visual insights.',
      architectureNodes: [
        { id: 'raw', label: 'Raw Olympic Dataset', desc: '120 years of athlete records, events, medals, and athlete demographics', type: 'input' },
        { id: 'clean', label: 'Pandas Cleaning Pipeline', desc: 'Duplicate handling, missing value imputation, and feature engineering', type: 'process' },
        { id: 'agg', label: 'Statistical Aggregator', desc: 'Computes country-wise medal tally, sport dominance, and age curves', type: 'memory' },
        { id: 'plots', label: 'Seaborn & Matplotlib Engine', desc: 'Generates correlation matrices, distribution curves, and time series', type: 'output' },
        { id: 'dash', label: 'Analytical Insights Dossier', desc: 'Structured summary for sports analysts and data enthusiasts', type: 'output' }
      ],
      signalFlow: [
        'Ingest raw historical Olympic CSV dataset',
        'Filter duplicate team medal entries to ensure athlete-level accuracy',
        'Group data by Country Code (NOC), Year, and Sport category',
        'Generate Country-wise cumulative medal progression graphs',
        'Analyze female participation growth trends over consecutive decades',
        'Export high-resolution analytical visual charts and metrics summary'
      ],
      technologies: ['Python 3.x', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
      hardwareUsed: ['Workstation / PC for Data Processing'],
      softwareUsed: ['Jupyter Notebook', 'VS Code', 'Python 3.x', 'Git'],
      workingPrinciple: 'The pipeline reads multi-table Olympic datasets, standardizes country designations, aggregates medal counts per event, and applies statistical regression and visualization to unearth historical patterns.',
      simulationNotes: 'Tested across 270,000+ historical athlete entries with sub-second aggregate computation using vectorized Pandas operations.',
      results: [
        'Extracted multi-decade trends across 200+ National Olympic Committees',
        'Mapped correlation between nation GDP/population and medal counts',
        'Clean, modular, and reusable data visualization notebooks on GitHub'
      ],
      futureScope: [
        'Interactive Streamlit web dashboard with real-time filtering',
        'Machine learning predictive model for future Olympic medal projections'
      ],
      githubUrl: 'https://github.com/leela1029',
      simulationType: 'olympics'
    },
    {
      id: 'water-level-indicator',
      title: 'Autonomous Water Level Indicator & Pump Controller',
      subtitle: 'Hardware Sensor Array with 555 Timer & Transistor Switch Logic',
      category: 'Embedded / IoT',
      brief: 'An autonomous hardware safety controller featuring a 555-timer IC, multi-level conductive probe sensors, transistor switching drivers, and relay actuation to monitor water reservoir levels and prevent dry run or overflow.',
      problemStatement: 'Overhead tank overflows waste millions of liters of potable water daily, while pump dry-running damages expensive motors and consumes excessive electric power.',
      objective: 'Implement an analog/digital hardware level controller that senses multiple tank thresholds (Low, Medium, High, Overflow) and automatically controls pump power with visual LED indicators and audio alarm alerts.',
      architectureNodes: [
        { id: 'probes', label: 'Conductive Water Probes', desc: 'Corrosion-resistant multi-level sensing probes in reservoir', type: 'input' },
        { id: 'switch', label: 'Transistor Switch Bank', desc: 'BC547 NPN transistor array buffering water resistance signals', type: 'process' },
        { id: 'timer', label: '555 Timer Multivibrator', desc: 'Generates pulse alerts & audio alarm frequency upon overflow', type: 'fsm' },
        { id: 'relay', label: '12V Relay Driver', desc: 'High-current relay isolating motor pump mains power', type: 'output' },
        { id: 'leds', label: 'Level LED Bar Graph', desc: 'Color-coded LEDs showing 25%, 50%, 75%, 100% reservoir levels', type: 'output' }
      ],
      signalFlow: [
        'Water reaches bottom threshold -> Low Level LED illuminates GREEN',
        'Water reaches 50% & 75% -> Mid-level transistors switch ON',
        'Water reaches 100% Max threshold -> 555 Timer triggers audio sounder',
        'Relay driver de-energizes motor contactor to cut pump power safely',
        'When level drops below 25% minimum, pump restarts automatically'
      ],
      technologies: ['555 Timer IC', 'Transistor Switching (BC547)', 'Conductive Sensing', 'Relay Interfacing', 'Circuit Prototyping'],
      hardwareUsed: ['NE555 Precision Timer IC', 'BC547 NPN Transistors', '12V SPDT Relay Module', 'Buzzer & Ultra-Bright LEDs', 'DC Power Supply'],
      softwareUsed: ['Proteus Circuit Simulation', 'Multisim'],
      workingPrinciple: 'Water conducts low-voltage sensing currents to the transistor base terminals. As the reservoir fills, each transistor conducts, lighting indicator LEDs. The top probe triggers a 555-timer oscillator to sound a buzzer and switch off the pump relay.',
      simulationNotes: 'Breadboard circuit validated with 1000+ switching cycles without relay chatter or contact welding.',
      results: [
        '100% reliable pump cutoff preventing water overflow and wastage',
        'Low-cost, rugged hardware build requiring zero software maintenance',
        'Visual LED bar graph provides instant glanceable tank status'
      ],
      futureScope: [
        'Ultrasonic non-contact depth sensor upgrade with ESP32 IoT mobile app',
        'Solar powered remote reservoir monitoring telemetry'
      ],
      githubUrl: 'https://github.com/leela1029',
      simulationType: 'waterlevel'
    }
  ] as Project[],

  experience: [
    {
      role: 'VLSI & Digital Engineering Intern',
      company: 'SkillDzire Technologies Private Limited',
      period: 'May 2025 – June 2025',
      location: 'Hyderabad, India (Industrial Virtual)',
      type: 'Industrial Technical Internship',
      highlights: [
        'Completed comprehensive practical training in Digital VLSI Design methodologies and RTL modeling using Verilog HDL.',
        'Developed synthesizable digital modules including traffic priority controllers, synchronous FIFO buffers, and finite state machines (FSM).',
        'Conducted functional verification and created self-checking testbenches in ModelSim to validate setup/hold margins and corner cases.',
        'Explored FPGA architecture fundamentals including Look-Up Tables (LUTs), Configurable Logic Blocks (CLBs), and Vivado synthesis flows.',
        'Earned official Certificate of Completion (Credential ID: SDST-25-13055).'
      ],
      technologies: ['Verilog HDL', 'ModelSim', 'EDA Playground', 'Digital VLSI', 'FPGA Design', 'FSM Modeling', 'Testbench Verification']
    },
    {
      role: 'Data Analysis Using Python Intern',
      company: 'APSSDC (Department of Skills Development & Training, Govt of AP)',
      period: 'Summer 2025',
      location: 'Andhra Pradesh, India',
      type: 'Government Skill Development Internship',
      highlights: [
        'Completed intensive industrial training in Data Analysis Using Python organized by Andhra Pradesh State Skill Development Corporation (APSSDC).',
        'Engineered data analytics pipelines using NumPy, Pandas, Matplotlib, and Seaborn for multi-dimensional data exploration.',
        'Analyzed historical 120-year Olympics dataset to extract medal trends, nation-wise performance curves, and sport dominance distributions.',
        'Presented analytical findings through publication-grade interactive graphs, statistical heatmaps, and Jupyter documentation.'
      ],
      technologies: ['Python 3.x', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Exploratory Data Analysis']
    }
  ] as ExperienceEntry[],

  certifications: [
    {
      id: 'cert-aiml',
      title: 'Artificial Intelligence and Machine Learning (AI & ML) Virtual Internship',
      issuer: 'APSCHE & SmartBridge Educational Services Pvt. Ltd.',
      issueDate: 'August 03, 2026',
      category: 'AI & ML',
      credentialId: 'VIP-AIML-2026-2558',
      duration: '2 Months (120 Hours)',
      verifiedBy: 'Andhra Pradesh State Council of Higher Education (Govt. of A.P)',
      pdfUrl: '/assets/certificates/aiml_internship.pdf',
      skillsCovered: ['Machine Learning', 'Artificial Intelligence', 'Python Programming', 'Supervised Learning', 'Neural Networks', 'SmartBridge Platform'],
      description: 'Short-Term 120-hour Virtual Internship Program on Artificial Intelligence and Machine Learning organized by SmartBridge in collaboration with APSCHE (A Statutory Body of the Government of Andhra Pradesh).'
    },
    {
      id: 'cert-vlsi',
      title: 'Very Large Scale Integration (VLSI) & Verilog Design Internship',
      issuer: 'SkillDzire Technologies Private Limited',
      issueDate: 'June 30, 2025',
      category: 'VLSI & HDL',
      credentialId: 'SDST-25-13055',
      duration: 'May 03, 2025 – June 30, 2025',
      verifiedBy: 'SkillDzire Technologies Certification Board',
      pdfUrl: '/assets/certificates/vlsi_internship.pdf',
      skillsCovered: ['Verilog HDL', 'Digital VLSI Design', 'EDA Playground', 'ModelSim Simulation', 'FSM State Encoding', 'RTL Modeling'],
      description: 'Hands-on industrial technical internship covering RTL modeling in Verilog HDL, synchronous state machines, simulation verification, and digital traffic priority systems.'
    },
    {
      id: 'cert-wadhwani',
      title: 'Ignite India – Entrepreneurship & Business Modeling Certification',
      issuer: 'Wadhwani Foundation (Wadhwani Global Entrepreneur)',
      issueDate: 'October 31, 2025',
      category: 'Entrepreneurship',
      credentialId: '6904d0c1340b394e18f0f7cb',
      duration: '42 Hours Coursework & Assessment',
      verifiedBy: 'Meetul Patel, President - Wadhwani Global Entrepreneur',
      pdfUrl: '/assets/certificates/wadhwani_ignite.pdf',
      skillsCovered: ['Ideation', 'Business Modeling', 'Financial Planning', 'Startup Strategy', 'Problem Formulation', 'Entrepreneurial Impact'],
      description: 'Certificate of Content Completion confirming 42 hours of rigorous training in ideation, value proposition formulation, business modeling, and financial planning for high-impact engineering ventures.'
    },
    {
      id: 'cert-python-data',
      title: 'Data Analysis Using Python Summer Online Internship',
      issuer: 'Andhra Pradesh State Skill Development Corporation (APSSDC)',
      issueDate: 'Summer 2025',
      category: 'Data Science',
      credentialId: 'APSSDC-PYTHON-DS-2025',
      duration: 'Summer Internship Program',
      verifiedBy: 'Department of Skills Development & Training, Govt of Andhra Pradesh',
      pdfUrl: '/assets/certificates/python_data_analysis.pdf',
      skillsCovered: ['Python Data Analysis', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statistical Cleaning', 'Visual Analytics'],
      description: 'Official government certification from APSSDC verifying successful completion of the Summer Online Internship on Data Analysis Using Python with hands-on Olympic dataset analysis.'
    }
  ] as Certification[],

  education: [
    {
      degree: 'B.Tech in Electronics & Communication Engineering (ECE)',
      field: 'Electronics & Communication Engineering',
      institution: 'GIET Engineering College (JNTUK)',
      location: 'Rajahmundry, Andhra Pradesh, India',
      period: '2023 – 2027',
      status: 'Undergraduate (Pursuing)',
      score: 'CGPA: 8.2 / 10.0 | Roll: 23T91A0402',
      coursework: [
        'Digital Electronics & Logic Design',
        'VLSI Design & Technology',
        'Data Structures & Algorithms',
        'Microprocessors & Microcontrollers (8086 / ARM)',
        'Network Analysis & Signals',
        'Linear Integrated Circuits (LIC & 555 Timer)',
        'Embedded Systems & IoT',
        'Python Programming & Data Analytics'
      ],
      achievements: [
        'Maintained strong 8.2 CGPA across rigorous core engineering & hardware laboratory curriculums',
        'Active technical builder on FPGA RTL hardware, Python data analytics, and LeetCode algorithmic problem solving (30+ solved, 20-Day Streak)',
        'Completed verified industrial internships in Digital VLSI (SkillDzire), AI/ML (APSCHE/SmartBridge), and Python Data Analysis (APSSDC)'
      ]
    },
    {
      degree: 'Intermediate (10+2) – MPC (Maths, Physics, Chemistry)',
      field: 'Higher Secondary Education',
      institution: 'Sri Chaitanya Junior College',
      location: 'Andhra Pradesh, India',
      period: '2021 – 2023',
      status: 'Completed',
      score: 'Score: 93.3%',
      coursework: ['Advanced Mathematics (Calculus / Algebra)', 'Physics (Semiconductor & Electromagnetism)', 'Chemistry', 'Computer Science'],
      achievements: ['Achieved 93.3% distinction score with deep grounding in semiconductor physics and advanced calculus.']
    },
    {
      degree: 'Secondary School Certificate (SSC 10th Standard)',
      field: 'General High School Studies',
      institution: 'Gayatri School',
      location: 'Andhra Pradesh, India',
      period: '2020 – 2021',
      status: 'Completed',
      score: 'Score: 99.6%',
      coursework: ['Mathematics', 'Science & Physical Sciences', 'Social Studies', 'Languages'],
      achievements: ['Secured exceptional 99.6% academic standing across all foundational disciplines.']
    }
  ] as EducationEntry[],

  achievements: [
    { title: 'LeetCode Problem Solver', desc: 'Solved 30+ algorithmic problems with active streak & continuous learning', icon: 'Code2' },
    { title: '20-Day Coding Streak', desc: 'Earned consistency badge on algorithmic data structures & problem solving', icon: 'Sparkles' },
    { title: 'APSCHE 120-Hr AI/ML Fellow', desc: 'Completed 120-hour intensive AI & Machine Learning virtual internship', icon: 'Award' },
    { title: '99.6% High School Distinction', desc: 'Top-tier academic excellence in mathematics and foundational sciences', icon: 'CheckCircle2' }
  ],

  terminalCommands: [
    { cmd: 'help', desc: 'List all available terminal commands' },
    { cmd: 'about', desc: 'Display engineering background & core specs' },
    { cmd: 'skills', desc: 'Print digital design, VLSI & Python skill hierarchy' },
    { cmd: 'projects', desc: 'List all featured FPGA & hardware projects' },
    { cmd: 'lab', desc: 'Jump to the interactive Virtual Engineering Lab' },
    { cmd: 'system', desc: 'Run real-time chip diagnostic & telemetry check' },
    { cmd: 'verilog', desc: 'Print sample synthesizable Verilog FIFO module' },
    { cmd: 'pinout', desc: 'Inspect FPGA pinout mapping & I/O standards' },
    { cmd: 'experience', desc: 'Show SkillDzire & APSSDC internship timeline' },
    { cmd: 'education', desc: 'Display GIET College academic profile' },
    { cmd: 'certifications', desc: 'View verified certificates (AI/ML, VLSI, Wadhwani, APSSDC)' },
    { cmd: 'contact', desc: 'Show email, phone, GitHub, LinkedIn & LeetCode endpoints' },
    { cmd: 'resume', desc: 'Download official Leelaprasad resume PDF' },
    { cmd: 'clear', desc: 'Clear terminal screen buffer' }
  ]
};
