// prince2ContentData.js

// --- PRINCE2 Content Structure (Extensive) ---
export const prince2Content = {
    modules: {
        overview: {
            title: "Module 1: Overview of PRINCE2 Project Management",
            description: "Learn key concepts, characteristics of a project, aspects of performance, and the five integrated elements of PRINCE2.",
            steps: [
                { type: 'dialogue', text: ["A project is a temporary organization created to deliver business products according to an agreed business case.", "It's different from 'business as usual'."] },
                { type: 'dialogue', text: ["Projects are characterized by change, being temporary, cross-functional, unique, and having uncertainty."] },
                { type: 'quiz', id: 'projectCharacteristicsQuiz' },
                { type: 'dialogue', text: ["PRINCE2 focuses on managing seven aspects of project performance: Benefits, Costs, Time, Quality, Scope, Sustainability, and Risk."] },
                { type: 'quiz', id: 'sevenAspectsQuiz' },
                { type: 'dialogue', text: ["The five integrated elements of PRINCE2 are Principles, People, Practices, Processes, and Project Context. These elements are central to the method."] },
                { type: 'quiz', id: 'fiveElementsQuiz' },
                { type: 'reward', xp: 100, item: "PRINCE2 Overview Certificate" }
            ],
            nextModule: 'principles', // Define next module to unlock
            currentStepIndex: 0,
            completed: false
        },
        principles: {
            title: "Module 2: PRINCE2 Principles",
            description: "Understand the seven guiding obligations and good practices that define a PRINCE2 project. Unless applied, it's not a PRINCE2 project.",
            steps: [
                { type: 'dialogue', text: ["The 7 Principles are: Ensure Continued Business Justification, Learn from Experience, Define Roles and Responsibilities, Manage by Stages, Manage by Exception, Focus on Products, and Tailor to Suit the Project."] },
                { type: 'dialogue', text: ["'Ensure Continued Business Justification': every project needs a justifiable reason that remains valid throughout its life."] },
                { type: 'quiz', id: 'bizJustificationPrincipleQuiz' },
                { type: 'dialogue', text: ["'Learn from Experience': actively seek, record, and apply lessons from prior and ongoing projects."] },
                { type: 'quiz', id: 'learnFromExperiencePrincipleQuiz' },
                { type: 'dialogue', text: ["'Define Roles and Responsibilities': clear and agreed roles for all stakeholders (business, user, supplier)."] },
                { type: 'dialogue', text: ["'Manage by Stages': planning, monitoring, and control on a stage-by-stage basis, with decision points."] },
                { type: 'dialogue', text: ["'Manage by Exception': establish limits (tolerances) for performance; deviations trigger escalation to the next management level."] },
                { type: 'dialogue', text: ["'Focus on Products': define and deliver products based on user quality expectations."] },
                { type: 'dialogue', text: ["'Tailor to Suit the Project': apply and adapt PRINCE2 to the project's environment, size, complexity, etc. Principles cannot be changed."] },
                { type: 'quiz', id: 'allPrinciplesQuiz' },
                { type: 'reward', xp: 150, item: "PRINCE2 Principles Badge" }
            ],
            nextModule: 'people',
            currentStepIndex: 0,
            completed: false
        },
        people: {
            title: "Module 3: People in PRINCE2 Project Management",
            description: "Understand the importance of people, change management, stakeholders, and communication in successful projects.",
            steps: [
                { type: 'dialogue', text: ["People are central to PRINCE2, encompassing those working on the project and those affected by it."] },
                { type: 'dialogue', text: ["Projects introduce change, and effective leadership is needed to manage this transition from current to target state."] },
                { type: 'quiz', id: 'changeManagementQuiz' },
                { type: 'dialogue', text: ["A 'stakeholder' is any individual, group, or organization that can affect or be affected by (or perceives itself to be affected by) the project."] },
                { type: 'dialogue', text: ["Stakeholders can support or oppose, gain or lose, and become supporters or blockers. Buy-in is crucial."] },
                { type: 'quiz', id: 'stakeholderQuiz' },
                { type: 'dialogue', text: ["Communication is key to avoid misconceptions. PRINCE2 uses a Communication Management Approach to define means and frequency of communication."] },
                { type: 'reward', xp: 120, item: "Communication Strategy Guide" }
            ],
            nextModule: 'organization',
            currentStepIndex: 0,
            completed: false
        },
        organization: {
            title: "Module 4: Organization Practice",
            description: "Define and establish the project's structure of accountability and responsibilities ('the who').",
            steps: [
                { type: 'dialogue', text: ["PRINCE2 focuses on three principal categories of project stakeholders: Business, User, and Supplier."] },
                { type: 'dialogue', text: ["The 'Business' interest is represented by the Executive, ensuring continued business need and value for money."] },
                { type: 'dialogue', text: ["The 'User' interest is represented by the Senior User, ensuring products provide benefits and meet requirements."] },
                { type: 'dialogue', text: ["The 'Supplier' interest is represented by the Senior Supplier, providing resources and expertise to deliver products."] },
                { type: 'quiz', id: 'rolesAndResponsibilitiesQuiz' },
                { type: 'dialogue', text: ["The project management structure has four levels: Business Layer (commissioning), Directing (Project Board), Managing (Project Manager), and Delivering (Team Managers)."] },
                { type: 'dialogue', text: ["The Project Initiation Documentation (PID) is a single source of reference, providing direction and scope, and forming a 'contract' between the Project Manager and Project Board."] },
                { type: 'reward', xp: 130, item: "Project Board Mandate" }
            ],
            nextModule: 'startingUpInitiating',
            currentStepIndex: 0,
            completed: false
        },
        startingUpInitiating: {
            title: "Module 5: Starting up a Project and Initiating a Project",
            description: "Learn the initial processes to ensure a viable project is planned and justified before significant resources are committed.",
            steps: [
                { type: 'dialogue', text: ["'Starting Up a Project' (SU) ensures prerequisites for initiating are met, answering 'Do we have a viable and worthwhile project?' It prevents poorly conceived ideas from being initiated."] },
                { type: 'dialogue', text: ["Objectives of SU include: business justification (outline business case), authorities exist, sufficient information for scope (project brief), alternative approaches evaluated, key individuals appointed, and initiation stage planned."] },
                { type: 'quiz', id: 'startingUpProjectQuiz' },
                { type: 'dialogue', text: ["'Initiating a Project' establishes solid foundations, allowing the business to understand the work before committing significant expenditure."] },
                { type: 'dialogue', text: ["Objectives of Initiating a Project include common understanding of: reasons/benefits/risks (full business case), scope, delivery (how/when/cost), decision-makers, quality, baselines/control, risks/issues control, progress monitoring, information needs, and business policy application."] },
                { type: 'quiz', id: 'initiatingProjectQuiz' },
                { type: 'reward', xp: 140, item: "Project Initiation Document Example" }
            ],
            nextModule: 'businessCase',
            currentStepIndex: 0,
            completed: false
        },
        businessCase: {
            title: "Module 6: Business Case Practice",
            description: "Establish mechanisms to judge whether the project is (and remains) desirable, viable, and achievable.",
            steps: [
                { type: 'dialogue', text: ["The Business Case documents the justification: estimated costs vs. expected benefits, offset by risks."] },
                { type: 'dialogue', text: ["Key concepts: Output (deliverable), Capability (set of outputs delivering an outcome), Outcome (result of change), Benefit (measurable improvement), Dis-benefit (measurable decline)."] },
                { type: 'quiz', id: 'businessCaseConceptsQuiz' },
                { type: 'dialogue', text: ["The Business Case evolves: outlined (Pre-project), developed (Initiation), maintained (Subsequent Stages), and confirmed (Post-project)."] },
                { type: 'dialogue', text: ["A Benefits Management Approach defines actions to ensure outcomes are achieved and benefits realized. A Sustainability Management Approach ensures sustainability targets are met."] },
                { type: 'reward', xp: 110, item: "Project Business Case Template" }
            ],
            nextModule: 'plans',
            currentStepIndex: 0,
            completed: false
        },
        plans: {
            title: "Module 7: Plans Practice",
            description: "Facilitate communication and control by defining 'what' products to deliver and 'how' to deliver them.",
            steps: [
                { type: 'dialogue', text: ["A 'plan' outlines the what, where, when, how, who, and cost. PRINCE2 uses Project Plan, Stage Plan, Team Plan (optional), and Exception Plan."] },
                { type: 'dialogue', text: ["Projects are managed by stages, providing stop-go decision points and allowing for iterative delivery."] },
                { type: 'quiz', id: 'planTypesQuiz' },
                { type: 'dialogue', text: ["Product-based planning is key: define products first, then activities. This helps determine resources, timelines, and risks."] },
                { type: 'dialogue', text: ["Steps include: Defining & Analysing Products (Project Product Description, Product Breakdown Structure, Product Descriptions, Product Flow Diagram), Organizing Work Packages, Preparing Estimates, Preparing Schedule, Preparing Budget, Analysing Risks, and Documenting the Plan."] },
                { type: 'quiz', id: 'planningTechniqueQuiz' },
                { type: 'reward', xp: 100, item: "Project Planning Guide" }
            ],
            nextModule: 'quality',
            currentStepIndex: 0,
            completed: false
        },
        quality: {
            title: "Module 8: Quality Practice",
            description: "Document user requirements for products and establish how they will be met.",
            steps: [
                { type: 'dialogue', text: ["Quality means fulfilling requirements. Key terms: User's Quality Expectations, Acceptance Criteria, Quality Specifications, and Requirement."] },
                { type: 'quiz', id: 'qualityTerminologyQuiz' },
                { type: 'dialogue', text: ["Quality Management involves: Quality Planning (capturing specifications), Quality Control (monitoring compliance), and Quality Assurance (independent check for confidence)."] },
                { type: 'dialogue', text: ["Management products: Product Description, Quality Management Approach, Quality Register, and Product Register."] },
                { type: 'reward', xp: 90, item: "Quality Management Plan" }
            ],
            nextModule: 'risk',
            currentStepIndex: 0,
            completed: false
        },
        risk: {
            title: "Module 9: Risk Practice",
            description: "Identify, assess, and control uncertainties affecting project objectives to improve success.",
            steps: [
                { type: 'dialogue', text: ["A 'risk' is an uncertain event (threat or opportunity) that affects objectives. Measured by probability and impact."] },
                { type: 'dialogue', text: ["Key concepts: Risk Owner, Risk Action Owner, Risk Probability, Risk Impact, Risk Proximity, Risk Velocity, Risk Exposure, Risk Appetite, Risk Budget, Risk Tolerance."] },
                { type: 'quiz', id: 'riskConceptsQuiz' },
                { type: 'dialogue', text: ["Risk Management Procedure: Identify (threats/opportunities), Assess (prioritize, combined profile), Plan (responses), Implement (actions), and Communicate (information)."] },
                { type: 'dialogue', text: ["Risk Response Types: Avoid/Exploit, Reduce/Enhance, Transfer, Share, Accept, Prepare Contingent Plans."] },
                { type: 'reward', xp: 110, item: "Risk Register Template" }
            ],
            nextModule: 'issues',
            currentStepIndex: 0,
            completed: false
        },
        issues: {
            title: "Module 10: Issues Practice",
            description: "Collect and assess issues and control changes to the project's baseline.",
            steps: [
                { type: 'dialogue', text: ["An 'issue' is an unplanned event requiring management action. Types: Problem (immediate negative impact), Concern (timeliness/impact to assess), External Event, Business Opportunity, Request for Change (proposal to change baseline), Off-specification (product not meeting quality specs)."] },
                { type: 'dialogue', text: ["Issue Management Procedure: Capture (initial analysis, severity/priority), Assess (impact analysis), Recommend (options), Decide (approve/reject), Implement (corrective action)."] },
                { type: 'quiz', id: 'issueTypesQuiz' },
                { type: 'dialogue', text: ["'Project baseline' is the current approved versions of management and project products subject to change control. 'Change budget' is money/constraints set aside for changes."] },
                { type: 'reward', xp: 100, item: "Issue Log Template" }
            ],
            nextModule: 'progress',
            currentStepIndex: 0,
            completed: false
        },
        progress: {
            title: "Module 11: Progress Practice",
            description: "Monitor and compare achievements, forecast objectives/viability, and control deviations.",
            steps: [
                { type: 'dialogue', text: ["Progress control is based on a Plan-Do-Check-Act cycle. It includes defining management levels and tolerances, applying event/time-driven controls, reviewing/reporting progress, forecasting, escalating, and using data."] },
                { type: 'dialogue', text: ["'Tolerances' (benefits, costs, time, quality, scope, sustainability, risk) establish limits of delegated authority."] },
                { type: 'quiz', id: 'progressControlQuiz' },
                { type: 'dialogue', text: ["'Event-driven controls' occur on specific events (e.g., end of stage, exception report). 'Time-driven controls' occur at predefined intervals (e.g., highlight reports, checkpoint reports)."] },
                { type: 'dialogue', text: ["An 'exception' is a forecast deviation beyond agreed tolerance levels. Exceptions are escalated from Team Manager (issue) to Project Manager (issue report/exception report) to Project Board (to business layer)."] },
                { type: 'reward', xp: 120, item: "Progress Report Template" }
            ],
            nextModule: 'closing',
            currentStepIndex: 0,
            completed: false
        },
        closing: {
            title: "Module 12: Closing a Project",
            description: "Provide a fixed point where project product acceptance is confirmed and objectives achieved, or ensure orderly premature closure.",
            steps: [
                { type: 'dialogue', text: ["A project is finite, with a defined start and end. A clear end is always more successful than a slow drift."] },
                { type: 'dialogue', text: ["Objectives of 'Closing a Project': check user acceptance, ensure business support for products, review project performance, assess benefits realized, address open issues/risks, and ensure orderly closure."] },
                { type: 'quiz', id: 'closingProjectQuiz' },
                { type: 'reward', xp: 150, item: "Project Closure Checklist" }
            ],
            nextModule: 'directing',
            currentStepIndex: 0,
            completed: false
        },
        directing: {
            title: "Module 13: Directing a Project",
            description: "Enable the Project Board to be accountable for project success by making key decisions and exercising overall control.",
            steps: [
                { type: 'dialogue', text: ["This process runs from project start-up until closure. The Project Board provides direction and control, managing by exception."] },
                { type: 'dialogue', text: ["Objectives: authority to initiate, authority to deliver, appropriate direction/control, project remains viable, business layer connection, authority to close, and benefits plans managed/reviewed."] },
                { type: 'dialogue', text: ["Key Project Board activities: Authorize Initiation, Authorize Project, Authorize a Stage or Exception Plan, Authorize Project Closure."] },
                { type: 'quiz', id: 'directingProjectQuiz' },
                { type: 'reward', xp: 160, item: "Project Board Governance Charter" }
            ],
            nextModule: 'courseComplete',
            currentStepIndex: 0,
            completed: false
        },
        courseComplete: {
            title: "Course Complete!",
            description: "You have reviewed all the core PRINCE2 Foundation modules. You are now ready for the exam simulation!",
            steps: [
                { type: 'dialogue', text: ["Congratulations, Project Manager! You've navigated through the core PRINCE2 Foundation concepts."] },
                { type: 'dialogue', text: ["It's time to test your knowledge with the full exam simulation."] }
            ],
            currentStepIndex: 0,
            completed: false
        }
    }
};

// --- Quiz Questions ---
export const quizzes = {
    // Module 1: Overview of PRINCE2 Project Management
    projectCharacteristicsQuiz: {
        question: "Which of the following is NOT a characteristic distinguishing project work from business as usual?",
        options: [
            { text: "Temporary", isCorrect: false },
            { text: "Unique", isCorrect: false },
            { text: "Ongoing management of operations", isCorrect: true }, // BAU characteristic
            { text: "Uncertainty", isCorrect: false }
        ],
        explanation: "Projects are temporary, unique, involve change, are cross-functional, and carry uncertainty. Ongoing management of operations describes 'business as usual'."
    },
    sevenAspectsQuiz: {
        question: "The seven aspects of project performance to be managed in PRINCE2 include Benefits, Costs, Time, Quality, Scope, Risk, and which other aspect?",
        options: [
            { text: "Resources", isCorrect: false },
            { text: "Sustainability", isCorrect: true },
            { text: "Stakeholders", isCorrect: false },
            { text: "Deliverables", isCorrect: false }
        ],
        explanation: "The seven aspects of project performance are Benefits, Costs, Time, Quality, Scope, Sustainability, and Risk."
    },
    fiveElementsQuiz: {
        question: "Which of these is NOT one of the five integrated elements of PRINCE2 Project Management?",
        options: [
            { text: "People", isCorrect: false },
            { text: "Practices", isCorrect: false },
            { text: "Products", isCorrect: true }, // 'Focus on products' is a principle, not an integrated element
            { text: "Processes", isCorrect: false }
        ],
        explanation: "The five integrated elements are Principles, People, Practices, Processes, and Project Context. 'Products' are central to the 'Focus on Products' principle, but not an element itself."
    },
    // Module 2: PRINCE2 Principles
    bizJustificationPrincipleQuiz: {
        question: "What does the 'Ensure Continued Business Justification' principle primarily facilitate?",
        options: [
            { text: "That the project has a business stakeholder to ensure investment continues to be justified.", isCorrect: false },
            { text: "That the project remains desirable, viable, and achievable as the project progresses.", isCorrect: true },
            { text: "That the products delivered by the project meet their quality requirements.", isCorrect: false },
            { text: "That the PRINCE2 method is suited to the scale of investment.", isCorrect: false }
        ],
        explanation: "The 'Ensure Continued Business Justification' principle means the project must have a valid reason for existence that remains valid throughout its life."
    },
    learnFromExperiencePrincipleQuiz: {
        question: "Which statement best describes the 'Learn from Experience' principle?",
        options: [
            { text: "Lessons must be sought, recorded, and acted upon throughout the project.", isCorrect: true },
            { text: "The project team should only learn from previous project successes.", isCorrect: false },
            { text: "External consultants are primarily responsible for capturing lessons learned.", isCorrect: false },
            { text: "Lessons learned are only relevant at the end of the project.", isCorrect: false }
        ],
        explanation: "The 'Learn from Experience' principle emphasizes actively seeking, recording, and applying lessons from prior and ongoing projects."
    },
    allPrinciplesQuiz: {
        question: "Which of the following is NOT one of the seven PRINCE2 principles?",
        options: [
            { text: "Manage by Stages", isCorrect: false },
            { text: "Define Roles, Responsibilities, and Relationships", isCorrect: false },
            { text: "Minimize Risks", isCorrect: true }, // This is a risk response, not a principle
            { text: "Tailor to Suit the Project", isCorrect: false }
        ],
        explanation: "The seven PRINCE2 principles are: Ensure Continued Business Justification, Learn from Experience, Define Roles, Responsibilities and Relationships, Manage by Stages, Manage by Exception, Focus on Products, and Tailor to Suit the Project. 'Minimize Risks' is a risk response."
    },
    // Module 3: People in PRINCE2 Project Management
    changeManagementQuiz: {
        question: "What is the purpose of the Change Management Approach in PRINCE2?",
        options: [
            { text: "To assess project risks and issues.", isCorrect: false },
            { text: "To define how the business will transition from the current to the target state.", isCorrect: true },
            { text: "To document the project's quality specifications.", isCorrect: false },
            { text: "To establish project timescales and costs.", isCorrect: false }
        ],
        explanation: "The Change Management Approach establishes the target organizational state and the means by which the business will shift from the current state through interim states."
    },
    stakeholderQuiz: {
        question: "Who is considered a 'stakeholder' in a PRINCE2 project?",
        options: [
            { text: "Any individual, group, or organization that can affect or be affected by the project.", isCorrect: true },
            { text: "Only individuals with formal roles in the project team.", isCorrect: false },
            { text: "Only external suppliers.", isCorrect: false },
            { text: "Only the Project Manager and Project Board.", isCorrect: false }
        ],
        explanation: "A stakeholder is any individual, group, or organization that can affect or be affected by (or perceives itself to be affected by) the project."
    },
    // Module 4: Organization Practice
    rolesAndResponsibilitiesQuiz: {
        question: "In PRINCE2, which role represents the 'User' interest on the project?",
        options: [
            { text: "The Executive", isCorrect: false },
            { text: "The Senior Supplier", isCorrect: false },
            { text: "The Senior User", isCorrect: true },
            { text: "The Project Manager", isCorrect: false }
        ],
        explanation: "The Senior User role is defined in PRINCE2 to represent user interests on the project."
    },
    // Module 5: Starting Up a Project and Initiating a Project
    startingUpProjectQuiz: {
        question: "What is a primary purpose of the 'Starting Up a Project' process?",
        options: [
            { text: "To allocate all project resources and begin product development.", isCorrect: false },
            { text: "To establish a full business case with detailed plans.", isCorrect: false },
            { text: "To ensure that prerequisites for initiating a project are established, checking viability.", isCorrect: true },
            { text: "To obtain user acceptance of the project product.", isCorrect: false }
        ],
        explanation: "The purpose of 'Starting Up a Project' is to ensure the prerequisites for initiating are established and to answer if the project is viable and worthwhile."
    },
    initiatingProjectQuiz: {
        question: "Which of the following is NOT an objective of the 'Initiating a Project' process?",
        options: [
            { text: "Ensuring a common understanding of the reasons and benefits for the project.", isCorrect: false },
            { text: "Planning the detailed activities for the next management stage.", isCorrect: true }, // This is Managing a Stage Boundary (or Controlling a Stage for work packages)
            { text: "Defining who is to be involved in project decision making.", isCorrect: false },
            { text: "Establishing how risks and issues will be controlled.", isCorrect: false }
        ],
        explanation: "Planning the detailed activities for the *next* management stage is typically part of 'Managing a Stage Boundary', not 'Initiating a Project'. Initiating focuses on establishing the project's foundations."
    },
    // Module 6: Business Case Practice
    businessCaseConceptsQuiz: {
        question: "Match the following term to its definition: 'The measurable improvement resulting from an outcome that is perceived as an advantage by the investing organization.'",
        options: [
            { text: "Output", isCorrect: false },
            { text: "Outcome", isCorrect: false },
            { text: "Benefit", isCorrect: true },
            { text: "Dis-benefit", isCorrect: false }
        ],
        explanation: "This is the definition of a 'Benefit'."
    },
    // Module 7: Plans Practice
    planTypesQuiz: {
        question: "Which type of PRINCE2 plan is optional and used for organizing and controlling the work of a team when executing a work package?",
        options: [
            { text: "Project Plan", isCorrect: false },
            { text: "Stage Plan", isCorrect: false },
            { text: "Team Plan", isCorrect: true },
            { text: "Exception Plan", isCorrect: false }
        ],
        explanation: "Team Plans are optional in PRINCE2 and are used to organize and control the work of a team when executing a work package."
    },
    planningTechniqueQuiz: {
        question: "In the PRINCE2 planning technique, which is the first step when defining and analyzing products?",
        options: [
            { text: "Create a Product Breakdown Structure", isCorrect: false },
            { text: "Write a Project Product Description", isCorrect: true },
            { text: "Create a Product Flow Diagram", isCorrect: false },
            { text: "Organize Work Packages", isCorrect: false }
        ],
        explanation: "The first step in defining and analysing products is to write a project product description."
    },
    // Module 8: Quality Practice
    qualityTerminologyQuiz: {
        question: "Which term describes 'a prioritized list of criteria that the project product must meet before the user will accept it'?",
        options: [
            { text: "Quality", isCorrect: false },
            { text: "Requirement", isCorrect: false },
            { text: "User's Quality Expectations", isCorrect: false },
            { text: "Acceptance Criteria", isCorrect: true }
        ],
        explanation: "This is the definition of Acceptance Criteria."
    },
    // Module 9: Risk Practice
    riskConceptsQuiz: {
        question: "In risk management, what is defined as 'the estimated chance that a risk will occur'?",
        options: [
            { text: "Risk Impact", isCorrect: false },
            { text: "Risk Proximity", isCorrect: false },
            { text: "Risk Probability", isCorrect: true },
            { text: "Risk Exposure", isCorrect: false }
        ],
        explanation: "Risk Probability is the estimated chance that a risk will occur."
    },
    // Module 10: Issues Practice
    issueTypesQuiz: {
        question: "An unplanned event has occurred, and a product will not meet its quality specifications. What type of issue is this?",
        options: [
            { text: "Problem", isCorrect: false },
            { text: "Request for Change", isCorrect: false },
            { text: "Off-specification", isCorrect: true },
            { text: "Business Opportunity", isCorrect: false }
        ],
        explanation: "An 'off-specification' is a product that will not meet its quality specifications."
    },
    // Module 11: Progress Practice
    progressControlQuiz: {
        question: "Which of the following is a 'time-driven control' in PRINCE2?",
        options: [
            { text: "The end of a stage", isCorrect: false },
            { text: "The creation of an exception report", isCorrect: false },
            { text: "Producing monthly highlight reports for the Project Board", isCorrect: true },
            { text: "The completion of the Project Initiation Documentation", isCorrect: false }
        ],
        explanation: "Time-driven controls occur at predefined periodic intervals, such as producing highlight reports. The others are 'event-driven controls'."
    },
    // Module 12: Closing a Project
    closingProjectQuiz: {
        question: "What is a key objective when 'Closing a Project'?",
        options: [
            { text: "To initiate the next project stage.", isCorrect: false },
            { text: "To ensure user acceptance of the project product.", isCorrect: true },
            { text: "To develop new project team members.", isCorrect: false },
            { text: "To determine future project funding.", isCorrect: false }
        ],
        explanation: "A key objective of 'Closing a Project' is to check user acceptance of the project product."
    },
    // Module 13: Directing a Project
    directingProjectQuiz: {
        question: "Which activity is the Project Board performing when it reviews the performance of the current stage and approves the plan for the next stage?",
        options: [
            { text: "Authorizing Initiation", isCorrect: false },
            { text: "Authorizing the Project", isCorrect: false },
            { text: "Authorizing a Stage or Exception Plan", isCorrect: true },
            { text: "Authorizing Project Closure", isCorrect: false }
        ],
        explanation: "The Project Board authorizes a stage by reviewing current stage performance and approving the next stage plan."
    }
};

// --- Exam Questions ---
// Sample questions derived from the provided PDF (Sample Paper 1 & 2)
export const examQuestions = [
    {
        question: "Which statement describes the project context?",
        options: [
            "It should be understood by stakeholders so that the principles are applied appropriately",
            "It explains how each aspect of project management should be applied for the processes to be effective",
            "It guides the progression from pre-project activity through the stages of the project lifecycle",
            "It ensures an understanding of the needs of stakeholders, and the relationships between them"
        ],
        correctAnswerIndex: 0, // A
        rationale: "The project context is one of the five integrated elements of PRINCE2 Project Management. It influences how 'the principles, practices and processes are applied by the people involved to ensure that the method is fit for the project context'."
    },
    {
        question: "Which is a characteristic of a project that distinguishes it from business as usual?",
        options: [
            "Projects continue after business-as-usual resumes",
            "Projects include ongoing management of operations",
            "Every project will be different to previous projects",
            "Project work is generally less risky than business-as-usual work"
        ],
        correctAnswerIndex: 2, // C
        rationale: "Every project is unique, even if an organization undertakes many similar projects, each one will differ in some way (e.g., team, customer, product, location, timeframe)."
    },
    {
        question: "The project board has decided that the project should close prematurely as the external environment has changed. Which principle is being applied?",
        options: [
            "Learn from experience",
            "Tailor to suit the project",
            "Manage by exception",
            "Ensure continued business justification"
        ],
        correctAnswerIndex: 3, // D
        rationale: "If the business justification for a project is no longer valid (e.g., due to external environmental changes), the project should be stopped. This aligns with the 'Ensure continued business justification' principle."
    },
    {
        question: "What does the 'ensure continued business justification' principle facilitate?",
        options: [
            "That the project has a business stakeholder to ensure the investment continues to be justified",
            "That the project remains desirable, viable, and achievable as the project progresses",
            "That the products delivered by the project meet their quality requirements",
            "That the PRINCE2 Project Management method is suited to the scale of investment"
        ],
        correctAnswerIndex: 1, // B
        rationale: "The core of 'Ensure Continued Business Justification' is that the project needs a valid reason for being, and this justification must be re-evaluated continuously."
    },
    {
        question: "Which statement describes leadership on a project?",
        options: [
            "It is best done through collaboration across the project ecosystem",
            "It is the set of shared attitudes, values, and goals for the project",
            "It is a control that takes place when a specific event occurs",
            "It is instructing the execution of tasks in line with agreed ways of working"
        ],
        correctAnswerIndex: 0, // A
        rationale: "Leadership involves motivating people to achieve project objectives, and on projects, this is best done through collaboration across the project ecosystem, persuading, influencing, and co-creating."
    },
    {
        question: "Which is a definition of co-creation?",
        options: [
            "Working with key influencers to ensure the agreed ways of working are adopted by all areas of the project ecosystem",
            "Modifying any of the approved management products that are part of the project baseline",
            "Ensuring decisions made at stage boundaries are informed by continued business justification",
            "Applying management control whenever a specific event takes place"
        ],
        correctAnswerIndex: 0, // A
        rationale: "Co-creation is defined as a specific form of collaboration involving users and key influencers in the design of products and agreed ways of working."
    },
    {
        question: "Which management product should the project board approve to commit to the project scope and timescale?",
        options: [
            "Project mandate",
            "Benefits management approach",
            "Project initiation documentation",
            "Business case"
        ],
        correctAnswerIndex: 2, // C
        rationale: "The Project Initiation Documentation (PID) gives the direction and scope of the project and, along with the stage plan, forms the 'contract' between the project manager and the project board."
    },
    {
        question: "What is a purpose of the business case practice?",
        options: [
            "To enable the project executive to decide whether to continue with the project",
            "To identify the user’s quality expectations to meet the business need",
            "To prevent the planned outcomes from causing dis-benefits to the business",
            "To define the products and how they will be delivered to satisfy the business case"
        ],
        correctAnswerIndex: 0, // A
        rationale: "The purpose of the business case practice is to establish mechanisms to judge whether the project is (and remains) desirable, viable, and achievable as a means to support decision-making in its continued investment."
    },
    {
        question: "Which should be used to determine whether the project is justified?",
        options: [
            "Project brief and benefits management approach",
            "Highlight report and benefits management approach",
            "Business case and highlight report",
            "Project brief and business case"
        ],
        correctAnswerIndex: 3, // D
        rationale: "The project brief provides a full and firm foundation for initiation, and the business case documents the business justification. Both are used to determine if the project is justified."
    },
    {
        question: "What is a purpose of the plans practice?",
        options: [
            "To enable the project manager to control the project by defining who will deliver the products and when to deliver them",
            "To enable the project executive to monitor whether the project is desirable, viable, and achievable, and should continue",
            "To allow the project executive to define which role in the project management team is responsible for producing the plan",
            "To allow the project manager to plan how to respond to uncertainties and who should carry out the agreed responses"
        ],
        correctAnswerIndex: 0, // A
        rationale: "The purpose of the plans practice is to facilitate communication and control by defining the products ('what') and the means ('who', 'how', 'where', 'when', 'how much') to deliver them."
    },
    {
        question: "The business strategy has changed, requiring the scope of the project to be increased beyond the tolerances that have been agreed by the business layer. Which plan should be produced to include this change?",
        options: [
            "Project plan",
            "Stage plan",
            "Team plan",
            "Exception plan"
        ],
        correctAnswerIndex: 3, // D
        rationale: "When a project or stage is forecast to exceed agreed tolerances, an exception report is raised, and an exception plan may be requested by the Project Board to address the deviation."
    },
    {
        question: "The project manager needs to capture the user’s quality expectations. In which step of the planning technique should the expectations be captured?",
        options: [
            "Defining and analysing products",
            "Organizing work packages",
            "Preparing estimates",
            "Preparing a schedule"
        ],
        correctAnswerIndex: 0, // A
        rationale: "User's quality expectations are documented in the project product description, which is created during the 'defining and analysing products' step of the planning technique."
    },
    {
        question: "What is a purpose of the quality practice?",
        options: [
            "To enable control by defining how the project will deliver the products that satisfy the business case",
            "To document the user’s requirements and ensure they remain unchanged throughout the project",
            "To identify how the project will ensure that the user’s requirements of the project's products are met",
            "To agree to deliver products that were not part of the project's business justification"
        ],
        correctAnswerIndex: 2, // C
        rationale: "The purpose of the quality practice is to document user requirements of project products and establish means by which they will be met, ensuring products meet expectations."
    },
    {
        question: "Which provides the project management team with guidance on how to record threats?",
        options: [
            "Risk management approach",
            "Risk register",
            "Digital and data management approach",
            "Work package description"
        ],
        correctAnswerIndex: 0, // A
        rationale: "The risk management approach describes how risk will be managed on the project, including specific procedures, techniques, standards, and responsibilities to be applied."
    },
    {
        question: "How does the issues practice contribute to a successful project?",
        options: [
            "By identifying events that might positively impact the project objectives",
            "By controlling modifications to the current approved versions of the management products",
            "By adjusting the level of approval required according to the user’s expectations",
            "By making the uncertain situation certain by addressing its cause"
        ],
        correctAnswerIndex: 1, // B
        rationale: "The purpose of the issues practice is to collect and assess issues and control changes to the project’s baseline, which includes current approved versions of management products."
    },
    {
        question: "What is the definition of an exception?",
        options: [
            "A forecast that there will be a deviation beyond agreed tolerance levels",
            "An uncertain event that, should it occur, will have an effect on the achievement of objectives",
            "A product that will not meet its quality specifications",
            "A report to the project manager on the status of the work package"
        ],
        correctAnswerIndex: 0, // A
        rationale: "An exception is a situation where it is forecast that there will be a deviation beyond the agreed tolerance levels."
    },
    {
        question: "What is a purpose of the 'starting up a project' process?",
        options: [
            "To assess whether a project is likely to be valuable to the organization",
            "To analyse the work required before committing to implement the project initiation documentation",
            "To provide the opportunity for the users to confirm that they accept the project product",
            "To delegate the management of the project in a controlled way"
        ],
        correctAnswerIndex: 0, // A
        rationale: "The purpose of 'Starting Up a Project' is to ensure that prerequisites for initiating a project are established, answering whether it's a viable and worthwhile project."
    },
    {
        question: "Which process should ensure that an organization does not proceed to establish solid foundations for unsuitable projects?",
        options: [
            "Starting up a project",
            "Closing a project",
            "Initiating a project",
            "Managing a stage boundary"
        ],
        correctAnswerIndex: 0, // A
        rationale: "The 'Starting up a project' process aims to prevent poorly conceived ideas from ever being initiated, ensuring only viable projects proceed to initiation."
    },
    {
        question: "What is a purpose of the ‘directing a project’ process?",
        options: [
            "To retain accountability of the project board while delegating the detailed management work",
            "To prevent any projects with poor justification from being undertaken by the organization",
            "To manage the work of a stage by implementing effective corrective actions",
            "To provide information so that the commissioning authority can commit to delivery of the project"
        ],
        correctAnswerIndex: 0, // A
        rationale: "The purpose of 'Directing a Project' is to enable the Project Board to be accountable for project success by making key decisions and exercising overall control, while delegating day-to-day management to the Project Manager."
    },
    {
        question: "Which TWO are objectives of the ‘controlling a stage’ process?",
        options: [
            "1. To ensure there are no uncontrolled changes to the products agreed by the project board",
            "2. To ensure the project board is assured that all products in the stage plan have been completed",
            "3. To ensure that the project initiation documentation is updated with any quality changes required for the next stage",
            "4. To ensure that the products delivered during the stage meet the agreed quality criteria"
        ],
        correctAnswerIndices: [0, 3], // 1 and 4
        rationale: "Objectives of 'Controlling a Stage' include ensuring attention is focused on product delivery to avoid uncontrolled change (1) and ensuring agreed products meet quality expectations and are accepted (4)."
    },
    {
        question: "Which describes a delivery approach that creates the products in sequence?",
        options: [
            "Linear-sequential",
            "Hybrid",
            "Iterative-incremental",
            "Event-driven"
        ],
        correctAnswerIndex: 0,
        rationale: "A linear-sequential approach means steps occur in sequence and the product is available during or at the end of the project."
    },
    {
        question: "Which characteristic of a project relates to teams from different organizations working together?",
        options: [
            "Cross-functional",
            "Unique",
            "Temporary",
            "Change"
        ],
        correctAnswerIndex: 0,
        rationale: "Projects are cross-functional, often involving multi-skilled teams working across organizational boundaries."
    },
    {
        question: "Which principle is being applied when reviewing whether the project is still viable?",
        options: [
            "Ensure continued business justification",
            "Learn from experience",
            "Focus on products",
            "Tailor to suit the project"
        ],
        correctAnswerIndex: 0,
        rationale: "The 'Ensure continued business justification' principle requires that the project's viability is continuously reviewed throughout its lifecycle."
    },
    {
        question: "An external IT company is being appointed to deliver a new accounting system as part of a project. Which principle is being applied when appointing the IT company to deliver this system?",
        options: [
            "Define roles, responsibilities, and relationships",
            "Manage by stages",
            "Manage by exception",
            "Tailor to suit the project"
        ],
        correctAnswerIndex: 0,
        rationale: "Appointing an external company to deliver products involves defining their role and responsibilities within the project's organizational structure, aligning with the 'Define roles, responsibilities, and relationships' principle."
    },
    {
        question: "What does the ‘manage by exception’ principle enable?",
        options: [
            "Decisions to be made by the right people, at the right time",
            "The project to deliver benefits required by the business",
            "The project team members to understand their contribution to the project",
            "The project team members to define the scope to be delivered by the project"
        ],
        correctAnswerIndex: 0,
        rationale: "The 'Manage by exception' principle enables efficient use of senior management time by ensuring decisions are made at the appropriate level, only escalating when agreed tolerances are breached."
    },
    {
        question: "The project manager has agreed with the team manager that a work package can be delivered up to one week later than shown on the team plan. Which principle is being applied by the project manager?",
        options: [
            "Learn from experience",
            "Define roles, responsibilities, and relationships",
            "Manage by exception",
            "Focus on products"
        ],
        correctAnswerIndex: 2,
        rationale: "By agreeing to a deviation within defined tolerances (even if informal), the project manager is applying the 'Manage by exception' principle, which allows for delegated authority within limits."
    },
    {
        question: "Which management product BEST provides the project team with a basis for the ongoing management of the overall project?",
        options: [
            "Highlight report",
            "Project plan",
            "Project initiation documentation",
            "Business case"
        ],
        correctAnswerIndex: 2,
        rationale: "The Project Initiation Documentation (PID) provides the direction and scope for the project and acts as a single source of reference for its ongoing management, encompassing the project plan and business case."
    },
    {
        question: "What do the desired outcomes directly result in?",
        options: [
            "Achievement of the business objectives",
            "Delivery of outputs to quality specifications to meet business objectives",
            "Measurable improvements defined in the business case",
            "A reduction in the business change costs defined in the business case"
        ],
        correctAnswerIndex: 2,
        rationale: "Outcomes lead to the realization of benefits, which are the measurable improvements defined in the business case that contribute to business objectives."
    },
    {
        question: "Which should provide confidence that there is a robust justification for undertaking a project?",
        options: [
            "Project brief",
            "Business case",
            "Benefits management approach",
            "Project plan"
        ],
        correctAnswerIndex: 1,
        rationale: "The Business Case documents the business justification for undertaking a project, based on estimated costs, expected benefits, and associated risks."
    },
    {
        question: "Which term is defined as the tangible or intangible deliverable of an activity?",
        options: [
            "Output",
            "Outcome",
            "Benefit",
            "Plan"
        ],
        correctAnswerIndex: 0,
        rationale: "An Output is the tangible or intangible deliverable of an activity."
    },
    {
        question: "How are some of the seven aspects of project performance used when establishing business justification?",
        options: [
            "By solely focusing on the costs of product development in the business case compared with the benefits",
            "By incorporating dis-benefits as major risks in the investment appraisal and balancing them against the benefits",
            "By understanding product quality requirements and their impact on time, cost, benefits, or sustainability targets",
            "By ensuring that the project products are fully used in operations to deliver the benefits to the business"
        ],
        correctAnswerIndex: 2,
        rationale: "All seven aspects of project performance (Benefits, Costs, Time, Quality, Scope, Sustainability, Risk) and their interrelationships should be considered when assessing business justification, as trade-offs often exist."
    },
    {
        question: "In which step of the business case management technique should the project mandate be reviewed?",
        options: [
            "Develop",
            "Check",
            "Maintain",
            "Confirm"
        ],
        correctAnswerIndex: 0,
        rationale: "The project mandate is used as an input to develop the initial business justification for the project, which occurs in the 'Develop' step of the business case management technique (as part of 'Starting Up a Project')."
    },
    {
        question: "Which principle is being applied by the organization practice when the project executive ensures that decisions align to changing business needs?",
        options: [
            "Focus on products",
            "Ensure continued business justification",
            "Learn from experience",
            "Manage by exception"
        ],
        correctAnswerIndex: 1,
        rationale: "When the Project Executive ensures decisions align to changing business needs, they are upholding the 'Ensure continued business justification' principle, which requires the project to remain viable and justified throughout its life."
    },
    {
        question: "A new department head wants to know which members of staff will be involved in the project. What should the department head review?",
        options: [
            "Project management team structure",
            "Role descriptions",
            "Project log",
            "Communication management approach"
        ],
        correctAnswerIndex: 0,
        rationale: "The Project Management Team Structure defines who is involved in the project, their relationships, and how they will work together."
    },
    {
        question: "Who is accountable for the success of the project?",
        options: [
            "Project board",
            "Stakeholders",
            "Business layer",
            "Senior user"
        ],
        correctAnswerIndex: 0,
        rationale: "The Project Board is accountable to the business for the success of the project and has the authority and responsibility for the project within set tolerances."
    },
    {
        question: "In which step should policies and procedures be considered in the organizational design and development technique?",
        options: [
            "Understand the organizational ecosystem",
            "Develop the project ecosystem",
            "Design the project ecosystem",
            "Transition the project into the organizational ecosystem"
        ],
        correctAnswerIndex: 0,
        rationale: "Understanding the organizational ecosystem (which includes existing policies and procedures) is the first step in organizational design, as it informs how the project organization will be designed and developed."
    },
    {
        question: "The project manager is defining products and responsibilities for delivering them with the team. Which practice is being applied?",
        options: [
            "Business case",
            "Plans",
            "Organization",
            "Progress"
        ],
        correctAnswerIndex: 1,
        rationale: "The Plans practice facilitates communication and control by defining the products to be delivered ('what') and the means to deliver them ('who', 'how', etc.)."
    },
    {
        question: "The team manager needs to check what products should be delivered by his team. Which management product should the team manager review?",
        options: [
            "Project product description",
            "Work package description",
            "Stage plan",
            "Project plan"
        ],
        correctAnswerIndex: 1,
        rationale: "A Work Package Description is used to pass responsibility for work formally to a team manager or team member, describing how one or more products will be produced and delivered."
    },
    {
        question: "What is defined as a high-level plan showing the major products of the project?",
        options: [
            "A project plan",
            "A stage plan",
            "A team plan",
            "A work package description"
        ],
        correctAnswerIndex: 0,
        rationale: "A Project Plan is a high-level plan showing the major products of the project and when, how, and at what cost they will be delivered."
    },
    {
        question: "How should the project manager address the need to keep plans within a reasonable planning horizon?",
        options: [
            "By preparing a complete and detailed project plan based on accurate estimates",
            "By preparing a stage plan for the next stage based on more accurate estimates",
            "By identifying all products in the project plan",
            "By identifying interdependencies between major products in the stage plan"
        ],
        correctAnswerIndex: 1,
        rationale: "The 'Manage by Stages' principle addresses keeping plans within a reasonable planning horizon by having a high-level Project Plan and more detailed Stage Plans for the current stage, based on more precise estimates."
    },
    {
        question: "In which step of the planning technique should the project manager identify the equipment needed to deliver the plan?",
        options: [
            "Preparing estimates",
            "Defining and analysing products",
            "Organizing work packages",
            "Preparing a schedule"
        ],
        correctAnswerIndex: 0,
        rationale: "Identifying resources like equipment is part of 'Preparing estimates' in the planning technique."
    },
    {
        question: "What is a description of the purpose of the ‘quality’ practice?",
        options: [
            "To define how the project's products will be tested to obtain their acceptance",
            "To define how the project executive will decide whether the benefits exceed costs",
            "To enable the project team to communicate effectively by defining how the products will be delivered",
            "To collect and assess off-specifications and control changes to the agreed project scope"
        ],
        correctAnswerIndex: 0,
        rationale: "The purpose of the quality practice is to document the user’s requirements of the project products and to establish the means by which they will be met, which includes testing for acceptance."
    },
    {
        question: "The project manager needs to check when an output is planned to be inspected. Which management product should the project manager review?",
        options: [
            "Quality management approach",
            "Product description",
            "Product register",
            "Quality register"
        ],
        correctAnswerIndex: 3,
        rationale: "The Quality Register summarizes all planned or occurred quality management activities, including inspections, and is used by the Project Manager for reviewing progress."
    },
    {
        question: "Which describes quality specifications?",
        options: [
            "They are applied when inspecting a finished product",
            "They are applied when accepting the project product",
            "They are documented in the project product description",
            "They are documented in the quality management approach"
        ],
        correctAnswerIndex: 0,
        rationale: "Quality specifications describe the quality measures that will be applied by those performing quality control (e.g., during inspection) and the levels the finished product must meet."
    },
    {
        question: "A building is being constructed as part of the project. The building needs to meet environmental targets. Which information should be recorded as part of quality planning?",
        options: [
            "The results of a review of the project product’s sustainability against the acceptance criteria",
            "The test results after testing the product's environmental requirements",
            "The environmental requirements as the specifications in the product description",
            "The post project reviews to measure the sustainability targets in the benefits management approach"
        ],
        correctAnswerIndex: 2,
        rationale: "During quality planning, product sustainability requirements (like environmental targets) should be captured as acceptance criteria or quality specifications in the product description."
    },
    {
        question: "The project manager has prioritized the criteria that the project product must meet before the user accepts it. Where in the quality management technique should this prioritization happen?",
        options: [
            "Gathering user inputs",
            "Accepting products",
            "Describing the quality management approach",
            "Controlling quality"
        ],
        correctAnswerIndex: 0,
        rationale: "User's quality expectations and acceptance criteria (which are prioritized) are gathered as user inputs and documented in the project product description during the 'Defining and analysing products' step of quality planning."
    },
    {
        question: "Why should the risk practice be performed?",
        options: [
            "To enable the project board to decide whether the outcomes and resulting benefits are likely to be achieved",
            "To enable the project manager to predict whether the project will be delivered on time and within budget",
            "To identify the modifications to the current approved versions of the project products",
            "To identify and manage opportunities that would positively affect achievement of the project objectives"
        ],
        correctAnswerIndex: 3,
        rationale: "The purpose of the risk practice is to identify, assess, and control uncertainties (both threats and opportunities) that would affect the project's objectives."
    },
    {
        question: "The PRINCE2 Project Management procedure needs to be tailored to ensure events that are likely to affect the objectives are managed. In which management product should this be documented?",
        options: [
            "Risk management approach",
            "Risk register",
            "Issue management approach",
            "Issue register"
        ],
        correctAnswerIndex: 0,
        rationale: "The Risk Management Approach describes how risk will be managed on the project, including the specific procedures, techniques, and standards to be applied for managing events affecting objectives."
    },
    {
        question: "Which term is defined as an uncertain event or set of events that, should it occur, will have an effect on the achievement of objectives?",
        options: [
            "Risk",
            "Off-specification",
            "Request for change",
            "Problem/concern"
        ],
        correctAnswerIndex: 0,
        rationale: "This is the definition of a 'Risk' in PRINCE2."
    },
    {
        question: "How does effective risk management enable understanding of the overall risk exposure for a project?",
        options: [
            "By positioning risks, in relation to the risk tolerance line, on a summary risk profile",
            "By identifying different types of sustainability risks",
            "By planning responses for each risk",
            "By establishing a risk budget to fund management responses to risks"
        ],
        correctAnswerIndex: 0,
        rationale: "A risk matrix or summary risk profile can plot risks and their estimations, showing overall risk exposure and indicating risks that exceed tolerance."
    },
    {
        question: "The project manager needs to review the project brief to decide who will be responsible for each step in the risk management technique. In which step of the risk management technique should this occur?",
        options: [
            "Identify",
            "Communicate",
            "Assess",
            "Plan"
        ],
        correctAnswerIndex: 0,
        rationale: "Defining context and objectives, and formulating an appropriate risk management approach (which includes responsibilities), occurs in the 'Identify' step of the risk management technique."
    },
    {
        question: "The senior user is concerned that the scope of the project needs to be changed. When should the senior user raise this issue?",
        options: [
            "As soon as the issue has been identified",
            "At the next scheduled formal project meeting",
            "At the next scheduled meeting of project board members",
            "At the next scheduled meeting of project board members"
        ],
        correctAnswerIndex: 0,
        rationale: "Issues may be raised at any time during the project by any team member or stakeholder, as soon as they are identified."
    },
    {
        question: "The project manager wants to review the status of unplanned events that are being considered by the project management team. Which management product should the project manager review?",
        options: [
            "Issue register",
            "Issue report",
            "Risk register",
            "Product register"
        ],
        correctAnswerIndex: 0,
        rationale: "The Issue Register logs all formally managed issues, their current status, and date of closure, making it the correct place to review the status of unplanned events."
    },
    {
        question: "What is the definition of a request for change?",
        options: [
            "A proposal for a change to a baseline",
            "Something that should be provided but has not been provided",
            "An uncertain event which may affect objectives",
            "The current versions of project products that are subject to change control"
        ],
        correctAnswerIndex: 0,
        rationale: "A Request for Change is defined as a proposal for a change to a project baseline."
    },
    {
        question: "The project board has delegated significant change authority to several roles in the project management team. What negative effect could directly result from this?",
        options: [
            "Most changes to product descriptions may be generated by team members",
            "The actual and authorized status of products recorded in the product register may not agree",
            "The project board may be slow to make decisions, delaying delivery progress",
            "The project scope may become less aligned to the business case"
        ],
        correctAnswerIndex: 3,
        rationale: "If there is too much delegation of change authority, particularly to too many different roles, there is an increased risk that alignment with the business justification may be diluted, leading to scope creep or changes that don't serve the overall business case."
    },
    {
        question: "The project manager needs to consider the impact of an issue on the benefits and costs. In which step of the issue management technique should this occur?",
        options: [
            "Assessing issues",
            "Capturing issues",
            "Deciding on changes",
            "Implementing changes"
        ],
        correctAnswerIndex: 0,
        rationale: "When reviewing issues, the 'Assessing issues' step involves undertaking an impact analysis to determine how the issue affects the project, including its impact on the business case (benefits and costs)."
    },
    {
        question: "Which statement BEST describes where progress should be monitored?",
        options: [
            "At stage boundaries at the end of each stage",
            "At the project, stage, and work package level",
            "At the product delivery level",
            "At project closure when project costs are being calculated"
        ],
        correctAnswerIndex: 1,
        rationale: "Progress control involves measuring actual progress against performance targets and can be monitored at the work package, stage, and project level."
    },
    {
        question: "The project manager needs to inform the project board of what approved products are outstanding before the project board approves further work. In which management product should the project manager record this information?",
        options: [
            "Checkpoint report",
            "Highlight report",
            "End stage report",
            "End project report"
        ],
        correctAnswerIndex: 2,
        rationale: "The End Stage Report summarizes progress to date, the overall project situation, and sufficient information to ask for a Project Board decision on what to do next, including status of products."
    },
    {
        question: "Identify the missing word in the following sentence: The business layer, outside the project team, sets the overall requirements and [?] levels for the project.",
        options: [
            "Tolerance",
            "Issue",
            "Forecast",
            "Risk"
        ],
        correctAnswerIndex: 0,
        rationale: "The business layer sets the overall requirements and tolerance levels for the project, within which the Project Board and Project Manager operate."
    },
    {
        question: "The project mandate set a firm date for the delivery of the project. It has now been agreed that the project can be delayed by up to 4 weeks. Which level of management should agree this?",
        options: [
            "Project board",
            "Project manager",
            "Business layer",
            "Team manager"
        ],
        correctAnswerIndex: 2,
        rationale: "If the project is likely to exceed the overall project tolerances (like a firm delivery date from the mandate), the deviation should be referred to the business layer for a decision."
    },
    {
        question: "What action may be taken by a project manager when an issue causes one of the stage tolerances to be exceeded?",
        options: [
            "Accept or reject the recommendation from the exception report",
            "Resolve the issue, if possible, using other project tolerances and include in the next highlight report",
            "Escalate to the business layer for advice and direction to implement the exception report",
            "Resolve the issue, if possible, using other stage tolerances and include in the next highlight report"
        ],
        correctAnswerIndex: 3,
        rationale: "If an issue can be resolved by the Project Manager within the stage tolerances, they can take corrective action (e.g., using other stage tolerances) and report it, without needing an exception report."
    },
    {
        question: "The team manager has to agree what products need to be produced, and when. In which process should this be agreed?",
        options: [
            "Managing product delivery",
            "Directing a project",
            "Managing a stage boundary",
            "Controlling a stage"
        ],
        correctAnswerIndex: 0,
        rationale: "The 'Managing Product Delivery' process controls the link between the Project Manager and Team Manager, involving agreeing requirements for acceptance, execution, reporting, and delivery of specialist products."
    },
    {
        question: "In which process is the work undertaken to assess if project objectives have been achieved as stated in project initiation documentation have been achieved?",
        options: [
            "Closing a project",
            "Controlling a stage",
            "Managing product delivery",
            "Managing a stage boundary"
        ],
        correctAnswerIndex: 0,
        rationale: "The purpose of the 'Closing a Project' process is to provide a fixed point to confirm acceptance of the project product and recognize that objectives (as established in the PID) have been achieved."
    },
    {
        question: "Which TWO activities support the objectives of the directing a project process?",
        options: [
            "1. Authorize that the project team should be disbanded as work is complete",
            "2. Review plans to measure the benefits after the project has closed",
            "3. Check that the products can be supported by operations after the project is closed",
            "4. Verify that the users’ requirements have been met"
        ],
        correctAnswerIndices: [0, 1], // 1 and 2
        rationale: "Objectives of 'Directing a Project' include ensuring authority to close the project (1) and ensuring plans for realizing post-project benefits are managed and reviewed (2)."
    },
    {
        question: "During the managing a stage boundary process, when should the project manager replan the rest of the stage?",
        options: [
            "After receiving the project board’s request to prepare an exception plan",
            "After receiving informal advice from the project board in response to a highlight report during the stage",
            "After requesting the project board to approve an exception plan for the stage",
            "After requesting the project board to approve a change to the project team delivering the stage’s products"
        ],
        correctAnswerIndex: 0,
        rationale: "An exception plan is prepared when the Project Board requests it, following a forecast deviation beyond tolerances. This plan replaces the current stage plan and covers the period to the end of the stage."
    },
    {
        question: "Which describes how the controlling a stage process may be used?",
        options: [
            "It could be used by the project manager to monitor the initiation stage of a large project",
            "It could be omitted if the team manager role is being fulfilled by the project manager",
            "It could be merged with the managing a stage boundary process if appropriate",
            "It could be omitted if the team managers are internal to the business"
        ],
        correctAnswerIndex: 0,
        rationale: "The 'Controlling a Stage' process describes the Project Manager’s day-to-day management of the stage and can be used during the initiation stage, especially for large or complex projects."
    },
    {
        question: "Which describes a project characteristic that drives the need for the closing a project process?",
        options: [
            "A project should hand over the desired change to business as usual",
            "A project is delivered using a new project team",
            "A project uses resources from different departments",
            "A project deals with higher levels of uncertainty"
        ],
        correctAnswerIndex: 0,
        rationale: "One of the defining features of a project is that it is temporary and has a defined end, at which point the desired change should be handed over to business as usual, driving the need for a formal 'Closing a Project' process."
    },
    {
        question: "Which statement about the ‘define roles, responsibilities and relationships’ principle is CORRECT?",
        options: [
            "The project management team should consist exclusively of internal stakeholders",
            "An organization's day-to-day management structures are likely to be suited to control the project work",
            "The project board should exclude external supplier representatives",
            "Suppliers are stakeholders that can be external to the business"
        ],
        correctAnswerIndex: 3,
        rationale: "Supplier stakeholders can be external to the organization. PRINCE2 requires that all three stakeholder interests (business, user, and supplier) are represented effectively in the project management team."
    },
    {
        question: "Which principle is being applied when setting limits for the seven aspects of performance to enable the project manager to work effectively?",
        options: [
            "Manage by exception",
            "Learn from experience",
            "Tailor to suit the project",
            "Define roles, responsibilities, and relationships"
        ],
        correctAnswerIndex: 0,
        rationale: "Setting tolerances against the seven aspects of performance (benefits, cost, time, quality, scope, sustainability, and risk) is central to the 'Manage by exception' principle, enabling delegated authority."
    },
    {
        question: "Which statement describes how the principles support effective project management?",
        options: [
            "They allow the project team to decide how the method should be applied on the project",
            "They take into account industry-specific models as PRINCE2 Project Management is generic",
            "They rely on a common vocabulary that should be applied as defined in PRINCE2 Project Management",
            "They should be applied in the same way across projects within an organization"
        ],
        correctAnswerIndex: 0,
        rationale: "The principles guide how PRINCE2 Project Management can be tailored to best fit a project and its context, allowing flexibility in application."
    },
    {
        question: "Which is NOT an aspect of leadership?",
        options: [
            "Instructing the execution of tasks in line with agreed ways of working",
            "Motivating people to achieve a project’s objectives",
            "Persuading, influencing, and co-creating with stakeholders",
            "Seeking regular feedback to remain aligned to the project’s objectives"
        ],
        correctAnswerIndex: 0,
        rationale: "Instructing the execution of tasks in line with agreed ways of working is the definition of management, not leadership."
    },
    {
        question: "Which activity should be managed carefully as part of 'leading across organizational boundaries', because it is likely to be performed by people outside the project team?",
        options: [
            "Securing funding from the business layer for the business case",
            "Integrating new products into each impacted area of the business",
            "Gaining commitment for the realization of benefits post-project",
            "Delivering the products to the agreed quality specifications"
        ],
        correctAnswerIndex: 1,
        rationale: "Integrating new products into affected areas of the business is often performed by people outside the direct project team, requiring careful management across organizational boundaries."
    },
    {
        question: "Why is change management important in a project?",
        options: [
            "Because stakeholders should understand which organizational areas are impacted by the project",
            "Because the project products should be described and subject to change control",
            "Because project’s structure of accountability and responsibilities should be defined and established",
            "Because user’s quality expectations of the project products should be understood"
        ],
        correctAnswerIndex: 0,
        rationale: "Change management is important to understand which organizational areas are likely to be impacted by the project's transition from current to target state."
    },
    {
        question: "Which statement about capability and competency within a project is CORRECT?",
        options: [
            "Teams should consist of members with similar capabilities and competencies",
            "Team members are likely to perform differently depending on the structure of the team",
            "Standard roles and responsibilities should be used, focused on the project's needs",
            "Career progression of project team members is often the responsibility of the project manager"
        ],
        correctAnswerIndex: 1,
        rationale: "Even with similar capabilities, people may perform roles differently depending on who they work with. Understanding this helps in building effective teams."
    },
    {
        question: "What is a description of the purpose of the change management approach?",
        options: [
            "To describe how proposals to change the project baseline should be recorded and approved",
            "To describe the standards required to deliver products that meet user's expectations",
            "To define how the business will need to operate in the future to meet the project objectives",
            "To describe the processes and procedures required to manage uncertainty"
        ],
        correctAnswerIndex: 2,
        rationale: "The purpose of the change management approach is to establish the target organizational state and the means by which the business will shift to it."
    },
    {
        question: "A project holds a workshop to share experiences of new ways of working between project team members. Which principle is being applied by the 'people' element?",
        options: [
            "Learn from experience",
            "Manage by exception",
            "Define roles, responsibilities, and relationships",
            "Focus on products"
        ],
        correctAnswerIndex: 0,
        rationale: "Sharing experiences and knowledge through workshops directly applies the 'Learn from experience' principle, fostering a collaborative learning environment."
    },
    {
        question: "Identify the missing word(s) in the following sentence: A business objective is the measurable outcomes that demonstrate progress in relation to [?] and to which the project should contribute.",
        options: [
            "the organization’s strategy",
            "the outputs desired by the business",
            "the benefits desired by the business",
            "the business justification"
        ],
        correctAnswerIndex: 0,
        rationale: "A business objective is defined as measurable outcomes that demonstrate progress in relation to the organization's strategy."
    },
    {
        question: "A government department has a target to reduce its carbon footprint by 8-12%. How should this requirement be captured?",
        options: [
            "As a benefits tolerance",
            "As a sustainability tolerance",
            "As outcomes to be achieved",
            "As a quality tolerance"
        ],
        correctAnswerIndex: 1,
        rationale: "Environmental targets like reducing carbon footprint are captured as sustainability targets or tolerances, aligning with the sustainability aspect of project performance."
    },
    {
        question: "At the end of a stage, the project manager determined the impact of risks and issues on the business justification. In which step of the business case management technique should this occur?",
        options: [
            "Develop",
            "Check",
            "Maintain",
            "Confirm"
        ],
        correctAnswerIndex: 1,
        rationale: "Assessing the impact of risks and issues on business justification is part of the 'Check' step of the business case management technique, ensuring ongoing viability."
    },
    {
        question: "The project manager has received feedback from stakeholders identifying the need to change the project team structure. Which principle is applied by the organization practice when actioning this feedback?",
        options: [
            "Learn from experience",
            "Define roles, responsibilities, and relationships",
            "Manage by stages",
            "Tailor to suit the project"
        ],
        correctAnswerIndex: 0,
        rationale: "Using feedback (lessons) to inform and potentially change the project team structure aligns with the 'Learn from experience' principle."
    },
    {
        question: "What should specify individual accountability for sustainability targets?",
        options: [
            "Role descriptions",
            "Project management team structure",
            "Product description",
            "Business case"
        ],
        correctAnswerIndex: 0,
        rationale: "Role descriptions should clearly specify the responsibilities of individuals, including accountability for sustainability targets."
    },
    {
        question: "Who has the authority to direct the project within the remit set by the business?",
        options: [
            "Project manager",
            "Project executive",
            "Project management team",
            "Project board"
        ],
        correctAnswerIndex: 3,
        rationale: "The Project Board is accountable for the project's success and has the authority to direct the project within the remit set by the business."
    },
    {
        question: "How should the senior user fulfil their responsibility for continued realization of benefits post-project?",
        options: [
            "By representing the work needed in a hierarchy to help organize the project",
            "By ensuring commitment from people in the user community to adopting the new products",
            "By defining how to assure the continued justification of the project",
            "By ensuring the technical integrity of the project products delivered to the users"
        ],
        correctAnswerIndex: 1,
        rationale: "The Senior User is responsible for ensuring ongoing commitment from the user community to support activities that lead to benefit realization, especially post-project adoption."
    },
    {
        question: "A new team member has just joined the project team and will be going on a site visit. In which step of the organizational design and development technique should this occur?",
        options: [
            "Develop the project ecosystem",
            "Understand the organizational ecosystem",
            "Design the project ecosystem",
            "Transition the project into the organizational ecosystem"
        ],
        correctAnswerIndex: 0,
        rationale: "Onboarding new people to the project, such as site visits or induction, is part of developing the project ecosystem."
    },
    {
        question: "Identify the missing word(s) in the following sentence: When planning, there are at least two types of [?] relevant to a project: internal and external.",
        options: [
            "dependency",
            "plan",
            "exception",
            "scope"
        ],
        correctAnswerIndex: 0,
        rationale: "A dependency means that one product is dependent on another, and these can be internal or external to the project."
    },
    {
        question: "How should the project plan typically accommodate an iterative-incremental project?",
        options: [
            "By having multiple delivery stages that allow acceptance criteria to be refined as the products are delivered",
            "By ensuring that product descriptions are complete before the project is approved by the project board",
            "By breaking down the work of the stage to the level of detail required for day-to-day control by the project manager",
            "By dividing the project into two stages to enable iterative delivery of products during the project"
        ],
        correctAnswerIndex: 0,
        rationale: "For iterative-incremental projects, the project plan may include multiple delivery stages where quality and acceptance criteria are refined in parallel with product development."
    },
    {
        question: "The team manager needs to record that a product needs to be tested but has not yet been approved. Where should this information be recorded?",
        options: [
            "Quality register",
            "Quality specifications",
            "Product register",
            "Project product description"
        ],
        correctAnswerIndex: 0,
        rationale: "The Quality Register summarizes all planned or occurred quality management activities, including tests and their approval status."
    },
    {
        question: "Which of the following describes a requirement?",
        options: [
            "A need or expectation that is documented in an approved management product",
            "A statement about the quality expected from the project product, captured in the project product description",
            "A prioritized list of criteria that the project product must meet before the user will accept it",
            "A description of the quality measures that will be applied by those performing quality control"
        ],
        correctAnswerIndex: 0,
        rationale: "A requirement is defined as a need or expectation that is documented in an approved management product."
    },
    {
        question: "A new requirement is identified when producing a subordinate plan. How should this be managed?",
        options: [
            "By updating the business case",
            "By using the issue management approach",
            "By updating the project product description",
            "By updating the quality management approach"
        ],
        correctAnswerIndex: 1,
        rationale: "Changes to the baseline (like new requirements) arising from lower-level planning should be addressed using the issue management approach."
    },
    {
        question: "A system has been tested, and the user needs to take ownership of the system. Where in the quality management technique should this occur?",
        options: [
            "Gathering user inputs",
            "Accepting products",
            "Describing the quality management approach",
            "Controlling quality"
        ],
        correctAnswerIndex: 1,
        rationale: "Transferring ownership or responsibility for a product from the project to the user (or Project Board on behalf of the user) is part of 'Accepting products' in the quality management technique."
    },
    {
        question: "Which term describes who is responsible for management, monitoring, and control of all aspects of a particular risk assigned to them?",
        options: [
            "Risk owner",
            "Risk action owner",
            "Project support",
            "Project assurance"
        ],
        correctAnswerIndex: 0,
        rationale: "A Risk Owner is the person assigned to take responsibility for responding to a risk, including its management, monitoring, and control."
    },
    {
        question: "How does loss aversion result in less effective decision-making when considering risks?",
        options: [
            "By valuing the need to keep what you have, rather than to get something new",
            "By discounting downside risk, believing that things will go according to plan",
            "By valuing team unity, rather than reaching the right decision",
            "By viewing risks that are more likely to occur soon as riskier"
        ],
        correctAnswerIndex: 0,
        rationale: "Loss aversion is a cognitive bias where people value avoiding losses more than acquiring equivalent gains, which can lead to less effective risk decisions."
    },
    {
        question: "The project manager needs to understand the project environment and define how to manage the risk on the project. In which step of the risk management technique should this be defined?",
        options: [
            "Identify",
            "Assess",
            "Plan",
            "Implement"
        ],
        correctAnswerIndex: 0,
        rationale: "Formulating an appropriate risk management approach, which includes understanding the project environment and how to manage risk, occurs in the 'Identify' step of the risk management technique."
    },
    {
        question: "Which part of the guidance for effective issue management should enable the change to be implemented?",
        options: [
            "The delegation of authority by the project board to decide on changes to the appropriate level",
            "The application of the change budget within the authorized constraints to make trade-offs",
            "The audit of whether the actual product status reflects the status recorded in the product register",
            "The definition of an appropriate level at which products need to be baselined"
        ],
        correctAnswerIndex: 1,
        rationale: "The application of the change budget, which is money or authorized constraints set aside for changes, enables approved changes to be funded and implemented."
    },
    {
        question: "An issue has been identified and its impact on the project scope needs to be understood. In which step of the issue management technique should the impact be understood?",
        options: [
            "Assessing issues",
            "Capturing issues",
            "Deciding on changes",
            "Implementing changes"
        ],
        correctAnswerIndex: 0,
        rationale: "Undertaking an impact analysis to determine how an issue affects the project (e.g., its scope) is part of the 'Assessing issues' step."
    },
    {
        question: "Which should be reviewed by the project board when making the decision about what to do next with the project?",
        options: [
            "Digital and data management approach",
            "End stage report",
            "Highlight report",
            "Checkpoint report"
        ],
        correctAnswerIndex: 1,
        rationale: "The End Stage Report provides the Project Board with a summary of progress, overall project situation, and sufficient information to decide whether to continue with the project."
    },
    {
        question: "According to the exception management technique, at which levels are projects MOST LIKELY to identify issues that exceed stage tolerances?",
        options: [
            "Commissioning AND directing",
            "Directing AND managing",
            "Directing AND delivering",
            "Managing AND delivering"
        ],
        correctAnswerIndex: 3,
        rationale: "Issues exceeding stage tolerances are most likely to be encountered at the 'Delivering' level (by Team Managers) and the 'Managing' level (by Project Managers)."
    },
    {
        question: "Which TWO are objectives of the starting up a project process?",
        options: [
            "1. To define the scope of the project to enable it to be initiated",
            "2. To authorize the work to deliver the project product",
            "3. To understand what quality techniques will be applied in the project",
            "4. To assess the alternative ways of delivering the project"
        ],
        correctAnswerIndices: [0, 3], // 1 and 4
        rationale: "Objectives of 'Starting Up a Project' include ensuring sufficient information for scope (1) and evaluating alternative approaches (4)."
    }
];
