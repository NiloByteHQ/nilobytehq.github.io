// This file contains the complete and comprehensive learning content for the application.

export const playerRanks = [
    "Novice", "Apprentice", "Initiate", "Adept", "Practitioner",
    "Professional", "Expert", "Master", "Grandmaster", "Legend"
];

export const achievements = [
    { id: 'PRINCIPLES_MASTER', title: 'Principle Master', description: 'Complete all 7 Principles.', icon: '🏆' },
    { id: 'THEMES_MASTER', title: 'Theme Expert', description: 'Complete all 7 Themes.', icon: '📚' },
    { id: 'PROCESSES_MASTER', title: 'Process Guru', description: 'Complete all 7 Processes.', icon: '⚙️' },
    { id: 'EXAM_PASSED', title: 'Certified', description: 'Pass the final exam simulation.', icon: '🏅' },
    { id: 'LEVEL_5', title: 'Level 5', description: 'Reach player level 5.', icon: '⭐' },
    { id: 'LEVEL_10', title: 'Level 10', description: 'Reach player level 10.', icon: '🌟' },
    { id: 'PERFECT_QUIZ', title: 'Flawless Victory', description: 'Get a perfect score on any quiz.', icon: '🎯' },
    { id: 'QUICK_LEARNER', title: 'Quick Learner', description: 'Complete your first module.', icon: '💡' },
    { id: 'P1_DONE', title: 'Justified', description: 'Master "Continued Business Justification".', icon: '💼' },
    { id: 'P2_DONE', title: 'Experienced', description: 'Master "Learn from Experience".', icon: '🧠' },
    { id: 'P3_DONE', title: 'Role Player', description: 'Master "Defined Roles & Responsibilities".', icon: '👥' },
    { id: 'P4_DONE', title: 'Manager', description: 'Master "Manage by Stages".', icon: '📊' },
    { id: 'P5_DONE', title: 'Controller', description: 'Master "Manage by Exception".', icon: '🚨' },
    { id: 'P6_DONE', title: 'Focused', description: 'Master "Focus on Products".', icon: '📦' },
    { id: 'P7_DONE', title: 'Tailored', description: 'Master "Tailor to Suit the Project".', icon: '✂️' },
    { id: 'GRANDMASTER', title: 'Project Grandmaster', description: 'Complete all content and pass the exam.', icon: '👑' },
];

export const curriculum = [
    {
        id: 'c1',
        title: 'The 7 Principles',
        description: 'The guiding obligations and good practices that determine whether a project is being managed using PRINCE2.',
        modules: [
            {
                id: 'p1',
                title: 'Continued Business Justification',
                lessons: [
                    { title: 'Core Concept', content: 'A PRINCE2 project must have a justifiable reason for starting, and that justification must be maintained and validated throughout the project’s lifecycle. The driving question is always: "Is this project still worthwhile?"' },
                    { title: 'The Business Case', content: 'This is the primary document where the justification is recorded and evaluated. It includes the business problem or opportunity, expected benefits, costs, timescales, and a risk assessment. It is a dynamic document, not a one-time setup.' },
                    { title: 'Verification Points', content: 'The Business Case is formally verified by the Project Board at the end of each management stage. This provides a "go/no-go" decision point. If justification is lost, the Project Board has the authority to stop or fundamentally change the project.' },
                ],
                quiz: [
                    { question: 'What happens if a project\'s justification ceases to be valid during its lifecycle?', options: ['The project must continue as planned to see it through.', 'The project manager must fix it without telling the board.', 'It should be stopped or changed.', 'The budget should be increased.'], correct: 2 },
                    { question: 'The Business Case is formally verified by whom and when?', options: ['The Team Manager, weekly.', 'The Project Manager, at the end of the project.', 'The Project Board, at the end of each stage.', 'The customer, whenever they request it.'], correct: 2 },
                ]
            },
            {
                id: 'p2',
                title: 'Learn from Experience',
                lessons: [
                    { title: 'Core Concept', content: 'PRINCE2 teams learn from previous experience. Lessons are sought, recorded, and acted upon throughout the project. This principle aims to avoid reinventing wheels and repeating past mistakes.' },
                    { title: 'Starting a Project', content: 'When starting a project, lessons from previous, similar projects should be actively sought and reviewed. This helps in shaping plans and strategies.' },
                    { title: 'During a Project', content: 'A Lessons Log is maintained to record lessons as they are identified. This allows the current project to benefit from ongoing learning.' },
                    { title: 'Closing a Project', content: 'A Lessons Report is created to pass on lessons that could be useful to future projects. This is a key input to corporate and programme quality assurance.' },
                ],
                quiz: [
                    { question: 'What is the purpose of a Lessons Log?', options: ['To track project expenses.', 'To document team members\' performance.', 'To capture lessons as they occur for the benefit of the current and future projects.', 'To list all the project risks.'], correct: 2 },
                    { question: 'When should a project team look for lessons from previous projects?', options: ['Only if they run into a problem.', 'During the closing stages of the project.', 'When starting up the project.', 'They should not, as every project is unique.'], correct: 2 },
                ]
            },
            {
                id: 'p3',
                title: 'Defined Roles & Responsibilities',
                lessons: [
                    { title: 'Core Concept', content: 'A PRINCE2 project has a clear and defined organization structure to ensure that the interests of the primary stakeholders are represented and that there is clear accountability.' },
                    { title: 'Three Primary Interests', content: 'The structure represents the three primary stakeholder interests: Business (ensuring value for money), User (specifying and realizing the benefits), and Supplier (providing the necessary resources and skills).' },
                    { title: 'The Project Management Team', content: 'This includes the Project Board (with Executive, Senior User, Senior Supplier roles), the Project Manager (who manages day-to-day), and Team Managers (who manage the creation of products). Every role has specific, defined responsibilities.' },
                ],
                quiz: [
                    { question: 'Which three interests form the basis of the PRINCE2 project management team structure?', options: ['Finance, Marketing, and Legal.', 'Management, Staff, and Consultants.', 'Business, User, and Supplier.', 'Hardware, Software, and Network.'], correct: 2 },
                    { question: 'Who is responsible for the day-to-day management of the project on behalf of the Project Board?', options: ['The Executive.', 'The Senior User.', 'The Project Manager.', 'The Team Manager.'], correct: 2 },
                ]
            },
            {
                id: 'p4',
                title: 'Manage by Stages',
                lessons: [
                    { title: 'Core Concept', content: 'A PRINCE2 project is planned, monitored, and controlled on a stage-by-stage basis. These management stages provide high-level control points for the Project Board.' },
                    { title: 'Commitment and Control', content: 'The Project Board commits to the project one stage at a time. At the end of each stage (a "Stage Boundary"), the Board reviews the Business Case, the stage\'s performance, and the plan for the next stage before deciding whether to proceed. This prevents a single, uncontrolled commitment to the entire project.' },
                    { title: 'Planning Horizon', content: 'It is impossible to plan a long project in detail from the start. A high-level project plan is created, and a detailed stage plan is created for the current stage only. This ensures a manageable planning horizon.' },
                ],
                quiz: [
                    { question: 'Why does PRINCE2 advocate for managing by stages?', options: ['To create more work for the project manager.', 'To provide control points for the Project Board to assess viability.', 'To make projects seem less complicated than they are.', 'To allow the team to take breaks between stages.'], correct: 1 },
                    { question: 'In a PRINCE2 project, a detailed plan is created for:', options: ['The entire project from the start.', 'The next management stage only.', 'Each week of the project.', 'The final stage only.'], correct: 1 },
                ]
            },
            {
                id: 'p5',
                title: 'Manage by Exception',
                lessons: [
                    { title: 'Core Concept', content: 'This principle enables efficient use of senior management time. The Project Board sets distinct responsibilities and tolerances for each level of management (Project Board, Project Manager, Team Manager). The higher level delegates the authority to the level below to work autonomously as long as they stay within those agreed tolerances.' },
                    { title: 'Tolerances', content: 'Tolerances are the permissible deviations from a plan\'s targets for time, cost, quality, scope, risk, and benefit. For example, a stage might be given a cost tolerance of +10%/-5%.' },
                    { title: 'The "Exception"', content: 'If a forecast predicts that one of these tolerances will be exceeded, it is called an "exception." The manager at that level must escalate the issue to the next level up for a decision. This means the Project Board is not bothered with minor issues but is immediately alerted to major ones.' },
                ],
                quiz: [
                    { question: 'What is an "exception" in a PRINCE2 context?', options: ['An unexpected problem that the team solves.', 'Any change requested by the customer.', 'A forecast deviation that will exceed a set tolerance.', 'A team member performing exceptionally well.'], correct: 2 },
                    { question: '"Manage by Exception" is designed to:', options: ['Ensure the Project Manager checks everything with the Project Board.', 'Give Team Managers full authority over the project.', 'Make efficient use of senior management time by only involving them in major decisions.', 'Eliminate all risks from the project.'], correct: 2 },
                ]
            },
            {
                id: 'p6',
                title: 'Focus on Products',
                lessons: [
                    { title: 'Core Concept', content: 'A PRINCE2 project is output-oriented, not activity-oriented. The focus is on defining and delivering products that meet their agreed quality requirements. A successful project delivers the required products that enable the desired benefits.' },
                    { title: 'Product Descriptions', content: 'Clarity is achieved through creating detailed Product Descriptions. These define each product\'s purpose, composition, derivation, format, and, crucially, the quality criteria it must meet and the methods to check it.' },
                    { title: 'Benefits of this Approach', content: 'This approach ensures that everyone (users, suppliers, managers) has a clear and shared understanding of what is being produced. It removes ambiguity and provides a solid baseline for planning and control.' },
                ],
                quiz: [
                    { question: 'What is the primary benefit of "Focus on Products"?', options: ['It makes planning faster.', 'It reduces the number of team members needed.', 'It ensures everyone is clear on what is being delivered, reducing ambiguity and risk.', 'It allows for more activities to be scheduled.'], correct: 2 },
                    { question: 'A Product Description should contain:', options: ['The names of the team members who will build it.', 'The hourly cost of the product.', 'The purpose, composition, and quality criteria of the product.', 'A list of activities needed to create it.'], correct: 2 },
                ]
            },
            {
                id: 'p7',
                title: 'Tailor to Suit the Project',
                lessons: [
                    { title: 'Core Concept', content: 'PRINCE2 is a universal framework, but it is not a "one size fits all" solution. It is designed to be tailored to suit the specific context of the project, considering its environment, size, complexity, importance, capability, and risk.' },
                    { title: 'What is Tailoring?', content: 'Tailoring is the process of adapting the method to the specific project. This might mean combining roles in a small project, using less formal documentation, or integrating the processes with other corporate standards. The goal is to apply a level of control and process that is appropriate, not burdensome.' },
                    { title: 'Maintaining Principles', content: 'Crucially, tailoring must not compromise the seven principles. All seven principles must be applied for a project to be considered a genuine PRINCE2 project. You can tailor the themes and processes, but not the principles.' },
                ],
                quiz: [
                    { question: 'What does "Tailor to Suit the Project" mean?', options: ['Ignoring the PRINCE2 principles.', 'Applying every single part of PRINCE2 rigidly.', 'Adapting the PRINCE2 method to the specific needs of the project.', 'Letting the team decide how to run the project.'], correct: 2 },
                    { question: 'When tailoring a PRINCE2 project, which element must NOT be altered or omitted?', options: ['The number of documents.', 'The seven principles.', 'The number of stages.', 'The specific roles on the Project Board.'], correct: 1 },
                ]
            },
        ]
    },
    {
        id: 'c2',
        title: 'The 7 Themes',
        description: 'The aspects of project management that must be addressed continuously throughout the project.',
        modules: [
            { id: 't1', title: 'Business Case', lessons: [{title: 'Summary', content: 'The Business Case theme provides the "why" of the project. It answers the question "Is the investment worthwhile?". This theme provides the mechanism to develop, verify, and maintain the project\'s justification.'}], quiz: [{ question: 'Which theme addresses the justification for the project?', options: ['Plans', 'Risk', 'Business Case', 'Quality'], correct: 2 }] },
            { id: 't2', title: 'Organization', lessons: [{title: 'Summary', content: 'The Organization theme defines and establishes the project\'s structure of accountability and responsibilities (the "who"). It defines the roles for the project management team to ensure all stakeholder interests are represented.'}], quiz: [{ question: 'The "who" of the project is defined by which theme?', options: ['Change', 'Organization', 'Progress', 'Risk'], correct: 1 }] },
            { id: 't3', title: 'Quality', lessons: [{title: 'Summary', content: 'The Quality theme defines and implements the means by which the project will create and verify products that are fit for purpose (the "what"). It involves defining the quality requirements and implementing quality controls.'}], quiz: [{ question: 'Defining "fit for purpose" products is the focus of which theme?', options: ['Quality', 'Plans', 'Progress', 'Business Case'], correct: 0 }] },
            { id: 't4', title: 'Plans', lessons: [{title: 'Summary', content: 'The Plans theme provides the framework to design, develop and maintain the project\'s plans (the "how", "how much", and "when"). Plans are the backbone of communication and control.'}], quiz: [{ question: 'Which theme answers the "how, how much, and when" questions?', options: ['Risk', 'Organization', 'Plans', 'Change'], correct: 2 }] },
            { id: 't5', title: 'Risk', lessons: [{title: 'Summary', content: 'The Risk theme is about identifying, assessing, and controlling uncertainty during the project. It aims to improve the project\'s ability to succeed by managing threats and opportunities.'}], quiz: [{ question: 'Managing project uncertainty is the core of which theme?', options: ['Risk', 'Quality', 'Progress', 'Organization'], correct: 0 }] },
            { id: 't6', title: 'Change', lessons: [{title: 'Summary', content: 'The Change theme addresses how to assess and act upon issues that have a potential impact on the project’s baseline (its agreed plans). This includes handling requests for change and unexpected problems (off-specifications).'}], quiz: [{ question: 'How does a PRINCE2 project handle requests for change?', options: ['It rejects all of them.', 'It uses the procedures defined in the Change theme.', 'It accepts all of them.', 'It pauses the project to decide.'], correct: 1 }] },
            { id: 't7', title: 'Progress', lessons: [{title: 'Summary', content: 'The Progress theme is about monitoring and comparing actual achievements against those planned. It answers "Where are we now, where will we end up, and should we carry on?".'}], quiz: [{ question: 'Tracking "where we are, where we are going, and should we carry on" is part of which theme?', options: ['Plans', 'Business Case', 'Organization', 'Progress'], correct: 3 }] },
        ]
    },
    {
        id: 'c3',
        title: 'The 7 Processes',
        description: 'The step-by-step activities required to direct, manage, and deliver a project successfully.',
        modules: [
            { id: 'pr1', title: 'Starting up a Project (SU)', lessons: [{title: 'Summary', content: 'This is a pre-project process. Its purpose is to perform the due diligence needed to ensure that a viable and worthwhile project is conceived and initiated. It creates the Project Brief and the Initiation Stage Plan.'}], quiz: [{ question: 'Which process happens before the project is formally initiated?', options: ['Closing a Project', 'Starting up a Project', 'Managing a Stage Boundary', 'Directing a Project'], correct: 1 }] },
            { id: 'pr2', title: 'Directing a Project (DP)', lessons: [{title: 'Summary', content: 'This process is performed by the Project Board throughout the project lifecycle. It enables the Board to be accountable for the project\'s success by making key decisions and exercising overall control, while delegating the day-to-day management to the Project Manager.'}], quiz: [{ question: 'Which process is primarily used by the Project Board?', options: ['Controlling a Stage', 'Managing Product Delivery', 'Directing a Project', 'Starting up a Project'], correct: 2 }] },
            { id: 'pr3', title: 'Initiating a Project (IP)', lessons: [{title: 'Summary', content: 'This process establishes solid foundations for the project. The main activity is to produce the Project Initiation Documentation (PID), which defines the project scope, plans, controls, and Business Case.'}], quiz: [{ question: 'The main output of the "Initiating a Project" process is the:', options: ['Business Case', 'Lessons Log', 'Project Initiation Documentation (PID)', 'End Project Report'], correct: 2 }] },
            { id: 'pr4', title: 'Controlling a Stage (CS)', lessons: [{title: 'Summary', content: 'This describes the day-to-day work of the Project Manager. It covers authorizing work, monitoring progress, dealing with issues and risks, and reporting progress to the Project Board via Highlight Reports.'}], quiz: [{ question: 'The day-to-day management of a stage is covered in which process?', options: ['Closing a Project', 'Directing a Project', 'Controlling a Stage', 'Managing a Stage Boundary'], correct: 2 }] },
            { id: 'pr5', title: 'Managing Product Delivery (MP)', lessons: [{title: 'Summary', content: 'This process manages the interface between the Project Manager and the Team Manager(s). It formalizes the acceptance of a Work Package, the execution of the work by the team, and the delivery of the completed products.'}], quiz: [{ question: 'The interface between the Project Manager and the teams creating the products is managed by:', options: ['Managing Product Delivery', 'Controlling a Stage', 'Initiating a Project', 'Directing a Project'], correct: 0 }] },
            { id: 'pr6', title: 'Managing a Stage Boundary (SB)', lessons: [{title: 'Summary', content: 'This process provides the Project Board with the key information to review the current stage\'s success, check the overall project viability, and approve the plan for the next stage. This is where the "go/no-go" decision is made.'}], quiz: [{ question: 'Reporting on the performance of a stage and planning the next is done in:', options: ['Closing a Project', 'Managing a Stage Boundary', 'Controlling a Stage', 'Starting up a Project'], correct: 1 }] },
            { id: 'pr7', title: 'Closing a Project (CP)', lessons: [{title: 'Summary', content: 'This process provides a fixed point to formally close the project. It involves gaining formal acceptance for the products, reviewing project performance against its baselines, assessing benefits, and addressing any open issues or risks.'}], quiz: [{ question: 'Which process ensures an orderly shutdown of the project?', options: ['Directing a Project', 'Managing a Stage Boundary', 'Controlling a Stage', 'Closing a Project'], correct: 3 }] },
        ]
    }
];

export const examQuestions = [
    { question: 'A key feature of PRINCE2 is its focus on:', options: ['The project team’s happiness', 'The business justification for the project', 'The number of hours worked', 'The latest technology'], correct: 1 },
    { question: 'The Project Board has three main roles. Which of the following is NOT one of them?', options: ['Executive', 'Senior User', 'Project Manager', 'Senior Supplier'], correct: 2 },
    { question: 'What is a "tolerance" in PRINCE2?', options: ['The amount of time a team member can be late', 'The permissible deviation allowed from a plan’s target without escalating to the next level of management', 'A type of project risk', 'The project’s contingency budget'], correct: 1 },
    { question: 'Which of the following is a PRINCE2 Principle?', options: ['Remain agile', 'Focus on products', 'Avoid all risks', 'Satisfy the customer'], correct: 1 },
    { question: 'The main purpose of the "Closing a Project" process is to:', options: ['Start planning the next project', 'Provide a fixed point at which acceptance for the project product is confirmed', 'Discipline team members who underperformed', 'Organize a party for the project team'], correct: 1 },
    { question: 'Which document contains the justification for the project?', options: ['The Project Plan', 'The Quality Register', 'The Business Case', 'The Risk Register'], correct: 2 },
    { question: 'The process of "Managing a Stage Boundary" is carried out by the:', options: ['Project Manager', 'Project Board', 'Team Manager', 'Project Support'], correct: 0 },
    { question: 'What does "Manage by Exception" enable?', options: ['The Project Manager to take any action they deem necessary', 'The Project Board to manage the project on a daily basis', 'Efficient use of senior management time as they are only involved when key decisions are needed', 'The project to ignore its original budget'], correct: 2 },
    { question: 'The "Organization" theme in PRINCE2 aims to define and establish:', options: ['The project’s schedule of activities', 'The project’s budget and costs', 'The project’s structure of accountability and responsibilities', 'The quality standards for the products'], correct: 2 },
    { question: 'Tailoring PRINCE2 means:', options: ['You only use the parts of the method you like', 'Adapting the method to the specific context of the project', 'Ignoring the principles', 'Using a different project management method'], correct: 1 },
    { question: 'What is the primary output of the "Initiating a Project" process?', options: ['Project Brief', 'End Stage Report', 'Lessons Report', 'Project Initiation Documentation (PID)'], correct: 3 },
    { question: 'Who is ultimately accountable for the project\'s success?', options: ['The Project Manager', 'The Executive on the Project Board', 'The Team Manager', 'The Senior User'], correct: 1 },
    { question: 'The "Progress" theme is primarily concerned with:', options: ['The quality of the final product', 'The day-to-day happiness of the team', 'The viability of the project against its plan and justification', 'The number of changes requested'], correct: 2 },
    { question: 'A "Work Package" is:', options: ['A type of project plan', 'A set of information about one or more required products, given by a Project Manager to a Team Manager', 'A report on project risks', 'A meeting to discuss progress'], correct: 1 },
    { question: 'Which plan provides the basis for day-to-day control by the Project Manager?', options: ['The Project Plan', 'The Team Plan', 'The Stage Plan', 'The Benefits Management Approach'], correct: 2 },
    { question: 'A "Lessons Report" is a key output of which process?', options: ['Starting up a Project', 'Closing a Project', 'Directing a Project', 'Controlling a Stage'], correct: 1 },
    { question: 'The "Change" theme provides a procedure for:', options: ['Changing team members', 'Altering the project budget without approval', 'Managing issues and changes to the project baseline in a controlled way', 'Changing the project\'s final deadline'], correct: 2 },
    { question: 'The Project Manager reports progress to the Project Board using a:', options: ['Checkpoint Report', 'Highlight Report', 'Work Package', 'Daily Log'], correct: 1 },
    { question: 'Which is NOT one of the seven PRINCE2 themes?', options: ['Risk', 'Quality', 'Scope', 'Communication'], correct: 3 },
    { question: 'What is the purpose of a Product Description?', options: ['To describe the person who will create the product', 'To provide a detailed description of the product\'s purpose, composition, and quality criteria', 'To detail the cost of the product', 'To provide a list of activities for the project'], correct: 1 },
];