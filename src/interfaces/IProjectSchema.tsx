export interface IProjectSchema {
    projectName: string,
    status: string,
    description: string,
    supportedPlatforms: string[],
    languages: string[],
    framework: string,
    icon: string | null,
    iconAlt: string | undefined,
    medias: string[],
    links: IProjectLinkSchema[]
}

interface IProjectLinkSchema {
    name: string,
    url: string
}