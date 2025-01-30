import { Resource } from '../types/resource';

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Dementia',
    type: 'guide',
    description: 'Comprehensive guide about dementia types, symptoms, and progression',
    category: 'Education',
    url: '/resources/understanding-dementia'
  },
  {
    id: '2',
    title: "Caregiver's Handbook",
    type: 'pdf',
    description: 'Essential information for family members and caregivers',
    category: 'Caregiving',
    url: '/resources/caregivers-handbook'
  },
  {
    id: '3',
    title: 'Early Signs of Dementia',
    type: 'article',
    description: 'Learn to recognize early warning signs of dementia',
    category: 'Health',
    url: '/early-signs'
  },
  {
    id: '4',
    title: 'Support Services Guide',
    type: 'guide',
    description: 'Available support services and how to access them',
    category: 'Support',
    url: '/support'
  }
];