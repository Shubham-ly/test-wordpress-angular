import type { Post } from './post';

export type JobType = {
  location: string;
  experience: string;
  introduction: string;
  qualifications: string;
  roles_and_responsibilites: string;
  additional_experience: string;
  notice_period: string;
  salary: string;
  department: {
    id: number;
    name: string;
    slug: string;
    department_icon: string;
    background_color: string;
    text_color: string;
  };
} & Post;
