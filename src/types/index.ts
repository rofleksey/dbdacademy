export interface Feature {
    icon: string;
    title: string;
    description: string;
    color: string;
}

export interface CurriculumItem {
    title: string;
    description: string;
    weeks: number;
    topics: string[];
}

export interface Testimonial {
    name: string;
    role: string;
    content: string;
    beforeRank: string;
    afterRank: string;
    avatarColor: string;
}