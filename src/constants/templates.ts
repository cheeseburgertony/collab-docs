// export const templates = [
//   {
//     id: "blank",
//     label: "Blank Document",
//     imageUrl: "/blank-document.svg",
//     initialContent: "",
//   },
//   {
//     // 软件提案
//     id: "software-proposal",
//     label: "Software Proposal",
//     imageUrl: "/software-proposal.svg",
//     initialContent: `
//       <h1>Software Proposal</h1>
//       <h2>Project Title</h2>
//       <p><strong>Client:</strong> [Client Name]</p>
//       <p><strong>Date:</strong> [Proposal Date]</p>
//       <h3>Introduction</h3>
//       <p>This proposal outlines the software solution we propose to develop for [Client Name]. The solution aims to address [specific problem or need].</p>
//       <h3>Objectives</h3>
//       <ul>
//         <li>Objective 1</li>
//         <li>Objective 2</li>
//         <li>Objective 3</li>
//       </ul>
//       <h3>Scope of Work</h3>
//       <p>The scope of work includes the following phases:</p>
//       <ol>
//         <li>Requirement Analysis</li>
//         <li>Design</li>
//         <li>Development</li>
//         <li>Testing</li>
//         <li>Deployment</li>
//       </ol>
//       <h3>Timeline</h3>
//       <p>The project is expected to be completed within [X] weeks.</p>
//       <h3>Budget</h3>
//       <p>The estimated budget for this project is $[X].</p>
//     `,
//   },
//   {
//     // 项目提案
//     id: "project-proposal",
//     label: "Project Proposal",
//     imageUrl: "/project-proposal.svg",
//     initialContent: `
//       <h1>Project Proposal</h1>
//       <h2>Project Title</h2>
//       <p><strong>Prepared by:</strong> [Your Name]</p>
//       <p><strong>Date:</strong> [Proposal Date]</p>
//       <h3>Executive Summary</h3>
//       <p>This proposal outlines the plan for [Project Name], which aims to [briefly describe the project's purpose and goals].</p>
//       <h3>Background</h3>
//       <p>[Provide background information on the problem or opportunity the project addresses.]</p>
//       <h3>Objectives</h3>
//       <ul>
//         <li>Objective 1</li>
//         <li>Objective 2</li>
//         <li>Objective 3</li>
//       </ul>
//       <h3>Methodology</h3>
//       <p>The project will be executed in the following phases:</p>
//       <ol>
//         <li>Phase 1: Planning</li>
//         <li>Phase 2: Execution</li>
//         <li>Phase 3: Monitoring and Control</li>
//         <li>Phase 4: Closure</li>
//       </ol>
//       <h3>Budget</h3>
//       <p>The total estimated budget for this project is $[X].</p>
//     `,
//   },
//   {
//     // 商业信函
//     id: "business-letter",
//     label: "Business Letter",
//     imageUrl: "/business-letter.svg",
//     initialContent: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//         <p>[Your Name]<br>
//         [Your Position]<br>
//         [Your Company]<br>
//         [Your Address]<br>
//         [City, State, ZIP Code]<br>
//         [Email Address]<br>
//         [Phone Number]</p>
//         <p>[Date]</p>
//         <p>[Recipient's Name]<br>
//         [Recipient's Position]<br>
//         [Recipient's Company]<br>
//         [Recipient's Address]<br>
//         [City, State, ZIP Code]</p>
//         <p>Dear [Recipient's Name],</p>
//         <p>I am writing to [state the purpose of the letter]. [Provide details about the purpose of the letter, including any relevant background information.]</p>
//         <p>[Include any additional information or details that support the purpose of the letter.]</p>
//         <p>Thank you for your attention to this matter. I look forward to your response.</p>
//         <p>Sincerely,</p>
//         <p>[Your Name]</p>
//       </div>
//     `,
//   },
//   {
//     // 简历
//     id: "resume",
//     label: "Resume",
//     imageUrl: "/resume.svg",
//     initialContent: `
//       <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
//         <h1 style="text-align: center;">[Your Name]</h1>
//         <p style="text-align: center;">[Your Address] | [City, State, ZIP Code] | [Phone Number] | [Email Address]</p>
//         <h2>Professional Summary</h2>
//         <p>[Write a brief summary of your professional background, skills, and career goals.]</p>
//         <h2>Work Experience</h2>
//         <h3>[Job Title]</h3>
//         <p><strong>[Company Name]</strong> | [Start Date] - [End Date]</p>
//         <ul>
//           <li>[Responsibility/Achievement 1]</li>
//           <li>[Responsibility/Achievement 2]</li>
//           <li>[Responsibility/Achievement 3]</li>
//         </ul>
//         <h3>[Job Title]</h3>
//         <p><strong>[Company Name]</strong> | [Start Date] - [End Date]</p>
//         <ul>
//           <li>[Responsibility/Achievement 1]</li>
//           <li>[Responsibility/Achievement 2]</li>
//           <li>[Responsibility/Achievement 3]</li>
//         </ul>
//         <h2>Education</h2>
//         <p><strong>[Degree]</strong><br>
//         [Institution Name], [City, State]<br>
//         [Graduation Date]</p>
//         <h2>Skills</h2>
//         <ul>
//           <li>[Skill 1]</li>
//           <li>[Skill 2]</li>
//           <li>[Skill 3]</li>
//         </ul>
//       </div>
//     `,
//   },
//   {
//     // 求职信
//     id: "cover-letter",
//     label: "Cover Letter",
//     imageUrl: "/cover-letter.svg",
//     initialContent: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//         <p>[Your Name]<br>
//         [Your Address]<br>
//         [City, State, ZIP Code]<br>
//         [Email Address]<br>
//         [Phone Number]</p>
//         <p>[Date]</p>
//         <p>[Hiring Manager's Name]<br>
//         [Company Name]<br>
//         [Company Address]<br>
//         [City, State, ZIP Code]</p>
//         <p>Dear [Hiring Manager's Name],</p>
//         <p>I am writing to express my interest in the [Job Title] position at [Company Name], as advertised on [where you found the job posting]. With my background in [your field or industry], I am confident in my ability to contribute effectively to your team.</p>
//         <p>In my previous role at [Previous Company Name], I [describe a key achievement or responsibility that is relevant to the job you're applying for]. This experience has equipped me with [mention specific skills or knowledge that are relevant to the job].</p>
//         <p>I am particularly drawn to [Company Name] because of [mention something specific about the company or its mission that resonates with you]. I am excited about the opportunity to bring my skills in [mention specific skills] to your team and help [mention a goal or project the company is working on].</p>
//         <p>Thank you for considering my application. I look forward to the possibility of discussing how I can contribute to [Company Name]. Please find my resume attached for your review.</p>
//         <p>Sincerely,</p>
//         <p>[Your Name]</p>
//       </div>
//     `,
//   },
//   {
//     // 信件
//     id: "letter",
//     label: "Letter",
//     imageUrl: "/letter.svg",
//     initialContent: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//         <p>[Your Name]<br>
//         [Your Address]<br>
//         [City, State, ZIP Code]<br>
//         [Email Address]<br>
//         [Phone Number]</p>
//         <p>[Date]</p>
//         <p>[Recipient's Name]<br>
//         [Recipient's Address]<br>
//         [City, State, ZIP Code]</p>
//         <p>Dear [Recipient's Name],</p>
//         <p>I am writing to [state the purpose of the letter]. [Provide details about the purpose of the letter, including any relevant background information.]</p>
//         <p>[Include any additional information or details that support the purpose of the letter.]</p>
//         <p>Thank you for your attention to this matter. I look forward to your response.</p>
//         <p>Sincerely,</p>
//         <p>[Your Name]</p>
//       </div>
//     `,
//   },
// ];

export const templates = [
  {
    id: "blank",
    label: "空白文档",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "软件提案",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>软件提案</h1>
      <h2>项目名称</h2>
      <p><strong>客户：</strong> [客户名称]</p>
      <p><strong>日期：</strong> [提案日期]</p>
      <h3>引言</h3>
      <p>本提案旨在为[客户名称]开发一套软件解决方案，以解决[具体问题或需求]。</p>
      <h3>目标</h3>
      <ul>
        <li>目标 1</li>
        <li>目标 2</li>
        <li>目标 3</li>
      </ul>
      <h3>工作范围</h3>
      <p>项目的工作范围包括以下阶段：</p>
      <ol>
        <li>需求分析</li>
        <li>设计</li>
        <li>开发</li>
        <li>测试</li>
        <li>部署</li>
      </ol>
      <h3>时间表</h3>
      <p>项目预计在[X]周内完成。</p>
      <h3>预算</h3>
      <p>项目预算为人民币[X]元。</p>
    `,
  },
  {
    id: "project-proposal",
    label: "项目提案",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>项目提案</h1>
      <h2>项目名称</h2>
      <p><strong>提案人：</strong> [您的姓名]</p>
      <p><strong>日期：</strong> [提案日期]</p>
      <h3>摘要</h3>
      <p>本提案旨在为[项目名称]制定计划，目标是[简要描述项目的目的和目标]。</p>
      <h3>背景</h3>
      <p>[提供项目所解决的问题或机会的背景信息。]</p>
      <h3>目标</h3>
      <ul>
        <li>目标 1</li>
        <li>目标 2</li>
        <li>目标 3</li>
      </ul>
      <h3>方法论</h3>
      <p>项目将分为以下几个阶段执行：</p>
      <ol>
        <li>阶段 1：规划</li>
        <li>阶段 2：执行</li>
        <li>阶段 3：监控与控制</li>
        <li>阶段 4：收尾</li>
      </ol>
      <h3>预算</h3>
      <p>项目总预算为人民币[X]元。</p>
    `,
  },
  {
    id: "business-letter",
    label: "商业信函",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p>[您的姓名]<br>
        [您的职位]<br>
        [您的公司]<br>
        [您的地址]<br>
        [城市, 省份, 邮政编码]<br>
        [电子邮件地址]<br>
        [电话号码]</p>
        <p>[日期]</p>
        <p>[收件人姓名]<br>
        [收件人职位]<br>
        [收件人公司]<br>
        [收件人地址]<br>
        [城市, 省份, 邮政编码]</p>
        <p>尊敬的[收件人姓名]：</p>
        <p>我写此信是为了[说明信函的目的]。[提供与信函目的相关的详细信息，包括背景信息。]</p>
        <p>[包括支持信函目的的其他信息或细节。]</p>
        <p>感谢您对此事的关注，期待您的回复。</p>
        <p>此致，</p>
        <p>[您的姓名]</p>
      </div>
    `,
  },
  {
    id: "resume",
    label: "简历",
    imageUrl: "/resume.svg",
    initialContent: `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
        <h1 style="text-align: center;">[您的姓名]</h1>
        <p style="text-align: center;">[您的地址] | [城市, 省份, 邮政编码] | [电话号码] | [电子邮件地址]</p>
        <h2>个人简介</h2>
        <p>[简要描述您的职业背景、技能和职业目标。]</p>
        <h2>工作经历</h2>
        <h3>[职位名称]</h3>
        <p><strong>[公司名称]</strong> | [开始日期] - [结束日期]</p>
        <ul>
          <li>[职责/成就 1]</li>
          <li>[职责/成就 2]</li>
          <li>[职责/成就 3]</li>
        </ul>
        <h3>[职位名称]</h3>
        <p><strong>[公司名称]</strong> | [开始日期] - [结束日期]</p>
        <ul>
          <li>[职责/成就 1]</li>
          <li>[职责/成就 2]</li>
          <li>[职责/成就 3]</li>
        </ul>
        <h2>教育背景</h2>
        <p><strong>[学位]</strong><br>
        [学校名称], [城市, 省份]<br>
        [毕业日期]</p>
        <h2>技能</h2>
        <ul>
          <li>[技能 1]</li>
          <li>[技能 2]</li>
          <li>[技能 3]</li>
        </ul>
      </div>
    `,
  },
  {
    id: "cover-letter",
    label: "求职信",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p>[您的姓名]<br>
        [您的地址]<br>
        [城市, 省份, 邮政编码]<br>
        [电子邮件地址]<br>
        [电话号码]</p>
        <p>[日期]</p>
        <p>[招聘经理姓名]<br>
        [公司名称]<br>
        [公司地址]<br>
        [城市, 省份, 邮政编码]</p>
        <p>尊敬的[招聘经理姓名]：</p>
        <p>我写此信是为了申请[公司名称]发布的[职位名称]一职。凭借我在[您的领域或行业]的背景，我相信我能够为贵公司团队做出积极贡献。</p>
        <p>在[前公司名称]的工作期间，我[描述与申请职位相关的关键成就或职责]。这段经历使我掌握了[提及与职位相关的具体技能或知识]。</p>
        <p>我对[公司名称]特别感兴趣，因为[提及公司或使命中吸引您的具体内容]。我期待有机会将我的[提及具体技能]应用到贵公司团队中，并帮助[提及公司正在推进的目标或项目]。</p>
        <p>感谢您考虑我的申请。期待有机会进一步讨论我如何为[公司名称]贡献力量。随信附上我的简历，供您审阅。</p>
        <p>此致，</p>
        <p>[您的姓名]</p>
      </div>
    `,
  },
  {
    id: "letter",
    label: "信件",
    imageUrl: "/letter.svg",
    initialContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p>[您的姓名]<br>
        [您的地址]<br>
        [城市, 省份, 邮政编码]<br>
        [电子邮件地址]<br>
        [电话号码]</p>
        <p>[日期]</p>
        <p>[收件人姓名]<br>
        [收件人地址]<br>
        [城市, 省份, 邮政编码]</p>
        <p>尊敬的[收件人姓名]：</p>
        <p>我写此信是为了[说明信件的目的]。[提供与信件目的相关的详细信息，包括背景信息。]</p>
        <p>[包括支持信件目的的其他信息或细节。]</p>
        <p>感谢您对此事的关注，期待您的回复。</p>
        <p>此致，</p>
        <p>[您的姓名]</p>
      </div>
    `,
  },
];
