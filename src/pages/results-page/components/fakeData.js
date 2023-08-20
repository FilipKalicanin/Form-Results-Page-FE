let fakeData = [
  {
    overall: {
      id: 2,
      name: 'some-PDF-fileName.pdf',
      overall_score: -2,
      decision: 'Failed!',
    },
    details: [
      ['users_referenced', 1],
      ['scalling_plans', 2],
      ['large_market_opp', 3],
    ],
  },
  {
    overall: {
      id: 2,
      name: 'some-PDF-fileName.pdf',
      overall_score: -2,
      decision: 'Failed!',
    },
    details: [
      ['users_referenced', 1],
      ['scalling_plans', 2],
      ['large_market_opp', 3],
      ['founder_background', 4],
      ['engineering_discussed', 5],
      ['competative_pressures', 6],
      ['app_based', 7],
      ['structured_approach', 8],
    ],
  },
  {
    overall: {
      id: 1,
      name: 'Airbotics.pdf',
      overall_score: 1,
      decision: 'Passed!',
    },
    details: [
      ['Customer LTV Mentioned?', 0],
      ['Top Uni Referenced?', 0],
      ['Fintech Component?', 0],
      ['Milestones Referenced?', 0],
      ['Economics Referenced?', 0],
      ['Users Referenced?', 0],
      ['Scaling Plans Mentioned?', 0],
      ['Large Market Opportunity?', 0],
      ['Social Media Discussed?', 0],
      ['MVP?', 0],
      ['Building Referenced?', 1],
      ['"Start-Up" Term Mentioned?', 0],
      ['Cost Savings Highlighted?', 0],
      ['Founder Background Highlighted?', 0],
      ['McKinsey Referenced?', 0],
      ['Efficiency Improvements?', 0],
      ['ROI Mentioned?', 0],
      ['Gross Profit/Margin Discussed?', 0],
      ['Engineering Discussed?', 1],
      ['Industry Shift?', 0],
      ['Competitive Pressures', 0],
      ['Pricing Discussed?', 2],
      ['"Massive" Market Opportunity?', 0],
      ['Issues with Traditional Approach Discussed?', 0],
      ['Unit Economics Mentioned?', 0],
      ['SEIS Mentioned?', 0],
      ['Mortgage Element?', 0],
      ['Product Reduces Time?', 0],
      ['Loss Prevention?', 0],
      ['Regulated?', 0],
      ['eCommerce Elements?', 0],
      ['App-Based Offering?', -2],
      ['Ideas Mentioned?', 0],
      ['Networking Mentioned?', 0],
      ['Academic Element?', 0],
      ['Scientific Element?', 0],
      ['End-to-End Solution?', 0],
      ['Transparency Improvements?', 0],
      ['Structured Approach?', 0],
      ['Bank Element?', 0],
      ['Student Element?', 0],
      ['Automation Function?', 0],
      ['Actvities Component?', 0],
      ['Contracts Closed?', 1],
      ['Optimisation Element?', 0],
      ['Cheaper than Competitors?', 0],
      ['App Notifications Mentioned?', -2],
      ['"In-App" Mentioned?', 0],
      ['Customer/User Conversion Mentioned?', 0],
      ['Runway Mentioned?', 0],
      ['CFO?', 0],
      ['Churn Mentioned?', 0],
      ['Chairman?', 0],
      ["World's First?", 0],
      ['Product Improves Speed?', 0],
      ['users_referenced', 1],
      ['scalling_plans', 2],
      ['large_market_opp', 3],
      ['founder_background', 4],
      ['engineering_discussed', 5],
      ['competative_pressures', 6],
      ['app_based', 7],
      ['structured_approach', 8],
      ['users_referenced', 1],
      ['scalling_plans', 2],
      ['large_market_opp', 3],
      ['founder_background', 4],
      ['engineering_discussed', 5],
      ['competative_pressures', 6],
      ['app_based', 7],
      ['structured_approach', 8],
    ],
  },

  // {
  //   overall: {
  //     id: 3,
  //     name: 'some-PDF-fileName.pdf', //string
  //     overall_score: 35, //number
  //     decision: 'Passed!', //boolean
  //   },
  //   details: {
  //     users_referenced: 3,
  //     scalling_plans: 5,
  //     large_market_opp: 7,
  //     founder_background: -2,
  //     engineering_discussed: -5,
  //     competative_pressures: 8,
  //     app_based: 16,
  //     structured_approach: -20,
  //   },
  // },
  // {
  //   overall: {
  //     id: 4,
  //     name: 'some-PDF-fileName.pdf', //string
  //     overall_score: 40, //number
  //     decision: 'Passed!', //boolean
  //   },
  //   details: {
  //     users_referenced: 3,
  //     scalling_plans: 5,
  //     large_market_opp: 7,
  //     founder_background: -2,
  //     engineering_discussed: -5,
  //     competative_pressures: 8,
  //     app_based: 16,
  //     structured_approach: -20,
  //   },
  // },
  // {
  //   overall: {
  //     id: 5,
  //     name: 'some-PDF-fileName.pdf', //string
  //     overall_score: -26, //number
  //     decision: 'Failed!', //boolean
  //   },
  //   details: {
  //     users_referenced: 3,
  //     scalling_plans: 5,
  //     large_market_opp: 7,
  //     founder_background: -2,
  //     engineering_discussed: -5,
  //     competative_pressures: 8,
  //     app_based: 16,
  //     structured_approach: -20,
  //   },
  // },
  // {
  //   overall: {
  //     id: 6,
  //     name: 'some-PDF-fileName.pdf', //string
  //     overall_score: -48, //number
  //     decision: 'Failed!', //boolean
  //   },
  //   details: {
  //     users_referenced: 3,
  //     scalling_plans: 5,
  //     large_market_opp: 7,
  //     founder_background: -2,
  //     engineering_discussed: -5,
  //     competative_pressures: 8,
  //     app_based: 16,
  //     structured_approach: -20,
  //   },
  // },
  // {
  //   overall: {
  //     id: 7,
  //     name: 'some-PDF-fileName.pdf', //string
  //     overall_score: 99, //number
  //     decision: 'Passed!', //boolean
  //   },
  //   details: {
  //     users_referenced: 3,
  //     scalling_plans: 5,
  //     large_market_opp: 7,
  //     founder_background: -2,
  //     engineering_discussed: -5,
  //     competative_pressures: 8,
  //     app_based: 16,
  //     structured_approach: -20,
  //   },
  // },
];

export default fakeData;
