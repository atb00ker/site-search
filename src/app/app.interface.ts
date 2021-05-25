// Categories JSON
export interface SiteCategory {
    title: string;
    tag: string;
    icon?: string;
    iconViewbox?: string;
    description?: string;
    theme?: string;
}

export interface Site {
    title: string;
    description?: string;
    image?: string;
    link: string;
    tags: Array<string>;
}
