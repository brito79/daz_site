export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'guide' | 'video' | 'pdf';
  description: string;
  category: string;
  url: string;
}