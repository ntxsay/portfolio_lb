export interface IProjectSchema {
    id: number,
    releaseDate: string,
    projectName: string,
    category: string,
    status: string,
    description: string,
    difficulty: IDifficultySchema,
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

interface IDifficultySchema {
    encountered: string,
    solution: string
}