export interface ISkillSchema {
    id: number,
    name: string,
    description: string,
    icon: string,
    iconAlt: string,
    skillContainerName: string,
    skills: ISkillContainerSchema[]
}

interface ISkillContainerSchema {
    id: number,
    name: string,
    icon: string,
    iconAlt: string,
}