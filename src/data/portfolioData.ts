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
      id: 'sync-fifo-buffer',
      title: 'Synchronous FIFO Buffer Memory Architecture',
      subtitle: 'Circular Pointer Based Synthesizable Queue in Verilog HDL',
      category: 'Digital VLSI',
      brief: 'A high-speed, parameterized Synchronous FIFO (First-In, First-Out) memory block in Verilog HDL designed for cross-subsystem buffering, featuring dual circular pointers and glitch-free Full/Empty flag generation.',
      problemStatement: 'Digital compute modules and serial transceivers operating at identical clock frequencies often have mismatched processing bursts, leading to data loss without intermediate hardware buffering.',
      objective: 'Design a synthesizable FIFO buffer with parameterizable depth and word width, circular pointer mechanics, and zero-latency status flag evaluation.',
      architectureNodes: [
        { id: 'in', label: 'Data Input Bus', desc: 'Parallel 8-bit / 16-bit incoming data bus', type: 'input' },
        { id: 'wr_ptr', label: 'Write Pointer Logic', desc: 'Circular pointer with wrap-around MSB bit for full detection', type: 'fsm' },
        { id: 'sram', label: 'Dual-Port SRAM Array', desc: 'Hardware-synthesized dual-port register memory array', type: 'memory' },
        { id: 'rd_ptr', label: 'Read Pointer Logic', desc: 'Circular pointer tracking next valid data word to dequeue', type: 'fsm' },
        { id: 'flags', label: 'Flag Arbiter', desc: 'Combinational comparator asserting FIFO_FULL and FIFO_EMPTY', type: 'output' },
        { id: 'out', label: 'Data Output Bus', desc: 'Registered parallel data output bus with valid strobe', type: 'output' }
      ],
      signalFlow: [
        'Write request arrives with data_in when FIFO is not full',
        'Write pointer advances and data is latched into memory array',
        'Flag generator evaluates pointer offsets',
        'Read request latches data_out from read pointer index',
        'Read pointer increments with automatic wrap-around'
      ],
      technologies: ['Verilog HDL', 'Synchronous SRAM', 'Circular Pointers', 'ModelSim Simulation'],
      hardwareUsed: ['FPGA Evaluation Board', 'Logic Analyzer'],
      softwareUsed: ['ModelSim', 'QuestaSim', 'Xilinx Vivado', 'EDA Playground'],
      workingPrinciple: 'Uses an (N+1)-bit pointer architecture for 2^N deep memory. When MSBs differ and remaining bits match, FIFO is FULL; when all bits match, FIFO is EMPTY.',
      verilogSnippet: `// ========================================================
// Module: sync_fifo.v
// Designer: Leelaprasad Baggu (ECE - VLSI & Digital Design)
// Description: Parameterized Synchronous FIFO with Full/Empty Logic
// ========================================================
module sync_fifo #(
    parameter DATA_WIDTH = 8,
    parameter ADDR_WIDTH = 4 // Depth = 16
)(
    input  wire                  clk,
    input  wire                  rst_n,
    input  wire                  wr_en,
    input  wire                  rd_en,
    input  wire [DATA_WIDTH-1:0] wr_data,
    output reg  [DATA_WIDTH-1:0] rd_data,
    output wire                  full,
    output wire                  empty
);
    localparam DEPTH = 1 << ADDR_WIDTH;
    reg [DATA_WIDTH-1:0] mem [0:DEPTH-1];
    reg [ADDR_WIDTH:0]   wr_ptr, rd_ptr;

    assign empty = (wr_ptr == rd_ptr);
    assign full  = (wr_ptr[ADDR_WIDTH] != rd_ptr[ADDR_WIDTH]) &&
                   (wr_ptr[ADDR_WIDTH-1:0] == rd_ptr[ADDR_WIDTH-1:0]);

    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin
            wr_ptr <= 0;
            rd_ptr <= 0;
        end else begin
            if (wr_en && !full) begin
                mem[wr_ptr[ADDR_WIDTH-1:0]] <= wr_data;
                wr_ptr <= wr_ptr + 1;
            end
            if (rd_en && !empty) begin
                rd_data <= mem[rd_ptr[ADDR_WIDTH-1:0]];
                rd_ptr <= rd_ptr + 1;
            end
        end
    end
endmodule`,
      simulationNotes: 'Verified 100% testbench coverage on ModelSim including simultaneous read/write, overflow prevention, and underflow holds.',
      results: [
        'Synthesized successfully with zero hold time violations',
        'Capable of 200+ MHz synchronous throughput on Artix-7 fabric',
        'Zero data corruption during full/empty boundary oscillations'
      ],
      futureScope: ['Dual-clock Asynchronous FIFO with 2-flop Gray code synchronizers'],
      githubUrl: 'https://github.com/leela1029',
      simulationType: 'fifo'
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
    },
    {
      id: 'uart-transceiver',
      title: 'UART Transceiver Core (8-N-1)',
      subtitle: 'Synthesizable Serial Transceiver with 16x Oversampling Receiver',
      category: 'Digital System',
      brief: 'A robust, synthesizable Universal Asynchronous Receiver-Transmitter (UART) core modeled in Verilog HDL supporting 115,200 baud, featuring independent TX/RX state machines and a 16x oversampling clock synchronizer.',
      problemStatement: 'Asynchronous serial links are prone to clock drift and phase jitter between disparate clock domains, causing bit corruption without adequate oversampling and center-sample latching.',
      objective: 'Design a clean 8-data bit, no-parity, 1-stop bit UART core capable of reliable bidirectional full-duplex serial data transmission over unshielded channels.',
      architectureNodes: [
        { id: 'baud', label: 'Baud Rate Generator', desc: 'Clock divider generating bit-rate ticks and 16x oversample ticks', type: 'process' },
        { id: 'tx_fsm', label: 'TX State Machine', desc: 'IDLE -> START -> 8-BIT DATA -> STOP bit serializer', type: 'fsm' },
        { id: 'rx_samp', label: '16x Oversampler', desc: 'Samples RX line at 16x baud frequency and samples center bit (tick 8)', type: 'process' },
        { id: 'rx_fsm', label: 'RX State Machine', desc: 'Validates START bit, latches 8 payload bits, verifies STOP bit', type: 'fsm' },
        { id: 'buf', label: 'RX/TX Data Registers', desc: 'Holding registers with tx_busy and rx_done status strobes', type: 'output' }
      ],
      signalFlow: [
        'TX receives 8-bit parallel byte with tx_start strobe',
        'TX asserts START bit (LOW) for 1 bit period',
        'TX shifts out 8 data bits (LSB first) clocked by Baud Clock',
        'TX sends STOP bit (HIGH) and asserts tx_done',
        'RX continuously samples RX_PIN with 16x oversampling clock',
        'RX identifies mid-bit point (tick 7/15) to latch clean bit values',
        'RX verifies valid STOP bit and asserts rx_done with parallel byte'
      ],
      technologies: ['Verilog HDL', 'Serial Protocols', '16x Oversampling', 'FSM Design', 'FPGA Prototyping'],
      hardwareUsed: ['FPGA Board', 'FTDI USB-to-UART Bridge (FT232RL)', 'Oscilloscope / Logic Analyzer'],
      softwareUsed: ['ModelSim', 'QuestaSim', 'Putty / Serial Terminal', 'Xilinx Vivado'],
      workingPrinciple: 'The transmitter uses a 4-state FSM to serialize bytes. The receiver avoids clock drift errors by oversampling the RX line 16 times per nominal bit duration and latching data at the center sample (sample #8).',
      verilogSnippet: `// ========================================================
// Module: uart_tx.v
// Designer: Leelaprasad Baggu (ECE - VLSI & Digital Design)
// Description: Synthesizable 8-N-1 UART Transmitter Core
// ========================================================
module uart_tx #(
    parameter CLK_FREQ  = 100_000_000,
    parameter BAUD_RATE = 115_200
)(
    input  wire       clk,
    input  wire       rst_n,
    input  wire       tx_start,
    input  wire [7:0] tx_data,
    output reg        tx_line,
    output reg        tx_busy,
    output reg        tx_done
);
    localparam CLKS_PER_BIT = CLK_FREQ / BAUD_RATE;
    localparam S_IDLE  = 2'b00, S_START = 2'b01, 
               S_DATA  = 2'b10, S_STOP  = 2'b11;

    reg [1:0]  state;
    reg [15:0] clk_cnt;
    reg [2:0]  bit_idx;
    reg [7:0]  data_buf;

    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin
            state    <= S_IDLE;
            tx_line  <= 1'b1;
            tx_busy  <= 1'b0;
            tx_done  <= 1'b0;
            clk_cnt  <= 0;
            bit_idx  <= 0;
        end else begin
            case (state)
                S_IDLE: begin
                    tx_line <= 1'b1;
                    tx_done <= 1'b0;
                    if (tx_start) begin
                        tx_busy  <= 1'b1;
                        data_buf <= tx_data;
                        state    <= S_START;
                        clk_cnt  <= 0;
                    end
                end
                S_START: begin
                    tx_line <= 1'b0;
                    if (clk_cnt == CLKS_PER_BIT - 1) begin
                        clk_cnt <= 0;
                        state   <= S_DATA;
                        bit_idx <= 0;
                    end else clk_cnt <= clk_cnt + 1;
                end
                S_DATA: begin
                    tx_line <= data_buf[bit_idx];
                    if (clk_cnt == CLKS_PER_BIT - 1) begin
                        clk_cnt <= 0;
                        if (bit_idx == 3'd7) state <= S_STOP;
                        else bit_idx <= bit_idx + 1;
                    end else clk_cnt <= clk_cnt + 1;
                end
                S_STOP: begin
                    tx_line <= 1'b1;
                    if (clk_cnt == CLKS_PER_BIT - 1) begin
                        state   <= S_IDLE;
                        tx_busy <= 1'b0;
                        tx_done <= 1'b1;
                    end else clk_cnt <= clk_cnt + 1;
                end
            endcase
        end
    end
endmodule`,
      simulationNotes: 'Simulated loopback testbench verifying transmission and reception of ASCII character sequences ("LEELA_FPGA_LAB") at 115,200 baud.',
      timingDetails: 'Baud error rate < 0.16% at 100MHz system clock. Stable communication across 5-meter unshielded twisted pair.',
      results: [
        'Achieved error-free serial communication at 115200 baud',
        'Clean waveform capture validated on 100MHz Digital Storage Oscilloscope',
        'Compact footprint: consumes less than 1% of Spartan-6 logic slices'
      ],
      futureScope: ['Direct Memory Access (DMA) channel integration for bulk packet streaming'],
      githubUrl: 'https://github.com/leela1029',
      simulationType: 'uart'
    },
    {
      id: 'railway-gate-controller',
      title: 'Automatic Railway Gate Controller',
      subtitle: 'FSM-Driven Hardware Safety Interlock with Track Sensors & Warning Alarm',
      category: 'Digital System',
      brief: 'An autonomous digital safety controller that monitors dual directional track sensors, executes fail-safe gate descent with audible and visual alarms prior to train arrival, and safely reopens after full clearance.',
      problemStatement: 'Manual railway level crossings suffer from human errors, communication lags, and tragic intersection accidents. A deterministic, real-time hardware controller ensures zero latency and safety compliance.',
      objective: 'Implement a fail-safe state machine in Verilog with dual track sensor debouncing, servo gate actuator signals, and emergency fault override triggers.',
      architectureNodes: [
        { id: 's1', label: 'Entry Track Sensor', desc: 'Optoelectronic sensor detecting approaching train 1km ahead', type: 'input' },
        { id: 'debounce', label: 'Digital Debouncer', desc: 'Hardware filter preventing false triggers from vibration/noise', type: 'process' },
        { id: 'fsm', label: 'Safety FSM Core', desc: 'Strict multi-stage state transitions with watchdog timers', type: 'fsm' },
        { id: 'servo', label: 'PWM Gate Actuator', desc: 'Drives servo motor for smooth 90-degree gate descent/ascent', type: 'output' },
        { id: 'alarm', label: 'Alarm & LED Strobe', desc: 'Red warning flasher and high-decibel buzzer alert', type: 'output' },
        { id: 's2', label: 'Exit Track Sensor', desc: 'Detects train rear end clearing intersection', type: 'input' }
      ],
      signalFlow: [
        'Approaching train trips Entry Sensor S1',
        'Debouncer validates stable signal for 50ms',
        'FSM transitions: IDLE -> WARNING_ACTIVATED',
        'Buzzer sounds and Red Strobe LEDs alternate flashing at 2 Hz',
        'After 5s safety warning delay, FSM transitions: GATE_CLOSING',
        'PWM module ramps servo down to 0 degrees (Gate Locked)',
        'Train crosses intersection safely with road traffic stopped',
        'Train rear trips Exit Sensor S2',
        'FSM transitions: GATE_OPENING -> IDLE'
      ],
      technologies: ['Verilog HDL', 'FSM State Controller', 'PWM Motor Control', 'IR / Optical Sensors', 'Fail-Safe Logic'],
      hardwareUsed: ['Microcontroller / FPGA Board', 'IR Long-Range Track Sensors', 'SG90 / MG996R Servo Motors', 'Piezo Sounder & Ultra-Bright LEDs'],
      softwareUsed: ['ModelSim', 'Proteus / Circuit Simulation', 'EDA Playground'],
      workingPrinciple: 'Built on a 5-state safety FSM with hardware timeout watchdogs. If the train stops between sensors, a fail-safe timer keeps gates lowered until manual supervisor clearance.',
      simulationNotes: 'Validated FSM state transition completeness and recovery behavior from asynchronous emergency reset.',
      results: [
        'Achieved 100% reliable automated gate actuation in hardware breadboard tests',
        'Zero false alarm triggers with digital 50ms glitch filter',
        'Deterministic state execution with hardware watchdog fail-safe'
      ],
      futureScope: ['Solar powered backup with battery charge telemetry'],
      githubUrl: 'https://github.com/leela1029',
      simulationType: 'railway'
    },
    {
      id: 'fpga-smart-parking',
      title: 'FPGA-Based Smart Parking System',
      subtitle: 'Real-Time Slot Occupancy Monitor with 7-Segment Decoder in Verilog HDL',
      category: 'FPGA / Verilog',
      brief: 'An FPGA hardware-based multi-slot vehicle detection system featuring infrared slot occupancy transceivers, synchronous vacancy counters, and a multiplexed 7-segment display driver in Verilog HDL.',
      problemStatement: 'Commercial parking facilities suffer from congestion and inefficient manual slot allocation, causing drivers to waste time and fuel hunting for vacant spots.',
      objective: 'Construct a digital hardware occupancy monitor that detects slot entries/exits, computes real-time vacant spot counts, and displays status on dual 7-segment LEDs with full-lot gate lockout.',
      architectureNodes: [
        { id: 'slots', label: '4-Slot IR Array', desc: 'Active infrared obstacle sensors positioned at each parking stall', type: 'input' },
        { id: 'sync', label: 'Input Synchronizer', desc: 'Double-flop metastability synchronizer for sensor lines', type: 'process' },
        { id: 'counter', label: 'Vacancy Logic', desc: 'Calculates Vacant = TOTAL_SLOTS - sum(Occupied)', type: 'process' },
        { id: 'seven_seg', label: '7-Segment Decoder', desc: 'Converts binary count into 7-segment cathode signals (A-G)', type: 'output' },
        { id: 'gate', label: 'Entry Gate Barrier', desc: 'Permits entry only when Vacant Count > 0', type: 'output' }
      ],
      signalFlow: [
        'Vehicle occupies Slot 2 -> IR Sensor 2 outputs LOW',
        'Input Synchronizer safely registers sensor state into FPGA clock domain',
        'Combinational adder computes total occupied count: 1 + 0 + 0 + 0 = 1',
        'Subtracter evaluates Available Spots: 4 - 1 = 3',
        '7-Segment Decoder formats digit "3" (segments: A, B, C, D, G)',
        'Entry display updates immediately; Entry barrier permits incoming vehicles',
        'When Available Spots == 0 -> Assert FULL_FLAG & Lock Entry Gate'
      ],
      technologies: ['Verilog HDL', 'FPGA Prototyping', '7-Segment Display Decoding', 'IR Sensors', 'Combinational Logic'],
      hardwareUsed: ['FPGA Board (Basys3 / Spartan-6)', '4x TCRT5000 IR Sensor Modules', 'Common Anode 7-Segment Display', 'Status LEDs & Gate Solenoid'],
      softwareUsed: ['ModelSim', 'Xilinx Vivado', 'EDA Playground'],
      workingPrinciple: 'All 4 slot sensors are mapped to FPGA I/O pins. The RTL combinational block instantly computes available slots and drives a time-multiplexed 7-segment display driver.',
      simulationNotes: 'Tested across all 16 input combinations (0000 to 1111) verifying correct segment decoder activation and full status flags.',
      results: [
        'Instantaneous 0-nanosecond software delay for slot availability updates',
        'Successful hardware implementation on FPGA with 4 IR optical nodes',
        'Rock-solid logic verified under high-frequency sensor toggles'
      ],
      futureScope: ['Expansion to 32-slot matrix using shift-register cascading'],
      githubUrl: 'https://github.com/leela1029',
      simulationType: 'parking'
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
