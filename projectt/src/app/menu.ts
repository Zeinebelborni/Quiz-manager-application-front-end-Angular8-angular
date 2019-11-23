interface MenuItem {
  label: string;
  path?: string;
  icon?: { class: string, content: string };
  isLabel?: boolean;
  children?: MenuItem[];
}
export const menu: MenuItem[] = [
  {
    label: 'DASHBOARDS',
    isLabel: true
  },
  {
    path: '/dashboard/pro',
    label: 'Dashboard Pro',
    icon: { class: 'material-icons', content: 'home' }
  },

  {
    label: 'Quizzes',
    icon: { class: 'material-icons', content: 'question_answer' },
    children: [
      { path: '/quizzes/all', label: 'All Quizzes' },
      { path: '/quizzes/single', label: 'New Quizz' },
      { path: '/quizzes/addtoquiz', label: 'Add Questions to Quiz' },
      
      
      
    ]
  },

 
  {
    path: '/user/profile',
    label: 'Your Profile',
    icon: { class: 'material-icons', content: 'person' }
  },

 
  {
    label: 'Plan & Pricing',
    icon: { class: 'material-icons', content: 'attach_money' },
    children: [
      { path: '/shop/plan', label: 'Plan' },
      { path: '/shop/pricing', label: 'Pricing' },
      

    ]
  },
  {
    path: '/user/contactus',
    label: 'Contact us',
    icon: { class: 'material-icons', content: 'message' }
  },
 
 
 
  {
    path: '/404',
    label: '404',
    icon: { class: 'material-icons', content: 'error_outline' }
  },
  
 
];
