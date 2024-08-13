export interface IProjectSchema {
    id: number,
    projectName: string,
    category: string,
    status: string,
    description: string,
    supportedPlatforms: string[],
    languages: string[],
    framework: string,
    icon: string | null,
    iconAlt: string | undefined,
    iconBackgroundColor: string,
    medias: string[],
    links: IProjectLinkSchema[]
}

interface IProjectLinkSchema {
    name: string,
    url: string
}